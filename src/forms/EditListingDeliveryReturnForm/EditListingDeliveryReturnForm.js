import React from 'react';
import { compose } from 'redux';

import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import { findOptionsForSelectFilter } from '../../util/search';
import { required } from '../../util/validators';

import { propTypes } from '../../util/types';
import config from '../../config';
import {
  Button,
  FieldCheckbox,
  FieldCheckboxGroup,
  FieldTextInput,
  FieldSelect,
  Form,
} from '../../components';

import css from './EditListingFeaturesForm.css';
import { Required } from '../../components/FieldCheckboxGroup/FieldCheckboxGroup.example';

const EditListingDeliveryReturnFormComponent = props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={formRenderProps => {
      const {
        disabled,
        ready,
        rootClassName,
        className,
        intl,
        handleSubmit,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
        filterConfig,
      } = formRenderProps;

      const classes = classNames(rootClassName || css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = disabled || submitInProgress;

      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.updateFailed" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.showListingFailed" />
        </p>
      ) : null;

      const madeToOrderMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.madeToOrderMessage',
      });

      const madeToOrderWindowMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.madeToOrderWindowMessage',
      });

      const brandShippingFromMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.brandShippingFromMessage',
      });

      const returnEligibleMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.returnEligibleMessage',
      });

      const returnWindowMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.returnWindowMessage',
      });

      const returnPeriodStartMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.returnPeriodStartMessage',
      });

      const variantMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.variantMessage',
      });

      const shippingMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.shippingMessage',
      });

      const shippingRequired = required(
        intl.formatMessage({
          id: 'EditListingCapacityForm.shippingRequired',
        })
      );

      const shippingLocationRequired = required(
        intl.formatMessage({
          id: 'EditListingCapacityForm.shippingLocationRequired',
        })
      );

      const returnEligibleRequired = required(
        intl.formatMessage({
          id: 'EditListingCapacityForm.returnEligibleRequired',
        })
      );
      const options = findOptionsForSelectFilter('shipping', filterConfig);
      console.log(options);
      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}

          <FieldCheckbox
            id="made_to_order"
            name="made_to_order"
            className={css.textLabel}
            autoFocus
            label={madeToOrderMessage}
          />
          <FieldTextInput
            id="made_to_order_window"
            name="made_to_order_window"
            className={css.textInputSub}
            autoFocus
            type = "text"
            label={madeToOrderWindowMessage}
          />

          <FieldCheckboxGroup
            className={css.shippingoptions}
            id="shipping"
            name="shipping"
            options={options}
            label={shippingMessage}
            validate={shippingRequired}
          />

          <FieldTextInput
            id="brand_shipping_location"
            name="brand_shipping_location"
            className={css.textLabel}
            autoFocus
            type ="text"
            label={brandShippingFromMessage}
            validate={shippingLocationRequired}
          />

          <FieldCheckbox
            id="return_eligible"
            name="return_eligible"
            className={css.return_eligible}
            autoFocus
            label={returnEligibleMessage}
          />

          <FieldTextInput
            id="return_window"
            name="return_window"
            type="number"
            className={css.textInputSub}
            autoFocus
            label={returnWindowMessage}
          />
          <FieldSelect
            className={css.textInputSub}
            id="return_start"
            name="return_start"
            label={returnPeriodStartMessage}
          >
            <option id="purchase_date" key="purchase_date" value="purchase_date">
              Purchase Date
            </option>
            <option id="delivery_date" key="delivery_date" value="delivery_date">
              Delivery Date
            </option>
          </FieldSelect>

          <FieldTextInput
            id="variant"
            name="variant"
            className={css.textInput}
            autoFocus
            label={variantMessage}
          />
          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingDeliveryReturnFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  fetchErrors: null,
  filterConfig: config.custom.filters,
};

EditListingDeliveryReturnFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  name: string.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  filterConfig: propTypes.filterConfig,
};

const EditListingDeliveryReturnForm = EditListingDeliveryReturnFormComponent;

export default compose(injectIntl)(EditListingDeliveryReturnForm);
