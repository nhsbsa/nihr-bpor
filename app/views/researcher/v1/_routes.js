// ********************************
// RESEARCHER
// ********************************

// External dependencies
const express = require('express');
const router = express.Router();

// ********************
// Create Pre-Screener
// ********************

router.post('/create-start', function (req, res) {

  res.redirect('create-study-details');

});

router.post('/create-study-details', function (req, res) {

    var studyName = req.session.data['studyName'];
    var studyID = req.session.data['studyID'];
    var researchArmSubset = req.session.data['researchArmSubset'];

    if (studyName && studyID) {

        res.redirect('create-inclusion-exclusion-criteria');

    } else {

        res.redirect('create-study-details');

    }
})

router.post('/create-inclusion-exclusion-criteria', function (req, res) {

    var addhealthConditions = req.session.data['addhealthConditions'];
    var addMedications = req.session.data['addMedications'];
    var addAddionalQuestion = req.session.data['addAddionalQuestion'];

    console.log(addhealthConditions)

    res.redirect('create-recruit-health-condition');

})

// End Routes

module.exports = router;