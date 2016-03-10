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

import { Gpio } from 'pigpio';
import { Peripheral } from 'raspi-peripheral';
import { getPins } from 'raspi-board';

const _pwm = Symbol();
const _range = Symbol();

export class SoftPWM extends Peripheral {
  constructor(config) {
    if (typeof config == 'number' || typeof config == 'string') {
      config = { pin: config };
    }
    super(config.pin);
    (({ pin = 'PWM0', frequency = 800, range = 255}) => {
      this[_range] = range;
      this[_pwm] = new Gpio(this.pinToGPIO(this.pins[0]), {mode: Gpio.OUTPUT}); 
      this[_pwm].pwmRange(range);
      this[_pwm].pwmFrequency(frequency);
    })(config);
  }

  write(value) {
    if (!this.alive) {
      throw new Error('Attempted to write to a destroyed peripheral');
    }
    if (typeof value != 'number' || value < 0 || value > this[_range]) {
      throw new Error('Invalid PWM value ' + value);
    }
    
    this[_pwm].analogWrite(value);
  }

  pinToGPIO(pin) {
    const pins = getPins()[pin].pins;
    const gpioRegex = /GPIO([\d]+)/;
  
    let result;
    let i;
    
    for (i = 0; i < pins.length; i++) {
      result = gpioRegex.exec(pins[i]);
      if (result !== null) {
        return parseInt(result[1],10);
      }
    }
    return null;
  }

}
