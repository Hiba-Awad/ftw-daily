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
import dp_metalandstone from './dp_metalandstone.jpg';
import { pink } from '@material-ui/core/colors';

const DP_metalandstonePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | lisette bez"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_metalandstonePage',
        description: 'Designer Profile - Metal & Stone Creations | Revvie',
        name: 'Designer Profile | Metal & Stone Creations',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} METAL & STONE CREATIONS</h6>
          <h1 className={css.pageTitle}>lisette bez on nature and traditional metal-making.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
                <div className={css.headerSub}>
                  <img className={css.coverImage} src={dp_metalandstone} alt="lisette bez | metal & stone creations" />
                  <h5 className={css.headerSub}>
                    Lisette Bez discovered her love of jewelry making at a low point in her personal life. After learning her craft in Ecuador from a master metalsmith using old-school methods, Lisette lauched Metal & Stone Creations. Her collection draws inspiration from nature and Andean cosmology and is made by Lisette herself. 
                  </h5>
                </div>

                <div className={css.paragraph}>
                  <p style={{fontWeight: 'bold'}}>
                  Did you always know you wanted to be in fashion?
                  </p>
                  <p>
                  I’ve always been into art. When I was a teenager, I really wanted to go to design school. I was looking at design and fashion schools in South America (my mother is Ecuadorian while my father is French). Alas, due to family circumstances, that didn’t happen. I ended up going to college in the US and studied global affairs.
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  Sounds about as far away from jewelry as you can get.
                  </p>
                  <p>
                  Yes. I got a normal, non-fashion job. I was still interested in design but just did it on the side: learning to sew, making handbags… It was more about making products for myself than creating a business.
                  </p>
                  <p>
                  In 2015, my partner of 10 years passed. It was a very tough time and I decided to go to Ecuador to spend time with my family. While I was there, a family member mentioned that there was this jewelry class happening and strongly suggested I give it a try to take my mind off things. I was very reluctant as I still was coming to terms with my loss, but I went.
                  </p>
                  <p>
                  It turned to be a tiny school in Quito. I started off making rings and I absolutely fell in love with jewelry making. The whole process of creating also helped me process my grief and get me to a healthier place emotionally.  I eventually came back to the US to go back to my day job and I realized I couldn’t do it anymore. I felt a calling to do something with jewelry. I sold a lot of my personal belongings and my car, and packed up for Ecuador.
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  Did you get more formal training during this time?
                  </p>
                  <p>
                  I went through a program that taught me the traditional art of jewelry making, using old tools and old methods. We made everything: earrings, necklaces, rings… It was an incredible experience. My teacher was a gentleman in his 70s who had spent a lifetime in metalsmithing and his experience was invaluable. Also, his methods are not something you would learn at a more modern school as machines have replaced a lot of his methods.
                  </p>
                  <p>
                  We also didn’t have a lot of tools or materials. For instance, in the US, you can easily find silver tubing for the backs of your earrings but in Ecuador, you had to make those from scratch. Similarly, you couldn’t find silver sheets so you had to make those yourself – you would literally take a pure silver nugget and hammer out a sheet. I loved that I was learning something that was slowly dying out and it felt like I was going back to the basics.
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  Tell us about your design aesthetic.
                  </p>
                  <p>
                  I’m very interested in Ecuadorian and Andean styles. My designs are influenced by Andean cosmology mixed with art nouveau. I love organic curves and free flow shapes. I’m also very influenced by nature. Many of my designs incorporate vines, ivies, and leaves.
                  </p>

                  <p style={{fontWeight: 'bold'}}>
                  How do your designs come to life?
                  </p>
                  <p>
                  I have two main methods. The first is to have a theme in mind. I will then build a series of pieces around that theme. For instance, right now I have a theme around plants. I made thirteen pieces designed after tropical leaves (palms, banana leaves) and North American plants (oak, hollies).
                  </p>
                  <p>
                  My second method is based on stones. I used to get my stones in person and then I would work with a stonecutter who’s based in New York. I look at the features of the stone and work a design that’s complementary to how the stone looks naturally. For instance, there’s a lodolite stone which is a quartz that has inclusions and it almost looks like artwork within the stone. I look at the inclusions and will create a setting that’s complementary with the “artwork” inside.
                  </p>
            
                  <p style={{fontWeight: 'bold'}}>
                  Tell us about the stones and the metals in your collection.
                  </p>
                  <p>
                  I work mostly in silver and gold, typically sterling silver and 14 carat gold. I can work with all metals, but silver and gold are my go-tos. They are of much higher quality and don’t oxidize nearly as fast as copper or brass which have higher acidities and don’t age as well. Everything is handmade by me. 
                  </p>
                  <p>
                  I also love working with stones that are non-traditional or mainstream. I especially love stones that have mineral inclusions (crystals inside a stone). In fine jewelry, inclusions can sometimes be viewed as imperfections, but I love them because it means that no two people have the exact same product. What you have is unique to you.        
                  </p>
                  <p>
                  Something I’ve started to do recently is repurposing stones. I crush unused stones and inlay them into a fancy silver or gold setting. These are stones that are broken or left over. I also take my silver scraps and melt them back to create another piece. Nothing goes to waste.
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

export default DP_metalandstonePage;
