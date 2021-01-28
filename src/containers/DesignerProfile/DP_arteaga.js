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
import dp_arteaga from './DP_arteaga.jpg';
import { pink } from '@material-ui/core/colors';

const DP_arteagaPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="designer profile | marisol arteaga "
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DP_arteagaPage',
        description: 'Designer Profile - Arteaga | Revvie',
        name: 'Designer Profile | Arteaga',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h6 className={css.pageTitle} style={{color: "#DA4167",}}>DESIGNER PROFILE {'\u2B24'} ARTEAGA</h6>
          <h1 className={css.pageTitle}>marisol arteaga on finding unique fabrics, working with artisans and commitment to sustainability.</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <div className={css.headerSub}>
              <img className={css.coverImage} src={dp_arteaga} alt="amanda schechter | formerly yan" />
                <h5 className={css.headerSub}>
                California-born and New York-based Marisol Arteaga founded her brand after a successful career in the music industry. Her dreamy, romantic silhouettes are crafted from luxurious and lightweight fabrics, many of which are weaved or printed by artisans. Ethical and sustainable manufacturing methods are an integral part of the brand.
                </h5>
              </div>
              
              <div className={css.paragraph}>
                <p style={{fontWeight: 'bold'}}>
                Tell us about how you grew up. Did you always want to be in fashion?
                </p>
                <p>
                I grew up in Northern California in a household that wasn’t fashion-oriented at all. My mom was a librarian while my father was a professor, so we grew up close to campus. It wasn’t much of a fashion world and I didn’t consider fashion as a potential career. Having said that, I do remember always loving clothes and having a very definite idea of what I wanted to wear, even as a child.
                </p>
                <p>
                I went to Berkeley for college and true to Berkeley style, made my own major. It was a combo of art, architecture, and design. Ironically, my senior thesis was focused on creating a line of clothes so clearly there was something pulling me towards fashion, even back then!
                </p>
                

                <p style={{fontWeight: 'bold'}}>
                So, did you end up working in fashion?
                </p>
                <p>
                No, I was really into electronic music and ended up in the music industry. In fact, I had two record labels and executive produced artists. My goal was to get a European production deal and I ended up getting it! After that, I was done.
                </p>

                <p style={{fontWeight: 'bold'}}>
                As in you quit music, period?
                </p>
                <p>
                Yes. I felt that I had reached the goals I had set when I was a teenager. I had already achieved what I wanted, and I felt the time was right to move onto something else. Interestingly, during my time in music, I did frequently gravitate towards fashion and marketing.
                </p>
                <p>
                I had a good friend who worked at a fashion company. I remember walking into her studio and really feeling like I just belonged. I started out working in textile design. I was and still am very computer savvy and textile design came very naturally to me.
                </p>
                <p>
                My first design director at the time was also wonderful and instrumental in helping me move up the ranks quickly and I became a designer.
                </p>

                <p style={{fontWeight: 'bold'}}>
                When did you start thinking about launching your own brand?
                </p>
                <p>
                I always wanted to create my own thing. I’d seen a lot of people create their business from scratch and I had a bit of an entrepreneurial spirit. But before I jumped into it, I wanted to make sure that I knew exactly what I was doing along with the right resources and right skill set. As a result, I was quite deliberate in my career choices before making the leap, and made sure that every step contributed to building the right foundation and knowledge base for my eventual brand.
                </p>
                
                <p style={{fontWeight: 'bold'}}>
                When did you take the leap?
                </p>
                <p>
                It’s been about 3 years so around 2017. I spent at least 6 months working on the branding. The hardest part was figuring out what I wanted to design. I had a sense of price point, and ethical / sustainable production was a must, but deciding on what my vision and design expression was, when it was of my own choices, not the choices of a client, was very difficult at first. 
                </p>              

                <p style={{fontWeight: 'bold'}}>
                Who is the Arteaga woman?
                </p>
                <p>
                Our brand essence is very romantic and feminine with a touch of sophistication. The Arteaga woman is someone who values art and pieces that are well-made. She wants to invest in clothing that will stand the test of time.
                </p>
                <p>
                Another priority for me was comfort and practicality. While I love avant-garde fashion, realistically it’s not wearable for most. I want to make a collection that women will love and will want to wear all the time.
                </p>

                <p style={{fontWeight: 'bold'}}>
                Can you tell us about your design process? How do you get inspired for your designs?
                </p>
                <p>
                I generally design around a concept. I take a lot of inspiration from traveling and visiting artisans. Texture to me is very important. I also like to read a lot of books about art and try to absorb as much as I can.
                </p>
                <p>
                I approach the beginning of the season with a very open mind. The spark of creativity can come from anywhere. For example, during my travels, I saw this beautiful building with a balcony that overlooked the lake. The light was just perfect, and I remember seeing this gorgeous pattern on the balcony from the light hitting the hand carvings on the railing. I took pictures and started hunting for fabric that reminded me of this moment. And that’s how it started! For that season, I did a lot of very soft colors with patterns of architectural florals.
                </p>

                <p style={{fontWeight: 'bold'}}>
                Tell us about your fabrics.
                </p>
                <p>
                I love textiles. I source them from all over the world and a lot of my fabrics are made just for me. I love working with artisans and weavers who are the best at what they do. I also tend to work in places where there are special historical or cultural ties to certain fabrics. I use a lot of silk and natural fibers. I also used deadstock sourced from Italy and Japan.
                </p>
               
                <p style={{fontWeight: 'bold'}}>
                Talk to us about sustainability. Why is it important to you?
                </p>
                <p>
                It’s always been a part of my life. I grew up in a hippie town and my parents were very involved in social justice causes. It was so ingrained in us growing up – to be aware of social justice and care about your impact on the world.
                </p>
                <p>
                When I source fabrics, it’s very important to me that I use fabrics made with ethical labor or mills that employ sustainable practices. One of my fabric sources is a factory in Rajasthan that trains local women from the villages in traditional craftsmanship and is extremely thorough investigating fair trade artisan woven fabrics.
                </p>
                <p>
                Having said that, it’s quite difficult to check for ethical and sustainable practices, especially in overseas mills and factories. A lot of the time, the reality doesn’t match up to the message. You can ask lots of questions, but you really have to have boots on the ground. If that’s not possible, you must have a local partner that you trust who cares as much about ethical and sustainable practices as you do. At this point, I’ve been working with some mills for a long time and know their processes inside and out. 
                </p>

                <p style={{fontWeight: 'bold'}}>
                Tell us about your production process.
                </p>
                <p>
                Some of our pieces are made in New York but the majority is made in India. India has specialized artisans with incredible handiwork and embroidery skills. Also, the best cottons are made there. The fabric is gorgeous, and I really love the country.
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

export default DP_arteagaPage;
