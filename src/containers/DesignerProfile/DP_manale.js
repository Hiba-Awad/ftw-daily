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
import dp_manale from './DP_manale.jpeg';
import { pink } from '@material-ui/core/colors';

const DP_manalePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | manale dagnew"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_manalePage',
        description: 'Designer Profile - Manalé | Revvie',
        name: 'Designer Profile | Manalé',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} MANALÉ</h6>
          <h1 className={css.pageTitle}>manalé on fashion for philanthropy and drawing inspiration from Ethiopia, her homeland.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
            <div className={css.headerSub}>
            <img className={css.coverImage} src={dp_manale} alt="manale dagnew" />
              <h5 className={css.headerSub}>
              Manalé Dagnew spent decades in the fashion world as a bridal designer. It was when she took a sabbatical and traveled to Ethiopia when she came up with the concept of fashion for philanthropy.
              </h5>
              </div>
              <div className={css.paragraph}>
              <p style={{fontWeight: 'bold'}}>
              Manalé, you are a woman of the world. Tell us a little about your background.
              </p>
              <p>
              I was born and raised in Addis Ababa, Ethiopia. I came to the US in the late 70s when the Communist regime came to power. I ended up finishing my education in upstate New York where I got my degree as a theater major with a minor in costume design. I tried my luck in Italy to become an actor and ended up in fashion instead. I came back to the US to enroll in FIT where I studied design (with a big focus on knitwear) and it was in 1990 when I began my journey as a designer.
              </p>
              
              <p style={{fontWeight: 'bold'}}>
              You were a bridal designer. How did you end up on that path?
              </p>
              <p>
              I was a sportswear designer for established brands first. I did mens socks, sweaters, a whole variety of things. I began to tinker with the idea of creating my own brand after a few years and weddings was an obvious category for me. I was always helping out with weddings in my social network and friends, and it felt like a natural move. In those days, outside of Vera Wang, there really weren’t a lot of bridal designers with modern silhouettes and designs and I knew that was where I could exell. I launched in 1996 and by 1998, I was considered one of the top 10 bridal designers. 
              </p>
              <p>
              In 2002, I decided to move part-time to Paris and I shuttled back and forth across the Atlantic for a few years. I was heads down on my business on this constant treadmill of work and producing and eventually I decided that it was time to take a pause. In my heart, I wanted to do something in Ethiopia with a particular focus on philanthropy. 
              </p>

              <p style={{fontWeight: 'bold'}}>
              How did the idea for Manalé International come about?
              </p>
              <p>
              For starters, I closed the bridal business. It was an amazing ride but that chapter was finished. I took a 2 year sabbatical and went to Ethiopia where I traveled around the country. I took on a few projects locally, including one particular one that stands out where I worked alongside artisans with semi precious stones and beautiful fabrics. Another project I did during this time actually took me to Como, Italy where I designed high-end duty-free accessories for an airline. It was this project that sparked the idea that would become Manale - use Ethiopia as the base of my inspiration to create beautiful high-end accessories and ready-to-wear. To be clear, my pieces are not Ethiopian; they are inspired by Ethiopia. The seed is Ethiopian but the fruit is not.
              </p>
              <p>
              Of course, a big focus for us is philanthropy. We work with a local school to whom the majority of our profits are donated for the children’s education and livelihoods. 
              </p>

              <p style={{fontWeight: 'bold'}}>
              Tell us about the production process. Where is everything made and sourced?
              </p>
              <p>
              I came back to New York in 2017 and I’ve been here since. I work closely with a graphic artist who I met in Ethiopian but is Russian and lives in St. Petersburg. We develop the prints for the upcoming collections together. Our prints are then produced in India or Italy depending on whether it’s for the contemporary or the luxury line. 
              </p>
              <p>
              We use a variety of fabrics. Everything from wool, modal, cashmere, to silk and linen. All of our cut and sew is done in New York.
              </p>
                            
              <p style={{fontWeight: 'bold'}}>
              Who is the Manalé woman?
              </p>
              <p>
              She has values, a lot of life and kindness. She’s compassionate, fun, and confident. I love how there’s such a big variety of ages in the women who have supported us. I have young interns who love the collection all the way up to this one woman who was in her 90s. 
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

export default DP_manalePage;
