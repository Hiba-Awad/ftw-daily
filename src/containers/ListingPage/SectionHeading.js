import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { InlineTextButton } from '../../components';
import { LINE_ITEM_NIGHT, LINE_ITEM_DAY } from '../../util/types';
import config from '../../config';

import css from './ListingPage.css';

const SectionHeading = props => {
  const {
    priceTitle,
    formattedPrice,
    richTitle,
    category,
    hostLink,
    showContactUser,
    onContactUser,
  } = props;

  const unitType = config.bookingUnitType;
  const isNightly = unitType === LINE_ITEM_NIGHT;
  const isDaily = unitType === LINE_ITEM_DAY;

  const unitTranslationKey = isNightly
    ? 'ListingPage.perNight'
    : isDaily
    ? 'ListingPage.perDay'
    : 'ListingPage.perUnit';

  return (
    <div className={css.sectionHeading}>
      <h1 className={css.heading}>{hostLink}</h1>
      <h1 className={css.title}>{richTitle}</h1>

      <div className={css.desktopPriceContainer}>
        <div className={css.desktopPriceValue} title={priceTitle}>
          {formattedPrice}
        </div>
      </div>

      {/*
    <div className={css.author}>
      {category}
      <FormattedMessage id="ListingPage.hostedBy" values={{ name: hostLink }} />
      
        HA: not enabling contact brands
        {showContactUser ? (
          <span className={css.contactWrapper}>
            <span className={css.separator}>•</span>
            <InlineTextButton rootClassName={css.contactLink} onClick={onContactUser}>
              <FormattedMessage id="ListingPage.contactUser" />
            </InlineTextButton>
          </span>
        ) : null}
        
    </div>
        */}
    </div>
  );
};

export default SectionHeading;
