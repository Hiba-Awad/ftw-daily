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
import dp_thirteenseven from './DP_thirteenseven.jpg';
import { pink } from '@material-ui/core/colors';

const DP_thirteensevenPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | mya goldberg"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_thirteensevenPage',
        description: 'Designer Profile - 13-7 | Revvie',
        name: 'Designer Profile | 13-7',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} 13-7</h6>
          <h1 className={css.pageTitle}>mya on creating the perfect button-down shirt and solving the problem of "boob-gape".</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
            <div className={css.headerSub}>
            <img className={css.coverImage} src={dp_thirteenseven} alt="mya goldberg 13-7" />
              <h5 className={css.headerSub}>
              A lover of classic button-down shirts, 13-7 founder Mya Goldberg learned the hard way that being top-heavy wasn’t exactly conducive to wearing tailored button-downs (nor was it office appropriate). She decided to tackle the problem of “boob-gape” herself.
              </h5>
              </div>
              <div className={css.paragraph}>
              <p style={{fontWeight: 'bold'}}>
              Where did you grow up? Did you always want to be in fashion?
              </p>
              <p>
              I grew up in New York. My family is in retail and owned clothing stores, so I was certainly influenced by that. Having said that, I was almost anti-fashion growing up. I used to think “being into fashion” was very elitist and pretentious with a focus on labels and brands. You know, very girly girl. By contrast, I was more grungy and couldn’t care less about labels. But I definitely cared about style as a form of self. My mom jokes that at the ripe age of 2, I would refuse certain outfits because it wasn’t “me”. 
              </p>
              
              <p style={{fontWeight: 'bold'}}>
              Did you get formal training?
              </p>
              <p>
              I went to Drexel in Philly and studied graphic design. What I loved about Drexel was the focus on an all-encompassing art education: art history, painting, photography, sculpture… It was a very holistic education around all forms of art, which I loved.
              </p>
              

              <p style={{fontWeight: 'bold'}}>
              How did you get your foot into the industry?
              </p>
              <p>
              I really wanted to get into prop styling for fashion. My first gig was completely by chance. I remember emailing all these agencies to try to get names of established prop stylists that I wanted to intern for. Not a single person got back to me.
              </p>
              <p>
              It was at an Aunt’s birthday party where I finally got my break. One of her friend’s sons is a photographer and he took a picture of me that he wanted to sell to a stock company. He needed my release and emailed me a few weeks after the party. It turns out he was a very big fashion photographer. I gave him the release, of course, but I also asked if he knew anyone who needed an assistant. He got back to me with 3 names and I had my first job within a week. That’s how this industry works – word of mouth.
              </p>
              <p>
              I also did some side jobs like working for a production company that did backstage for the fashion runway shows. I had to help dress the models, prepare the looks, etc. It was a really great time.
              </p>

              <p style={{fontWeight: 'bold'}}>
              When and how did you start thinking about button-down shirts?
              </p>
              <p>
              I’ve always loved button-downs. I have an older brother and I would wear his hand me downs. I loved suits. I loved shirting. But as I became a woman and developed the way a woman does, it was obvious that the boob gape was going to be a big problem. I had all sorts of temporary measures like using safety pins and double-sided fashion tape which was annoying and not a clean solution. That’s when I knew there was a gap in the market to fix boob gape.
              </p>
              <p>
              The problem was, I didn’t know how to sew or make a garment. So, I decided to take a sewing class thinking that I would start with something small – maybe neckties for women that are more feminine. I enrolled in classes at FIT and that’s how I started learning the craft.
              </p>
                            
              <p style={{fontWeight: 'bold'}}>
              What about working in the industry?
              </p>
              <p>
              I interned at Catherine Malandrino where I spent a lot of time with the design team. I drew flats, went to local factories for samples… lots of random intern stuff. But the business was already starting to hit on some hard times.
              </p>
              <p>
              I then worked at Rosie Assoulin which was growing very quickly. Their production was all local in New York and I loved this experience. It was such a gratifying experience watching a creation come to life. I remember seeing a seamstress work on a dress for Oscar de la Renta in one of the factories and then seeing that exact dress on Madison Avenue months later. I fell in love with the idea of local production. 
              </p>


              <p style={{fontWeight: 'bold'}}>
              Tell us about your launch.
              </p>
              <p>
              I launched in the beginning of 2017 with 4 styles of button-downs. All local production and 100% cotton. My first collection was centered around the “classic with an edge” aesthetic. I found that many women’s shirts have a lot of stretch or elastic for a very tailored look or with random trims like bows or frills or other froufrou. I didn’t want any of that. I didn’t want traditional womenswear and I didn’t want menswear for women. I wanted a collection that could bridge menswear and womenswear. Neutral and modern, yet classic and edgy. I’m very influenced by Japanese and Scandinavian designs with lots of clean lines.
              </p>
              <p>
              Obviously, the big feature was the prevention of boob gape. I must’ve gone down every possible rabbit hole to fix this. I thought about magnets, Velcro, snaps, buttons… You name it, I probably explored it. At the end of the day, the reverse button technique turned out to be the cleanest and the most durable so that’s what we went with.
              </p>

              <p style={{fontWeight: 'bold'}}>
              Who’s the 13-7 woman?
              </p>
              <p>
              She’s a working woman. She’s modern, hip, and urban. She cares about her aesthetic. She likes minimalist and modern pieces. She also doesn’t want to dress in a way that’s too feminine. I love that I have women in their 20s all the way to women in their 60s buying my shirts. They’re really for everyone.
              </p>

              <p style={{fontWeight: 'bold'}}>
              Tell us about your shirting fabrics.
              </p>
              <p>
              For my first collection, I used a fabric from Japan called Typewriter fabric. It did wrinkle a tad, but the quality was excellent. It had a very tight weave, so the shirt was not see-through.
              </p>
              <p>
              For this current collection, I used a mill in Portugal that I really loved. Standard shirting fabrics tend to be very masculine with lots of checks, stripes, ginghams, and plaids. Not a lot of variety. This mill on the other hand had beautiful fabrics in gorgeous colors and I really fell in love with them. So, I got all of my fabric for this collection here.
              </p>

              <p style={{fontWeight: 'bold'}}>
              What’s the meaning behind “13-7”?
              </p>
              <p>
              It’s the numerical equivalent of my initials – “M” is the 13th letter of the alphabet and “G” is the 7th letter. I’m Jewish and in Judaism, the number 13 signifies love and 7 is an important number not just in Judaism but other cultures and religions. It was also my house number growing up. Recently someone pointed out that they’re both prime numbers. Lots of significance here!
              </p>


              <p style={{fontWeight: 'bold'}}>
              What’s the best part about being a fashion designer?
              </p>
              <p>
              I love the tangible aspect of fashion and the act of creating something. Also, the struggle of the boob gape for me was so real. I was dealing with it daily and to find a solution for something that so many women struggle with, it’s very rewarding. I was at market once and this woman came up to me and described the brand and the shirt using words that I would use to describe it and it was such an awesome feeling.
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

export default DP_thirteensevenPage;
