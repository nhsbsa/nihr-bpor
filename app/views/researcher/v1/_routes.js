// ********************************
// RESEARCHER
// ********************************

// External dependencies
const express = require('express');
const router = express.Router();

// ********************
// Account Registration
// ********************

router.post('/index', function (req, res) {

    res.redirect('create-an-account');

});

router.post('/create-an-account', function (req, res) {

    var emailAddress = req.session.data['emailAddress'];
    var password = req.session.data['password'];

    if (emailAddress && password) {

        res.redirect('verify-your-email');

    } else {

        res.redirect('create-an-account');

    }

});

router.post('/tell-us-about-yourself', function (req, res) {

    var title = req.session.data['title'];
    var firstName = req.session.data['firstName'];
    var lastName = req.session.data['lastName'];
    var emailAddress = req.session.data['emailAddress'];
    var organisation = req.session.data['organisation'];
    var termsConditions = req.session.data['termsConditions'];
    var privacyNotice = req.session.data['privacyNotice'];

    if (title && firstName && lastName && emailAddress && organisation) {

        res.redirect('sign-up-answers');

    } else {

        res.redirect('tell-us-about-yourself');

    }

});

router.post('/sign-up-answers', function (req, res) {

    res.redirect('registration-submitted');

});

// ********************
// Account Login
// ********************

router.post('/researcher-login', function (req, res) {

    var emailAddress = req.session.data['emailAddress'];
    var password = req.session.data['password'];

    if (emailAddress && password) {

        res.redirect('home');

    } else {

        res.redirect('researcher-login');

    }

});

router.post('/forgot-password', function (req, res) {

    var emailAddress = req.session.data['emailAddress'];

    if (emailAddress) {

        res.redirect('check-your-email');

    } else {

        res.redirect('forgot-password');

    }

});

router.post('/reset-your-password', function (req, res) {

    var password1 = req.session.data['password1'];
    var password2 = req.session.data['password2'];

if (password1 && password2 && password1 === password2) {
    
    res.redirect('password-changed');

} else {

    res.redirect('reset-your-password');

}

});

router.post('/home', function (req, res) {

    res.redirect('delete-account-active-studies');

});

router.post('/update-profile', function (req, res) {

    var title = req.session.data['title'];
    var firstName = req.session.data['firstName'];
    var lastName = req.session.data['lastName'];


if (title && firstName && lastName) {
    
    res.redirect('home-profile-updated');

} else {

    res.redirect('update-profile');

}

});

router.post('/delete-account-active-studies', function (req, res) {

    res.redirect('delete-account');

});

router.post('/delete-account', function (req, res) {

    res.redirect('account-deleted');

});

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