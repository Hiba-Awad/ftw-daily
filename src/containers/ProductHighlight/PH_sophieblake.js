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
import ph_sophieblake from './PH_sophieblake.jpg';
import ph_sophieblake2 from './PH_sophieblake2.jpg';
import { pink } from '@material-ui/core/colors';

const PH_sophieblakePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | SOPHIE BLAKE | the valeria cuff"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_sophieblake',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} SOPHIE BLAKE</h6>
          <h1 className={css.pageTitle}> the valeria cuff.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainFormerlyYan}>
              <img className={css.coverImageFormerlyYan} src={ph_sophieblake} alt="sophie blake the valeria cuff" />
              <div className={css.text}>
                <h5 className={css.headerSub}>
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  What’s your favorite piece from the collection?
                  </p>
                  <p>
                  I have a lot of different pieces that I love. Every piece to me is special but if I had to pick, I would say the Valeria Cuff. 
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  Tell us about the design inspiration. 
                  </p>
                  <p>
                  I went on a driving trip to Utah and Arizona with my husband. We sourced the stones for this piece from this trip. During this time, I was also pregnant with my daughter, Loomi, so this piece is extra meaningful for me.
                  </p>
                  
                  <p style={{fontWeight: 'bold'}}>
                  How did you come up with the design?
                  </p>
                  <p>
                  I love that this cuff has a very powerful vibe, almost like a superwoman cuff. I also think it looks like a very modernized cactus, which makes sense given the inspiration was Arizona. 
                  </p>

                </div>
                <img className={css.coverImageFormerlyYan} src={ph_sophieblake2} alt="sophie blake the valeria cuff" />
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

export default PH_sophieblakePage;
