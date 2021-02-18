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
import dp_yeon from './DP_yeon.jpg';
import { pink } from '@material-ui/core/colors';

const DP_yeonPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | yeon park "
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_yeonPage',
        description: 'Designer Profile - YEON | Revvie',
        name: 'Designer Profile | YEON',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} YEON</h6>
          <h1 className={css.pageTitle}>yeon on luxe fabrics, attention to detail, and quiet perfection.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <div className={css.headerSub}>
              <img className={css.coverImageSPINOZA} src={dp_yeon} alt="yeon park | yeon" />
                <h5 className={css.headerSub}>
                Seoul-born designer, Yeon Park, interned at Thakoon and Proenza Schouler before launching her namesake brand in 2017 with a strong focus on luxurious fabrics and clean design.
                </h5>
              </div>
              
              <div className={css.paragraph}>
                <p style={{fontWeight: 'bold'}}>
                Tell us about your upbringing. I read that your mother was an avid home sewer – was she the inspiration behind your fashion career?
                </p>
                <p>
                My mother wasn’t a fashion person per se but she was extremely creative and always creating things – everything from cooking to decorating to sewing. When I was a kid, she bought a sewing machine and started making all sorts of home décor items. She ended up being pretty good, almost couture level.
                </p>
                <p>
                My first foray into fashion was on that machine. My mom didn’t want me to touch the machine because she thought it was dangerous. Which of course only increased its allure. One day when she wasn’t home, I took my chance and made my first creation – a tissue case.
                </p>
                <p>
                As I started to get better, I moved to clothing and accessories. I remember I had these enormous jeans that I took apart and used to created a denim tote bag. My friends really loved it and wanted to buy one just like it. That was probably the turning point for me when I realized I could make a career out of fashion. I started sketching and buying lots of fashion magazines.  
                </p>

                <p style={{fontWeight: 'bold'}}>
                You mentioned your father wasn’t thrilled with the idea of a fashion career. 
                </p>
                <p>
                My father didn’t want me to do any kind of art. He’s an engineer and a very practical man. He wanted me to be a teacher because he thought it was the path to a stable future. He believed that artistic endeavors wouldn’t pay the bills. 
                </p>
                <p>
                Not only that, he hated the idea of me studying abroad. After I matriculated at Parsons, we didn’t speak for about a year. Luckily for me, he’s since changed his mind and is very supportive of my career. 
                </p>

                <p style={{fontWeight: 'bold'}}>
                You interned at Thakoon and Proenza Schouler. What was that experience like? 
                </p>
                <p>
                Actually, my very first internship was at a factory in the Garment District! It was completely eye-opening for me as I got to see the entire manufacturing process from scratch. Plus, I got to see so many designers in person as they were coming in for their prototypes and doing quality checks. In fact, this internship is how I managed to secure the next ones.
                </p>
                <p>
                My next internship was at Thakoon, who at the time had a very small team and I got to be very hands-on. By contrast, Proenza was already quite a large company with a big design team so it was more buying trims, running errands … typical intern work!
                </p>
       
                <p style={{fontWeight: 'bold'}}>
                Tell us about when you first launched YEON. When did you know it was time to take the leap?
                </p>
                <p>
                After graduating from Parsons, I worked as an assistant designer for a few years. I knew I was ready to jump ship when I started to feel unfulfilled and a little bored. By then I knew I had enough experience under my belt to make my own venture work. 
                </p>
                <p>
                Initially my plan was to start with a contemporary line that would retail in the $100-200 price point. I went to China for a factory tour and was completely horrified at the conditions: underage workers, locked doors, awful lighting … I couldn’t stomach it. I shifted my focus to a more luxe line at a designer price point that could support a higher cost basis. It was more in line with what I wanted to do anyways since I’ve always been very drawn to nice, expensive fabrics!
                </p>

                <p style={{fontWeight: 'bold'}}>
                How did you find the right partners and manufacturers?
                </p>
                <p>
                I spent about two years researching and looking for the right manufacturer. I found out about this one factory in France that worked exclusively with ultra-luxury brands like Chanel and Dior. I emailed them so many times and got zero response. One day, as a last resort, I finally sent them my portfolio and the owner unexpectedly accepted a meeting. I immediately booked a flight to Paris the next day. 
                </p>
                <p>
                I arrived in Paris with all my samples. From there, it was another three hours by train plus a 40-minute taxi ride. I was shocked and ecstatic when they agreed to work with me – I’m the first non-French designer to work with them. I had my French factory set and I also found a knitwear factory in Italy. Once I found the right partners, it was all about learning from them – their craftsmanship and how they treat the fabrics. 
                </p>

                <p style={{fontWeight: 'bold'}}>
                How did you launch? When did you decide to go direct-to-consumer?
                </p>
                <p>
                I launched in 2017 with Moda Operandi as an online trunk show. The line sold well and as a result, they invited me to do an exclusive for the next season which was obviously incredibly exciting for a new designer. While I really enjoyed the experience, I wanted to offer luxurious, designer-quality clothing but at a more attractive price point which I could easily do by switching to DTC.
                </p>
                <p>
                I launched in 2017 with Moda Operandi as an online trunk show. The line sold well and as a result, they invited me to do an exclusive for the next season which was obviously incredibly exciting for a new designer. While I really enjoyed the experience, I wanted to offer luxurious, designer-quality clothing but at a more attractive price point which I could easily do by switching to DTC.
                </p>

                <p style={{fontWeight: 'bold'}}>
                Where do you get your inspiration from when designing?
                </p>
                <p>
                You can’t force inspiration. It just happens. For example, I was in Budapest on a walking tour. The guide pointed to this building and mentioned that it was one of two twin buildings that were mirrored in design. The first had been purchased and renovated into a luxury department store. Meanwhile, its twin had never been renovated but was slated for construction for the first time in 200 years. I knew I had to see it. 
                </p>
                <p>
                When we walked in, I was gobsmacked. It was like traveling backwards in time. There was a cast iron elevator that was see-through, at least a hundred years old, and making these crazy clanking noises. All the details inside were handmade with incredible craftsmanship.
                </p>
                <p>
                This building became the inspiration for one of my collections. The fabrics, texture, and prints were all based on that building. I ended up coming back a few months later with my model and shot my lookbook in the building. If you check out the video in my website, yeon.com, that opening shot is of the elevator. 
                </p>
                <p>
                Another example is when I went to Greece and saw this mineral deposit that had incredible, vibrant colors. I made a fabric based on that color. It’s all about looking at certain details that excite me and that detail becomes a pattern, a fabric, a coat… I don’t normally design an entire collection based on a concept; it’s about developing an idea a little by little. 
                </p>

                <p style={{fontWeight: 'bold'}}>
                Tell us about the brand essence of YEON. 
                </p>
                <p>
                I care about two things – craftsmanship and fabric. I never start with sketches; it’s always fabric for me. Once I find the fabric, I move to draping. Every fabric drapes differently and I love, love, love beautiful draping. 
                </p>


                <p style={{fontWeight: 'bold'}}>
                  Who do you design for?
                  </p>
                  <p>
                  My woman is not a fashionista. She doesn’t want over-the-top fashion. She’s chic and not fussy. She wants simple, clean designs but loves details and unique textures. It’s all about the quality clothing for her. I like to call it quiet perfection.
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

export default DP_yeonPage;
