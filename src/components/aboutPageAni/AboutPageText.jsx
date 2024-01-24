import React from 'react'
// import aboutnew from './about11.avif'
import aboutnew from './about1.png'
import about from './53922-removebg-preview.png'
import './AboutPageAni.css'
const AboutPageText = () => {
  return (
   <>
        <div className="main-about-page-cont">
            <h1 className="main-about-h1-cont">
            About BigWals - Empowering Businesses<br></br> through Technology

            </h1>
            <p className="main-about-cont-p">
            At BigWals, we are a team of passionate technologists dedicated to empowering businesses of all sizes. With years of experience in the industry, we have built a strong reputation for delivering exceptional IT solutions tailored to our clients' unique needs.<br></br>
            Our mission is to drive innovation and provide top-notch services across various domains, including software development, web design, mobile app development, cloud computing, cybersecurity, and IT consulting. We pride ourselves on our ability to understand our clients' challenges and provide scalable, efficient, and cost-effective solutions that propel their growth.
            </p>
            <p className="main-about-cont-p">
            Barly pleasure rationally encounter consequences that extremely painful desires to obtain pain of itself porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem usint enim ad minima
            </p>
            <div className="row-about-images">
                <div className="colm-abbout-images"> <h3 className="about-images">Get in Touch with BigWals - Let's Transform Your Business</h3><p className="main-about-cont-p">
                Provide contact information and a contact form for potential clients to reach out for inquiries or consultations. Highlight BigWals' commitment to prompt and personalized responses, ensuring a seamless customer experience.
           <li className="about-about">Remember to tailor the content to align with BigWals' specific expertise, target audience, and brand identity. Additionally, consider incorporating visually appealing elements such as images, infographics, and testimonials to enhance the overall presentation.</li>
            </p> </div>
                <div className="colm-abbout-images"><div className="iamges-width-div" id='images-width-div-new'><img src={aboutnew} alt="images-about" width='100%' /></div></div>
            </div>
    </div>
    <div className='background-oveley-logobrandin'>
<div className="row-about-images" id='row-about-ukimahe-uneverse'>

<div className="colm-abbout-images"><div className="iamges-width-div"><img src={about} alt="images-about" width='100%' /></div></div>
<div className="colm-abbout-images"> <h3 className="about-images">Our Comprehensive IT Solutions</h3><p className="main-about-cont-p" style={{color:'black'}}>
Describe the range of services offered by BigWals, including software development, web design and development, mobile app development, cloud computing, cybersecurity, IT consulting, and more. Emphasize the company's ability to tailor solutions to meet clients' unique needs, ensuring optimal efficiency and productivity.
<li className="about-about" style={{color:'black'}}>Software Development: We specialize in developing custom software applications that streamline your business operations, enhance productivity, and provide a competitive edge.</li>
<li className="about-about" style={{color:'black'}}>Web Design and Development: Our expert web designers and developers create visually stunning, user-friendly websites that leave a lasting impression on your visitors and drive engagement.</li>
</p> </div>
</div>
</div>
</>
  )
}

export default AboutPageText