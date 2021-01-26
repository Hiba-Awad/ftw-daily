import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { Form as FinalForm, Field } from 'react-final-form';
import classNames from 'classnames';
import { isTransactionsTransitionAlreadyReviewed } from '../../util/errors';
import { propTypes } from '../../util/types';
import { nonEmptyArray, composeValidators, required } from '../../util/validators';
import {
  AddImages,
  Form,
  PrimaryButton,
  FieldTextInput,
  FieldSelect,
  ValidationError,
} from '../../components';

import css from './ReviewForm.css';

const ACCEPT_IMAGES = 'image/*';

export class ReviewFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { imageUploadRequested: false };
    this.onImageUploadHandler = this.onImageUploadHandler.bind(this);
    this.submittedImages = [];
  }
  onImageUploadHandler(file) {
    if (file) {
      this.setState({ imageUploadRequested: true });
      this.props
        .onImageUpload({ id: `${file.name}_${Date.now()}`, file })
        .then(() => {
          this.setState({ imageUploadRequested: false });
        })
        .catch(() => {
          this.setState({ imageUploadRequested: false });
        });
    }
  }
  render() {
    return (
      <FinalForm
        {...this.props}
        onImageUploadHandler={this.onImageUploadHandler}
        imageUploadRequested={this.state.imageUploadRequested}
        render={fieldRenderProps => {
          const {
            className,
            rootClassName,
            form,
            disabled,
            handleSubmit,
            intl,
            formId,
            invalid,
            onImageUploadHandler,
            imageUploadRequested,
            onRemoveImage,
            reviewSent,
            sendReviewError,
            sendReviewInProgress,
          } = fieldRenderProps;

          const chooseImageText = (
            <span className={css.chooseImageText}>
              <span className={css.chooseImage}>
                <FormattedMessage id="EditListingPhotosForm.chooseImage" />
              </span>
              <span className={css.imageTypes}>
                <FormattedMessage id="EditListingPhotosForm.imageTypes" />
              </span>
            </span>
          );

          const imageRequiredMessage = intl.formatMessage({
            id: 'EditListingPhotosForm.imageRequired',
          });

          const reviewContent = intl.formatMessage({ id: 'ReviewForm.reviewContentLabel' });
          const reviewContentPlaceholderMessage = intl.formatMessage({
            id: 'ReviewForm.reviewContentPlaceholder',
          });
          const reviewContentRequiredMessage = intl.formatMessage({
            id: 'ReviewForm.reviewContentRequired',
          });

          const errorMessage = isTransactionsTransitionAlreadyReviewed(sendReviewError) ? (
            <p className={css.error}>
              <FormattedMessage id="ReviewForm.reviewSubmitAlreadySent" />
            </p>
          ) : (
            <p className={css.error}>
              <FormattedMessage id="ReviewForm.reviewSubmitFailed" />
            </p>
          );
          const errorArea = sendReviewError ? errorMessage : <p className={css.errorPlaceholder} />;

          const reviewSubmitMessage = intl.formatMessage({
            id: 'ReviewForm.reviewSubmit',
          });

          const classes = classNames(rootClassName || css.root, className);
          const submitInProgress = sendReviewInProgress;
          const submitDisabled = invalid || disabled || submitInProgress;

          return (
            <Form className={classes} onSubmit={handleSubmit}>
              <AddImages
                className={css.imagesField}
                thumbnailClassName={css.thumbnail}
                savedImageAltText={intl.formatMessage({
                  id: 'ReviewForm.savedImageAltText',
                })}
                onRemoveImage={onRemoveImage}
              >
                <Field
                  id="addImage"
                  name="addImage"
                  accept={ACCEPT_IMAGES}
                  form={null}
                  label={chooseImageText}
                  type="file"
                  disabled={imageUploadRequested}
                >
                  {fieldprops => {
                    const { accept, input, label, disabled: fieldDisabled } = fieldprops;
                    const { name, type } = input;
                    const onChange = e => {
                      const file = e.target.files[0];
                      form.change(`addImage`, file);
                      form.blur(`addImage`);
                      onImageUploadHandler(file);
                    };
                    const inputProps = { accept, id: name, name, onChange, type };
                    return (
                      <div className={css.addImageWrapper}>
                        <div className={css.aspectRatioWrapper}>
                          {fieldDisabled ? null : (
                            <input {...inputProps} className={css.addImageInput} />
                          )}
                          <label htmlFor={name} className={css.addImage}>
                            {label}
                          </label>
                        </div>
                      </div>
                    );
                  }}
                </Field>

                <Field
                  component={props => {
                    const { input, meta } = props;
                    return (
                      <div className={css.imageRequiredWrapper}>
                        <input {...input} />
                        <ValidationError fieldMeta={meta} />
                      </div>
                    );
                  }}
                  name="images"
                  type="hidden"
                  validate={composeValidators(nonEmptyArray(imageRequiredMessage))}
                />
              </AddImages>
              <FieldTextInput
                className={css.reviewContent}
                type="textarea"
                id={formId ? `${formId}.reviewContent` : 'reviewContent'}
                name="reviewContent"
                label={reviewContent}
                placeholder={reviewContentPlaceholderMessage}
                validate={required(reviewContentRequiredMessage)}
              />
              <FieldSelect
                id={formId ? `${formId}.reviewContent` : 'reviewContent'}
                name="height"
                label="height"
              >
                <option value="5'2">5'2.</option>
                <option value="5'3">5'3</option>
                <option value="5'4">5'4</option>
                <option value="5'5">5'5</option>
                <option value="5'6">5'6</option>
                <option value="5'8">5'7</option>
              </FieldSelect>
              <FieldSelect
                id={formId ? `${formId}.reviewContent` : 'reviewContent'}
                name="height"
                label="height"
              >
                <option value="5'2">5'2.</option>
                <option value="5'3">5'3</option>
                <option value="5'4">5'4</option>
                <option value="5'5">5'5</option>
                <option value="5'6">5'6</option>
                <option value="5'8">5'7</option>
              </FieldSelect>

              <FieldTextInput
                className={css.reviewContent}
                type="textarea"
                id={formId ? `${formId}.reviewContent` : 'reviewContent'}
                name="reviewContent"
                label={reviewContent}
                placeholder={reviewContentPlaceholderMessage}
                validate={required(reviewContentRequiredMessage)}
              />

              {errorArea}
              <PrimaryButton
                className={css.submitButton}
                type="submit"
                inProgress={submitInProgress}
                disabled={submitDisabled}
                ready={reviewSent}
              >
                {reviewSubmitMessage}
              </PrimaryButton>
            </Form>
          );
        }}
      />
    );
  }
}
ReviewFormComponent.defaultProps = { className: null, rootClassName: null, sendReviewError: null };

const { bool, func, string } = PropTypes;

ReviewFormComponent.propTypes = {
  className: string,
  rootClassName: string,
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  reviewSent: bool.isRequired,
  sendReviewError: propTypes.error,
  sendReviewInProgress: bool.isRequired,
};

const ReviewForm = compose(injectIntl)(ReviewFormComponent);
ReviewForm.displayName = 'ReviewForm';

export default ReviewForm;
