const express = require('express');
const app = express();
const port = 3000;

app.use('/character', require('./Routes/characterRoutes'));

app.get("*", (req, res) => { res.status(404).send("Recurso no encontrado") });

app.listen(port);
