if (Meteor.isClient) {
  Template.body.onRendered(() => {

    $("#link-tags").selectize({
      plugins: ['remove_button'],
      delimiter: ',',
      maxItems: null,
      create: true,
      persist: true,
      create: function(input) {
        return {
          value: input,
          text: input
        }
      }
    });

    
    setTimeout(() => {
      var selectize_tags = $("#link-tags")[0].selectize;
      var storedTags = Tags.find().fetch();
      storedTags.forEach((element) => {
        selectize_tags.addOption({
          text: element.name,
          value: element._id
        });
      });
    }, 5000);
  }),
  Template.body.events({
    'click .button': (event) => {
      console.log(Tags.find().fetch());
    }
  })
}

if (Meteor.isServer) {
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
}
