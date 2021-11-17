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
  this.$node.css('transform', 'rotate(' + this.randomAngle() + 'deg)');
};

TapDancer.prototype.randomAngle = function() {
  var randomBetween = function(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  var num = randomBetween(-20, 20);
  return num;
};


TapDancer.prototype.constructor = TapDancer;