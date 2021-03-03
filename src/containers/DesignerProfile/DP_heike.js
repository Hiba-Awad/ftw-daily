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
import dp_heike from './DP_heike.jpg';
import { pink } from '@material-ui/core/colors';

const DP_heikePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | heike jarick"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_heikePage',
        description: 'Designer Profile - HEIKE | Revvie',
        name: 'Designer Profile | HEIKE',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} HEIKE</h6>
          <h1 className={css.pageTitle}>heike jarik on taking inspiration from bauhaus theory and surviving the fashion industry.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
            <div className={css.headerSub}>
            <img className={css.coverImage} src={dp_heike} alt="heike jarick" />
              <h5 className={css.headerSub}>
                German-born Heike Jarik got her start in the industry on Savile Row where she learned the intricacies of tailoring. She eventually launched her namesake brand where she takes great inspiration from Bauhaus theory. Here is her story.
              </h5>
              </div>
              <div className={css.paragraph}>
              <p style={{fontWeight: 'bold'}}>
              You grew up in Germany. Did you always know that you wanted to work in fashion?
              </p>
              <p>
              I grew up in a small town near Frankfurt in the middle of Germany. It was a beautiful place: lots of nature, rolling hills, beautiful forests… I was surrounded by natural inspiration. From a young age, I knew I wanted to be a designer. My grandmother was a seamstress who made uniforms, garments, anything she needed to make a living. I still have her sewing machine. I ended up going to a pre-diploma program in Hamburg and then went to Central Saint Martins in the UK to do my bachelors and masters degree in fashion design. I absolutely loved it. 
              </p>
              
              <p style={{fontWeight: 'bold'}}>
              How did you get your foot in the industry?
              </p>
              <p>
              My first internship was at a Savile Row company where I learned everything about tailoring. One source of pride is that there was another student who was doing a masters at Saint Martins and worked on Savile Row before launching his own brand: Alexander McQueen.
              </p>
              <p>
              After graduating, it was tough to find a full-time job in England and in Germany but I found a role in Italy. After a few years, I came to the US and I’ve been here since. 
              </p>

              <p style={{fontWeight: 'bold'}}>
              Tell us about the early days of Heike.
              </p>
              <p>
              Initially I had no idea who I was designing for. Which is natural - it comes with time. Although I had always known I wanted to be a designer, because I worked for other designers and their vision, my work had to be commercial. If your garments don’t make money, you won’t have a job for very long.
              </p>
              <p>
              One of the ideas I wanted to explore since I was young was Bauhaus. I did my bachelors degree at Middle Sex Polytechnic which is based on the Bauhaus principle of having a general education prior to specialization. I was fascinated by this concept. I went to several bauhauses and studied the art and design aspects which were major inspirations. Plus I love the design concepts that focus on functional good design that can be timeless and long-lasting. 
              </p>

              <p style={{fontWeight: 'bold'}}>
              Who is the Heike woman?
              </p>
              <p>
              She’s a world traveler. An independent woman. And she’s always busy. 
              </p>
                            
              <p style={{fontWeight: 'bold'}}>
              Everything is produced in New York. Tell us about your production methods.
              </p>
              <p>
              I make everything here in New York. In fact, I’m certified Made in NYC. I source my fabrics everywhere from Mood to global mills. Right now, with the COVID pandemic, finding fabric is a huge challenge since everything is done online. I’ve been working with my archive of fabrics that I’ve collected over the last few years. I like to incorporate leftover fabric in a clever way to reduce my footprint as well. 
              </p>


              <p style={{fontWeight: 'bold'}}>
              The industry has changed so much in the last 10-20 years. What advice would you give to aspiring designers or fashion students?
              </p>
              <p>
              Be original. And never be satisfied with the first design that you do. The industry overall is scaling down at the moment and there isn’t a lot of space right now for emerging designers. The only way to get ahead in this incredibly competitive industry is to do your research, be humble, be original, and of course, be extremely disciplined and hardworking.
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

export default DP_heikePage;
