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

    if (typeof pin === 'undefined') {
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
//# sourceMappingURL=data:application/json;base64,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QyxDQUFDO0tBQ3JCOzs7U0FFWSxlQUFHO0FBQ2QsYUFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDekI7OztTQXZCVSxPQUFPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG5Db3B5cmlnaHQgKGMpIDIwMTQgQnJ5YW4gSHVnaGVzIDxicnlhbkB0aGVvcmV0aWNhbGlkZWF0aW9ucy5jb20+XG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cbiovXG5cbmltcG9ydCB7IEdwaW8gfSBmcm9tICdwaWdwaW8nO1xuaW1wb3J0IHsgUGVyaXBoZXJhbCB9IGZyb20gJ3Jhc3BpLXBlcmlwaGVyYWwnO1xuaW1wb3J0IHsgZ2V0UGlucyB9IGZyb20gJ3Jhc3BpLWJvYXJkJztcblxuY29uc3QgX3B3bSA9IFN5bWJvbCgpO1xuY29uc3QgX3JhbmdlID0gU3ltYm9sKCk7XG5jb25zdCBfZnJlcXVlbmN5ID0gU3ltYm9sKCk7XG5cbmV4cG9ydCBjbGFzcyBTb2Z0UFdNIGV4dGVuZHMgUGVyaXBoZXJhbCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgY29uZmlnID09ICdudW1iZXInIHx8IHR5cGVvZiBjb25maWcgPT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbmZpZyA9IHsgcGluOiBjb25maWcgfTtcbiAgICB9XG4gICAgY29uc3QgeyBwaW4sIGZyZXF1ZW5jeSA9IDgwMCwgcmFuZ2UgPSAyNTUgfSA9IGNvbmZpZztcbiAgICBpZiAodHlwZW9mIHBpbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBwaW4gbXVzdCBiZSBzcGVjaWZpZWQnKTtcbiAgICB9XG4gICAgc3VwZXIocGluKTtcbiAgICB0aGlzW19yYW5nZV0gPSByYW5nZTtcbiAgICB0aGlzW19mcmVxdWVuY3ldID0gZnJlcXVlbmN5O1xuICAgIHRoaXNbX3B3bV0gPSBuZXcgR3Bpbyh0aGlzLnBpblRvR1BJTyh0aGlzLnBpbnNbMF0pLCB7bW9kZTogR3Bpby5PVVRQVVR9KTtcbiAgICB0aGlzW19wd21dLnB3bVJhbmdlKHJhbmdlKTtcbiAgICB0aGlzW19wd21dLnB3bUZyZXF1ZW5jeShmcmVxdWVuY3kpO1xuICB9XG5cbiAgZ2V0IHJhbmdlKCkge1xuICAgIHJldHVybiB0aGlzW19yYW5nZV07XG4gIH1cblxuICBnZXQgZnJlcXVlbmN5KCkge1xuICAgIHJldHVybiB0aGlzW19mcmVxdWVuY3ldO1xuICB9XG5cbiAgd3JpdGUodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuYWxpdmUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGVkIHRvIHdyaXRlIHRvIGEgZGVzdHJveWVkIHBlcmlwaGVyYWwnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnbnVtYmVyJyB8fCB2YWx1ZSA8IDAgfHwgdmFsdWUgPiB0aGlzW19yYW5nZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQV00gdmFsdWUgJyArIHZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzW19wd21dLmFuYWxvZ1dyaXRlKE1hdGgucm91bmQodmFsdWUpKTtcbiAgfVxuXG4gIHBpblRvR1BJTyhwaW4pIHtcbiAgICBjb25zdCBwaW5zID0gZ2V0UGlucygpW3Bpbl0ucGlucztcbiAgICBjb25zdCBncGlvUmVnZXggPSAvR1BJTyhbXFxkXSspLztcblxuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcGlucy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0ID0gZ3Bpb1JlZ2V4LmV4ZWMocGluc1tpXSk7XG4gICAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChyZXN1bHRbMV0sMTApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
