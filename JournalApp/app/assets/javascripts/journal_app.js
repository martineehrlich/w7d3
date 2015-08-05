window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // var posts = new JournalApp.Collections.Posts();
    // posts.fetch({ wait: true });

    var $sidebar = $("#sidebar");
    var $content = $("#content");
    
    new JournalApp.Routers.Router({$sidebar: $sidebar, $content: $content});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
