var App = App || {};

App.Router = Backbone.Router.extend({
  routes: {
    '': 'homePage'
  },

  homePage: function() {
    var airplanesCollection = new App.Airplanes();
    airplanesCollection.fetch().then(function(){
      var airplanesView = new App.AirplanesView({ collection: airplanesCollection});
      // You need to say .render().el because .render() alone will return a javascript object. .el will get the element out of the object
      $(".container").html(airplanesView.render().el);
    });
  }
});

App.router = new App.Router();