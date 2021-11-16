var TapDancer = function(top, left, timeBetweenSteps) {
  // connects to super class
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('tapDancer');
};

// Acquire all methods from Dancer
TapDancer.prototype = Object.create(Dancer.prototype);

TapDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.setPosition();

};

TapDancer.prototype.constructor = TapDancer;

TapDancer.prototype.setPosition = function() {
  var styleSettings = {
    top: $('body').height() * Math.random(),
    left: $('body').width() * Math.random()
  };
  this.$node.css(styleSettings);
};
