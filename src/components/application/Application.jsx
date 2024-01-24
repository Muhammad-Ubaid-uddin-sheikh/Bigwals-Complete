import Layout from '../layout/Layout'
import './Application.css'
import BannerApplication from '../bannerAll/BannerApplication'
import { Facebook, Instagram,  Twitter } from '@mui/icons-material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import App from './imageVideoPlay/App'
import SecVideo from './imageVideoPlay/Secvideo/SecVideo'
import Thirdvideo from './imageVideoPlay/thirdPausevideo/Thirdvideo'
import ThirdFirstvideo from './thirdaimgevideo/thirdfirstvideo/ThirdFirstvideo'
import Third2ndvideo from './thirdaimgevideo/third2ndvideo/Third2ndvideo'
import Third3ndvideo from './thirdaimgevideo/third3ndvideo/Third3ndvideo'
import Accordin from '../Accordin/Accordin'
import { useEffect } from 'react'
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import ScrolllComponent from '../pages/scrollcomponet/ScrollComponet'
import { BehanceSquareOutlined } from '@ant-design/icons';
const Result = ()=>{
    return(
      <p className="result-paragraph"> <b><i>Thanks</i> &#128512;&#128512; ;;</b> &nbsp; &nbsp; &nbsp;   Your Message Has Been Send . We Will Contact You Soon </p>
    )
  }
