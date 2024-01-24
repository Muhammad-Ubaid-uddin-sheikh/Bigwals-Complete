import * as React from 'react';
import './Accordin.css'
import accrdoinImage from './image-accordin.svg'
import Accordion from 'react-bootstrap/Accordion';

const AccordinLogoBranding = () => {
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
            <Accordion.Header>Do you offer revisions if I am unsatisfied with the initial logo design?</Accordion.Header>
            <Accordion.Body>
            We do not guarantee to create a final piece at once – we respect your objections and will try our best to meet your expectations in minimum revisions. Your dedicated team will efficiently deal with your modifications at any time of the day – contact us!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" id="panel1a-header">
            <Accordion.Header>What is the cost of logo designing services?</Accordion.Header>
            <Accordion.Body>
            Like our other services, we maintain transparency and an apposite pricing policy. Therefore, we cannot convey a fixed quote like others. It is easy with your clear intentions – contact us now with your ideas and requirements to get a reasonable price for a unique brand identity. 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can you design a logo that reflects my brand's personality and values? </Accordion.Header>
            <Accordion.Body>
            It is what we stand for – we offer logo design services near me that create designs resonating with your audience while preserving your brand's personality and values. BigWals never seizes to impress you with its exceptional creations and cognitive skills used to craft a phenomenal logo that speaks for your brand!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Can you assist with trademarking my logo design?</Accordion.Header>
            <Accordion.Body>
            Our design policy prioritizes creating unique products and offers fully custom services that you own. We make the trademarking logos easy for you to enjoy with your brand identity thoroughly. You can rely on us for any paperwork to be done with your little collaboration to become the sole owner of the logo. Get started to hassle-free own an entity!
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

export default AccordinLogoBranding