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

import published from './published.png';
import verified from './verified.png';
import writereview from './writereview.png';


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
            
            <div className={css.contentRow}>
              <div className={css.contentText}>
                <p style={{fontWeight: 'bold'}}>Check if you have an eligible review</p>
                <p>We only allow verified reviewers to post reviews.</p>
                <p>If you have purchased from one of our partner brands and would like to write a review, create an account using the same email you used to make the purchase. </p>
                <p>Go to "my reviews" and you will see the eligible review.</p>
              
              </div>
              <div className={css.contentStep}>
                <h4>001</h4>
              </div>
              <div className={css.contentIcon}>
              <img className={css.graphic} src={verified} alt="verified review" />
              </div>
            </div>

            <div className={css.contentRow}>
              <div className={css.contentIcon}>
                <img className={css.graphic} src={writereview} alt="writereview" />
              </div>
              <div className={css.contentStep}>
                <h4>002</h4>
              </div>
              <div className={css.contentText}>
                <p style={{fontWeight: 'bold'}}>Write the review</p>
                <p>If you have an eligible review, open the form and fill out the review.</p>
                <p>Remember, small brands rely on your voice and experience to help spread the word and establish trust in the brand and product. Make it count!</p>
                <p>You can submit your review anonymously. Make sure to select the "anonymous" option before hitting submit!</p>              
              </div>
            </div>

            <div className={css.contentRow}>
                <div className={css.contentText}>
                  <p style={{fontWeight: 'bold'}}>Hit "Publish" and you're good to go!</p>
                  <p>Once you hit publish, your review will be available for others to see. </p>
                  <p>Thank you so much for sharing your experience. We (and our designers) are so grateful.</p>
                </div>
                <div className={css.contentStep}>
                  <h4>003</h4>
                </div>
                <div className={css.contentIcon}>
                  <img className={css.graphic} src={published} alt="publishedreview" />
                </div>
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
