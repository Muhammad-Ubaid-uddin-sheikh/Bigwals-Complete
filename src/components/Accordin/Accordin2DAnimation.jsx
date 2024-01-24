import * as React from 'react';
import './Accordin.css'
import accrdoinImage from './image-accordin.svg'
import Accordion from 'react-bootstrap/Accordion';
const Accordin2DAnimation = () => {
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
        <Accordion.Header>What is the impact of 2D animation on sales?</Accordion.Header>
        <Accordion.Body>
        Animation gives you a competitive advantage above many other brands. The audience considers you more professional and authentic in the industry since you spend resources on creating content that intrigues the audience – showcasing that you care about them. <br></br>
            <div style={{paddingTop:'10px'}}> Besides, 2D animation brings your products or services to life in the most mesmerizing way – how people watch and interact with movies. People have a memorable brand recall when they witness your animated content staying forefront of their minds, leading to more outstanding leads and sales.   </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" id="panel1a-header">
        <Accordion.Header> How much does 2D animation cost?</Accordion.Header>
        <Accordion.Body>
        There are no set rates for 2D animation because every job is different. As a result, cost is determined by numerous aspects such as project complexity and length, amount of details and elements, animation style, and job quality. However, it may also be determined by the project's timetable flexibility. <br></br>
        <div style={{paddingTop:'10px'}}> To receive a fair price, ensure your criteria are clear so you can interact with any 2D animation company.   </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How long does it take to make a 2D animation video? </Accordion.Header>
        <Accordion.Body>
        There is no one answer – the duration to create a 2D animation primarily depends on the length of the project along with its complexities. As mentioned in our work process, several phases demand attention and time. Therefore, an animation can take a few hours, or some can take longer than that, even weeks. 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>What is the difference between 2D and 3D animation? </Accordion.Header>
        <Accordion.Body>
        Images were initially utilized to capture our interest, then movies, 3D, VR, and who knows what may come next. <br></br> <div style={{paddingTop:'10px'}}>3D animation is the process of producing three-dimensional moveable content. The animators employ high-end software to develop 3D models, characters, and everything else. These animations provide a realistic and engaging approach to presenting any viewpoint. </div><b></b>
        <div style={{paddingTop:'10px'}}>2D animation, on the other hand, is similar to creating a brochure or flyer. The artwork moves in two-dimensional space like a picture on your living room wall. Using 2D animation services, you do not have the potential to capture your audience's interest on a deeper level. They are far from realistic, yet they can be made with human hands.</div>
              
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
export default Accordin2DAnimation