import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import {
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperAccountSettingsSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
  ReviewModal,
  Reviews,
  ListingReviewCard,
  Page,
  UserNav,
} from '../../components';
import { TopbarContainer } from '../../containers';

import { manageDisableScrolling, isScrollingDisabled } from '../../ducks/UI.duck';
import { loadData, saveReview, saveReviewDetailsClear } from './ReviewDetailsPage.duck';
import css from './ReviewDetailsPage.css';

export const ReviewDetailsPageComponent = props => {
  const {
    currentUser,
    scrollingDisabled,
    ordersToReview,
    reviews,
    fetchReviewsError,
    fetchOrdersError,
    saveReviewError,
    saveReviewInProgress,
    reviewDetailsChanged,
    reviewSubmitted,
    onManageDisableScrolling,
    onChange,
    onSubmitReview,
    intl,
  } = props;

  const [isReviewModalOpen, setReviewModal] = React.useState(false);
  const [orderToReview, setOrderToReview] = React.useState('');
  const onReviewClick = order => () => {
    setOrderToReview(order);
    setReviewModal(true);
  };

  const title = intl.formatMessage({ id: 'ReviewPage.title' });
  const orderReviewCards = (
    <ul>
      {ordersToReview.map(order => {
        return (
          <li key={`orderw_${order.orderId}`} className={css.orderToReview}>
            <ListingReviewCard order={order} onReviewClick={onReviewClick} intl={intl} />
          </li>
        );
      })}
    </ul>
  );

  const onSubmit = values => {
    console.log('submitting review form');
    const { images, ...updateValues } = values;
    const photos = images.map(image => {
      return image.file;
    });
    const params = {
      listingUUID: orderToReview.listingUUID,
      variant: orderToReview.variant,
      brandUUID: orderToReview.brandUUID,
      email: currentUser.attributes.email,
      userUUID: currentUser.id.uuid,
      ...updateValues,
    };
    console.log('Trying to submit');
    const orderId = orderToReview.orderId;
    onSubmitReview(orderId, photos, params)
      .then(result => {
        if (result) {
          setReviewModal(false);
        }
      })
      .catch(() => {});
  };

  const reviewModal = (
    <ReviewModal
      isOpen={isReviewModalOpen}
      onManageDisableScrolling={onManageDisableScrolling}
      onSubmit={onSubmit}
      reviewSent={reviewSubmitted}
      sendReviewInProgress={saveReviewInProgress}
      sendReviewError={saveReviewError}
      onCloseModal={() => {
        setReviewModal(false);
        onChange();
      }}
    />
  );
  return (
    <Page title={title} scrollingDisabled={scrollingDisabled}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer
            currentPage="ReviewDetailsPage"
            desktopClassName={css.desktopTopbar}
            mobileClassName={css.mobileTopbar}
          />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
          <div className={css.sectionReviews}>
            <h2 className={css.reviewsHeading}>
              <FormattedMessage
                id="ListingPage.reviewsHeading"
                values={{ count: reviews.length }}
              />
            </h2>
            {fetchReviewsError ? 'DAMN ERROR' : null}
            <Reviews onManageDisableScrolling={onManageDisableScrolling} reviews={reviews} />
          </div>
          <h2 className={css.reviewsHeading}>
            <FormattedMessage
              id="ListingPage.reviewsHeading2"
              values={{ count: ordersToReview.length }}
            />
          </h2>
          <div className={css.content}>{orderReviewCards}</div>
          <div className={css.content}>{reviewModal}</div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigation>
    </Page>
  );
};

ReviewDetailsPageComponent.defaultProps = {
  fetchReviewsError: null,
  fetchOrdersError: null,
  saveReviewError: null,
  currentUser: null,
};

const { bool, func } = PropTypes;

ReviewDetailsPageComponent.propTypes = {
  fetchReviewsError: propTypes.error,
  fetchOrdersError: propTypes.error,
  saveReviewError: propTypes.error,

  saveReviewInProgress: bool.isRequired,
  currentUser: propTypes.currentUser,
  reviewDetailsChanged: bool.isRequired,
  onChange: func.isRequired,
  onSubmitReviewtDetails: func.isRequired,
  scrollingDisabled: bool.isRequired,
  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  // Topbar needs user info.
  const { currentUser } = state.user;
  const {
    ordersToReview,
    reviews,
    fetchReviewsError,
    fetchOrdersError,
    saveReviewError,
    saveReviewInProgress,
    reviewDetailsChanged,
    reviewSubmitted,
  } = state.ReviewDetailsPage;
  return {
    currentUser,
    scrollingDisabled: isScrollingDisabled(state),
    ordersToReview,
    reviews,
    fetchReviewsError,
    fetchOrdersError,
    saveReviewError,
    saveReviewInProgress,
    reviewDetailsChanged,
    reviewSubmitted,
  };
};

const mapDispatchToProps = dispatch => ({
  onManageDisableScrolling: (componentId, disableScrolling) =>
    dispatch(manageDisableScrolling(componentId, disableScrolling)),
  onChange: () => dispatch(saveReviewDetailsClear()),
  onSubmitReview: (orderId, photos, params) => dispatch(saveReview(orderId, photos, params)),
});

const ReviewDetailsPage = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
)(ReviewDetailsPageComponent);

ReviewDetailsPage.loadData = loadData;

export default ReviewDetailsPage;
