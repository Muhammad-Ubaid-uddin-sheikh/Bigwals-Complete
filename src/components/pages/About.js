import React from 'react'
import Layout from '../layout/Layout'
import BannerAll from '../bannerAll/Bannerlogo'
import AllColmFrontImg from '../pages/AllColmFrontImg'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Gif from './images/web-development-1.gif'
import seoimg from './images/about1.png'
import AboutPageAni from '../aboutPageAni/AboutPageAni'
import AboutPageText from '../aboutPageAni/AboutPageText'
import { useEffect } from 'react'
import ScrollComponet from './scrollcomponet/ScrollComponet'
import Tracking from '../../SEOTracking'
import { BehanceSquareOutlined } from '@ant-design/icons';
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (<>

    
    
    <Layout sx={{width:'100%',position:'relative'}}>
      <Tracking/>
    {/* /////////////// social media icons ///////////////////// */}
    <div className='social-media-icons-div'><ul className='ul-social-div' data-aos="fade-left">
    <li className='social-li' id='social-links-drdder' >  <a href='https://www.facebook.com/bigwals?mibextid=LQQJ4d' target="_blank" id='icon-font-all-website' ><Facebook id='icon-social-edit'  style={{color: " black"}}/> &nbsp; &nbsp;FaceBook </a></li>
    <li className='social-li' id='social-links-drdder1'><a href='https://www.instagram.com/bigwalstudio/?igshid=YmMyMTA2M2Y%3D' target="_blank" id='icon-font-all-website' ><Instagram id='icon-social-edit'  style={{color: "black"}}/> &nbsp; &nbsp;Instagram</a></li>
    <li className='social-li' id='social-links-drdder2'><a href='https://twitter.com/bigwalstudio?s=11' target="_blank" rel="noopener noreferrer" id='icon-font-all-website' style={{display:'flex'}} ><div style={{width:'28px',dispaly:'flex'}}><img src='https://www.ibex.co/web/assets/images/twitter-logo.svg' alt='twiiter img ' /> </div>&nbsp; &nbsp;Twitter </a></li>
    <li className='social-li' id='social-links-drdder3'> <a href='https://dribbble.com/bigwalstudio' target="_blank" id='icon-font-all-website' > <SportsBasketballIcon style={{color: "black"}} id='icon-social-edit'/>  &nbsp; &nbsp;Dribbble </a>  </li>
    <li className='social-li' id='social-links-drdder3' style={{paddingTop:"10px"}}> <a href='https://www.behance.net/bigwals' rel="noopener noreferrer" target="_blank" id='icon-font-all-website' ><BehanceSquareOutlined  style={{color: "black"}} id='icon-social-edit'/>  &nbsp; &nbsp;Behance </a>  </li>
    </ul></div>

     {/* /////////////// social media icons ///////////////////// */}
      <BannerAll paragraphText='
We got you covered for all your
graphic designing and development needs.' titleMaina='ABOUT US' gifSpace={Gif }  />
  <AllColmFrontImg logoBrandingLogo={seoimg} firstpara= "WHO WE ARE?" h1heading="Leading The Design Industry" againPara="
BigWals is a one-stop digital solution platform for startups and businesses looking to stay ahead of the competition. We provide a wide range of customized business solutions to help you support and grow your company. Our team specializes in custom logo design, graphic design, branding, and other services at reasonable prices and packages. We cultivate a culture of creativity, optimism, and innovation, making us formidable to our competitors.
We’ve successfully worked with industry top rating brands and provided them results-driven services. Let us know your business story, and our team of brand analysts will come up with design solutions that maximize your business ROI."/>
  <ScrollComponet/>
  <div className='pricing-sec-main-div'  data-aos ="fade-up">
  <div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
        <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div>
<div className='heading-home-page' style={{padding:'0'}}>
<p className='top-first-heading'>HOW IT WORKS?</p>
<h3 className='sec-heading-home-page'>Our Design Process</h3>
<p className='paragraph-content-home'>We’ve divided our work process into three simple steps to convert our customers' concepts into artwork that perfectly speaks their brand story. Our team of professional designers and developers creates brand identities that pique the interest of their target audience.</p>
</div>
</div>
<AboutPageAni/>
<div className='pricing-sec-main-div'  data-aos ="fade-up">
<div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
        <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div>
<div className='heading-home-page' style={{padding:'0'}}>
<p className='top-first-heading'>HOW IT WORKS?</p>
<h3 className='sec-heading-home-page'>Our Design Story </h3>
<p className='paragraph-content-home'>We’ve divided our work process into three simple steps to convert our customers' concepts into artwork that perfectly speaks their brand story. Our team of professional designers and developers creates brand identities that pique the interest of their target audience.</p>
</div>
</div>
<AboutPageText/>

  </Layout>
  </> )
}

export default About