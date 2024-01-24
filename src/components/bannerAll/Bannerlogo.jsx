import React from 'react'
import './BannerAll.css'
import 'aos/dist/aos.css'

const Bannerlogo = ({paragraphText,titleMaina,gifSpace}) => {
  return (
    <div>
        <div className='banner-main-div-logo' >
        <div className="row-banenr-all">
            <div className="colm-banner" data-aos ="fade-up"><div className="text-banner"><p className="banner-paragraph">
                {/* Our brand analysts guarantee that you will receive impeccable design and development solutions that best meet your branding needs at the best pricing. */}
{paragraphText}                </p><h1 className="banner-h4"> 
{/* Reasonable Pricing & Packaging for Businesses    */}{titleMaina}
</h1></div></div>
            <div className="colm-banner" data-aos ="fade-up" ><div className="image-banner" id='image-digial-animation'   ><img src={gifSpace} alt="bannerimg" width="100%" border-radius='50%' /></div></div>
        </div>
    </div>
    </div>
  )
}

export default Bannerlogo