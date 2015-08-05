JournalApp.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.collection = new JournalApp.Collections.Posts();
    this.collection.fetch();
    this.$sidebar = options.$sidebar;
    this.$content = options.$content;
  },

  routes: {
    "": "index",
    "posts/new": "new",
    "posts/:id": "show",
    "posts/:id/edit": "edit"
  },

  index: function () {
    var view = new JournalApp.Views.PostsIndex({collection: this.collection});
    this.swapSidebar(view);
    this._view && this._view.remove();
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
    this.$content.html(view.render().$el);
    this._view = view;
  },

  swapSidebar: function (view) {
    this._sideBarView && this._sideBarView.remove();
    this.$sidebar.html(view.render().$el);
    this._sideBarView = view;
  }
});
