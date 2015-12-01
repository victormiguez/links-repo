Template.Links.helpers({
  tags: function () {
    return Session.get('tags');
  }
});

Template.Links.events({
  'submit #insertLinkForm': (event) => {
    var tags = $('#link-tags')[0].selectize.getValue();
    Session.set('tags', tags);
  }
})

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

  var selectize_tags = $('#link-tags')[0].selectize;
  var storedTags = Tags.find().fetch();
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
      var tags = [];
      
      Session.get('tags').forEach((element) => {
        tags.push({tagId: element});
      });
      
      doc.tags = tags;
      return doc;
    }
  }
}

AutoForm.addHooks('insertLinkForm', linkHooks);
