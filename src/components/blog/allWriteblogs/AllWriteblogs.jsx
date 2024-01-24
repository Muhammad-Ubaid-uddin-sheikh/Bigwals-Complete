import React from 'react'
import '../Blog.css'
import { Link } from 'react-router-dom'
 const AllWriteblogs = ({LinkUrl,Imgurl,FirstParaDate,MainHeading,Paragraph}) => {
  return (
    <div className='blogger-main-card-div'>
        <div className="row-blogger-conet-img"><Link style={{textDecoration:'none'}} to={LinkUrl }> <div className="image-blogger"><img src={Imgurl} style={{borderRadius:'10px 10px 0px 0px'}} alt="" width='100%' /></div></Link></div>
        <div className="row-blogger-conet">
            <div className="all-contect-blogge">
                <p className="subtext-blog">
                {FirstParaDate}
                </p>
                <Link style={{textDecoration:'none'}} to={LinkUrl}> <p className="main-heading-blog-je9">
                 {MainHeading}
                </p></Link>
                <p className="paragraph-sub-blogger">{Paragraph} </p>
            </div>
        </div>
    </div>
  )
}

export default AllWriteblogs