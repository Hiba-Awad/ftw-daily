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
                <h3 style={{fontWeight: 'bold'}}>Create an account with the same email you used to make a purchase</h3>
                <p>We only allow verified reviewers to post reviews.</p>
                <p>Go to "my reviews" in the upper right corner, right under your avatar.</p>
                <p>If you have an available review, you should see it in "availalbe reviews".</p>
              
              </div>
              <div className={css.contentStep}>
                <h3 className={css.contentStep}>001</h3>
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
                <h3 className={css.contentStep}>002</h3>
              </div>
              <div className={css.contentText}>
                <h3 style={{fontWeight: 'bold'}}>Write the review</h3>
                <p>Tap "write review" and off you go!</p>
                <p>Remember, small brands rely on your voice and experience to help spread the word and establish trust in the brand and product. Make it count!</p>
                <p>You can submit your review anonymously. Make sure to select the "anonymous" option before hitting submit!</p>              
              </div>
            </div>

            <div className={css.contentRow}>
                <div className={css.contentText}>
                  <h3 style={{fontWeight: 'bold'}}>Hit "Publish" and that's it!</h3>
                  <p>Once you hit publish, your review will be available for others to see. </p>
                  <p>Thank you so much for sharing your experience. We (and our designers) are so grateful.</p>
                </div>
                <div className={css.contentStep}>
                  <h3 className={css.contentStep}>003</h3>
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
