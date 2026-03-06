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

router.post('/update-profile', function (req, res) {

    var adminTitle = req.session.data['adminTitle'];
    var adminFirstName = req.session.data['adminFirstName'];
    var adminLastName = req.session.data['adminLastName'];


if (adminTitle && adminFirstName && adminLastName) {
    
    res.redirect('home-profile-updated');

} else {

    res.redirect('update-profile');

}

});

router.post('/update-study-name', function (req, res) {

    res.redirect('review-pre-screener');

});

router.post('/update-study-id', function (req, res) {

    res.redirect('review-pre-screener');

});

router.post('/select-administrator', function (req, res) {

    res.redirect('review-pre-screener');

});

router.post('/update-pre-screener-status', function (req, res) {

    res.redirect('review-pre-screener');

});

router.post('/change-status', function (req, res) {

    res.redirect('view-pre-screeners');

});

router.post('/view-report-update-status', function (req, res) {

    var updateContactedStatus = req.session.data['updateContactedStatus'];

    console.log(updateContactedStatus);

    if (updateContactedStatus) {

        res.redirect('view-report-updated');

    } else {

        res.redirect('view-report-update-status');

    }

});

// End Routes

module.exports = router;