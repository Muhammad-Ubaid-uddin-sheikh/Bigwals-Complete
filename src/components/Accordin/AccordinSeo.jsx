import * as React from 'react';
import './Accordin.css'
import accrdoinImage from './image-accordin.svg'
import Accordion from 'react-bootstrap/Accordion';

const AccordinSeo = () => {
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
        <Accordion.Header>What is the difference between organic and paid search results?</Accordion.Header>
        <Accordion.Body>
        Every time you Google something, you see a few sponsored results on the top and then the others. The starting ones are the paid search results, while the rest are the organic results. <br></br>
        <div style={{paddingTop:'10px'}}>  You do not have to pay anyone to be in the organic search results. These results have potentially high traffic since users consider them more credible. However, paid results require a budget for the search engine to be sponsored at the top.</div> <br></br>
        <div style={{paddingTop:'10px'}}>    You can then get the top ranking on search engines using Pay per click (PPC). But as soon you stop paying it, you lose your value. Paid search results have a short impact but lead to immediate conversions.</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" id="panel1a-header">
        <Accordion.Header>How long does it take to see results from SEO efforts?</Accordion.Header>
        <Accordion.Body>
        SEO is an ongoing process. Unlike PPC, you cannot expect results at any specific moment. However, based on similar experiences and efforts, you can see SEO results in the next 6 or 12 months. However, the time it takes to see the results of SEO efforts depends on several factors, like website age, health, authority, and strategy.<br></br>  
        <div style={{paddingTop:'10px'}}>    The best way to keep up with your expectations is; to stay consistent and updated with algorithm changes in the search engine. </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What are keywords, and how are they used in SEO?  </Accordion.Header>
        <Accordion.Body>
        Whatever you type in the Google search bar is referred to as keywords. In SEO, the terms and phrases you use to find anything help search engines recognize what your website is about – understanding its relevancy to offer better search results. <br></br>
        <div style={{paddingTop:'10px'}}>    There are several tools for finding the right keywords for your website, such as Ahrefs, Moz, SEMRush, etc. For effective SEO, you need to find suitable and relevant keywords to feed into your on-page and off-page SEO, including content for websites and blogs.</div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>What are backlinks, and why are they important for SEO?</Accordion.Header>
        <Accordion.Body>
        The subtle referral from one business to another – a website giving a link to your to indicate to search engines that they trust your website is called a Backlink. These inbound links are external links that enhance your search engine rankings, either passing the PageRank or not. <br></br>
        <div style={{paddingTop:'10px'}}>  To get quality backlinks, you can start pitching other reputable websites with great content in exchange for a backlink. The more backlinks your website, the more your brand awareness enhances with increased traffic. Remember, quality is always above quantity!</div>
              
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>What is website optimization?</Accordion.Header>
        <Accordion.Body>
        To offer your visitors a seamless user experience, you need to optimize your website for better performance and security. Website optimization involves technical and content optimization, leading to higher search engine rankings and organic traffic <br></br>
        <div style={{paddingTop:'10px'}}>  Therefore, you must increase your website's speed and loading time to get more traffic and conversions while compressing file sizes and codes. You also need to optimize for mobile to enhance the scalability of your website across different screen sizes and devices.</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Is SEO only for Google, or does it apply to other search engines?</Accordion.Header>
        <Accordion.Body>
        SEO stands for search engine optimization, which refers to the practices involved in improving a website's visibility and rankings. Therefore, whether you talk about the dominant search engine Google or any other such as Yahoo, Bing, etc. SEO techniques are used everywhere!
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

export default AccordinSeo