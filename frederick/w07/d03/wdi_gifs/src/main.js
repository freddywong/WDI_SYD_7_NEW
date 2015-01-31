var tags;

var renderNavigation = function(tags) {
  var letters = "abcdefghijklmnopqrstuvwxyz#".split("");
  var navigation = "";

  _.each(letters, function(letter) {
    navigation += "<a>" + letter + "</a>";
  });

  $("nav").html(navigation);
}

var renderTagList = function(tags) {
  var listString = "";

    _.each(tags, function(tag) {
      listString += "<div class=\"tag\">" + tag + "</div>";
    });

    $("#content").html(listString);

};

var renderGifList = function(listGifs) {
  $("#content").html("");
  debugger;
  _.each(listGifs.gifs, function(gif){
    // debugger;
      $("#content").append("<img src=" + gif.url + " />");
  });

};


$(function() {
  $("nav").on("click", "a", function() {
    var self = this;
    var filteredTags = _.filter(tags, function(tag) {
      return $(self).text() === tag[0];
    });

    renderTagList(filteredTags);
  });

  $("#content").on("click", ".tag", function() {
    var tag = $(this).text();
    $.getJSON("http://www.gifbase.com/tag/" + tag + "?format=json", function(data) {
    renderGifList(data);  
  });


  });

  $.getJSON("http://www.gifbase.com/js/tags.json", function(data) {
    tags = data;
    renderTagList(data);
    renderNavigation(data);
  });



});
