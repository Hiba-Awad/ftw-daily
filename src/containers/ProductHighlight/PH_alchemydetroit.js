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
import ph_alchemydetroit from './PH_alchemydetroit.jpg';
import ph_alchemydetroit2 from './PH_alchemydetroit2.jpg';

import { pink } from '@material-ui/core/colors';

const PH_alchemydetroitPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | alchemy detroit | catherine blazer"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_alchemydetroit',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} LA FEMME APERO</h6>
          <h1 className={css.pageTitle}>la robe legere fendue.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainOUISA2}>
              <div className={css.contentMainOUISA}>
                <img className={css.coverImageOUISA} src={ph_alchemydetroit} alt="alchemy detroit catherine blazer" />
                <img className={css.coverImageOUISA} src={ph_alchemydetroit2} alt="alchemy detroit catherine blazer" />
              </div>
              <div className={css.text}>
                <h5 className={css.headerSub}>
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  Tell us about your favorite blazer from the collection. 
                  </p>
                  <p>
                  I love the Catherine silhouette. It’s a personal favorite of mine. I wear mine with Lululemon, jogging pants, pencil skirts… It’s so incredibly versatile and comfortable while immediately elevating your style. I love that a great blazer can dress up a casual outfit of t-shirt and jeans.
                  </p>
                
                  <p style={{fontWeight: 'bold'}}>
                  Are all the jackets unisex?
                  </p>
                  <p>
                  Yes. The styles were made with unisex in mind so they aren’t overly feminine or masculine. Which is also great for a more conservative corporate environment!
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

export default PH_alchemydetroitPage;
