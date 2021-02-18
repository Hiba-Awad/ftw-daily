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

import css from './DesignerProfile.css';
import dp_hmete from './DP_hmete.jpg';
import { pink } from '@material-ui/core/colors';

const DP_hmetePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | hikmete morina"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_hmetePage',
        description: 'Designer Profile - Hikmete Morina | HMÉTÉ',
        name: 'Designer Profile | HMÉTÉ',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} HMÉTÉ</h6>
          <h1 className={css.pageTitle}>hikmete on bringing life to officewear.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
            <div className={css.headerSub}>
            <img className={css.coverImage} src={dp_hmete} alt="hikmete morina hmete" />
              <h5 className={css.headerSub}>
              Swiss designer Hikmete (hik-MEH-TEH) Morina didn't think she would be a fashion entrepreneur. She spent her childhood in Switzerland and began her career as an auditor at PwC before making the move to New York and eventually launching her workwear brand, HMÉTÉ (ash-MEH-TEH).              </h5>
              </div>
              <div className={css.paragraph}>
              <p style={{fontWeight: 'bold'}}>
              You made the leap from being an auditor to fashion designer. That's a big leap! How did it happen?              </p>
              <p>
              I had spent about five years at PwC in Zurich before moving to New York in 2014. My dress code back in Switzerland was business formal so there was no question about what I would be wearing - always a suit. When I first moved, I quickly realized that the dress code here was much more fluid and more casual ... which meant that I started spending a lot of my brainpower in the mornings on what to wear. Questions like "is this blazer too formal for the office? What if I have a date after work? I have a big presentation - is this appropriate?" I felt that existing workwear options were excellent ... for work. There were next to no options for fashionable and transitional work-appropriate pieces.
              </p>
              
              <p style={{fontWeight: 'bold'}}>
              Where does HMÉTÉ come in?
              </p>
              <p>
              We believe that clothes should be functional, comfortable, and stylish. You wouldn't give an athlete a garment that looks fabulous but sacrifices performance. We have the same attitude for working women - we need garments that can move with us and help us perform at our best. We also don't want to buy pieces for every specific moment of the day. Transitional pieces that marry function and fashion are probably at the core of what we do.
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              COVID has obviously had a huge impact on workwear brands. What direction is HMÉTÉ moving in?              </p>
              <p>
              Interestingly, we think that what we do is in line with the direction of what's happening with COVID. We're about functional, wearable clothes and our theme was "day to night". Now we're about pieces that you can wear all day, any day for working women. Keep in mind that many working women are spending hours on Zoom and still have to look presentable. We're just shifting towards work (or rather, Zoom) appropriate pieces that you can also lounge around in at home.              
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              Who is the HMÉTÉ woman?
              </p>
              <p>
              She's a young professional working with big ambitions and big social life. She's sophisticated, always dressed appropriately, and doesn't want to sacrifice style for function.
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              Tell us about the fabrics that you use and your production process.
              </p>
              <p>
              We focus on natural fibers: silk, viscose, tencel, rayon... Sustainability is a big focus. We will start to feature a lot of wool which has a slightly more elevated look. We produce everything in small batches at a family-owned factory in Portugal.
              </p>
              

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

export default DP_hmetePage;
