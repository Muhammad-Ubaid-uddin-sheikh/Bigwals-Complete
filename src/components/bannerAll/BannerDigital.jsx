import React from 'react'
import './BannerAll.css'
import 'aos/dist/aos.css'

const BannerDigital = ({paragraphText,titleMaina,gifSpace}) => {
  return (
    <div>
        <div className='banner-main-digital-website'>
        <div className="row-banenr-all">
            <div className="colm-banner" data-aos ="fade-up"><div className="text-banner"><p className="banner-paragraph">
{paragraphText}                </p><h1 className="banner-h4"> 
{titleMaina}
</h1></div></div>
            <div className="colm-banner" data-aos ="fade-up"><div className="image-banner" ><img src={gifSpace} alt="bannerimg" width="100%" /></div></div>
        </div>
    </div>
    </div>
  )
}

export default BannerDigital