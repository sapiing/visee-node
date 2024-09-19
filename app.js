const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');
const cors = require('cors')

// Middleware untuk parsing JSON
app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3000', 'http://k8s-visee-viseedas-02f5ab8fdf-87eb54d9bc18a162.elb.ap-southeast-1.amazonaws.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Sesuaikan dengan metode yang Anda gunakan
    allowedHeaders: ['Content-Type', 'Authorization'] // Sesuaikan jika perlu
}));

// Gunakan rute API
app.use('/api', apiRoutes);

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

