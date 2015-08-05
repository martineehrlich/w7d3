JournalApp.Views.PostShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST["post_show"],

  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  }

});
