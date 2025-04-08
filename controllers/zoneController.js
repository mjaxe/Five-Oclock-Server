const express = require('express');
const router = express.Router();
const zoneService = require('../services/zoneService');

router.get('/', async (req, res) => {
  const now = new Date();

  console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} - GET request`)
  const zones = await zoneService.getAllZones();
  res.json(zones);
});

module.exports = router;