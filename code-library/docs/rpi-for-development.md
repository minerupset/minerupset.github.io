# Raspberry Pi for Development

## Why would I want a Pi?

<hr>
For those who may not know, a Raspberry Pi is a cheap, tiny computer that typically runs a modified version of the Linux operating system. They cost anywhere from $10 to $40 dollars (give or take, depending on the model), and can be used for all kinds of applications, like server hosting or internet of things (IoT) development.

I've personally found it's very helpful to have a Raspberry Pi in my arsenal for the main reason (with a lot of sub reasons) that it has taught me a boatload about development operations (DevOps). Now, most actual deployment services you'll use (Heroku, Azure, AWS...) will have much easier systems and interfaces than the command line of your Pi. But guess what? If you can figure out all of the necessary shenanigans to get something to work on a Pi and actually access the info you need, you'll be able to get it to work on one of those systems.
<br>

## Useful Reminders

### Installing Node.js on a Pi

<a href="https://yannickloriot.com/2016/04/install-mongodb-and-node-js-on-a-raspberry-pi/" target="_blank">How to Install MongoDB</a>

<a href="https://www.instructables.com/id/Install-Nodejs-and-Npm-on-Raspberry-Pi/" target="_blank">How to Install Node.JS</a><br>
Note: I had to change step three from:<br>`tar -xzf` to `tar -xf`<br>I believe because his version had a .gz compression, while Node now uses a .tz compression

### Updating Pi from Python 2 to Python 3

With the imminent sunset of Python 2, it is helpful to be able to update a Raspberry Pi to Python 3, especially if this can be done in an automated fashion (for future rebuilds of the pi).

This actuall wound up being a bit of a production, to be honest. The core instructions can be found here at <a href='https://raspberrypi.stackexchange.com/questions/59381/how-do-i-update-my-rpi3-to-python-3-6' target='_blank'>this answer</a> on StackOverflow, BUT: there are a couple steps you need to do first:

```shell
sudo apt-get install build-essential checkinstall
 sudo apt-get install libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev
 sudo apt-get install libffi-dev
```

You need to run this first otherwise you will have errors in your Python or your pip installs.

After the install, I wanted to delete the Python-3.8.1 folder that was suddenly in my home directory. A fun Linux trick:<br>
`sudo rm -rI Python-3.8.1`<br>
takes care of this. `sudo` means 'superuser do' (in other words, you have full admin privileges active, so don't do this for every command), `rm` is remove directory, `-r` is to do it recursively (so that you can remove non-empty directories) and `I` stops you from getting prompted all the time about permissions, just the once at the beginning.
