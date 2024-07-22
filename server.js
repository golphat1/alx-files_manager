const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const dbClient = require('./utils/db');
const redisClient = require('./utils/redis');

// Middleware and routes
app.get('/status', (req, res) => {
  res.status(200).send({ status: 'OK' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
