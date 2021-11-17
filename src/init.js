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

  var audio = new Audio("/assets/Benny Benassi - Satisfaction (Official Video HD!).mp3");

  $('.playMusic').on('click', function(event) {
    if (!isMusicPlaying) {
        audio.play();
        isMusicPlaying = true
      } else {
        audio.pause();
        audio.currentTime = 0;
        isMusicPlaying = false;
      }
  });

  $('.pairUp').on('click', function(event) {
    // var copy = dancers.slice();

    // //function for the distance
    // var distance = function(a, b) {
    //   var y = a.position().top - b.position().top;
    //   var x = a.position().left - b.position().left;

    //   var c = (y**2 + x**2) ** 0.5;
    //   return c;
    // }

    // var currentDancer = dancers[0];
    // var shortestDistance = Infinity;

    // for(var i = 1; i < dancers.length; i++) {
    // }

    for (var i = 0; i < dancers.length - 1; i += 2) {
      var y = dancers[i].position().top;
      var x = dancers[i].position().left;

      dancers[i + 1].animate({top: y, left: x + 70 });
    }

    if (dancers.length % 2 === 1) {
      var oddMan = dancers[dancers.length - 1];
      oddMan.animate({top: '80%', left: '5%'});
    }
  });
});
