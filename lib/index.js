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

var _raspiBoard = require('raspi-board');

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
      _this[_pwm] = new _pigpio.Gpio(_this.pinToGPIO(_this.pins[0]), { mode: _pigpio.Gpio.OUTPUT });
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
  }, {
    key: 'pinToGPIO',
    value: function pinToGPIO(pin) {
      var pins = (0, _raspiBoard.getPins)()[pin].pins;
      var gpioRegex = /GPIO([\d]+)/;

      var result = undefined;
      var i = undefined;

      for (i = 0; i < pins.length; i++) {
        result = gpioRegex.exec(pins[i]);
        if (result !== null) {
          return parseInt(result[1], 10);
        }
      }
      return null;
    }
  }, {
    key: 'range',
    get: function get() {
      return this[_range];
    }
  }]);

  return SoftPWM;
})(_raspiPeripheral.Peripheral);

exports.SoftPWM = SoftPWM;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQXdCcUIsUUFBUTs7K0JBQ0Ysa0JBQWtCOzswQkFDckIsYUFBYTs7QUFFckMsSUFBTSxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDdEIsSUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUM7O0lBRVgsT0FBTztZQUFQLE9BQU87O0FBQ1AsV0FEQSxPQUFPLENBQ04sTUFBTSxFQUFFOzs7MEJBRFQsT0FBTzs7QUFFaEIsUUFBSSxPQUFPLE1BQU0sSUFBSSxRQUFRLElBQUksT0FBTyxNQUFNLElBQUksUUFBUSxFQUFFO0FBQzFELFlBQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQztLQUMxQjtBQUNELCtCQUxTLE9BQU8sNkNBS1YsTUFBTSxDQUFDLEdBQUcsRUFBRTtBQUNsQixLQUFDLFVBQUMsSUFBNkMsRUFBSztxQkFBbEQsSUFBNkMsQ0FBM0MsR0FBRztVQUFILEdBQUcsNEJBQUcsTUFBTTsyQkFBZCxJQUE2QyxDQUE3QixTQUFTO1VBQVQsU0FBUyxrQ0FBRyxHQUFHO3VCQUEvQixJQUE2QyxDQUFaLEtBQUs7VUFBTCxLQUFLLDhCQUFHLEdBQUc7O0FBQzVDLFlBQUssTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3JCLFlBQUssSUFBSSxDQUFDLEdBQUcsaUJBQVMsTUFBSyxTQUFTLENBQUMsTUFBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxhQUFLLE1BQU0sRUFBQyxDQUFDLENBQUM7QUFDekUsWUFBSyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsWUFBSyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDcEMsQ0FBQSxDQUFFLE1BQU0sQ0FBQyxDQUFDO0dBQ1o7O2VBWlUsT0FBTzs7V0FrQmIsZUFBQyxLQUFLLEVBQUU7QUFDWCxVQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNmLGNBQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztPQUNqRTtBQUNELFVBQUksT0FBTyxLQUFLLElBQUksUUFBUSxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUNqRSxjQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO09BQy9DOztBQUVELFVBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0I7OztXQUVRLG1CQUFDLEdBQUcsRUFBRTtBQUNiLFVBQU0sSUFBSSxHQUFHLDBCQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ2pDLFVBQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQzs7QUFFaEMsVUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLFVBQUksQ0FBQyxZQUFBLENBQUM7O0FBRU4sV0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2hDLGNBQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLFlBQUksTUFBTSxLQUFLLElBQUksRUFBRTtBQUNuQixpQkFBTyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO09BQ0Y7QUFDRCxhQUFPLElBQUksQ0FBQztLQUNiOzs7U0E3QlEsZUFBRztBQUNWLGFBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3JCOzs7U0FoQlUsT0FBTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSAyMDE0IEJyeWFuIEh1Z2hlcyA8YnJ5YW5AdGhlb3JldGljYWxpZGVhdGlvbnMuY29tPlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG4qL1xuXG5pbXBvcnQgeyBHcGlvIH0gZnJvbSAncGlncGlvJztcbmltcG9ydCB7IFBlcmlwaGVyYWwgfSBmcm9tICdyYXNwaS1wZXJpcGhlcmFsJztcbmltcG9ydCB7IGdldFBpbnMgfSBmcm9tICdyYXNwaS1ib2FyZCc7XG5cbmNvbnN0IF9wd20gPSBTeW1ib2woKTtcbmNvbnN0IF9yYW5nZSA9IFN5bWJvbCgpO1xuXG5leHBvcnQgY2xhc3MgU29mdFBXTSBleHRlbmRzIFBlcmlwaGVyYWwge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PSAnbnVtYmVyJyB8fCB0eXBlb2YgY29uZmlnID09ICdzdHJpbmcnKSB7XG4gICAgICBjb25maWcgPSB7IHBpbjogY29uZmlnIH07XG4gICAgfVxuICAgIHN1cGVyKGNvbmZpZy5waW4pO1xuICAgICgoeyBwaW4gPSAnUFdNMCcsIGZyZXF1ZW5jeSA9IDgwMCwgcmFuZ2UgPSAyNTV9KSA9PiB7XG4gICAgICB0aGlzW19yYW5nZV0gPSByYW5nZTtcbiAgICAgIHRoaXNbX3B3bV0gPSBuZXcgR3Bpbyh0aGlzLnBpblRvR1BJTyh0aGlzLnBpbnNbMF0pLCB7bW9kZTogR3Bpby5PVVRQVVR9KTsgXG4gICAgICB0aGlzW19wd21dLnB3bVJhbmdlKHJhbmdlKTtcbiAgICAgIHRoaXNbX3B3bV0ucHdtRnJlcXVlbmN5KGZyZXF1ZW5jeSk7XG4gICAgfSkoY29uZmlnKTtcbiAgfVxuXG4gIGdldCByYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpc1tfcmFuZ2VdO1xuICB9XG5cbiAgd3JpdGUodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuYWxpdmUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGVkIHRvIHdyaXRlIHRvIGEgZGVzdHJveWVkIHBlcmlwaGVyYWwnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnbnVtYmVyJyB8fCB2YWx1ZSA8IDAgfHwgdmFsdWUgPiB0aGlzW19yYW5nZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQV00gdmFsdWUgJyArIHZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgdGhpc1tfcHdtXS5hbmFsb2dXcml0ZSh2YWx1ZSk7XG4gIH1cblxuICBwaW5Ub0dQSU8ocGluKSB7XG4gICAgY29uc3QgcGlucyA9IGdldFBpbnMoKVtwaW5dLnBpbnM7XG4gICAgY29uc3QgZ3Bpb1JlZ2V4ID0gL0dQSU8oW1xcZF0rKS87XG4gIFxuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGk7XG4gICAgXG4gICAgZm9yIChpID0gMDsgaSA8IHBpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdCA9IGdwaW9SZWdleC5leGVjKHBpbnNbaV0pO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQocmVzdWx0WzFdLDEwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufVxuIl19
