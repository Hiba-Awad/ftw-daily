import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';

import { LISTING_STATE_DRAFT } from '../../util/types';
import { ensureListing } from '../../util/data';
import { EditListingDeliveryReturnForm } from '../../forms';
import { ListingLink } from '../../components';

import css from './EditListingFeaturesPanel.css';

const FEATURES_NAME = 'Delivery and Returns';

const EditListingFeaturesPanel = props => {
  const {
    rootClassName,
    className,
    listing,
    disabled,
    ready,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureListing(listing);
  const { publicData } = currentListing.attributes;

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingFeaturesPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingFeaturesPanel.createListingTitle" />
  );

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingDeliveryReturnForm
        className={css.form}
        initialValues={{
          made_to_order: publicData.made_to_order,
          made_to_order_window: publicData.made_to_order_window,
          shipping: publicData.shipping,
          brand_shipping_location: publicData.brand_shipping_location,
          return_eligible: publicData.return_eligible,
          return_window: publicData.return_window,
          return_start: publicData.return_start,
          variant: publicData.variant,
        }}
        onSubmit={values => {
          console.log('here');
          console.log('values', values);
          const {
            made_to_order,
            made_to_order_window,
            shipping = [],
            brand_shipping_location,
            return_eligible,
            return_window,
            return_start,
            variant = [],
          } = values;

          const updatedValues = {
            publicData: {
              made_to_order,
              made_to_order_window,
              shipping,
              brand_shipping_location,
              return_eligible,
              return_window,
              return_start,
              variant,
            },
          };
          console.log('submitting');
          onSubmit(updatedValues);
        }}
        onChange={onChange}
        saveActionMsg={submitButtonText}
        disabled={disabled}
        ready={ready}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
      />
    </div>
  );
};

EditListingFeaturesPanel.defaultProps = {
  rootClassName: null,
  className: null,
  listing: null,
};

const { bool, func, object, string } = PropTypes;

EditListingFeaturesPanel.propTypes = {
  rootClassName: string,
  className: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  disabled: bool.isRequired,
  ready: bool.isRequired,
  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingFeaturesPanel;
