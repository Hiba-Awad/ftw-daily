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
import dp_harperthelabel from './DP_harperthelabel.jpg';
import { pink } from '@material-ui/core/colors';

const DP_harperthelabelPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | claire harper"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_harperthelabelPage',
        description: 'Designer Profile - Harper the Label | Revvie',
        name: 'Designer Profile | Harper the Label',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} HARPER THE LABEL</h6>
          <h1 className={css.pageTitle}>claire harper on chrome-free leather and launching a brand during a global pandemic.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <div className={css.headerSub}>
                <img className={css.coverImage} src={dp_harperthelabel} alt="claire harper | harper the label" />
                <h5 className={css.headerSub}>
                  Unsettled by the waste and lack of regulation in the fashion industry, artist Claire Harper launched her own line of luxury leather accessories that are made entire of low-impact, chrome-free leather.
                </h5>
              </div>
              <div className={css.paragraph}>
                <p style={{fontWeight: 'bold'}}>
                Let’s go all the way back to the beginning. Tell us how you grew up. Was art or fashion in the cards for you from an early age?
                </p>
                <p>
                I grew up outside of D.C. and I’ve always been an artist. While my parents weren’t professional artists, they were creative and very supportive of my artist endeavors be it painting, sculpture, and other art mediums. I was fortunate that art was considered a viable career path. 
                </p>

                <p style={{fontWeight: 'bold'}}>
                Did you get formal training in fine art or fashion?
                </p>
                <p>
                I went to Smith College, a liberal arts college that isn’t particularly known for its fine arts program but I just had a very strong gut feeling that this was the place for me. I majored in Art and Italian and was fluent in Italian by the time I graduated. Smith has a very established Italy program where students go to Florence for a year which was created back in the 30s when students would take a steamer across the Atlantic. I stayed with a local family and learned all about Italian culture and history as part of the Smith program while also taking some classes at a local art school with courses like illustration. Interestingly I toured a leather school while I was there which turned out to be very useful for my career later down the road. 
                </p>

                <p style={{fontWeight: 'bold'}}>
                How did you get your foot in the door?
                </p>
                <p>
                I was in New York and worked at a leather studio in Red Hook that had big name clients like Donna Karen. The owner was not necessarily the easiest person to work with but I really did love the work. He had very exacting standards and his ethos was that while you didn’t need to be an expert to succeed, you did need to be able to think outside the box. 
                </p>
                <p>
                After that job, I was at Free People and Anthropologie where I was the display coordinator for the store windows. I eventually came to the West Coast where I worked at Pottery Barn in product development for lighting and furniture. I worked extensively with factories in South Asia and learned all about sourcing and development. 
                </p>
                

                <p style={{fontWeight: 'bold'}}>
                How did the idea for Harper the Label come about?
                </p>
                <p>
                Funnily enough, I never wanted to be an entrepreneur. Having said that, I’d worked for enough big brands that I knew I didn’t love building someone else’s vision. I found it uninspiring. I was also really fed up with the lack of sustainability and environmental regulations that ran rampant in the industry. Seeing the thousands, tens of thousands, of poly bags that are part of standard packaging was mind-blowing. Also, container loads of products coming from India would be covered in dust while the ones coming from China stank to the heavens. While the smell eventually faded, it really made me think about how awful the working conditions must be for the people at the factories who are packaging and producing these pieces.
                </p>
                <p>
                I quit my Pottery Barn job and decided to go back to school with the intention of becoming a patternmaker. I enrolled at a vocational school in Oakland called Apparel Art. I didn’t necessarily focus on leather at the time. 
                </p>
                

                <p style={{fontWeight: 'bold'}}>
                Tell us about your leathers. All of your pieces are made using super soft chrome-free leathers. Where did the idea come from?
                </p>
                <p>
                I took this textiles class about bioleathers where we were learning about vegan leather alternatives: pineapple leather, mushroom leather, apple leather… Given my history with leather, I was very intrigued. I already knew that most leathers are tainted with arsenic and chromium and other elements that are known respiratory irritants. I loved the idea of creating a sustainable and healthy alternative (for both planet and human). 
                </p>
                <p>
                Having said that, many bioleathers use a lot of plastic for the polymer bindings which is detrimental to the environment so I decided to focus on low-impact leathers first. All my leathers are certified chrome-free and vegetable tanned. Sourcing was a huge pain - I drove to LA to find a supplier and came up short. So I hopped on a plane to New YOrk City where I finally found the perfect supplier. Even better, the supplier was just a block away from my factory so the logistics turned out to be pretty seamless!
                </p>
              
              
                <p style={{fontWeight: 'bold'}}>
                It seems like consumer sentiment is slowly starting to wake up to sustainability and ethical issues in the fashion industry. When do you think real change will come?
                </p>
                <p>
                You really need pressure from regulators or consumers. I’m glad that people are starting to wake up to green-washing, especially with regards to mass market brands. Brands have also cut back drastically in the wake of COVID, whether it’s cutting out entire collections like resort or just reducing their production capacity which is really great given the amount of waste and overproduction that’s endemic in the industry. But of course, there’s a ton of room for improvement. 
                </p>
                

                <p style={{fontWeight: 'bold'}}>
                Speaking of COVID, you launched during a global pandemic. What was that like? 
                </p>
                <p>
                (Laughs). Development takes a long time. It took me a solid year at the minimum to get the product to where I needed to be and it never crossed my mind to slow down or halt what I was doing. 
                </p>
                <p>
                I also had realistic expectations, COVID or not, about my launch. I don’t think any designer should have sky high expectations when they first launch. That’s just a recipe for failure. I knew it was going to be a long process and why not start the slog now when the stakes are lower?
                </p>
                <p>
                In some ways, COVID has made things easier for me. For instance, emerging brands who are more established have been struggling and are much more open to working with a newbie brand like mine. Also, big-name brands like Brooks Brothers and JCrew have failed which makes space for newer brands. 
                </p>

                <p style={{fontWeight: 'bold'}}>
                How did you come up with the idea to stitch poetry into the leather?
                </p>
                <p>
                I was roaming around the Arms and Armor exhibit at the Met Museum. The sculptor side of me loves 3D objects and I found this chainmail top in a dusty corner of the exhibit. It was from the 9th or 10th century from an Islamic caliphate and the maker had written out a verse from the Quran in different metals. Chainmail is worn next to the skin under the plates of armor and is not meant to be seen by others; the writing is meant just for you and your protection as you go into battle. It was beautifully done and I loved the idea of having something meaningful close to your skin that’s meant just for you.
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

export default DP_harperthelabelPage;
