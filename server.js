require('dotenv').config();

const express = require('express');
const { artworks } = require('./data.js');

const app = express();
const cors = require('cors');

app.use(cors());

app.get('/art', (req, res) => {
    res.json(artworks);
});

app.get('/art/:id', (req, res) => {
    const matchingArt = artworks.find(piece => piece.id === Number(req.params.id));

    res.json(matchingArt);
});

module.exports = { app };