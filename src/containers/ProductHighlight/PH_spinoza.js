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
import ph_spinoza from './PH_spinoza.jpg';
import ph_spinoza2 from './PH_spinoza2.jpg';
import { pink } from '@material-ui/core/colors';

const PH_spinozaPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | spinoza | the ivy sunglasses"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_spinoza',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} SPINOZA</h6>
          <h1 className={css.pageTitle}>the ivy.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainFormerlyYan}>
              <img className={css.coverImageFormerlyYan} src={ph_spinoza} alt="formerly yan convertible midi snap dress" />
              <div className={css.text}>
                <h5 className={css.headerSub}>
                  A fan favorite that can stand the test of time and the wear and tear of daily activity, we talk to founder Silja Kim about her personal favorite frame. 
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  Which one is your favorite frame?
                  </p>
                  <p>
                  The Ivy, hands down. It’s also (unsurprisingly) our runaway bestseller.
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  Why is it so popular?
                  </p>
                  <p>
                  It works well for so many different face shapes. In fact, I think there are very few face shapes that don’t work for this frame. Not to mention, the frame is super light and thin but isn't fragile. It has a very flat and minimalist shape. Most days, I don’t even put the glasses in a case – I just toss them in my bag and with a quick wipe, they’re good to go. Most of the time, you have to treat your sunglasses with kid gloves otherwise they get scratched or damaged; not SPINOZA glasses! They make a fantastic everyday pair.
                  </p>
                  <p>
                  We offer this style in multiple colors. The black is very New York, very Manhattan. It has a super chic vibe. We also offer this frame in pink which looks fantastic as part of your resort outfit – it’s very Instagrammable!
                  </p>
                        
                </div>
                <img className={css.coverImageFormerlyYan} src={ph_spinoza2} alt="formerly yan convertible midi snap dress" />

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

export default PH_spinozaPage;
