const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

// Middleware untuk parsing JSON
app.use(express.json());

// Gunakan rute API
app.use('/api', apiRoutes);

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});