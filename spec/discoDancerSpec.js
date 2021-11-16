describe('discoDancer', function() {

  var discoDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    discoDancer = new DiscoDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(discoDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function where css style is updated', function() {
    sinon.spy(discoDancer.$node, 'css');
    discoDancer.step();
    expect(discoDancer.$node.css.called).to.be.true;
  });

  it('should have alternating colors', function() {
    sinon.spy(discoDancer.$node, 'css');
    var initial = discoDancer.$node.css('border');
    discoDancer.step();
    expect(discoDancer.$node.css('border')).to.not.equal(initial);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(discoDancer, 'step');
      expect(discoDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(discoDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(discoDancer.step.callCount).to.be.equal(2);
    });
  });
});
