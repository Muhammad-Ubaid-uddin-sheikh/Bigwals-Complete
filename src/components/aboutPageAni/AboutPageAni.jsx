import React from 'react'
import './AboutPageAni.css'
import img1 from './about1.png'
import img2 from './newtwo.webp'
import img3 from './newthree.webp'
const AboutPageAni = () => {
  return (
    <div className='About-main'>
        <div className="row-about-new">
            <div className="colm-about-new">
               
               
            <div className="workprocgress">
                    <div className="boxloder"><span></span><span></span><span></span></div>
                    <div className="step-number"><div className="step-icon"><img src={img2} alt='image-logo'  width='70px' loading="lazy"  /><div className="step-number-box-number">01</div></div></div>
                        <div className="step-text-about"><h3 className="new-text-h3">Brand Strategy & Art Direction</h3><p className="paargraph-about-tt">Creating a higher spacing and how people move through a unique and impactful campaign.</p></div>
                    
                </div>

            </div>
               
            <div className="colm-about-new">
            <div className="workprocgress">
                    <div className="boxloder"><span></span><span></span><span></span></div>
                    <div className="step-number"><div className="step-icon"><img src={img1} alt='image-logo' width='70px' loading="lazy" /><div className="step-number-box-number">02</div></div></div>
                    <div className="step-text-about"><h3 className="new-text-h3">We're a team of creatives who are excited about unique ideas.</h3><p className="paargraph-about-tt">We’ve divided our work process into three simple steps to convert our customers’ concepts into artwork that perfectly speaks their brand story. Our team of professional designers and developers creates brand identities that pique the interest of their target audience..</p></div>
                </div>
            
            
            </div>

            <div className="colm-about-new">

            <div className="workprocgress">
                    <div className="boxloder"><span></span><span></span><span></span></div>
                    <div className="step-number"><div className="step-icon"><img src={img3} alt='image-logo'  width='40%' loading="lazy"  /><div className="step-number-box-number">03</div></div></div>
                        <div className="step-text-about"><h3 className="new-text-h3">UX/UI Design & Website/App Design</h3><p className="paargraph-about-tt">Get a regulatory oneven an enterprises such she and the got the did attributing and pushed.</p></div>
                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default AboutPageAni