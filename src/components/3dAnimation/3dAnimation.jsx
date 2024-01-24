import gif from './gif3dd.gif'
import logoanimation from './gig2nd3d.gif'
import CircleIcon from '@mui/icons-material/StarPurple500';
import animation1 from './3dimage-new3d.png'
import Accordin3DAnimation from '../Accordin/Accordin3DAnimation'
import Pricing3DAnimation from '../pricingTablist/Pricing3DAnimation'
import React from 'react'
import Layout from '../layout/Layout'
import Bannerlogo from '../bannerAll/BannerLogoNew'
import { Facebook, Instagram,  Twitter } from '@mui/icons-material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import '../2dAnimation/2dAnimation.css'
import { useEffect } from 'react'
import Colmdigital from '../colmdigital/Colmdigital'
import NewImgaesportfolio from './newImgaesportfolio/NewImgaesportfolio';
import ScrolllComponent from '../pages/scrollcomponet/ScrollComponet'
import { BehanceSquareOutlined } from '@ant-design/icons';
const AnimationTwoD = () => {
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
  <Bannerlogo paragraphText=' Make Your Brand Move with The Best 2D or 3D Animation Services! 
  ' titleMaina='Top-Rated 3D Animation Services ' gifSpace={gif }  />
<ScrolllComponent/>
 <div className='main-caurosel-div'>
    <div className="row-carousle-main">       <div className="colm-caurosel" id='padding-propeties-colm-courosel'><img src={logoanimation  } alt='logo' width='100%' /></div>
       <div className="colm-caurosel"><h1 style={{textAlign:'center'}} className='com-h1-webiste-sec' >World-Class Animation Services</h1>  <p className='top-first-heading' style={{textAlign:'center'}}>Elevate your immersive storytelling game with our stunning 3D animation services – BigWals has the experts in dealing with your visions and turning them into reality. We use a consumer-centric approach to craft animations on user-defined software or technology. Our animators are proficient in creating a seamless animation experience – a thing of beauty using the latest technologies. We understand and enhance your vision using our expertise to deliver top-notch results. </p>  </div>
   </div>
 </div>

<div className='heading-home-page'  data-aos ="fade-up">
 <p className='top-first-heading'>OUR EXPERTISE</p>
 <h3 className='sec-heading-home-page'>One Of the best 3D Animation Companies That Fits Your Business</h3>
 </div>
 <div className='overley-branding-image-sec'>
  <div className = "main-caurosel-div">
   <div className='row-tex-new-carosel'>
     <div className='colm-rw-cou'>
      <h1 className='com-h1-webiste-sec'>Award-Winning 3D Animation Services</h1>
      <p className='paragrph-website-sec-p'>We create what you imagine. Whether it is 3D motion graphics services or 3D medical animations, BigWals offers specialized individuals at affordable prices. BigWals use the latest tools and technologies to create striking animations for your target audience. Several industry-leading brands have recognized our animation services, and we always look to create something great!</p>
      <h3 className='h3-website-list-edit'><CircleIcon id='icon--start-website'/>	Explainer Animated Videos </h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>Having love at first sight, is a fairy tale. Since the first impression is the last, we make it last with our top-rated explainer animated video services. BigWals is an expert at creating captivating experiences with your vision in mind – giving your animations an immersive look to attract users' attention. Discuss your creative idea with our experts to get its lifelike image!</p>
      <h3 className='h3-website-list-edit'><CircleIcon id='icon--start-website'/>	3D Character Design </h3>      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>Enhance your character looks with our realistic 3D character design services that hit the marks! BigWals has the resources to craft a masterpiece 3D character animation for your exciting game. We help you create personalities you imagine with improvised characteristics for an impressive look. From body proportions to facial expressions, we make it look smooth to convey emotions and personalities. </p>
      <h3 className='h3-website-list-edit'><CircleIcon id='icon--start-website'/>	Architectural Animations</h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>The real estate business is the most promising one. So with greatness comes high competition. Architectural animations can make a huge difference in your sales – showcasing your project in the most immersive way. We take notes from everyone in making attractive architecture to create realistic renderings. Let us help you become the tycoon that you always wished for.</p>
      <h3 className='h3-website-list-edit'><CircleIcon id='icon--start-website'/>		3D Medical Animations </h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>Only some things are done practically to understand them; some require virtual training. However, having immersive 3D medical animations significantly impact your audience. Our visualizers make it easy for everyone to understand the complexities of healthcare professionals. We are one of the best medical animation companies that create accurate representations to help surgeons and other medical staff prepare for surgeries.</p>
      <h3 className='h3-website-list-edit'><CircleIcon id='icon--start-website'/>	3D Motion Graphics Services</h3>
       <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>You can use our 3D motion graphics services to convey your content across channels in the most outstanding way. Tell them you know what is trending and that you care about your loyal customers. Level up your product demonstration and storytelling game with our experts, enabling you to create narratives that spark your audience's interests. Connect with them on a deeper level with BigWals!</p>
       </div>
    <div className='colm-rw-cou'><div className="image-3d-desin"><img src={animation1} alt="" width='100%' height='100%' objectFit='cover' /></div></div>
   </div>  </div>
 </div>



   <div className='heading-home-page'  data-aos ="fade-up">
  <h3 className='sec-heading-home-page'>How BigWals  3D Animation Works?</h3>   <p className='paragraph-content-home'>Our highly experienced designers and animators follow a streamlined process to craft your unique animation. We keep things collaborative and straightforward for an outstanding outcome! </p>
   </div>
     <div className='third-sec-digital-sec-main'>
   <div className='row-digital-sec-digital'>
   <div className='colmDigital-div-row-com'> <Colmdigital img1="https://www.revechat.com/wp-content/uploads/2021/01/Click-to-chat-1280x720.png" headingFirst="Client’s Call" paragraph="You will initiate the story while we listen closely to understand it and enhance your vision for a better outcome. Our experts make you feel at home to elaborate on whatever is on your mind."/></div>
   <div className='colmDigital-div-row-com'> <Colmdigital img1="https://cdn-academyblog.pressidium.com/wp-content/uploads/2019/10/famous-concept-artists-jin-kim-moana.jpg" headingFirst="Concept Art" paragraph="We offer you a preliminary visual representation of your vision and a glance at what it will look like. Concept art helps you to explore artistic vision, style, and other design elements. "/></div>
   <div className='colmDigital-div-row-com'><Colmdigital img1="https://www.getmoneyrich.com/wp-content/uploads/2017/06/How-to-Build-Assets-3.png " headingFirst="Asset Creation" paragraph="Our expert 3D character designers and other asset animators begin 3D modeling to shape your animation. They create realistic designs that entice your audience."/></div> 
</div>

   <div className='row-digital-sec-digital'>
    <div className='colmDigital-div-row-com'> <Colmdigital img1="https://buzzflick.com/wp-content/uploads/2022/01/MeshSkinning.png" headingFirst="Rigging and Animation Process" paragraph="With attention to detail, the animation services expert begins giving life to the designs. We bring fluid movements, colors, and patterns for engaging animations."/></div>
   <div className='colmDigital-div-row-com'> <Colmdigital img1="https://assets.website-files.com/62ba1fb86485b6d5029975c4/62c5a423ec65bd5598dcc1a1_tile_gpus_rendering.jpg" headingFirst="Rendering and VFX" paragraph="Once we have figured out the proper lighting and mood for the animation, we start the rendering process for a final image. Our visual artists ensure your animation gets the highest attention to detail. "/></div>
   <div className='colmDigital-div-row-com'><Colmdigital img1="	https://krishnaanimationstudio.com/wp-content/uploads/2022/03/post-production-flat-concept-icon-videography-vector-30198976.jpg" headingFirst="Post-Production " paragraph="Something is always left once the animation is rendered and ready for the client to view. Voiceover or any background music, we listen carefully to your feedback and make edits accordingly."/></div> 
   
  </div>
  <div className='row-digital-sec-digital' style={{paddingTop:'0px'}}>
   <div className='colmDigital-div-row-com'> <Colmdigital img1="https://img.freepik.com/premium-vector/delivery-agent-checking-delivery-illustration-concept-flat-illustration-isolated-white-background_701961-2162.jpg?w=2000" headingFirst=" Delivery " paragraph="We will ensure you contend with our animation services as soon as everything is finalized. Whatever format file you want, we corporate with you till the last to meet your expectations!"/></div>
  </div>
   </div>

<div className='heading-home-page'  data-aos ="fade-up">
<p className='top-first-heading'>Big Ideas Big Brands</p>
<h3 className='sec-heading-home-page'>Porfolio</h3>
</div>
{/* <TwodAnimation/> */}
 {/* <ThreedAnimation/> */}
<NewImgaesportfolio/> 

<div className='heading-home-page'  data-aos ="fade-up">
<p className='top-first-heading'>Custom</p>
 <h3 className='sec-heading-home-page'>3D Animation Pricing
 </h3>
 </div>
<Pricing3DAnimation/>
 <Accordin3DAnimation/>



</Layout>
    </div>
  )
}

export default AnimationTwoD