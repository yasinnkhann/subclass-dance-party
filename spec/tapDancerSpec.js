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

  it('should alternate positions', function() {
    sinon.spy(tapDancer.$node, 'css');
    var initialTop = tapDancer.$node.css('top');
    var initialLeft = tapDancer.$node.css('left');
    tapDancer.step();
    expect(tapDancer.$node.css('top')).to.not.equal(initialTop);
    expect(tapDancer.$node.css('left')).to.not.equal(initialLeft);
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
