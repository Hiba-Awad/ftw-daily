import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '..';

import css from './SectionReviews.css';


class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, id) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="ProfilePage" params={{ id }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionReviews = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>

      <div className={css.title}>
        <FormattedMessage id="SectionReviews.title" />
      </div>

      <div className={css.locations}>


      </div>

    </div>
  );
};

SectionReviews.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionReviews.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionReviews;
