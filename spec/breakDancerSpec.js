describe('breakDancer', function() {

  var breakDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    breakDancer = new BreakDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(breakDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function where css style is updated', function() {
    sinon.spy(breakDancer.$node, 'css');
    breakDancer.step();
    expect(breakDancer.$node.css.called).to.be.true;
  });

  it('should have alternating colors', function() {
    sinon.spy(breakDancer.$node, 'css');
    var initial = breakDancer.$node.css('border');
    breakDancer.step();
    expect(breakDancer.$node.css('border')).to.not.equal(initial);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(breakDancer, 'step');
      expect(breakDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(breakDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(breakDancer.step.callCount).to.be.equal(2);
    });
  });
});
