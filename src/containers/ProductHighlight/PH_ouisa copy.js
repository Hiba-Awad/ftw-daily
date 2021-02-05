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
import ph_ouisa from './PH_ouisa.jpg';
import ph_ouisa2 from './PH_ouisa2.jpg';

import { pink } from '@material-ui/core/colors';

const PH_ouisaPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | ouisa | the Lillet dress"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_ouisa',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} OUISA</h6>
          <h1 className={css.pageTitle}>the lillet stretch dress.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainOUISA2}>
              <div className={css.contentMainOUISA}>
                <img className={css.coverImageOUISA} src={ph_ouisa} alt="ouisa lillet stretch dress" />
                <img className={css.coverImageOUISA} src={ph_ouisa2} alt="ouisa lillet stretch dress" />
              </div>
              <div className={css.text}>
                <h5 className={css.headerSub}>
                  We sat down with designer Bryn Taylor to talk about her favorite piece from the collection, the Lillet Stretch Dress, the perfect example of 'quiet chic' and sophistication. 
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  What’s your favorite product?
                  </p>
                  <p>
                  The Lillet Stretch Dress, for sure. My mother, who’s very chic, adores this dress.
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  Tell us how you came up with this design.
                  </p>
                  <p>
                  I wanted to create a super chic dress that, true to the OUISA style, was super comfortable. The fabric is this interesting polyester with stretch – it’s almost like scuba fabric but much thinner. It’s also completely matte. I love that the dress maintains a structure when you move; it’s not as flowy as it seems.
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  How did you come up with the draping in the back?
                  </p>
                  <p>
                  Many, many, many fit sessions!
                  </p>
                  <p>
                  I also wanted to make sure that you could wear a bra with the dress and not have the bra be exposed. Plus, I didn’t want the dress to fall off the shoulder. It’s all about the little details.
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

export default PH_ouisaPage;
