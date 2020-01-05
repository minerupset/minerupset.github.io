# Scripting Commands

<hr>
There are times in my life that I love working with my hands. It can be a restorative, meditative break to spend several hours engrossed in a purely physical task and go to bed tired and fulfilled, with a real thing you can point to and say, "See that? I did / made / destroyed that"

This is not true for most activities I do on a computer. Not that I don't love working with and/or developing software: I do. But while I will happily pass a sanding block over a stack of lumber for hours at a time, rerunning the same deploy scripts again and again is not my idea of a day spent well. We use computers to automate and remember for us; I don't want to have to remember all of the specific magic incantations I used to get something to work just right, nor do I want to have to retype it again and again each time I make a change.

Luckily, operating systems today (and in the past) have lightweight, powerful tools for automating workflows. Below I've laid out how to do it in Mac and Windows, as well as some information on running jobs on a schedule as well.
<br>

## Terminal Scripting in MacOS

<hr>
The example I'll include here is the automatic script I use to deploy this site to GitHub Pages. Because this is a personal site (and not a project site, there are some additional steps that MkDocs requires one to go through. Here's what I've done to automate that process:

- In the overall parent directory of my site, I've created a file called 'autoDeploy'. Note, it's not 'autoDeploy.txt', or 'autoDeploy.py', but a raw 'typeless' file. We'll adjust that in a moment.<br><br>
- In this file, write the following lines:<br>

```shell
#!/bin/bash

echo Hello World!

```

- What this does is first, indicate to terminal that this is to be used in the bash shell (more technical details <a href="https://www.gnu.org/software/bash/manual/html_node/What-is-Bash_003f.html" target="_blank">available here</a>) and then second, prints the line 'Hello World!' to the terminal (using the `echo` command) <br><br>
- Now that we have our script ready, we want to run it. To do that, navigate to the folder that contains the file 'autoDeploy' file (obviously you can name your file whatever you'd like)<br><br>
- In that folder in your terminal, run the command<br>`chmod 700 autoDeploy`<br>. This sets it to be an executable file that only you can run
- Now it's ready: from the terminal, run the command<br>`./autoDeploy`<br> and the words Hello World! should appear on the terminal

To chain commands together, use &&. For example, in my file I run two commands: a `cd` to my target directory, and then `mkdocs gh-deploy {...more parameters}`. These are two separate commands, but I chain them together so that they will run sequentially
<br>

<h4>References:</h4>

- Nice Hello World tutorial <a href="https://www.hastac.org/blogs/joe-cutajar/2015/04/21/how-make-simple-bash-script-mac" target="_blank">can be found here</a>
- What `chmod 700` actually means <a href="https://www.poftut.com/chmod-755-700/" target="_blank">can be found here</a>
  <br>

## Scheduled (Cron) Jobs in MacOs

<hr>

<h4>References:</h4>

- Good summary post on mac cron jobs <a href="https://www.techradar.com/how-to/computing/apple/terminal-101-creating-cron-jobs-1305651" target="_blank">can be found here</a>
  <br>

## Command Line Scripting in Windows

<hr>

<br>
