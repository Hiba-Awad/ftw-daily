import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { types as sdkTypes } from '../../util/sdkLoader';
import { REVIEW_TYPE_OF_PROVIDER, REVIEW_TYPE_OF_CUSTOMER, propTypes } from '../../util/types';
import { ensureCurrentUser, ensureUser } from '../../util/data';
import { createSlug } from '../../util/urlHelpers';
import { withViewport } from '../../util/contextHelpers';
import { manageDisableScrolling, isScrollingDisabled } from '../../ducks/UI.duck';
import { getMarketplaceEntities } from '../../ducks/marketplaceData.duck';
import {
  Page,
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
  AvatarLarge,
  NamedLink,
  ListingCard,
  Reviews,
  ButtonTabNavHorizontal,
  ExternalLink,
} from '../../components';
import { TopbarContainer, NotFoundPage } from '../../containers';
import { loadData } from './ProfilePage.duck';
import config from '../../config';
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import HighlightOutlinedIcon from '@material-ui/icons/HighlightOutlined';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import css from './ProfilePage.css';

const { UUID } = sdkTypes;
const MAX_MOBILE_SCREEN_WIDTH = 768;

export class ProfilePageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // keep track of which reviews tab to show in desktop viewport
      showReviewsType: REVIEW_TYPE_OF_PROVIDER,
    };
  }

  render() {
    const {
      scrollingDisabled,
      onManageDisableScrolling,
      currentUser,
      user,
      userShowError,
      queryListingsError,
      listings,
      reviews,
      queryReviewsError,
      viewport,
      intl,
    } = this.props;
    const ensuredCurrentUser = ensureCurrentUser(currentUser);
    const profileUser = ensureUser(user);
    const isCurrentUser =
      ensuredCurrentUser.id && profileUser.id && ensuredCurrentUser.id.uuid === profileUser.id.uuid;
    const displayName = profileUser.attributes.profile.displayName;
    const designerProfileLink = profileUser.attributes.profile.publicData.designer_profile;
    const productHighlightLink = profileUser.attributes.profile.publicData.product_highlight;
    console.log(designerProfileLink);
    const websiteLink = profileUser.attributes.profile.publicData.url;

    const bio = profileUser.attributes.profile.bio;
    const hasBio = !!bio;
    const hasListings = listings.length > 0;
    const isMobileLayout = viewport.width < MAX_MOBILE_SCREEN_WIDTH;

    const editLinkMobile = isCurrentUser ? (
      <NamedLink className={css.editLinkMobile} name="ProfileSettingsPage">
        <FormattedMessage id="ProfilePage.editProfileLinkMobile" />
      </NamedLink>
    ) : null;
    const editLinkDesktop = isCurrentUser ? (
      <NamedLink className={css.editLinkDesktop} name="ProfileSettingsPage">
        <FormattedMessage id="ProfilePage.editProfileLinkDesktop" />
      </NamedLink>
    ) : null;

    const asideContent = (
      <div className={css.asideContent}>
        <AvatarLarge className={css.avatar} user={user} disableProfileLink />
        <h1 className={css.mobileHeading}>
          {displayName ? (
            <FormattedMessage id="ProfilePage.mobileHeading" values={{ name: displayName }} />
          ) : null}
        </h1>
        {editLinkMobile}
        {editLinkDesktop}
      </div>
    );

    const listingsContainerClasses = classNames(css.listingsContainer, {
      [css.withBioMissingAbove]: !hasBio,
    });

    const reviewsError = (
      <p className={css.error}>
        <FormattedMessage id="ProfilePage.loadingReviewsFailed" />
      </p>
    );

    const mobileReviews = (
      <div className={css.mobileReviews}>
        {queryReviewsError ? reviewsError : null}
        <Reviews reviews={reviews} onManageDisableScrolling={onManageDisableScrolling} />
      </div>
    );

    const desktopReviews = (
      <div className={css.desktopReviews}>
        {queryReviewsError ? reviewsError : null}

        <Reviews reviews={reviews} onManageDisableScrolling={onManageDisableScrolling} />
      </div>
    );

    const mainContent = (
      <div>
        <h1 className={css.desktopHeading}>
          <FormattedMessage id="ProfilePage.desktopHeading" values={{ name: displayName }} />
        </h1>
        {hasBio ? <p className={css.bio}>{bio}</p> : null}
        <div className={css.bioLinks}>
          <FreeBreakfastOutlinedIcon
            className={css.icon}
            style={{ color: 'black' }}
          ></FreeBreakfastOutlinedIcon>
          {hasBio ? (
            <NamedLink className={css.outboundLink} name={designerProfileLink}>
              <FormattedMessage id="ProfilePage.designerProfile" />
            </NamedLink>
          ) : null}
        </div>
        <div className={css.bioLinks}>
          <HighlightOutlinedIcon
            className={css.icon}
            style={{ color: 'black' }}
          ></HighlightOutlinedIcon>
          {hasBio ? (
            <NamedLink className={css.outboundLink} name={productHighlightLink}>
              <FormattedMessage id="ProfilePage.productHighlight" />
            </NamedLink>
          ) : null}
        </div>
        <div className={css.bioLinks}>
          <BookmarkIcon className={css.icon} style={{ color: 'black' }}></BookmarkIcon>
          {hasBio ? (
            <ExternalLink className={css.outboundLink} href={websiteLink}>
              {websiteLink}
            </ExternalLink>
          ) : null}
        </div>
        <h2 className={css.listingsTitle}>
          <FormattedMessage id="ProfilePage.reviewsTitle" values={{ count: reviews.length }} />
        </h2>
        {isMobileLayout ? mobileReviews : desktopReviews}
        {hasListings ? (
          <div className={listingsContainerClasses}>
            <h2 className={css.listingsTitle}>
              <FormattedMessage
                id="ProfilePage.listingsTitle"
                values={{ count: listings.length }}
              />
            </h2>
            <ul className={css.listings}>
              {listings.map(l => (
                <li className={css.listing} key={l.id.uuid}>
                  <ListingCard listing={l} />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    );

    let content;

    if (userShowError && userShowError.status === 404) {
      return <NotFoundPage />;
    } else if (userShowError || queryListingsError) {
      content = (
        <p className={css.error}>
          <FormattedMessage id="ProfilePage.loadingDataFailed" />
        </p>
      );
    } else {
      content = mainContent;
    }

    const schemaTitle = intl.formatMessage(
      {
        id: 'ProfilePage.schemaTitle',
      },
      {
        name: displayName,
        siteTitle: config.siteTitle,
      }
    );

    return (
      <Page
        scrollingDisabled={scrollingDisabled}
        title={schemaTitle}
        schema={{
          '@context': 'http://schema.org',
          '@type': 'ProfilePage',
          name: schemaTitle,
        }}
      >
        <LayoutSideNavigation>
          <LayoutWrapperTopbar>
            <TopbarContainer currentPage="ProfilePage" />
          </LayoutWrapperTopbar>
          {/*}
          <LayoutWrapperSideNav className={css.aside}>{asideContent}</LayoutWrapperSideNav>
      {*/}
          <LayoutWrapperMain>{content}</LayoutWrapperMain>
          <LayoutWrapperFooter>
            <Footer />
          </LayoutWrapperFooter>
        </LayoutSideNavigation>
      </Page>
    );
  }
}

ProfilePageComponent.defaultProps = {
  currentUser: null,
  user: null,
  userShowError: null,
  queryListingsError: null,
  reviews: [],
  queryReviewsError: null,
};

const { bool, arrayOf, number, shape } = PropTypes;

ProfilePageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,
  currentUser: propTypes.currentUser,
  user: propTypes.user,
  userShowError: propTypes.error,
  queryListingsError: propTypes.error,
  listings: arrayOf(propTypes.listing).isRequired,
  reviews: arrayOf(propTypes.review),
  queryReviewsError: propTypes.error,

  // form withViewport
  viewport: shape({
    width: number.isRequired,
    height: number.isRequired,
  }).isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const { currentUser } = state.user;
  const {
    userId,
    userShowError,
    queryListingsError,
    userListingRefs,
    reviews,
    queryReviewsError,
  } = state.ProfilePage;
  const userMatches = getMarketplaceEntities(state, [{ type: 'user', id: userId }]);
  const user = userMatches.length === 1 ? userMatches[0] : null;
  const listings = getMarketplaceEntities(state, userListingRefs);
  return {
    scrollingDisabled: isScrollingDisabled(state),
    currentUser,
    user,
    userShowError,
    queryListingsError,
    listings,
    reviews,
    queryReviewsError,
  };
};

const mapDispatchToProps = dispatch => ({
  onManageDisableScrolling: (componentId, disableScrolling) =>
    dispatch(manageDisableScrolling(componentId, disableScrolling)),
});

const ProfilePage = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withViewport,
  injectIntl
)(ProfilePageComponent);

ProfilePage.loadData = params => {
  let id = new UUID(params.id);
  if (params.name) {
    const map = config.brandIdMap;
    id = new UUID(map[params.name]);
  }
  console.log(id);
  return loadData(id);
};

export default ProfilePage;
