if (Meteor.isServer) {
  // Set permissions for burns
  Burns.allow({
    insert: function(userId, doc) {
      if (Meteor.user()) {
        return true;
      }
      else {
        return false;
      }
    },
    update: function(userId, docs, fields, modifier) {
      if (Meteor.user()) {
        return true;
      }
      else {
        return false;
      }
    },
    remove: function(userId, docs){
      if (Meteor.user()) {
    	role = Roles.findOne({user:Meteor.userId()});
    	if (role.name === "admin") {
	    	return true;
    	}
    	else {
	    	return false;
    	}
	  }
	  else {
      	return false;
      }
    },
    fetch: function(collection_array){
      return true;
    }
  });
  
  // Set permissions for votes
  Votes.allow({
    insert: function(userId, doc) {
      if (Meteor.user()) {
        return true;
      }
      else {
        return false;
      }
    },
    update: function(userId, docs, fields, modifier) {
      if (Meteor.user()) {
        return true;
      }
      else {
        return false;
      }
    },
    remove: function(userId, docs){
      if (Meteor.user()) {
    	role = Roles.findOne({user:Meteor.userId()});
    	if (role.name === "admin") {
	    	return true;
    	}
    	else {
	    	return false;
    	}
	  }
	  else {
      	return false;
      }
    },
    fetch: function(){
      return true;
    }
  });
  
  // Set permissions for roles
  Roles.allow({
    insert: function(userId, doc) {
      if (Meteor.user()) {
    	role = Roles.findOne({user:Meteor.userId()});
    	if (role.name === "admin") {
	    	return true;
    	}
    	else {
	    	return false;
    	}
	  }
	  else {
      	return false;
      }
    },
    update: function(userId, docs, fields, modifier) {
      if (Meteor.user()) {
    	role = Roles.findOne({user:Meteor.userId()});
    	if (role.name === "admin") {
	    	return true;
    	}
    	else {
	    	return false;
    	}
	  }
	  else {
      	return false;
      }
    },
    remove: function(userId, docs){
      if (Meteor.user()) {
    	role = Roles.findOne({user:Meteor.userId()});
    	if (role.name === "admin") {
	    	return true;
    	}
    	else {
	    	return false;
    	}
	  }
	  else {
      	return false;
      }
    },
    fetch: function(){
      return true;
    }
  });
}