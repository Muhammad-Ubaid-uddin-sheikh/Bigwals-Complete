import './AllStyle.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react'

 const New3dAnimationpor = (
    {img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,
    img13,img14,img15,img16}
    ) => {
    useEffect(()=>{ Aos.init({duration: 2000}) },[])
  
    return (
      <>
      <div className="main-media-div" >
        <div className='media-card-row' style={{marginTop:'30px'}} >
     <div className ='images-all-card-new-port' id='imortant-Edit'  data-aos ='zoom-in'  ><div className='edit-image-style'><img src={img1} style={{width:"100%",height:'100%',  } } objectFit= 'cover' alt="images" /></div></div>
     <div className ='images-all-card-new-port' id='imortant-Edit' data-aos ='zoom-in' ><div className='edit-image-style'><img src={img2} style={{width:"100%" ,height:'100%'}} objectFit= 'cover' alt="images"/></div></div>
     <div className ='images-all-card-new-port' id='imortant-Edit' data-aos ='zoom-in' ><div className='edit-image-style'><img src={img3} style={{width:"100%" ,height:'100%'}} objectFit= 'cover' alt="images"/></div></div>
     <div className ='images-all-card-new-port' id='imortant-Edit' data-aos ='zoom-in'><div className='edit-image-style'><img src={img4} style={{width:"100%" ,height:'100%'}} objectFit= 'cover' alt="images"/></div></div>
     </div>
     <div className='media-card-row' >
    
     <div className ='images-all-card-new-port' id='imortant-Edit'  data-aos ='zoom-in' ><div className='edit-image-style'><img src={img5} style={{width:"100%" ,height:'100%',}} objectFit= 'cover' alt="images"/></div></div>
     <div className ='images-all-card-new-port' id='imortant-Edit'  data-aos ='zoom-in' ><div className='edit-image-style'><img src={img6} style={{width:"100%" ,height:'100%'}} objectFit= 'cover' alt="images"/></div></div>
     <div className ='images-all-card-new-port' id='imortant-Edit'  data-aos ='zoom-in'><div className='edit-image-style'><img src={img7} style={{width:"100%" ,height:'100%'}} objectFit= 'cover' alt="images"/></div></div>
     <div className ='images-all-card-new-port' id='imortant-Edit'   data-aos ='zoom-in'><div className='edit-image-style'><img src={img8} style={{width:"100%",height:'100%'}} objectFit= 'cover' alt="images"/></div></div>
     </div>
     <div className='media-card-row' >
     <div className ='images-all-card-new-port' id='imortant-Edit'  data-aos ='zoom-in'><div className='edit-image-style'><img src={img9} style={{width:"100%",height:'100%',}} objectFit= 'cover' alt="images"/></div></div>
     <div className ='images-all-card-new-port' id='imortant-Edit'  data-aos ='zoom-in'><div className='edit-image-style'><img src={img10} style={{width:"100%",height:'100%'}} objectFit= 'cover' alt="images"/></div></div>
     <div className ='images-all-card-new-port' id='imortant-Edit'  data-aos ='zoom-in'><div className='edit-image-style'><img src={img11} style={{width:"100%",height:'100%'}} objectFit= 'cover' alt="images"/></div></div>
     <div className ='images-all-card-new-port' id='imortant-Edit'  data-aos ='zoom-in'><div className='edit-image-style'><img src={img12} style={{width:"100%",height:'100%'}} objectFit= 'cover' alt="images"/></div></div>
     </div>
     <div className='media-card-row' >
     <div className ='images-all-card-new-port' id='imortant-Edit' data-aos ='zoom-in'><div className='edit-image-style'><img src={img13} style={{width:"100%",height:'100%',}} objectFit= 'cover' alt="images"/></div></div>
     <div className ='images-all-card-new-port' id='imortant-Edit'  data-aos ='zoom-in'><div className='edit-image-style'><img src={img14} style={{width:"100%",height:'100%'}} objectFit= 'cover' alt="images"/></div></div>
     <div className ='images-all-card-new-port' id='imortant-Edit'  data-aos ='zoom-in'><div className='edit-image-style'><img src={img15} style={{width:"100%",height:'100%'}} objectFit= 'cover' alt="images"/></div></div>
     <div className ='images-all-card-new-port' id='imortant-Edit'  data-aos ='zoom-in'><div className='edit-image-style'><img src={img16} style={{width:"100%",height:'100%'}} objectFit= 'cover' alt="images"/></div></div>
     </div>
     </div>
      </>
      
    )
  }
export default New3dAnimationpor
