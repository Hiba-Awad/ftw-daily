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
import dp_primoluxe from './DP_primoluxe.jpg';
import { pink } from '@material-ui/core/colors';

const DP_primoluxePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | georgette mcgriff "
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_primoluxePage',
        description: 'Designer Profile - Primo Luxe | Revvie',
        name: 'Designer Profile | Primo Luxe',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} PRIMO LUXE</h6>
          <h1 className={css.pageTitle}>georgette mcgriff on italy and gloves.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <div className={css.headerSub}>
              <img className={css.coverImagePrimoLuxe} src={dp_primoluxe} alt="georgette mcgriff | primo luxe" />
                <h5 className={css.headerSub}>
                  Georgette frequently traveled to Italy for her job as an executive assistant in the music business and was always bringing back beautiful leather gloves as gifts for her friends and family. One day, a friend suggested that Georgette create her own line of custom gloves and voila, Primo Luxe was born.
                </h5>
              </div>
              
              <div className={css.paragraph}>
                <p style={{fontWeight: 'bold'}}>
                Tell us where you came from and how you fell into the world of fashion.
                </p>
                <p>
                I grew up in New York City on the Upper West Side, so I had a great curbside view of elegance and always thought fashion was a possibility from an early age. My mother was incredibly stylish. She understood the value of putting your best foot forward, calling fashion her "armor". Looking back, I get it. Whatever you wear, it can make you look and feel a certain way, which is empowering. A specific outfit would completely transform her. My mother was an avid shopper of Charivari and New York Look, lines of high-end boutiques that championed avant-garde designers There was one in our neighborhood where I would pick out one item, usually shoes, and splurge, all my birthday money, with a little extra help from a family member if they were feeling generous.
                </p>
                <p>
                While I did seriously consider working in the industry, I wasn’t quite sure in what capacity. My first job, while still in my teens, was as a part-time sales associate at Barneys, helping them to roll out their 60th and Madison flagship. This was back when it was still privately-held by the Pressman family, who were very hands on in buying and merchandising. Barneys carried the more cutting-edge designers during this period. What they brought to the marketplace was exciting, because they had exclusive deals with high-end labels like Prada and Azzedine Alaia, which had not yet gone mainstream. I still remember Isaac Mizrahi having a section in the store. Of course, there also were a couple of niche brands. The Pressmans, while very much focused on established luxury label, had a knack for picking designers before they became huge and, well, commonplace.
                </p>
                

                <p style={{fontWeight: 'bold'}}>
                You ended up having a long career in media and entertainment.
                </p>
                <p>
                Yes, although I did enroll in FIT for a year because I still thought fashion was a viable option . I considered buying and merchandising and quickly realized it wasn’t for me - too much Excel and data! I ended up attending Fordham University before finding a place for myself within Corporate America. I was an Executive Assistant at Universal and WMG, where I supported top music executives, then moved to a major global management consultancy in their Entertainment & Media Group. Of course, fashion still mattered. Inside that world it helped to have a professional look combined with some individual flair.
                </p>

                <p style={{fontWeight: 'bold'}}>
                How did the idea for Primo come about?
                </p>
                <p>
                Let’s rewind all the way back to 2007. In my role at the C-suite of a music label I dealt a lot with artists, including R&B and hip hop artists, plus a few prominent DJs. I've always had an affinity for Italy - La Dolce Vita -- so I traveled back and forth to Rome and Florence regularly, especially in the fall and winter. I was always looking for gifts to bring back for people and the gloves were of such high quality and so easy to pack. Plus, the packaging was always beautiful. Eventually a friend suggested I style or make a pair of gloves for Missy Elliott. That was the spark. You can do this! I said to myself and decided to do a small collection of my own. I soon started handing pairs to some of the celebrity stylists we worked with, and it grew from there.
                </p>
                <p>
                My first step was to speak to the store owner in Italy who sold me the gloves. I started out with a few custom colors in very small quantities. For my second collection, I reached out to Henri Bendel, who used to host trunk shows for emerging designers. When they accepted me, I thought maybe the time was right to start producing myself.
                </p>
                

                <p style={{fontWeight: 'bold'}}>
                You produce a lot in Italy. How did you find your factories and source the fabric?                </p>
                <p>
                I used to organize vacations in Italy for my boss. I knew this Italian yacht broker named Peppino, a real local character in Sorrento who knew everyone and had a lot of great contacts. It just so happened he was extremely grateful for all the business I had directed his way. He found four factories for me and I was in Naples, Italy to tour them two days later. After visiting each one I narrowed down the list to two factories and started working with them both for a year before I selected the one I’ve been working with for the last decade. 
                </p>
                <p>
                But I am also proud to manufacture in the U.S. I have a stateside factory that makes all my other accessories. While all my leather is sourced from Italy, the dyeing and embossing is done here in America. 
                </p>
                
                <p style={{fontWeight: 'bold'}}>
                Was it hard to communicate with the factory? Production and communication issues are rife in the industry.                </p>
                <p>
                The family that owns the factory speaks English, French, and Italian so we don’t have any problems there. My Italian is pretty conversational! I’ve actually had no issues on the production side, so I lucked out. 
                </p>
                <p>
                I’ve been back and forth to Naples a lot now and it feels like New York City, or I should say home, to me. I’ve become familiar with many people in the neighborhood where I stay. Some of the locals know me by name and greet me like an old friend whenever I return. I’ve even driven in Naples which I definitely don’t recommend!
                  </p>              

                <p style={{fontWeight: 'bold'}}>
                Tell us about the women who buy Primo gloves. And the men!                </p>
                <p>
                Honestly, my customers are diverse, both geographically and in terms of culture. And yet it’s usually someone who likes color or who appreciates the finer details of fashion. You don’t necessarily come to Primo for black gloves (although we do have them). We serve just as many women who like the classic look as those who are extroverted and bold in their choices. 
                </p>
                <p>
                The men definitely lean more towards the fashion forward type, especially those who buy the statement colors!
                </p>
                <p>
                In general, my customer is a modern day young, chic, and well-travelled person who wants elegance and modernity tied into one. She/he could be anything from a young fashionista, Influencer to a high-powered entrepreneur in any field. 
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

export default DP_primoluxePage;
