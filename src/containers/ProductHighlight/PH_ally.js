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

import css from './ProductHighlight.css';
import ph_ally from './PH_ally.jpg';
import { pink } from '@material-ui/core/colors';

const PH_allyPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | ally | classic black leather pump"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_ally',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} ALLY</h6>
          <h1 className={css.pageTitle}>classic black leather pump.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <img className={css.coverImage} src={ph_ally} alt="eugena delman ava james nyc" />
              <div className={css.text}>
                <h5 className={css.headerSub}>
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  Tell us about your favorite heel. 
                  </p>
                  <p>
                  If I absolutely had to choose, I’ll go with the black classic pump. This is the classic, the eternal heel that you can keep in the closet. If you had to have one and only pair of shoes, this would be it. That’s why we called it the little black heel because we wanted women to view this pair similar to how they would view the LBD. 
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  Was it tough to produce?
                  </p>
                  <p>
                  We use a stretchy and elastic leather that’s quite tricky to work with. I don’t think this leather had previously been used in heels before; they’re normally used in boots. If you don’t have the right structure, the shoe can look very frumpy which is exactly what we didn’t want. We spent a lot of time and explored a myriad of ways in which to balance the very structured look on the outside while maintaining an elastic feel. 
                  </p>
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

export default PH_allyPage;
