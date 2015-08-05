JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST['post_form'],

  initialize: function (options) {
    this.collection = options.collection;
  },

  events: {
    "submit form": "submitForm"
  },

  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  submitForm: function (event) {
    event.preventDefault();
    var $formData = $(event.currentTarget).serializeJSON();

    var attrs = $formData.post;
    this.model.set(attrs);

    this.model.save(attrs, {
      success: function() {
        this.collection.add(this.model);
        Backbone.history.navigate("#posts/" + this.model.get("id"),
          {trigger: true});
      }.bind(this),

      error: function(model, resp) {
        $(".errors").html(resp.responseText);
      }
    });
  }

});
