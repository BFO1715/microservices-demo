const express = require('express');
const app = express();
const port = 3001;  

const videos = [
  { id: 1, title: 'Introduction to Docker', duration: '10 mins' },
  { id: 2, title: 'Microservices with Node.js', duration: '15 mins' }
];  
 
app.get('/videos', (req, res) => {
  res.json(videos);
});  

app.listen(port, () => {
  console.log(`Video Service running on port ${port}`);
});
