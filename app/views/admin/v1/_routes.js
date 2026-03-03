// ********************************
// Admin
// ********************************

// External dependencies
const express = require('express');
const router = express.Router();


// Routes

router.post('/index', function (req, res) {

    res.redirect('login');

});

router.post('/update-study-name', function (req, res) {

    res.redirect('review-pre-screener');

});

// End Routes

module.exports = router;