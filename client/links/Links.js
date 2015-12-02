Template.Links.helpers({
  tags: function () {
    return Session.get('tags');
  }
});

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

Template.tagSelect.onRendered(() => {
  this.$('#link-tags').selectize({
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

  let selectize_tags = $('#link-tags')[0].selectize;
  let storedTags = Tags.find().fetch();
  console.log(storedTags);
  storedTags.forEach((element) => {
    selectize_tags.addOption({
      text: element.name,
      value: element._id
    });
  });
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
