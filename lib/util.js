"use strict";
var logger, trackCompletion, _;

_ = require('lodash');

logger = require('logmimosa');

trackCompletion = function(title, initial, cb) {
  var done, remaining;
  remaining = [].concat(initial);
  done = function(dir) {
    remaining = _.without(remaining, dir);
    if (remaining.length === 0) {
      logger.debug("calling callback for " + title);
      return cb();
    }
  };
  return done;
};

module.exports = {
  trackCompletion: trackCompletion
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2FsZXhhYmUvcmVwb3MvbWltb3NhLWJsZXNzL2xpYi91dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2FsZXhhYmUvcmVwb3MvbWltb3NhLWJsZXNzL3NyYy91dGlsLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFBLENBQUE7QUFBQSxJQUFBLDBCQUFBOztBQUFBLENBQ0EsR0FBSSxPQUFBLENBQVEsUUFBUixDQURKLENBQUE7O0FBQUEsTUFFQSxHQUFTLE9BQUEsQ0FBUSxXQUFSLENBRlQsQ0FBQTs7QUFBQSxlQUlBLEdBQWtCLFNBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsRUFBakIsR0FBQTtBQUNoQixNQUFBLGVBQUE7QUFBQSxFQUFBLFNBQUEsR0FBWSxFQUFFLENBQUMsTUFBSCxDQUFVLE9BQVYsQ0FBWixDQUFBO0FBQUEsRUFDQSxJQUFBLEdBQU8sU0FBQyxHQUFELEdBQUE7QUFDTCxJQUFBLFNBQUEsR0FBWSxDQUFDLENBQUMsT0FBRixDQUFVLFNBQVYsRUFBcUIsR0FBckIsQ0FBWixDQUFBO0FBQ0EsSUFBQSxJQUFHLFNBQVMsQ0FBQyxNQUFWLEtBQW9CLENBQXZCO0FBQ0UsTUFBQSxNQUFNLENBQUMsS0FBUCxDQUFjLHVCQUFBLEdBQXNCLEtBQXBDLENBQUEsQ0FBQTthQUNBLEVBQUEsQ0FBQSxFQUZGO0tBRks7RUFBQSxDQURQLENBQUE7U0FNQSxLQVBnQjtBQUFBLENBSmxCLENBQUE7O0FBQUEsTUFhTSxDQUFDLE9BQVAsR0FBaUI7QUFBQSxFQUFDLGlCQUFBLGVBQUQ7Q0FiakIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiXHJcbl8gPSByZXF1aXJlICdsb2Rhc2gnXHJcbmxvZ2dlciA9IHJlcXVpcmUgJ2xvZ21pbW9zYSdcclxuXHJcbnRyYWNrQ29tcGxldGlvbiA9ICh0aXRsZSwgaW5pdGlhbCwgY2IpIC0+XHJcbiAgcmVtYWluaW5nID0gW10uY29uY2F0IGluaXRpYWxcclxuICBkb25lID0gKGRpcikgLT5cclxuICAgIHJlbWFpbmluZyA9IF8ud2l0aG91dCByZW1haW5pbmcsIGRpclxyXG4gICAgaWYgcmVtYWluaW5nLmxlbmd0aCA9PSAwXHJcbiAgICAgIGxvZ2dlci5kZWJ1ZyBcImNhbGxpbmcgY2FsbGJhY2sgZm9yICN7dGl0bGV9XCJcclxuICAgICAgY2IoKVxyXG4gIGRvbmVcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge3RyYWNrQ29tcGxldGlvbn1cclxuIl19