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
import ph_sylthvirago from './PH_sylthvirago.jpg';
import ph_sylthvirago2 from './PH_sylthvirago2.jpg';
import { pink } from '@material-ui/core/colors';

const PH_primoluxePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | sylth virago | persephone in white"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_sylthvirago',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} SYLTH VIRAGO</h6>
          <h1 className={css.pageTitle}>persephone in white.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainFormerlyYan}>
              <img className={css.coverImageFormerlyYan} src={ph_sylthvirago} alt="persephone boot in white" />
              <div className={css.text}>
                <h5 className={css.headerSub}>
                  The Persephone style is the kind of boot that turns heads and keeps them there. Made entirely of vegan leather with gorgeously detailed hand embellishments, this is a true statement piece for the daringly sexy woman. 
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  What’s your favorite shoe?
                  </p>
                  <p>
                  The Persephone boot in white.
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  Tell us about the design process.
                  </p>
                  <p>
                  It was a very collaborative process that included all members of our team. Kyle Blackmon, our designer, had several sessions with Brianna Fano of SwatchHub, an embellishment and embroidery studio that’s based in NYC. Together, they developed the shape, colors, and design for the stunning kneecap embellishment. We decided to use more specialized lead-free beading instead of sequins to keep our materials as ethical as possible. Kyle also developed the Sylth heel which was inspired by shapes and movement found in dance and nature. It’s a head-turner, for sure!
                  </p>
                  
                        
                </div>
                <img className={css.coverImageFormerlyYan} src={ph_sylthvirago2} alt="formerly yan convertible midi snap dress" />

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
