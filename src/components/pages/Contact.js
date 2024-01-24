
import Layout from '../layout/Layout'
import { useFormik } from 'formik'
import *as Yup from 'yup'
import '../../styles/HeaderStyle.css'
import { Facebook, Instagram,  Twitter } from '@mui/icons-material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import gif from '../bannerAll/Contact-1.gif'
import BannerAll from '../bannerAll/BannerAll'
import ContactFomPage from '../contactFormPage/ContactFomPage'
import { useEffect } from 'react'
import ScrollComponet from './scrollcomponet/ScrollComponet'
import { BehanceSquareOutlined } from '@ant-design/icons';
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const  formik = useFormik({
    initialValues:{
      Name:'',
      Email:'',
      Subject:'',
      Message:''
    },
ValiditionSchema:Yup.object({
  Name:Yup.string().required('this is required'),
  Email:Yup.string().required('this is required'),
  Subject:Yup.string().required('this is required'),
  Message:Yup.string().required('this is required'),
}),onSubmit:(values)=>{
  console.log('from submit values' , values)
}
  })

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
      <div className='slider-shape slider-shape-two'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape02.png' /></div>
        <div className='slider-shape slider-shape-three'><img src = 'https://shtheme.org/demosd/pixer5/wp-content/themes/xotix/img/shape/slider_shape03.png' /></div>
       {/* /////////////// social media icons ///////////////////// */}
       <BannerAll paragraphText='Drop us a call or email if you have any questions about your project. We’re here to assist you 24/7 to drive your brand to the top in real-time.' titleMaina='Get In Touch with Our Professionals' gifSpace={gif }  />
       <ScrollComponet/>
<ContactFomPage/>

</Layout>
  )
}

export default Contact