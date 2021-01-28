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
import ph_formerlyyan from './PH_formerlyyan.jpg';
import { pink } from '@material-ui/core/colors';

const PH_formerlyyanPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | formerly yan | convertible midi snap dress"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_formerlyyan',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} FORMERLY YAN</h6>
          <h1 className={css.pageTitle}>convertible midi snap dress.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainFormerlyYan}>
              <img className={css.coverImageFormerlyYan} src={ph_formerlyyan} alt="formerly yan convertible midi snap dress" />
              <div className={css.text}>
                <h5 className={css.headerSub}>
                Formal vs. Casual. Pregnant vs. Not Pregnant. Flowy vs. Fitted. This dress epitomizes the designer's brand ethos of maximizing versatility and showcasing changing silhouettes in their best light. 
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  Tell us your favorite product from your collection.
                  </p>
                  <p>
                  The Convertible Midi Snap Dress. I wear it all the time. It's perfect for cocktails or galas (I wore mine with the dress snapped so it's more form-fitting and added heels and a little black clutch) and I always get compliments every time I wear it out. I've worn it with sneakers on the weekend and as a cover-up to the beach.
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  How did you come up with the design?
                  </p>
                  <p>
                  I personally am a big fan of asymmetric hems so I wanted to incorporate that into the design. We first created the trapeze silhouette since that shows off the pregnant belly so beautifully and found this great fabric that draped perfectly. Then we put the dress on a non-pregnant body to figure out the best way to alter the silhouette. We added the snaps so that when you snap it close, the asymmetric hem starts to drape in all sorts of unique ways. When the dress is unsnapped, it's still very flowy, pregnant or not. The snaps themselves are design elements. We wanted to make sure that when the dress is unsnapped, it doesn't look like it was supposed to be snapped. Design and function!
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  Is the dress produced locally in LA?
                  </p>
                  <p>
                  Yes! We use a small factory in downtown LA. Very few factories here work with our type of product. Most specialize in cotton, knit, and denim. Woven fabric is a different process and requires a very specific skill set. We tested a number of different factories and the one we have right worked out very well. We produce in very small batches.
                  </p>
                  
                  <p style={{fontWeight: 'bold'}}>
                  What about the fabric?
                  </p>
                  <p>
                  I'm an excellent scavenger - I'm really good at finding gems in vintage shops and sample sales. I used the same skills when finding my fabric. I went to warehouses and spent hours to find the perfect fabric. Everything we use is deadstock designer fabric so the quality is absolutely fantastic.
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

export default PH_formerlyyanPage;