const Application = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const [result , showresult] = useState(false) 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_leu1zbn', 'template_s35g9fa', form.current, 'Sy_NA9jStjnQHXxOJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showresult(true)        
  };
  return (
    <div>
        <Layout sx={{width:'100%',position:'relative'}}>
         
         {/* /////////////// social media icons ///////////////////// */}
         <div className='social-media-icons-div'><ul className='ul-social-div' data-aos="fade-left">
  <li className='social-li' id='social-links-drdder'  >  <a href='https://www.facebook.com/bigwals?mibextid=LQQJ4d' target="_blank" rel="noopener noreferrer"style={{color:'white'}} id='icon-font-all-website' ><Facebook id='icon-social-edit'  style={{color: " #1877F2"}}/> &nbsp; &nbsp;FaceBook </a></li>
  <li className='social-li' id='social-links-drdder1'><a href='https://www.instagram.com/bigwalstudio/?igshid=YmMyMTA2M2Y%3D' target="_blank" rel="noopener noreferrer" style={{color:'white'}} id='icon-font-all-website' ><Instagram id='icon-social-edit'  style={{color: "#E4405F"}}/> &nbsp; &nbsp;Instagram</a></li>
  <li className='social-li' id='social-links-drdder2'><a href='https://twitter.com/bigwalstudio?s=11' target="_blank" rel="noopener noreferrer" id='icon-font-all-website' style={{display:'flex'}} ><div style={{width:'28px',dispaly:'flex'}}><img src='https://www.ibex.co/web/assets/images/twitter-logo.svg' alt='twiiter img ' /> </div>&nbsp; &nbsp;Twitter </a></li>
  <li className='social-li' id='social-links-drdder3'> <a href='https://dribbble.com/bigwalstudio' target="_blank" rel="noopener noreferrer" id='icon-font-all-website' style={{color:'white'}} > <SportsBasketballIcon style={{color: "#B2215A"}} id='icon-social-edit'/>  &nbsp; &nbsp;Dribbble </a>  </li>
  <li className='social-li' id='social-links-drdder3' style={{paddingTop:"10px"}}> <a href='https://www.behance.net/bigwals' rel="noopener noreferrer" target="_blank" id='icon-font-all-website' ><BehanceSquareOutlined  style={{color: "#053EFF"}} id='icon-social-edit'/>  &nbsp; &nbsp;Behance </a>  </li>
  </ul></div>

   {/* /////////////// social media icons ///////////////////// */}
 <BannerApplication/>
<div className="tdnd-application">
<div className="row0-applicaation-sec">
    <video src="https://www.mindinventory.com/img/video/mobile-app-development-showreel.mp4" style={{borderRadius:'15px'}} autoPlay loop width='100%' height='100%'></video>
</div>
<ScrolllComponent/>
<div className="video-image">
    <h3 className="appliaction-h">
        Our Recent Work
    </h3>
    <div className="row-apllication-images">
      <div className="com-application-video">  <App/></div>
      <div className="com-application-video">  <SecVideo/></div>
      <div className="com-application-video"> <Thirdvideo/></div>
    </div>
    <div className="row-apllication-images" id='row-application-2nd-div'>
      <div className="second-application-rewivees"> <span className='heading-h1-text-application'> 2500+</span><span className='small-heading-application'> Projects Delivered</span> </div>
      <div className="second-application-rewivees"> <span className='heading-h1-text-application'> 1600+</span><span className='small-heading-application'> Happy Clients</span> </div>
      <div className="second-application-rewivees" style={{background:'linear-gradient(90deg, rgba(244,160,200),rgba(112,40,228))'}}> <span className='small-heading-application'> Want to start a Project? </span><span className='heading-h1-text-application'><button id= "button-application-banenr" className='button-new-application'>Get Cost Estimation for Free</button></span></div>
    </div>


    <div className="third-application-div">
    <h3 className="appliaction-h" id='h1-tag-appliation-010'>
    Client Success Stories
    </h3>
    <div className="row-third-div-appliation">
        <div className="colm-applicationthid-video-text">
            <div className="colm-colm-application0">
                <div className="inner-coln-two-tree"><ThirdFirstvideo/></div>
                <div className="inner-coln-two"id='h3-padding-style'><h3 className="application-h3" >Kids eLearning App</h3>
                <p className="paragraph-application-4rth">In Kids eLearning tools, Zoomer becomes the first of a kind, providing a high-quality, super smart eLearning experience.</p></div>
            </div>

            <div className="colm-colm-application0" id='new-id-colm-application'> 
                
                <div className="inner-coln-two-tree" id='h3-padding-style'><h3 className="application-h3">Kids eLearning App</h3>
                <p className="paragraph-application-4rth">In Kids eLearning tools, Zoomer becomes the first of a kind, providing a high-quality, super smart eLearning experience.</p></div>
                <div className="inner-coln-two"><Third2ndvideo/></div>
            </div>
        </div>
        <div className="colm-applicationthid-video-text-new">
        <div className="com-00-new-application12">
        <div className="inner-coln-two-new"><Third3ndvideo/></div>
        <div className="inner-coln-two-00-new"><h3 className="application-h3">Kids eLearning App</h3>
                <p className="paragraph-application-4rth">In Kids eLearning tools, Zoomer becomes the first of a kind, providing a high-quality, super smart eLearning experience.</p></div>
                
        </div>
        </div>
    </div>
</div>
<h3 className="appliaction-h" >
Open Source Contribution
    </h3>
<div className="div-main-4boxes-application">
<div className="main-row-4boxes-applicaon00">
    <div className="com-row-application-boxes">
        <div className="icon-image"><img src="https://www.mindinventory.com/static/media/ios.89f152a9.svg" width="65" height='65'  alt="" /></div>
    <span className="big-icon-apple"><img src="https://www.mindinventory.com/static/media/ios.89f152a9.svg" width= '175px'  aspect-ratio =' auto 175 / 175' max-width = '100%' alt=""  /></span>
        <div className="add-details">
            <span className="small-heading-h2">Letters <br></br> Animation</span><br></br>
            <span className="call-normal-span">iOS/Swift</span>
        </div>

        </div>
    <div className="com-row-application-boxes">

    <div className="icon-image"><img src="	https://www.mindinventory.com/static/media/android.c3a3c93b.svg" width="65" height='65'  alt="" /></div>
    <span className="big-icon-apple"><img src="	https://www.mindinventory.com/static/media/android.c3a3c93b.svg" width= '175px'  aspect-ratio =' auto 175 / 175' max-width = '100%' alt=""  /></span>
        <div className="add-details">
            <span className="small-heading-h2">Lassi  <br></br> Picker</span><br></br>
            <span className="call-normal-span">Android/Kotlin</span>
        </div>

    </div>
    <div className="com-row-application-boxes">

    <div className="icon-image"><img src="	https://www.mindinventory.com/static/media/flutter.58749211.svg" width="65" height='65'  alt="" /></div>
    <span className="big-icon-apple"><img src="	https://www.mindinventory.com/static/media/flutter.58749211.svg" width= '175px'  aspect-ratio =' auto 175 / 175' max-width = '100%' alt=""  /></span>
        <div className="add-details">
            <span className="small-heading-h2">Draggable  <br></br> Gridview</span><br></br>
            <span className="call-normal-span">Flutter</span>
        </div>

    </div>
    <div className="com-row-application-boxes">

    <div className="icon-image"><img src="	https://www.mindinventory.com/static/media/react.3e85179e.svg" width="65" height='65'  alt="" /></div>
    <span className="big-icon-apple"><img src="	https://www.mindinventory.com/static/media/react.3e85179e.svg" width= '175px'  aspect-ratio =' auto 175 / 175' max-width = '100%' alt=""  /></span>
        <div className="add-details">
            <span className="small-heading-h2">Map  <br></br> Interaction</span><br></br>
            <span className="call-normal-span">React Native</span>
        </div>

    </div>

</div>
</div>

<div className="fourth-colm-div-main">
    <div className="appliation-div-text-4th">
        <h2 className="application-div-h2">
        Need Assistance with Your Mobile App Development?
        </h2>
        <p className="paragraph-application-page-4th-div">
        We can help you refine your app development ideas and help you build a robust and scalable mobile app that meets your vision!
        </p>
        <button id= "button-application-banenr" className='fouth-button-shedule'><a href="tel: (901)646-7815" style={{color: 'black',textDecoration: 'none'}}>Schedule A Call <CallIcon className='iconPhone' /></a></button>
    </div>
</div>

<div className="fith-div-main">
    <div className="row-fith-div-application">
        <div className="colm-appliation-fivth">
            <h3 className="application-div-h2" style={{paddingTop:'0px'}}>
            Our Mobile App Development Services
            </h3>
            <p className="paragraph-application-page-4th-div">
            With expertise in working with modern app development technology stack, our agile mobile app developers can help you build powerful mobile apps with rich user experience, leading your business to success.
        </p>
        {/* <button id= "button-application-banenr" className='fouth-button-shedule'>LET’S DISCUSS YOUR PROJECT</button> */}
        </div>
        <div className="colm-appliation-fivth">
        <div className="form-appoinment">
                <form  ref={form} onSubmit={sendEmail}  >
                <input name='name' type="text" placeholder='Your Name' className='appoinmment-input' onFocus='disable' />
                <input name='email' type="Email" placeholder='Your Email' className='appoinmment-input' />
                <input name='phonenumber' type="number" placeholder='Phone' className='appoinmment-input'/>
                <input name='Services' type="text" placeholder='Your Company Name Required' className='appoinmment-input'  />
                <textarea name='message'  id='textarea-appoimnet' className='appoinmment-input' rows={3} placeholder='Describe Your Project' />
                <div className="row-makng-allert">{result ? <Result/> : null}</div>
                <button id= "button-application-banenr" className='fouth-button-shedule'>Schedule A Call</button>
                </form>
            </div>
        </div>
    </div>
</div>
<Accordin/>
</div>
</div>

</Layout>
    </div>
    
  )
}

export default Application