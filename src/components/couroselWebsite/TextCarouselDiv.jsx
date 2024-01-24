import React from 'react'
import './CaurselWebsite.css'
const TextCarouselDiv = ({mainHading,paragraph}) => {
  return (
    <div className="carosel-text-div">
        <div className="row-tex">
    <h1 className='h1-text-caurosel'>{mainHading}
        {/* Turn Clicks Into Customers */}
        </h1>
        <p className='p-text-caurosel'>{paragraph}
        </p>
        </div>
        </div>
  )
}

export default TextCarouselDiv