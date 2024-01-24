 import { Button } from '@mui/material'
import './ContactFormPage.css'
import MailIcon from '@mui/icons-material/Mail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { LocationCity } from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
const Result = ()=>{
  return(
    <p className="result-paragraph"> <b><i>Thanks</i> &#128512;&#128512; ;;</b> &nbsp; &nbsp; &nbsp;   Your Message Has Been Send . We Will Contact You Soon </p>
  )
}
const ContactFomPage = () => {
    const [result , showresult] = useState(false) 
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_leu1zbn', 'template_s35g9fa', form.current, 'Sy_NA9jStjnQHXxOJ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showresult(true)        
    };
  return (
    <div className='contact-page-form'> 
    <div className='pricing-sec-main-div'  data-aos ="fade-up">
<div className='heading-home-page'>
<p className='top-first-heading'>Keep In Touch</p>
<h3 className='sec-heading-home-page'>Contact Us</h3>
</div>
</div>
         <div className="row-contact-page-row">

         <div className="com-contact-form">
                <p className="next-pr">
                Our team of industry-proven business analysts is here to help you re-invent your brand with our creative approach of design and development. We ensure to provide you free consultation from our top-tier branding experts who are proficient in offering digital solutions tailored to your business needs. We take complete hold of your project from inception of unique ideas to its effective execution. Got a project to discuss? Contact us now.
                </p>
                <ul className="contact-form-ul">
                    <li className="conact-form-li-icons">
                     <div className="span-div-icon">   <span className="contact-form-span"><MailIcon id='icon-span-contact'/> support@bigwals.com</span></div>
                     <div className="span-div-icon"> <span className="contact-form-span"><PhoneInTalkIcon id='icon-span-contact'/>+1 9016467815</span></div>
                     <div className="span-div-icon"> <span className="contact-form-span"><LocationCity  id='icon-span-contact'/>Winter Park, FL, USA</span></div>
                    </li>
                </ul>
            </div>
            <div className="com-contact-form">



                
                <div className="contact-form-sec">
                    <h2 className="get-in-h2">
                        Get In Touch
                    </h2>
                    <form ref={form} onSubmit={sendEmail} >
                <input name='name' type="text" placeholder='Your Name' className='appoinmment-input' onFocus='disable' />
                <input name='email' type="Email" placeholder='Your Email' className='appoinmment-input' />
                <input name='phonenumber' type="number" placeholder='Phone' className='appoinmment-input'/>
                <input name='Services' type="text" placeholder='Service Your Required' className='appoinmment-input'  />
                <textarea name='message' id='textarea-appoimnet' className='appoinmment-input' rows={3} placeholder='Message' />
                <div className="row-makng-allert">{result ? <Result/> : null}</div>
                <Button id='button-Appoinmet'>Send Message</Button>
                </form>
                </div>
            </div>
           
         </div>
    </div>
  )
}

export default ContactFomPage