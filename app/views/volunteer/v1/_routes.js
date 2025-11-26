// ********************************
// Volunteer
// ********************************

// External dependencies
const express = require('express');
const router = express.Router();

// Volunteer MVP

router.post('/start', function (req, res) {
 
    res.redirect('condition');

})

router.post('/condition', function (req, res) {

    var conditionQuestion = req.session.data['conditionQuestion'];

    if (conditionQuestion == "Yes") {
        res.redirect('medication');
    } else if (conditionQuestion == "No") {
        res.redirect('no-match');
    } else {
        res.redirect('condition');

    }

})

router.post('/medication', function (req, res) {

    var medicationQuestion = req.session.data['medicationQuestion'];

    if (medicationQuestion == "Yes") {
        res.redirect('diagnosis');
    } else if (medicationQuestion == "No") {
        res.redirect('no-match');
    } else {
        res.redirect('medication');

    }

})

router.post('/diagnosis', function (req, res) {

    var diagnosisQuestion = req.session.data['diagnosisQuestion'];

    if (diagnosisQuestion == "Yes") {
        res.redirect('hospital');
    } else if (diagnosisQuestion == "No") {
        res.redirect('no-match');
    } else {
        res.redirect('diagnosis');

    }

})

router.post('/hospital', function (req, res) {

    var hospitalQuestion = req.session.data['hospitalQuestion'];

    if (hospitalQuestion == "Yes") {
        res.redirect('how-long-metformin');
    } else if (hospitalQuestion == "No") {
        res.redirect('how-long-metformin');
    } else {
        res.redirect('hospital');

    }

})

router.post('/how-long-metformin', function (req, res) {

    var metforminHowLongQuestion = req.session.data['metforminHowLongQuestion'];

    if (metforminHowLongQuestion == "Yes") {
        res.redirect('woman');
    } else if (metforminHowLongQuestion == "No") {
        res.redirect('no-match');
    } else {
        res.redirect('how-long-metformin');

    }

})

router.post('/woman', function (req, res) {

    var womanQuestion = req.session.data['womanQuestion'];

    if (womanQuestion == "Yes") {
        res.redirect('consent-target-medication');
    } else if (womanQuestion == "No") {
        res.redirect('no-match');
    } else {
        res.redirect('woman');

    }

})

router.post('/consent-target-medication', function (req, res) {

    var consentTargetMedicationQuestion = req.session.data['consentTargetMedicationQuestion'];

    if (consentTargetMedicationQuestion == "Yes") {
        res.redirect('review-details');
    } else if (consentTargetMedicationQuestion == "No") {
        res.redirect('no-match');
    } else {
        res.redirect('consent-target-medication');

    }

})

router.post('/review-details', function (req, res) {

    var phoneNumber = req.session.data['phoneNumber'];

    res.redirect('check-your-answers');

})

router.post('/check-your-answers', function (req, res) {

    var conditionQuestion = req.session.data['conditionQuestion'];
    var medicationQuestion = req.session.data['medicationQuestion'];
    var diagnosisQuestion = req.session.data['diagnosisQuestion'];
    var hospitalQuestion = req.session.data['hospitalQuestion'];
    var metforminHowLongQuestion = req.session.data['metforminHowLongQuestion'];
    var womanQuestion = req.session.data['womanQuestion'];
    var consentTargetMedicationQuestion = req.session.data['consentTargetMedicationQuestion'];

    if (conditionQuestion === "Yes" && medicationQuestion === "Yes" && diagnosisQuestion === "Yes" && hospitalQuestion === "Yes" && metforminHowLongQuestion === "Yes" && womanQuestion === "Yes" && consentTargetMedicationQuestion === "Yes") {
        res.redirect('match');
    } else if (hospitalQuestion === "Yes" || hospitalQuestion === "No") {
        res.redirect('partial-match');
    }

})

// End Routes

module.exports = router;