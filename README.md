Raspi SOFT PWM
==============

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nebrius/raspi-io?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Raspi Soft PWM is part of the [Raspi.js suite](https://github.com/bryan-m-hughes/raspi) that provides software PWM through [pigpio](https://github.com/fivdi/pigpio).

## Installation

```Shell
npm install raspi-soft-pwm
```

## Example Usage

```JavaScript
var raspi = require('raspi');
var SoftPWM = require('raspi-soft-pwm').SoftPWM;

raspi.init(function() {
  var pwm = new SoftPWM('GPIO17');
  let value = 0;
  setInterval(() => {
    pwm.write(value);
    value++;
    if (value === pwm.range) {
      value = 0;
    }
  }, 10);
});
```

## Pin Naming

The pins on the Raspberry Pi are a little complicated. There are multiple headers on some Raspberry Pis with extra pins, and the pin numbers are not consistent between Raspberry Pi board versions.

To help make it easier, you can specify pins in three ways. The first is to specify the pin by function, e.g. ```'GPIO18'```. The second way is to specify by pin number, which is specified in the form "P[header]-[pin]", e.g. ```'P1-7'```. The final way is specify the [Wiring Pi virtual pin number](http://wiringpi.com/pins/), e.g. ```7```. If you specify a number instead of a string, it is assumed to be a Wiring Pi number.

Be sure to read the [full list of pins](https://github.com/nebrius/raspi-io/wiki/Pin-Information) on the supported models of the Raspberry Pi.

## API

### new SoftPWM(config)

Instantiates a new PWM instance on the given pin.

_Arguments_:

<table>
  <thead>
    <tr>
      <th>Argument</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td>config (optional)</td>
    <td>Number | String | Object</td>
    <td>The configuration for the PWM pin. If the config is a number or string, it is assumed to be the pin number for the peripheral. If it is an object, the following properties are supported:</td>
  </tr>
  <tr>
    <td></td>
    <td colspan="2">
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tr>
          <td>pin (optional)</td>
          <td>Number | String</td>
          <td>The pin number or descriptor for the peripheral</td>
        </tr>
        <tr>
          <td>range (optional)</td>
          <td>Number</td>
          <td>Sets the range register in the PWM peripheral. This value controls how <em>many</em> clock cycles are used in one period. Please refer to the pigpio documentation of [Gpio.pwmRange(range)](https://github.com/fivdi/pigpio/blob/master/doc/gpio.md#pwmrangerange). *Default: 255*</td>
        </tr>
        <tr>
          <td>frequency (optional)</td>
          <td>Number</td>
          <td>Sets the frequency in the PWM peripheral. Please refer to the pigpio documentation of [Gpio.pwmFrequency(frequency)](https://github.com/fivdi/pigpio/blob/master/doc/gpio.md#pwmfrequencyfrequency). *Default: 800*</td>
        </tr>
      </table>
    </td>
  </tr>
</table>

### Instance Properties

#### frequency

A number representing the PWM frequency.

#### range

A number representing the PWM range.

### Instance Methods

#### write(value)

Sets the duty cycle for the PWM output.

_Arguments_:

<table>
  <thead>
    <tr>
      <th>Argument</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td>value</td>
    <td>Number</td>
    <td>The duty cycle for the PWM to set, must be between 0 and range</td>
  </tr>
</table>

_Returns_: None

Note: The PWM does not start outputting a signal until write is called for the first time.

## Credits

This package was largely based on [Bryan Hughes](https://github.com/nebrius)' work and advice. He is the creator of [raspi](https://github.com/nebrius/raspi).
Also, [Brian Cooke](https://github.com/fivdi), creator of [pigpio](https://github.com/fivdi/pigpio), the package that actually does all the work.

License
=======

The MIT License (MIT)

Copyright (c) 2016 Tiago Alves tralves@gmail.com

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
