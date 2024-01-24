import React from 'react'
import Layout from '../layout/Layout'
import BannerAll from '../bannerAll/BannerAll'
import AllColmFrontImg from '../pages/AllColmFrontImg'
import { Facebook, Instagram } from '@mui/icons-material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Gif from '.././pages/images/gif-about.gif'
import seoimg from './seoimg.png'
import AllColmFrontImgleft from '../pages/AllColmFrontImgleft'
import digitaltwo from './seoimage.png'
import Colmdigital from '../colmdigital/Colmdigital'
import '../../styles/HeaderStyle.css'
import AccordinSeo from '../Accordin/AccordinSeo'
import pngwing from './pngwing.com.png'
import secong from './secong-seo.png'
import linkingBacking from './Link-Building-Service.png'
import contentwriting from './contentwriting-removebg-preview.png'
import { useEffect } from 'react'
import Appoinment from '../appoinment/Appoinment'
import ScrolllComponent from '../pages/scrollcomponet/ScrollComponet'
import { BehanceSquareOutlined } from '@ant-design/icons';
const Seo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout sx={{width:'100%',position:'relative'}}>
    {/* /////////////// social media icons ///////////////////// */}
    <div className='social-media-icons-div'><ul className='ul-social-div' data-aos="fade-left">
    <li className='social-li' id='social-links-drdder' >  <a href='https://www.facebook.com/bigwals?mibextid=LQQJ4d' id='icon-font-all-website' target="_blank" rel="noopener noreferrer"><Facebook id='icon-social-edit'  style={{color: " black"}}/> &nbsp; &nbsp;FaceBook </a></li>
    <li className='social-li' id='social-links-drdder1'><a href='https://www.instagram.com/bigwalstudio/?igshid=YmMyMTA2M2Y%3D'  id='icon-font-all-website' target="_blank" rel="noopener noreferrer" ><Instagram id='icon-social-edit'  style={{color: "black"}}/> &nbsp; &nbsp;Instagram</a></li>
    <li className='social-li' id='social-links-drdder2'><a href='https://twitter.com/bigwalstudio?s=11' target="_blank" rel="noopener noreferrer" id='icon-font-all-website' style={{display:'flex'}} ><div style={{width:'28px',dispaly:'flex'}}><img src='https://www.ibex.co/web/assets/images/twitter-logo.svg' alt='twiiter img ' /> </div>&nbsp; &nbsp;Twitter </a></li>
    <li className='social-li' id='social-links-drdder3'> <a href='https://dribbble.com/bigwalstudio'  id='icon-font-all-website' target="_blank" rel="noopener noreferrer" > <SportsBasketballIcon style={{color: "black"}} id='icon-social-edit'/>  &nbsp; &nbsp;Dribbble </a>  </li>
    <li className='social-li' id='social-links-drdder3' style={{paddingTop:"10px"}}> <a href='https://www.behance.net/bigwals' rel="noopener noreferrer" target="_blank" id='icon-font-all-website' ><BehanceSquareOutlined  style={{color: "black"}} id='icon-social-edit'/>  &nbsp; &nbsp;Behance </a>  </li>
    </ul></div>

     {/* /////////////// social media icons ///////////////////// */}
      <BannerAll paragraphText='Elevate your search engine rankings with outstanding SEO techniques!' titleMaina='Search Engine Optimization Services' gifSpace={Gif }  />
  <AllColmFrontImg logoBrandingLogo={seoimg} firstpara= "WHO WE ARE?" h1heading="Affordable SEO Services Company" againPara="
