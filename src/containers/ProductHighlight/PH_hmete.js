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
import ph_hmete from './PH_hmete.jpg';
import ph_hmete2 from './PH_hmete2.jpg';
import { pink } from '@material-ui/core/colors';

const PH_hmetePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | HMÉTÉ | the classic black dress"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_hmete',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} HMÉTÉ</h6>
          <h1 className={css.pageTitle}> the classic black dress.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainFormerlyYan}>
              <img className={css.coverImageFormerlyYan} src={ph_hmete} alt="hmete classic black dress" />
              <div className={css.text}>
                <h5 className={css.headerSub}>
                After wearing out a trusty LBD, Hikmete searched fruitlessly for its replacement and came up empty.
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  Tell us about your favorite product from your collection.
                  </p>
                  <p>
                  Hands down, The Classic Black Dress. Funnily enough, this was the first dress in the collection too.
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  Walk us through the design process. What was the inspiration?                 
                  </p>
                  <p>
                  I had this LBD that was my absolute go-to: it was professional, fit well, good quality, and I could wear it to work, to dinners, to events ... It was really the perfect, super versatile garment. I must've had it for four to five years and completely wore it out. When it came time to replace it, I honestly just couldn't find anything remotely close to what I had. My requirements were simple: elegant, wearable, and transitional that didn't break the bank. Frankly, it just didn't exist. So I set out to create my version of the perfect LBD. Not coincidentally, it is our bestseller and we have zero returns on it too!                  
                  </p>
                  
                  <p style={{fontWeight: 'bold'}}>
                  How did you know that you had made the perfect LBD?                  
                  </p>
                  <p>
                  One of my customers is a corporate executive. After she bought this dress, she told me how much she loved it. Whenever she had a big presentation or a post-work event, this was her go-to. It was exactly how I imagined my customers to wear this piece and to hear it directly from my customer, it was so gratifying and validating.                  
                  </p>

                </div>
                <img className={css.coverImageFormerlyYan} src={ph_hmete2} alt="hmete classic black dress" />
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

export default PH_hmetePage;
