const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

// Middleware untuk parsing JSON
app.use(express.json());

// Gunakan rute API
app.use('/api', apiRoutes);

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Sesuaikan dengan metode yang Anda gunakan
    allowedHeaders: ['Content-Type', 'Authorization'] // Sesuaikan jika perlu
}));

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

