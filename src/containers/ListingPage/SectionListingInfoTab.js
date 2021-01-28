import React, { useState } from 'react';
import { shape, string } from 'prop-types';
import classNames from 'classnames';
import { ButtonTabNavHorizontal } from '../../components';

import { richText } from '../../util/richText';
import { FormattedMessage } from '../../util/reactIntl';
import css from './ListingPage.css';

const EDITOR_NOTE = 'editors_note';
const SIZE_FIT = 'size_fit';
const DETAILS_CARE = 'details_care';
const SHIPPING = 'delivery_returns';
const REVIEWS = 'reviews';
const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const SectionListingInfoTab = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  const [selectedTab, setSelectedTab] = useState('');
  const handleChange = selectedTab => () => {
    setSelectedTab(selectedTab);  
  };
  const infoTabs = [
    {
      text: <div className={css.headerTab}>editor's note</div>,
      selected: selectedTab === { EDITOR_NOTE },
      onClick: handleChange(EDITOR_NOTE),
    },
    {
      text: <div className={css.headerTab}>size & fit</div>,
      selected: selectedTab === { SIZE_FIT },
      onClick: handleChange(SIZE_FIT),
    },
    {
      text: <div className={css.headerTab}>details & care</div>,
      selected: selectedTab === { DETAILS_CARE },
      onClick: handleChange(DETAILS_CARE),
    },
    {
      text: <div className={css.headerTab}>delivery & returns</div>,
      selected: selectedTab === { SHIPPING },
      onClick: handleChange(SHIPPING),
    },
    {
      text: <div className={css.headerTab}>reviews</div>,
      selected: selectedTab === { REVIEWS },
      onClick: handleChange(REVIEWS),
    },
  ];

  if (publicData && publicData.category) {
    return (
      <div className={css.SectionListingInfoTab}>
        <div className={css.sectionButtonTabNavHorizontal}>
          <ButtonTabNavHorizontal className={css.variants} tabs={infoTabs} />
        </div>
        <p className={css.infoTab}>
          {richText(publicData[selectedTab], {
            longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
};
SectionListingInfoTab.defaultProps = { className: null, rootClassName: null };

SectionListingInfoTab.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    editors_note: string,
  }),
};

export default SectionListingInfoTab;
