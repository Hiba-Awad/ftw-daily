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
import dp_arteaga from './DP_arteaga.jpg';
import { pink } from '@material-ui/core/colors';

const DP_rhondacolePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | rhonda cole "
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_rhondacolePage',
        description: 'Designer Profile - Rhonda Cole | Revvie',
        name: 'Designer Profile | Rhonda Cole',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} RHONDA COLE</h6>
          <h1 className={css.pageTitle}>rhonda cole on switching industries and never compromising craftsmanship.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <div className={css.headerSub}>
              <img className={css.coverImage} src={dp_arteaga} alt="rhonda cole | rhonda cole" />
                <h5 className={css.headerSub}>
                  Rhonda Cole was a long-time ad executive at the New York Times before jumping into fashion. A lover of beautiful white shirts, she decided to launch her namesake brand after years of searching for the perfect white shirt and coming up short. 
                </h5>
              </div>
              
              <div className={css.paragraph}>
                <p style={{fontWeight: 'bold'}}>
                Rhonda, you had a long career in media before launching your namesake brand. Tell us about that.
                </p>
                <p>
                I grew up in Chicago and studied art history and textiles in college. My goal was to become a museum curator or run an art gallery. After graduating, I quickly realized that an advanced degree, years of experience, and extensive connections were absolutely necessary to even get my foot in the door at a museum. 
                </p>
                <p>
                Instead, I was fortunate enough to land my first job managing an art gallery. It was a fun job and I enjoyed the experience but my real dream was to move to New York City where I didn’t know a soul. I spent summers at a big Chicago department store where I worked in publicity and special events. I made invaluable contacts with key magazine editors from big fashion magazines like Glamour, Mademoiselle, etc. The big fashion glossies would host events in department stores like the one I worked at to promote their publications and interface with readers. A year later, these connections helped me secure my first job with Glamour magazine in New York. Funnily enough, I was simultaneously offered a job as an assistant to a fashion designer but I declined because the salary was peanuts!
                </p>
                

                <p style={{fontWeight: 'bold'}}>
                What a fabulous job for a young graduate! What did you do at Glamour? 
                </p>
                <p>
                I was a merchandise editor, a job that I doubt exists today. My job was to bring the voice of the magazine to life at department stores around the country. For instance, if the magazine was promoting a particular fashion trend for the season, we would host a mini fashion show based on that trend. We held cooking demonstrations using recipes from the magazine. We discussed beauty and skincare. Prior to each event, we were interviewed by local press, including broadcast television. It was a great job but after about two years, I resigned because the travel was absolutely grueling. 
                </p>
                <p>
                My next role was at the New York Times in advertising sales. My first accounts were Saks, Bergdorfs and other high-end retailers.  Eventually I became a managing director responsible for the paper’s weekly home section and design issues of the magazine. After more than a decade in that position, I resigned to start Rhonda Cole.
                </p>

                <p style={{fontWeight: 'bold'}}>
                How did the idea for luxurious white shirts come about? 
                </p>
                <p>
                I was a frequent business traveler and I wanted to simplify my wardrobe. I realized that having a regular rotation of white shirts paired with black or dark-colored skirts and pants were a game-changer when it came to getting dressed in the morning!
                </p>
                <p>
                And I quickly realized that finding the perfect white shirt was next to impossible. Everyone has a different idea of what constitutes the perfect white shirt. My aesthetic is updated classics with a twist. I also prefer more conservative styles which unfortunately tends to be synonymous with ugly. Not only that, when I finally found something that worked for me in a beautiful fabric, the cost was outrageous. Conversely, if the style or price was acceptable, the construction or fabric left a lot to be desired. 
                </p>

                <p style={{fontWeight: 'bold'}}>
                When did you decide to take the leap?
                </p>
                <p>
                I started thinking about the idea seriously in 2012. I was still at the Times and I devoted my weekends to research which quickly turned out to be unsustainable. There was never enough time and I was absolutely exhausted. Deciding to leave my job was a tough and risky decision but I took the plunge in 2014 and formed my company the same year. 
                </p>
                <p>
                Once I left, I invested heavily in additional research and learning to navigate the Garment District in New York. Finally, my first collection was ready and I launched in 2016. 
                </p>
                
                <p style={{fontWeight: 'bold'}}>
                Tell us about your design inspiration. How do you come up with the silhouettes?
                </p>
                <p>
                In my opinion, less is more, especially when it comes to design. I admire the elegance and formality of the 40s and 50s, particularly the focus on quality and garment construction which has since faded from those times. Today, fast fashion and the trend of moment dominate and quality has become secondary. To me, craftsmanship is extremely important and the fabric should always feel comfortable against the skin, no matter what fabric is used. One of my designs is constructed in a silk crepe-back satin which is incredibly luxurious and feels heavenly against the skin. I’m not interested in creating trendy shirts; I want to create pieces that you can hand down to your daughter. 
                </p>              

                <p style={{fontWeight: 'bold'}}>
                Everything is made in New York City. Why?
                </p>
                <p>
                Roughly 80% of my collection is produced in the New York City Garment District. Quality is important to me and America has quality factories, especially in New York. The Garment District has a long history and has unfortunately been in decline over the years. I want to continue supporting the district and help it survive.
                </p>
                <p>
                Moreover, it’s easily accessible. It’s very convenient to work with a factory based here since I can immediately check on my garments as they’re being produced. Having said that, you still must absolutely do quality control and interact with the factory prior to production regardless of location. 
                </p>
                <p>
                One of my pieces, the Marta button-down is constructed in Peru. Ironically, the design was actually the hardest and most challenging to produce. Cotton shirts require special sewing equipment and a majority of the production houses in New York didn’t have the equipment. Not to mention the cost. A high quality cotton shirt produced in New York would cost roughly the same as a fine silk shirt. I initially started out producing the Marta in Italy and then eventually moved to Peru.
                </p>

                <p style={{fontWeight: 'bold'}}>
                Tell us about the Rhonda Cole woman. Who is she?
                </p>
                <p>
                The Rhonda Cole woman appreciates fine quality and craftsmanship.  She doesn’t follow trends and prefers classics. She’s understated, refined and stylish. She abhors fast fashion and instead purchases investment pieces. Women in their 30s to 70s have brought my shirts. They prefer garments that will last several years with proper care.
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

export default DP_rhondacolePage;
