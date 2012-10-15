if (Meteor.isClient) {
  // Leaderboard properties
  Template.leaderboard.logged_in = function() {
    user = Meteor.user();
    if (user) {
      return true;
    }
    else {
      return false;
    }
  };
  
  Template.leaderboard.more_burns = function() {
    if ((Session.get("limit") < Burns.find({}, {sort:{score: -1, created_at: 1}}).fetch().length) && Session.get("selected") != "random") {
      return true;
    }
    else {
      return false;
    }
  };
  
  // Leaderboard Events
  Template.leaderboard.events({
  	'click a.load-more': function () {
      var limit = Session.get("limit") + 10;
      Session.set("limit", limit);
      return false;
    },
    'click a.inc': function () {
      if (Meteor.user()) {
        var burn_id = Session.get("selected_burn");
        var user_id = Meteor.user()._id;
        var votes = Votes.find({user: user_id, burn: burn_id}).count();
        if (votes === 0) {
          Burns.update(Session.get("selected_burn"), {$inc: {score: 1}});
          Votes.insert({user: user_id, burn: burn_id});
        }
        else {
          alert('You have already voted on this burn.');
        }
      }
      else {
          alert('You need to login to vote.');
      }
    },
    'click a.dec': function () {
      if (Meteor.user()) {
        var burn_id = Session.get("selected_burn");
        var user_id = Meteor.user()._id;
        var votes = Votes.find({user: user_id, burn: burn_id}).count();
        
        if (votes === 0){
          Burns.update(Session.get("selected_burn"), {$inc: {score: -1}});
          Votes.insert({user:user_id, burn: burn_id});
        }
        else {
          alert('You have already voted on this burn.');
        }
      }
      else {
          alert('You need to login to vote.');
      }
    },
    'click input.add': function () {
      if (Meteor.user()) {
        var burn_content = $('#new-burn').val();
        var timestamp = (new Date()).getTime();
        Burns.insert({content: burn_content, score: 0, user: Meteor.user()._id, created_at: timestamp});
        $('#new-burn').val('');
      }
      else {
          alert('You need to login to add burns.');
        }
    }
  });
}