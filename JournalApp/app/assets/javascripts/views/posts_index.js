JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts_index"],

  render: function () {
    var $ul = $("<ul class='posts-list'>");

    var view = this;
    this.collection.each(function(post) {
      var $li = $("<li>").text(post.escape("title"));

      $ul.append($li);
    });

    this.$el.html($ul);
    return this;
  }
});
