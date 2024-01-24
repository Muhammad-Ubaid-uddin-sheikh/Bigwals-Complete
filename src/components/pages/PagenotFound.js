import React from 'react'
import Layout from '../layout/Layout'
import '../../styles/HeaderStyle.css'
import { Facebook, Instagram,  Twitter } from '@mui/icons-material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import gif from './images/13 - 404 not found.png'
import { BehanceSquareOutlined } from '@ant-design/icons';
const PagenotFound = () => {
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
       <div>
        <div className='banner-main-digital-website'>
        <div className="row-banenr-all">
            <div className="colm-banner" data-aos ="fade-up"><div className="text-banner"><h4 className="banner-h4">Oops, This Page Could Not Be Found!</h4></div></div>
            <div className="colm-banner" data-aos ="fade-up"><div className="image-banner" style={{width:'110%'}} ><img src={gif} alt="bannerimg" width="100%" /></div></div>
        </div>
    </div>
    </div>
   </Layout>
  )
}

export default PagenotFound

// import React from 'react';
// import { useHistory } from 'react-router-dom';

// function NotFound() {
//   const history = useHistory();

//   const handleGoBack = () => {
//     history.goBack();
//   };

//   return (
//     <div>
//       <h1>404 Page Not Found</h1>
//       <p>Oops! The page you are looking for does not exist.</p>
//       <button onClick={handleGoBack}>Go Back</button>
//     </div>
//   );
// }

// export default NotFound;