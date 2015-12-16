Meteor.publish('tags', () => {
  return Tags.find({ 'createdBy' : { '$exists' : false } });
});

Meteor.publish('tagsByUser', (userId) => {
  return Tags.find({ createdBy: userId });
});


Meteor.publish('linksByUser', (userId) => {
  return Links.find({ createdBy: userId });
});
