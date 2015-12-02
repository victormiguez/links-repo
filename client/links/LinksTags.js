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
