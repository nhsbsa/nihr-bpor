// ********************************
// Researcher
// ********************************

// External dependencies
const express = require('express');
const router = express.Router();


// Routes

router.post('/researcher/create-pre-screener/index', function (req, res) {
 
    res.redirect('/researcher/create-pre-screener/study-details');

})

// End Routes

module.exports = router;