import { denormalisedResponseEntities } from '../../util/data';
import { storableError } from '../../util/errors';
import { util as sdkUtil } from '../../util/sdkLoader';
import { types as sdkTypes } from '../../util/sdkLoader';

import axios from 'axios';
const { UUID } = sdkTypes;

// ================ Action types ================ //

export const SET_INITIAL_STATE = 'app/LandingPage/SET_INITIAL_STATE';

export const QUERY_REVIEWS_REQUEST = 'app/LandingPage/QUERY_REVIEWS_REQUEST';
export const QUERY_REVIEWS_SUCCESS = 'app/LandingPage/QUERY_REVIEWS_SUCCESS';
export const QUERY_REVIEWS_ERROR = 'app/LandingPage/QUERY_REVIEWS_ERROR';

// ================ Reducer ================ //

const initialState = {
  reviews: [],
  queryReviewsError: null,
};

export default function profilePageReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case SET_INITIAL_STATE:
      return { ...initialState };
    case QUERY_REVIEWS_REQUEST:
      return { ...state, queryReviewsError: null };
    case QUERY_REVIEWS_SUCCESS:
      return { ...state, reviews: payload };
    case QUERY_REVIEWS_ERROR:
      return { ...state, reviews: [], queryReviewsError: payload };
    default:
      return state;
  }
}

// ================ Action creators ================ //

export const setInitialState = () => ({
  type: SET_INITIAL_STATE,
});

export const queryReviewsRequest = () => ({
  type: QUERY_REVIEWS_REQUEST,
});

export const queryReviewsSuccess = reviews => ({
  type: QUERY_REVIEWS_SUCCESS,
  payload: reviews,
});

export const queryReviewsError = e => ({
  type: QUERY_REVIEWS_ERROR,
  error: true,
  payload: e,
});

// ================ Thunks ================ //

const getUser = userId => (dispatch, getState, sdk) => {
  return sdk.users
    .show({
      id: userId,
      include: ['profileImage'],
      'fields.image': ['variants.square-small', 'variants.square-small2x'],
    })
    .then(response => {
      return denormalisedResponseEntities(response);
    })
    .catch(e => dispatch(queryReviewsError(storableError(e))));
};

const getListingInformation = listingUUID => (dispatch, getState, sdk) => {
  const listingId = new UUID(listingUUID);
  const params = {
    id: listingId,
    include: ['author', 'author.profileImage', 'images'],
    'fields.image': [
      // Listing page
      'variants.landscape-crop',
      'variants.landscape-crop2x',
      'variants.landscape-crop4x',
      'variants.landscape-crop6x',
    ],
    'imageVariant.portrait-crop': sdkUtil.objectQueryString({
      w: 400,
      h: 600,
      fit: 'scale',
    }),
    'imageVariant.portrait-crop2x': sdkUtil.objectQueryString({
      w: 800,
      h: 1200,
      fit: 'scale',
    }),
  };
  return sdk.listings
    .show(params)
    .then(response => {
      console.log(response);
      return denormalisedResponseEntities(response);
    })
    .catch(e => {
      dispatch(queryReviewsError(storableError(e)));
    });
};

export const queryAllReviews = userId => (dispatch, getState, sdk) => {
  return axios
    .get('/reviewsAll')
    .then(response => {
      let reviews = response.data;

      let fetchPromises = [];
      reviews.forEach(element => {
        const listingUUID = element.listingUUID;
        const userUUID = element.userUUID;
        const fetchListingPromise = dispatch(getListingInformation(listingUUID)).then(data => {
          element.listing = data[0];
        });
        fetchPromises.push(fetchListingPromise);
        if (userUUID) {
          const fetchUserPromise = dispatch(getUser(userUUID)).then(data => {
            element.user = data[0];
          });
          fetchPromises.push(fetchUserPromise);
        }
      });
      Promise.all(fetchPromises).then(() => {
        dispatch(queryReviewsSuccess(reviews));
      });
    })
    .catch(e => dispatch(queryReviewsError(e)));
};

export const loadData = params => (dispatch, getState, sdk) => {
  return dispatch(queryAllReviews());
};
