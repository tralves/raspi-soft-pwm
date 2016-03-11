#!/bin/sh
# The MIT License (MIT)
#
# Copyright (c) 2016 Tiago Alves <tralves@gmail.com>
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

# This script was based on Bryan Hughes' install-wiringpi.sh 
# (https://github.com/nebrius/raspi-wiringpi/blob/master/install-wiringpi.sh)

CLONE_DIR=$(mktemp -d)
cd $CLONE_DIR

# Check if Wiring Pi is already installed
if command -v pigpiod >/dev/null 2>&1
then
  echo "pigpio is already installed, skipping\n"
  exit 0
fi

# Check if git is installed or not
if !(command -v git >/dev/null 2>&1)
then
  echo "You must install git before installing pigpio\n"
  exit 1
fi

echo "\nDownloading pigpio...\n"
git clone https://github.com/joan2937/pigpio || { echo "Could not download pigpio\n"; exit 1; }
cd pigpio

echo "\nBuilding pigpio. You may be asked for your root password.\n"
make
sudo make install|| { echo "Could not install pigpio\n"; exit 1; }
sudo rm -r $CLONE_DIR