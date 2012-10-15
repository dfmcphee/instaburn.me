// Set up a collection to contain roles, burns, and votes
Roles = new Meteor.Collection("roles");
Burns = new Meteor.Collection("burns");
Votes = new Meteor.Collection("votes");

var topBurn = null;

// Client Side Scripts
if (Meteor.isClient) {
  Meteor.startup(function() {
	  Accounts.config({requireEmail:false, requireUsername:true});
  });
  
  // Set dataset for burns
  Template.leaderboard.burns = function () {
  	var limit = 0;
  	var start = 0;
  	
  	if (!Session.get("selected")) {
	    Session.set("selected", "random");
    }
    
    if (!Session.get("limit")) {
	   Session.set("limit", 0);
    }
    else {
	    limit = Session.get('limit');
    }
  
    var sort = {};
    
    if (Session.get("selected") === "new") {
      sort = {created_at: -1, score: 1};
    }
    else if (Session.get("selected") === "random") {
      sort = {score: -1, created_at: 1};
    }
    else {
      sort = {score: -1, created_at: 1};
    }
    
    topBurn = Burns.findOne({}, {sort: {score: -1, created_at: 1}});
    
    var burn_collection = Burns.find({}, {sort: sort}).fetch();
    
    if (Session.get("selected") === "random" && Session.get("randomize")) {
    	random = Session.get("randomize");
    	start = random;
    	limit = random +1;
    }
    
    return burn_collection.slice(start,limit);
  };
}

// Server Side Scripts
if (Meteor.isServer) {
  // User usernames for autentication
  Accounts.config({requireEmail:false, requireUsername:true});
  
  Meteor.startup(function () {
  	/* On server startup, create some Burns if the database is empty.
    if (Burns.find().count() === 0) {
      var names = ["Ada Lovelace",
                   "Grace Hopper",
                   "Marie Curie",
                   "Carl Friedrich Gauss",
                   "Nikola Tesla",
                   "Claude Shannon"];
      for (var i = 0; i < names.length; i++) {
        Burns.insert({content: names[i], score: Math.floor(Math.random()*10)*5});
      }
    }
    */
  });
}