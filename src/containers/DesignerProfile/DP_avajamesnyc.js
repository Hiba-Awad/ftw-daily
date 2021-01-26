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
import dp_avajamesnyc from './DP_avajamesnyc.jpg';
import { pink } from '@material-ui/core/colors';

const DP_avajamesnycPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | eugena delman"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_avajamesnycPage',
        description: 'Designer Profile - Ava James NYC| Revvie',
        name: 'Designer Profile | Ava James NYC',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} AVA JAMES NYC</h6>
          <h1 className={css.pageTitle}>eugena delman on re-shaping size-inclusive womenswear.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
            <div className={css.headerSub}>
            <img className={css.coverImage} src={dp_avajamesnyc} alt="eugena delman ava james nyc" />
              <h5 className={css.headerSub}>
              Eugena Delman never thought she would go into fashion. She founded Ava James NYC at the encouragement of her older sister who struggled to find flattering and quality pieces for her size 14 frame. She also co-founded Revvie with her long-time college friend Hiba Awad in the wake of the global coronavirus pandemic when she saw first-hand the struggles that many small fashion designers faced.
              </h5>
              </div>
              <div className={css.paragraph}>
              <p style={{fontWeight: 'bold'}}>
              You say that fashion was never in the cards for you. Yet here you are, having launched your own brand and a fashion tech company. How did that happen?
              </p>
              <p>
              I spent close to a decade working for the same bank, including seven years working with the same team. By that time, I had just had my first kid and the team that I was working with was slowly starting to fizzle out. My motivation was shot and frankly, I was in dire need of a change. I ended up leaving without having a plan in mind which was very off-brand for me and quite terrifying to say the least. Having said that, funnily enough, the moment I walked out the company’s doors, I had zero regrets about what I had just done!
              </p>
              <p>
              After quitting, I spent that summer in Hong Kong where I grew up. I wanted to get some quality time with my parents and my older sister who still live there. It was the first time in years that I got to celebrate my sister’s birthday and I wanted to get her a special outfit. We went to this huge luxury mall close to my parents’ home and we must’ve gone to twenty different clothing stores. Not a single one of them carried anything bigger than a size 10. My sister, who wears a size 14, was SOL.
              </p>
              <p>
              I assumed that it was because sizes in Asia tend to run small. So we checked a bunch of American retailers online to find the perfect outfit. Lo and behold, even in the US where the average woman wears a size 14, it was next to impossible to find anything that was not fast fashion or dismal quality. That was my lightbulb moment.
              </p>

              <p style={{fontWeight: 'bold'}}>
              How did you come up with the brand aesthetic? It’s very tailored and quite sexy. What was the inspiration behind the collection?
              </p>
              <p>
              I spent many months doing as much research as I could on what was already available and it felt that the market was pretty bifurcated between loose, drapey garments and skin-tight clubwear. Neither of which was my sister’s style!
              </p>
              <p>
              I wanted to design pieces that ambitious, working, modern women would want to wear. I’m a big believer that garments that are properly tailored and that fit close to the body using quality fabrics tend to be the most flattering. Circus tents don’t flatter anyone. And neither does cheap, lightweight fabrics. I also wanted designs that were feminine and elegant yet daring and sexy. Lastly, these pieces had to be versatile. As a former corporate woman, I knew that most women freeze in big glass offices and as a result, wear a cardigan or blazer over their blouses or dresses. So I knew I could get away with creating a dramatic back while keeping it conservative in the front.
              </p>

              <p style={{fontWeight: 'bold'}}>
              Is there a reason why you went with such a specific size range of 8 to 18?
              </p>
              <p>
              Two reasons. Because my pieces are so tailored and fit close to the body, there are only so many sizes that we could make with a single pattern before having to re-fit and re-grade. I wanted to maintain the integrity of my patterns before expanding too quickly to other sizes.
              </p>
              <p>
                I also felt that sizes 8 to 18 captured a big percentage of working women in their 30s and 40s. It just made sense to me from a numbers perspective and I thought it was more reflective of working women than the typical size range of 00-10.
              </p>

              <p style={{fontWeight: 'bold'}}>
              You launched while you were pregnant with your daughter. What was that like?
              </p>
              <p>
              I definitely don’t recommend it!
              </p>
              <p>
              No, just kidding. There’s never a good time to have kids. Plus, starting a business is tough but at the same time, I get to make my own hours and be a lot more flexible than I would’ve been in a corporate environment. My husband was a huge supporter and we were also very fortunate to have my mother’s help, not to mention, my daughter was a really easy baby!
              </p>

              <p style={{fontWeight: 'bold'}}>
              Everything is made in New York City using upcycled fabrics. Was that a conscious choice?
              </p>
              <p>
              Yes. It would’ve been relatively easy for me to manufacture in China given that my family lives quite close to the Chinese border, But I wanted to keep a close eye on production. Plus, getting good fit plus models available in my size range in Asia is close to impossible and I found a great fit model here in New York.
              </p>
              <p>
                Using upcycled fabrics was an excellent way of getting access to top notch fabrics from the best designers that would’ve been totally out of reach for a newbie designer like me. I also didn’t realize just how much excess fabric is produced by the industry already and it seemed ridiculous to add to that.
              </p>
              <p>
                Also, don’t forget that I was pregnant! I had zero desire to schlep back and forth overseas even in non-COVID times.
              </p>
              
              <p style={{fontWeight: 'bold'}}>
              Let’s talk about Revvie. How did the idea for Revvie come about?
              </p>
              <p>
              It was early 2020 and I finally felt that we were getting some momentum. Things were going well. And then, COVID. To say it was an awful time would be an absolute understatement. Even though we were technically an online-only brand, we were quite reliant on in-person events like pop-ups and trunk shows which obviously were no longer possible. 
              </p>
              <p>
              Importantly, I saw many of my fellow designer friends struggling to suddenly switch to a digital-only strategy with limited resources. There were a couple of designers who had wholesale strategies who just got destroyed with cancelled orders. Basically, smaller designers (and almost overwhelming all women) were getting crushed. It was heartbreaking to watch my own brand struggle and and seeing all these other designers in the same boat with no way out.
              </p>

              <p style={{fontWeight: 'bold'}}>
              So what was the solution?
              </p>
              <p>
              I thought about the problem from two sides - as an avid online shopper and as a brand owner. To me, shopping online isn’t easy, even from well-known and established brands. There’s too much uncertainty. You just know that the beautifully draped dress on the model isn’t going to look like that on you. And of course, it’s even tougher to shop from lesser known brands because there’s just not a lot of information. Very little on Google, and very rarely any authentic reviews with pictures. As a shopper, how the heck do I know that I’m not getting scammed or at the very least, getting a product that lives up to its price?
              </p>

              <p style={{fontWeight: 'bold'}}>
              Hence a review platform.
              </p>
              <p>
              Exactly. The idea is to figure out a way to make the online purchase process less risky from smaller, lesser-known brands. Definitely by using verified reviews (with a picture, of course, which is the absolute gold standard for me as a shopper!) but also create a really easy, automated returns process where I don’t need to speak to a human being because I’m a millennial and I hate that.
              </p>

              <p style={{fontWeight: 'bold'}}>
              Tell us about what you want to see for Revvie going forward.
              </p>
              <p>
              I want to create a beautiful space for consumers to discover amazing designers that they may not discover otherwise. Personally, I’ve been disillusioned by fast fashion and the well-known designer brands that charge a massive mark-up without noticeable increases in quality. At the same time, scrolling through lists of small, indie designers can be overwhelming and time-consuming especially since I don’t know how the quality stacks up. How great would it be to be able to read about each designer and see what actual customers are saying?
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

export default DP_avajamesnycPage;
