import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Layout from '../layout/Layout'
import '../../styles/HeaderStyle.css'
import slide from './images/download.png'
import CardSlider from '../cardSlider/CardSlider'
import TabList from '../tabsList/TabList'
import { Facebook, Instagram, Star, Twitter } from '@mui/icons-material'
import SecTabForHome from '../secTabForHom/SecTabForHome'
import 'aos/dist/aos.css'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import PricingTablist from '../pricingTablist/PricingTablist'
import Appoinment from '../appoinment/Appoinment'
import Accordin from '../Accordin/Accordin'
import { useEffect } from 'react'
import { BehanceSquareOutlined } from '@ant-design/icons';
import ScrollComponet from './scrollcomponet/ScrollComponet';

const Home = () => {

useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  
  return (
   
    <>
{/* <Header/>     */}
<div style={{position:'relative'}} >



 <Layout sx={{width:'100%',position:'relative',minHeight:"100vh"}}> 
 
    <div className='banne-main-image-home-page'>
  
  {/* /////////////// social media icons ///////////////////// */}
  <div className='social-media-icons-div'><ul className='ul-social-div' data-aos="fade-left">
      <li className='social-li' id='social-links-drdder' >  <a href='https://www.facebook.com/bigwals?mibextid=LQQJ4d' target="_blank" rel="noopener noreferrer" id='icon-font-all-website' ><Facebook id='icon-social-edit'  style={{color: " black"}}/> &nbsp; &nbsp;FaceBook </a></li>
      <li className='social-li' id='social-links-drdder1'><a href='https://www.instagram.com/bigwalstudio/?igshid=YmMyMTA2M2Y%3D' target="_blank" rel="noopener noreferrer" id='icon-font-all-website' ><Instagram id='icon-social-edit'  style={{color: "black"}}/> &nbsp; &nbsp;Instagram</a></li>
      <li className='social-li' id='social-links-drdder2'><a href='https://twitter.com/bigwalstudio?s=11' target="_blank" rel="noopener noreferrer" id='icon-font-all-website' style={{display:'flex'}} ><div style={{width:'28px',dispaly:'flex'}}><img src='https://www.ibex.co/web/assets/images/twitter-logo.svg' alt='twiiter img ' /> </div>&nbsp; &nbsp;Twitter </a></li>
      <li className='social-li' id='social-links-drdder3'> <a href='https://dribbble.com/bigwalstudio' rel="noopener noreferrer" target="_blank" id='icon-font-all-website' > <SportsBasketballIcon style={{color: "black"}} id='icon-social-edit'/>  &nbsp; &nbsp;Dribbble </a>  </li>
      <li className='social-li' id='social-links-drdder3' style={{paddingTop:"10px"}}> <a href='https://www.behance.net/bigwals' rel="noopener noreferrer" target="_blank" id='icon-font-all-website' ><BehanceSquareOutlined  style={{color: "black"}} id='icon-social-edit'/>  &nbsp; &nbsp;Behance </a>  </li>
      </ul></div>

      
       {/* /////////////// social media icons ///////////////////// */}
    <Grid  container alignItems='center' direction='row' width='85%' margin='auto' height='90vh' sx={{"@media(max-width:600px)":{width:'100%'}}} >
    
      <Grid item xs={12} sm={6} order={{xs:2,sm:1}} >
        {/* <Typography id='home-text-div-para' data-aos ="zoom-in-up" sx={{"@media(max-width:600px)":{fontSize:'38px' , marginTop:'20px'}}} >Your Solution for Web, Digital Marketing, <br/>
        Animation, SEO & Logo Design.
 </Typography> */}
 
        <Typography id='home-text-div-main-text' data-aos ="zoom-in-up" style={{positon:'relative'}} sx={{"@media(max-width:600px)":{fontSize:'38px',}}} > 
        <div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
        <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div>
        <div className='image-animation-transiton-home' ><img   src={slide} alt='image' width='15%' />
       
        </div><h1 id='home-text-div-main-text'>Digitally Crafting Your Web Presence into Reality</h1></Typography> 
        <Typography id='home-text-div-para' data-aos ="zoom-in-up" sx={{"@media(max-width:600px)":{fontSize:'38px' , marginTop:'20px'}}} >Your Solution for Web, Digital Marketing, <br/>
        Animation, SEO & Logo Design.
 </Typography>
        
      </Grid>
     
     
      <Grid item xs={12} sm={6} style={{display:'none' }} justifyContent="end" order={{xs:1,sm:2}}><Box component='img' src="" width='100%' sx={{backgroundPosition:'center'}}/></Grid>
      </Grid>
      </div>
      <ScrollComponet/>
{/* /////////////////////  2nd TAblist //////////////////////////// */}
<div className='extra-space-width'>
  <div className='heading-home-page' style={{paddingBottom:'40px'}}  data-aos ="zoom-in-up">
  <div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
          <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div>
  <p className='top-first-heading'>WHAT WE DO</p>
  <h3 className='sec-heading-home-page'>Empowering Startups & Businesses</h3>
  </div>
<div className='banner-senxond-tablist'><SecTabForHome/>
</div>
</div>
  {/* ///////////// TAB LIST ADN UPER CONTNET ??//////////?///////////////////     */}
  <div className='extra-space-width'>
<div className='heading-home-page'  data-aos ="fade-up">
<p className='top-first-heading'>OUR PORTFOLIO</p>
<h3 className='sec-heading-home-page'>Artwork We Have Created</h3>
<p className='paragraph-content-home'>Experts at BigWals are inclined to produce quality work that resonates with your brand and blends in with its tone. Our focus is to deliver your message in a graphical way that is visually appealing and dictates a story. Bring your intellectual ideas to us for a unique conversion. Take a look at some prestigious creations!</p>
</div>
</div>
<TabList/>

{/* ////////////////// pricing-section-start/////////////////// */}
<div className='pricing-sec-main-div'  data-aos ="fade-up">
<div className='heading-home-page'>
<div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
        <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div>
<p className='top-first-heading'>PRICING & PACKAGES</p>
<h3 className='sec-heading-home-page'>Affordable Packages To Fulfill All Your Business Needs</h3>
</div>
<PricingTablist/>

{/* ////////////////// pricing-section-end/////////////////// */}

{/* /////////////////// Rating Rewies Cliend ?//////////////////////////// */}
<div className='heading-home-page'   data-aos ="fade-up">
<div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
        <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div>
<p className='top-first-heading'>TESTIMONIALS</p>
<h3 className='sec-heading-home-page'>Words From Our Loving Customers</h3>
<p className='paragraph-content-home'>Read what our happy clients are saying.</p>
</div>

<div className="backgriund-transitipn-second-last"><CardSlider/></div>
<div className='trust-pilot-content'>
  <div className='logo-trustpilot' style={{position:'relative'}}> <Star id='logo-trust-pilot' /><div className='trustpilot-text'> <a href='https://www.trustpilot.com/review/bigwals.com' target="_blank" rel="noopener noreferrer">TrustPilot</a> </div></div>
</div>
<div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
        <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div>
<Appoinment/>
</div>
<Accordin/>

   
     
      </Layout>
      </div>
      </>
  )
}

export default Home