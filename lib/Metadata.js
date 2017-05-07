// Write your package code here!

// TODO:  refactor Items to FormItems
Metadata = new Meteor.Collection("metadata");
Metadata.allow({
  update: function () {
    return true;
  },
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});


if (Meteor.isClient) {
  Meteor.subscribe('metadata');
}

if (Meteor.isServer) {
  Meteor.publish('metadata', function () {
    return Metadata.find();
  });
}