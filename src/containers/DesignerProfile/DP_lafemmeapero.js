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
import dp_lafemmeapero from './DP_lafemmeapero.jpg';
import dp_lafemmeapero2 from './DP_lafemmeapero2.jpg';
import { pink } from '@material-ui/core/colors';

const DP_lafemmeaperoPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | lea enderlin et sarah lequimener"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_lafemmeaperoPage',
        description: 'Designer Profile - La Femme Apero | Revvie',
        name: 'Designer Profile | La Femme Apero',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} LA FEMME APERO</h6>
          <h1 className={css.pageTitle}>lea and sarah on the importance of an apero, french fashion, and NYC manufacturing.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
            <div className={css.headerSub}>
            <img className={css.coverImage} src={dp_lafemmeapero} alt="lea enderlin sarah lequimener | la femme apero" />
              <h5 className={css.headerSub}>
              La Femme Apero was founded by two Parisiennes who wanted to bring French chic to this side of the Atlantic. Marrying city sophistication with easy dressing and sprinkled with a touch of “je ne sais quoi”, La Femme Apero’s capsule collection is manufactured in New York City using gorgeous lightweight fabrics (many of which are deadstock) with beautiful draping.
              </h5>
              </div>
              <div className={css.paragraph}>
              <p style={{fontWeight: 'bold'}}>
              Tell us about your upbringing in Paris. Paris is considered the fashion capital of the world. Did you have a lot of fashion influences growing up? Did you both know that you wanted to go into fashion?
              </p>
              <p>
              <b>L:</b> My grandma was very stylish and wore heels well into her 70s. Even her house slippers had a little heel! I was awestruck by her. By contrast, my mother was not feminine at all. She didn’t wear makeup or heels and preferred pants to dresses. Even though she didn’t seem interested in fashion at all, she still subscribed to ELLE magazine which I absolutely adored. The magazine would have a biannual fashion week special edit which I was completely obsessed with. And of course, since we lived in Paris, the evening news would report the happenings during Paris Fashion Week. When I was 11, I saw the Galliano couture show and was completely hooked. That’s when I knew I wanted to be a fashion designer. Unfortunately for me, my father wasn’t on board at all. He wanted me to have a more traditional career path like banking or law which I had zero interest in. We had a huge argument when I went to fashion college and it took him a while to come around to my career choice. 
              </p>
              <p>
              <b>S:</b> One of my first fashion memories is when I was 12. One of my neighbors had very small feet due to a medical condition and she gave me fifteen pairs of these beautiful high heels in size 4. I remember walking around in these heels and loving the feeling of being dressed up. I also hosted these little fashion shows with all my friends when I was about 8. We would get fabric, drape it around ourselves, and strut to music. I was really into creating a look and showing it off. Initially, in terms of a career path, I was considering joining the circus. I was training as an acrobat and did the trapeze, and I was actually really good! There are a lot of great circus troupes in France but I ended up not pursuing it because the injury potential was so high. Instead, I ended up talking to my mom about next steps and it turns out one of her friends is a fashion recruiter. She suggested a specific fashion school for me and that’s how I got my start. 
              </p>

              <p style={{fontWeight: 'bold'}}>
              And of course, you got in.
              </p>
              <p>
              Yes, and I had a great four years there. I studied Accessories Design. I also received some additional training in millinery.
              </p>

              <p style={{fontWeight: 'bold'}}>
              Tell us about your first experiences working in the industry. What was it like?
              </p>
              <p>
              <b>L:</b> In fashion, you generally get your start early. I interned for a very short time but since most internships are unpaid, I moved onto full-time paid positions quickly. I worked at a bunch of different places and did a little of everything: e-commerce, TV, spent some time at a production studio… I then worked for a British company that did leathers and denim; they’re the ones who brought me over to the US. Then, I ended up at Calvin Klein in New York, and Ann Taylor LOFT. And eventually, I was at a licensing company that had a bunch of clients including Banana Republic and Intermix’s private label. I’ve done a little bit of everything.
              </p>
              <p>
              <b>S:</b> I tried to get internships in France but it didn’t work out so I ended up interning in the US instead which I then quickly parlayed into a full-time gig. I was a styling assistant for a number of different individual stylists. I helped with campaigns, editorials, the usual. One of the coolest gigs I had was shooting Brad Pitt. Other than that, it’s a pretty unglamourous life with tons of travel all over the world. I remember once being alone with eight pieces of luggage which sucked. Not a sexy job!
              </p>
              
              <p style={{fontWeight: 'bold'}}>
              Tell us how you met. 
              </p>
              <p>
              <b>L:</b> We had a mutual friend and initially we didn’t like each other at all. Probably because we didn’t know each other well. We both moved to the US at around the same time, me on the West Coast and Sarah on the East. I traveled a lot to New York City and since we both were alone with no family and a small social circle, we ended up grabbing a lot of coffees together and it turns out we actually got along very well. 
              </p>

              <p style={{fontWeight: 'bold'}}>
              Whose idea was it to start La Femme Apero?
              </p>
              <p>
              <b>L:</b> I hated my job for the longest time and I knew eventually that I wanted to work for myself but I didn’t know how to do it. I also wasn’t keen on working alone since I don’t think I’m good at working solo. I thought maybe Sarah and I could do something together but Sarah had her job. We did start talking a lot about creating something together.  
              </p>
              <p>
              <b>S:</b> The turning point was during a long weekend in the summer of 2018 when we sat down and actually decided to brainstorm. After all of those months talking, we decided it was time to put pen to paper. I came with a pdf of ideas and a basic business plan.
              </p>
              <p>
              <b>L:</b> There was a LOT of rosé involved! It ended up taking us about a year before we actually launched.
              </p>
              
            
              <p style={{fontWeight: 'bold'}}>
              Why La Femme Apero? Tell us about the brand concept and the ethos you want to convey.
              </p>
              <p>
              <b>L:</b> Well, we were having an apero when we came up with the idea. But really, the first thing that came to mind was capturing the very French attitude that we don’t find here and we miss a lot: the easy and sexy dressing that is no frills and not vintage. We thought it was interesting that there are a lot of French brands here but that we personally didn’t shop from any of them. We aren’t that French girl. For example, there are lots of trendy French brands like Rouge that was started by a French influencer but is very vintage. Sexy grandma. Not my style. Sezane is another one that’s very cutesy. They clearly have a demographic that adores their clothes but again, not something I would wear. I felt that we could do something that was modern and also very womanly.
              </p>

              <p style={{fontWeight: 'bold'}}>
              How do you come up with your silhouettes and design concepts?
              </p>
              <p>
              <b>S:</b> pieces that are easy to wear and accessorize were the priority. Sexy in the French way and easy to wear. We love dresses since a dress is already an outfit on its own: you throw it on and you’re done. The shirt is another classic of French dressing but one that isn’t very popular here. We see lots of blouses but very few shirts.
              </p>

              <p style={{fontWeight: 'bold'}}>
              Why did you choose to produce everything in New York?
              </p>
              <p>
              Because being sustainable is very important to us and being local is probably one of the most sustainable things you can do. Also, getting low MOQs overseas was a big challenge so bonus points to New York factories taking our small minimums. Plus, we wanted to be closer to our production and monitor development. 
              </p>
              <p>
              The fabrics we use tend to be heavy on silk. It’s not the most sustainable of fibers but it’s a natural fiber and it lasts a long time so in a way, it’s more ethical than other short-lived pieces. For our next capsule, we’ve been sourcing deadstock fabrics, again mostly in silk. I find silk to be so chic and long-lasting which is exactly what our brand stands for.   
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

export default DP_lafemmeaperoPage;