Having a global reach for your business is always a win-win situation. If you are tired of doing SEO alone and unable to get the results, you are doing it wrong. Professional SEO services can make a massive difference in supercharging your organic leads. BigWals is a leading search engine optimization firm that has worked across several niches and industries!"/>
  <ScrolllComponent/>
  <AllColmFrontImgleft logoBrandingLogo={digitaltwo} firstpara= "WHAT IS IN IT FOR YOU?" h1heading="BENEFITS OF OUR SERVICES:" 
    againPara="•	We improved search engine rankings with the help of our custom SEO services from industry experts" AgainagianP='•	Get increased online visibility across all platforms.'thirdPara=" •	Enhance your website traffic through powerful SEO strategies." fourthPara="•	Have more fantastic organic leads and sales from the organic traffic generated with our best SEO services." fifthPara="•	Low-cost SEO services." sixPara="•	Become a reputable brand and a thought leader." sevenPara="•	Get a 24/7 promotion." eightPara="•	Offer seamless user experience to your visitors." ninePara="•	Build trust and credibility for a loyal audience. "
    tenPara="•	More significant ROI and conversions." elevenPara="•	Affordable link-building services"
/>
  <div className='heading-home-page'  data-aos ="fade-up">
  <p className='top-first-heading'>WHAT DO WE OFFER?</p>
  <h3 className='sec-heading-home-page'>BEST SEO SERVICES!</h3>
  <p className='paragraph-content-home'>Content is KING! But who holds the crown? Search engines. BigWals comprehend what it takes to get the height with its custom SEO services. We practice traditional and the latest SEO techniques to get your business on the first page of Google, leveraging local SEO and the best link-building strategies. We aim to fill your business website with organic traffic and leads that justify your budget for our low-cost SEO services. </p>
  </div>
    
<div className='third-sec-digital-sec-main'>
  <div className='row-digital-sec-digital'>
   <div className='colmDigital-div-row-com' > <Colmdigital img1={pngwing} headingFirst="	Keyword Research and Analysis" paragraph="Our SEO experts do not rely on tools to find keywords to feed in your content for relevancy. We know research and analyze keywords that highly benefit the ranking of your website. Our keyword research is rich in traffic and search volume and is more sensible."/></div>
   <div className='colmDigital-div-row-com' > <Colmdigital img1={secong} headingFirst="	Local SEO" paragraph="Having your reach globally is always beneficial. But as a consumer, you are also looking for SEO services near me. Naturally, people give priority to local businesses over shipping worldwide. BigWals help you improve local search engine rankings with Google business profile optimization to get more organic and high-intent customers."/></div>
   <div className='colmDigital-div-row-com' ><Colmdigital img1={contentwriting} headingFirst="	Content Writing" paragraph="Several AI tools can assist you in creating content for your website. However, search engines like Google can recognize whether the writing is AI-generated. And ranks your business based on it. Our custom SEO services allow you to have great content on your website written by our creative human writers!"/></div> 
  </div>

  <div className='row-digital-sec-digital'>
   <div className='colmDigital-div-row-com' > <Colmdigital img1="https://www.reliablesoft.net/wp-content/uploads/2018/01/technical-seo-2020.png" headingFirst="	Technical SEO" paragraph="Technical SEO is optimizing your website for search engines and enhancing user experience. Our low-cost SEO services offer you, specialized web experts and auditors. From optimizing for mobile to improving the security of your online business, we make everything look easy. Our SEO experts are capable of fixing any errors that are beyond your understanding."/></div>
   <div className='colmDigital-div-row-com' > <Colmdigital img1={linkingBacking} headingFirst="	Best Link Building Services" paragraph="What is the best way to make Google recognize your website as reputable? Get backlinks from quality and credible websites that Google already trusts. Offering affordable link-building services, we have a dedicated team of link builders pitching multiple ranked websites with good domain authority to provide your website with a link."/></div>
   {/* <div style={{width:'33%'}}></div>  */}
    {/* <Colmdigital img1="	https://grin.co/wp-content/uploads/2022/09/reporting-analitics-at-2x.webp" headingFirst="Conversion Rate Optimization " paragraph="You can interact with tens of clients and buyers but one or two converts. What are you doing wrong? Let BigWals help you maintain impressive conversion rates with our best digital marketing services. We incorporate trending practices to reach your target audience, get leads, and convert them!"/> */}
    
  </div>


</div> 
<Appoinment/>
<AccordinSeo/>
 
  </Layout>

  )
}

export default Seo