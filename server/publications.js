Meteor.publish('tags', () => {
  return Tags.find({ 
    'createdBy' : { '$exists' : false }
  });
});

Meteor.publish('linksByUser', (userId) => {
  console.log(userId);
  return Links.find({ createdBy: userId });
});
