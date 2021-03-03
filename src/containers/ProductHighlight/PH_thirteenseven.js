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
import ph_thirteenseven from './PH_thirteenseven.jpg';
import ph_thirteenseven2 from './PH_thirteenseven2.jpg';

import { pink } from '@material-ui/core/colors';

const PH_thirteensevenPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | thirteenseven | the trapezoid pullover"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_thirteenseven',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} 13-7</h6>
          <h1 className={css.pageTitle}>the trapezoid pullover.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainOUISA2}>
              <div className={css.contentMainOUISA}>
                <img className={css.coverImageOUISA} src={ph_thirteenseven} alt="thirteenseven the trapezoid pullover" />
                <img className={css.coverImageOUISA} src={ph_thirteenseven2} alt="thirteenseven the trapezoid pullover" />
              </div>
              <div className={css.text}>
                <h5 className={css.headerSub}>
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  What’s your favorite shirt? 
                  </p>
                  <p>
                  The Trapezoid Pullover. Not coincidentally, it’s also the most popular style in the collection.
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  Tell us about your design process.
                  </p>
                  <p>
                  The pocket was inspired by the good ol’ hoodie. I was looking for a shirt that could be casual and dress at the same time. There’s just something about the pocket that makes you feel comfortable and at ease, but the shirting fabric also looks very sleek. It’s all about bridging the gap between dressy and casual. Bonus points that you can wear the shirt untucked!
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

export default PH_thirteensevenPage;
