if (Meteor.isClient) {   
  // Random Burn Properties
  Template.random.randomize = function() {
    if (Session.get("selected") === "random") {
      return true;
    }
    else {
      return false;
    }
  };
  
  // Random Burn Events
  Template.random.events({
	'click a.burn-me': function () {
		var size = Burns.find({}).fetch().length - 1;
		var random = Math.floor((Math.random() * size)+1);
		while (Session.get("randomize") === random) {
			random = Math.floor((Math.random() * size)+1);
		}
      Session.set("randomize", random);
      return false;
    } 
  });
}