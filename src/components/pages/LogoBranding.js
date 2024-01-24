import React from 'react'
import Layout from '../layout/Layout'
import CauroselLogoBranding from '../couroselWebsite/CauroselLogoBranding'
import BannerAll from '../bannerAll/Bannerlogo'
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import gif from '../bannerAll/3d-render-set-young-man-working-waving-hand-PhotoRoom.png-PhotoRoom.png'
import Logo from '../cards/LogoImg';
import BrandingTablist from '../cards/BrandingTablist';
import PricingBranding from '../pricingTablist/PricingBranding';
import ScrollComponet from './scrollcomponet/ScrollComponet'
import logoBrandingLogo from '../cards/ImagesAllCard/logonew2.webp'
import AllColmFrontImg from './AllColmFrontImg';
import { Facebook, Instagram,  Twitter } from '@mui/icons-material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { useEffect } from 'react'
import AccordinLogoBranding from '../Accordin/AccordinLogoBranding';
import imageBranding from '../cards/ImagesAllCard/branding-main-banner.jpeg'
import TablistBranding from '../tabsList/TablistBranding'
import TablostBrandingPrice from '../tabsList/TablostBrandingPrice'
import Tracking from '../../SEOTracking'
import { BehanceSquareOutlined } from '@ant-design/icons';
const LogoBranding = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div>
      <Tracking/>
         <Layout sx={{width:'100%',position:'relative'}}>
        
             {/* /////////////// social media icons ///////////////////// */}
             <div className='social-media-icons-div'><ul className='ul-social-div' data-aos="fade-left">
      <li className='social-li' id='social-links-drdder' >  <a href='https://www.facebook.com/bigwals?mibextid=LQQJ4d' target="_blank" rel="noopener noreferrer" id='icon-font-all-website' ><Facebook id='icon-social-edit'  style={{color: " black"}}/> &nbsp; &nbsp;FaceBook </a></li>
      <li className='social-li' id='social-links-drdder1'><a href='https://www.instagram.com/bigwalstudio/?igshid=YmMyMTA2M2Y%3D' target="_blank" rel="noopener noreferrer" id='icon-font-all-website' ><Instagram id='icon-social-edit'  style={{color: "black"}}/> &nbsp; &nbsp;Instagram</a></li>
      <li className='social-li' id='social-links-drdder2'><a href='https://twitter.com/bigwalstudio?s=11' target="_blank" rel="noopener noreferrer" id='icon-font-all-website' style={{display:'flex'}} ><div style={{width:'28px',dispaly:'flex'}}><img src='https://www.ibex.co/web/assets/images/twitter-logo.svg' alt='twiiter img ' /> </div>&nbsp; &nbsp;Twitter </a></li>  
      <li className='social-li' id='social-links-drdder3'> <a href='https://dribbble.com/bigwalstudio' target="_blank" rel="noopener noreferrer" id='icon-font-all-website' > <SportsBasketballIcon style={{color: "black"}} id='icon-social-edit'/>  &nbsp; &nbsp;Dribbble </a>  </li>
      <li className='social-li' id='social-links-drdder3' style={{paddingTop:"10px"}}> <a href='https://www.behance.net/bigwals' rel="noopener noreferrer" target="_blank" id='icon-font-all-website' ><BehanceSquareOutlined  style={{color: "black"}} id='icon-social-edit'/>  &nbsp; &nbsp;Behance </a>  </li>
      </ul></div>

       {/* /////////////// social media icons ///////////////////// */}
   <div style={{position:'relative'}}>  <BannerAll paragraphText='Get Yourself a Logo That Speaks for Itself!' titleMaina='Your Ultimate Destination for Custom Logo Design Services and Comprehensive Branding Solutions' gifSpace={gif }  /></div>


<AllColmFrontImg logoBrandingLogo={logoBrandingLogo} h1heading='Best Logo Design Services' firstpara='MAKE AN IMPACT WITH THE' againPara="Are you looking for logo design services near me? Want to build a brand from scratch?  " AgainagianP="We are a professional logo design company that helps you develop a solid brand identity to influence your audience strongly. BigWals delivers to every business while preserving its values and staying updated on market trends. Our ability to deal with diverse branding and logo design projects makes us meet your needs!" thirdPara="Our logo and branding services speak a lot about who we are. As a digital marketing agency, we have a lot of experience as specialists in this sector in figuring out which font, color, and image are best for your brand."/>

<ScrollComponet/>

<div className='heading-home-page'  data-aos ="fade-up">
<div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
        <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div>
<p className='top-first-heading'>OUR EXPERTISE</p>
<h3 className='sec-heading-home-page'>Choose The Right Business Logo Design Service</h3>
</div>

