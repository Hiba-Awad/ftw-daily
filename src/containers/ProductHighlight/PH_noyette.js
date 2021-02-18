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
import ph_noyette from './PH_noyette.png';
import ph_noyette2 from './PH_noyette2.png';
import { pink } from '@material-ui/core/colors';

const PH_noyettePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="product highlight | HMÉTÉ | the classic black dress"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PH_noyette',
        description: 'Product Highlight | Revvie',
        name: 'Product Highlight Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>PRODUCT HIGHLIGHT {'\u2B24'} NOYETTE</h6>
          <h1 className={css.pageTitle}> the fillmore dress.</h1>
         
          <div className={css.contentWrapper}>
            <div className={css.contentMainFormerlyYan}>
              <img className={css.coverImageFormerlyYan} src={ph_noyette} alt="noyette classic black dress" />
              <div className={css.text}>
                <h5 className={css.headerSub}>
                  
                </h5>
                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  Which dress is your favorite?  
                  </p>
                  <p>
                  The Fillmore dress is my favorite.  
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  How did you come up with the design?                
                  </p>
                  <p>
                  It’s basically an elevated T-shirt dress. I don’t normally buy t-shirt dresses because it gaps at the waist and isn’t always flattering. I took the shape of a regular t-shirt dress but added gathering on the side and put in a slit for structure and shape. It’s made of satin and when you see it move, it’s so gorgeous.                  
                  </p>
                  <p>
                  My aesthetic is all about the romantic, dreamy, floaty, almost ethereal look but I also wanted to create silhouettes that could fit on a variety of body shapes.
                  </p>
                  
                  <p style={{fontWeight: 'bold'}}>
                  Inclusivity is unfortunately still not the norm for most designers. Why was it important to you?               
                  </p>
                  <p>
                  I don’t understand why it isn’t the norm. I wear a size 12 and like most women, have gone up and down different sizes. When I worked in fashion, I remember being a size 8 and hearing someone comment about how you can’t work in fashion if you’re a bigger woman. Which was just absurd. It’s important to me that women can see themselves in my dresses, so I make sure to showcase a variety of body types and ethnicities in my photos.
                  </p>

                </div>
                <img className={css.coverImageFormerlyYan} src={ph_noyette2} alt="noyette classic black dress" />
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

export default PH_noyettePage;
