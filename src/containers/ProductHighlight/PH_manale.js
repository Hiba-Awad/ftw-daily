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
import ph_manale from './PH_manale.jpg';
import ph_manale2 from './PH_manale2.jpg';

import { pink } from '@material-ui/core/colors';

const PH_manalePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | manalé | gondor shawl"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_manale',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} MANALÉ</h6>
          <h1 className={css.pageTitle}>the gondar shawl.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainOUISA2}>
              <div className={css.contentMainOUISA}>
                <img className={css.coverImageOUISA} src={ph_manale} alt="manale gondar shawl" />
                <img className={css.coverImageOUISA} src={ph_manale2} alt="manale gondar shawl" />
              </div>
              <div className={css.text}>
                <h5 className={css.headerSub}>
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  Do you have a favorite item from your collection?
                  </p>
                  <p>
                  No, I absolutely couldn’t choose a particular piece… My pieces all represent the best of what I can produce. 
                  </p>
                 

                  <p style={{fontWeight: 'bold'}}>
                  What does the term ‘Eutiopian’ refer to?
                  </p>
                  <p>
                  It’s a portmanteau of ‘Ethiopia’ and ‘utopia’. I loved that the both words sounded somewhat similar to each other. Plus, I wanted to combine the inspiration behind the collection (Ethiopia) and the fact that I produced the collection in Italy, the embodiment of perfection in construction when it comes to luxury fashion. 
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  Tell us about the Gondar shawls.
                  </p>
                  <p>
                  I designed this collection during the height of the pandemic. The pattern itself was inspired by the Debre Berhand church, which is famous for its roof that is painted with the faces of angels. With this design, I wanted to share the message of strength and courage in the face of adversity.
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

export default PH_manalePage;
