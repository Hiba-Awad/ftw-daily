import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { ensureCurrentUser } from '../../util/data';
import { fetchCurrentUser, sendVerificationEmail } from '../../ducks/user.duck';
import {
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperAccountSettingsSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
  Page,
  UserNav,
} from '../../components';
import { ReviewForm } from '../../forms';
import { TopbarContainer } from '../../containers';

import { isScrollingDisabled } from '../../ducks/UI.duck';
import {
  saveContactDetails,
  saveContactDetailsClear,
  resetPassword,
} from './ContactDetailsPage.duck';
import css from './ContactDetailsPage.css';

export const ReviewDetailsPageComponent = props => {
  const {
    saveEmailError,
    savePhoneNumberError,
    saveContactDetailsInProgress,
    currentUser,
    contactDetailsChanged,
    onChange,
    scrollingDisabled,
    sendVerificationEmailInProgress,
    sendVerificationEmailError,
    onResendVerificationEmail,
    onSubmitContactDetails,
    onResetPassword,
    resetPasswordInProgress,
    resetPasswordError,
    intl,
  } = props;

  const user = ensureCurrentUser(currentUser);
  const currentEmail = user.attributes.email || '';
  const protectedData = user.attributes.profile.protectedData || {};
  const currentPhoneNumber = protectedData.phoneNumber || '';
  const reviewForm = user.id ? (
    <ReviewForm
      className={css.form}
      initialValues={{ email: currentEmail, phoneNumber: currentPhoneNumber }}
      saveEmailError={saveEmailError}
      savePhoneNumberError={savePhoneNumberError}
      currentUser={currentUser}
      onResendVerificationEmail={onResendVerificationEmail}
      onResetPassword={onResetPassword}
      onSubmit={values => onSubmitContactDetails({ ...values, currentEmail, currentPhoneNumber })}
      onChange={onChange}
      inProgress={saveContactDetailsInProgress}
      ready={contactDetailsChanged}
      sendVerificationEmailInProgress={sendVerificationEmailInProgress}
      sendVerificationEmailError={sendVerificationEmailError}
      resetPasswordInProgress={resetPasswordInProgress}
      resetPasswordError={resetPasswordError}
    />
  ) : null;

  const title = intl.formatMessage({ id: 'ContactDetailsPage.title' });

  return (
    <Page title={title} scrollingDisabled={scrollingDisabled}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer
            currentPage="ReviewDetailsPage"
            desktopClassName={css.desktopTopbar}
            mobileClassName={css.mobileTopbar}
          />
          <UserNav selectedPageName="ReviewDetailsPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.title}>Review Details</h1>
            {reviewForm}
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigation>
    </Page>
  );
};

ReviewDetailsPageComponent.defaultProps = {
  saveEmailError: null,
  savePhoneNumberError: null,
  currentUser: null,
  sendVerificationEmailError: null,
  resetPasswordInProgress: false,
  resetPasswordError: null,
};

const { bool, func } = PropTypes;

ReviewDetailsPageComponent.propTypes = {
  saveEmailError: propTypes.error,
  savePhoneNumberError: propTypes.error,
  saveContactDetailsInProgress: bool.isRequired,
  currentUser: propTypes.currentUser,
  contactDetailsChanged: bool.isRequired,
  onChange: func.isRequired,
  onSubmitContactDetails: func.isRequired,
  scrollingDisabled: bool.isRequired,
  sendVerificationEmailInProgress: bool.isRequired,
  sendVerificationEmailError: propTypes.error,
  onResendVerificationEmail: func.isRequired,
  resetPasswordInProgress: bool,
  resetPasswordError: propTypes.error,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  // Topbar needs user info.
  const { currentUser, sendVerificationEmailInProgress, sendVerificationEmailError } = state.user;
  const {
    saveEmailError,
    savePhoneNumberError,
    saveContactDetailsInProgress,
    contactDetailsChanged,
    resetPasswordInProgress,
    resetPasswordError,
  } = state.ContactDetailsPage;
  return {
    saveEmailError,
    savePhoneNumberError,
    saveContactDetailsInProgress,
    currentUser,
    contactDetailsChanged,
    scrollingDisabled: isScrollingDisabled(state),
    sendVerificationEmailInProgress,
    sendVerificationEmailError,
    resetPasswordInProgress,
    resetPasswordError,
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: () => dispatch(saveContactDetailsClear()),
  onResendVerificationEmail: () => dispatch(sendVerificationEmail()),
  onSubmitContactDetails: values => dispatch(saveContactDetails(values)),
  onResetPassword: values => dispatch(resetPassword(values)),
});

const ReviewDetailsPage = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
)(ReviewDetailsPageComponent);

ReviewDetailsPage.loadData = () => {
  // Since verify email happens in separate tab, current user's data might be updated
  return fetchCurrentUser();
};

export default ReviewDetailsPage;
