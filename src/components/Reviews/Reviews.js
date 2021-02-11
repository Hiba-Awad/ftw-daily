import React, { useState } from 'react';
import { injectIntl, intlShape, FormattedMessage } from '../../util/reactIntl';

import { arrayOf, string } from 'prop-types';
import classNames from 'classnames';
import { Avatar, ReviewRating, UserDisplayName } from '../../components';
import { ensureListing } from '../../util/data';
import { createSlug } from '../../util/urlHelpers';

import { propTypes } from '../../util/types';
import { NamedLink, ResponsiveImage, Modal, ImageCarousel } from '../../components/';

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
    <div>
      <div className={css.sectionImages} onClick={handleViewPhotosClick}>
        <ResponsiveImage
          rootClassName={css.rootForImage}
          image={firstImage}
          variants={['scaled-medium']}
        />
        {viewPhotosButton}
      </div>
      <Modal
        id="Reviews.imageCarousel"
        scrollLayerClassName={css.carouselModalScrollLayer}
        containerClassName={css.carouselModalContainer}
        isOpen={imageCarouselOpen}
        onClose={onImageCarouselClose}
        onManageDisableScrolling={onManageDisableScrolling}
        usePortal
      >
        <ImageCarousel className={css.ImageCarousel} images={images} />
      </Modal>
    </div>
  );
};

const Review = props => {
  const { review, onManageDisableScrolling, intl } = props;
  const {
    user,
    listing,
    recommend,
    listingUUID,
    imageUrls,
    fit,
    anonymous,
    variant,
    comments,
    userData,
    createdAt,
  } = review;
  const [imageCarouselOpen, setImageCarouselOpen] = useState(false);
  const date = createdAt;
  const dateString = intl.formatDate(date, { month: 'short', year: 'numeric' });
  const authorInfo =
    anonymous === 'yes' ? null : (
      <p className={css.reviewDate}>
        by <UserDisplayName user={user} intl={intl} />
      </p>
    );
  const { email, weight, height, bust, waist, hips } = userData;
  const currentListing = ensureListing(listing);
  const id = currentListing.id.uuid;
  const { title = '', price } = currentListing.attributes;
  const slug = createSlug(title);
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
      <div className={css.containerImage}>
        <ReviewImages
          images={images}
          imageCarouselOpen={imageCarouselOpen}
          onImageCarouselClose={() => setImageCarouselOpen(false)}
          handleViewPhotosClick={handleViewPhotosClick}
          onManageDisableScrolling={onManageDisableScrolling}
        />
      </div>
      <div className={css.containerMain}>
        <NamedLink name="ListingPage" params={{ id, slug }}>
          {title}
        </NamedLink>
        {/*}<Avatar className={css.avatar} user={user} />{*/}
        <div className={css.containerAuthor}>
          <p className={css.reviewDate}>{dateString}</p>
          <p>{authorInfo}</p>
        </div>

        <div className={css.containerMeasurements}>
          <div className={css.bodyStats1}>
            <p className={css.height}>
              <b>Fit:</b> {fit}
            </p>
            <p className={css.height}>
              <b>Variant:</b> {variant}
            </p>
          </div>
          <div className={css.bodyStats1}>
            <p className={css.height}>
              <b>Height:</b> {height}
            </p>
            <p className={css.height}>
              <b>Weight (lbs):</b> {weight}
            </p>
          </div>
          <div className={css.bodyStats1}>
            <p className={css.height}>
              <b>Bust-Waist-Hips (in):</b>{' '}
            </p>
            <div className={css.subBodyStats1}>
              <p className={css.height}>{bust}"-</p>
              <p className={css.height}>{waist}"-</p>
              <p className={css.height}>{hips}"</p>
            </div>
          </div>
        </div>

        <p className={css.reviewComments}>"{comments}"</p>

        <p className={css.textRecommend}>
          <b>Recommend?</b> {recommend}
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
