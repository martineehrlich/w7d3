JournalApp.Views.PostsIndexItem = Backbone.View.extend({
  template: JST["posts_index_item"],
  tagName: "li",

  initialize: function () {
    this.listenTo(this.model, "all", this.render);
  },

  events: {
    "click .delete-post": "deletePost"
  },

  render: function() {

    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  deletePost: function(event) {
    event.preventDefault();
    this.model.destroy();
  }
});
