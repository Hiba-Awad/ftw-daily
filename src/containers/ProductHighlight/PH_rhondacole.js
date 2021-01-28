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
import ph_rhondacole from './PH_rhondacole.jpg';
import { pink } from '@material-ui/core/colors';

const PH_rhondacolePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | rhonda cole | the Cappella shirt"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_rhondacole',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} RHONDA COLE</h6>
          <h1 className={css.pageTitle}>the cappella shirt.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <img className={css.coverImage} src={ph_rhondacole} alt="metal & stone creations nature's grip ring" />
              <div className={css.text}>
                <h5 className={css.headerSub}>
                  The designer's take on the classic tie neck blouse is updated using a sumptuous and luxurious fabric.
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  Which shirt is your favorite?
                  </p>
                  <p>
                  My favorite one is whichever one I’m wearing at the time.  But if I had to choose, it’ll be the Cappella – it’s the first one that I made. When I first started wearing it, people would ask me all the time where I got it. It’s so timeless.
                  </p>
                  <p>
                  I remember this one woman who insisted that she didn’t wear shirts. She ended up purchasing the Capella and I went to an event with her. That night, she got 6 compliments. She didn’t even tie the ribbon and just left the two pieces hanging. 
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  How did you come up with the design?
                  </p>
                  <p>
                  I like scarves and this is a classic silhouette. There’s been many versions of this blouse and I always thought the ribbon would rarely hang properly. Plus, I would only ever see it in polyester, never in a beautiful fabric. So, this was my take on a classic silhouette done luxuriously.
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

export default PH_rhondacolePage;
