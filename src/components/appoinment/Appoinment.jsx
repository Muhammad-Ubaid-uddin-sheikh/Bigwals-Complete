
import image from './Asset 5.png'
import './Appoinment.css'
import { Button} from '@mui/material'
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
const Result = ()=>{
  return(
    <p className="result-paragraph"> <b><i>Thanks</i> &#128512;&#128512; ;;</b> &nbsp; &nbsp; &nbsp;   Your Message Has Been Send . We Will Contact You Soon </p>
  )
}
const Appoinment = () => {
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
    <div className='Appoinment-Main'>
        <div className="row-appoint">
            <div className="com-appointme" id ="padding-propeties-colm-courosel"><img src={image} alt="appointment-image" width="100%" object-fit="cover" /></div>
            <div className="com-appointme"><h1 className="appoint-h1">WRITE TO US !</h1><p className="appoinment-p">We are always happy to hear from you! Please complete the form and we will get in touch with you.</p>
            <div className="form-appoinment" style={{positon:'relative'}}>
                <form ref={form} onSubmit={sendEmail} >
                <input name='name' type="text" placeholder='Your Name' required className='appoinmment-input' onFocus='disable'  />
                <input name='email' type="Email" placeholder='Your Email' required className='appoinmment-input'  />
                <input name='phonenumber' type="number" placeholder='Phone' required className='appoinmment-input' />
                <input name='Services' type="text" placeholder='Service Your Required' required className='appoinmment-input'  />
                <textarea name='message' id='textarea-appoimnet' className='appoinmment-input' rows={3} placeholder='Message' />
                <div className="row-makng-allert">{result ? <Result/> : null}</div>
                <Button type='submit' id='button-Appoinmet'>Send Message</Button>
                
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Appoinment