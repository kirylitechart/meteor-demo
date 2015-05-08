/* main router */

Router.route('/', function () {
    this.render('greeting', {data: {title: 'My Title'}});
});

Router.route('/signin', function () {
    if (Meteor.userId()) {
        window.location = '/';
    } else {
        this.render('signin');
    }
});

Router.route('/signup', function () {
    if (Meteor.userId()) {
        window.location = '/';
    } else {
        this.render('signup');
    }
});

Router.route('/signout', function(){
   if (Meteor.userId()){
       this.render('signout');
   } else {
       window.location = '/';
   }
});