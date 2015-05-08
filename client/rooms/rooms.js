
Template.rooms.helpers({

    rooms: function () {
        return Rooms.find();
    }

});

Template.rooms.events({

    'click #add-new-room': function (e, t) {

        var roomNameInput = t.find("#new-room-name");
        var newRoomName = roomNameInput.value;

        Rooms.insert({
            name: newRoomName,
            author: Meteor.userId()
        });

        roomNameInput.value = '';
        roomNameInput.blur();
    }

});