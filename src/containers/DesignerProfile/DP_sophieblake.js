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
import dp_sophieblake from './DP_sophieblake.jpg';
import { pink } from '@material-ui/core/colors';

const DP_sophieblakePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | sophie blake"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_sophieblakePage',
        description: 'Designer Profile - SOPHIE BLAKE | Revvie',
        name: 'Designer Profile | SOPHIE BLAKE',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} SOPHIE BLAKE</h6>
          <h1 className={css.pageTitle}>sophie blake on pursuing her passion and finding inspiration in unexpected places.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
            <div className={css.headerSub}>
            <img className={css.coverImage} src={dp_sophieblake} alt="sophie blake" />
              <h5 className={css.headerSub}>
                Armenian-born Sophie Blake discovered jewelry making while making her mark as a corporate careerwoman. Realizing that her hobby was fast becoming a full-time passion, she quit her regular 9-to-5 and launched her namesake brand.
              </h5>
              </div>
              <div className={css.paragraph}>
              <p style={{fontWeight: 'bold'}}>
              Tell us about your upbringing. Did you always know that you wanted to be in fashion?
              </p>
              <p>
              I was born in Armenia and came to the US when I was 10. I was an artistic kid – always drawing, sketching, going to art classes … I was 13 when I thought about making a career out of fashion. It was my dream to apply to FIT and Parsons. Alas, my mother strongly discouraged the idea because she was worried that I would struggle financially. My parents are immigrants and they just wanted me to have a financially stable life. I ended up getting a degree in Economics and Political Science from McGill University. After graduating, I came to New York and entered corporate America. 
              </p>
                           
              <p style={{fontWeight: 'bold'}}>
              How did you end up getting into jewelry design?
              </p>
              <p>
              I was working my regular corporate job when I felt something missing. I started exploring jewelry-making just as a hobby. It was a great outlet for self-expression. I started selling some of my pieces at local farmers markets and little jewelry shows here and there. That’s when I realized that this could become a viable business. 
              </p>
              <p>
              I started to dedicate myself to really understanding the craft and began learning about metal-making. I enrolled in classes at a small studio in Williamsburg which at the time was quite seedy. The studio itself was a small jewelry shop with space in the back for students. I learned the entire process of creating a piece and probably spent about two years taking these classes. 
              </p>
              <p>
              Then, I ended up moving to Germany for work and met my wonderful husband, Dan. We came back to the US together and that’s when I felt ready enough to launch my first collection. Which got picked up by Henri Bendel in 2011!
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              </p>
              <p>
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              Amazing! How did that happen? 
              </p>
              <p>
              Back then, Henri Bendel used to host these casting calls for independent designers. There would be hundreds of new designers lining up on 5th avenue. You got five minutes to pitch yourself and your product to the buyer. I ended up getting the buyer’s card and had my first trunk show at Henri Bendel which was surreal. 
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              How long did you show at Henri Bendel?
              </p>
              <p>
              Unfortunately, Henri Bendel was going through a major revamp and they started pulling back on indie designers.  Their focus was shifting towards in-house design. I only ended up doing two trunk shows with them. And that was the end of that.
              </p>
              <p>
              I tried to sell my line on my own and honestly it wasn’t too bad, but I still had a ton to learn. Towards the end of 2014, I had a small pop-up space that I shared with another designer. She eventually left for Miami and I began to spend all my time in the store. It eventually became my permanent store. 
              </p>
              
              <p style={{fontWeight: 'bold'}}>
              Where do you get your creativity from? How do you get inspired for your designs?
              </p>
              <p>
              Travel. Or rather, it used to be travel. I remember I went on a trip to Hawaii with my husband, where we visited Mahana Beach which has green sand. There are only four places in the world that has this kind of sand. I made this beach the focal point of my collection. I even named my pieces using Hawaiian women’s names.
              </p>
              <p>
              Now that we can’t travel, I’ve started to appreciate the beauty close to home. For instance, we found this gorgeous path near our house that goes into the woods with a little creek. This little area was the inspiration behind my new collection. It’s all about local nature and finding beauty around us that we don’t notice or take for granted. We’re calling the collection Terraform.  
              </p>

              <p style={{fontWeight: 'bold'}}>
              What’s the Sophie Blake style? 
              </p>
              <p>
              The essence of our brand is clean, Art Deco inspired, and very minimalist pieces that are current and modern but have a timelessness about them. I wanted to create pieces that you can wear at any age: not trend driven but can move with time and you. 
              </p>
              <p>
              I also wanted to design pieces that are not commonly seen, that aren’t mainstream. Pieces that you would never mistake for those of another brand.  
              </p>


              <p style={{fontWeight: 'bold'}}>
              Are there specific materials or stones you prefer to work with?
              </p>
              <p>
              We tend to be metal-heavy with a focus on chains. Colors, especially vibrant colors, aren’t really our thing. I do like to use specific stones for certain collections. For instance, in my last collection, I found this cabochon stone that I used for a very limited run across several pieces.
              </p>


              <p style={{fontWeight: 'bold'}}>
              Tell us about your production. Everything is produced in New York? 
              </p>
              <p>
              Yes! We work with a metalsmith in New York who’s been with me since the very beginning. I don’t live in New York anymore, but I love being affiliated with New York. It’s the fashion capital of the world. Also, I have a sentimental connection given that I got my start there and it’s where Sophie Blake the brand came from.
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

export default DP_sophieblakePage;
