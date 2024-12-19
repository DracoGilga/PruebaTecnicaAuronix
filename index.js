require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/character', require('./Routes/characterRoutes'));

app.get("*", (req, res) => { res.status(404).send("Recurso no encontrado") });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});