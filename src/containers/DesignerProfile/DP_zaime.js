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
import dp_zaime from './DP_zaime.jpg';
import { pink } from '@material-ui/core/colors';

const DP_zaimePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | zapora williams "
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_zaimePage',
        description: 'Designer Profile - ZAIME | Revvie',
        name: 'Designer Profile | ZAIME',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} ZAIME</h6>
          <h1 className={css.pageTitle}>zapora wililams on all things production.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <div className={css.headerSub}>
              <img className={css.coverImage} src={dp_zaime} alt="zapora williams | zaime" />
                <h5 className={css.headerSub}>
                  Harlem-based Zapora Williams loved the idea of creating bold, statement pieces for the cosmopolitan woman but didn't want to sacrifice conscious and sustainable production practices. Here's her story.
                </h5>
              </div>
              
              <div className={css.paragraph}>
                <p style={{fontWeight: 'bold'}}>
                You’re based in Harlem. Is that where you were born?
                </p>
                <p>
                Nope, I was born in LA and raised in Rialto, California. I moved back to LA for college and lived there for close to 10 years before relocating to NYC.
                </p>
                

                <p style={{fontWeight: 'bold'}}>
                Were you always into fashion when you were young?
                </p>
                <p>
                I’ve always loved clothes. My mom loved to dress up and I enjoyed accompanying her on shopping trips. I loved the whole experience of touching fabrics and seeing her try on pieces. At an early age I discovered my talent for drawing and was more into getting new clothes over toys.
                </p>

                <p style={{fontWeight: 'bold'}}>
                Did you go to fashion school?
                </p>
                <p>
                Yes, I went to FIDM. I went in with a Fashion Design major, but it felt a bit limiting. I ended up changing my major to Apparel Manufacturing Management which was the best decision for me. It was a much more board major. I still had design classes but also learned about sourcing, product development and production.
                </p>
                

                <p style={{fontWeight: 'bold'}}>
                Tell us about working in the industry.
                </p>
                <p>
                I started my career in footwear for a high-end private label manufacturer called The Fashion House. Some of our clients included Isaac Mizrahi and Vera Wang. I started as a Data Entry Assistant and eventually got promoted to Sample Coordinator. From there, I worked for several other brands and private label manufacturers and spent over a decade in product development and production.
                </p>

                
                <p style={{fontWeight: 'bold'}}>
                How did the concept for ZAIME come about?
                </p>
                <p>
                Back in 2018, I was on the hunt for a chic puffer coat at a contemporary price point that didn’t have real feathers or fur. After searching online for hours, I couldn’t find one. That night I went to sleep and had an extremely vivid dream that I had a clothing brand named ZAIME (which is a fusion of my first and middle names). I took the dream as a sign but didn’t quit my job or start working on the brand immediately. I started having visions of different designs and reconnected with my love of sketching. As time went on, I realized starting my own brand, ZAIME, was the next chapter in my fashion career.
                </p>
            

                <p style={{fontWeight: 'bold'}}>
                Who is the ZAIME woman?
                </p>
                <p>
                She is me! She is someone who likes bold statement pieces that are wearable. She values versatility in pieces that can transition from the office to dinner and accommodate her busy lifestyle, all while looking sophisticated and chic. She appreciates and needs high-quality pieces that will last.
                </p>
                <p>
                The ZAIME woman is also a conscious consumer. She understands the significance of responsible manufacturing. Supporting local artisans and local manufacturing are important to her. 
                </p>
                
                <p style={{fontWeight: 'bold'}}>
                Responsible and local production is a big part of the ZAIME brand. How do you make it happen?
                </p>
                <p>
                I did consider going overseas at first. I was focused on creating coats and puffer jackets and I didn’t have any local contacts with the right expertise to do the development and manufacturing. I had some contacts for overseas factories with whom I had worked in the past, but their minimums were too high. A friend in the industry eventually referred me to someone with jacket capabilities but it ended up being a disaster.
                </p>
                <p>
                There was a lack of communication on their end and it created a lot of issues with the development. Even after two rounds of samples, they still weren’t right. Because of all the back and forth over several months, I wasn’t able to launch for that fall season. I decided to hold off on both jackets and working with overseas factories. I realized I needed to be more hands-on during the development process, so I began working on my spring collection with my local NYC factories.
                </p>
                <p>
                It worked out for the best since all my RTW pieces are made-to-order or through pre-orders. As a new brand, it didn’t make sense for me to guess on what to produced and stock inventory in. I’m still learning my customer. Pre-orders and made-to-order production are also an eco-friendlier method of manufacturing since you only make what your customers order. It eliminates unnecessary waste that ends up in landfills.
                </p>
                <p>
                I strive to source and use eco-friendly fabrics. My denim, for example is from a great supplier in Japan that uses recycled cotton and eco-friendly dyeing methods to reduce water waste and emissions. I also use upcycled fabrics from local vendors.
                </p>

                <p style={{fontWeight: 'bold'}}>
                What is the biggest challenge in getting customers to switch from fast fashion to slow fashion?
                  </p>
                  <p>
                  I ran a focus group back in April to better understand the consumer mindset as it applies to sustainable fashion. It was eye-opening. People are very passionate about the environment and want to make better choices but that doesn’t always translate into actual purchase decisions.
                  </p>
                  <p>
                  I think the industry needs to take responsibility and understand the true impact of their production methods. Brands need to do better when it comes to their supply chain and think about ethical labor practices and not always focus on just the bottom line. I also think that customers sometimes feel that higher prices translate to higher markup which isn’t always true, especially for smaller brands. 
                  </p>

                  
                  <p style={{fontWeight: 'bold'}}>
                  Any thoughts on the future of retail?
                  </p>
                  <p>
                  Brick-and-mortar shopping isn’t going to completely collapse or become obsolete. I think with the pandemic, people miss being able to walk around or pop into a store to try on garments. I wouldn’t be surprised if we see a big pick up in in-person retail shopping when things start to turnaround. I’m also old-school and love going to physical stores to browse and try things on.
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

export default DP_zaimePage;
