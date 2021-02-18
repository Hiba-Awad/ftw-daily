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
import dp_noyette from './DP_noyette.jpeg';
import { pink } from '@material-ui/core/colors';

const DP_noyettePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | riley bennett"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_noyettePage',
        description: 'Designer Profile - Riley Bennett | Noyette',
        name: 'Designer Profile | Noyette',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} Noyette</h6>
          <h1 className={css.pageTitle}>riley on romantic womenswear and the importance of sustainability.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
            <div className={css.headerSub}>
            <img className={css.coverImage} src={dp_noyette} alt="riley bennett noyette" />
              <h5 className={css.headerSub}>
              Seattle-born fashion-lover Riley Bennet wanted to create a collection of romantic womenswear using bold colors and prints while employing ethical, sustainable methods. 
              </h5>
              </div>
              <div className={css.paragraph}>
              <p style={{fontWeight: 'bold'}}>
              Tell us about your upbringing. Were you always interested in fashion?              
              </p>
              <p>
              I grew up in Seattle and adored fashion. I subscribed to every fashion magazine I could and even organized my beloved magazines on my bookshelf in order of publication and publish date. I also made costumes for my high school drama club. I knew I wanted to be around a larger fashion community and ended up at FIT in New York.               
              </p>
              
              <p style={{fontWeight: 'bold'}}>
              How did you get your foot into the industry?              
              </p>
              <p>
              I majored in fashion merchandising and specialized in product development. I ended up graduating early and took a job at Bluefly to do their site merchandising. That was my start in e-commerce. I then worked at macys.com very briefly and also did a stint at a startup that focused on discount/deals companies like RueLaLa.com.               
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              Why did you move to San Francisco?               
              </p>
              <p>
              My husband got accepted to law school there. The fashion vibe in San Francisco is so different from New York – a lot more casual with a focus on comfort. It reminds me a lot of Seattle. Having said that, I still prefer the New York sensibility around fashion in a lot of ways.                 
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              When did you start thinking about Noyette? How did the idea come about?
              </p>
              <p>
              It was probably about two years ago. I started sketching and thinking about the kind of collection I wanted to create. It was slow going: finding the right manufacturer, sourcing the right fabric … also, my timing wasn’t great. We started production right before COVID happened.              
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              It was probably about two years ago. I started sketching and thinking about the kind of collection I wanted to create. It was slow going: finding the right manufacturer, sourcing the right fabric … also, my timing wasn’t great. We started production right before COVID happened.              
              </p>
              <p>
              Yes. Also, all the fabrics we use is deadstock that was sourced in LA. Having been in the industry for such a long time, I saw how wasteful production could be. The sheer volume of garments and the amount of fabric that is made and then thrown away is shocking. It seemed so wasteful to keep producing, producing, producing. When I found I could use amazing leftover fabric from other designer brands, it was a total no-brainer for me to use them.
              </p>
              <p>
              I also love the limited-edition aspect of using deadstock. There are only so many pieces of this garment that’s made using this exact same fabric.
              </p>
              
              <p style={{fontWeight: 'bold'}}>
              Who is the Noyette woman?
              </p>
              <p>
              I loved the idea of creating a piece that could work in many different settings. I used to use life events like weddings as an excuse to invest in a new garment, but those pieces were hard to wear outside of more formal settings. I wanted to create dresses that could work for the fancier moments but also could be dressed down so that you got more use from it.
              </p>
              <p>
              I also love prints and bold colors and I felt that most sustainable brands tend to showcase neutral colors. I also love the editorial fashion look. Basically, I want to be a sustainable brand with a totally different vibe from what you see today.
              </p>

              <p style={{fontWeight: 'bold'}}>
              Where do you get your design inspiration from? 
              </p>
              <p>
              I love the feminine, romantic style and wanted to keep that sort of aesthetic but make it modern for today’s woman.
              </p>
              <p>
              I also try to be very thoughtful in my dress design to account for different body shapes. For instance, in my St George dress, the straps in the back are made of elastic cording that I found in a (surprise!) hardware store. Because of the elasticity, the dress just molds to the woman’s body and is more open to different shapes than if I had used plain fabric.
              </p>

              <p style={{fontWeight: 'bold'}}>
              Tell us about the names of your dresses. You have the West 82nd dress, the Fillmore dress… What’s the story behind the names?
              </p>
              <p>
              Every dress is named after a different street that I lived on so these are all streets in New York, San Francisco, and Los Angeles (I was here for a hot second). I also tried to capture the different vibes and moods of each individual street. For instance, for the West 82nd dress, I felt that the Upper West Side tends to have a very refined feel so I created a very ladylike dress. The West 30th dress is super comfortable but also can look very chic – just like the laidback but cool vibe of Hells Kitchen. The Fillmore dress is named after a street in San Francisco so it’s more pared down, more minimalist, and looks very much like something a San Francisco woman would wear. Oak Street, also in San Francisco, was right by the park so I created the dress with a bold floral print.  
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

export default DP_noyettePage;
