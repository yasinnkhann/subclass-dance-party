var DiscoDancer = function(top, left, timeBetweenSteps) {
  // connects to super class
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('discoDancer');
  this.$node.append('<img class="discoDancer" src="assets/disco-dancer.gif" />');

};

// Acquire all methods from Dancer
DiscoDancer.prototype = Object.create(Dancer.prototype);

DiscoDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.css('border', '15px solid '+ this.randomColorGen());
};

DiscoDancer.prototype.randomColorGen = function() {
  var randomBetween = function(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  var r = randomBetween(0, 255);
  var g = randomBetween(0, 255);
  var b = randomBetween(0, 255);
  var rgb = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");

  return rgb
};

DiscoDancer.prototype.constructor = DiscoDancer;

