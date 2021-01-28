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
import ph_metalandstone from './PH_metalandstone.jpg';
import { pink } from '@material-ui/core/colors';

const PH_metalandstonePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | metal & stone creations | nature's grip ring"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_metalandstone',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} METAL & STONE CREATIONS</h6>
          <h1 className={css.pageTitle}>nature's grip ring.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <img className={css.coverImage} src={ph_metalandstone} alt="metal & stone creations nature's grip ring" />
              <div className={css.text}>
                <h5 className={css.headerSub}>
                  True to the designer's style, the Nature's Grip Ring showcases a large, unusual Lodolite stone with a swirl of autumn colors that is clutched by a several branches. Taking her cue from nature, the designer creates a gorgeous statement piece that serves as an homage to the fall season. 
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  Do you have a favorite piece?
                  </p>
                  <p>
                  Yes, it’s the Nature’s Grip ring where it looks like a branch is grasping the stone. This ring isn't available anymore as it got sold but I still remember and love it. 
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  How did you come up with the design?
                  </p>
                  <p>
                  The stone itself was incredible and I started with that. It’s a Lodolite stone and it looked as if someone had created a painting inside it. I also loved the combination of different shades of black, amber and yellow in the stone which created a very fall-like vibe.
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

export default PH_metalandstonePage;
