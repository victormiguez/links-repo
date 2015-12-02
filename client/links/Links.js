Template.Links.events({
  'submit #insertLinkForm': () => {
    let tags = $('#link-tags')[0].selectize.getValue();

    tags.forEach((element) => {
      if (!Tags.findOne({_id: element})){
        Tags.insert({
          name: element,
          createdBy: Meteor.userId()
        });
      }
    });
  }
});

var linkHooks = {
  before: {
    insert: function(doc) {
      var tagsObject = [];
      var tags = $('#link-tags')[0].selectize.getValue();

      tags.forEach((element) => {
        tagsObject.push({tagId: element});
      });

      doc.tags = tagsObject;
      return doc;
    }
  }
}

AutoForm.addHooks('insertLinkForm', linkHooks);
