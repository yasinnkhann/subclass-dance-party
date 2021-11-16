$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); //makeBlinkyDancer

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName]; //makeBlinkDancer function

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer.$node);
  });



  $('.lineUp').on('click', function(event) {
    //calculate interval by
    var widthInterval = .9 / dancers.length; 0.05

    //iterate through the dancers array
    for (var i = 0; i < dancers.length; i++) {
      //call the .lineUp function on each dancer
      dancers[i].animate({'left': $('body').width() * widthInterval * (i + 1), 'top' : '75%'});
    }




    // var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); //makeBlinkyDancer


    // // get the maker function for the kind of dancer we're supposed to make
    // var dancerMakerFunction = window[dancerMakerFunctionName]; //makeBlinkDancer function

    // // make a dancer with a random position

    // var dancer = new dancerMakerFunction(
    //   $("body").height() * Math.random(),
    //   $("body").width() * Math.random(),
    //   Math.random() * 1000
    // );
    // $('body').append(dancer.$node);
    // dancers.push(dancer.$node);
  });

  var isMusicPlaying = false;

  $('.playMusic').on('click', function(event) {
    var audio = new Audio("/assets/Benny Benassi - Satisfaction (Official Video HD!).mp3");
    if (!isMusicPlaying) {
        audio.play();
        isMusicPlaying = true
      } else {
        audio.pause();
        isMusicPlaying = false;
      }
  });
});
