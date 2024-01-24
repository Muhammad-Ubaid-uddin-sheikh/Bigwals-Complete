// import React, { useState, useEffect } from 'react';
import './ScrollComponet.css';

// const ScrollArrow = () => {
//   const [showScroll, setShowScroll] = useState(false);

//   const checkScrollTop = () => {
//     if (!showScroll && window.pageYOffset > 400) {
//       setShowScroll(true);
//     } else if (showScroll && window.pageYOffset <= 400) {
//       setShowScroll(false);
//     }
//   };

//   const scrollTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', checkScrollTop);
//     return () => {
//       window.removeEventListener('scroll', checkScrollTop);
//     };
//   }, [showScroll]);

//   return (
//     <div
//       className="scroll-to-top"
//       style={{ display: showScroll ? 'flex' : 'none' }}
//       onClick={scrollTop}
//     >
//       <span>&#8593;</span>
//     </div>
//   );
// };

// export default ScrollArrow;
import React, { useState, useEffect } from 'react';
// import './ScrollArrow.css';

const ScrollArrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  const checkScrollTop = () => {
    if (window.pageYOffset > 100) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  return (
    <div
      className={`scroll-arrow ${showArrow ? 'show' : ''}`}
      onClick={scrollTop}
    >
      <span>&#8593;</span>
    </div>
  );
};

export default ScrollArrow;
