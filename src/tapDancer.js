var TapDancer = function(top, left, timeBetweenSteps) {
  // connects to super class
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('tapDancer');
  this.$node.append('<img class="tapDancer cat" src="assets/cat-dance.gif" />');
};

// Acquire all methods from Dancer
TapDancer.prototype = Object.create(Dancer.prototype);

TapDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //this.setPosition();
  //$('.cat').animate({transform: 90});
  // this.$node.rotate(-15);
};

TapDancer.prototype.setPosition = function() {
  var styleSettings = {
    top: $('body').height() * Math.random(),
    left: $('body').width() * Math.random()
  };
  this.$node.css(styleSettings);
};

TapDancer.prototype.constructor = TapDancer;
