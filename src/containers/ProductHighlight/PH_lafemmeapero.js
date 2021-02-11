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
import ph_lafemmeapero from './PH_lafemmeapero.jpg';
import ph_lafemmeapero2 from './PH_lafemmeapero2.jpg';

import { pink } from '@material-ui/core/colors';

const PH_lafemmeaperoPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | la femme apero | la robe legere fendue"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_lafemmeapero',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} LA FEMME APERO</h6>
          <h1 className={css.pageTitle}>la robe legere fendue.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainOUISA2}>
              <div className={css.contentMainOUISA}>
                <img className={css.coverImageOUISA} src={ph_lafemmeapero} alt="ouisa lillet stretch dress" />
                <img className={css.coverImageOUISA} src={ph_lafemmeapero2} alt="ouisa lillet stretch dress" />
              </div>
              <div className={css.text}>
                <h5 className={css.headerSub}>
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  What's your favorite item from your collection? Why?
                  </p>
                  <p>
                  <b>S:</b> The blue slip dress, for sure. It’s super comfortable, really easy to wear, and you feel very empowered regardless of your body shape. We also love the concept of “accidentally sexy” so we created a long silhouette but there’s a slit. Not showing too much skin but still very empowering and sexy.
                  </p>
                  <p>
                  <b>L:</b> It’s our bestseller. When we started the brand, we spent a lot of time thinking about what is sexy? What is the French way of being sexy? And French women love showing a little leg, whether it’s a short skirt or a slit in the front or back. So it’s very on brand! 
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

export default PH_lafemmeaperoPage;
