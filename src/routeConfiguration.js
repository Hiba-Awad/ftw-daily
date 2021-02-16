import React from 'react';
import {
  AboutPage,
  AuthenticationPage,
  CheckoutPage,
  ContactDetailsPage,
  ContactUsPage,
  EditListingPage,
  EmailVerificationPage,
  HelpPage,
  InboxPage,
  LandingPage,
  ListingPage,
  LogisticsPage,
  ManageListingsPage,
  NotFoundPage,
  PasswordChangePage,
  PasswordRecoveryPage,
  PasswordResetPage,
  StripePayoutPage,
  PaymentMethodsPage,
  PrivacyPolicyPage,
  ProfilePage,
  ProfileSettingsPage,
  ReviewDetailsPage,
  SearchPage,
  StyleguidePage,
  TermsOfServicePage,
  TransactionPage,
  DP_avajamesnycPage,
  PH_avajamesnycPage,
  DP_lafemmeaperoPage,
  PH_lafemmeaperoPage,
  DP_metalandstonePage,
  PH_metalandstonePage,
  DP_marcobagaPage,
  PH_marcobagaPage,
  DP_formerlyyanPage,
  PH_formerlyyanPage,
  DP_arteagaPage,
  PH_arteagaPage,
  DP_spinozaPage,
  PH_spinozaPage,
  DP_rhondacolePage,
  PH_rhondacolePage,
  DP_ouisaPage,
  PH_ouisaPage,
  DP_sylthviragoPage,
  PH_sylthviragoPage,
  DP_harperthelabelPage,
  PH_harperthelabelPage,
  DP_primoluxePage,
  PH_primoluxePage,
  DP_alchemydetroitPage,
  PH_alchemydetroitPage,
} from './containers';

// routeConfiguration needs to initialize containers first
// Otherwise, components will import form container eventually and
// at that point css bundling / imports will happen in wrong order.
import { NamedRedirect } from './components';

export const ACCOUNT_SETTINGS_PAGES = [
  'ContactDetailsPage',
  'PasswordChangePage',
  'StripePayoutPage',
  'PaymentMethodsPage',
];

// https://en.wikipedia.org/wiki/Universally_unique_identifier#Nil_UUID
const draftId = '00000000-0000-0000-0000-000000000000';
const draftSlug = 'draft';

const RedirectToLandingPage = () => <NamedRedirect name="LandingPage" />;

// NOTE: Most server-side endpoints are prefixed with /api. Requests to those
// endpoints are indended to be handled in the server instead of the browser and
// they will not render the application. So remember to avoid routes starting
// with /api and if you encounter clashing routes see server/index.js if there's
// a conflicting route defined there.

