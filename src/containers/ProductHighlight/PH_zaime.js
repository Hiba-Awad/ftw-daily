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
import ph_zaime from './PH_zaime.jpg';
import ph_zaime2 from './PH_zaime2.jpg';
import { pink } from '@material-ui/core/colors';

const PH_zaimePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | sylth virago | persephone in white"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_zaime',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} ZAIME</h6>
          <h1 className={css.pageTitle}>reflective bomber jacket.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainFormerlyYan}>
              <img className={css.coverImageFormerlyYan} src={ph_zaime} alt="reflective bomber jacket" />
              <div className={css.text}>
                <h5 className={css.headerSub}>
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  What’s your favorite piece?
                  </p>
                  <p>
                  All of them! I love all the pieces for different reasons but if I really had to choose, I would say the reflective bomber jacket because it’s so unique.
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  Talk to us about the design inspiration.
                  </p>
                  <p>
                  I had initially planned on doing a line of coats and jackets, but those plans were scuttled because development delays. I still wanted to do a jacket for this line, and this was the result. I love the bomber silhouette, but I added a puff sleeve to give it that 80s aesthetic I love.
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  Where did you find the reflective fabric? It’s very one-of-a-kind.
                  </p>
                  <p>
                  I was going to do two colors – black and army green. I had already bought the fabric in those two colors, but I kept passing by this beautiful reflective fabric. Finally, one day I just bought it and took it to my factory and had them make a sample. I loved how it turned out!
                  </p>
                  <p>
                  It’s hard to see in the picture but the fabric is quite obscure in dark light. It’s only when the light hits that you get that rainbow kaleidoscopic effect.
                  </p>
                  <p>
                  I love that you can throw this jacket on anything. In the fall and winter months, my wardrobe is quite dark – almost monochromatic in black. But put on this jacket and you instantly have an elevated look with a pop of color. 
                  </p>
                  
                        
                </div>
                <img className={css.coverImageFormerlyYan} src={ph_zaime2} alt="formerly yan convertible midi snap dress" />

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

export default PH_zaimePage;
