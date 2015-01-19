var School = Backbone.Model.extend({
  urlRoot: '/schools',

  defaults: {
    username: "Anon",
    content: "Free burrito"
  }
});