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
import dp_ally from './DP_ally.jpg';
import { pink } from '@material-ui/core/colors';

const DP_allyPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | samantha dong"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_allyPage',
        description: 'Designer Profile - ALLY | Revvie',
        name: 'Designer Profile | ALLY',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} ALLY</h6>
          <h1 className={css.pageTitle}>sam dong on everything heels and covid's impact on ally.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
            <div className={css.headerSub}>
            <img className={css.coverImage} src={dp_ally} alt="sam dong ally" />
              <h5 className={css.headerSub}>
                After suffering a debilitating foot injury, founder Sam Dong wanted to create a heel that wasn't synonymous with pain. With extensive input from a well-renowned podiatrist, ALLY Shoes was born - a luxury line of dress shoes with ergnomic support that maximized comfort to the wearer.
              </h5>
              </div>
              <div className={css.paragraph}>
              <p style={{fontWeight: 'bold'}}>
              Tell us about your upbringing. Did you have a lot of fashion influences in your childhood?              </p>
              <p>
              I grew up in Shanghai and came to the US for college when I was 17. Both my parents worked in the industry for a large department store in Shanghai. My father oversaw womenswear merchandising. Ironically, their experience in the fashion industry meant they weren’t particularly supportive of me working in fashion as they knew how difficult and challenging the industry could be.
              </p>
              <p>
              I went to Cornell for my undergraduate degree and spent two years as a management consultant. After that, I switched gears and went to work at an early stage tech startup that eventually became part of Caviar. It was a food delivery service and I was one of the early employees. It was a tough business – lots of competition and slim margins. The founders ended up exiting and selling to Caviar, and I decided to enroll in Stanford for my MBA.
              </p>

              
              <p style={{fontWeight: 'bold'}}>
              Is that when you first started thinking about ALLY?
              </p>
              <p>
              I had about 3-4 months in between quitting my job and going to business school. I ended up traveling and even enrolled in a summer course for Parsons in their Paris campus. I figured I’d brush up my French and maybe even explore fashion a bit. Truth be told, I didn’t have a plan in mind, but I figured it was the only time in my life that I could do something like this. Little did I know that I would eventually end up in fashion.
              </p>
              <p>
              During that same summer, I was hiking Mount Kilimanjaro when I injured my toe. It was a pretty painful injury and I had to wear inserts. I couldn’t fit these inserts into my heels and that was the lightbulb moment. I started asking myself why are heels synonymous with pain and discomfort? It was next to impossible to find heels that were supportive and comfortable. It’s a universal problem for working women.
              </p>
              <p>
              I started doing a lot of research. Every time I went back to China, I would talk to folks in the industry, especially those in the supply chain. It was then that I started to see the emergence of just-in-time inventory and I immediately wanted to incorporate that into my line so I wouldn’t be stuck carrying a ton of inventory.
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              When did you take the leap?
              </p>
              <p>
              My second year at Stanford was almost exclusively dedicated towards ALLY. I learned shoemaking and conducted tons of customer interviews. After graduating, I moved to New York and put together an incredible team that was heavy on product. Our product advisor is the former innovation director for Cole Haan. He introduced me to Dr. Roxann Clarke, a podiatrist, as well as Sarah, our very experienced footwear designer.
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              Tell us about your design. 
              </p>
              <p>
              It was a very iterative process. Sarah and Dr. Clark voiced their input based on their expertise and experience. The design itself was relatively easy – we knew we wanted to do something classic with a pointed toe. A timeless design. If we could make this design comfortable, we knew we were golden. We aren’t a trend-setter. We’re not fast fashion. We’d rather you treat our shoes as an investment, something that goes well with everything without destroying your foot. It’s the one pair of shoes that you absolutely must have in your closet.
              </p>
              <p>
              After the design was set, it was all about testing and sampling. Luckily for us, we have a great and super-responsive factory partner who could create samples for us very quickly. We had about ten different ideas that we started off with and tested every single one. The entire process took us about 6 months which is quite fast for a new product like this.
              </p>

              <p style={{fontWeight: 'bold'}}>
              Do you think fewer women are willing to sacrifice comfort for the sake of style? 
              </p>
              <p>
              The cohort of women who don’t care about good fit or comfort has been shrinking. My view is that with COVID, that cohort is going to shrink even more. While i do think that an extended period of lockdown wearing sweatpants means that there will be some pent-up demand for real clothes, I don’t think the demand and need for comfort and function will go away. I think we are headed in the direction of style with comfort and function.
              </p>
              
              
              <p style={{fontWeight: 'bold'}}>
              Tell us what happens when you wear 4-inch stilettos.
              </p>
              <p>
              It’s all about weight distribution (or lack thereof). If you’re wearing a heel without proper support, you’re putting most of your body weight in a very small surface area around the ball of your foot. That’s a lot of pressure on the metatarsal. Not to mention, higher heel heights could also put a lot of pressure on the toe joint. 
              </p>
              <p>
              We put in arch support as well toe support and other structures that help shift the weight back which is what makes our heel so comfortable.
              </p>

              <p style={{fontWeight: 'bold'}}>
              Tell us about the ALLY woman.
              </p>
              <p>
              She’s a working professional woman who isn’t price sensitive but cares deeply about good quality products. 
              </p>
              <p>
              We also just released a line of flats and we’re starting to see a slightly younger demographic. 
              </p>


              <p style={{fontWeight: 'bold'}}>
              Let’s talk COVID. How has COVID changed your strategy given that women aren’t going to work anymore?
              </p>
              <p>
              Style-wise, we were already working on a few things pre-COVID. We were going to do a different heel style but ended up focusing on flats first due to COVID and that turned out to be the right decision. 
              </p>
              <p>
              A silver lining is that we were able to focus on a few operational items that were on our to-do’s but weren’t able to get to previously. Now that we have some breathing room, we were able to launch our try before you buy program and also automate some of our processes which is great.
              </p>

              <p style={{fontWeight: 'bold'}}>
              What’s in the future for ALLY?
              </p>
              <p>
              This was such a weird year, for us and for everyone else. We are continuing to work on expanding our distribution. We’re gearing up for the post-COVID world and continuing our focus on increasing offline retail channels.
              </p>
              <p>
              Plus, we have some new styles that we are working on that we’re very excited about. Stay tuned!
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

export default DP_allyPage;
