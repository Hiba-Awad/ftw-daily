import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './HelpPage.css';

const HelpPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="reviews - how it works"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'HelpPage',
        description: 'Reviews - How It Works | Revvie',
        name: 'Help Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>reviews - how it works.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
            <div className={css.dividerline}>
              <h2>
              how it works.
              </h2>

              <p>
              All of the products on Revvie are shipped directly by the brands.
              </p>
              <p>
              Please refer to "delivery & returns" on the product page to see available shipping rates. Most brands offer free shipping and several expedited options. 
              </p>
              <p>
              International shipping is currently unavailable but we are working on it! Stay in touch and we'll let you know when it's up and running.
              </p>
</div>

<div className={css.dividerline}>
              <h2>
              returns.
              </h2>
              <p>
              Not happy with your order? 
              </p>
              <p>
              No problem! We offer free (and easy) returns on eligible items (which are most regular priced items) that are within the brand's return window. 
              </p>
              <p>
              Please note that final sale items may not be available for return. Refer to "delivery & returns" for each product to see if the item is eligible for a return and if so, the return window.
              </p>
              <h4>easy return instructions</h4>
              <p>
              If a product is eligible for return and is within the product's return window, do the following: 
              </p>
              <p>
              1. Go to "my account" in the top right menu.
              </p>
              <p>
              2. Click "my orders" on the left-hand menu and select the product you wish to return. 
              </p>
              <p>
              3. Tap the "Return" button and fill in the form. Once you submit your request, you will receive a prepaid mailing label within 12 hours. 
              </p>
              <p>
              4. Drop off your package at the relevant carrier's drop points. You are responsible for repacking and shipping the item on time. 
              </p>
              <p>
              If the item is not eligible for return or if the return window has passed, the "Return" button will be greyed out. 
                </p>
</div>

            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default HelpPage;
