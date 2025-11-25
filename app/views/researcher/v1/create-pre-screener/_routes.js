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

router.post('/inclusion-exclusion-criteria', function (req, res) {

    var addhealthConditions = req.session.data['addhealthConditions'];
    var addMedications = req.session.data['addMedications'];
    var addAddionalQuestion = req.session.data['addAddionalQuestion'];

    console.log(addhealthConditions)

    res.redirect('inclusion-exclusion-criteria');

})

// End Routes

module.exports = router;