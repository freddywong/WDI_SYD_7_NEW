var App = App || {}

App.AirplaneView = Backbone.View.extend({
  tagName: 'tr',

  render: function(){

    this.$el.html(JST["plane"](this.model.toJSON()));

    return this;
  },

  seats: function() {

    return this.model.attributes.rows * this.model.attributes.columns;
  }

})