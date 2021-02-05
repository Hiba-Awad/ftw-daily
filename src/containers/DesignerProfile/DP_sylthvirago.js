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
import dp_sylthvirago from './DP_sylthvirago.jpg';
import { pink } from '@material-ui/core/colors';

const DP_sylthviragoPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | danielle goldman and athanasia diamantis-svec "
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_sylthviragoPage',
        description: 'Designer Profile - Sylth Virago | Revvie',
        name: 'Designer Profile | Sylth Virago',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} SYLTH VIRAGO</h6>
          <h1 className={css.pageTitle}>danielle goldman and athanasia diamantis-svec on ethical footwear.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <div className={css.headerSub}>
              <img className={css.coverImage} src={dp_sylthvirago} alt="danielle goldman, athanasia diamantis-svec, kylie blackmon | sylth virago" />
                <h5 className={css.headerSub}>
                  Dismayed by the lack of ethical (and fashion-forward) footwear options, long-time friends Danielle Goldman and Athanasia Diamnatis-Svec took matters into their own hands and decided to create their own line of compassionate and ethical luxury heels. 
                </h5>
              </div>
              
              <div className={css.paragraph}>
                <p style={{fontWeight: 'bold'}}>
                Sylth Virago is about creating bold footwear that is also ethical. When did you start thinking about ethical fashion?
                </p>
                <p>
                <b>D:</b> I’ve been a vegetarian for a very long time but wasn’t so particular about my fashion choices. I started to become more conscious and thoughtful about buying non-animal products during a trip to Italy. I was looking at all these gorgeous leather shoes and it hit me – I was a total hypocrite. I refused meat yet here I was purchasing footwear made from animal products.                </p>
                <p>
                <b>A:</b>  On the contrary, I used to make fun of Danielle for her vegetarian tendencies. In fact, every time we would have dinner together, I would ask, “do you really not want the steak?” My father was a hunter and I grew up with lots of meat and cheese in my diet. I think my turning point came when I had my two kids. My son had pretty severe eczema that only cleared up once I eliminated meat and cheese from my diet  (this when I was breastfeeding). I also started to do a lot of research on animal slaughter and ethical practices. I slowly became more and more conscious of eliminating animal products from my life and there came a point where those products were no longer a part of my life.
                </p>
                

                <p style={{fontWeight: 'bold'}}>
                When did the idea for Sylth Virago come about?
                </p>
                <p>
                <b>A:</b> It was probably after Danielle came back from her Italy trip. I had been on the hunt for a beautiful bag and I was also struggling to find good vegan options. Everything that was super sexy and feminine involved leather. Also, we realized that outside of Stella McCartney, design-forward and luxurious styles were extremely limited. That’s when the lightbulb went off and we decided to start an ethical shoe line.
                </p>

                <p style={{fontWeight: 'bold'}}>
                How hard is it to find the right materials when creating a vegan shoe? How do you know where to source the materials or do production?
                </p>
                <p>
                Our designer, Kyle Blackmon tapped sustainability expert Jen Keane, of Central Saint Martins, the world-renowned fashion school, and previous resident at Bolt Threads, an incredibly innovative company that focuses on sustainable fabrics and biomaterials to assist in sourcing sustainable materials for the first collection. They recently came out with a fabric made from mushrooms. Other inventions include creating a silk spun by spiders. She joined our team and put together an entire plan in terms of the materials that we would use for various pieces of the shoe.
                </p>
                

                <p style={{fontWeight: 'bold'}}>
                Tell us about your production. Everything is made in Italy. Why Italy?
                </p>
                <p>
                Italy is the gold standard when it comes to shoemaking. We wanted to make a very luxurious product and didn’t want to cut corners when it came to quality. We looked at other potential countries like Spain, Portugal, and Brazil, but at the end of the day, Italy was at the top. It’s also familiar to the customer in that Italy is synonymous with quality craftsmanship. Plus, they were very open and willing to work with us even though we are a new brand.
                </p>
                <p>
                However, trying to explain the concept of a vegan shoe was quite a challenge. In some respects, Italy is very much at the forefront of sustainability – there are recycling cans everywhere on the street. But, when it comes to high fashion, it’s still somewhat of a foreign concept and requires a lot of explanation and patience.
                </p>
                
                <p style={{fontWeight: 'bold'}}>
                Is there a special meaning behind “Sylth Virago”?
                </p>
                <p>
                We came up with this name in a little hole-in-the-wall Indian restaurant. Sylth is a combination of synthetic and a sylph which is a graceful and fairy-like woman. By contrast, the archaic definition of Virago is a female warrior, a woman who is brave or heroic. We loved that the combination of these two words sounded luxurious but also encapsulated the different facets of woman: soft and graceful, yet strong and brave.
                </p>
                <p>
                Also, on a less romantic note, we had to find a name that was available as a domain!
                  </p>              

                <p style={{fontWeight: 'bold'}}>
                Tell us about the names of the shoes in your collection.
                </p>
                <p>
                <b>A:</b> I’m Greek –
                </p>
                <p>
                <b>D:</b> She’s very, very Greek.
                </p>
                <p>
                <b>A:</b> But it was actually Danielle who came up with the idea of using Greek goddesses.
                </p>
                <p>
                <b>D:</b> You might also have noticed that all our prices end in $18 or are divisible by the number 18. I’m Jewish and in Judaism, the number 18 is a very important number that signifies life. We wanted to combine both of our backgrounds in our collection.
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

export default DP_sylthviragoPage;
