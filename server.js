const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();

const options = {
  key: fs.readFileSync('cert.key'),
  cert: fs.readFileSync('cert.crt'),
};

const mime = require('express').static.mime;

// Set the MIME type for JavaScript files
mime.define({
  'application/javascript': ['js']
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Add a route handler for the root URL
app.get('/', (req, res) => {
  // Serve the index.html file when the root URL is requested
  res.sendFile(__dirname + '/public/index.html');
});

// Start the HTTPS server
const server = https.createServer(options, app);
const port = 3000; // HTTPS default port
server.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
