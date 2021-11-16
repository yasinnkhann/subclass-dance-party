var BreakDancer = function(top, left, timeBetweenSteps) {
  // connects to super class
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('breakDancer');
};

// Acquire all methods from Dancer
BreakDancer.prototype = Object.create(Dancer.prototype);

BreakDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.css('border', '10px solid '+ this.randomColorGen());
};

BreakDancer.prototype.randomColorGen = function() {
  var randomBetween = function(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  var r = randomBetween(0, 255);
  var g = randomBetween(0, 255);
  var b = randomBetween(0, 255);
  var rgb = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");

  return rgb
};

BreakDancer.prototype.constructor = BreakDancer;

