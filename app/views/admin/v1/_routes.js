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

// End Routes

module.exports = router;