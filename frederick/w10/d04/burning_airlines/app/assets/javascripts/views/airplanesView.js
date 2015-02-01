var App = App || {}

App.AirplanesView = Backbone.View.extend({

  events: {
    'click .create_plane': 'renderPlaneForm'
  },

  render: function(){
    this.$el.html(JST["app"]());

    this.renderCollection(this.collection)

    return this
  }, 

  renderCollection: function(data) {

    data.each(function(airplane){
      var airplaneView = new App.AirplaneView({ model: airplane })
      this.$el.find("table").append(airplaneView.render().el);

      var currentId = airplane.attributes.id;
      this.$el.find(".seats").data("id", currentId);
      this.$el.find("td[data-id='" + currentId + "']").text(airplaneView.seats());
    }, this)
  },

  renderPlaneForm: function() {
    this.$el.find(".plane_form").html(JST["form"]());  
  }
  
});

