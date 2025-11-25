// ********************************
// Researcher
// ********************************

// External dependencies
const express = require('express');
const router = express.Router();


// Routes

router.post('/index', function (req, res) {

  res.redirect('study-details');

});

router.post('/study-details', function (req, res) {

    var studyName = req.session.data['studyName'];
    var studyID = req.session.data['studyID'];
    var researchArmSubset = req.session.data['researchArmSubset'];

    if (studyName && studyID) {

        res.redirect('inclusion-exclusion-criteria');

    } else {

        res.redirect('study-details');

    }
})

// End Routes

module.exports = router;