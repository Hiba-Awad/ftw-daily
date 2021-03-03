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
import ph_heike from './PH_heike.jpg';
import ph_heike2 from './PH_heike2.png';

import { pink } from '@material-ui/core/colors';

const PH_heikePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | heike | rumi coat"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_heike',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} HEIKE</h6>
          <h1 className={css.pageTitle}>the rumi coat.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainOUISA2}>
              <div className={css.contentMainOUISA}>
                <img className={css.coverImageOUISA} src={ph_heike} alt="heike rumi coat" />
                <img className={css.coverImageOUISA} src={ph_heike2} alt="heike rumi coat" />
              </div>
              <div className={css.text}>
                <h5 className={css.headerSub}>
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  What’s your favorite piece? 
                  </p>
                  <p>
                  The Rumi coat. I love that it’s also gotten a great response. It’s very modern and functional; it’s an embodiment of the Bauhaus idea.
                  </p>
                  <p>
                  It’s made of a double-faced fabric and is finished on some seams like a classic double-face but I left others with a raw edge. It’s a fantastic winter coat.
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

export default PH_heikePage;
