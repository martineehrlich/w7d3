window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new JournalApp.Routers.Router();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
