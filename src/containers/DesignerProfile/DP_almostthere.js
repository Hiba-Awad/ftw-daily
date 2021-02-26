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
import dp_almostthere from './DP_almostthere.jpg';
import { pink } from '@material-ui/core/colors';

const DP_almosttherePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | samantha dong"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_almosttherePage',
        description: 'Designer Profile - Almost There | Revvie',
        name: 'Designer Profile | Almost There',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} ALMOST THERE</h6>
          <h1 className={css.pageTitle}>celine kabaker on working in the industry and the importance (necessity) of sustainability and inclusivity.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
            <div className={css.headerSub}>
            <img className={css.coverImage} src={dp_almostthere} alt="Celine Kabaker Almost There" />
              <h5 className={css.headerSub}>
                Having spent years going full-pace in the industry, Celine Kabaker found herself burning out. After taking a breath, she decided to create her own brand that needed to exist - one that incorporated diversity, inclusivity, and sustainability.
              </h5>
              </div>
              <div className={css.paragraph}>
              <p style={{fontWeight: 'bold'}}>
              Tell us about your upbringing. Were you always interested in fashion?
              </p>
              <p>
              I’ve always had a strong curiosity about fashion. My mother is French, and she had these French fashion magazines lying around which I of course, pored over. I grew up in the era of the 90s supermodels and I was absolutely obsessed with them. How they looked, what they were wearing…  
              </p>

              
              <p style={{fontWeight: 'bold'}}>
              Tell us about your experience in the industry.
              </p>
              <p>
              I spent more than 10 years in corporate fashion, mostly in buying and merchandising. My first job was at BCBG Max Azria. My boss was one of the original founding members of the company who had worked with Max Azria before he became Max Azria. It was an excellent entry into the industry because I got to see all the different facets of being a global brand: wholesale, e-commerce, international … It gave me a great foundation in being an omnichannel retailer. I ended up working there for five years.
              </p>
                            

              <p style={{fontWeight: 'bold'}}>
              You eventually worked at Victoria’s Secret who has been under quite a lot of heat recently.
              </p>
              <p>
              At that time, I was at Forever 21, working under a woman who was there since the beginning. I needed a change. The VS role required a relocation to Columbus, Ohio which was obviously a massive move, but I felt like I needed to shake things up. 
I was supposed to start in the Sport section of VS but was moved to Casual Bras instead. My boss was incredibly ambitious and hungry, and the job was extremely intense. Long hours and tons of travel were the norm.  I would spend time with the design team, hop on planes to run tests in different markets, and constantly rack up six-day workweeks. Frankly, it was no surprise that I began to burn out.
              </p>
              <p>
              I ended up moving back to Los Angeles to be with my parents. I wanted (and desperately needed) a fresh start. 
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              How did Almost There come about? 
              </p>
              <p>
              I liked the idea of creating a brand that needed to exist. I especially wanted to create something that incorporated diversity, inclusivity, and sustainability - in my mind, these were non-negotiable. It was mind-boggling to me that so few brands think about even one of these things. 
              </p>

              <p style={{fontWeight: 'bold'}}>
              Why is sustainability important to you?
              </p>
              <p>
              My younger sister made an offhand comment to me about how my corporate success was almost synonymous with destroying the environment. It was like a lightbulb went off. Not to mention, as a buyer at a publicly traded corporation, I saw the magnitude of raw materials, energy, and waste that was constantly being generated by the industry.  
              </p>
              
              
              <p style={{fontWeight: 'bold'}}>
              How does that impact your production process?
              </p>
              <p>
              My factories are in downtown LA because local manufacturing and ethical labor practices were important to me. For our fabrics, we use a lot of organic hemp. We also like to use as much deadstock fabric as possible. When we use deadstock, we try to find fabrics that incorporates natural fibers. 
              </p>


              <p style={{fontWeight: 'bold'}}>
              So many fashion designers top out at a size 10-12. You make a point of being as inclusive as possible. Why do you think more designers limit their size range so much?
              </p>
              <p>
              I think it’s a combination of limited resources and fashion culture. Resource constraint is not a trivial issue – every style starts with a sample pattern and you grade up or down for your sizes. There’re only so many times you can grade up before the pattern starts to get distorted and you must re-fit the sample. A lot of designers can’t afford the additional R&D, not to mention managing that much more inventory. We get around that by making our styles to order. As a result, we don’t have to invest in a ton of inventory and can redirect the capital into fit and patterns. Each style gets two specific fits – the contemporary and the plus. They have the same overall look, but different needs based on the body type. 
I think the more pervasive issue is the fashion culture of glorifying thinness. The ultimate beauty is to be thin, white, and blond. I want to make a product that makes women, all women, feel beautiful. I don’t want to define or narrow that ideal based on a certain type of beauty. It’s important to me that I give my woman the confidence to be herself. 

              </p>

              <p style={{fontWeight: 'bold'}}>
              How do you come up with your designs?
              </p>
              <p>
              As a merchandiser and buyer, I got to see the types of designs that were commercial and had strong sell-through rates. Most designers design around a concept or a certain aesthetic. My approach is to use all the data that I’ve seen from my experience and bridge the numbers with the designs to come up with silhouettes that I love, that I know will resonate well, and be flattering on a variety of body shapes. Plus, I didn’t want designs that are too trend-driven but rather, are timeless and could be worn year-round. Not easy! 
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              You launched in July 2020. AKA the height of COVID. What was that experience like?
              </p>
              <p>
              I thought long and hard about delaying the approach. But to be honest with you, I’m so used to working in crazy, difficult environments. The fashion industry is tough. It’s disorganized. It’s grueling. It’s stressful with a crazy cast of characters. I survived that so to be perfectly frank, there’s very little that fazes me now!
              </p>


              <p style={{fontWeight: 'bold'}}>
              You’ve worked for some big names (BCBG, Forever 21, Juicy Couture, Victoria’s Secret) that have fallen by the wayside as retail undergoes a pretty seismic shift. 
              </p>
              <p>
              I can’t say that I saw the bankruptcies coming but I will say that it’s clear that a lot of brands didn’t focus enough on shifting from brick-and-mortar to e-commerce. They were also less willing to understand and embrace a shifting customer demographic which ended up hurting them. I think wholesale will come back eventually… but probably not in the same way. I think brands will focus more on e-tailers and more curated event-driven experiences rather than the traditional giant department store. I also think (and hope) that the fast fashion days are over. It’s just too unsustainable and the customer is more informed about the true cost of fast fashion. 
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

export default DP_almosttherePage;
