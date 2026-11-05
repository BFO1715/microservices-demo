const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());  
app.use(express.json());

// Pointing to your forwarded localhost service ports
const USER_SERVICE_URL = 'https://github.dev';
const VIDEO_SERVICE_URL = 'https://github.dev';

app.get('/api/users', async (req, res) => {
  try {
    const response = await axios.get(`${USER_SERVICE_URL}/users`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
});

app.get('/api/videos', async (req, res) => {
  try {
    const response = await axios.get(`${VIDEO_SERVICE_URL}/videos`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching videos');
  }
});

app.listen(3002, () => {
  console.log('API Gateway running on port 3002');
});
