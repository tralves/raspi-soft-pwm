/*
The MIT License (MIT)

Copyright (c) 2016 Tiago Alves <tralves@gmail.com>

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
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pigpio_1 = require("pigpio");
var raspi_peripheral_1 = require("raspi-peripheral");
var raspi_board_1 = require("raspi-board");
var DEFAULT_FREQUENCY = 50;
var DEFAULT_RANGE = 40000;
var SoftPWM = (function (_super) {
    __extends(SoftPWM, _super);
    function SoftPWM(config) {
        var _this = this;
        var pin;
        var frequency = DEFAULT_FREQUENCY;
        var range = DEFAULT_RANGE;
        if (typeof config === 'number' || typeof config === 'string') {
            pin = config;
        }
        else if (typeof config === 'object') {
            if (typeof config.pin === 'number' || typeof config.pin === 'string') {
                pin = config.pin;
            }
            else {
                throw new Error("Invalid pin \"" + config.pin + "\". Pin must a number or string");
            }
            if (typeof config.frequency === 'number') {
                frequency = config.frequency;
            }
            if (typeof config.range === 'number') {
                range = config.range;
            }
        }
        else {
            throw new Error('Invalid config, must be a number, string, or object');
        }
        _this = _super.call(this, pin) || this;
        var gpioPin = raspi_board_1.getGpioNumber(pin);
        if (gpioPin === null) {
            throw new Error("Internal error: " + pin + " was parsed as a valid pin, but couldn't be resolved to a GPIO pin");
        }
        _this._frequency = frequency;
        _this._range = range;
        _this._dutyCycle = 0;
        _this._pwm = new pigpio_1.Gpio(gpioPin, { mode: pigpio_1.Gpio.OUTPUT });
        _this._pwm.pwmFrequency(frequency);
        _this._pwm.pwmRange(range);
        return _this;
    }
    Object.defineProperty(SoftPWM.prototype, "frequency", {
        get: function () {
            return this._frequency;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoftPWM.prototype, "range", {
        get: function () {
            return this._range;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoftPWM.prototype, "dutyCycle", {
        get: function () {
            return this._dutyCycle;
        },
        enumerable: true,
        configurable: true
    });
    SoftPWM.prototype.write = function (dutyCycle) {
        if (!this.alive) {
            throw new Error('Attempted to write to a destroyed peripheral');
        }
        if (typeof dutyCycle !== 'number' || dutyCycle < 0 || dutyCycle > 1) {
            throw new Error("Invalid PWM duty cycle \"" + dutyCycle + "\"");
        }
        this._dutyCycle = dutyCycle;
        this._pwm.pwmWrite(Math.round(this._dutyCycle * this._range));
    };
    return SoftPWM;
}(raspi_peripheral_1.Peripheral));
exports.SoftPWM = SoftPWM;
//# sourceMappingURL=index.js.map