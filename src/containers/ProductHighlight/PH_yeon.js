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
import ph_yeon from './PH_yeon.jpg';
import ph_yeon2 from './PH_yeon2.jpg';

import { pink } from '@material-ui/core/colors';

const PH_yeonPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | yeon | the rose bomber jacket"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_yeon',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} YEON</h6>
          <h1 className={css.pageTitle}>the rose bomber jacket.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainOUISA2}>
              <div className={css.contentMainOUISA}>
                <img className={css.coverImageOUISA} src={ph_yeon} alt="yeon rose bomber jacket" />
                <img className={css.coverImageOUISA} src={ph_yeon2} alt="yeon rose bomber jacket" />
              </div>
              <div className={css.text}>
                <h5 className={css.headerSub}>
                  We sat down with designer Yeon Park to talk about her favorite piece from the collection, the rose bomber jacket. 
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  What’s your favorite product from the collection?
                  </p>
                  <p>
                  It’s so hard to pick but if I absolutely had to, it would be the rose bomber jacket. 
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  The fabric is so unique. How did you come up with the design?
                  </p>
                  <p>
                  I was curious what would happen if I took an X-ray photograph of a flower. I found an X-ray photographer and he took photos of a variety of flowers: a rose, a lily, etc. When I saw the results, I was immediately drawn to the rose, probably because roses have so many beautiful layers. The result was really something special. 
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  Amazing. How did you get the fabric made?
                  </p>
                  <p>
                  The fabric is a jacquard with the rose weaved in and I had it made in Italy. I was blown away. It was silky, luminous, very feminine, and very couture. Plus, I loved that this fabric was a one-of-a-kind that no other designer has which is important to me. 
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  What about the silhouette? The bomber jacket style is quite different from the other pieces in your collection.
                  </p>
                  <p>
                  The fabric looked like it belonged in haute couture but I wanted to make a garment that would be wearable. Which is why I decided on a bomber jacket silhouette which is obviously much easily wearable than a gown.  
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

export default PH_yeonPage;
