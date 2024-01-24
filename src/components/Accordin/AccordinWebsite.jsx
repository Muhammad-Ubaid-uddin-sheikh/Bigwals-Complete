import * as React from 'react';
import './Accordin.css'
import accrdoinImage from './image-accordin.svg'
import Accordion from 'react-bootstrap/Accordion';

const AccordinWebsite = () => {
    return (
        <>

<div className="accordin-main-div">
        <div className="row-accordin-div">
        <div className="colm-accordn-two">
    <h2 className="accordin-h3">
        FAQ'S
    </h2>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" id="panel1a-header">
        <Accordion.Header>Do you provide e-commerce development and payment gateway integration?</Accordion.Header>
        <Accordion.Body>
        Our full-stack web development services offer multiple payment gateway integration services. Your consumers will have a smooth interaction while they safely make their purchases.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" id="panel1a-header">
        <Accordion.Header>What steps do you take to ensure my website's and user data's security?</Accordion.Header>
        <Accordion.Body>
        As the best web development agency, we take pride in ensuring maximum security for your website and user data. Our top priority is to follow secure coding practices and regularly update your software. As for user privacy, we guarantee data protection regulations with privacy features for processing personal data. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Can you optimize my website for search engines (SEO)?  </Accordion.Header>
        <Accordion.Body>
        Our top-notch SEO services allow us to optimize your website for engines easily. We have content writers, webmasters, and experts in their field to put your business on the first or second page.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Do I need to have a large budget to implement digital marketing strategies?</Accordion.Header>
        <Accordion.Body>
        Digital marketing is praised for being affordable for everyone. You can use a small budget to incorporate digital marketing into your business. However, the budget depends on the strategy you want to implement. 
              
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Can you provide ongoing website maintenance and support?</Accordion.Header>
        <Accordion.Body>
        We believe a business is only fully functional if its website is maintained and updated. We offer you complete ongoing support to make changes to the given feedback! 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Do you offer website redesign or website migration services?</Accordion.Header>
        <Accordion.Body>
        You ask we deliver! BigWals offer complete website revamp services, including website redesign and migration services. From switching the platform to upgrading it, we do it with perfection!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Can you create responsive websites that work well on mobile devices?</Accordion.Header>
        <Accordion.Body>
        Your website must work flawlessly across multiple platforms, devices, and screen sizes to win the game. We ensure your users have a smooth user experience while navigating around, making our SEO game strong. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>What is the cost of web development services?</Accordion.Header>
        <Accordion.Body>
        There is no fixed cost for website development services. The pricing depends on the project – a simple website with essential features and minimal pages costs around $5000 to $10K. At the same time, some can cost you even $150,000. Get your requirements straight to us for a quick quote!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
        <div className="colm-accordn-two"><div className="image-accordin"><img src={accrdoinImage} alt="accrodinimage" width='100%' /></div></div>
    
    
        </div>
    </div>



        </>
      )
}

export default AccordinWebsite