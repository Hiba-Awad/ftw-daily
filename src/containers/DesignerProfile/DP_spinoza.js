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
import dp_spinoza from './DP_spinoza.jpg';
import dp_spinoza2 from './DP_spinoza2.png';

import { pink } from '@material-ui/core/colors';

const DP_spinozaPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | silja kim "
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_spinozaPage',
        description: 'Designer Profile - SPINOZA | Revvie',
        name: 'Designer Profile | SPINOZA',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} SPINOZA</h6>
          <h1 className={css.pageTitle}>silja kim on designing ergonomic eyewear and why blue light glasses will be the next big thing.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <div className={css.headerSub}>
              <img className={css.coverImageSPINOZA} src={dp_spinoza} alt="silja kim | spinoza" />
                <h5 className={css.headerSub}>
                She was tired of wearing heavy glasses that gave her headaches and knew there had to be a better way. Founder Silja Kim decided to launch SPINOZA, a premium line of eyewear that is optimized for comfort, weighs next to nothing, and never compromises on style. 
                </h5>
              </div>
              
              <div className={css.paragraph}>
                <p style={{fontWeight: 'bold'}}>
                How did you come up with the idea for SPINOZA?
                </p>
                <p>
                I’ve been wearing glasses since I was 6. I had terrible eyesight and was stuck wearing these enormous heavy frames that gave me constant headaches. As I got older, I started looking for frames that had a decent tradeoff between style and function. One day, I just asked myself, “why do I have to sacrifice either style or function? Can’t I have both?” So that’s when I came up with the concept of creating an eyewear line that would be very chic and stylish but use very lightweight material. A marriage of form and function, so to speak.
                </p>
                <p>
                I started with very few styles that I showcased at pop-ups in the Hamptons. The reaction was extremely positive and that’s when I realized that this could be an actual business. I found some backers (mostly ophthalmologists and optometrists) and launched a full line of sunglasses and optical glasses in 2018.
                </p>
                
                <div className={css.coverImageSPINOZAdiv}>
                <img className={css.coverImageSPINOZA2} src={dp_spinoza2} alt="silja kim | spinoza" />
                </div>

                <p style={{fontWeight: 'bold'}}>
                What goes into making a pair of SPINOZA glasses?
                </p>
                <p>
                First, the fabrication. We use a medical-grade thermoplastic that makes the glasses featherlight but also extremely durable. Standard acetate glasses weigh 40 grams; SPINOZA glasses range from 7-19 grams. Not to toot my own horn, but I’ve since found that when I wear stylish oversized sunglasses from other designers, I can’t wear them for more than an hour or two. You can really feel the heaviness and I also hate the nose marks. Whereas when I wear my SPINOZAs, I’ve had many instances where I forget to take off my sunglasses when going through airport security. I totally forget that I have them on!
                </p>
                <p>
                During our design process, we partnered with actual eye doctors so that we could come up with ergonomic styles that maximized comfort. Once we finalize the style, we produce the glasses at a Korean manufacturer who counts premium Japanese and European brands as clients.
                </p>

                <p style={{fontWeight: 'bold'}}>
                Why SPINOZA?
                </p>
                <p>
                Baruch Spinoza was a 17th century Dutch philosopher and is viewed as one of the great thinkers of Enlightenment. He was an extremely controversial and radical figure and viewed almost as a heretic in his time. Yet, his views have persisted and he remains relevant today. I was inspired by how he came up with a completely new framework that was unconventional, but stuck by what he believed to be true. 
                </p>
               

                <p style={{fontWeight: 'bold'}}>
                You offer styles for men and women.
                </p>
                <p>
                Yes, most of our glasses are unisex. Obviously, some styles are more popular amongst our female clientele and others are more popular amongst our male clientele. The Max style is the most popular for men. Ivy is the most popular for women.
                </p>
                
                <p style={{fontWeight: 'bold'}}>
                You spent most of your childhood in Korea. Do you see any significant differences in the types of frames that are worn by Koreans versus Americans?
                </p>
                <p>
                Korea has a much more homogenous population than America. Because of similar face shapes, you do tend to see certain styles pop up more often. Very thin frames with simple colors like black or silver tend to be the norm.
                </p>   
                <p>
                By contrast, America is such a melting pot with such a variety of face shapes. There’s a lot more diversity. It’s harder to make a generalization! Having said that, I do think that people go for bolder colors and thicker frames.
                </p>           
                <p>
                Interestingly, thin and super lightweight frames have already started to catch on in Korea whereas we’re just starting to penetrate the American market.
                </p>

                <p style={{fontWeight: 'bold'}}>
                Why do you think Americans haven’t caught on to the featherlight trend?
                </p>
                <p>
                I think perhaps there’s a perception that lightweight frames may be flimsier or less durable. On the contrary, these glasses tend to be more flexible and ironically end up being more durable.
                </p>

                <p style={{fontWeight: 'bold'}}>
                You’re also working on a new line of blue light glasses.
                </p>
                <p>
                Yes, we launched a line of glasses that block blue light. These glasses are helpful for heavy laptop or smartphone users (let’s face it, who isn’t?), particularly those who work late into the night. 
                </p>
                <p>
                Basically, the way it works is that blue light from computers or smartphones potentially disrupts sleep quality by suppressing melatonin. The reason why some people have a hard time waking up after using their devices late into the night is that their brain’s rest is disrupted with low levels of REM sleep. Of course, if you’re chronically deprived of quality sleep, there are all sorts of negative ramifications on your health including depression, high blood pressure, and diabetes.
                </p>
                <p>
                I’ve been wearing my SPINOZA blue light glasses for some time now. My heart rate tracker indicates that I get more REM sleep and slow wave sleep by 10% when I wear them about 3 hours before bed so I’m a big believer!
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

export default DP_spinozaPage;
