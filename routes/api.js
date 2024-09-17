const express = require('express');
const router = express.Router();

// Import semua data dummy
const dummyData1 = require('../data/dummyCount.json');
const dummyData2 = require('../data/dummyGenderRatio.json');
const dummyData3 = require('../data/dummyHeatmap.json');
const dummyData4 = require('../data/dummyPeakDay.json');
const dummyData5 = require('../data/dummyPeakDay.json');

// Define rute untuk masing-masing data
router.get('/count', (req, res) => {
  res.json(dummyData1);
});

router.get('/gender_ratio', (req, res) => {
  res.json(dummyData2);
});

router.get('/heatmap', (req, res) => {
  res.json(dummyData3);
});

router.get('/peak_time', (req, res) => {
  res.json(dummyData4);
});

router.get('/peak_day', (req, res) => {
  res.json(dummyData5);
});

module.exports = router;
