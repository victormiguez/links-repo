Links = new Mongo.Collection('links');

Links.allow({
  insert: (userId, doc) => {
    return !!userId;
  }
});

LabelSchema = new SimpleSchema({
  name: {
    type: String
  }
});

LinkSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'Title'
  },
  url: {
    type: String,
    label: 'URL'
  },
  labels: {
    type: [LabelSchema]
  },
  createdBy: {
    type: String,
    label: 'Created By',
    autoValue: () => {
      return Meteor.userId();
    },
    autoform: {
      type: 'hidden'
    }
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue: () => {
      return new Date();
    },
    autoform: {
      type: 'hidden'
    }
  }
});

Links.attachSchema(LinkSchema);
