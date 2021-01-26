import merge from 'lodash/merge';
import { ensureCurrentUser, denormalisedResponseEntities } from '../../util/data';

import { storableError } from '../../util/errors';
import { types as sdkTypes } from '../../util/sdkLoader';
import { util as sdkUtil } from '../../util/sdkLoader';
import { fetchCurrentUser } from '../../ducks/user.duck';

import axios from 'axios';

const { UUID } = sdkTypes;

// ================ Action types ================ //

export const SAVE_REVIEW_DETAILS_REQUEST = 'app/ReviewDetailsPage/SAVE_REVIEW_DETAILS_REQUEST';
export const SAVE_REVIEW_DETAILS_SUCCESS = 'app/ReviewDetailsPage/SAVE_REVIEW_DETAILS_SUCCESS';
export const SAVE_REVIEW_ERROR = 'app/ReviewDetailsPage/SAVE_REVIEW_ERROR';

export const SAVE_REVIEW_CLEAR = 'app/ContactDetailsPage/SAVE_CONTACT_DETAILS_CLEAR';

export const FETCH_REVIEWS_REQUEST = 'app/ReviewDetailsPage/FETCH_REVIEWS_REQUEST';
export const FETCH_REVIEWS_SUCCESS = 'app/ReviewDetailsPage/FETCH_REVIEWS_SUCCESS';
export const FETCH_REVIEWS_ERROR = 'app/ReviewDetailsPage/FETCH_REVIEWS_ERROR';

export const FETCH_ORDERS_REQUEST = 'app/ReviewDetailsPage/FETCH_ORDERS_REQUEST';
export const FETCH_ORDERS_SUCCESS = 'app/ReviewDetailsPage/FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_ERROR = 'app/ReviewDetailsPage/FETCH_ORDERS_ERROR';

// ================ Reducer ================ //

const initialState = {
  ordersToReview: [],
  reviews: [],
  fetchReviewsError: null,
  fetchOrdersError: null,
  saveReviewError: null,
  saveReviewInProgress: false,
  reviewDetailsChanged: false,
  reviewSubmitted: false,
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case SAVE_REVIEW_DETAILS_REQUEST:
      return {
        ...state,
        saveReviewInProgress: true,
        saveReviewError: null,
        // add review
        reviews: [action.payload, ...state.reviews],
      };
    case SAVE_REVIEW_DETAILS_SUCCESS:
      return {
        ...state,
        saveReviewInProgress: false,
        reviewDetailsChanged: true,
        reviewSubmitted: true,
      };
    case SAVE_REVIEW_ERROR:
      return {
        ...state,
        saveReviewInProgress: false,
        reviewSubmitted: false,
        saveReviewError: payload,
      };

    case SAVE_REVIEW_CLEAR:
      return {
        ...state,
        saveReviewInProgress: false,
        saveReviewError: null,
        reviewDetailsChanged: false,
        reviewSubmitted: false,
      };

    case FETCH_REVIEWS_REQUEST:
      return { ...state, fetchReviewsError: null };
    case FETCH_REVIEWS_SUCCESS:
      return { ...state, reviews: payload };
    case FETCH_REVIEWS_ERROR:
      return { ...state, fetchReviewsError: payload };

    case FETCH_ORDERS_REQUEST:
      return { ...state, fetchOrdersError: null };
    case FETCH_ORDERS_SUCCESS:
      return { ...state, ordersToReview: payload };
    case FETCH_ORDERS_ERROR:
      return { ...state, fetchOrdersError: payload };

    default:
      return state;
  }
}

// ================ Action creators ================ //

export const saveReviewDetailsRequest = () => ({ type: SAVE_REVIEW_DETAILS_REQUEST });
export const saveReviewDetailsSuccess = review => ({
  type: SAVE_REVIEW_DETAILS_SUCCESS,
  payload: review,
});
export const saveReviewlError = error => ({
  type: SAVE_REVIEW_ERROR,
  payload: error,
  error: true,
});
export const saveReviewDetailsClear = () => ({ type: SAVE_REVIEW_CLEAR });

