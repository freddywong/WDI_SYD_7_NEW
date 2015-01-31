var App = App || {};

App.AppRouter = Backbone.Router.extend({
  schoolsCollection: new App.Schools(),

  openPage: function(url) {
    this.navigate(url, { trigger: true });
  },

  routes: {
    "": "home",
    "about": "aboutPage",
    ":username": "filterUser",
    "*404": "notFound"
  },

  filterUser: function(name) {
    var listView = new App.ListView({ collection: this.schoolsCollection });
    listView.name = name;
    listView.render();
    $("#container").html(listView.el);
  },

  home: function() {
    var listView = new App.ListView({ collection: this.schoolsCollection });
    listView.render();
    $("#container").html(listView.el);
  },

  aboutPage: function() {
    $("#container").html(JST['about']());
  },

  notFound: function() {
    $("#container").html(JST['404']());
  }
});
