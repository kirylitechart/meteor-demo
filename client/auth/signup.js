Template.signup.events({

    'submit #signup-form' : function(e, t) {
        e.preventDefault();
        var email = t.find('#signup-email').value;
        var password = t.find('#signup-password').value;

        Accounts.createUser({email: email, password : password}, function(err){
            if (err) {
                alert("Something went wrong");
            } else {
                window.location = '/';
            }
        });

        return false;
    }
});