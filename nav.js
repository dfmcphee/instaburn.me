if (Meteor.isClient) {  
  // Nav Properties
  Template.nav.random_selected = function() {
    return Session.equals("selected", "random") ? "active" : '';
  };
  
  Template.nav.hot_selected = function() {
    return Session.equals("selected", "hot") ? "active" : '';
  };
  
  Template.nav.new_selected = function() {
    return Session.equals("selected", "new") ? "active" : '';
  };
  
  // Nav Events
  Template.nav.events({
  	'click a.burn': function () {
      Session.set("selected", "random");
      Session.set("limit", 0);
    },
	'click a.new': function () {
      Session.set("selected", "new");
      Session.set("limit", 10);
    },
    'click a.hot': function () {
      Session.set("selected", "hot");
      Session.set("limit", 10);
    }
  });
}