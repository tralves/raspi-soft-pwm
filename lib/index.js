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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _pigpio = require('pigpio');

var _pigpio2 = _interopRequireDefault(_pigpio);

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

    this.pwm = new _pigpio2['default'](this.pins[0], { mode: _pigpio2['default'].OUTPUT }).GPIO;
    this.pwm.pwmRange(this.range);
    this.pwm.pwmFrequency(this.frequency);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBd0JpQixRQUFROzs7OytCQUNFLGtCQUFrQjs7SUFFaEMsT0FBTztZQUFQLE9BQU87O0FBQ1AsV0FEQSxPQUFPLENBQ04sTUFBTSxFQUFFOzBCQURULE9BQU87O0FBRWhCLFFBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQztBQUNqQixRQUFJLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDcEIsUUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ2hCLFFBQUksT0FBTyxNQUFNLElBQUksUUFBUSxJQUFJLE9BQU8sTUFBTSxJQUFJLFFBQVEsRUFBRTtBQUMxRCxTQUFHLEdBQUcsTUFBTSxDQUFDO0tBQ2QsTUFBTSxJQUFJLE9BQU8sTUFBTSxJQUFJLFFBQVEsRUFBRTtBQUNwQyxVQUFJLE9BQU8sTUFBTSxDQUFDLEdBQUcsSUFBSSxRQUFRLElBQUksT0FBTyxNQUFNLENBQUMsR0FBRyxJQUFJLFFBQVEsRUFBRTtBQUNsRSxXQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztPQUNsQjtBQUNELFVBQUksT0FBTyxNQUFNLENBQUMsU0FBUyxJQUFJLFFBQVEsRUFBRTtBQUN2QyxpQkFBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7T0FDOUI7QUFDRCxVQUFJLE9BQU8sTUFBTSxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQUU7QUFDbkMsYUFBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7T0FDdEI7S0FDRjtBQUNELCtCQWxCUyxPQUFPLDZDQWtCVixHQUFHLEVBQUU7O0FBRVgsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7O0FBRW5CLFFBQUksQ0FBQyxHQUFHLEdBQUcsd0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxvQkFBSyxNQUFNLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM1RCxRQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUIsUUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0dBQ3ZDOztlQXpCVSxPQUFPOztXQTJCYixlQUFDLEtBQUssRUFBRTtBQUNYLFVBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2YsY0FBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO09BQ2pFO0FBQ0QsVUFBSSxPQUFPLEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUMvRCxjQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO09BQy9DOztBQUVELFVBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzdCOzs7U0FwQ1UsT0FBTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSAyMDE0IEJyeWFuIEh1Z2hlcyA8YnJ5YW5AdGhlb3JldGljYWxpZGVhdGlvbnMuY29tPlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG4qL1xuXG5pbXBvcnQgR3BpbyBmcm9tICdwaWdwaW8nO1xuaW1wb3J0IHsgUGVyaXBoZXJhbCB9IGZyb20gJ3Jhc3BpLXBlcmlwaGVyYWwnO1xuXG5leHBvcnQgY2xhc3MgU29mdFBXTSBleHRlbmRzIFBlcmlwaGVyYWwge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBsZXQgcGluID0gJ1BXTTAnO1xuICAgIGxldCBmcmVxdWVuY3kgPSA4MDA7XG4gICAgbGV0IHJhbmdlID0gMjU1O1xuICAgIGlmICh0eXBlb2YgY29uZmlnID09ICdudW1iZXInIHx8IHR5cGVvZiBjb25maWcgPT0gJ3N0cmluZycpIHtcbiAgICAgIHBpbiA9IGNvbmZpZztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcgPT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLnBpbiA9PSAnbnVtYmVyJyB8fCB0eXBlb2YgY29uZmlnLnBpbiA9PSAnc3RyaW5nJykge1xuICAgICAgICBwaW4gPSBjb25maWcucGluO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBjb25maWcuZnJlcXVlbmN5ID09ICdudW1iZXInKSB7XG4gICAgICAgIGZyZXF1ZW5jeSA9IGNvbmZpZy5mcmVxdWVuY3k7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5yYW5nZSA9PSAnbnVtYmVyJykge1xuICAgICAgICByYW5nZSA9IGNvbmZpZy5yYW5nZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3VwZXIocGluKTtcbiAgICBcbiAgICB0aGlzLnJhbmdlID0gcmFuZ2U7XG4gICAgXG4gICAgdGhpcy5wd20gPSBuZXcgR3Bpbyh0aGlzLnBpbnNbMF0sIHttb2RlOiBHcGlvLk9VVFBVVH0pLkdQSU87IFxuICAgIHRoaXMucHdtLnB3bVJhbmdlKHRoaXMucmFuZ2UpO1xuICAgIHRoaXMucHdtLnB3bUZyZXF1ZW5jeSh0aGlzLmZyZXF1ZW5jeSk7XG4gIH1cblxuICB3cml0ZSh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5hbGl2ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdHRlbXB0ZWQgdG8gd3JpdGUgdG8gYSBkZXN0cm95ZWQgcGVyaXBoZXJhbCcpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInIHx8IHZhbHVlIDwgMCB8fCB2YWx1ZSA+IHRoaXMucmFuZ2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQV00gdmFsdWUgJyArIHZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5wd20uYW5hbG9nV3JpdGUodmFsdWUpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
