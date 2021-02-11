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
import ph_primoluxe from './PH_primoluxe.jpg';
import { pink } from '@material-ui/core/colors';

const PH_primoluxePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight |  primo luxe | bianca fingerless gloves"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_primo luxe',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} PRIMO LUXE</h6>
          <h1 className={css.pageTitle}>bianca fingerless gloves.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainFormerlyYan}>
              <img className={css.coverImageFormerlyYan} src={ph_primoluxe} alt="bianca fingerless gloves" />
              <div className={css.text}>
                <h5 className={css.headerSub}>
                Made from a buttery soft lambskin leather and finished with beautiful alligator embossing, the Bianca fingerless glove isn't just for looks.
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                    Do you have a favorite style?
                  </p>
                  <p>
                  The Bianca fingerless gloves are my favorite. I like wearing them indoors as part of a specific look but they've also actually come very much in handy during these pandemic times when I'm dining outdoors. New York winters are chilly and these gloves keep my hands warm while freeing up my fingers so I can actually eat. Practical and stylish!
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

export default PH_primoluxePage;
