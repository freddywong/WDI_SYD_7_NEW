var ListView = Backbone.View.extend({
  tagName: "div",
  className: "list",

  initialize: function() {
    this.collection.fetch();
    this.collection.on("add", this.addSchool, this)
  },

  addSchool: function(school) {
    var schoolView = new SchoolView({ model: school });
    this.$el.append(schoolView.render().el);
  }
});