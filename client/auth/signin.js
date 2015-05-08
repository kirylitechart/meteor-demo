Template.signin.events({

    'submit #signin-form': function (e, t) {
        e.preventDefault();

        var email = t.find('#signin-email').value;
        var password = t.find('#signin-password').value;

        Meteor.loginWithPassword(email, password, function (err) {
            if (err) {
                alert("Wrong email or password");
            } else {
                window.location = '/';
            }
        });

        return false;
    }

});