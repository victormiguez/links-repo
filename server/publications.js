Meteor.publish('tags', () => {
  return Tags.find({ 
    'createdBy' : { '$exists' : false }
  });
});
