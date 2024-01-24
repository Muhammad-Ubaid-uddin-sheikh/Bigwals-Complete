const express = require('express');
const geoip = require('geoip-lite'); // Use a geoip library

const app = express();

// Middleware to block access from a specific country
app.use((req, res, next) => {
  const clientIP = req.ip; // Get the client's IP address
  const geo = geoip.lookup(clientIP); // Look up geographic data

  // Change 'CountryName' to the name of the country you want to block
  if (geo && geo.country === 'Pakistan') {
    res.status(403).send('Access denied from this location.');
  } else {
    next(); // Allow access
  }
});

// Serve your React app or static files
app.use(express.static('build')); // Replace 'build' with your build directory

app.listen('http://bigwals.com/' , () => {
  console.log('Server is running on port 3000');
});






