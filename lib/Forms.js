// Write your package code here!

// TODO:  refactor Items to FormItems
Forms = new Meteor.Collection("TrialsForms");
Forms.allow({
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
  Meteor.subscribe('TrialsForms');
}

if (Meteor.isServer) {
  Meteor.publish('TrialsForms', function () {
    return Forms.find();
  });
}