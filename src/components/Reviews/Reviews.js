import React from 'react';
import { injectIntl, intlShape, FormattedMessage } from '../../util/reactIntl';

import { arrayOf, string } from 'prop-types';
import classNames from 'classnames';
import { Avatar, ReviewRating, UserDisplayName } from '../../components';
import { propTypes } from '../../util/types';
import { ResponsiveImage, Modal, ImageCarousel } from '../../components/';

import css from './Reviews.css';

const ReviewImages = props => {
  const {
    handleViewPhotosClick,
    imageCarouselOpen,
    onImageCarouselClose,
    onManageDisableScrolling,
    images,
  } = props;
  const hasImages = images && images.length > 0;
  const firstImage = hasImages ? images[0] : null;
  const viewPhotosButton = hasImages ? (
    <button className={css.viewPhotos} onClick={handleViewPhotosClick}>
      <FormattedMessage id="ListingPage.viewImagesButton" values={{ count: images.length }} />
    </button>
  ) : null;

  return (
    <div className={css.sectionImages} onClick={handleViewPhotosClick}>
      <ResponsiveImage
        rootClassName={css.rootForImage}
        image={firstImage}
        variants={['scaled-medium']}
        sizes="(max-width: 767px) 100vw, 80vw"
      />
      {viewPhotosButton}
      <Modal
        id="Reviews.imageCarousel"
        scrollLayerClassName={css.carouselModalScrollLayer}
        containerClassName={css.carouselModalContainer}
        isOpen={imageCarouselOpen}
        onClose={onImageCarouselClose}
        onManageDisableScrolling={onManageDisableScrolling}
      >
        <ImageCarousel images={images} />
      </Modal>
    </div>
  );
};

const Review = props => {
  const { review, onManageDisableScrolling, intl } = props;
  const {
    user,
    recommend,
    listingUUID,
    imageUrls,
    fit,
    anonymous,
    comments,
    userData,
    createdAt,
  } = review;
  const [imageCarouselOpen, setImageCarouselOpen] = React.useState(false);
  const date = createdAt;
  const dateString = intl.formatDate(date, { month: 'long', year: 'numeric' });
  const authorInfo = anonymous ? null : (
    <p className={css.error}>
      <UserDisplayName user={user} intl={intl} />
    </p>
  );

  const handleViewPhotosClick = e => {
    // Stop event from bubbling up to prevent image click handler
    // trying to open the carousel as well.
    e.stopPropagation();
    setImageCarouselOpen(true);
  };

  const images = imageUrls.map(url => {
    const image_resource = {
      type: 'image',
      attributes: {
        variants: {
          'scaled-medium': {
            name: 'scaled-medium',
            width: 320,
            height: 320,
            url: url,
          },
        },
      },
    };
    return image_resource;
  });

  console.log(user);
  return (
    <div className={css.review}>
      <Avatar className={css.avatar} user={user} />
      <ReviewImages
        images={images}
        imageCarouselOpen={imageCarouselOpen}
        onImageCarouselClose={() => setImageCarouselOpen(false)}
        handleViewPhotosClick={handleViewPhotosClick}
        onManageDisableScrolling={onManageDisableScrolling}
      />
      <div>
        <p className={css.reviewContent}>{comments}</p>
        <p className={css.reviewInfo}>
          {authorInfo}
          <span className={css.separator}>•</span>
          {dateString}
          <span className={css.desktopSeparator}>•</span>
          <span className={css.separator}>•</span>
          {fit}
          <span className={css.desktopSeparator}>•</span>
          <span className={css.desktopSeparator}>•</span>
          recommend {recommend}
        </p>
      </div>
    </div>
  );
};

Review.propTypes = {
  review: propTypes.review.isRequired,
  intl: intlShape.isRequired,
};

const ReviewsComponent = props => {
  const { className, rootClassName, reviews, onManageDisableScrolling, intl } = props;
  const classes = classNames(rootClassName || css.root, className);

  return (
    <ul className={classes}>
      {reviews.map(r => {
        return (
          <li key={`Review_${r.reviewId}`} className={css.reviewItem}>
            <Review review={r} onManageDisableScrolling={onManageDisableScrolling} intl={intl} />
          </li>
        );
      })}
    </ul>
  );
};

ReviewsComponent.defaultProps = {
  className: null,
  rootClassName: null,
  reviews: [],
};

ReviewsComponent.propTypes = {
  className: string,
  rootCalssName: string,
  reviews: arrayOf(propTypes.review),

  // from injectIntl
  intl: intlShape.isRequired,
};

const Reviews = injectIntl(ReviewsComponent);

export default Reviews;
