import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const SEOTracking = () => {
  useEffect(() => {
    // Replace 'UA-XXXXXXXXX-X' with your Google Analytics tracking ID
    ReactGA.initialize('UA-267627795-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return null; // This component doesn't render anything
};

export default SEOTracking;
