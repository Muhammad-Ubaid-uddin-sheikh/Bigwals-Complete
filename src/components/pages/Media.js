import React from 'react'
import Layout from '../layout/Layout'
import '../../styles/HeaderStyle.css'
import BannerAll from '../bannerAll/BannerAll'
import PricingLogo from '../pricingTablist/PricingLogo'
import PricingBranding from '../pricingTablist/PricingBranding'
import PricingWebsite from '../pricingTablist/PricingWebsite'
import gif from '../bannerAll/output-onlinegiftools.gif'
import { Facebook, Instagram,  Twitter } from '@mui/icons-material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { useEffect } from 'react'
import ScrollComponet from './scrollcomponet/ScrollComponet'
import { BehanceSquareOutlined } from '@ant-design/icons';
const Media = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout sx={{width:'100%',position:'relative'}}>

         {/* /////////////// social media icons ///////////////////// */}
         <div className='social-media-icons-div'><ul className='ul-social-div' data-aos="fade-left">
      <li className='social-li' id='social-links-drdder' >  <a href='https://www.facebook.com/bigwals?mibextid=LQQJ4d' target="_blank" id='icon-font-all-website' ><Facebook id='icon-social-edit'  style={{color: " black"}}/> &nbsp; &nbsp;FaceBook </a></li>
      <li className='social-li' id='social-links-drdder1'><a href='https://www.instagram.com/bigwalstudio/?igshid=YmMyMTA2M2Y%3D' target="_blank" id='icon-font-all-website' ><Instagram id='icon-social-edit'  style={{color: "black"}}/> &nbsp; &nbsp;Instagram</a></li>
      <li className='social-li' id='social-links-drdder2'><a href='https://twitter.com/bigwalstudio?s=11' target="_blank" rel="noopener noreferrer" id='icon-font-all-website' style={{display:'flex'}} ><div style={{width:'28px',dispaly:'flex'}}><img src='https://www.ibex.co/web/assets/images/twitter-logo.svg' alt='twiiter img ' /> </div>&nbsp; &nbsp;Twitter </a></li>
      <li className='social-li' id='social-links-drdder3'> <a href='https://dribbble.com/bigwalstudio' target="_blank" id='icon-font-all-website' > <SportsBasketballIcon style={{color: "black"}} id='icon-social-edit'/>  &nbsp; &nbsp;Dribbble </a>  </li>
      <li className='social-li' id='social-links-drdder3' style={{paddingTop:"10px"}}> <a href='https://www.behance.net/bigwals' rel="noopener noreferrer" target="_blank" id='icon-font-all-website' ><BehanceSquareOutlined  style={{color: "black"}} id='icon-social-edit'/>  &nbsp; &nbsp;Behance </a>  </li>
      </ul></div>
       {/* /////////////// social media icons ///////////////////// */}
      <BannerAll paragraphText=' Our brand analysts guarantee that you will receive impeccable design and development solutions that best meet your branding needs at the best pricing.' titleMaina='Reasonable Pricing & Packaging for Businesses' gifSpace={gif }  />
      <div className='heading-home-page'  data-aos ="fade-up">
      <h3 className='sec-heading-home-page' id='multiple-custmize-h1'>LOGOS</h3>
      </div>
      <ScrollComponet/>
<PricingLogo/>
<div className='heading-home-page'  data-aos ="fade-up">
<div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
        <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div>
      <h3 className='sec-heading-home-page' id='multiple-custmize-h1'> BRANDING</h3>
      </div>
      <PricingBranding/>
      <div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
        <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div>
      <div className='heading-home-page'  data-aos ="fade-up">
      <h3 className='sec-heading-home-page' id='multiple-custmize-h1'> WEBSITE</h3>
      </div>
      <div className='background-oveley-logobrandin'>
      <PricingWebsite/></div>
</Layout>
  )
}

export default Media