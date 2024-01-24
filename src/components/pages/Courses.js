import React from 'react'
import Layout from '../layout/Layout'
import '../../styles/HeaderStyle.css'
import BannerAll from '../bannerAll/BannerWebsite'
import Website from '../cards/CoursesCards'
import PricingWebsite from '../pricingTablist/PricingWebsite'
import MainCarousel from '../couroselWebsite/MainCarousel'
import CauroselWebsite from '../couroselWebsite/CauroselWebsite'
import CircleIcon from '@mui/icons-material/Circle';
import gif from './images/phpdevelopment.gif'
import { Facebook, Instagram,  Twitter } from '@mui/icons-material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
// import AllColmFrontImgleft from './AllColmFrontImgleft';
import Colmdigital from '../colmdigital/Colmdigital'
import uiux from './images/ui-ux-design-services-banner-PhotoRoom.png-PhotoRoom.png'
import AccordinWebsite from '../Accordin/AccordinWebsite'
import { useEffect } from 'react'
import ScrollComponet from './scrollcomponet/ScrollComponet'
import { BehanceSquareOutlined } from '@ant-design/icons';
const Courses = () => {
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
 

     <BannerAll paragraphText='You Deserve a Responsive Website That Offers a Seamless User Experience!' titleMaina='PROFESSIONAL WEBSITE DEVELOPMENT SERVICES' gifSpace={gif }  />
 <MainCarousel/> 
 <div className='main-caurosel-div' style={{marginTop:'40px'}}>
    <div className="row-carousle-main" >
       
    <ScrollComponet/>
       <div className="colm-caurosel"><h1 style={{textAlign:'center'}} className='com-h1-webiste-sec' >Best Web Development Services</h1> <p className='paragrph-website-sec-p'>Our web admins are proficient with the intricacies involved in creating highly scalable and responsive websites for your business. They ensure your business is accessible through any device at any time. We are the best web development companies near you, with expertise falling from CMS development to full-stack MERN development! A website is a gateway to win consumers from all around the world. But not any affordable web development services can make it for you. BigWals has the right professionals to offer custom website development services for your ideal project.</p>      </div>
       <div className="colm-caurosel" id='padding-id'><img src='https://www.webhopers.com/wp-content/uploads/2019/10/Top-Web-Development-Companies-in-Brighton.jpg' alt='logo' width='100%' /></div>
    </div>
   </div>
 
 
 <div className='heading-home-page'  data-aos ="fade-up">
 <p className='top-first-heading'>OUR EXPERTISE</p>
<h3 className='sec-heading-home-page'>Choose From Our Best Web Development Services</h3>

</div>


<div className = "main-caurosel-div">
<div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
        <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div>
  <div className='row-tex-new-carosel'>
    <div className='colm-rw-cou'>
      <h1 className='com-h1-webiste-sec'>Custom Web Development Services</h1>
      <p className='paragrph-website-sec-p'>A well-designed, intuitive website is the need for every brand. Whatever platform or coding you specify for us, we offer you professional web development services. We take your business online in the most impactful way that captivates your audience. </p>
      <h3 className='h3-website-list-edit'><CircleIcon id='icon--start-website'/>E-Commerce Website Development</h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>We offer a wide range of custom eCommerce website development services, from creating small-sized indie online stores to magnificent wholesale stores. BigWals experts make it easy for online stores to operate with our flawless custom e-commerce website development services. </p>
      <h3 className='h3-website-list-edit'><CircleIcon id='icon--start-website'/>	Shopify Web Development</h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>Are you trying to look for the best Shopify development services for your startup? Shopify is the best platform for small to medium size businesses. And, BigWals own the world's top-rated Shopify developers to offer you high-end development services. Your store will have functionalities you decide on!</p>
      <h3 className='h3-website-list-edit'><CircleIcon id='icon--start-website'/>	WordPress Website Development</h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>Google recommends WordPress due to its optimization. WordPress's simple and intuitive CMS platform has been a popular choice among businesses. BigWals is a WordPress website development agency offering a bespoke site with unique demands. Get your store online with our expert WordPress developers!                                                                                                                                                                                    </p>
      <h3 className='h3-website-list-edit'><CircleIcon id='icon--start-website'/>WooCommerce Web Development</h3>
      <p className='paragrph-website-sec-p' id='paragraph-list-website-sec'>If you want countless personalization like running a school, start your journey with our WooCommerce experts. BigWals have the master of WooCommerce to create a fully customized store. Not only that, we have the expertise to help you create WooCommerce plugins and themes to sell them online!</p>
      </div>
    <div className='colm-rw-cou'><CauroselWebsite/></div>
  </div>
</div>
<div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
        <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div>
<div className='heading-home-page'  data-aos ="fade-up">
  {/* <p className='top-first-heading'>OUR PORTFOLIO</p> */}
  <h3 className='sec-heading-home-page'>Full-Scale Website Development Services Near Me</h3>
  <p className='paragraph-content-home'>Creating a website from scratch requires setting goals and a clear vision. You need to decide what and how the website will perform – its features and how many pages. When you come to us with all these things in your mind, we make it further easy for you to understand things. <br></br>
We take your vision and sketch it so that you know the outcome. As a web development company, we know clients' concerns, so our job is to contend you with our custom web development services. Our affordable web development services offer everything from listening to making your website available on search engines!
</p>
  </div>
    
<div className='third-sec-digital-sec-main'>
  <div className='row-digital-sec-digital'>
   <div className='colmDigital-div-row-com'> <Colmdigital img1="https://editor.analyticsvidhya.com/uploads/49236requirement_gathering.jpg" headingFirst="Business and Requirements Analysis" paragraph="Our job is to guide you through the complexities of web development. Your job is to help us understand your goals and requirements. We make you understand and choose the right technology stack and platform. Our business analysts then deal with you to fully understand your company and its current position to give you a foolproof plan."/></div>
   <div className='colmDigital-div-row-com'> <Colmdigital img1={uiux} headingFirst="UI/UX Design" paragraph="Your website needs an architect, a map that divides the contents of your website in a readable and easy-to-understand way. For that, we deploy our top-rated UI/UX designers to craft an intuitive design that gives your website a straightforward structure. Our UI/UX design makes it easy for users to navigate and roam around the website quickly! "/></div>
   <div className='colmDigital-div-row-com'><Colmdigital img1="https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?w=2000 " headingFirst="Web Design" paragraph="A compelling website design can attract or disengage visitors. A website design is the first thing users notice; you have little time to get their attention. Our expert web designers comprehend the situation and create compelling web designs that shine and represent your brand. We make something that truly resonates with your brand values and tone!"/></div> 
  </div>
  <div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
        <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div>
  <div className='row-digital-sec-digital'>
   <div className='colmDigital-div-row-com' > <Colmdigital img1="https://devoxsoftware.com/wp-content/uploads/2020/12/stages-of-software-development-process-1.png" headingFirst="Development Phase" paragraph="Now let us head toward our fantastic development team. They know what they are doing; they do it flawlessly. We convert the approved design into a functional website with back and front-end features. Our best website development services ensure your website's cross-functionality to adapt to any device and screen size quickly. "/></div>
   <div className='colmDigital-div-row-com' > <Colmdigital img1="https://blog.qatestlab.com/wp-content/uploads/2011/04/testing-process.png" headingFirst="Testing and Quality Assurance" paragraph="We avoid rushing – our certified quality assurance team work with keen attention to find errors in the functionality and interactivity of the website. From scalability to security and A/B testing, BigWals has the industry experts to find bugs in any website and fix them seamlessly. "/></div>
   <div className='colmDigital-div-row-com' ><Colmdigital img1="	https://img.freepik.com/free-vector/tiny-people-family-with-kids-watching-smart-television-content-smart-tv-content-smart-tv-interactive-show-high-resolution-content-concept_335657-2416.jpg" headingFirst="Making It Live  " paragraph="Once you approve everything, we will quickly deploy our webmasters to launch your website. Our production server department handles domain configuration, hosting settings, and transferring files to the server. We put the website on the last test to ensure the project is perfect!"/></div> 
   
  </div>
  <div className='row-digital-sec-digital' style={{paddingTop:'0px'}}>
   <div className='colmDigital-div-row-com'> <Colmdigital img1="https://img.freepik.com/free-vector/website-maintenance-abstract-concept-vector-illustration-website-service-webpage-seo-maintenance-web-design-corporate-site-professional-support-security-analysis-update-abstract-metaphor_335657-2295.jpg" headingFirst="Maintenance and Updates" paragraph="The work is not done yet – in this rapidly evolving technological world, you need to stay updated. Your website must be monitored actively to ensure its security and performance. Our professional web development provides to listen to your and your audience's feedback and make changes accordingly! "/></div>
  </div>
  </div>

<div className='heading-home-page'  data-aos ="fade-up">
      <h3 className='sec-heading-home-page' id='multiple-custmize-h1'>Porfolio</h3>
      </div>
     
      <Website/>
      <div className='heading-home-page'  data-aos ="fade-up">
      <h3 className='sec-heading-home-page' id='multiple-custmize-h1'>Website Pricing</h3>
      </div>
      <div className='background-oveley-logobrandin'>    <PricingWebsite/></div>
      <AccordinWebsite/>
    </Layout>
  )
}

export default Courses