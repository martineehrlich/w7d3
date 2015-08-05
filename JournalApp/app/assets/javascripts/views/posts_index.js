JournalApp.Views.PostsIndex = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "remove reset", this.render);
  },

  template: JST["posts_index"],

  render: function () {
    var $ul = $("<ul class='posts-list'>");

    var view = this;
    this.collection.each(function(post) {
      var item = new JournalApp.Views.PostsIndexItem({model: post});
      $ul.append(item.render().$el);
    });

    this.$el.html($ul);
    return this;
  }
});
