Template.Links.onCreated(function () {
  let self = this;

  self.autorun(() => {
    self.subscribe('linksByUser', Meteor.userId());
    self.subscribe('tagsByUser', Meteor.userId());
  });
});


Template.Links.helpers({
  links: () => {
    return Links.find().fetch();
  },
  tagName: (tagId) => {
    return Tags.findOne({_id: tagId}).name;
  }
})

var linkHooks = {
  before: {
    insert: function(doc) {
      let tagsObject = [];
      let tags = $('#link-tags')[0].selectize.getValue();

      tags.forEach((element) => {
        if (!Tags.findOne({name: element})){
          Tags.insert({
            name: element,
            createdBy: Meteor.userId()
          }, (err, res) => {
            console.log(res);
            tagsObject.push({tagId: res});
            console.log(tagsObject);
          });
        } else {
          tagsObject.push({tagId: element});
        }
      });
      console.log(tagsObject);
      doc.tags = tagsObject;
      return doc;
    }
  }
}

AutoForm.addHooks('insertLinkForm', linkHooks);
