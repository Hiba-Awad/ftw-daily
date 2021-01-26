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
import ph_avajamesnyc from './PH_avajamesnyc.jpg';
import { pink } from '@material-ui/core/colors';

const PH_avajamesnycPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | ava james nyc | madrid in dark green"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_avajamesnyc',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} AVA JAMES NYC</h6>
          <h1 className={css.pageTitle}>madrid dress in dark green.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <img className={css.coverImage} src={ph_avajamesnyc} alt="eugena delman ava james nyc" />
              <div className={css.text}>
                <h5 className={css.headerSub}>
                The Madrid silhouette is the signature silhouette of Ava James NYC. Designer Eugena Delman wanted to create a versatile day-to-night piece for the city woman that she could wear to the office with a blazer or with heels sans jacket for a night out. 
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  Tell us your favorite piece from the collection.
                  </p>
                  <p>
                  For sure, the Madrid style in Dark Green. I love the Madrid silhouette and the color is just stunning. My sister modeled one of the first versions and I thought she looked seriously fabulous. 
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  How did you come up with the design?
                  </p>
                  <p>
                  This was one of the first designs we came up with. I wanted a silhouette that would flatter as many body shapes as possible while being office-appropriate yet sexy. A lot of boxes to tick! So we came up with a beautifully fitted bodice and a trumpet skirt. I felt that a trumpet skirt was less expected compared to the traditional fit-and-flare style while still being flattering.
                  </p>
                  <p>
                  Also, I’m such a sucker for backless dresses that I just had to put in a low V-back. I love that a woman can throw on a beautifully tailored office for work and then head out for drinks with friends while showing a little skin. Why not?
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

export default PH_avajamesnycPage;
