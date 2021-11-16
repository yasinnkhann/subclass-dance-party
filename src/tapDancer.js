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
  this.hop();
  //$('.cat').animate({transform: 90});
  // this.$node.rotate(-15);
};

TapDancer.prototype.setPosition = function() {
  var initialTop = $('body').height() * Math.random();
  var initialLeft = $('body').width() * Math.random();
  this.$node.css({top: initialTop, left: initialLeft});
  // this.$node.animate({top: initialTop - 10, left: initialLeft});
  // this.$node.animate({top: initialTop + 10, left: initialLeft});

};

TapDancer.prototype.hop = function() {
  this.$node.animate({top: this.$node.position().top + 10});
  //this.$node.animate({top: +10});
}


TapDancer.prototype.constructor = TapDancer;