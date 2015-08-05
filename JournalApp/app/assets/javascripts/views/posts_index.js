JournalApp.Views.PostsIndex = Backbone.View.extend({
  tagName: "ul",
  className: 'posts-list',

  initialize: function() {
    this.listenTo(this.collection, "sync remove reset", this.render);
  },



  template: JST["posts_index"],

  render: function () {
    var content = this.template();
    this.$el.html(content);

    var view = this;
    this.collection.each(function(post) {
      var item = new JournalApp.Views.PostsIndexItem({model: post});
      this.$el.append(item.render().$el);
    }.bind(this));

    return this;
  }
});
