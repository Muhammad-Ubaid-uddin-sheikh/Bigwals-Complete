import React from 'react'
import Layout from '../layout/Layout'
import BannerAll from '../bannerAll/Bannerlogo'
import gif from './blogger.png'
import { Facebook, Instagram,  Twitter } from '@mui/icons-material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { useEffect } from 'react'
import './Blog.css'
import AllWriteblogs from './allWriteblogs/AllWriteblogs'
import ScrolllComponent from '../pages/scrollcomponet/ScrollComponet'
import { BehanceSquareOutlined } from '@ant-design/icons';
const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <div>
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
     <BannerAll paragraphText='In a few words, explain what your blog is all about.
What topics does it offer? What niche you are into?
    ' titleMaina='BLOG' gifSpace={gif }  />
    
  <ScrolllComponent/>
    <div className='heading-home-page'  data-aos ="fade-up">
    <p className='top-first-heading'>Discover Our Blog</p>
    <h3 className='sec-heading-home-page'> Choose The Best Blog On Click View More Blogs</h3>
    </div>
    
    <div className="main-blogger-d">
      <div className="row-divs-blogger">
        <div className="com-blogger-d-new"><AllWriteblogs LinkUrl='/blog/best-digital-marketing-agency-for-your-business' Imgurl='https://img.freepik.com/free-photo/notebook-with-words-digital-marketing_1134-434.jpg?w=996&t=st=1688685996~exp=1688686596~hmac=140a638aaae21c10a8ce61c4a9e748e5ed77b297f33f106c10cf6ec5cf3a965f'
        FirstParaDate='December 14, 2022' MainHeading='Best Digital Marketing Agency for Your Business in 2023' Paragraph="In todays fast-paced digital world, having a strong online presence is essential for any business to thrive. However, navigating the complex world of digital marketing can be overwhelming, especially for those with limited knowledge and resources."
        /></div>
        <div className="com-blogger-d-new"></div>
        <div className="com-blogger-d-new"></div>
        {/* <div className="com-blogger-d-new"><AllWriteblogs/></div> */}
        {/* <div className="com-blogger-d-new"><AllWriteblogs/></div>
        <div className="com-blogger-d-new"><AllWriteblogs/></div>
        <div className="com-blogger-d-new"><AllWriteblogs/></div>
        <div className="com-blogger-d-new"><AllWriteblogs/></div>
      </div> */}
      </div>
    </div>
    
    </Layout>
        </div>
      )
}

export default Blog