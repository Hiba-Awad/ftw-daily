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
import dp_ouisa from './DP_ouisa.png';
import { pink } from '@material-ui/core/colors';

const DP_ouisaPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | ouisa "
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_ouisaPage',
        description: 'Designer Profile - OUISA | Revvie',
        name: 'Designer Profile | OUISA',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} OUISA</h6>
          <h1 className={css.pageTitle}>Bryn Taylor on the French aesthetic, the importance of fit models, and being "quietly cool".</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <div className={css.headerSub}>
              <img className={css.coverImage} src={dp_ouisa} alt="ouisa | bryn taylor" />
                <h5 className={css.headerSub}>
                  Bryn Taylor is a former stylist turned designer who was inspired by easy French-style dressing. Her collection encapsulates the concept of "quietly cool" and city sophistication without compromising on comfort. 
                </h5>
              </div>
              
              <div className={css.paragraph}>
                <p style={{fontWeight: 'bold'}}>
                When did you realize that fashion was in the cards for you?
                </p>
                <p>
                I was a theatre major in college, and I had zero awareness that I wanted to be in fashion. But looking back, there were some obvious indicators. For instance, I was always a lot more concerned about what I would wear to my auditions instead of the audition itself. I messed up my lines because I spent more than two hours putting together the perfect outfit. I guess I realized then that fashion was probably more important to me than being an actor!
                </p>
                              

                <p style={{fontWeight: 'bold'}}>
                Tell us about your first job in the industry.
                </p>
                <p>
                I answered a Craigslist ad to be a fit model. I was still trying to act but I needed to pay the bills. I ended up being hired by this young designer who had this gorgeous space next to Carnegie Hall. Eventually I also took on responsibilities as a production coordinator, which meant that I was managing patternmakers and seamstresses. It was a total trial by fire. I got a really hard and fast education in dealing with the Garment District. I also learned a ton about technical language and garment production which was invaluable when I started my line. I also did a ton of styling and art design for a designer.
                </p>

                <p style={{fontWeight: 'bold'}}>
                What’s it like to be a fit model?
                </p>
                <p>
                Having the right fit model is critical. The fit model wears your sample size. This designer’s sample size was a 2-4 and it turns out her sample size was too small for most standard models. Which then affects the rest of your sizes. You cannot understate the power of the difference of an inch here and there!
                </p>
                

                <p style={{fontWeight: 'bold'}}>
                How did you end up working as a stylist?
                </p>
                <p>
                It’s a crazy story but the designer that I was working for had a hedge fund backer who turned out to be embezzling money from his fund. He ended up on the front page of the Wall Street Journal and when he was arrested, the brand basically was shut down. The money was pulled and the samples were even taken as assets. It was surreal.
                </p>
                <p>
                While I was working for the designer, I looked into taking some classes at FIT. Originally, I was hoping to take a fashion design class but that was full and the only open class was a styling class. My first reaction was “ugh, this is going to be terrible” but the class ended up being taught by this amazing personal stylist, not an editorial shoot stylist. I loved the class so much that I started working on a bunch of different photoshoots to build my book before I started to take on my own clients.
                </p>
                
                <p style={{fontWeight: 'bold'}}>
                You started to think about launching your own brand. What did you want to create?
                </p>
                <p>
                My original concept was athleisure for the evening. Think long dresses, cocktail dresses, separates that are formal but made in rayon jerseys, ponte jerseys … I wanted formal wear that wasn’t super stiff and structured but in fact, comfortable and moved with you. Alas, it turns out that this was too big of a mind shift for customers. Changing people’s idea of what constitutes formal wear was challenging.
                </p>
                <p>
                I started thinking about a collection around the concept of uncomplicated comfort and quietly cool. I wanted to show that comfort is not synonymous with lazy or sloppy. It can look elevated. It’s all about creating classic silhouettes and using fabric that you wouldn’t necessarily expect. Almost everything is knit with stretch and is machine-washable.
                  </p>              

                <p style={{fontWeight: 'bold'}}>
                Why are we all so obsessed with the French aesthetic?
                </p>
                <p>
                Not to get into stereotypes, but I think when we think of the Parisian woman, it’s just so effortless and carefree yet chic. She makes not caring look really cool. Actually, the first thing I associate with her is her hair – she had the original bedhead. It’s the opposite of trying hard but still making it work that I think is so enticing.
                </p>
                

                <p style={{fontWeight: 'bold'}}>
                Tell us about your production process.  
                </p>
                <p>
                As a new brand, finding high quality fabric from suppliers that can tolerate low minimums is a real challenge. Pre-COVID, I would go to all these different trade shows to check out various suppliers. Now I focus on just two – one that’s based in Canada, and another in New York. My Canadian supplier does a lot of athletic and performance wear so comfort is always at the forefront, which was important to me. And everything is manufactured here in New York.
                </p>
                
                <p style={{fontWeight: 'bold'}}>
                Who is the OUISA woman?
                </p>
                <p>
                She’s the confident minimalist. For her, it’s about the “less is more” approach. She doesn’t need to prove herself through her clothes. Fabric and quality matters because she wants her pieces to be in her closet for a very long time.
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

export default DP_ouisaPage;
