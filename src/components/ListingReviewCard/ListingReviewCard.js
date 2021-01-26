import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';
import { LINE_ITEM_DAY, LINE_ITEM_NIGHT, propTypes } from '../../util/types';
import { formatMoney } from '../../util/currency';
import { ensureListing, ensureUser } from '../../util/data';
import { richText } from '../../util/richText';
import { createSlug } from '../../util/urlHelpers';
import config from '../../config';
import { SecondaryButton, ResponsiveImage } from '../../components';

import css from './ListingReviewCard.css';

const MIN_LENGTH_FOR_LONG_WORDS = 10;

const priceData = (price, intl) => {
  if (price && price.currency === config.currency) {
    const formattedPrice = formatMoney(intl, price);
    return { formattedPrice, priceTitle: formattedPrice };
  } else if (price) {
    return {
      formattedPrice: intl.formatMessage(
        { id: 'ListingCard.unsupportedPrice' },
        { currency: price.currency }
      ),
      priceTitle: intl.formatMessage(
        { id: 'ListingCard.unsupportedPriceTitle' },
        { currency: price.currency }
      ),
    };
  }
  return {};
};

class ListingImage extends Component {
  render() {
    return <ResponsiveImage {...this.props} />;
  }
}
const LazyImage = lazyLoadWithDimensions(ListingImage, { loadAfterInitialRendering: 3000 });

export const ListingReviewCard = props => {
  const { className, rootClassName, intl, order, onReviewClick, renderSizes } = props;
  const { listing } = order;
  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureListing(listing);
  const id = currentListing.id.uuid;
  const { title = '', price } = currentListing.attributes;
  const author = ensureUser(listing.author);
  const authorName = author.attributes.profile.displayName;
  const firstImage =
    currentListing.images && currentListing.images.length > 0 ? currentListing.images[0] : null;

  const { formattedPrice, priceTitle } = priceData(price, intl);

  const unitType = config.bookingUnitType;
  const isNightly = unitType === LINE_ITEM_NIGHT;
  const isDaily = unitType === LINE_ITEM_DAY;

  const unitTranslationKey = isNightly
    ? 'ListingCard.perNight'
    : isDaily
    ? 'ListingCard.perDay'
    : 'ListingCard.perUnit';

  const onClick = onReviewClick(order);
  return (
    <div className={classes}>
      <div className={css.threeToTwoWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage
            rootClassName={css.rootForImage}
            alt={title}
            image={firstImage}
            variants={['portrait-crop', 'portrait-crop2x']}
            sizes={renderSizes}
          />
        </div>
      </div>
      <div className={css.info}>
        {/*
          <div className={css.perUnit}>
            <FormattedMessage id={unitTranslationKey} />
          </div>*/}
        <div className={css.mainInfo}>
          <div className={css.authorInfo}>
            <FormattedMessage id="ListingCard.hostedBy" values={{ authorName }} />
          </div>
          <div className={css.title}>
            {richText(title, {
              longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS,
              longWordClass: css.longWord,
            })}
          </div>
          <div className={css.price}>
            <div className={css.priceValue} title={priceTitle}>
              {formattedPrice}
            </div>
          </div>
          <div className={css.orderDate}>{order.orderDate}</div>
        </div>
      </div>
      <SecondaryButton onClick={onClick}>Review Order</SecondaryButton>
    </div>
  );
};

ListingReviewCard.defaultProps = {
  className: null,
  rootClassName: null,
  renderSizes: null,
};

ListingReviewCard.propTypes = {
  className: string,
  rootClassName: string,
  intl: intlShape.isRequired,

  // Responsive image sizes hint
  renderSizes: string,

  setActiveListing: func,
};

export default injectIntl(ListingReviewCard);
