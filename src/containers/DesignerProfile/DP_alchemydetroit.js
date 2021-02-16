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
import dp_alchemydetroit from './DP_alchemydetroit.jpg';
import { pink } from '@material-ui/core/colors';

const DP_alchemydetroitPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | shelley van riper"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_alchemydetroitPage',
        description: 'Designer Profile - Alchemy Detroit | Revvie',
        name: 'Designer Profile | Alchemy Detroit',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} ALCHEMY DETROIT</h6>
          <h1 className={css.pageTitle}>shelley van riper on detroit, luxe fabrics, and the importance of American-made.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
            <div className={css.headerSub}>
            <img className={css.coverImage} src={dp_alchemydetroit} alt="shelley van riper alchemy detroit" />
              <h5 className={css.headerSub}>
              Shelly van Riper, a lifelong Detroiter, took inspiration corporate wardrobe and wanted to create a luxurious collection of blazers that showcased the best of American craftsmanship.
              </h5>
              </div>
              <div className={css.paragraph}>
              <p style={{fontWeight: 'bold'}}>
              You’re a proud Detroiter!
              </p>
              <p>
              Yes, I was born and raised in Detroit. And I’m still here today!
              </p>
              
              <p style={{fontWeight: 'bold'}}>
              How did you get into fashion? Did you have a lot of fashion influences growing up?
              </p>
              <p>
              Funny story - when I was in college at one of our local state schools, I really wanted to be a fashion design major. Alas, my college advisor bluntly told me that there’s “no fashion in Detroit” and unless I was willing to move to New York (which I wasn’t), there was no future for me in fashion. I actually listened to her and ended up switching my major to Psychology and got my masters in public administration. I ended up going in a totally different career trajectory.
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              Wow. That’s about as far away from fashion as you can get.
              </p>
              <p>
              I was in corporate America for more than twenty years working in the healthcare industry. It wasn’t exciting but it paid the bills. However, I really hated sitting in the office, even if it was a beautiful space with a fantastic view. Ironically though, this experience helped shape the brand that I ultimately ended up creating.
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              Tell us how Alchemy Detroit started.
              </p>
              <p>
              Because of the nature of my industry, I was always in suits and heels. A few years ago, I needed a new blazer and I had something in mind in terms of style but I really wanted it to be American-made. Something that was well-crafted made of luxe fabrics that could be an investment piece without costing an arm and a leg. And I couldn’t find it. I went to a big local mall near me with all the big retailers and everything I saw that checked all my boxes cost more than a thousand dollars (sometimes a lot more). That’s when I started thinking about building an American-made brand that would be direct-to-consumer which would allow me to offer better prices while maintaining a high quality product.
              </p>
              <p>
              I started sketching and saving money. I commuted back and forth to New York for several months meeting different factories and I found a fantastic fit model who also happened to be from Michigan. Not only did this woman give me great insights on fit, but she was instrumental in several design features. Getting a good fit model is so critical when you’re starting a collection. It took me about a year to finally launch. 
              </p>

              <p style={{fontWeight: 'bold'}}>
              What kind of collection did you want to create?
              </p>
              <p>
              I wanted menswear inspired and minimalist but with design details that pop. For instance, my buttons are from the Waterbury Button Company in Connecticut who made buttons for soldiers during the American Civil War. Today, they supply everyone from the Mexican army to luxury independent fashion designers. I’m obsessive about the details and I want to create a great quality jacket that you can keep in your closet for 15-20 years. To me, that’s what real sustainability is. 
              </p>
              
              
              <p style={{fontWeight: 'bold'}}>
              Who is the Alchemy Detroit woman?
              </p>
              <p>
              She cares about quality and is willing to pay more for a higher quality product that is carefully made. American-made means that our prices are going to be at least 40-60% more than if we were outsourcing overseas. To give you a sense of how and why the prices are so much higher, for example, our blazers take eight hours to sew. This doesn’t include cutting the fabric, this doesn’t include adding the buttons, or even sewing in the lining. Just sewing the various pieces together takes about eight hours. In New York City! So obviously our prices can’t compare with a brand that’s outsourcing their production to a low cost country overseas. Not to mention, I have to find the right kind of specialist factory that knows how to work with luxe fabrics like cashmere and wool. I’m also incredibly anal about little details. For instance, when sewing the plaid jacket, I insist that the plaids line up in the back. Finding a partner who is equally detail-focused with incredibly high standards was critical in creating my pieces. 
              </p>
              <p>
              Our customer is the woman who cares about these little details and cares about the integrity of production and design. Having said that, a great blazer is something you can keep in your closet forever so it ends up being an excellent investment. 
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

export default DP_alchemydetroitPage;
