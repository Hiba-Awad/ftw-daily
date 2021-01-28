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
import ph_arteaga from './PH_arteaga.jpg';
import ph_arteaga2 from './PH_arteaga2.jpg';
import { pink } from '@material-ui/core/colors';

const PH_arteagaPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | arteaga | the paola tunic dress"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_arteaga',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} ARTEAGA</h6>
          <h1 className={css.pageTitle}> the paola dress.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainFormerlyYan}>
              <img className={css.coverImageFormerlyYan} src={ph_arteaga} alt="arteaga paola dress" />
              <div className={css.text}>
                <h5 className={css.headerSub}>
                Created as a collaboration with Chiapan artisans in Mexico, the Paola is a masterpiece of intricate hand embroidery.
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  Tell us your favorite piece from the collection.
                  </p>
                  <p>
                  It would be the Paola dress. It's made of a beautifully soft silk and embroidered all by hand.
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  How did you come up with the design?
                  </p>
                  <p>
                  I was in Mexico working with artisans. I didn’t have a specific design in mind, but I had this gorgeous fabric and we ended up creating the dress together. It was a true collaboration. The embroidery on the dress is in their traditional motifs. They hand-stitched the embroidery at the neckline and at the hems. It was a long process, and took about 50 hours. The craftsmanship on this piece is really masterful. It’s certainly not a piece that can or should ever be mass produced and we only made a very few select pieces. 
                  </p>
                  
                </div>
                <img className={css.coverImageFormerlyYan} src={ph_arteaga2} alt="arteaga paola dress" />
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

export default PH_arteagaPage;
