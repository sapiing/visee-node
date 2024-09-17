const express = require('express');
const router = express.Router();

// Import semua data dummy
const count = require('../data/dummyCount.json');
const gender_ratio = require('../data/dummyGenderRatio.json');
const heatmap = require('../data/dummyHeatmap.json');
const peakTime = require('../data/dummyPeakTime.json');
const peakDay = require('../data/dummyPeakDay.json');
const dwellTimeZone = require('../data/dummyDwellTimeZone.json');
const dwellTimePeriod = require('../data/dummyDwellTimePeriod.json');

// Define rute untuk masing-masing data
router.get('/count', (req, res) => {
  res.json(count);
});

router.get('/gender-ratio', (req, res) => {
  res.json(gender_ratio);
});

router.get('/heatmap', (req, res) => {
  res.json(heatmap);
});

router.get('/peak-time', (req, res) => {
  res.json(peakTime);
});

router.get('/peak-day', (req, res) => {
  res.json(peakDay);
});

router.get('/dwell-time-zone', (req, res) => {
  res.json(dwellTimeZone);
});

router.get('/dwell-time-period', (req, res) => {
  res.json(dwellTimePeriod);
});

module.exports = router;
