import * as React from 'react';
import './SecTabForHome.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tabss from 'react-bootstrap/Tab';

function TabPanel() {

  return (
<>
    <Tabss.Container id="left-tabs-example" defaultActiveKey="Logo-Services">
    <Row>
      <Col sm={3}>
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="Logo-Services">Logo Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Branding-Services">Branding Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Website-Services">Website Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Digital-Marketing-Services">Digital Marketing Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="IT-Consulting">IT Consulting</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2D-Animation-Services">2D Animation Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3D-Animation-Services">3D Animation Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Application-Development">Application Development</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Software-Development">Software Development</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={9}>
        <Tabss.Content>
        <Tabss.Pane eventKey="Logo-Services">
          
        <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>Logo Design Agency</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        Having a unique identity makes you credible and reputable among consumers. A great logo makes a powerful brand – BigWals know how to communicate with the audience via graphical, visually appealing elements. With our experts on board, you can witness how a brand becomes successful and recognizable worldwide. We bring the right tone to your brand for practical impact and conversions!
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#Logo-Design-Services'>Logo Design Services</a></li>
              <li><a  href='#Corporate-Identity-Services'>Corporate Identity Services</a></li>
              <li><a  href='#Print-Media-Design'>Print Media Design</a></li>
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='#Campaign-Design-Services'>Campaign Design Services</a></li>
          
              </div>

 </ul>
         
            <li  id='Logo-Design-Services' > <b className='bold-heading'  >Logo Design Services </b> <p className='paragraph-sec-tablsst'>Do you need help to represent your brand in an elegant, sleek, and aesthetic way? Get our expert logo design services to craft unique and memorable eye-catchy stuff. We help you make a lasting impression through our alluring designs!</p></li>
            
            <li  id='Corporate-Identity-Services' > <b className='bold-heading'   >Corporate Identity Services</b> <p className='paragraph-sec-tablsst'>Do you need help to present your business well to the public? Let us handle your corporate identity for a better cause. We have the expertise to keep the cultural values, brand vision, and goals intact! </p></li>
            
            <li  id='Print-Media-Design' > <b className='bold-heading'   >Print Media Design </b> <p className='paragraph-sec-tablsst'>Are you still printing? BigWals offers intriguing print media design services that include brochures, flyers, and more. Our design experts enable you to deliver you the message effectively. We work closely to keep your brand voice and image consistent!</p></li>
          
            <li  id='Campaign-Design-Services' > <b className='bold-heading'   >Campaign Design Services  </b> <p className='paragraph-sec-tablsst'>Are your marketing campaigns effective? We help you create impactful campaign designs that strike a sense of urgency in them. Our experienced creative managers supercharge your innovative concepts and incorporate visual assets for a cohesive campaign.</p></li>
    
           
            </div>
       
        </div>
      </div>
          
          </Tabss.Pane>
          <Tabss.Pane eventKey="Branding-Services">
            
          <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>Branding Services</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        The significance of branding in creating a strong and memorable identity for your business is what we prior. Our comprehensive branding services encompass every aspect of your brand's visual and strategic elements, allowing us to help you establish a powerful brand presence that resonates with your target audience.
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#BrandsEssence' >Brand's Essence</a></li>
              <li><a  href='#Craft-a-Brand-Strategy'>Craft an Strategy</a></li>
              <li><a  href='#Design-an-Engaging'>Design an Engaging</a></li>
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='#Develop-Consistent-Brand-Messaging'>Develop Consistent Brand Messaging</a></li>
              <li><a  href='#Implement-Brand-Guidelines-for-Cohesion'>Implement Brand Guidelines for Cohesion</a></li>
              <li><a  href='#Foster-Brand-Growth-and-Adaptability'>Foster Brand Growth and Adaptability</a></li>
              </div>

 </ul>
         
            <li  id='BrandsEssence' > <b className='bold-heading'  >Discover Your Brand's Essence </b> <p className='paragraph-sec-tablsst'>Uncover the core essence of your brand through in-depth research and analysis. We delve into your brand's values, target audience, and competitive landscape to understand what makes your business unique. By identifying your brand's essence, we lay the foundation for a powerful and authentic brand identity.</p></li>
            
            <li  id='Craft-a-Brand-Strategy' > <b className='bold-heading'  >Craft a Compelling Brand Strategy </b> <p className='paragraph-sec-tablsst'>Develop a strategic roadmap that guides your brand's positioning and messaging. We work closely with you to define your brand's mission, vision, and unique value proposition. Our team crafts a compelling brand narrative that resonates with your target audience and sets you apart from competitors.</p></li>
            
            <li  id='Design-an-Engaging' > <b className='bold-heading'  >Design an Engaging Visual Identity </b> <p className='paragraph-sec-tablsst'>Our talented designers bring your brand to life visually. From logo design to color palettes and typography, we create a cohesive visual identity that captures the essence of your brand. By incorporating your brand's personality into the design elements, we ensure that your visual identity resonates with your audience.</p></li>
          
            <li  id='Develop-Consistent-Brand-Messaging' > <b className='bold-heading'  >Develop Consistent Brand Messaging  </b> <p className='paragraph-sec-tablsst'>Consistency is key in effective brand communication. We craft compelling messaging that aligns with your brand's values and resonates with your target audience. Whether it's creating taglines, brand stories, or elevator pitches, we ensure that your messaging consistently reflects your brand's essence across various marketing channels.</p></li>
            <li  id='Implement-Brand-Guidelines-for-Cohesion' > <b className='bold-heading'  >Implement Brand Guidelines for Cohesion </b> <p className='paragraph-sec-tablsst'>Brand guidelines serve as a roadmap for maintaining a consistent brand presence. We create comprehensive brand guidelines that outline the proper usage of your visual elements, tone of voice, and brand messaging. These guidelines ensure that your brand is represented consistently across all touchpoints, reinforcing recognition and trust.</p></li>
            <li  id='Foster-Brand-Growth-and-Adaptability' > <b className='bold-heading'  >Foster Brand Growth and Adaptability</b> <p className='paragraph-sec-tablsst'> A successful brand is one that evolves with the changing market dynamics. We help you develop strategies to foster brand growth and adaptability. Through ongoing brand monitoring and analysis, we identify opportunities for brand expansion, target audience refinement, and brand message adaptation, ensuring your brand remains relevant and impactful.</p></li>

           
            </div>
       
        </div>
      </div>
            
            </Tabss.Pane>
          <Tabss.Pane eventKey="Website-Services">

            <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>Website Design and Development</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        You can also create a website. But can you make a highly responsive website that converts visitors into consumers? BigWals is a web application development agency that creates flawless custom websites for everyone looking to make an impactful online presence. A responsive and intuitive website can bring fortune to a business since nobody likes a glitchy. Take the digital world by storm with us!
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#E-Commerce-Development'>E-Commerce Development</a></li>
              <li><a  href='#Shopify-Web-Development'>Shopify Web Development</a></li>
              <li><a  href='#YouTube-Marketing'>React Development Services</a></li>
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='#WordPress-Development'>WordPress Development</a></li>
              <li><a  href='#CMS-Development-Services'>CMS Development Services</a></li>
              <li><a  href='#Amazon-Marketing-Services'>HTML Development Services</a></li>
              </div>

 </ul>
         
            <li  id='E-Commerce-Development' > <b className='bold-heading'  >E-Commerce Website Development </b> <p className='paragraph-sec-tablsst'>Online shopping has become mainstream, and with thousands of stores, competition is at its peak. So how do you win customers? Get our e-commerce website development services for a flawless aesthetic online store that brings conversions!</p></li>
            
            <li  id='Shopify-Web-Development' > <b className='bold-heading'  >Shopify Web Development</b> <p className='paragraph-sec-tablsst'>Shopify has been favored among drop shippers and other online stores. If you are considering making your way to it, BigWals offers high-end Shopify development services. We make your business stand up from scratch, whether a small one or an enterprise.</p></li>
            
            <li  id='YouTube-Marketing' > <b className='bold-heading'  >YouTube Marketing </b> <p className='paragraph-sec-tablsst'>Do you need help to win loyal subscribers on YouTube? Your content is fantastic, but it needs the right audience. Get our experts' hands on your YouTube channel to make the most out of your excellent content. Get subscribers that wait for your videos!</p></li>
          
            <li  id='WordPress-Development' > <b className='bold-heading'  >WordPress Development </b> <p className='paragraph-sec-tablsst'>WordPress offers you all of it, whether you want endless personalization or optimization. And BigWals offers you WordPress web development services with high-end maintenance services. We have experts with proficient knowledge of similar CMS platforms.</p></li>
            <li  id='CMS-Development-Services' ><b  className='bold-heading'  >CMS Development Services </b> <p className='paragraph-sec-tablsst'>Content Management Systems are getting famous lately due to their intuitiveness and control over the entire website. Get our experienced team of developers for a CMS development project and drive business growth!</p></li>
            <li  id='Amazon-Marketing-Services' > <b className='bold-heading'  >Amazon Marketing Services</b> <p className='paragraph-sec-tablsst'>Whether you are selling your brand on Amazon or doing dropshipping, BigWals don't care. Our Amazon marketing experts always strive for a new project, a new journey to start – to take your brand to a new level!</p></li>

           
            </div>
       
        </div>
      </div>
            
            </Tabss.Pane>
          <Tabss.Pane eventKey="Digital-Marketing-Services">
            
          <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>Digital Marketing</h2> 
        <div className="p">
        <p className="paragraph-sec-tablsst">
        BigWals is the best internet marketing firm with talent that has worked across several industries to elevate various brands. We are a digital marketing agency that utilizes the latest trends in Internet marketing to make businesses reach their full potential. Our focus is minimizing your marketing expenses while providing maximum leads and sales. BigWals bring you the best digital marketing and SEO agency in town!
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#Social-Media-Marketing'>Social Media Marketing</a></li>
              <li><a  href='#Influencer-Marketing'>Influencer Marketing</a></li>
              <li><a  href='#YouTube-Marketing'>YouTube Marketing</a></li>
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='#PPC-Marketing'>PPC Marketing</a></li>
              <li><a  href='#Seo'>Search Engine Optimization (SEO)</a></li>
              <li><a  href='#Amazon-Marketing-Services'>Amazon Marketing Services</a></li>
              </div>

 </ul>
         
            <li  id='Social-Media-Marketing' > <b className='bold-heading'  >Social Media Marketing </b> <p className='paragraph-sec-tablsst'>Facebook, Instagram, and TikTok have become the new normal to entertain us. You are not wasting time there, nor are we. BigWals is ready to take your business to the next level with the best social media marketing managers.</p></li>
            
            <li  id='Influencer-Marketing' > <b className='bold-heading'  >Influencer Marketing </b> <p className='paragraph-sec-tablsst'>The creator's economy is booming more than ever, thanks to influencers helping businesses reach their target audience. Be part of the skyrocketing economy with our influencer marketing services and connect with the audience.</p></li>
            
            <li  id='YouTube-Marketing' > <b className='bold-heading'  >YouTube Marketing </b> <p className='paragraph-sec-tablsst'>Do you need help to win loyal subscribers on YouTube? Your content is fantastic, but it needs the right audience. Get our experts' hands on your YouTube channel to make the most out of your excellent content. Get subscribers that wait for your videos!</p></li>
          
            <li  id='PPC-Marketing' > <b className='bold-heading'  >PPC Marketing  </b> <p className='paragraph-sec-tablsst'>Pay-per-click makes you spend money to get orders but also makes you scared of the loss. We treat your business and budget as if it is ours. Our PPC specialists have advanced knowledge of running ads that bring the highest ROI.</p></li>
            <li  id='Seo' > <b className='bold-heading'  >Search Engine Optimization (SEO) </b> <p className='paragraph-sec-tablsst'>Everyone is doing SEO, but not all of them understand the intricacies of the search engine. We – the best SEO agency in the USA- have seasoned SEO experts who employ the best and latest strategies to help you achieve the rank you crave!</p></li>
            <li  id='Amazon-Marketing-Services' > <b className='bold-heading' >Amazon Marketing Services</b> <p className='paragraph-sec-tablsst'>Whether you are selling your brand on Amazon or doing dropshipping, BigWals don't care. Our Amazon marketing experts always strive for a new project, a new journey to start – to take your brand to a new level!</p></li>

           
            </div>
       
        </div>
      </div>
            
            </Tabss.Pane>
          <Tabss.Pane eventKey="IT-Consulting">
           
          <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>IT Consulting</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        BigWals is a software agency specializing in IT consultation. Our experienced IT consultants provide expert guidance and tailored solutions to help organizations leverage technology effectively for their business objectives.
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#Strategic-Alignment'>Strategic Alignment</a></li>
              <li><a  href='#Seamless-Integration'>Seamless Integration</a></li>
            
          
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='#ustomized-Solutions'>Customized Solutions</a></li>
              <li><a  href='#Security-and-Efficiency'>Security and Efficiency</a></li>
              
              </div>

 </ul>
         
            <li  id='Strategic-Alignment' > <b className='bold-heading'  >Strategic Alignment </b> <p className='paragraph-sec-tablsst'>We align technology strategies with your business goals, ensuring that your technology investments are in sync with your overall objectives.</p></li>
            
            <li  id='Seamless-Integration' > <b className='bold-heading'  >Seamless Integration </b> <p className='paragraph-sec-tablsst'>Our team excels in integrating software applications, databases, and systems, optimizing workflow and enhancing productivity.</p></li>
            
            <li  id='ustomized-Solutions' > <b className='bold-heading'  >Customized Solutions </b> <p className='paragraph-sec-tablsst'> We design and develop customized software solutions that address your specific business needs, providing you with a competitive advantage.
</p></li>
          
            <li  id='Security-and-Efficiency' > <b className='bold-heading'  >Security and Efficiency </b> <p className='paragraph-sec-tablsst'>BigWals helps strengthen your cybersecurity posture, assesses risks, implements robust security measures, and streamlines operations for optimal efficiency.</p></li>
            

           
            </div>
       
        </div>
      </div>
           
            </Tabss.Pane>
          <Tabss.Pane eventKey="2D-Animation-Services">
          <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>2D Animation Services</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        At Bigwals, we are experts in creating visually stunning and captivating 2D animations to bring your visions to life. With a team of skilled animators and storytellers, illustrators, and animators we are committed to providing top-quality animation solutions for a broad range of purposes and industries.
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#Creativity-and-Expertise'>Creativity and Expertise</a></li>
              <li><a  href='#Tailored-Solutions'>Tailored Solutions</a></li>
              <li><a  href='#Compelling-Storytelling'>Compelling Storytelling</a></li>
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='#High-Quality-Animation'>High-Quality Animation</a></li>
              <li><a  href='#Effective-Communication'>Effective Communication</a></li>
              <li><a  href='#Timely-Delivery'>Timely Delivery</a></li>
              </div>

 </ul>
         
            <li  id='Creativity-and-Expertise' > <b className='bold-heading'  >Creativity and Expertise </b> <p className='paragraph-sec-tablsst'>Our team is made up of skilled and experienced creators who love their work. We blend artistic flair with technical knowledge to create 2D animations that aren't just visually appealing, but also convey the message clearly.</p></li>
            
            <li  id='Tailored-Solutions' > <b className='bold-heading'  >Tailored Solutions </b> <p className='paragraph-sec-tablsst'>We understand that every project is unique, which is why we offer personalized animation solutions tailored to your specific requirements. Whether you need an explainer video, promotional animation, educational content, or anything in between, we collaborate closely with you to understand your vision and deliver animations that exceed your expectations</p></li>
            
            <li  id='Compelling-Storytelling' > <b className='bold-heading'  >Compelling Storytelling </b> <p className='paragraph-sec-tablsst'>At the heart of every successful animation lies a compelling story. Our team of storytellers works closely with you to develop captivating narratives that resonate with your target audience. We carefully craft scripts, storyboards, and character designs to ensure that your message is conveyed in an engaging and memorable way.</p></li>
          
            <li  id='High-Quality-Animation' > <b className='bold-heading'  >High-Quality Animation  </b> <p className='paragraph-sec-tablsst'>We pride ourselves on delivering animations of the highest quality. Using industry-leading software and tools, we create smooth and fluid animations with attention to detail. From character animation to background designs and special effects, we strive for excellence in every frame.</p></li>
            <li  id='Effective-Communication' > <b className='bold-heading'  >Effective-Communication </b> <p className='paragraph-sec-tablsst'>We believe in fostering strong client relationships built on effective communication. Throughout the animation process, we keep you involved and informed, providing regular updates and seeking your feedback to ensure that the final product aligns with your vision. Your satisfaction is our priority.</p></li>
            <li  id='Timely-Delivery' > <b className='bold-heading'  >Timely Delivery</b> <p className='paragraph-sec-tablsst'>We understand the importance of meeting deadlines. With our streamlined production process and efficient workflow, we ensure that your animation project is delivered within the agreed timeframe, without compromising on quality.</p></li>

           
            </div>
       
        </div>
      </div>
            </Tabss.Pane>
          <Tabss.Pane eventKey="3D-Animation-Services">
          <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>3D Animation Services</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        Videos are the most captivating way to attract eyes. One way or another, you have to upscale your content strategies with impeccable  3D animation services. BigWals have inhuman creative heads passionate about turning visions and imaginations into reality. Our experts have all the necessary skills to run the latest technologies and create great animations flawlessly.
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#Product-Demo-Animation'>Product Demo Animation</a></li>
              <li><a  href='#Explainer-Video-Services'>Explainer Video Services </a></li>
              <li><a  href='#3D-Animation-Services'>3D Animation Services </a></li>
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='Digital-Video-Commercials'>Digital Video Commercials (DVCs)</a></li>
              <li><a  href='#Corporate-Video-Services'>Corporate Video Services </a></li>
              <li><a  href='Documentary-Video-Services'>Documentary Video Services</a></li>
              </div>

 </ul>
         
            <li  id='Product-Demo-Animation' > <b className='bold-heading'  >Product Demo Animation</b> <p className='paragraph-sec-tablsst'>Educating your consumers about your products is indispensable to growing your brand and having loyal customers. BigWals truly knows how to showcase your product in multi-dimensional perspectives using advanced tools.</p></li>
            
            <li  id='Explainer-Video-Services' > <b className='bold-heading'  >Explainer Video Services  </b> <p className='paragraph-sec-tablsst'>Educating your consumers about your products is indispensable to growing your brand and having loyal customers. BigWals truly knows how to showcase your product in multi-dimensional perspectives using advanced tools.</p></li>
            
            <li  id='3D-Animation-Services' > <b className='bold-heading'  > 3D Animation Services  </b> <p className='paragraph-sec-tablsst'>You have an exciting idea and imagination, but do you have the right person to convert it? BigWals is equipped with skilled artists who effectively communicate your message via professional 3D animation services. </p></li>
          
            <li  id='Digital-Video-Commercials' > <b className='bold-heading'  >Digital Video Commercials (DVCs) </b> <p className='paragraph-sec-tablsst'>We create DVCs that are not aesthetically appealing but also make an impact and have meaning to them. BigWals creative designers and art directors craft a story that showcases your brand's tone and values.</p></li>
            <li  id='Corporate-Video-Services ' > <b className='bold-heading'  >Corporate Video Services  </b> <p className='paragraph-sec-tablsst'>Corporate videos have been widely used to represent a brand to the public in a creative way. BigWals top-tier marketers develop a sketch of a corporate video for your brand that engages the audience and opens doors for communication with the audience. </p></li>
            <li  id='Documentary-Video-Services' > <b className='bold-heading'  >Documentary Video Services</b> <p className='paragraph-sec-tablsst'>Whether you are selling your brand on Amazon or doing dropshipping, BigWals don't care. Our Amazon marketing experts always strive for a new project, a new journey to start – to take your brand to a new level!</p></li>

           
            </div>
       
        </div>
      </div>
            </Tabss.Pane>
          <Tabss.Pane eventKey="Application-Development">
          <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>Application Development</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        Unlock the true potential of your business with our top-notch application development services. As a leading Application Development Company, we specialize in creating customized, innovative, and high-performance applications that cater to the unique needs of our clients. Whether you're a startup, a small business, or a large enterprise, we have the expertise and experience to transform your ideas into reality.
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#Customized-App-Solutions'>Customized App Solutions </a></li>
              <li><a  href='#Native-and-Cross-Platform'>Native and Cross-Platform</a></li>
              <li><a  href='#Seamless-User-Experience'>Seamless User Experience</a></li>
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='#Robust-Backend-Development'>Robust Backend Development</a></li>
              <li><a  href='#Rigorous-Testing'>Rigorous Testing</a></li>
            <li><a  href='#Timely-Deployment'>Timely Deployment</a></li>
              </div>

 </ul>
         
            <li  id='Customized-App-Solutions' > <b className='bold-heading'  >Customized App Solutions for Your Unique Needs</b> <p className='paragraph-sec-tablsst'>We understand that every business is unique, and so are its app requirements. Our team of experienced developers works closely with you to understand your specific needs and goals. We tailor our app development services to create a customized solution that aligns with your business objectives, ensuring maximum efficiency and effectiveness.</p></li>
            
            <li  id='Native-and-Cross-Platform' > <b className='bold-heading'  >Native and Cross-Platform App Development </b> <p className='paragraph-sec-tablsst'>Whether you need a native app for iOS or Android or prefer a cross-platform solution, we have the expertise to deliver exceptional results. Our developers are well-versed in the latest technologies and frameworks, enabling us to build high-performance apps that provide a seamless user experience across multiple platforms</p></li>
            
            <li  id='Seamless-User-Experience' > <b className='bold-heading'  >Seamless User Experience and Interface Design</b> <p className='paragraph-sec-tablsst'>User experience (UX) and interface design (UI) play a crucial role in the success of any app. We prioritize creating intuitive and engaging interfaces that make your app a joy to use. Our UX/UI designers meticulously craft each element to ensure smooth navigation, clear information hierarchy, and visually appealing aesthetics.</p></li>
          
            <li  id='Robust-Backend-Development' > <b className='bold-heading'  >Robust Backend Development and Integration </b> <p className='paragraph-sec-tablsst'>A powerful and reliable backend infrastructure is the backbone of any successful app. Our skilled backend developers build robust server-side solutions, APIs, and databases that enable seamless data management, real-time updates, and secure integration with third-party services. We ensure your app operates flawlessly, even with heavy usage and complex functionalities.</p></li>
            <li  id='Rigorous-Testing' > <b className='bold-heading'  >Rigorous Testing and Quality Assurance:</b> <p className='paragraph-sec-tablsst'>Quality is paramount when it comes to app development. Our dedicated QA team conducts rigorous testing at every stage of the development process to identify and resolve any issues promptly. We perform comprehensive testing, including functional testing, performance testing, usability testing, and security testing, ensuring your app meets the highest standards of quality.</p></li>
            <li  id='Timely-Deployment' > <b className='bold-heading'  >Timely Deployment and Ongoing Support</b> <p className='paragraph-sec-tablsst'>We understand the importance of timely deployment to gain a competitive edge. Our streamlined development process ensures efficient project management and on-time delivery. Once your app is live, our support team provides ongoing maintenance and updates to keep your app running smoothly and to address any emerging needs or issues. </p></li>

           
            </div>
       
        </div>
      </div>
            </Tabss.Pane>
          <Tabss.Pane eventKey="Software-Development">
          <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>Software Development</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        BigWals specializes in software development, offering customized solutions to meet your specific business needs. Our experienced team follows a comprehensive development lifecycle, ensuring that your software is designed, created, and maintained to the highest standards.
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#Social-Media-Marketing'>Tailor-Made Solutions</a></li>
              <li><a  href='#Influencer-Marketing'>Full Development Lifecycle</a></li>
             
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='#PPC-Marketing'>Agile Methodologies</a></li>
              <li><a  href='#Seo'>Technology Expertise</a></li>
           
              </div>

 </ul>
         
            <li  id='Social-Media-Marketing' > <b className='bold-heading'  >Tailor-Made Solutions </b> <p className='paragraph-sec-tablsst'>At BigWals, we understand that every business is unique. We develop software solutions that are customized to your specific requirements, giving you a competitive edge in the market.</p></li>
            
            <li  id='Influencer-Marketing' > <b className='bold-heading'  >Full Development Lifecycle</b> <p className='paragraph-sec-tablsst'> Our team covers every phase of the software development process, from initial concept and requirements gathering to coding, testing, deployment, and ongoing maintenance. We ensure a smooth and efficient journey from idea to implementation.</p></li>
            
            <li  id='YouTube-Marketing' > <b className='bold-heading'  >Agile Methodologies </b> <p className='paragraph-sec-tablsst'> BigWals embraces agile methodologies, enabling flexibility and adaptability throughout the development process. Our iterative approach, combined with regular feedback, ensures that your software evolves with your changing business needs.</p></li>
          
            <li  id='PPC-Marketing' > <b className='bold-heading'  > Technology Expertise   </b> <p className='paragraph-sec-tablsst'>With a team well-versed in a wide range of technologies, frameworks, and programming languages, BigWals selects the most suitable tools and technologies for your project. We leverage our expertise to deliver high-quality software solutions that drive your business forward.</p></li>
          

           
            </div>
       
        </div>
      </div>
          </Tabss.Pane>

        </Tabss.Content>
      </Col>
    </Row>
  </Tabss.Container>


    {/* <Box 
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Logo Services " {...a11yProps(0)} />
        <Tab label="Branding Services " {...a11yProps(1)} />
        <Tab label="Website Services" {...a11yProps(2)} />
        <Tab label="Digital Marketing Services" {...a11yProps(3)} />
        <Tab label="IT Consulting " {...a11yProps(4)} />
        <Tab label=" 2D Animation Services " {...a11yProps(5)} />
        <Tab label="3D Animation Services" {...a11yProps(6)} />
        <Tab label="Application Development " {...a11yProps(7)} />
        <Tab label=" Software Development " {...a11yProps(8)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>Logo Design Agency</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        Having a unique identity makes you credible and reputable among consumers. A great logo makes a powerful brand – BigWals know how to communicate with the audience via graphical, visually appealing elements. With our experts on board, you can witness how a brand becomes successful and recognizable worldwide. We bring the right tone to your brand for practical impact and conversions!
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#Logo-Design-Services'>Logo Design Services</a></li>
              <li><a  href='#Corporate-Identity-Services'>Corporate Identity Services</a></li>
              <li><a  href='#Print-Media-Design'>Print Media Design</a></li>
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='#Campaign-Design-Services'>Campaign Design Services</a></li>
          
              </div>

 </ul>
         
            <li  id='Logo-Design-Services' > <b className='bold-heading'  >Logo Design Services </b> <p className='paragraph-sec-tablsst'>Do you need help to represent your brand in an elegant, sleek, and aesthetic way? Get our expert logo design services to craft unique and memorable eye-catchy stuff. We help you make a lasting impression through our alluring designs!</p></li>
            
            <li  id='Corporate-Identity-Services' > <b className='bold-heading'   >Corporate Identity Services</b> <p className='paragraph-sec-tablsst'>Do you need help to present your business well to the public? Let us handle your corporate identity for a better cause. We have the expertise to keep the cultural values, brand vision, and goals intact! </p></li>
            
            <li  id='Print-Media-Design' > <b className='bold-heading'   >Print Media Design </b> <p className='paragraph-sec-tablsst'>Are you still printing? BigWals offers intriguing print media design services that include brochures, flyers, and more. Our design experts enable you to deliver you the message effectively. We work closely to keep your brand voice and image consistent!</p></li>
          
            <li  id='Campaign-Design-Services' > <b className='bold-heading'   >Campaign Design Services  </b> <p className='paragraph-sec-tablsst'>Are your marketing campaigns effective? We help you create impactful campaign designs that strike a sense of urgency in them. Our experienced creative managers supercharge your innovative concepts and incorporate visual assets for a cohesive campaign.</p></li>
    
           
            </div>
       
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1} >
      <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>Branding Services</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        The significance of branding in creating a strong and memorable identity for your business is what we prior. Our comprehensive branding services encompass every aspect of your brand's visual and strategic elements, allowing us to help you establish a powerful brand presence that resonates with your target audience.
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#BrandsEssence' >Brand's Essence</a></li>
              <li><a  href='#Craft-a-Brand-Strategy'>Craft an Strategy</a></li>
              <li><a  href='#Design-an-Engaging'>Design an Engaging</a></li>
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='#Develop-Consistent-Brand-Messaging'>Develop Consistent Brand Messaging</a></li>
              <li><a  href='#Implement-Brand-Guidelines-for-Cohesion'>Implement Brand Guidelines for Cohesion</a></li>
              <li><a  href='#Foster-Brand-Growth-and-Adaptability'>Foster Brand Growth and Adaptability</a></li>
              </div>

 </ul>
         
            <li  id='BrandsEssence' > <b className='bold-heading'  >Discover Your Brand's Essence </b> <p className='paragraph-sec-tablsst'>Uncover the core essence of your brand through in-depth research and analysis. We delve into your brand's values, target audience, and competitive landscape to understand what makes your business unique. By identifying your brand's essence, we lay the foundation for a powerful and authentic brand identity.</p></li>
            
            <li  id='Craft-a-Brand-Strategy' > <b className='bold-heading'  >Craft a Compelling Brand Strategy </b> <p className='paragraph-sec-tablsst'>Develop a strategic roadmap that guides your brand's positioning and messaging. We work closely with you to define your brand's mission, vision, and unique value proposition. Our team crafts a compelling brand narrative that resonates with your target audience and sets you apart from competitors.</p></li>
            
            <li  id='Design-an-Engaging' > <b className='bold-heading'  >Design an Engaging Visual Identity </b> <p className='paragraph-sec-tablsst'>Our talented designers bring your brand to life visually. From logo design to color palettes and typography, we create a cohesive visual identity that captures the essence of your brand. By incorporating your brand's personality into the design elements, we ensure that your visual identity resonates with your audience.</p></li>
          
            <li  id='Develop-Consistent-Brand-Messaging' > <b className='bold-heading'  >Develop Consistent Brand Messaging  </b> <p className='paragraph-sec-tablsst'>Consistency is key in effective brand communication. We craft compelling messaging that aligns with your brand's values and resonates with your target audience. Whether it's creating taglines, brand stories, or elevator pitches, we ensure that your messaging consistently reflects your brand's essence across various marketing channels.</p></li>
            <li  id='Implement-Brand-Guidelines-for-Cohesion' > <b className='bold-heading'  >Implement Brand Guidelines for Cohesion </b> <p className='paragraph-sec-tablsst'>Brand guidelines serve as a roadmap for maintaining a consistent brand presence. We create comprehensive brand guidelines that outline the proper usage of your visual elements, tone of voice, and brand messaging. These guidelines ensure that your brand is represented consistently across all touchpoints, reinforcing recognition and trust.</p></li>
            <li  id='Foster-Brand-Growth-and-Adaptability' > <b className='bold-heading'  >Foster Brand Growth and Adaptability</b> <p className='paragraph-sec-tablsst'> A successful brand is one that evolves with the changing market dynamics. We help you develop strategies to foster brand growth and adaptability. Through ongoing brand monitoring and analysis, we identify opportunities for brand expansion, target audience refinement, and brand message adaptation, ensuring your brand remains relevant and impactful.</p></li>

           
            </div>
       
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>Website Design and Development</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        You can also create a website. But can you make a highly responsive website that converts visitors into consumers? BigWals is a web application development agency that creates flawless custom websites for everyone looking to make an impactful online presence. A responsive and intuitive website can bring fortune to a business since nobody likes a glitchy. Take the digital world by storm with us!
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#E-Commerce-Development'>E-Commerce Development</a></li>
              <li><a  href='#Shopify-Web-Development'>Shopify Web Development</a></li>
              <li><a  href='#YouTube-Marketing'>React Development Services</a></li>
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='#WordPress-Development'>WordPress Development</a></li>
              <li><a  href='#CMS-Development-Services'>CMS Development Services</a></li>
              <li><a  href='#Amazon-Marketing-Services'>HTML Development Services</a></li>
              </div>

 </ul>
         
            <li  id='E-Commerce-Development' > <b className='bold-heading'  >E-Commerce Website Development </b> <p className='paragraph-sec-tablsst'>Online shopping has become mainstream, and with thousands of stores, competition is at its peak. So how do you win customers? Get our e-commerce website development services for a flawless aesthetic online store that brings conversions!</p></li>
            
            <li  id='Shopify-Web-Development' > <b className='bold-heading'  >Shopify Web Development</b> <p className='paragraph-sec-tablsst'>Shopify has been favored among drop shippers and other online stores. If you are considering making your way to it, BigWals offers high-end Shopify development services. We make your business stand up from scratch, whether a small one or an enterprise.</p></li>
            
            <li  id='YouTube-Marketing' > <b className='bold-heading'  >YouTube Marketing </b> <p className='paragraph-sec-tablsst'>Do you need help to win loyal subscribers on YouTube? Your content is fantastic, but it needs the right audience. Get our experts' hands on your YouTube channel to make the most out of your excellent content. Get subscribers that wait for your videos!</p></li>
          
            <li  id='WordPress-Development' > <b className='bold-heading'  >WordPress Development </b> <p className='paragraph-sec-tablsst'>WordPress offers you all of it, whether you want endless personalization or optimization. And BigWals offers you WordPress web development services with high-end maintenance services. We have experts with proficient knowledge of similar CMS platforms.</p></li>
            <li  id='CMS-Development-Services' ><b  className='bold-heading'  >CMS Development Services </b> <p className='paragraph-sec-tablsst'>Content Management Systems are getting famous lately due to their intuitiveness and control over the entire website. Get our experienced team of developers for a CMS development project and drive business growth!</p></li>
            <li  id='Amazon-Marketing-Services' > <b className='bold-heading'  >Amazon Marketing Services</b> <p className='paragraph-sec-tablsst'>Whether you are selling your brand on Amazon or doing dropshipping, BigWals don't care. Our Amazon marketing experts always strive for a new project, a new journey to start – to take your brand to a new level!</p></li>

           
            </div>
       
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>Digital Marketing</h2> 
        <div className="p">
        <p className="paragraph-sec-tablsst">
        BigWals is the best internet marketing firm with talent that has worked across several industries to elevate various brands. We are a digital marketing agency that utilizes the latest trends in Internet marketing to make businesses reach their full potential. Our focus is minimizing your marketing expenses while providing maximum leads and sales. BigWals bring you the best digital marketing and SEO agency in town!
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#Social-Media-Marketing'>Social Media Marketing</a></li>
              <li><a  href='#Influencer-Marketing'>Influencer Marketing</a></li>
              <li><a  href='#YouTube-Marketing'>YouTube Marketing</a></li>
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='#PPC-Marketing'>PPC Marketing</a></li>
              <li><a  href='#Seo'>Search Engine Optimization (SEO)</a></li>
              <li><a  href='#Amazon-Marketing-Services'>Amazon Marketing Services</a></li>
              </div>

 </ul>
         
            <li  id='Social-Media-Marketing' > <b className='bold-heading'  >Social Media Marketing </b> <p className='paragraph-sec-tablsst'>Facebook, Instagram, and TikTok have become the new normal to entertain us. You are not wasting time there, nor are we. BigWals is ready to take your business to the next level with the best social media marketing managers.</p></li>
            
            <li  id='Influencer-Marketing' > <b className='bold-heading'  >Influencer Marketing </b> <p className='paragraph-sec-tablsst'>The creator's economy is booming more than ever, thanks to influencers helping businesses reach their target audience. Be part of the skyrocketing economy with our influencer marketing services and connect with the audience.</p></li>
            
            <li  id='YouTube-Marketing' > <b className='bold-heading'  >YouTube Marketing </b> <p className='paragraph-sec-tablsst'>Do you need help to win loyal subscribers on YouTube? Your content is fantastic, but it needs the right audience. Get our experts' hands on your YouTube channel to make the most out of your excellent content. Get subscribers that wait for your videos!</p></li>
          
            <li  id='PPC-Marketing' > <b className='bold-heading'  >PPC Marketing  </b> <p className='paragraph-sec-tablsst'>Pay-per-click makes you spend money to get orders but also makes you scared of the loss. We treat your business and budget as if it is ours. Our PPC specialists have advanced knowledge of running ads that bring the highest ROI.</p></li>
            <li  id='Seo' > <b className='bold-heading'  >Search Engine Optimization (SEO) </b> <p className='paragraph-sec-tablsst'>Everyone is doing SEO, but not all of them understand the intricacies of the search engine. We – the best SEO agency in the USA- have seasoned SEO experts who employ the best and latest strategies to help you achieve the rank you crave!</p></li>
            <li  id='Amazon-Marketing-Services' > <b className='bold-heading' >Amazon Marketing Services</b> <p className='paragraph-sec-tablsst'>Whether you are selling your brand on Amazon or doing dropshipping, BigWals don't care. Our Amazon marketing experts always strive for a new project, a new journey to start – to take your brand to a new level!</p></li>

           
            </div>
       
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>IT Consulting</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        BigWals is a software agency specializing in IT consultation. Our experienced IT consultants provide expert guidance and tailored solutions to help organizations leverage technology effectively for their business objectives.
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#Strategic-Alignment'>Strategic Alignment</a></li>
              <li><a  href='#Seamless-Integration'>Seamless Integration</a></li>
            
          
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='#ustomized-Solutions'>Customized Solutions</a></li>
              <li><a  href='#Security-and-Efficiency'>Security and Efficiency</a></li>
              
              </div>

 </ul>
         
            <li  id='Strategic-Alignment' > <b className='bold-heading'  >Strategic Alignment </b> <p className='paragraph-sec-tablsst'>We align technology strategies with your business goals, ensuring that your technology investments are in sync with your overall objectives.</p></li>
            
            <li  id='Seamless-Integration' > <b className='bold-heading'  >Seamless Integration </b> <p className='paragraph-sec-tablsst'>Our team excels in integrating software applications, databases, and systems, optimizing workflow and enhancing productivity.</p></li>
            
            <li  id='ustomized-Solutions' > <b className='bold-heading'  >Customized Solutions </b> <p className='paragraph-sec-tablsst'> We design and develop customized software solutions that address your specific business needs, providing you with a competitive advantage.
</p></li>
          
            <li  id='Security-and-Efficiency' > <b className='bold-heading'  >Security and Efficiency </b> <p className='paragraph-sec-tablsst'>BigWals helps strengthen your cybersecurity posture, assesses risks, implements robust security measures, and streamlines operations for optimal efficiency.</p></li>
            

           
            </div>
       
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>2D Animation Services</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        At Bigwals, we are experts in creating visually stunning and captivating 2D animations to bring your visions to life. With a team of skilled animators and storytellers, illustrators, and animators we are committed to providing top-quality animation solutions for a broad range of purposes and industries.
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#Creativity-and-Expertise'>Creativity and Expertise</a></li>
              <li><a  href='#Tailored-Solutions'>Tailored Solutions</a></li>
              <li><a  href='#Compelling-Storytelling'>Compelling Storytelling</a></li>
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='#High-Quality-Animation'>High-Quality Animation</a></li>
              <li><a  href='#Effective-Communication'>Effective Communication</a></li>
              <li><a  href='#Timely-Delivery'>Timely Delivery</a></li>
              </div>

 </ul>
         
            <li  id='Creativity-and-Expertise' > <b className='bold-heading'  >Creativity and Expertise </b> <p className='paragraph-sec-tablsst'>Our team is made up of skilled and experienced creators who love their work. We blend artistic flair with technical knowledge to create 2D animations that aren't just visually appealing, but also convey the message clearly.</p></li>
            
            <li  id='Tailored-Solutions' > <b className='bold-heading'  >Tailored Solutions </b> <p className='paragraph-sec-tablsst'>We understand that every project is unique, which is why we offer personalized animation solutions tailored to your specific requirements. Whether you need an explainer video, promotional animation, educational content, or anything in between, we collaborate closely with you to understand your vision and deliver animations that exceed your expectations</p></li>
            
            <li  id='Compelling-Storytelling' > <b className='bold-heading'  >Compelling Storytelling </b> <p className='paragraph-sec-tablsst'>At the heart of every successful animation lies a compelling story. Our team of storytellers works closely with you to develop captivating narratives that resonate with your target audience. We carefully craft scripts, storyboards, and character designs to ensure that your message is conveyed in an engaging and memorable way.</p></li>
          
            <li  id='High-Quality-Animation' > <b className='bold-heading'  >High-Quality Animation  </b> <p className='paragraph-sec-tablsst'>We pride ourselves on delivering animations of the highest quality. Using industry-leading software and tools, we create smooth and fluid animations with attention to detail. From character animation to background designs and special effects, we strive for excellence in every frame.</p></li>
            <li  id='Effective-Communication' > <b className='bold-heading'  >Effective-Communication </b> <p className='paragraph-sec-tablsst'>We believe in fostering strong client relationships built on effective communication. Throughout the animation process, we keep you involved and informed, providing regular updates and seeking your feedback to ensure that the final product aligns with your vision. Your satisfaction is our priority.</p></li>
            <li  id='Timely-Delivery' > <b className='bold-heading'  >Timely Delivery</b> <p className='paragraph-sec-tablsst'>We understand the importance of meeting deadlines. With our streamlined production process and efficient workflow, we ensure that your animation project is delivered within the agreed timeframe, without compromising on quality.</p></li>

           
            </div>
       
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>3D Animation Services</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        Videos are the most captivating way to attract eyes. One way or another, you have to upscale your content strategies with impeccable  3D animation services. BigWals have inhuman creative heads passionate about turning visions and imaginations into reality. Our experts have all the necessary skills to run the latest technologies and create great animations flawlessly.
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#Product-Demo-Animation'>Product Demo Animation</a></li>
              <li><a  href='#Explainer-Video-Services'>Explainer Video Services </a></li>
              <li><a  href='#3D-Animation-Services'>3D Animation Services </a></li>
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='Digital-Video-Commercials'>Digital Video Commercials (DVCs)</a></li>
              <li><a  href='#Corporate-Video-Services'>Corporate Video Services </a></li>
              <li><a  href='Documentary-Video-Services'>Documentary Video Services</a></li>
              </div>

 </ul>
         
            <li  id='Product-Demo-Animation' > <b className='bold-heading'  >Product Demo Animation</b> <p className='paragraph-sec-tablsst'>Educating your consumers about your products is indispensable to growing your brand and having loyal customers. BigWals truly knows how to showcase your product in multi-dimensional perspectives using advanced tools.</p></li>
            
            <li  id='Explainer-Video-Services' > <b className='bold-heading'  >Explainer Video Services  </b> <p className='paragraph-sec-tablsst'>Educating your consumers about your products is indispensable to growing your brand and having loyal customers. BigWals truly knows how to showcase your product in multi-dimensional perspectives using advanced tools.</p></li>
            
            <li  id='3D-Animation-Services' > <b className='bold-heading'  > 3D Animation Services  </b> <p className='paragraph-sec-tablsst'>You have an exciting idea and imagination, but do you have the right person to convert it? BigWals is equipped with skilled artists who effectively communicate your message via professional 3D animation services. </p></li>
          
            <li  id='Digital-Video-Commercials' > <b className='bold-heading'  >Digital Video Commercials (DVCs) </b> <p className='paragraph-sec-tablsst'>We create DVCs that are not aesthetically appealing but also make an impact and have meaning to them. BigWals creative designers and art directors craft a story that showcases your brand's tone and values.</p></li>
            <li  id='Corporate-Video-Services ' > <b className='bold-heading'  >Corporate Video Services  </b> <p className='paragraph-sec-tablsst'>Corporate videos have been widely used to represent a brand to the public in a creative way. BigWals top-tier marketers develop a sketch of a corporate video for your brand that engages the audience and opens doors for communication with the audience. </p></li>
            <li  id='Documentary-Video-Services' > <b className='bold-heading'  >Documentary Video Services</b> <p className='paragraph-sec-tablsst'>Whether you are selling your brand on Amazon or doing dropshipping, BigWals don't care. Our Amazon marketing experts always strive for a new project, a new journey to start – to take your brand to a new level!</p></li>

           
            </div>
       
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>Application Development</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        Unlock the true potential of your business with our top-notch application development services. As a leading Application Development Company, we specialize in creating customized, innovative, and high-performance applications that cater to the unique needs of our clients. Whether you're a startup, a small business, or a large enterprise, we have the expertise and experience to transform your ideas into reality.
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#Customized-App-Solutions'>Customized App Solutions </a></li>
              <li><a  href='#Native-and-Cross-Platform'>Native and Cross-Platform</a></li>
              <li><a  href='#Seamless-User-Experience'>Seamless User Experience</a></li>
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='#Robust-Backend-Development'>Robust Backend Development</a></li>
              <li><a  href='#Rigorous-Testing'>Rigorous Testing</a></li>
            <li><a  href='#Timely-Deployment'>Timely Deployment</a></li>
              </div>

 </ul>
         
            <li  id='Customized-App-Solutions' > <b className='bold-heading'  >Customized App Solutions for Your Unique Needs</b> <p className='paragraph-sec-tablsst'>We understand that every business is unique, and so are its app requirements. Our team of experienced developers works closely with you to understand your specific needs and goals. We tailor our app development services to create a customized solution that aligns with your business objectives, ensuring maximum efficiency and effectiveness.</p></li>
            
            <li  id='Native-and-Cross-Platform' > <b className='bold-heading'  >Native and Cross-Platform App Development </b> <p className='paragraph-sec-tablsst'>Whether you need a native app for iOS or Android or prefer a cross-platform solution, we have the expertise to deliver exceptional results. Our developers are well-versed in the latest technologies and frameworks, enabling us to build high-performance apps that provide a seamless user experience across multiple platforms</p></li>
            
            <li  id='Seamless-User-Experience' > <b className='bold-heading'  >Seamless User Experience and Interface Design</b> <p className='paragraph-sec-tablsst'>User experience (UX) and interface design (UI) play a crucial role in the success of any app. We prioritize creating intuitive and engaging interfaces that make your app a joy to use. Our UX/UI designers meticulously craft each element to ensure smooth navigation, clear information hierarchy, and visually appealing aesthetics.</p></li>
          
            <li  id='Robust-Backend-Development' > <b className='bold-heading'  >Robust Backend Development and Integration </b> <p className='paragraph-sec-tablsst'>A powerful and reliable backend infrastructure is the backbone of any successful app. Our skilled backend developers build robust server-side solutions, APIs, and databases that enable seamless data management, real-time updates, and secure integration with third-party services. We ensure your app operates flawlessly, even with heavy usage and complex functionalities.</p></li>
            <li  id='Rigorous-Testing' > <b className='bold-heading'  >Rigorous Testing and Quality Assurance:</b> <p className='paragraph-sec-tablsst'>Quality is paramount when it comes to app development. Our dedicated QA team conducts rigorous testing at every stage of the development process to identify and resolve any issues promptly. We perform comprehensive testing, including functional testing, performance testing, usability testing, and security testing, ensuring your app meets the highest standards of quality.</p></li>
            <li  id='Timely-Deployment' > <b className='bold-heading'  >Timely Deployment and Ongoing Support</b> <p className='paragraph-sec-tablsst'>We understand the importance of timely deployment to gain a competitive edge. Our streamlined development process ensures efficient project management and on-time delivery. Once your app is live, our support team provides ongoing maintenance and updates to keep your app running smoothly and to address any emerging needs or issues. </p></li>

           
            </div>
       
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={8}>
      <div className="secTabist-main-div" data-aos ="fade-left">
          <h2 className='tablsit-sec-h2'>Software Development</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        BigWals specializes in software development, offering customized solutions to meet your specific business needs. Our experienced team follows a comprehensive development lifecycle, ensuring that your software is designed, created, and maintained to the highest standards.
        
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec">
            <ul className='colm-tablist-sec-ul'>
              <div className="li-com-tablist-div">
              <li><a  href='#Social-Media-Marketing'>Tailor-Made Solutions</a></li>
              <li><a  href='#Influencer-Marketing'>Full Development Lifecycle</a></li>
             
              </div>
              <div className="li-com-tablist-div">
              <li><a  href='#PPC-Marketing'>Agile Methodologies</a></li>
              <li><a  href='#Seo'>Technology Expertise</a></li>
           
              </div>

 </ul>
         
            <li  id='Social-Media-Marketing' > <b className='bold-heading'  >Tailor-Made Solutions </b> <p className='paragraph-sec-tablsst'>At BigWals, we understand that every business is unique. We develop software solutions that are customized to your specific requirements, giving you a competitive edge in the market.</p></li>
            
            <li  id='Influencer-Marketing' > <b className='bold-heading'  >Full Development Lifecycle</b> <p className='paragraph-sec-tablsst'> Our team covers every phase of the software development process, from initial concept and requirements gathering to coding, testing, deployment, and ongoing maintenance. We ensure a smooth and efficient journey from idea to implementation.</p></li>
            
            <li  id='YouTube-Marketing' > <b className='bold-heading'  >Agile Methodologies </b> <p className='paragraph-sec-tablsst'> BigWals embraces agile methodologies, enabling flexibility and adaptability throughout the development process. Our iterative approach, combined with regular feedback, ensures that your software evolves with your changing business needs.</p></li>
          
            <li  id='PPC-Marketing' > <b className='bold-heading'  > Technology Expertise   </b> <p className='paragraph-sec-tablsst'>With a team well-versed in a wide range of technologies, frameworks, and programming languages, BigWals selects the most suitable tools and technologies for your project. We leverage our expertise to deliver high-quality software solutions that drive your business forward.</p></li>
          

           
            </div>
       
        </div>
      </div>
      </TabPanel>
    </Box> */}
    </>

  );
}
export default TabPanel