export const fetchReviewsRequest = () => ({ type: FETCH_REVIEWS_REQUEST });
export const fetchReviewsSuccess = reviews => ({ type: FETCH_REVIEWS_SUCCESS, payload: reviews });
export const fetchReviewsError = error => ({
  type: FETCH_REVIEWS_ERROR,
  error: true,
  payload: error,
});

export const fetchOrdersRequest = () => ({ type: FETCH_ORDERS_REQUEST });
export const fetchOrdersSuccess = orders => ({ type: FETCH_ORDERS_SUCCESS, payload: orders });
export const fetchOrdersError = error => ({
  type: FETCH_ORDERS_ERROR,
  error: true,
  payload: error,
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
      return response;
    })
    .catch(e => dispatch(fetchReviewsError(storableError(e))));
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

      // Social media
      'variants.facebook',
      'variants.twitter',

      // Image carousel
      'variants.scaled-small',
      'variants.scaled-medium',
      'variants.scaled-large',
      'variants.scaled-xlarge',

      // Avatars
      'variants.square-small',
      'variants.square-small2x',

      //custom variants
      'variants.portrait-crop',
      'variants.portrait-crop2x',
    ],
    'imageVariant.portrait-crop': sdkUtil.objectQueryString({
      w: 400,
      h: 600,
      fit: 'crop',
    }),
    'imageVariant.portrait-crop2x': sdkUtil.objectQueryString({
      w: 800,
      h: 1200,
      fit: 'crop',
    }),
  };
  return sdk.listings
    .show(params)
    .then(response => {
      console.log('DAMN DATA');
      console.log(response);
      return denormalisedResponseEntities(response);
    })
    .catch(e => {
      dispatch(fetchOrdersError(storableError(e)));
    });
};

export const fetchOrders = userEmail => (dispatch, getState, sdk) => {
  console.log('HERE I AM FETCHING DAMN ORDERS');
  console.log(getState().user);
  dispatch(fetchOrdersRequest());
  return axios
    .get(`/orders/${userEmail}`)
    .then(response => {
      let orders = response.data;
      let featchListingPromises = [];
      orders.forEach(element => {
        const listingUUID = element.listingUUID;

        const featchListingPromise = dispatch(getListingInformation(listingUUID)).then(data => {
          console.log('DENORMALIZED HELL');
          console.log(data[0]);
          element.listing = data[0];
        });
        featchListingPromises.push(featchListingPromise);
      });
      Promise.all(featchListingPromises).then(() => {
        dispatch(fetchOrdersSuccess(orders));
      });
    })
    .catch(e => {
      dispatch(fetchOrdersError(storableError(e)));
    });
};

export const fetchReviews = userEmail => (dispatch, getState, sdk) => {
  console.log(userEmail);
  dispatch(fetchReviewsRequest());
  return axios
    .get('/reviewsUser', { params: { email: userEmail } })
    .then(response => {
      const reviews = response.data;
      dispatch(fetchReviewsSuccess(reviews));
    })
    .catch(e => {
      dispatch(fetchReviewsError(storableError(e)));
    });
};

/**
 * Save Review and return saved review
 */
export const saveReview = params => (dispatch, getState, sdk) => {
  dispatch(saveReviewDetailsRequest());

  return axios
    .post('/reviews', params)
    .then(response => {
      const review = response.data;
      console.log(response.data);
      dispatch(saveReviewDetailsSuccess(review));

      dispatch(fetchOrders(params.email));
    })
    .catch(e => {
      dispatch(saveReviewlError(storableError(e)));
    });
};

export const loadData = params => (dispatch, getState, sdk) => {
  return dispatch(fetchCurrentUser()).then(() => {
    const { currentUser } = getState().user;
    const user = ensureCurrentUser(currentUser);
    const currentEmail = user.attributes.email || '';
    console.log(currentEmail);
    return Promise.all([dispatch(fetchOrders(currentEmail)), dispatch(fetchReviews(currentEmail))]);
  });
};
