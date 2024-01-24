import React from 'react'
import Layout from '../layout/Layout'
import BannerAll from '../bannerAll/Banner3dAnimation'
import gif from '../bannerAll/tna-dribbble-02-unscreen.gif'
import TabList from '../tabsList/TabList'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import './Portfolio.css'
import { useEffect } from 'react'
import ScrolllComponent from '../pages/scrollcomponet/ScrollComponet'
import { BehanceSquareOutlined } from '@ant-design/icons';
const Portfolio = () => {
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
          <li className='social-li' id='social-links-drdder3'> <a href='https://dribbble.com/Bigwals' target="_blank" id='icon-font-all-website' > <SportsBasketballIcon style={{color: "black"}} id='icon-social-edit'/>  &nbsp; &nbsp;Dribbble </a>  </li>
          <li className='social-li' id='social-links-drdder3' style={{paddingTop:"10px"}}> <a href='https://www.behance.net/bigwals' rel="noopener noreferrer" target="_blank" id='icon-font-all-website' ><BehanceSquareOutlined  style={{color: "black"}} id='icon-social-edit'/>  &nbsp; &nbsp;Behance </a>  </li>
          </ul></div>
    
           {/* /////////////// social media icons ///////////////////// */}
            <BannerAll paragraphText='Unleashing the Potential of Web Design: Explore Our Portfolio' titleMaina='Web Solutions Unleashing Creative Potential' gifSpace={gif }  />
      <div className="porfolio-main-d">
        <h1 className="appliatio-h20" id='h1-porfolio-edits'>
        Our <span className='gradient-text'> Portfolio </span>
        </h1>

        
      </div>
      <ScrolllComponent/>
      <TabList/>
        </Layout>
      )
}

export default Portfolio