<div className='overley-branding-image-sec'>
<div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
        <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div>
       
 <div className = "main-caurosel-div">
  <div className='row-tex-new-carosel'>
    <div className='colm-rw-cou'>
      <h1 className='com-h1-webiste-sec'>Word Mark Logo Design</h1>
      <p className='paragrph-website-sec-p'>We create sophisticated wordmark logos for your business that elegantly carry your narration and display words sleekly. A word mark logo is a minimalistic way to build brand awareness. Our business logo design services ensure to be distinctive and play with colors that provide readability and represent your brand.</p>
      <h3 className='h3-website-list-edit'><StarPurple500Icon id='icon--start-website'/>Emblem Logo Design</h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>Our logo designers create striking emblem designs with clear icons and readable inscriptions, scalable with sophisticated fonts. We offer unique designs fostered by our creativity and expertise in crafting emblems for several institutes and organizations. Get started with our top-notch logo design services in Florida. </p>
      <h3 className='h3-website-list-edit'><StarPurple500Icon id='icon--start-website'/>Logo Animation</h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>Our expert logo animators will help you create a lasting impression while designing a logo that moves through your audience’s mind. We know what your brand needs and what colors will make it shine and be distinctive. Our expert logo design services in North Carolina have exceptional 2D and 3D animators that complement your brand with cutting-edge tools.</p>
      <h3 className='h3-website-list-edit'><StarPurple500Icon id='icon--start-website'/>Illustrative Logo Designs</h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>Our illustrator experts will give you sleek illustrative logo designs. These are all created with your brand's tone and style in consideration. Our illustrator experts intricately craft graphics showcasing your brand's quality and professionalism. Create your stunning illustrative logo design and win your customer's hearts!</p>
      <h3 className='h3-website-list-edit'><StarPurple500Icon id='icon--start-website'/>3d Logo Design</h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>
      3D is the new trend that pleases the audience. We want you to take advantage of a chance and get a 3D logo to leverage its traction. With this technology, you can easily enable everyone to have strong relations with your brand. From simple to the most complicated designs, our 3D business logo design services give you original artwork!</p>
      </div>
    <div className='colm-rw-cou'><CauroselLogoBranding/></div>
  </div>
  </div>
</div>

{/* //////////////////LEft caroseul Bradnign //////////////////////// */}

<div className='heading-home-page'  data-aos ="fade-up">
<div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
        <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div>
<p className='top-first-heading'>OUR EXPERTISE</p>
<h3 className='sec-heading-home-page'>Choose The Right Business BRANDING DONE RIGHT! </h3>
</div>

<div className = "main-caurosel-div">
  <div className='row-tex-new-carosel'>
  <div className='colm-rw-cou'><img src={imageBranding} width='100%' height="100%" style={{objectFit:'cover'}} alt='' /></div>
    <div className='colm-rw-cou'>
      <h1 className='com-h1-webiste-sec'>Brand Management Services</h1>
      <p className='paragrph-website-sec-p'>Do you want your brand to be recognizable just by its looks? Nike, Gucci, and Apple were not inherited in popularity and recognition. They have had hard times, but here we are; they are among the most famous. You can also be there through some pain and struggle.  <br></br>However, you need exceptional branding services that meet your business requirements and fulfill its demands and audiences. BigWals help you create a distinctive brand identity, easy to identify with the right dedicated team and tools. Our mission is to take you from a loophole of several thousands of companies. We give you the spark it needs with effective marketing strategies that are natural and compelling.</p>
      <h3 className='h3-website-list-edit'><StarPurple500Icon id='icon--start-website'/>Our Branding Services Expertise</h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>As a top-rated digital marketing agency, we offer complete branding packages to expand your reach. With a steady approach toward critical branding strategies, we know what works and what does not. The point is to create a business that resonates with its end-users while maintaining an enjoyable culture that promotes your brand. <br></br>Building an image is half the picture; creating a prominent reputable one is another half. Our professional branding services entitle us to take you to an influential level – people buy with what they perceive. Let us not wait longer to present your brand as an elite organization providing quality services and products.    </p>
      <h3 className='h3-website-list-edit'><StarPurple500Icon id='icon--start-website'/>Logo Design</h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>An appealing identity, easily recognizable, is what your brand needs. We know how crucial it is to create a PERFECT logo without second thoughts – you do not want to slam it. BigWals help you with brainstorming and ideation, ending with an exceptional design that fully satisfies you. Get our logo design experts now to have a fine crown jewel!</p>
      <h3 className='h3-website-list-edit'><StarPurple500Icon id='icon--start-website'/>Branding and Marketing Strategies</h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>What is more difficult? A chess game or marketing? Experimenting with something can cost you a lot; playing a game will count as a loss. Our experts comprehend what is at stake; therefore, BigWals will offer you industry experts to deal with your complete custom branding and marketing. From social media to influencer marketing, you get your personal dedicated professional!</p>
      <h3 className='h3-website-list-edit'><StarPurple500Icon id='icon--start-website'/>Product Development </h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>
      We have another department of developers and product designers that deals with website and app development processes. Our design team has over ten years of experience creating alluring art based on specific target audiences. Next is our development team, which deals with all kinds of tasks, from iOS app development to CMS web development.</p>
      </div>
    
  </div>
</div>
{/* </div> */}

{/* //////////////////LEft caroseul Bradnign //////////////////////// */}


<div className='heading-home-page' style={{paddingBottom:'40px'}}  data-aos ="zoom-in-up">
<div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
        <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div>
<p className='top-first-heading'>Logo & Branding</p>
<h3 className='sec-heading-home-page'>Porfolio</h3>
</div>

<TablistBranding/>

<div className='heading-home-page'  data-aos ="fade-up">
<p className='top-first-heading'>Custom
</p>
<h3 className='sec-heading-home-page'>Logo & Branding Price</h3>
</div>
<TablostBrandingPrice/>
<div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
        <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div> 

<AccordinLogoBranding/>
{/* </div> */}
 </Layout>
    </div>
    </>
  )
  
}

export default LogoBranding