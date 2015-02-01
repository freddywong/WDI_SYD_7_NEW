var App = App || {}

App.AirplanesView = Backbone.View.extend({

  events: {
    'click .create_plane_form': 'renderPlaneForm',
    'click .cancel_plane_form': 'cancelPlane',
    'click .save_plane': 'savePlane'
  },

  render: function(){
    this.$el.find("table").html("");

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
  },

  cancelPlane: function() {
    event.preventDefault();
    this.$el.find(".plane_form").html("");
  },

  savePlane: function(){
    event.preventDefault();
    var nameValue = this.$el.find(".name_field").val();
    var rowsValue = this.$el.find(".rows_field").val();
    var columnsValue = this.$el.find(".columns_field").val();

    this.collection.create({
      name: nameValue,
      rows: rowsValue,
      columns: columnsValue 
    }).done(this.render())

  }
  
});

