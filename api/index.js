const express = require('express');
const cors = require('cors');
const zoneRoutes = require('../controllers/zoneController.js');

const app = express();

app.use(cors({
  origin: [
    'http://localhost:4200',
    'https://five-oclock-client.vercel.app',
    'https://five-oclock-client-git-main-mjaxes-projects.vercel.app'
  ]
}))

app.use(express.json());
app.use('/zones', zoneRoutes)
app.get('/', (req, res) => {
  res.send('Five O’Clock Server is live!');
});

module.exports = (req, res) => {
  app(req, res)
}