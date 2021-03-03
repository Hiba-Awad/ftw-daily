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
import dp_kovasky from './DP_kovasky.jpg';
import { pink } from '@material-ui/core/colors';

const DP_kovaskyPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | minika ko"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_kovaskyPage',
        description: 'Designer Profile - KOVASKY | Revvie',
        name: 'Designer Profile | KOVASKY',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} KOVASKY</h6>
          <h1 className={css.pageTitle}>minika on finding the perfect high-performance fabric and discovering creativity in the throes of burnout.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
            <div className={css.headerSub}>
            <img className={css.coverImage} src={dp_kovasky} alt="minika ko kovasky" />
              <h5 className={css.headerSub}>
                Taiwan-born and classicaly trained pianist Minika Ko was on the corporate path when she realized that she wanted and needed more creativity and fulfillment in her life. Here's how she found her fashion edge.
              </h5>
              </div>
              <div className={css.paragraph}>
              <p style={{fontWeight: 'bold'}}>
              You were born and raised in Taiwan. Did you always want to go to fashion?
              </p>
              <p>
              I was definitely always into fashion. My mom and grandma are both self-made businesswomen. They were always impeccably dressed. I don’t think I’ve ever seen my grandmother in pajamas - she was always in a skirt and little heels. Having said that, my mom didn’t want me to go into the business world. She would say that she worked so hard so that I wouldn’t have to. Funnily enough, she wanted me to be an artist and enjoy life. I was trained as a classical pianist and competed at an elite level. 
              </p>
              <p>
              When I was in college, I was double-majoring in music and business when my father passed away suddenly. That was when I realized that making a living in classical music was going to be really challenging. I left music and decided to enter the businessworld: corporate America.
              </p>
              
              <p style={{fontWeight: 'bold'}}>
              What made you get back into the creative world?
              </p>
              <p>
              I was working really hard in corporate America and after a while, I realized that my life had to have more meaning than just making money. I’m an artist at heart. I quit my job, sold everything I had and went on an “Eat Pray Love” kind of journey. I remember reading Alexander McQueen’s biography and learning that he got his start at a tailor. I found a private tailor in Taiwan who made high-end clothes and did an apprenticeship with him. I figured I’d do this for a bit while I spent some time with my grandma and family. When I made my first skirt, I immediately knew that this was what I was born to do. It was an amazing feeling. I won the ELLE magazine new talent award and people started reaching out to me. In fact, a woman from Paris saw my work on Facebook and asked me to make her wedding dress.
              </p>
              <p>
              I knew I needed some more training so I enrolled in a one year program at FIT for people who already have a bachelor’s degree. It turns out that my apprenticeship had really elevated my skills so I was able to really focus on design. The best thing about FIT was that I could design whatever I wanted; not someone else’s vision, not what is considered commercial, not what would make money. When I graduated in 2016, I immediately found a lawyer’s office to create my company (FYI, don’t do this - you can create a corporation on LegalZoom).
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              Tell us about KOVASKY. What was the concept behind the brand?
              </p>
              <p>
              I had this idea of designing a collection that would be super high performance: machine washable, wrinkle-resistant, temperature-controlled clothing that’s sustainably produced. I started doing some research with fabrics and patterns. I remember knocking on the doors of factories in New York City to see who could create these fabrics. It took me about two years to get the collection ready which we launched at the end of 2018. Perfecting the fabrics, the fibers, the fit.. I managed to find this amazing fabric from Taiwan at one of the top performance fabric factories in the world. I dragged my suitcase stuffed with my samples, knocked on the door, and begged the owner to take a look at what I was creating.
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              You showcased your collection during New York Fashion Week. What was that like?
              </p>
              <p>
              It was amazing. Every show I had, it was always packed. People were really excited about my concept. Back then, performance fabric wasn’t really a thing and I think people were really curious and interested in what I was creating.
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              Who is the KOVASKY woman?
              </p>
              <p>
              I love the curves and the feminine shape. I want to redefine what a modern power woman could look like. Someone who can be powerful, strong, confident, and yet also stylish and feminine. We get a lot of mother and daughter pairs coming in. At one of our pop-up events, we had a group of older women in their 50s coming in just shopping together. Not surprisingly, the vast majority of our women tend to be career women: architects, interior designers, lawyers, marketing consultants… We are really popular amongst architects! 
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

export default DP_kovaskyPage;
