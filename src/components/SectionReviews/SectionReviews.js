import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { Reviews } from '../../components';

import css from './SectionReviews.css';

const SectionReviews = props => {
  const { reviews, fetchReviewsError, onManageDisableScrolling } = props;

  const reviewsError = (
    <h2 className={css.errorText}>
      <FormattedMessage id="ListingPage.reviewsError" />
    </h2>
  );

  return (
    <div className={css.sectionReviews}>
      <div className={css.title}>
        <FormattedMessage id="SectionReviews.title" />
      </div>
      {fetchReviewsError ? reviewsError : null}
      <Reviews onManageDisableScrolling={onManageDisableScrolling} reviews={reviews} />
    </div>
  );
};

export default SectionReviews;
