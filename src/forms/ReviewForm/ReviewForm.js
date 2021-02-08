import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { Form as FinalForm, Field } from 'react-final-form';
import findIndex from 'lodash/findIndex';

import classNames from 'classnames';
import { isTransactionsTransitionAlreadyReviewed } from '../../util/errors';
import { propTypes } from '../../util/types';
import { nonEmptyArray, composeValidators, required } from '../../util/validators';
import {
  AddImages,
  Form,
  PrimaryButton,
  FieldTextInput,
  FieldRadioButton,
  FieldSelect,
  ValidationError,
} from '../../components';
import { types as sdkTypes } from '../../util/sdkLoader';
import css from './ReviewForm.css';
import { DriveEta } from '@material-ui/icons';

const { UUID } = sdkTypes;
const ACCEPT_IMAGES = 'image/*';

export class ReviewFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.onImageUploadHandler = this.onImageUploadHandler.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
  }

  onImageUploadHandler(file) {
    const fileId = `${file.name}_${Date.now()}`;
    const imageData = { file, id: fileId, imageId: new UUID(fileId) };

    // Show loading overlay
    this.setState({
      images: this.state.images.concat([imageData]),
    });
    console.log(this.state.images);
  }
  onRemoveImage(imageId) {
    this.setState(prevState => {
      const images = prevState.images;
      const imageIndex = findIndex(images, i => i.id === imageId);
      const updatedImages = [...images.slice(0, imageIndex), ...images.slice(imageIndex + 1)];
      return {
        images: updatedImages,
      };
    });
  }

  render() {
    return (
      <FinalForm
        {...this.props}
        onImageUploadHandler={this.onImageUploadHandler}
        onRemoveImage={this.onRemoveImage}
        images={this.state.images}
        initialValues={{ images: this.state.images, recommend: true, anonymous: true }}
        render={fieldRenderProps => {
          const {
            className,
            rootClassName,
            form,

            handleSubmit,
            intl,
            images,
            formId,
            onImageUploadHandler,
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

          const reviewRecommend = intl.formatMessage({ id: 'ReviewForm.recommend' });
          const reviewRecommendRequiredMessage = intl.formatMessage({
            id: 'ReviewForm.recommendRequired',
          });

          const reviewAnonymous = intl.formatMessage({ id: 'ReviewForm.anonymous' });
          const reviewAnonymousdRequiredMessage = intl.formatMessage({
            id: 'ReviewForm.anonymousRequired',
          });

          const reviewFit = intl.formatMessage({ id: 'ReviewForm.fit' });
          const reviewFitRequiredMessage = intl.formatMessage({
            id: 'ReviewForm.reviewFit',
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

          const submitDisabled = submitInProgress;

          return (
            <Form className={classes} onSubmit={handleSubmit}>
              <AddImages
                images={images}
                className={css.imagesField}
                thumbnailClassName={css.thumbnail}
                savedImageAltText={intl.formatMessage({
                  id: 'ReviewForm.savedImageAltText',
                })}
                onRemoveImage={onRemoveImage}
              >
                <Field
                  className={css.imagesIndividual}
                  id="addImage"
                  name="addImage"
                  accept={ACCEPT_IMAGES}
                  form={null}
                  label={chooseImageText}
                  type="file"
                >
                  {fieldprops => {
                    const { accept, input, label, disabled: fieldDisabled } = fieldprops;
                    const { name, type } = input;
                    const onChange = e => {
                      const file = e.target.files[0];
                      console.log("damnit i'm here");
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
                className={css.reviewcomment}
                type="textarea"
                id={formId ? `${formId}.reviewContent` : 'reviewContent'}
                name="comments"
                label={reviewContent}
                placeholder={reviewContentPlaceholderMessage}
                validate={required(reviewContentRequiredMessage)}
              />

              <div className={css.bodyStats}>
                <FieldSelect
                  className={css.reviewContentBody}
                  id={formId ? `${formId}.reviewContent` : 'reviewContent'}
                  name="height"
                  label="height*"
                >
                  <option value="5'0">shorter than 5'0</option>
                  <option value="5'0">5'0</option>
                  <option value="5'1">5'1</option>
                  <option value="5'2">5'2</option>
                  <option value="5'3">5'3</option>
                  <option value="5'4">5'4</option>
                  <option value="5'5">5'5</option>
                  <option value="5'6">5'6</option>
                  <option value="5'7">5'7</option>
                  <option value="5'4">5'8</option>
                  <option value="5'5">5'9</option>
                  <option value="5'6">6'0</option>
                  <option value="5'7">taller than 6'0</option>
                </FieldSelect>

                <FieldTextInput
                  className={css.reviewContentBody}
                  type="textarea"
                  id={formId ? `${formId}.weight` : 'weight'}
                  name="weight"
                  label="weight* (lbs)"
                  placeholder="150lbs"
                />
              </div>

              <div className={css.reviewContentStats}>
                <FieldTextInput
                  className={css.stats}
                  type="textarea"
                  id={formId ? `${formId}.bust` : 'bust'}
                  name="bust"
                  label="bust (inches)"
                />

                <FieldTextInput
                  className={css.stats}
                  type="textarea"
                  id={formId ? `${formId}.waist` : 'waist'}
                  name="waist"
                  label="waist (inches)"
                />

                <FieldTextInput
                  className={css.stats}
                  type="textarea"
                  id={formId ? `${formId}.hips` : 'hips'}
                  name="hips"
                  label="hips (inches)"
                />
              </div>

              <div className={css.reviewRemaining}>
                <div className={css.sectionContainer}>
                  <h3 className={css.subTitle}>
                    <FormattedMessage id="ReviewForm.fit" />
                  </h3>
                  <div className={css.radioButtonRow}>
                    <FieldRadioButton
                      id="fitsmall"
                      name="fit"
                      label="Runs small"
                      value="Runs small"
                      showAsRequired="please select yes or no"
                    />
                    <FieldRadioButton
                      id="fittruetosize"
                      name="fit"
                      label="True to size"
                      value="True to size"
                      showAsRequired="please select yes or no"
                    />
                    <FieldRadioButton
                      id="fitlarge"
                      name="fit"
                      label="Runs large"
                      value="Runs large"
                      showAsRequired="please select yes or no"
                    />
                    <FieldRadioButton
                      id="fitna"
                      name="fit"
                      label="n/a"
                      value="n/a"
                      showAsRequired="please select yes or no"
                    />
                  </div>
                </div>

                <div className={css.sectionContainer}>
                  <h3 className={css.subTitle}>
                    <FormattedMessage id="ReviewForm.recommend" />
                  </h3>
                  <div className={css.radioButtonRow}>
                    <FieldRadioButton
                      id="recommendyes"
                      name="recommend"
                      label="Yes"
                      value={true}
                      showAsRequired="please select yes or no"
                    />
                    <FieldRadioButton
                      id="recommendno"
                      name="recommend"
                      label="No"
                      value={false}
                      showAsRequired="please select yes or no"
                    />
                  </div>
                </div>

                <div className={css.sectionContainer}>
                  <h3 className={css.subTitle}>
                    <FormattedMessage id="ReviewForm.anonymous" />
                  </h3>
                  <div className={css.radioButtonRow}>
                    <FieldRadioButton
                      id="anonymousyes"
                      name="anonymous"
                      label="yes"
                      value={true}
                      showAsRequired="please select yes or no"
                    />
                    <FieldRadioButton
                      id="anonymousno"
                      name="anonymous"
                      label="no"
                      value={false}
                      showAsRequired="please select yes or no"
                    />
                  </div>
                </div>
              </div>

              {errorArea}
              <PrimaryButton
                className={css.submitButton}
                type="submit"
                inProgress={submitInProgress}
                disabled={submitDisabled}
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
