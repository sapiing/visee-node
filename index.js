const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

// Middleware untuk parsing JSON
app.use(express.json());

// Gunakan rute API
app.use('/api', apiRoutes);

// Jangan gunakan app.listen di Vercel
module.exports = app;
