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
import dp_marcobaga from './DP_marcobaga.jpg';
import { pink } from '@material-ui/core/colors';

const DP_marcobagaPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | marina gil-lemesheva"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_marcobagaPage',
        description: 'Designer Profile - Marco Baga | Revvie',
        name: 'Designer Profile | Marco Baga',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} MARCO BAGA</h6>
          <h1 className={css.pageTitle}>marina gil-lemesheva on luxury, sustainability, and travel inspiration.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
            <div className={css.headerSub}>
            <img className={css.coverImage} src={dp_marcobaga} alt="marina gil-lemesheva | marco baga" />
              <h5 className={css.headerSub}>
              Russian-born and Brooklyn-based designer Marina Gil-Lemesheva believes that it is indeed possible to marry luxury with low footprint. Disillusioned by her time at established brands, Marina launched her own brand with the mission of creating lasting pieces of the finest (and unusual) leathers with minimum waste. 
              </h5>
              </div>
              <div className={css.paragraph}>
              <p style={{fontWeight: 'bold'}}>
              Tell us about your upbringing. Did you have a lot of fashion influences growing up?
              </p>
              <p>
              I grew up in Karelia, Russia, at a border town near Finland. Back then, it wasn’t the most fashionable world! Clothing options were limited. You either made your own clothes or had to alter what you had to stand out, so a lot of people were proficient in knitting and sewing. My mom was a great knitter and I loved watching her. I was also artistic and was good at drawing.
              </p>
              <p>
              Despite wanting to go into the artistic field, it wasn’t really an option for me. I ended up studying economics. Months before completing my MBA, I decided I had to take the plunge and follow my heart. New York was my dream and FIT was the school that could get me to where I knew I wanted to be. It was the one and only school I applied to.
              </p>

              <p style={{fontWeight: 'bold'}}>
              And of course, you got in.
              </p>
              <p>
              Yes, and I had a great four years there. I studied Accessories Design. I also received some additional training in millinery.
              </p>

              <p style={{fontWeight: 'bold'}}>
              Tell us about your time in the industry.
              </p>
              <p>
              After my first year, I managed to score an amazing internship. It was as an embroidery designer for a company that manages orders in Indian factories for the big fashion houses. Embroidery is mostly done in India where they have incredibly skilled artisans. Our clients were all the big fashion houses: Badgley Mishka, Oscar de la Renta …  I received a ton of training and met so many people from the industry through this internship. Plus, there were only three people on the team. I learned all about design, production, product management … even building the website! I had to wear so many hats.
              </p>
              <p>
              After graduation, I worked at Badgley Mishka in their couture department. While I made some handbags for their fashion shows, their bags were licensed to another company, so I didn’t have a lot of opportunities for handbag design.
              </p>
              <p>
              I eventually joined BCBG’s handbag department. Probably the most vivid memory I have from this time is opening these giant boxes from China that contained all the bags.  My eyes would sting and water from the dyes, the chemicals, the glue that generated all these awful fumes. The pollutants plus the immense cost and waste associated with fast fashion was abhorrent to me. I could no longer justify buying a handbag that wouldn’t even last beyond that season and was created in a way that was so detrimental to the environment.
              </p>

              <p style={{fontWeight: 'bold'}}>
              You launched your brand, Marco Baga, and did Sustainable Fashion Week in NYC. How do you incorporate sustainability into your brand and designs?
              </p>
              <p>
              Sustainability is really important to me, not only in manufacturing but sourcing. I use leather but I never work with exotics or fur. For my animal skins, I use either cowhide or goat skins and it’s almost always byproduct (this is when the animal is killed for two purposes - for food and for the hide to be used in the fashion or car industry).
              </p>
              <p>
              I’m also very particular about my patterning. The ‘proper’ technique is to cut the pattern from the center of the leather, but this process creates a lot of wasted leather. I don’t do that. I lay out my patterns in a way that maximizes the use of the leather and generate as little waste as possible.
              </p>
              <p>
              An important part of MARCO BAGA is giving back. We donate 10% of profits to charities that reflect the theme of the collection.
              </p>

              <p style={{fontWeight: 'bold'}}>
              Where does the name “Marco Baga” come from?
              </p>
              <p>
              Marco Polo was a world traveler. I wanted to take my inspiration from him and how he was so open to exploring new cultures and new ideas. Just as he brought back stories and spices from India to Italy, I’m bringing flavors in the form of techniques and colors of the countries that fascinate me to New York and adapt designs to our lifestyle.              </p>
              <p>
              “Baga” is a short form of the word “baggage”, and something that ties in the theme of travel. Sometimes people assume that the brand must be owned by a man because the name “Marco Baga” seems masculine, but we are definitely a woman-owned brand!
              </p>
              <p>
              For instance, one of our collections was inspired by Japan. While I’ve never been to Japan (I was supposed to go this year but COVID scuttled those plans), I’ve always been curious and fascinated by Japanese culture.
              </p>
              <p>
              Another collection is named the Matroishka which reflects my own Russian heritage. In fact, this collection of bags uses embroidery threads that were given to me by my grandmother.
              </p>
              <p>
              I’m currently working on a new collection that’s purely vegetarian using hand-kneaded panels with a Latin American flavor that I’m really excited about.  
              </p>
            
              <p style={{fontWeight: 'bold'}}>
              Your pieces are like art. And you make them all yourself in NYC. Tell us how about the production process. Where do you find the raw materials?
              </p>
              <p>
              Thank you. Yes, I hand make everything myself here in New York. I source my leather locally and the leather origins are usually Italy or Latin America. Most of my leathers are deadstock. For instance, I saw this beautiful red leather that I used for my Matryoshka bags and obviously that meant that it could only be a very limited run.
              </p>
              <p>
              In terms of my production process, I sketch, hand pick local materials, and then make the patterns at my studio in Brooklyn.  My die cuts are made in Chelsea studio, where most of the cutting is happening. Assembling, stitching, painting and hardware installations are done back in Brooklyn studio. And yes, it all is done by hand. Et voila!  
              </p>

              <p style={{fontWeight: 'bold'}}>
              Any cool facts?
              </p>
              <p>
              My grandmother is half Chinese. She was born and raised in Shanghai. I did one of those 23&Me tests and it turns out I have a very mixed background with some Finnish and Korean roots. Not sure how that happened!
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

export default DP_marcobagaPage;