// Our routes are exact by default.
// See behaviour from Routes.js where Route is created.
const routeConfiguration = () => {
  return [
    {
      path: '/',
      name: 'LandingPage',
      component: props => <LandingPage {...props} />,
      loadData: LandingPage.loadData,
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
    },
    {
      path: '/shipping-and-returns',
      name: 'LogisticsPage',
      component: LogisticsPage,
    },
    {
      path: '/reviews-how-it-works',
      name: 'HelpPage',
      component: HelpPage,
    },
    {
      path: '/contact-us',
      name: 'ContactUsPage',
      component: ContactUsPage,
    },
    {
      path: '/s',
      name: 'SearchPage',
      component: props => <SearchPage {...props} />,
      loadData: SearchPage.loadData,
    },
    {
      path: '/s/filters',
      name: 'SearchFiltersPage',
      component: props => <SearchPage {...props} tab="filters" />,
      loadData: SearchPage.loadData,
    },
    {
      path: '/s/listings',
      name: 'SearchListingsPage',
      component: props => <SearchPage {...props} tab="listings" />,
      loadData: SearchPage.loadData,
    },
    {
      path: '/s/map',
      name: 'SearchMapPage',
      component: props => <SearchPage {...props} tab="map" />,
      loadData: SearchPage.loadData,
    },
    {
      path: '/l',
      name: 'ListingBasePage',
      component: RedirectToLandingPage,
    },
    {
      path: '/l/:slug/:id',
      name: 'ListingPage',
      component: props => <ListingPage {...props} />,
      loadData: ListingPage.loadData,
    },
    {
      path: '/l/:slug/:id/checkout',
      name: 'CheckoutPage',
      auth: true,
      component: props => <CheckoutPage {...props} />,
      setInitialValues: CheckoutPage.setInitialValues,
    },
    {
      path: '/l/:slug/:id/:variant',
      name: 'ListingPageVariant',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ListingPage {...props} />,
      loadData: ListingPage.loadData,
    },
    {
      path: '/l/new',
      name: 'NewListingPage',
      auth: true,
      component: () => (
        <NamedRedirect
          name="EditListingPage"
          params={{ slug: draftSlug, id: draftId, type: 'new', tab: 'description' }}
        />
      ),
    },
    {
      path: '/l/:slug/:id/:type/:tab',
      name: 'EditListingPage',
      auth: true,
      component: props => <EditListingPage {...props} />,
      loadData: EditListingPage.loadData,
    },
    {
      path: '/l/:slug/:id/:type/:tab/:returnURLType',
      name: 'EditListingStripeOnboardingPage',
      auth: true,
      component: props => <EditListingPage {...props} />,
      loadData: EditListingPage.loadData,
    },

    // Canonical path should be after the `/l/new` path since they
    // conflict and `new` is not a valid listing UUID.
    {
      path: '/l/:id',
      name: 'ListingPageCanonical',
      component: props => <ListingPage {...props} />,
      loadData: ListingPage.loadData,
    },
    {
      path: '/u',
      name: 'ProfileBasePage',
      component: RedirectToLandingPage,
    },
    {
      path: '/u/:id',
      name: 'ProfilePage',
      component: props => <ProfilePage {...props} />,
      loadData: ProfilePage.loadData,
    },
    {
      path: '/b/:name',
      name: 'ProfilePage',
      component: props => <ProfilePage {...props} />,
      loadData: ProfilePage.loadData,
    },

    {
      path: '/profile-settings',
      name: 'ProfileSettingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ProfileSettingsPage {...props} />,
    },

    // Note: authenticating with IdP (e.g. Facebook) expects that /login path exists
    // so that in the error case users can be redirected back to the LoginPage
    // In case you change this, remember to update the route in server/api/auth/loginWithIdp.js
    {
      path: '/login',
      name: 'LoginPage',
      component: props => <AuthenticationPage {...props} tab="login" />,
    },
    {
      path: '/signup',
      name: 'SignupPage',
      component: props => <AuthenticationPage {...props} tab="signup" />,
    },
    {
      path: '/confirm',
      name: 'ConfirmPage',
      component: props => <AuthenticationPage {...props} tab="confirm" />,
    },
    {
      path: '/recover-password',
      name: 'PasswordRecoveryPage',
      component: props => <PasswordRecoveryPage {...props} />,
    },
    {
      path: '/inbox',
      name: 'InboxBasePage',
      auth: true,
      authPage: 'LoginPage',
      component: () => <NamedRedirect name="InboxPage" params={{ tab: 'sales' }} />,
    },
    {
      path: '/inbox/:tab',
      name: 'InboxPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <InboxPage {...props} />,
      loadData: InboxPage.loadData,
    },
    {
      path: '/order/:id',
      name: 'OrderPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <NamedRedirect name="OrderDetailsPage" params={{ ...props.params }} />,
    },
    {
      path: '/order/:id/details',
      name: 'OrderDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <TransactionPage {...props} transactionRole="customer" />,
      loadData: params => TransactionPage.loadData({ ...params, transactionRole: 'customer' }),
      setInitialValues: TransactionPage.setInitialValues,
    },
    {
      path: '/sale/:id',
      name: 'SalePage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <NamedRedirect name="SaleDetailsPage" params={{ ...props.params }} />,
    },
    {
      path: '/sale/:id/details',
      name: 'SaleDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <TransactionPage {...props} transactionRole="provider" />,
      loadData: params => TransactionPage.loadData({ ...params, transactionRole: 'provider' }),
    },
    {
      path: '/listings',
      name: 'ManageListingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ManageListingsPage {...props} />,
      loadData: ManageListingsPage.loadData,
    },
    {
      path: '/account',
      name: 'AccountSettingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: () => <NamedRedirect name="ContactDetailsPage" />,
    },

    {
      path: '/account/review',
      name: 'ReviewDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ReviewDetailsPage {...props} />,
      loadData: ReviewDetailsPage.loadData,
    },

    {
      path: '/account/contact-details',
      name: 'ContactDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ContactDetailsPage {...props} />,
      loadData: ContactDetailsPage.loadData,
    },
    {
      path: '/account/change-password',
      name: 'PasswordChangePage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <PasswordChangePage {...props} />,
    },
    {
      path: '/account/payments',
      name: 'StripePayoutPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <StripePayoutPage {...props} />,
      loadData: StripePayoutPage.loadData,
    },
    {
      path: '/account/payments/:returnURLType',
      name: 'StripePayoutOnboardingPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <StripePayoutPage {...props} />,
      loadData: StripePayoutPage.loadData,
    },
    {
      path: '/account/payment-methods',
      name: 'PaymentMethodsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <PaymentMethodsPage {...props} />,
      loadData: PaymentMethodsPage.loadData,
    },
    {
      path: '/terms-of-service',
      name: 'TermsOfServicePage',
      component: props => <TermsOfServicePage {...props} />,
    },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicyPage',
      component: props => <PrivacyPolicyPage {...props} />,
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      component: props => <StyleguidePage {...props} />,
    },
    {
      path: '/styleguide/g/:group',
      name: 'StyleguideGroup',
      component: props => <StyleguidePage {...props} />,
    },
    {
      path: '/styleguide/c/:component',
      name: 'StyleguideComponent',
      component: props => <StyleguidePage {...props} />,
    },
    {
      path: '/styleguide/c/:component/:example',
      name: 'StyleguideComponentExample',
      component: props => <StyleguidePage {...props} />,
    },
    {
      path: '/styleguide/c/:component/:example/raw',
      name: 'StyleguideComponentExampleRaw',
      component: props => <StyleguidePage raw {...props} />,
    },
    {
      path: '/notfound',
      name: 'NotFoundPage',
      component: props => <NotFoundPage {...props} />,
    },
    {
      path: '/designer-profile-ava-james-nyc-eugena-delman',
      name: 'ava-james-nyc',
      component: props => <DP_avajamesnycPage {...props} />,
    },
    {
      path: '/product-highlight-ava-james-nyc-madrid-dress-in-dark-green',
      name: 'ava-james-nyc-product',
      component: props => <PH_avajamesnycPage {...props} />,
    },

    {
      path: '/designer-profile-metal-and-stone-creations-lisette-bez',
      name: 'metal-and-stone-creations',
      component: props => <DP_metalandstonePage {...props} />,
    },

    {
      path: '/product-highlight-metal-and-stone-creations-natures-grip-ring',
      name: 'metal-and-stone-creations-product',
      component: props => <PH_metalandstonePage {...props} />,
    },

    {
      path: '/designer-profile-marco-baga-marina-gil-lemesheva',
      name: 'marco-baga',
      component: props => <DP_marcobagaPage {...props} />,
    },

    {
      path: '/product-highlight-marco-baga-kanagawa-wave-tote',
      name: 'marco-baga-product',
      component: props => <PH_marcobagaPage {...props} />,
    },

    {
      path: '/designer-profile-formerly-yan-amanda-schechter',
      name: 'formerly-yan',
      component: props => <DP_formerlyyanPage {...props} />,
    },

    {
      path: '/product-highlight-formerly-yan-convertible-midi-snap-dress',
      name: 'formerly-yan-product',
      component: props => <PH_formerlyyanPage {...props} />,
    },

    {
      path: '/designer-profile-arteaga-marisol-arteaga',
      name: 'arteaga',
      component: props => <DP_arteagaPage {...props} />,
    },

    {
      path: '/product-highlight-arteaga-the-paola-tunic-dress',
      name: 'arteaga-product',
      component: props => <PH_arteagaPage {...props} />,
    },
    {
      path: '/designer-profile-spinoza-silja-kim',
      name: 'spinoza',
      component: props => <DP_spinozaPage {...props} />,
    },

    {
      path: '/product-highlight-spinoza-the-ivy-sunglasses',
      name: 'spinoza-product',
      component: props => <PH_spinozaPage {...props} />,
    },
    {
      path: '/designer-profile-rhonda-cole',
      name: 'rhonda-cole',
      component: props => <DP_rhondacolePage {...props} />,
    },

    {
      path: '/product-highlight-rhonda-cole-cappella-shirt',
      name: 'rhonda-cole-product',
      component: props => <PH_rhondacolePage {...props} />,
    },

    {
      path: '/designer-profile-ouisa-bryn-taylor',
      name: 'ouisa',
      component: props => <DP_ouisaPage {...props} />,
    },

    {
      path: '/product-highlight-ouisa-the-lillet-stretch-dress',
      name: 'ouisa-product',
      component: props => <PH_ouisaPage {...props} />,
    },

    {
      path: '/designer-profile-la-femme-apero-lea-enderlin-sarah-lequimener',
      name: 'la-femme-apero',
      component: props => <DP_lafemmeaperoPage {...props} />,
    },

    {
      path: '/product-highlight-la-robe-legere-fendue',
      name: 'la-femme-apero-product',
      component: props => <PH_lafemmeaperoPage {...props} />,
    },

    {
      path: '/designer-profile-sylth-virago-danielle-goldman-athanasia-diamantis-svec',
      name: 'sylth-virago',
      component: props => <DP_sylthviragoPage {...props} />,
    },

    {
      path: '/product-highlight-persephone-in-white-mocha-ocean',
      name: 'sylth-virago-product',
      component: props => <PH_sylthviragoPage {...props} />,
    },

    {
      path: '/designer-profile-harper-the-label-claire-harper',
      name: 'harper-the-label',
      component: props => <DP_harperthelabelPage {...props} />,
    },

    {
      path: '/product-highlight-storms-will-roll-crossbody',
      name: 'harper-the-label-product',
      component: props => <PH_harperthelabelPage {...props} />,
    },

    {
      path: '/designer-profile-primo-luxe-georgette-mcgriff',
      name: 'primo-luxe',
      component: props => <DP_primoluxePage {...props} />,
    },

    {
      path: '/product-highlight-primo-luxe-bianca-fingerless-gloves',
      name: 'primo-luxe-product',
      component: props => <PH_primoluxePage {...props} />,
    },

    {
      path: '/designer-profile-alchemy-detroit-shelley-van-riper',
      name: 'alchemy-detroit',
      component: props => <DP_alchemydetroitPage {...props} />,
    },

    {
      path: '/product-highlight-alchemy-detroit-catherine-blazer',
      name: 'alchemy-detroit-product',
      component: props => <PH_alchemydetroitPage {...props} />,
    },


    // Do not change this path!
    //
    // The API expects that the application implements /reset-password endpoint
    {
      path: '/reset-password',
      name: 'PasswordResetPage',
      component: props => <PasswordResetPage {...props} />,
    },

    // Do not change this path!
    //
    // The API expects that the application implements /verify-email endpoint
    {
      path: '/verify-email',
      name: 'EmailVerificationPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <EmailVerificationPage {...props} />,
      loadData: EmailVerificationPage.loadData,
    },
  ];
};

export default routeConfiguration;
