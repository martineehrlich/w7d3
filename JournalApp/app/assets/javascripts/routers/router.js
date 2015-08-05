JournalApp.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    this.collection = new JournalApp.Collections.Posts();
  },

  routes: {
    "": "index",
    "posts/new": "new",
    "posts/:id": "show",
    "posts/:id/edit": "edit"
  },

  index: function () {
    this.collection.fetch({
      success: function() {
        var indexView = new JournalApp.Views.PostsIndex({collection: this.collection});
        this.swap(indexView);
      }.bind(this),

      reset: true
    });
  },

  show: function (id) {
    var post = this.collection.getOrFetch(id);
    var view = new JournalApp.Views.PostShow({model: post});
    this.swap(view);
  },

  edit: function (id) {
    var post = this.collection.getOrFetch(id);
    var view = new JournalApp.Views.PostForm({
      model: post,
      collection: this.collection });
    this.swap(view);
  },

  new: function (){
    var post = new JournalApp.Models.Post();
    var view = new JournalApp.Views.PostForm({
      collection: this.collection,
      model: post });
    this.swap(view);
  },

  swap: function (view) {
    this._view && this._view.remove();
    $("#root").html(view.render().$el);
    this._view = view;
  }
});
