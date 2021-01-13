import React, { useState } from 'react';
import { ButtonTabNavHorizontal } from '../../components';

import css from './ListingPage.css';

const SectionSizeOptions = props => {
  const { publicData } = props;
  const [selectedSize, setSelectedSize] = useState('');
  const handleChange = newValue => () => {
    setSelectedSize(newValue);
  };

  if (publicData && publicData.Variant) {
    const sizes = publicData.Variant;

    const variantTabs = sizes.map((variant, index) => {
      return {
        text: <h3 className={css.sizeTab}>{variant}</h3>,
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
