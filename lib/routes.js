FlowRouter.route('/', {
  name: 'links',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Links'});
  }
});
