Template.messages.helpers({

    room: function () {
        var roomId = this.roomId;
        return Rooms.findOne(roomId);
    },

    messages: function () {
        var roomId = this.roomId;
        return Messages.find({room: roomId});
    }

});

Template.messages.events({

    'click #add-new-message': function (e, t) {

        var messageInput = t.find("#new-message");
        var message = messageInput.value;

        Messages.insert({
            message: message,
            author: Meteor.userId(),
            authorEmail : Meteor.user().emails[0].address,
            room: this.roomId
        });

        messageInput.value = '';
        messageInput.blur();
    }

});