import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { hydrate,render } from "react-dom";
import Notipmatch from './Notipmatch';
import { Router } from 'react-router-dom';



// const blockBlacklistCountries = () => {
//   // Blacklist countries
//   const blacklistCountries = [
//     "PK", // Germany

//   ];
//   const acessCountries = [
//         "US", // United States
//     "GB", // United Kingdom
//     "UA", // Ukraine
//     "AR", // Argentina
//     "FI", // Finland
//     "CA", // Canada
//     "JP", // Japan
//     "NO", // Norway
//     "RU" , // Russia
//     "ZWE",
//     "ZMB",
//     "TUR",
//     "SAU" ,
//     "ZAF"  ,
//     "TZA",
//     "GBR",
//     "UKR",  "LU" ,  "LV" ,"MT","NL","PO","PT","RO","SE","SI","SK",
//     "AUS","ES","FI ","FR","GR","HR","HU","IE","IT","LT",
//     "CAN","AT","BE","BG","CY ","CZ","DE","DK","EE"
//     ];
//   const getCountryCode = (apiUrl) => {
//     fetch(apiUrl, { method: 'GET' })
//       .then(response => response.json())
//       .then(result => {
//           if (acessCountries.includes(result.country)) {
//               // Access denied error

//               const Root = ReactDOM.createRoot(document.getElementById('root'));

//               Root.render(
                
//                 <React.StrictMode>
//                   <App />
//                 </React.StrictMode>
//               );
              
//   var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//   (function(){
//   var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//   s1.async=true;
//   s1.src='https://embed.tawk.to/64dab13f94cf5d49dc6a63f0/1h7r490v5';
//   s1.charset='UTF-8';
//   s1.setAttribute('crossorigin','*');
//   s0.parentNode.insertBefore(s1,s0);
//   })();
  
//               const rootElement = document.getElementById("root");
//               if (rootElement.hasChildNodes()) {
//                 hydrate(<Root />, rootElement);
//               } else {
//                 render(<Root />, rootElement);
//               }

              
              
//             }
//         else {
        
//           const Root = ReactDOM.createRoot(document.getElementById('root'));

//               Root.render(
                
//                 <React.StrictMode>
//                   <Notipmatch/>
//                 </React.StrictMode>
//               );
//               const rootElement = document.getElementById("root");
//               if (rootElement.hasChildNodes()) {
//                 hydrate(<Root />, rootElement);
//               } else {
//                 render(<Root />, rootElement);
//               }
                      
//         }
//       })
     
//   };

//   getCountryCode("https://get.geojs.io/v1/ip/country.json");
// };

ReactDOM.hydrate(

              
                
                // <React.StrictMode>  
                  <App />,
                // </React.StrictMode>,
                document.getElementById('root')
              );
              
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/64dab13f94cf5d49dc6a63f0/1h7r490v5';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
  
              // const rootElement = document.getElementById("root");
              // if (rootElement.hasChildNodes()) {
              //   hydrate(<Root />, rootElement);
              // } else {
              //   render(<Root />, rootElement);
              // }




reportWebVitals();
// blockBlacklistCountries();
