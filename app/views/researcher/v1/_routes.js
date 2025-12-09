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

    res.redirect('login-type-of-account');

});

router.post('/create-type-of-account', function (req, res) {

    var createTypeAccount = req.session.data['createTypeAccount'];

    if (createTypeAccount == "Create a GOV.UK One Login account") {

        res.redirect('https://govuk-one-login-prototype-6d2545e2d700.herokuapp.com/page-index/authentication/create-account');

    } else if (createTypeAccount == "Create an account with email and password") {

        res.redirect('create-an-account');

    } else {

        res.redirect('create-type-of-account');

    }

});

router.post('/login-type-of-account', function (req, res) {

    var loginTypeAccount = req.session.data['loginTypeAccount'];

    if (loginTypeAccount == "Sign in with GOV.UK One Login account") {

        res.redirect('https://govuk-one-login-prototype-6d2545e2d700.herokuapp.com/page-index/authentication/create-account');

    } else if (loginTypeAccount == "Sign in with email and password") {

        res.redirect('researcher-login');

    } else {

        res.redirect('login-type-of-account');

    }

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

    req.session.destroy()

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
    var addAdditionalQuestion = req.session.data['addAdditionalQuestion'];

    if (addhealthConditions && addhealthConditions.includes("Recruit by health condition")) {

        res.redirect('create-recruit-health-condition');

    } else if (addhealthConditions && addhealthConditions.includes("Exclude by health condition")) {

        res.redirect('create-exclude-health-condition');

    } else if (addMedications && addMedications.includes("Recruit by medication")) {

        res.redirect('create-recruit-medication');

    } else if (addMedications && addMedications.includes("Exclude by medication")) {

        res.redirect('create-exclude-medication');

    } else if (addAdditionalQuestion && addAdditionalQuestion.includes("I’d like to add additional questions")) {

        res.redirect('create-additional-question-one');

    } else {

        res.redirect('create-inclusion-exclusion-criteria');

    }

})

// RECRUIT BY HEALTH CONDITION

router.post('/create-recruit-health-condition', function (req, res) {

    var listedCondition = req.session.data['listedCondition'];

    // Make sure the 'conditions' array exists
    if (!req.session.data['conditions']) {
        req.session.data['conditions'] = [];
    }

    // Add the new condition to the array
    req.session.data['conditions'].push(listedCondition);

    // Redirect to the next page
    res.redirect('create-recruit-condition-answers');
});

router.post('/create-recruit-non-listed-health-condition', function (req, res) {

    var nonListedCondition = req.session.data['nonListedCondition'];

    // Make sure the 'conditions' array exists
    if (!req.session.data['conditions']) {
        req.session.data['conditions'] = [];
    }

    // Add the new condition to the array
    req.session.data['conditions'].push(nonListedCondition);

    // Redirect to the next page
    res.redirect('create-recruit-condition-answers');
});

router.post('/create-recruit-condition-answers', function (req, res) {

    var recruitAnotherCondition = req.session.data['recruitAnotherCondition'];
    var addhealthConditions = req.session.data['addhealthConditions'];
    var addMedications = req.session.data['addMedications'];
    var addAdditionalQuestion = req.session.data['addAdditionalQuestion'];

    if (recruitAnotherCondition == "Yes") {

        res.redirect('create-recruit-health-condition');

    } else if (recruitAnotherCondition == "No") {

        if (addhealthConditions) {
            if (addhealthConditions.includes('Exclude by health condition')) {
 
                res.redirect('create-exclude-health-condition');

            }
        }

        if (addMedications) {
            if (addMedications.includes('Recruit by medication')) {
                
                res.redirect('create-recruit-medication');

            }
            if (addMedications.includes('Exclude by medication')) {

                res.redirect('create-exclude-medication');

            }
        }

        if (addAdditionalQuestion) {
            if (addAdditionalQuestion.includes('I’d like to add additional questions')) {

                res.redirect('create-additional-question-one');

            }
        }

        res.redirect('create-check-answers');

    } else {

        res.redirect('create-recruit-condition-answers');

    }

});

// EXCLUDE BY HEALTH CONDITION

