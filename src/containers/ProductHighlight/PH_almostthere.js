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
import ph_almostthere from './PH_almostthere.jpg';
import ph_almostthere2 from './PH_almostthere2.jpg';

import { pink } from '@material-ui/core/colors';

const PH_almosttherePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | almost there | betty + bianca dress"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_almostthere',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} ALMOST THERE</h6>
          <h1 className={css.pageTitle}>betty + bianca (she couldn't pick one).</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainOUISA2}>
              <div className={css.contentMainOUISA}>
                <img className={css.coverImageOUISA} src={ph_almostthere} alt="bianca dress almost there" />
                <img className={css.coverImageOUISA} src={ph_almostthere2} alt="betty dress almost there" />
              </div>
              <div className={css.text}>
                <h5 className={css.headerSub}>
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  What’s your favorite piece?
                  </p>
                  <p>
                  My dresses are like my friends to me. If I absolutely had to choose, it would be the Betty and the Bianca.
                  </p>
                  
                  <p style={{fontWeight: 'bold'}}>
                  Tell us about the design process. How did you come up with the silhouettes?
                  </p>
                  <p>
                  The Betty is named after my grandmother so there’s a special connection that I have with this style. I love how versatile and transitional this piece is. It has these tortoise buttons all the way from the chest area to the hem that you can button or unbutton to your heart’s content.
                  </p>
                  <p>
                  The Bianca is just such an easy dress. I’m always running around, and this is the perfect dress that I can throw on. With minimal effort, I can look super chic.
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  How do you want your woman to feel when she wears your dresses?
                  </p>
                  <p>
                  I design for a wide age range – everyone from GenZ to Baby Boomers have worn my dresses. My grandmother, my mother, my sister, and I can all wear the same dress and be beautiful in our own ways. 
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

export default PH_almosttherePage;
