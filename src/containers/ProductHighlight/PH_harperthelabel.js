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
import PH_harperthelabel from './PH_harperthelabel.jpg';
import { pink } from '@material-ui/core/colors';

const PH_harperthelabelPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | harper the label | storms will roll crossbody"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_harperthelabel',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} HARPER THE LABEL</h6>
          <h1 className={css.pageTitle}> storms will roll crossbody.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainFormerlyYan}>
              <img className={css.coverImageFormerlyYan} src={PH_harperthelabel} alt="harper the label storms will roll crossbody" />
              <div className={css.text}>
                <h5 className={css.headerSub}>
                  A buttery soft crossbody with a wide shoulder strap that is perfect for your everyday needs. 100% chrome-free leather, of course.
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  Tell us your favorite product in the collection.
                  </p>
                  <p>
                  Hands down the crossbody tote. I’m not kidding, I carry it every day. It was the first design in the collection too. I developed the pattern myself and wore it everywhere for a couple of years, making tweaks to the pattern and design. 
                  </p>
                  <p>
                  Funnily enough, it turns out that this style is one of the hardest to photograph because the leather is so buttery and soft. It moves almost like garment leather. It’s a challenge to style because it practically melts as soon as you set it down. Photograph or not, it does feel fantastic to the touch!
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

export default PH_harperthelabelPage;
