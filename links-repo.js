if (Meteor.isClient) {
  Template.body.onRendered(() => {
    // $('#tags').selectize({
    //     plugins: ['remove_button'],
    //     delimiter: ',',
    //     persist: true,
    //     create: function(input) {
    //         return {
    //             value: input,
    //             text: input
    //         }
    //     }
    // });  
var selectize = $("#select").selectize();

var inviteList = [
    {
        text: 'Option One',
        value: 1
    },
    {
        text: 'Option Two',
        value: 2
    }
];
$("#select").options(inviteList);

// // selectize.clear();
// // selectize.clearOptions();
// selectize.load(function(callback) {
//     callback(inviteList);
// });

  }),
  Template.body.events({
    'click .button': (event) => {
      Links.insert({
        title: 'Awesome link',
        url: 'http://www.awseome.com',
        labels: [
          {
            name: 'Front-end'
          },
          {
            nae: 'Creativity'
          }
        ]
      })
    }
  })
}

if (Meteor.isServer) {
}
