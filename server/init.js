Meteor.startup(() => {
  if (Tags.find({}).count() < 1){
    var defaultTags = [
      {
        name: 'Design'
      },
      {
        name: 'Creativity'
      },
      {
        name: 'JavaScript'
      }
    ];
    defaultTags.forEach((element) => {
      Tags.insert(element);
    });
  }
});
