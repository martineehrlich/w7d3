JournalApp.Views.PostShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click button.delete-post": 'deletePost',
    'dblclick .post-content': 'showInputBox',
    'blur .input-box': "saveWithBlur"
  },

  template: JST["post_show"],

  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  deletePost: function (event) {
    event.preventDefault();
    this.model.destroy();
    Backbone.history.navigate("", { trigger: true });
  },

  showInputBox: function (event) {
    event.preventDefault(); // ???
    var inputTemplate = JST["_input_box"];
    var $targetEl = $(event.currentTarget);
    var prevContent = $targetEl.text();
    $targetEl.html(inputTemplate({content: prevContent}));
  },

  saveWithBlur: function (event) {
    event.preventDefault();
    var $targetEl = $(event.currentTarget);
    var $parentEl = $targetEl.parent();
    var updatedAttr = $targetEl.val();

    $parentEl.html(updatedAttr);
    var attr = $parentEl.data("attrname");

    this.model.set(attr, updatedAttr);
    this.model.save({ attr: updatedAttr }, {});
  }
});
