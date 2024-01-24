import * as React from 'react';
import './Accordin.css'
import accrdoinImage from './image-accordin.svg'
import Accordion from 'react-bootstrap/Accordion';

const AccordinDigital = () => {
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
        <Accordion.Header>Can digital marketing help my business generate leads and increase sales?</Accordion.Header>
        <Accordion.Body>
        When you effectively approach your target audiences, you can quickly turn your products and services into cash. Digital Marketing allows you to fill the gap and nurture relationships with your audience.<br></br>
        <div style={{paddingTop:'10px'}}>    You can easily elevate your ROI with excellent content and data-driven digital marketing strategies. You can get maximum leads and sales from your business while staying consistent with your digital marketing efforts.</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" id="panel1a-header">
        <Accordion.Header>How do you measure the success of digital marketing campaigns?</Accordion.Header>
        <Accordion.Body>
        There are several tools to measure and analyze the progress of digital marketing campaigns. However, there are several metrics to track key performance indicators (KPIs) such as website traffic, conversion rate, engagement, and much more. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What is the typical duration of a digital marketing campaign?  </Accordion.Header>
        <Accordion.Body>
        You cannot truly forecast or tell a digital marketing campaign's "typical" duration. Digital marketing campaigns are like real-life movements, an ongoing process that ends with a conclusion. A campaign duration can be short or long, depending on the goals and budget.<br></br>
        <div style={{paddingTop:'10px'}}>    The campaign duration is more prolonged if you want to build a brand from scratch, create awareness, and increase consumer loyalty. However, the campaign duration will likely be shorter if you are only looking to generate leads and increase traffic.</div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Do I need to have a large budget to implement digital marketing strategies?</Accordion.Header>
        <Accordion.Body>
        Digital marketing is praised for being affordable for everyone. You can use a small budget to incorporate digital marketing into your business. However, the budget depends on the strategy you want to implement. 
              
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>How do you stay current with digital marketing trends and algorithm changes?</Accordion.Header>
        <Accordion.Body>
        To win in this tough competition, you need to stay updated with the evolving moods and interests of the audience. We keep updated with the latest algorithms and industry trends by reading publications and news online.  <br></br>
        <div style={{paddingTop:'10px'}}>    In addition, our digital marketing enthusiasts attend events that cover relevant discussions. We follow industry-leading and thoughtful leaders to learn from them. There are many ways to keep educating yourself; the choice is yours!</div>
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

export default AccordinDigital