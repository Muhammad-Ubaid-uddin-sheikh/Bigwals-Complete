import { Grid,} from '@mui/material'
import React from 'react'
import './Footer.css'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import logonew1 from './conversation.png';
import lognonew2 from './location.png';
import log from '../layout/logo.png'
import { NavLink } from 'react-router-dom';
import Cluth from './clutch.3075b8dc.svg';
import Goodfirm from './goodfirm.c9a7c1f4.svg';
import Designrush from './designrush.0be3f023.svg';
import Topdev from './topdeveloper.c9a962ec.svg';
import Google from './google.3fb5eb80.svg'
const Footer = ()=>{
  return (
    <div className='main-footer-div-all'>
    <div className='main-div-footer'>


<div className="main-top-5colm-footer">
  <div className="colm-sub-five-footer">
    
    <div className="sub-colm-edit-fotter-innter"></div>
  <div className="sub-colm-edit-fotter-innter"></div></div>
  
  
  
  <div className="colm-sub-five-footer">
    
    <div className="sub-colm-edit-fotter-innter"><img src={Cluth} alt="Cluth" className="sec-footer-secin" /></div>
  <div className="sub-colm-edit-fotter-innter"></div></div>
 
 
  <div className="colm-sub-five-footer">
    
    <div className="sub-colm-edit-fotter-innter"><img src={Goodfirm} alt="Goodfirm" className="sec-footer-secin" /></div>
  <div className="sub-colm-edit-fotter-innter"></div></div>
  
  
  <div className="colm-sub-five-footer">
    
    <div className="sub-colm-edit-fotter-innter"><img src={Designrush} alt="Designrush" className="sec-footer-secin" /></div>
  <div className="sub-colm-edit-fotter-innter"></div></div>
  
  
  <div className="colm-sub-five-footer">
    
    <div className="sub-colm-edit-fotter-innter"><img src={Topdev} alt="Topdevelopers" className="sec-footer-secin" /></div>
  <div className="sub-colm-edit-fotter-innter"></div></div>

  <div className="colm-sub-five-footer">
    
    <div className="sub-colm-edit-fotter-innter"><img src={Google} alt="Google" className="sec-footer-secin" /></div>
  <div className="sub-colm-edit-fotter-innter"></div>

</div>

</div>



     <div className="top-logo-foter">
      <div className="com-footer-top"><img src={log} alt="image" width='100%' /></div>
      <div className="com-footer-top-footer"><div className="com-first-two-div"><img src={logonew1} width="10%" alt="image" /> +1 9016467815 <br/> support@bigwals.com</div>
      <div className="com-first-two-div"><img src={lognonew2} width="10%" alt="image" /> Winter Park, FL,  <br/> USA United States</div>
      
      </div>
     </div>

  <div className="main-footer-bottom-div">
  <div className="com-footer-new-bootm">
    <div className="first-footer-div">
       
        <p>  Introduce BigWals as a leading IT company dedicated to providing cutting-edge solutions for businesses worldwide. Highlight the company's expertise, commitment to quality, and customer satisfaction. Emphasize the team's passion for technology and innovation, along with a brief overview of the services offered.</p>
        <div className="icon-social-media"><a href="https://www.facebook.com/bigwals?mibextid=LQQJ4d" style={{textDecoration:'none'}}><Facebook id='icon-fotter-icon'/></a>
       <a href='https://twitter.com/bigwalstudio?s=11' target="_blank" rel="noopener noreferrer" ><div style={{width:'28px',dispaly:'flex'}}><img src='https://www.ibex.co/web/assets/images/twitter-logo.svg' alt='twiiter img ' /> </div></a>
        <a style={{textDecoration:'none'}} href="https://www.instagram.com/bigwalstudio/?igshid=YmMyMTA2M2Y%3D"><Instagram id='icon-fotter-icon'/></a><a href="https://dribbble.com/Bigwals" style={{textDecoration:'none'}}><SportsBasketballIcon id='icon-fotter-icon'/></a></div>
    </div>
    </div>
 <div className="com-footer-new-bootm">
  <div className="first-footer-div" id='new-first-footer'>
  <h2>Quick Links</h2>
        <NavLink style={{textDecoration:'none'}} to='/'><p>Home</p></NavLink>
        <NavLink style={{textDecoration:'none'}} to='About'> <p>About us </p></NavLink>
        <NavLink style={{textDecoration:'none'}} to='Portfolio'><p>Portfolio</p></NavLink>
        <NavLink style={{textDecoration:'none'}} to='logo-designing-services'> <p>Logo & Branding</p></NavLink>
        <NavLink style={{textDecoration:'none'}} to='Pricing'><p>Pricing</p></NavLink>
        <NavLink style={{textDecoration:'none'}} to='Blog'> <p>Blog</p></NavLink>
        <NavLink style={{textDecoration:'none'}} to='Contact'> <p>Contact us</p></NavLink>
  </div>
  </div>
  <div className="com-footer-new-bootm">
  <div className="first-footer-div" id='new-first-footer'>
  <h2>Services</h2>
  <NavLink style={{textDecoration:'none'}} to='digital-marketing-agency-usa'><p> Ditigal Marketing</p></NavLink>
  <NavLink style={{textDecoration:'none'}} to='logo-designing-services'>  <p>Logo & Branding </p></NavLink>
  <NavLink style={{textDecoration:'none'}} to='2d-animation-services'><p> 2D Animation </p></NavLink>
<NavLink style={{textDecoration:'none'}} to='3d-animation-services'><p> 3D Animation </p></NavLink>
        <NavLink style={{textDecoration:'none'}} to='web-design-and-development-services'><p> WebDesign & Development</p></NavLink>
<NavLink style={{textDecoration:'none'}} to='search-engine-optimization'> <p> Search Engine Optimization </p></NavLink>
<NavLink style={{textDecoration:'none'}} to='best-app-development-services'><p> Application Development </p></NavLink>
  </div>
  </div>
  <div className="com-footer-new-bootm">
  <div className="first-footer-div" id='new-first-footer'>
  <h2> Marketing </h2>
  <p> Brand Marketing
 </p>
<p> Social Media Marketing
 </p>
<p> Content Marketing </p>   
<p> Search Engine Optimization (SEO)</p>   
  </div>
</div>
 
    </div>
    </div>
    </div>
  )
}

export default Footer