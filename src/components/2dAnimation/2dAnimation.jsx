import React from 'react'
import Layout from '../layout/Layout'
import Bannerlogo from '../bannerAll/Banner2dAnimaton'
import gif from './NOq3-unscreen.gif'
import { Facebook, Instagram,  Twitter } from '@mui/icons-material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { BehanceSquareOutlined } from '@ant-design/icons';
import AllColmFrontImg from '../pages/AllColmFrontImg'
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import Caurosel2dAnimation from '../couroselWebsite/Caurosel2dAnimation'
import './2dAnimation.css'
import TwodAnimation from '../cards/TwodAnimation'
import { useEffect } from 'react'
import Pricing2DAnimation from '../pricingTablist/Pricing2DAnimation'
import Colmdigital from '../colmdigital/Colmdigital'
import Accordin2DAnimation from '../Accordin/Accordin2DAnimation'
import ScrolllComponent from '../pages/scrollcomponet/ScrollComponet'
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
  <Bannerlogo paragraphText='Showcase Your Brand in Style With 2D Flawless Artworks
  ' titleMaina='Nifty 2D Animation Services' gifSpace={gif }  />
<ScrolllComponent/>
<AllColmFrontImg logoBrandingLogo='https://img.freepik.com/free-vector/designer-collection-with-people_23-2148534322.jpg?w=996&t=st=1688766279~exp=1688766879~hmac=3834be2f22208f094c73261af61c623ffe0fdbc55056b17f02841d74f06f155d' h1heading='Creative 2D Animation Studio in Florida' firstpara=''  AgainagianP="Real-life cinematography can cost you a lot. However, with 2D animation services, you can leverage endless possibilities of creating whatever you want. BigWals have the right 2D character designers who can get your message and voice to the audience with amazing visuals. As the best 2D animation studio in Florida, we have the expertise to use high-end technology for crafting seamless movies and ads."/>
<div className='heading-home-page'  data-aos ="fade-up">
<p className='top-first-heading'> OUR SPECIALISTS</p>
<h3 className='sec-heading-home-page'>Top-Rated 2D Animation Company With Vast Expertise</h3>
</div>

<div className='overley-branding-image-sec'>
 <div className = "main-caurosel-div">
  <div className='row-tex-new-carosel'>
    <div className='colm-rw-cou'>
      <h1 className='com-h1-webiste-sec'>A Pool of 2D Animation Services</h1>
      <p className='paragrph-website-sec-p'>Have your way out with our custom 2D animation solutions – create fully tailored animated experiences for your consumers and positively impact your brand on them. BigWals have dedicated experts to deal with your business and audience type; we fine-tune your idea with the help of our ingenious minds at work to create masterpiece 2D content. Have a look at what we can offer to you!</p>
      <h3 className='h3-website-list-edit'><StarPurple500Icon id='icon--start-website'/>2D Character Design Animation</h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>Designing a character and putting life in it must be done delicately for a pleasing animation experience. If anything goes wrong, the entire thing fails. Therefore, BigWals is equipped with professional 2D character designers with years of industry experience animating characters with the right emotions and feels!</p>
      <h3 className='h3-website-list-edit'><StarPurple500Icon id='icon--start-website'/>	2D Environment Animation</h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>To keep things balanced, the 2D environment must match the tone and style of the character designed. We intricately keep a balance between them. Our experts create stunning high-quality 2D environment designs with attention to every detail and element. We ensure everything meets your requirement!</p>
      <h3 className='h3-website-list-edit'><StarPurple500Icon id='icon--start-website'/>	2D Props Animation</h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>From a simple two-dimensional box to a sports car, our top-rated 2D motion graphic services always strive to craft original and unique prop animations. We bring the right tools and technology to form your overall environment design, including all the elements, leaving no stones unturned!</p>
      <h3 className='h3-website-list-edit'><StarPurple500Icon id='icon--start-website'/>	2D Explainer Videos</h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>Draw your audience into creative storytelling content with vibrant and engaging 2D explainer videos. We help you deliver your story and message to the audience in the most compelling way with a captivating script and mesmerizing 2D animations. Let us not make any other pretty animation but a powerful marketing tool!</p>
      </div>
    <div className='colm-rw-cou'><div className="image-3d-desin"><img src='https://img.freepik.com/free-photo/fun-cartoon-kid-with-rain-gear_183364-81176.jpg?w=740&t=st=1688765688~exp=1688766288~hmac=4a5a60fef18909098f7f2ea28047d7f0dba52f72ca90f1fc8da394adf2671b34' alt="" width='100%' height='100%' objectFit='cover' /></div></div>
  </div>
</div>
</div>

<div className='heading-home-page'  data-aos ="fade-up">
  <h3 className='sec-heading-home-page'>How BigWals 3D Animation Works?</h3>
  <p className='paragraph-content-home'>BigWals' stellar 2D animation services are inclined to offer you transparency in their work process. We design architectural animations; meanwhile, we are also one of the top-rated medical animation companies – it is a gratitude to our smooth work process!
