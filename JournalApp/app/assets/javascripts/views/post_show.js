JournalApp.Views.PostShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click button.delete-post": 'deletePost'
  },

  template: JST["post_show"],

  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  deletePost: function(event) {
    event.preventDefault();
    this.model.destroy();
    Backbone.history.navigate("", { trigger: true });
  }
});
