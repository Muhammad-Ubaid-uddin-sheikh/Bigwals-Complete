import * as React from 'react';
import './Accordin.css'
import accrdoinImage from './image-accordin.svg'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

export default function SimpleAccordion() {
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
        <Accordion.Header>What services does BigWals offer?</Accordion.Header>
        <Accordion.Body>
        BigWals offers a pool of internet marketing and development services, from building your brand from scratch to doing wonders. We have the experts to create a logo for your company and make animated videos. Our studio is also equipped with developers and marketers with practical knowledge of making an impact in the digital world.
Here is a list of our services:<div style={{paddingTop:'7px'}}><Link id='link-hover-color-chaned' style={{textDecoration:'none'}} to={'/web-design-and-development-services'}>•	Website design and development </Link></div><div style={{paddingTop:'7px'}}><Link  id='link-hover-color-chaned' style={{textDecoration:'none'}} to={'/logo-designing-services'}>•	Branding </Link></div><Link  id='link-hover-color-chaned' style={{textDecoration:'none'}} to={'/2d-animation-services'}><div style={{paddingTop:'7px'}}>•	Video and animation</div></Link>  <Link  id='link-hover-color-chaned' style={{textDecoration:'none'}} to={"/digital-marketing-agency-usa"}><div style={{paddingTop:'7px'}}>•	Digital Marketing</div></Link>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" id="panel1a-header">
        <Accordion.Header>How can digital marketing benefit my business?</Accordion.Header>
        <Accordion.Body>
        It is a question that leads you to unimaginable success. Digital marketing offers you the sensation that no other form of marketing does. It provides you a gateway to sell online to millions of people worldwide across several countries. 
Here are a few benefits that would open your vision:<br></br>
<div style={{paddingTop:'10px'}}>•	Through digital marketing, your business gets exposed to the world. Word of mouth spreads even across borders.</div>
<div style={{paddingTop:'10px'}}>•	Digital marketing enables your business to communicate effectively with the audience and solve their problems more efficiently.</div>
<div style={{paddingTop:'10px'}}>•	With effective digital marketing, you can exponentially grow while spending less. Take the example of doing SEO and having organic visitors to your website that are potential customers.</div>
<div style={{paddingTop:'10px'}}>•	Besides, you get to analyze what is working and what is not for your brand through metrics such as traffic, conversion rates, consumer behavior, etc.</div>
<div style={{paddingTop:'10px'}}>•	Most importantly, it gives you several channels to make your brand visible and establish authority among all others!</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> Why should I choose BigWals for my digital marketing needs?  </Accordion.Header>
        <Accordion.Body>
        BigWals bring talent from all across industries to meet your specialized needs. Whether you are running an educational institute or a healthcare organization, we have the right digital marketing expert for you. 
        <div style={{paddingTop:'10px'}}>We care about your insecurity about having industry professionals; we provide you with that. Besides, our comprehensive set of services allows us to cover all aspects of online marketing, including development and data analysis. BigWals proudly take a data-driven approach and decisions creatively with transparent communication to take your band to a new height!</div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Can BigWals help improve my website's search engine rankings?</Accordion.Header>
        <Accordion.Body>
        We are not optimistic about our goals – BigWals create a full-proof plan for SEO that changes the entire shape of your rankings. Our auditing experts take you along the SEO journey and explain your existing flaws for improvement. <br></br>
        <div style={{paddingTop:'10px'}}>From keyword research to fixing technical issues of your website, our staff knows what they are doing. The strategists are the mastermind behind the successful SEO portfolio of BigWals; they bring you up in a considerable time with powerful content marketing ideas!</div>
              
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>How do you measure the success of digital marketing campaigns?</Accordion.Header>
        <Accordion.Body>
        If you want results, we will give them to you! BigWals have the specialists to measure the success of digital marketing efforts by tracking KPIs aligned with your goals. Besides, they follow conventional vital metrics, including website traffic, ROI, engagement, etc. <br></br>
        <div style={{paddingTop:'10px'}}>Define clear goals, and our expert team is ready to launch digital marketing campaigns. Not only will we do ongoing tracking, but we will also offer you to make informed decisions with the help of data analysis of the reports. We optimize your strategy that fits the internet and your audience!</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>How can I get started with BigWals?</Accordion.Header>
        <Accordion.Body>
        To get started with internet marketing or development services, tap the chat now button at the bottom of your screen. You can also reach out to our social media platforms.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
        <div className="colm-accordn-two"><div className="image-accordin"><img src={accrdoinImage} alt="accrodinimage" width='100%' /></div></div>
    
    
        </div>
    </div>







    </>
  );
}