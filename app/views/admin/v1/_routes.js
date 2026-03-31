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

router.post('/one-time-passcode', function (req, res) {

    req.session.data = {}

    res.redirect('home');

});

router.post('/update-profile', function (req, res) {

    var adminTitle = req.session.data['adminTitle'];
    var adminFirstName = req.session.data['adminFirstName'];
    var adminLastName = req.session.data['adminLastName'];
    var adminRole = req.session.data['adminRole'];



if (adminTitle && adminFirstName && adminLastName && (adminRole === "System administrator" || adminRole === "Study administrator")) {
    
    if (adminRole == "Study administrator") {
        
        res.redirect('logged-out');

    } else {

        res.redirect('home-profile-updated');

    }

} else {

    res.redirect('update-profile');

}

});

router.post('/create-admin-accounts', function (req, res) {

    var createAdminTitle = req.session.data['createAdminTitle'];
    var createAdminFirstName = req.session.data['createAdminFirstName'];
    var createAdminLastName = req.session.data['createAdminLastName'];
    var createAdminEmail = req.session.data['createAdminEmail'];
    var createAdminRole = req.session.data['createAdminRole'];

if (
  createAdminTitle &&
  createAdminTitle !== 'Select title' &&
  createAdminFirstName &&
  createAdminLastName &&
  createAdminEmail &&
  createAdminRole &&
  createAdminRole !== 'Select role'
) {
    
    res.redirect('manage-accounts-updated');

} else {

    res.redirect('create-admin-accounts');

}

});

router.post('/edit-researcher-account-update-profile', function (req, res) {

    var researcherTitle = req.session.data['researcherTitle'];
    var researcherFirstName = req.session.data['researcherFirstName'];
    var researcherLastName = req.session.data['researcherLastName'];
    var researcherOrganisation = req.session.data['researcherOrganisation'];
    var researcherOrganisationName = req.session.data['researcherOrganisationName'];

    // If BOTH organisation fields exist → stay on update page
    if (researcherOrganisation && researcherOrganisationName) {
        return res.redirect('edit-researcher-account-update-profile');
    }

    // If core fields + EITHER organisation field exist → success page
    if (
        researcherTitle &&
        researcherFirstName &&
        researcherLastName &&
        (researcherOrganisation || researcherOrganisationName)
    ) {
        return res.redirect('edit-researcher-account-updated');
    }

    // Otherwise → back to form
    return res.redirect('edit-researcher-account-update-profile');
});

router.post('/edit-study-admin-account-update-profile', function (req, res) {

    var studyAdminTitle = req.session.data['studyAdminTitle'];
    var studyAdminFirstName = req.session.data['studyAdminFirstName'];
    var studyAdminLastName = req.session.data['studyAdminLastName'];
    var studyAdminRole = req.session.data['studyAdminRole'];

if (studyAdminTitle && studyAdminFirstName && studyAdminLastName && studyAdminRole) {
    
    res.redirect('edit-study-admin-account-updated');

} else {

    res.redirect('edit-study-admin-account-update-profile');

}

});

router.post('/edit-system-admin-account-update-profile', function (req, res) {

    var systemAdminTitle = req.session.data['systemAdminTitle'];
    var systemAdminFirstName = req.session.data['systemAdminFirstName'];
    var systemAdminLastName = req.session.data['systemAdminLastName'];
    var systemAdminRole = req.session.data['systemAdminRole'];

if (systemAdminTitle && systemAdminFirstName && systemAdminLastName && systemAdminRole) {
    
    res.redirect('edit-system-admin-account-updated');

} else {

    res.redirect('edit-system-admin-account-update-profile');

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

router.post('/update-pre-screener-pending-status', function (req, res) {

    res.redirect('review-pre-screener');

});

router.post('/update-pre-screener-approved-status', function (req, res) {

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