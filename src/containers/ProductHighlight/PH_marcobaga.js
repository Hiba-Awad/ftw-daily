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
import ph_marcobaga from './PH_marcobaga.jpg';
import { pink } from '@material-ui/core/colors';

const PH_marcobagaPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | marco baga | Kanagawa Wave Tote"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_marcobaga',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} MARCO BAGA</h6>
          <h1 className={css.pageTitle}>kanagawa wave tote.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <img className={css.coverImage} src={ph_marcobaga} alt="marco baga kanagawa wave tote" />
          
              <div className={css.text}>
                <h5 className={css.headerSub}>
                  The Kanagawa Wave Tote is part of the brand's Japan Collection and was inspired by the famous Japanese painting. Here's the story of how the bag came to life.
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  What’s your favorite piece from your collection?
                  </p>
                  <p>
                  I would probably say The Kanagawa Wave Tote.
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  How did you come up with the design for the bag?
                  </p>
                  <p>
                  I came up with this tote a long time ago, while I was still a student at FIT. I remember it was the experimental handbags design class. Back then, I focused on putting together materials that don’t necessarily go together: something very organic and natural (vegetable tanned leather) and something man-made (plastic).
                  </p>
                  <p>
                  I created a design that reminded me of the iconic Japanese painting “The Kanagawa Wave” while also showcasing a theme of ocean pollution. Our oceans are not meant for plastic waste; as such, I wanted to show alternative ways of using plastic by using this design.
                  </p>
                  <p>
                  Much later, I ended up perfecting the artwork and used a laser cutter to create the waves that you see on the bag today.
                  </p>
                  <p>
                  We donate 10% of the profits from the Japanese collection to The Ocean Cleanup.
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

export default PH_marcobagaPage;
