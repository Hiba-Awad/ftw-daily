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
import dp_tarinthomas from './DP_tarinthomas.png';
import { pink } from '@material-ui/core/colors';

const DP_tarinthomasPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | Tarin Thomas"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_tarinthomasPage',
        description: 'Designer Profile - Tarin Thomas | Revvie',
        name: 'Designer Profile | Tarin Thomas',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} TARIN THOMAS</h6>
          <h1 className={css.pageTitle}>kylie nakao on creating unusual combinations and the importance of paying up for quality and sustainability.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
            <div className={css.headerSub}>
            <img className={css.coverImage} src={dp_tarinthomas} alt="kylie nakao tarin thomas" />
              <h5 className={css.headerSub}>
                Founder Kylie Nakao used to spend hours exploring the Barneys jewelry collection that was completely out of her price range. She realized that there was a gap in the jewelry market for sophisticated and modern jewelry at a more accessible price point. Et voila, Tarin Thomas was born.
              </h5>
              </div>
              <div className={css.paragraph}>
              <p style={{fontWeight: 'bold'}}>
              Tell us about your upbringing. Did you have a lot of fashion influences growing up?
              </p>
              <p>
              My mom was, and still is, super fashionable. She used to dress my brother and myself in the latest fashions and would buy clothes from brands that weren’t really mainstream. As I grew older, I would read Vogue and the usual fashion glossies but I wouldn’t say I was particularly obsessed with fashion the way that some of my designer friends were. For me, it was more the idea of styling things together and specifically, working with color and texture that was intriguing.
              </p>
              
              <p style={{fontWeight: 'bold'}}>
              Did you go to fashion school? Did you get any formal training to be a jewelry designer?
              </p>
              <p>
              Nope! I went to a regular university outside of Toronto and studied communications. It was probably during this time that I realized I wanted to focus on fashion as a career. I knew I had to be in New York to make it happen. I ended up applying to Parsons for their Fashion Marketing and Merchandising program.
              </p>


              <p style={{fontWeight: 'bold'}}>
              So how did you get your start in the jewelry business?
              </p>
              <p>
              It was trial by fire. I interned as a buyer for a small store in NOLITA while at school and they hired me after I graduated. Jewelry turned out to be a great-selling category for us and that piqued my interest.
              </p>
              <p>
              One of my hobbies during that time was going to Barneys after work to check out their jewelry collection. At the time, dainty stackables were just starting to come into vogue. Naturally at Barneys, their pricing was completely prohibitive for me with their pieces clocking in over $1000. That’s when I started to think about creating my own jewelry line – particularly one that would be at a more accessible price point. 
              </p>
              <p>
              I started small and sold wholesale to the store that I worked in. I slowly expanded to other boutiques and it started to grow from there.
              </p>

              <p style={{fontWeight: 'bold'}}>
              Was it difficult without formal training?
              </p>
              <p>
              Paradoxically, I think not having formal training was an advantage. I was more open to mixing and matching metals and stones in a way that was unexpected or unconventional. Having said that, I do think if you’re going to create high-end fine jewelry, you probably should get some training on how the metals and stones work and tarnish.
              </p>
              <p>
              I also don’t produce pieces according to the traditional fashion calendar or season. I probably release new styles two to three times a year. Personally, it made more business sense to produce more when we sell out and I don’t think jewelry is necessarily seasonal. Our pieces tend to be timeless, forever pieces that aren’t too trend-based.
              </p>
                            
              <p style={{fontWeight: 'bold'}}>
              How do you come up with your designs?
              </p>
              <p>
              I usually start with gemstones first and start to build around that. My mom and I share a lot of ideas. Funnily enough, we’re both abysmal sketchers but we get our ideas across. I brainstorm a lot around shapes and how I think stones should be showcased. Then it’s translating my ideas to my jewelers. Awful sketches aside, they’ve known me for years, so they usually understand what I’m trying to do!
              </p>


              <p style={{fontWeight: 'bold'}}>
              Tell us about jewelry production. Are most of your designs produced locally?
              </p>
              <p>
              Yes! Everything is manufactured in our factories in Midtown or Long Island City. Chinatown used to have a big jewelry presence in New York but that’s been slowly dying out and now has a very minimal presence which is a real shame.
              </p>


              <p style={{fontWeight: 'bold'}}>
              Tell us about your men’s line.
              </p>
              <p>
              Most of our jewelry is unisex. Rings and necklaces are the most popular with our male clientele. We also see couples coming in to shop together, usually for rings. Sometimes we’ll see one half of the couple coming in to buy a signet ring and then come back in a few weeks with their significant other for a matching ring. 
              </p>

              <p style={{fontWeight: 'bold'}}>
              What's the best part about being a jewelry designer?
              </p>
              <p>
              I love the creative aspect. I don’t really get to be creative in other parts of my life. I also love the chance to discover new stones and think about new designs. It’s the best part of my job.
              </p>

              <p style={{fontWeight: 'bold'}}>
              What’s been the biggest challenge for you?
              </p>
              <p>
              Education on jewelry and why certain pieces cost what they do. I think so many of us have gotten used to paying rock-bottom prices for fast fashion pieces that use the cheapest base metal or even gold coloring. Using high quality metals and stones that are manufactured right here in New York City is obviously going to cost more. But convincing customers that quality is worth the additional price is not easy in the era of fast fashion.
              </p>
              <p>
              Also, knockoffs drive me crazy.
              </p>

              <p style={{fontWeight: 'bold'}}>
              Any styles that are your signature pieces?
              </p>
              <p>
              Our signet rings have always done well – the Arthur, the Nara … They’re unisex and have been part of our collection since the beginning. They have consistently done well.
              </p>
              <p>
              Stackables are a strong category.
              </p>
              <p>
              Surprisingly our Yin Yang collection has been extremely popular. Customers love the design. I thought it would be more trend-based but it turned out to be a bestseller!
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

export default DP_tarinthomasPage;