router.post('/create-exclude-health-condition', function (req, res) {

    var listedConditionExclude = req.session.data['listedConditionExclude'];

    // Make sure the 'conditionsExclude' array exists
    if (!req.session.data['conditionsExclude']) {
        req.session.data['conditionsExclude'] = [];
    }

    // Add the new condition to the array
    req.session.data['conditionsExclude'].push(listedConditionExclude);

    // Redirect to the next page
    res.redirect('create-exclude-condition-answers');
});

router.post('/create-exclude-non-listed-health-condition', function (req, res) {

    var nonListedConditionExclude = req.session.data['nonListedConditionExclude'];

    // Make sure the 'conditionsExclude' array exists
    if (!req.session.data['conditionsExclude']) {
        req.session.data['conditionsExclude'] = [];
    }

    // Add the new condition to the array
    req.session.data['conditionsExclude'].push(nonListedConditionExclude);

    // Redirect to the next page
    res.redirect('create-exclude-condition-answers');
});

router.post('/create-exclude-condition-answers', function (req, res) {

    var excludeAnotherCondition = req.session.data['excludeAnotherCondition'];
    var addhealthConditions = req.session.data['addhealthConditions'];
    var addMedications = req.session.data['addMedications'];
    var addAdditionalQuestion = req.session.data['addAdditionalQuestion'];

    if (excludeAnotherCondition == "Yes") {

        res.redirect('create-exclude-health-condition');

    } else if (excludeAnotherCondition == "No") {

        if (addMedications) {
            if (addMedications.includes('Recruit by medication')) {
                
                res.redirect('create-recruit-medication');

            }
            if (addMedications.includes('Exclude by medication')) {

                res.redirect('create-exclude-medication');

            }
        }

        if (addAdditionalQuestion) {
            if (addAdditionalQuestion.includes('I’d like to add additional questions')) {

                res.redirect('create-additional-question-one');

            }
        }

        res.redirect('create-check-answers');

    } else {

        res.redirect('create-exclude-condition-answers');

    }

});

// RECRUIT BY MEDICATION

router.post('/create-recruit-medication', function (req, res) {

    var listedMedication = req.session.data['listedMedication'];

    // Make sure the 'medications' array exists
    if (!req.session.data['medications']) {
        req.session.data['medications'] = [];
    }

    // Add the new medication to the array
    req.session.data['medications'].push(listedMedication);

    // Redirect to the next page
    res.redirect('create-recruit-medication-answers');
});

router.post('/create-recruit-non-listed-medication', function (req, res) {

    var nonListedMedication = req.session.data['nonListedMedication'];

    // Make sure the 'medications' array exists
    if (!req.session.data['medications']) {
        req.session.data['medications'] = [];
    }

    // Add the new medication to the array
    req.session.data['medications'].push(nonListedMedication);

    // Redirect to the next page
    res.redirect('create-recruit-medication-answers');
});

router.post('/create-recruit-medication-answers', function (req, res) {

    var recruitAnotherMedication = req.session.data['recruitAnotherMedication'];
    var addMedications = req.session.data['addMedications'];
    var addAdditionalQuestion = req.session.data['addAdditionalQuestion'];

    if (recruitAnotherMedication == "Yes") {

        res.redirect('create-recruit-medication');

    } else if (recruitAnotherMedication == "No") {

        if (addMedications) {
            if (addMedications.includes('Exclude by medication')) {

                res.redirect('create-exclude-medication');

            }
        }

        if (addAdditionalQuestion) {
            if (addAdditionalQuestion.includes('I’d like to add additional questions')) {

                res.redirect('create-additional-question-one');

            }
        }

        res.redirect('create-check-answers');

    } else {

        res.redirect('create-recruit-medication-answers');

    }

});

// EXCLUDE BY MEDICATION

router.post('/create-exclude-medication', function (req, res) {

    var listedMedicationExclude = req.session.data['listedMedicationExclude'];

    // Make sure the 'medicationsExclude' array exists
    if (!req.session.data['medicationsExclude']) {
        req.session.data['medicationsExclude'] = [];
    }

    // Add the new medication to the array
    req.session.data['medicationsExclude'].push(listedMedicationExclude);

    // Redirect to the next page
    res.redirect('create-exclude-medication-answers');
});

