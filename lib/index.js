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

var SoftPWM = (function (_Peripheral) {
  _inherits(SoftPWM, _Peripheral);

  function SoftPWM(config) {
    _classCallCheck(this, SoftPWM);

    var pin = 'PWM0';
    var frequency = 800;
    var range = 255;
    if (typeof config == 'number' || typeof config == 'string') {
      pin = config;
    } else if (typeof config == 'object') {
      if (typeof config.pin == 'number' || typeof config.pin == 'string') {
        pin = config.pin;
      }
      if (typeof config.frequency == 'number') {
        frequency = config.frequency;
      }
      if (typeof config.range == 'number') {
        range = config.range;
      }
    }
    _get(Object.getPrototypeOf(SoftPWM.prototype), 'constructor', this).call(this, pin);

    this.range = range;

    this.pwm = new _pigpio.Gpio(this.pins[0], { mode: _pigpio.Gpio.OUTPUT });
    this.pwm.pwmRange(range);
    this.pwm.pwmFrequency(frequency);
  }

  _createClass(SoftPWM, [{
    key: 'write',
    value: function write(value) {
      if (!this.alive) {
        throw new Error('Attempted to write to a destroyed peripheral');
      }
      if (typeof value != 'number' || value < 0 || value > this.range) {
        throw new Error('Invalid PWM value ' + value);
      }

      this.pwm.analogWrite(value);
    }
  }]);

  return SoftPWM;
})(_raspiPeripheral.Peripheral);

exports.SoftPWM = SoftPWM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQXdCcUIsUUFBUTs7K0JBQ0Ysa0JBQWtCOztJQUVoQyxPQUFPO1lBQVAsT0FBTzs7QUFDUCxXQURBLE9BQU8sQ0FDTixNQUFNLEVBQUU7MEJBRFQsT0FBTzs7QUFFaEIsUUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDO0FBQ2pCLFFBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQztBQUNwQixRQUFJLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDaEIsUUFBSSxPQUFPLE1BQU0sSUFBSSxRQUFRLElBQUksT0FBTyxNQUFNLElBQUksUUFBUSxFQUFFO0FBQzFELFNBQUcsR0FBRyxNQUFNLENBQUM7S0FDZCxNQUFNLElBQUksT0FBTyxNQUFNLElBQUksUUFBUSxFQUFFO0FBQ3BDLFVBQUksT0FBTyxNQUFNLENBQUMsR0FBRyxJQUFJLFFBQVEsSUFBSSxPQUFPLE1BQU0sQ0FBQyxHQUFHLElBQUksUUFBUSxFQUFFO0FBQ2xFLFdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO09BQ2xCO0FBQ0QsVUFBSSxPQUFPLE1BQU0sQ0FBQyxTQUFTLElBQUksUUFBUSxFQUFFO0FBQ3ZDLGlCQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztPQUM5QjtBQUNELFVBQUksT0FBTyxNQUFNLENBQUMsS0FBSyxJQUFJLFFBQVEsRUFBRTtBQUNuQyxhQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztPQUN0QjtLQUNGO0FBQ0QsK0JBbEJTLE9BQU8sNkNBa0JWLEdBQUcsRUFBRTs7QUFFWCxRQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7QUFFbkIsUUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLGFBQUssTUFBTSxFQUFDLENBQUMsQ0FBQztBQUN2RCxRQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QixRQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztHQUNsQzs7ZUF6QlUsT0FBTzs7V0EyQmIsZUFBQyxLQUFLLEVBQUU7QUFDWCxVQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNmLGNBQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztPQUNqRTtBQUNELFVBQUksT0FBTyxLQUFLLElBQUksUUFBUSxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDL0QsY0FBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsQ0FBQztPQUMvQzs7QUFFRCxVQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM3Qjs7O1NBcENVLE9BQU8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbkNvcHlyaWdodCAoYykgMjAxNCBCcnlhbiBIdWdoZXMgPGJyeWFuQHRoZW9yZXRpY2FsaWRlYXRpb25zLmNvbT5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuKi9cblxuaW1wb3J0IHsgR3BpbyB9IGZyb20gJ3BpZ3Bpbyc7XG5pbXBvcnQgeyBQZXJpcGhlcmFsIH0gZnJvbSAncmFzcGktcGVyaXBoZXJhbCc7XG5cbmV4cG9ydCBjbGFzcyBTb2Z0UFdNIGV4dGVuZHMgUGVyaXBoZXJhbCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIGxldCBwaW4gPSAnUFdNMCc7XG4gICAgbGV0IGZyZXF1ZW5jeSA9IDgwMDtcbiAgICBsZXQgcmFuZ2UgPSAyNTU7XG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT0gJ251bWJlcicgfHwgdHlwZW9mIGNvbmZpZyA9PSAnc3RyaW5nJykge1xuICAgICAgcGluID0gY29uZmlnO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZyA9PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcucGluID09ICdudW1iZXInIHx8IHR5cGVvZiBjb25maWcucGluID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHBpbiA9IGNvbmZpZy5waW47XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5mcmVxdWVuY3kgPT0gJ251bWJlcicpIHtcbiAgICAgICAgZnJlcXVlbmN5ID0gY29uZmlnLmZyZXF1ZW5jeTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLnJhbmdlID09ICdudW1iZXInKSB7XG4gICAgICAgIHJhbmdlID0gY29uZmlnLnJhbmdlO1xuICAgICAgfVxuICAgIH1cbiAgICBzdXBlcihwaW4pO1xuICAgIFxuICAgIHRoaXMucmFuZ2UgPSByYW5nZTtcbiAgICBcbiAgICB0aGlzLnB3bSA9IG5ldyBHcGlvKHRoaXMucGluc1swXSwge21vZGU6IEdwaW8uT1VUUFVUfSk7IFxuICAgIHRoaXMucHdtLnB3bVJhbmdlKHJhbmdlKTtcbiAgICB0aGlzLnB3bS5wd21GcmVxdWVuY3koZnJlcXVlbmN5KTtcbiAgfVxuXG4gIHdyaXRlKHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmFsaXZlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHRlZCB0byB3cml0ZSB0byBhIGRlc3Ryb3llZCBwZXJpcGhlcmFsJyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT0gJ251bWJlcicgfHwgdmFsdWUgPCAwIHx8IHZhbHVlID4gdGhpcy5yYW5nZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBXTSB2YWx1ZSAnICsgdmFsdWUpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLnB3bS5hbmFsb2dXcml0ZSh2YWx1ZSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