</p>
  </div>
    
<div className='third-sec-digital-sec-main'>
  <div className='row-digital-sec-digital'>
   <div className='colmDigital-div-row-com'> <Colmdigital img1="https://img.freepik.com/free-vector/call-center-concept-illustration_114360-2045.jpg?w=740&t=st=1688764984~exp=1688765584~hmac=c774d471b4ad1746d09c166b21f47dbe230b5b40dd0d65c4fbaf712a7f186845" headingFirst="Your Call" paragraph="You will start the tale, and we will listen carefully to comprehend it and improve your vision for a better outcome. Our professionals make you feel at ease, allowing you to discuss anything."/></div>
   <div className='colmDigital-div-row-com'> <Colmdigital img1="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150310009.jpg?w=740&t=st=1688765169~exp=1688765769~hmac=36e4575e16e59c67b2f53ace49ca0c9c3be8694f347aca357f47eb8e35771eeb" headingFirst="Creating a Phenomenal Script" paragraph="All our efforts go into successfully delivering your message to its audience. We have a team of masterminds who ingeniously craft a compelling narrative that engages and entertains your audience while reserving brand values and culture. "/></div>
   <div className='colmDigital-div-row-com'><Colmdigital img1="https://img.freepik.com/free-vector/modern-teamwork-concept-with-flat-design_23-2147852842.jpg?w=740&t=st=1688765219~exp=1688765819~hmac=a5f8b04de7e8e5a02691ff0152511d33a87fc94c6f9e2f1508086cf247904b1a" headingFirst="Drawing and Sketching " paragraph="From 2D medical animations to 2D character design, we do it proficiently with the help of skillful 2D character designers and the right equipment. These experts meticulously craft each scene and element of your animation to ensure the 'wow' factor!"/></div> 
  </div>

  <div className='row-digital-sec-digital'>
   <div className='colmDigital-div-row-com'> <Colmdigital img1="https://img.freepik.com/premium-vector/website-template-abstract-concept-vector-illustration_107173-25149.jpg?w=740" headingFirst="Coloring" paragraph="Now let us feed colors into the drawing we did. We do not just add colors; our team ensures to define the depth of the 2D animation and make your budget count. All the color palettes chosen match the tone of the animation and your requirements."/></div>
   <div className='colmDigital-div-row-com'> <Colmdigital img1="https://img.freepik.com/free-vector/animation-designer-artist-creating-digital-illustrations-web-sites-advertising-animation-creative-profession-modern-computer-technologies-flat-vector-illustration_613284-1640.jpg?w=740&t=st=1688765344~exp=1688765944~hmac=50c1017087b3e58c9a6dfd7b9476cf291cc65b22c10084b8520cb2b14a52839a" headingFirst="Animation Process" paragraph="It is time to get your hopes high since our expert 2D animators are on a roll – in this phase, we bring life to the sketches and colored paintings with the proper movements and fluidity. We make things move on your demand, despite its complications and creativity. "/></div>
   <div className='colmDigital-div-row-com'><Colmdigital img1="https://img.freepik.com/free-vector/recording-concept-illustration_114360-1704.jpg?w=740&t=st=1688765386~exp=1688765986~hmac=93cf0ff589e2a540d7915aa8d096d97880978ccb2a348186e2b5f35ccac3f543" headingFirst="Voice-Over " paragraph="Music attracts the audience the most. And an animation without it is just trash. Our creative managers talk with you thoroughly while providing ideas from their sonic wizardry. We add specialized voice-over based on your demands that touch your audience's heart!"/></div> 
   
  </div>
  <div className='row-digital-sec-digital' style={{paddingTop:'0px'}}>
   <div className='colmDigital-div-row-com'> <Colmdigital img1="https://img.freepik.com/free-vector/delivery-poster-with-man-girl-bicycle_107791-7017.jpg?w=1380&t=st=1688765537~exp=1688766137~hmac=5afdea2b913afdd0a93eb70f664385de87d85605c965c38031b253be0d909ac8" headingFirst=" Delivery " paragraph="Now that everything is in place, including the animation and sound effects, BigWals asks for your confirmation before submitting and finishing the project. Make countless revisions until your eyes and heart have contended with our exceptional 2D animation services."/></div>
  </div>
  </div>
<div className='heading-home-page'  data-aos ="fade-up">
<p className='top-first-heading'>Big Ideas Big Brands</p>
<h3 className='sec-heading-home-page'>Porfolio</h3>
</div>
<TwodAnimation/>

<div className='heading-home-page'  data-aos ="fade-up">
<p className='top-first-heading'>Custom</p>
<h3 className='sec-heading-home-page'>2D Animation Pricing
</h3>
</div>
<Pricing2DAnimation/>
<Accordin2DAnimation/>
</Layout>
    </div>
  )
}

export default AnimationTwoD