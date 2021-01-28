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
import dp_formerlyyan from './DP_formerlyyan.jpg';
import { pink } from '@material-ui/core/colors';

const DP_formerlyyanPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | amanda schechter (formerly yan)"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_formerlyyanPage',
        description: 'Designer Profile - Formerly Yan | Revvie',
        name: 'Designer Profile | Formerly Yan',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} FORMERLY YAN</h6>
          <h1 className={css.pageTitle}>amanda schechter on maternity style and the future.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <div className={css.headerSub}>
              <img className={css.coverImage} src={dp_formerlyyan} alt="amanda schechter | formerly yan" />
                <h5 className={css.headerSub}>
                Amanda Schechter is a mom of two and shaking up the world of maternity wear. Frustrated by the uninspired styles and disposable nature of maternity fashion, she decided to create a collection that could be worn before, during, and after pregnancy.
                </h5>
              </div>
              
              <div className={css.paragraph}>
                <p style={{fontWeight: 'bold'}}>
                Tell us how you got started in fashion. Did you ever think you would be a fashion designer?
                </p>
                <p>
                My first job out of college was at American Express. I worked in their marketing department for four years and moved to their Hong Kong outpost to help build the personal online loan business. While in Hong Kong, I started to get the retail itch. I eventually moved to New York where I got an offer from Saks to join their digital marketing team. I then moved over to Bloomingdales, again in digital marketing, and absolutely loved the job.
                </p>
                

                <p style={{fontWeight: 'bold'}}>
                Why did you leave?
                </p>
                <p>
                It was a personal life decision. I got married and my husband lived out here in Los Angeles. So we decided to make LA our home base.
                </p>

                <p style={{fontWeight: 'bold'}}>
                How did the idea for Formerly Yan come about?
                </p>
                <p>
                I was doing some consulting while job hunting when I found out I was pregnant. I quickly realized there was nothing for me to wear to my interviews. It is surprisingly difficult to find nice maternity clothes. My options were big box, lower-end retail (think Target, Asos), Pea in the Pod for designer denim, some good local boutiques with higher-end offerings. Regardless, I felt the selections were limited. The workwear was especially lacking and looked like something you would wear in 1997. I saw a big gap in the market for elevated and sophisticated maternity wear at an accessible price point.
                </p>

                <p style={{fontWeight: 'bold'}}>
                Tell us about your design philosophy. It's such a new (and sustainable!) concept to have clothes that can be worn before, during, and after pregnancy.
                </p>
                <p>
                Every piece is designed so that it can be worn in multiple ways and is flattering on bodies that are pregnant or not. For example, trapeze dresses are a super common shape for maternity wear but realistically aren’t flattering on most non-pregnant bodies; most of us need some shape! We create silhouettes that are looser so they are more forgiving while allowing you to cinch it in places for a different shape.
                </p>
                <p>
                In terms of style, I love pieces that are timeless, chic and not overly trendy. This sounds crazy but I still have pieces from high school that I wear today. I even have my prom dress that I wear to weddings. It's all about creating quality pieces that can be relevant for a long time and not just amassing tons of stuff that you discard. Not to mention, maternity wear is especially wasteful given that you can only wear it for a few months before it becomes unwearable.
                </p>
                
                <p style={{fontWeight: 'bold'}}>
                What about color? You have some stunning prints and bold colors.
                </p>
                <p>
                I'm a New Yorker so black will always have a place in my collection. I also love bold colors and if I see a color that really speaks to me, I'll always find a place for it. Prints are harder to wear but I think it's so chic to wear a loud, bold and colorful print when you're pregnant. There are some modern florals that are also really gorgeous.
                </p>              

                <p style={{fontWeight: 'bold'}}>
                What's your take on the future of retail?
                </p>
                <p>
                I think there'll always be multi-brand retailers but I'm not bullish on giant department stores. It's much harder to create a good experience for the customer in huge spaces.
                </p>
                <p>
                I don't think wholesale will go away but I certainly think and hope the model will change. There's too much discounting, unnecessary markups and crazy timelines. Formerly Yan is in a couple of local boutiques but we don't plan on making wholesale a big part of our strategy - as a small brand, it's just not feasible for me to meet the timelines and quantities. We use wholesale mostly as a marketing strategy to get the exposure in a local footprint. Plus, we get to sell quality items at a much more accessible price as a direct-to-consumer brand.
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

export default DP_formerlyyanPage;
