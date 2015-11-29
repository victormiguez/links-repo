Tags = new Mongo.Collection('tags');

Tags.allow({
  insert: (userId, doc) => {
    return !!userId;
  }
});

TagSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Title'
  },
  createdBy: {
    type: String,
    label: 'Created By',
    autoform: {
      type: 'hidden'
    },
    optional: true
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

Tags.attachSchema(TagSchema);
