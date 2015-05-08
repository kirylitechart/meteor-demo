var Messages = new Mongo.Collection("Messages");

Messages.allow({
    insert: function (userId, doc) {
        doc.created = new Date();
        return doc.author === userId;
    },
    remove: function (userId, post) {
        return false;
    },
    update: function (userId, doc) {
        return false;
    }
});