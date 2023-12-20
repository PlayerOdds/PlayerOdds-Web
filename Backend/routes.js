// routes.js
const express = require('express');
const router = express.Router();
const db = require('./database'); // Assuming you have a database.js file for your DB connection

router.get('/data', (req, res) => {
    db.query('SELECT * FROM props', (error, results) => {
        if (error) {
            res.status(500).send('Error fetching data');
        } else {
            res.json(results);
        }
    });
});

module.exports = router;
