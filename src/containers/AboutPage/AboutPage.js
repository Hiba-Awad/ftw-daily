import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';
import onlineshopping from './onlineshopping.png';
import appreciation from './appreciation.png';
import together from './together.png';


import css from './AboutPage.css';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Us',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>about us.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>

              <div className={css.dividerline}>
              <h2>
                our story.
              </h2>
              <div className={css.image}>
              <img className={css.graphic} src={onlineshopping} alt="onlineshopping" />
              </div>
              <p>
              We wanted to support small designers and we didn't know how. 
              </p>
              <p> 
              Isn't it funny that in today's digital age, it's still so hard to buy fashion? We can buy cars, furniture, and food with ease online but buying that gorgeous dress from an unknown designer is still a research project that we frankly don't have time for. 
              </p>
              <p>
              That's why we created Revvie.
              </p>
              <p>
              No more #onlineshoppingfails. No more hours spent on Instagram or Google looking for a single "real" woman wearing what you want to buy. 
              </p>
              <p>
              We made it easier for you. Stress-free shopping: who would've thought?
              </p>
              </div>

              <div className={css.dividerline}>
              <h2>
                our designers.
              </h2>
              <div className={css.image}>
              <img className={css.graphic} src={appreciation} alt="appreciation" />
</div>
<p>We want to curate a collection of incredible designers who cultivate craftsmanship while leaving the smallest footprint possible.</p>
<p>
Many of our designers manufacture locally in America using small-batch manufacturing methods. Others employ highly specialized factories in Europe or Latin America for the best quality product. 
</p>
<p>We also wanted to bring our designers' stories to you so you can directly see the person behind the brand and understand who you're supporting. 
</p>
<p>But most of all,  we truly believe that our designers are creating amazing products that will last in your hands. 
</p>
<p>Thank you for your support.</p>
              </div>

              <div className={css.dividerline}>
              <h2>
                the team.
              </h2>
              <div className={css.image}>
              <img className={css.graphic} src={together} alt="together" />
              </div>
              <p>
              We are two long-time friends who were frustrated with the entire online shopping process. Plus, we were sick and tired of fast fashion and realized that there was an entire universe of amazing designers making beautiful products who were yet to be discovered. We put two and two together and came up with Revvie.
              </p>
              <p>
              Eugena founded her own size-inclusive brand called Ava James NYC after a decade-long career in finance. She's Korean but grew up in Hong Kong. She is obsessed with figure skating and lives in New York with her hubby and two kids. 
              </p>
              <p>Hiba is a computer aficionado who came to the US from her hometown in Aleppo, Syria to study computer science at MIT. She lives in Brooklyn and loves snacking while coding. </p>

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

export default AboutPage;
