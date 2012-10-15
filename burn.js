if (Meteor.isClient) {  
  // Burn properties
  Template.burn.selected = function () {
    return Session.equals("selected_burn", this._id) ? "selected" : '';
  };
  
  Template.burn.selected_burn = function() {
  	if (Meteor.user()) {
	  	return Session.equals("selected_burn", this._id);
  	}
    else {
	    return false;
    }
  };
  
  Template.burn.grade = function () {
    return getBurnDegree(this.score).degree;
  };
  
  Template.burn.grade_class = function () {
	 return getBurnDegree(this.score).label_class;
  };
  
  // Burn Events
  Template.burn.events({
    'click': function () {
      Session.set("selected_burn", this._id);
    }
  });
}