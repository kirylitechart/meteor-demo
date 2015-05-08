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

Router.route('/signout', function () {
    if (Meteor.userId()) {
        this.render('signout');
    } else {
        window.location = '/';
    }
});

Router.route('/rooms', function () {
    if (Meteor.userId()) {
        this.render('rooms');
    } else {
        window.location = '/';
    }
});

Router.route('/rooms/:room_id', function () {
    if (Meteor.userId()) {
        var roomId = this.params.room_id;
        this.render('messages', {
            data: {roomId: roomId}
        });
    } else {
        window.location = '/';
    }
});