import React, { useState } from 'react';
import { ButtonTabNavHorizontal } from '../../components';

import css from './ListingPage.css';

const SectionSizeOptions = props => {
  const { publicData } = props;
  const [selectedSize, setSelectedSize] = useState('');
  const handleChange = newValue => () => {
    setSelectedSize(newValue);
  };

  if (publicData && publicData.variant) {
    const sizes = publicData.variant;

    const variantTabs = sizes.map((variant, index) => {
      return {
        text: <div className={css.sizeTab}>{variant}</div>,
        selected: selectedSize === variant,
        onClick: handleChange(variant),
      };
    });

    return (
      <div className={css.sectionSizeOptions}>
        <ButtonTabNavHorizontal className={css.variantsTabNav} tabs={variantTabs} />
      </div>
    );
  } else {
    return null;
  }
};

export default SectionSizeOptions;
