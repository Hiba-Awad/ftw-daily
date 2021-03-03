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
import ph_kovasky from './PH_kovasky.jpg';
import ph_kovasky2 from './PH_kovasky2.jpg';
import ph_kovasky3 from './PH_kovasky3.jpg';

import { pink } from '@material-ui/core/colors';

const PH_kovaskyPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | kovasky | madame dress, peekaboo leggings, chelsea hoodie"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_kovasky',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} KOVASKY</h6>
          <h1 className={css.pageTitle}>the madame dress. the peekaboo legging. the chelsea hoodie.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainOUISA2}>
              <div className={css.contentMainOUISA}>
                <img className={css.coverImageOUISA} src={ph_kovasky} alt="kovasky madame coat" />
                <img className={css.coverImageOUISA} src={ph_kovasky2} alt="kovasky peekaboo legging" />
              </div>
              <div className={css.text}>
                <h5 className={css.headerSub}>
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  What’s your favorite piece? 
                  </p>
                  <p>
                  I don’t have a favorite. They’re like my babies. I naturally wear all of my pieces all the time. Especially pre-COVID when travel was a thing, I would wear my pieces for my flights since they were so comfy. But I can definitely talk about a few pieces.
                  </p>
                  <p>
                  The peekaboo leggings - I thought to myself why not make leggings fun? I think a minskirt and thigh high boot combo is super hot so I figured why not combine both to create the look. I actually wear them to go hiking because they also help with ventilation. 
                  </p>
                  <p>
                  The Madame dress - a super functional dress that happens to be very popular with lawyers.
                  </p>
                  <p>
                  The Chelsea hoodie - probably the most travel-friendly piece in the collection. I wear it all the time when I’m going to the airport because I hate it when the suitcase handle digs into my hand and the thumbholes protect my palm. 
                  </p>
                 
                  <img className={css.coverImageOUISA} src={ph_kovasky3} alt="kovasky chelsea hoodie" />

                  
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

export default PH_kovaskyPage;
