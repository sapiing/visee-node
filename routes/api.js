const express = require('express');
const router = express.Router();

// Import semua data dummy
const count = require('../data/dummyCount.json');
const gender_ratio = require('../data/dummyGenderRatio.json');
const heatmap = require('../data/dummyHeatmap.json');
const peakTime = require('../data/dummyPeakTime.json');
const peakDay = require('../data/dummyPeakDay.json');

// Define rute untuk masing-masing data
router.get('/count', (req, res) => {
  res.json(count);
});

router.get('/gender_ratio', (req, res) => {
  res.json(gender_ratio);
});

router.get('/heatmap', (req, res) => {
  res.json(heatmap);
});

router.get('/peak_time', (req, res) => {
  res.json(peakTime);
});

router.get('/peak_day', (req, res) => {
  res.json(peakDay);
});

module.exports = router;
