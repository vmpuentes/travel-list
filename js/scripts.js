//business logic
function Place(loc, land, time, note) {
  this.location = loc;
  this.landmark = land;
  this.timeofyear = time;
  this.notes = note;
}

// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedTimeofyear = $("input#new-timeofyear").val();
    var inputtedNotes = $("input#new-notes").val();

    var newPlace = new Place(inputtedLocation, inputtedLandmark, inputtedTimeofyear, inputtedNotes);

    $("ul#places").append("<li><span class='place'>" + newPlace.location + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.location);
      $(".location").text(newPlace.location);
      $(".landmark").text(newPlace.landmark);
      $(".timeofyear").text(newPlace.timeofyear);
      $(".notes").text(newPlace.notes);

});

    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-timeofyear").val("");
    $("input#new-notes").val("");

  });
});
