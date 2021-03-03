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
import ph_tarinthomas from './PH_tarinthomas.png';
import ph_tarinthomas2 from './PH_tarinthomas2.png';

import { pink } from '@material-ui/core/colors';

const PH_tarinthomasPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | tarinthomas | the charles ring"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_tarinthomas',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} TARIN THOMAS</h6>
          <h1 className={css.pageTitle}>the charles ring.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainOUISA2}>
              <div className={css.contentMainOUISA}>
                <img className={css.coverImageOUISA} src={ph_tarinthomas} alt="tarin thomas charles ring" />
                <img className={css.coverImageOUISA} src={ph_tarinthomas2} alt="tarin thomas charles ring" />
              </div>
              <div className={css.text}>
                <h5 className={css.headerSub}>
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  What’s your favorite piece? 
                  </p>
                  <p>
                  It would probably be the Charles ring. I love that it's masculine yet dainty.
                  </p>
                  
                  <p style={{fontWeight: 'bold'}}>
                  How did you come up with the design?
                  </p>
                  <p>
                  Actually, this was my mom’s design. She sketched it out and I had it made in gold and diamond for her birthday. We’re extremely close; we probably chat at least 10 times a day.
                  </p>
                  
                  <p style={{fontWeight: 'bold'}}>
                  Was this produced locally?
                  </p>
                  <p>
                  Yes. Like the rest of our collection, everything is manufactured in New York and made to order. Our suppliers and factories are all based in the New York area.
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

export default PH_tarinthomasPage;
