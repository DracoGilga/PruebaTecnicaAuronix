import 'dotenv/config';
import express from 'express';
import characterRoutes from './Routes/characterRoutes.js';

const app = express();
const port = process.env.PORT ?? 3000;

app.use('/character', characterRoutes);

app.all('*', (req, res) => {
    res.status(404).send('Recurso no encontrado');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});