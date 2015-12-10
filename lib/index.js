/*
The MIT License (MIT)

Copyright (c) 2014 Bryan Hughes <bryan@theoreticalideations.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _pigpio = require('pigpio');

var _raspiPeripheral = require('raspi-peripheral');

var _pwm = Symbol();
var _range = Symbol();

var SoftPWM = (function (_Peripheral) {
  _inherits(SoftPWM, _Peripheral);

  function SoftPWM(config) {
    var _this = this;

    _classCallCheck(this, SoftPWM);

    if (typeof config == 'number' || typeof config == 'string') {
      config = { pin: config };
    }
    _get(Object.getPrototypeOf(SoftPWM.prototype), 'constructor', this).call(this, config.pin);
    (function (_ref) {
      var _ref$pin = _ref.pin;
      var pin = _ref$pin === undefined ? 'PWM0' : _ref$pin;
      var _ref$frequency = _ref.frequency;
      var frequency = _ref$frequency === undefined ? 800 : _ref$frequency;
      var _ref$range = _ref.range;
      var range = _ref$range === undefined ? 255 : _ref$range;

      _this[_range] = range;
      _this[_pwm] = new _pigpio.Gpio(_this.pins[0], { mode: _pigpio.Gpio.OUTPUT });
      _this[_pwm].pwmRange(range);
      _this[_pwm].pwmFrequency(frequency);
    })(config);
  }

  _createClass(SoftPWM, [{
    key: 'write',
    value: function write(value) {
      if (!this.alive) {
        throw new Error('Attempted to write to a destroyed peripheral');
      }
      if (typeof value != 'number' || value < 0 || value > this[_range]) {
        throw new Error('Invalid PWM value ' + value);
      }

      this[_pwm].analogWrite(value);
    }
  }]);

  return SoftPWM;
})(_raspiPeripheral.Peripheral);

exports.SoftPWM = SoftPWM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQXdCcUIsUUFBUTs7K0JBQ0Ysa0JBQWtCOztBQUU3QyxJQUFNLElBQUksR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUN0QixJQUFNLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQzs7SUFFWCxPQUFPO1lBQVAsT0FBTzs7QUFDUCxXQURBLE9BQU8sQ0FDTixNQUFNLEVBQUU7OzswQkFEVCxPQUFPOztBQUVoQixRQUFJLE9BQU8sTUFBTSxJQUFJLFFBQVEsSUFBSSxPQUFPLE1BQU0sSUFBSSxRQUFRLEVBQUU7QUFDMUQsWUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDO0tBQzFCO0FBQ0QsK0JBTFMsT0FBTyw2Q0FLVixNQUFNLENBQUMsR0FBRyxFQUFFO0FBQ2xCLEtBQUMsVUFBQyxJQUE2QyxFQUFLO3FCQUFsRCxJQUE2QyxDQUEzQyxHQUFHO1VBQUgsR0FBRyw0QkFBRyxNQUFNOzJCQUFkLElBQTZDLENBQTdCLFNBQVM7VUFBVCxTQUFTLGtDQUFHLEdBQUc7dUJBQS9CLElBQTZDLENBQVosS0FBSztVQUFMLEtBQUssOEJBQUcsR0FBRzs7QUFDNUMsWUFBSyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDckIsWUFBSyxJQUFJLENBQUMsR0FBRyxpQkFBUyxNQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxhQUFLLE1BQU0sRUFBQyxDQUFDLENBQUM7QUFDekQsWUFBSyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsWUFBSyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDcEMsQ0FBQSxDQUFFLE1BQU0sQ0FBQyxDQUFDO0dBQ1o7O2VBWlUsT0FBTzs7V0FjYixlQUFDLEtBQUssRUFBRTtBQUNYLFVBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2YsY0FBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO09BQ2pFO0FBQ0QsVUFBSSxPQUFPLEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ2pFLGNBQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLENBQUM7T0FDL0M7O0FBRUQsVUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMvQjs7O1NBdkJVLE9BQU8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbkNvcHlyaWdodCAoYykgMjAxNCBCcnlhbiBIdWdoZXMgPGJyeWFuQHRoZW9yZXRpY2FsaWRlYXRpb25zLmNvbT5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuKi9cblxuaW1wb3J0IHsgR3BpbyB9IGZyb20gJ3BpZ3Bpbyc7XG5pbXBvcnQgeyBQZXJpcGhlcmFsIH0gZnJvbSAncmFzcGktcGVyaXBoZXJhbCc7XG5cbmNvbnN0IF9wd20gPSBTeW1ib2woKTtcbmNvbnN0IF9yYW5nZSA9IFN5bWJvbCgpO1xuXG5leHBvcnQgY2xhc3MgU29mdFBXTSBleHRlbmRzIFBlcmlwaGVyYWwge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PSAnbnVtYmVyJyB8fCB0eXBlb2YgY29uZmlnID09ICdzdHJpbmcnKSB7XG4gICAgICBjb25maWcgPSB7IHBpbjogY29uZmlnIH07XG4gICAgfVxuICAgIHN1cGVyKGNvbmZpZy5waW4pO1xuICAgICgoeyBwaW4gPSAnUFdNMCcsIGZyZXF1ZW5jeSA9IDgwMCwgcmFuZ2UgPSAyNTV9KSA9PiB7XG4gICAgICB0aGlzW19yYW5nZV0gPSByYW5nZTtcbiAgICAgIHRoaXNbX3B3bV0gPSBuZXcgR3Bpbyh0aGlzLnBpbnNbMF0sIHttb2RlOiBHcGlvLk9VVFBVVH0pOyBcbiAgICAgIHRoaXNbX3B3bV0ucHdtUmFuZ2UocmFuZ2UpO1xuICAgICAgdGhpc1tfcHdtXS5wd21GcmVxdWVuY3koZnJlcXVlbmN5KTtcbiAgICB9KShjb25maWcpO1xuICB9XG5cbiAgd3JpdGUodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuYWxpdmUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGVkIHRvIHdyaXRlIHRvIGEgZGVzdHJveWVkIHBlcmlwaGVyYWwnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnbnVtYmVyJyB8fCB2YWx1ZSA8IDAgfHwgdmFsdWUgPiB0aGlzW19yYW5nZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQV00gdmFsdWUgJyArIHZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgdGhpc1tfcHdtXS5hbmFsb2dXcml0ZSh2YWx1ZSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