router.post('/create-exclude-non-listed-medication', function (req, res) {

    var nonListedMedicationExclude = req.session.data['nonListedMedicationExclude'];

    // Make sure the 'medicationsExclude' array exists
    if (!req.session.data['medicationsExclude']) {
        req.session.data['medicationsExclude'] = [];
    }

    // Add the new medication to the array
    req.session.data['medicationsExclude'].push(nonListedMedicationExclude);

    // Redirect to the next page
    res.redirect('create-exclude-medication-answers');
});

router.post('/create-exclude-medication-answers', function (req, res) {

    var recruitAnotherMedication = req.session.data['recruitAnotherMedication'];
    var addMedications = req.session.data['addMedications'];
    var addAdditionalQuestion = req.session.data['addAdditionalQuestion'];

    if (recruitAnotherMedication == "Yes") {

        res.redirect('create-exclude-medication');

    } else if (recruitAnotherMedication == "No") {

        if (addAdditionalQuestion) {
            if (addAdditionalQuestion.includes('I’d like to add additional questions')) {

                res.redirect('create-additional-question-one');

            }
        }

        res.redirect('create-check-answers');

    } else {

        res.redirect('create-exclude-medication-answers');

    }

});

// Additional Questions

router.post('/create-additional-question-one', function (req, res) {

    var question1Text = req.session.data['question1Text'];
    var question1Answer = req.session.data['question1Answer'];
    var question1SoftFail = req.session.data['question1SoftFail'];

    if (question1Text && question1Answer) {

        res.redirect('create-additional-question-answers');

    } else {

        res.redirect('create-additional-question-one');

    }
})

router.post('/create-additional-question-two', function (req, res) {

    var question2Text = req.session.data['question2Text'];
    var question2Answer = req.session.data['question2Answer'];
    var question2SoftFail = req.session.data['question2SoftFail'];

    if (question2Text && question2Answer) {

        res.redirect('create-additional-question-answers');

    } else {

        res.redirect('create-additional-question-two');

    }
})

router.post('/create-additional-question-three', function (req, res) {

    var question3Text = req.session.data['question3Text'];
    var question3Answer = req.session.data['question3Answer'];
    var question3SoftFail = req.session.data['question3SoftFail'];

    if (question3Text && question3Answer) {

        res.redirect('create-additional-question-answers');

    } else {

        res.redirect('create-additional-question-three');

    }
})

router.post('/create-additional-question-four', function (req, res) {

    var question4Text = req.session.data['question4Text'];
    var question4Answer = req.session.data['question4Answer'];
    var question4SoftFail = req.session.data['question4SoftFail'];

    if (question4Text && question4Answer) {

        res.redirect('create-additional-question-answers');

    } else {

        res.redirect('create-additional-question-four');

    }
})

router.post('/create-additional-question-five', function (req, res) {

    var question5Text = req.session.data['question5Text'];
    var question5Answer = req.session.data['question5Answer'];
    var question5SoftFail = req.session.data['question5SoftFail'];

    if (question5Text && question5Answer) {

        res.redirect('create-additional-question-answers');

    } else {

        res.redirect('create-additional-question-five');

    }
})

router.post('/create-additional-question-answers', function (req, res) {

    var anotherQuestion = req.session.data['anotherQuestion'];
    var question1Text = req.session.data['question1Text'];
    var question2Text = req.session.data['question2Text'];
    var question3Text = req.session.data['question3Text'];
    var question4Text = req.session.data['question4Text'];
    var question5Text = req.session.data['question5Text'];

    if (anotherQuestion !== "Yes") {
        res.redirect('create-check-answers');
    }

    // Go to the next unanswered question
    if (!question1Text) {
        res.redirect('create-additional-question-one');
    } 

    if (!question2Text) {
        res.redirect('create-additional-question-two');
    }

    if (!question3Text) {
        res.redirect('create-additional-question-three');
    }

    if (!question4Text) {
        res.redirect('create-additional-question-four');
    }

    if (!question5Text) {
        res.redirect('create-additional-question-five');
    }

    // All questions answered
    res.redirect('create-additional-question-answers');

});

// End Routes

module.exports = router;