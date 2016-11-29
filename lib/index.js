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
var _frequency = Symbol();

var SoftPWM = (function (_Peripheral) {
  _inherits(SoftPWM, _Peripheral);

  function SoftPWM(config) {
    _classCallCheck(this, SoftPWM);

    if (typeof config == 'number' || typeof config == 'string') {
      config = { pin: config };
    }
    var _config = config;
    var pin = _config.pin;
    var _config$frequency = _config.frequency;
    var frequency = _config$frequency === undefined ? 800 : _config$frequency;
    var _config$range = _config.range;
    var range = _config$range === undefined ? 255 : _config$range;

    if (!pin) {
      throw new Error('A pin must be specified');
    }
    _get(Object.getPrototypeOf(SoftPWM.prototype), 'constructor', this).call(this, pin);
    this[_range] = range;
    this[_frequency] = frequency;
    this[_pwm] = new _pigpio.Gpio(this.pinToGPIO(this.pins[0]), { mode: _pigpio.Gpio.OUTPUT });
    this[_pwm].pwmRange(range);
    this[_pwm].pwmFrequency(frequency);
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

      this[_pwm].analogWrite(Math.round(value));
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
  }, {
    key: 'frequency',
    get: function get() {
      return this[_frequency];
    }
  }]);

  return SoftPWM;
})(_raspiPeripheral.Peripheral);

exports.SoftPWM = SoftPWM;
//# sourceMappingURL=data:application/json;charset=utf8;base64,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Qjs7O1NBRVksZUFBRztBQUNkLGFBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3pCOzs7U0F2QlUsT0FBTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSAyMDE0IEJyeWFuIEh1Z2hlcyA8YnJ5YW5AdGhlb3JldGljYWxpZGVhdGlvbnMuY29tPlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG4qL1xuXG5pbXBvcnQgeyBHcGlvIH0gZnJvbSAncGlncGlvJztcbmltcG9ydCB7IFBlcmlwaGVyYWwgfSBmcm9tICdyYXNwaS1wZXJpcGhlcmFsJztcbmltcG9ydCB7IGdldFBpbnMgfSBmcm9tICdyYXNwaS1ib2FyZCc7XG5cbmNvbnN0IF9wd20gPSBTeW1ib2woKTtcbmNvbnN0IF9yYW5nZSA9IFN5bWJvbCgpO1xuY29uc3QgX2ZyZXF1ZW5jeSA9IFN5bWJvbCgpO1xuXG5leHBvcnQgY2xhc3MgU29mdFBXTSBleHRlbmRzIFBlcmlwaGVyYWwge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PSAnbnVtYmVyJyB8fCB0eXBlb2YgY29uZmlnID09ICdzdHJpbmcnKSB7XG4gICAgICBjb25maWcgPSB7IHBpbjogY29uZmlnIH07XG4gICAgfVxuICAgIGNvbnN0IHsgcGluLCBmcmVxdWVuY3kgPSA4MDAsIHJhbmdlID0gMjU1IH0gPSBjb25maWc7XG4gICAgaWYgKCFwaW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBwaW4gbXVzdCBiZSBzcGVjaWZpZWQnKTtcbiAgICB9XG4gICAgc3VwZXIocGluKTtcbiAgICB0aGlzW19yYW5nZV0gPSByYW5nZTtcbiAgICB0aGlzW19mcmVxdWVuY3ldID0gZnJlcXVlbmN5O1xuICAgIHRoaXNbX3B3bV0gPSBuZXcgR3Bpbyh0aGlzLnBpblRvR1BJTyh0aGlzLnBpbnNbMF0pLCB7bW9kZTogR3Bpby5PVVRQVVR9KTtcbiAgICB0aGlzW19wd21dLnB3bVJhbmdlKHJhbmdlKTtcbiAgICB0aGlzW19wd21dLnB3bUZyZXF1ZW5jeShmcmVxdWVuY3kpO1xuICB9XG5cbiAgZ2V0IHJhbmdlKCkge1xuICAgIHJldHVybiB0aGlzW19yYW5nZV07XG4gIH1cblxuICBnZXQgZnJlcXVlbmN5KCkge1xuICAgIHJldHVybiB0aGlzW19mcmVxdWVuY3ldO1xuICB9XG5cbiAgd3JpdGUodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuYWxpdmUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGVkIHRvIHdyaXRlIHRvIGEgZGVzdHJveWVkIHBlcmlwaGVyYWwnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnbnVtYmVyJyB8fCB2YWx1ZSA8IDAgfHwgdmFsdWUgPiB0aGlzW19yYW5nZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQV00gdmFsdWUgJyArIHZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzW19wd21dLmFuYWxvZ1dyaXRlKE1hdGgucm91bmQodmFsdWUpKTtcbiAgfVxuXG4gIHBpblRvR1BJTyhwaW4pIHtcbiAgICBjb25zdCBwaW5zID0gZ2V0UGlucygpW3Bpbl0ucGlucztcbiAgICBjb25zdCBncGlvUmVnZXggPSAvR1BJTyhbXFxkXSspLztcblxuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcGlucy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0ID0gZ3Bpb1JlZ2V4LmV4ZWMocGluc1tpXSk7XG4gICAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChyZXN1bHRbMV0sMTApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59XG4iXX0=
