describe('tapDancer', function() {

  var tapDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    tapDancer = new TapDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(tapDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should rotate position', function() {
    sinon.spy(tapDancer.$node, 'css');
    var initial = tapDancer.$node.css('transform');
    tapDancer.step();
    var final = tapDancer.$node.css('transform');
    expect(initial).to.not.equal(final);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(tapDancer, 'step');
      expect(tapDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(tapDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(tapDancer.step.callCount).to.be.equal(2);
    });
  });
});
