# Git and GitHub

## Quick Overview

There are a boatload of tutorials on git and GitHub across the internet, so I'm not going to waste a lot of time here - this <a href="https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html" target="_blank">tutorial here</a> from GitLab is a great introductory one to using git on the command line.

In a nutshell, git is source control. What that means is instead of saving each version of your files as "\_v1", "\_v2", etc., you instead track changes with git, which can compare different version, branches, etc. Now, git itself only runs locally on your machine, but that's why you extend git with GitHub (where this site is hosted as of this writing, in fact). GitHub allows you to push your code repositories to an online site (or Hub, one might call it), that allows you to work on the same code from multiple machine, share code with friends and teammates, or even deploy from a single spot.

I am of two minds on how to start with git/GitHub: I started with <a href="https://desktop.github.com/" target="_blank">GitHub Desktop</a> and at the time of this writing, am trying to get better at local git and pushing it to remote repositories on GitHub. While I think that git from the command line is ultimately a useful tool, to be honest, I don't think "in the command line". I'm a visual person, and seeing a desktop app that I can do things from is very helpful. That being said, when you obscure some of the magic behind a UI, it can actually damage your understanding of what exactly you're doing, and git is nuanced enough that I think a strong CLI understanding of its functionality will serve you well.
<br>

## Git - Reminders to myself

### How to add an existing project to git/GitHub

<hr>
This one I forget all the time - I'll start futzing around with some code, realize I like where it's going and want to source control it, and then forget the best way to do that.

Assuming:

- git is not enabled in your folder (if it is, skip to #4):
- you want it on GitHub, not just local git

Then take the following steps:

1. Make a new repository on GitHub and copy the 'clone' URL (you'll need this in step #5)<br><br>
2. Open Terminal (or equivalent for your OS) in the folder you want as the parent folder on git and run the command:<br>`git init`<br> This sets up git in your local repo<br><br>
3. Now that it's ready, you want to add the files you've been working on: run the command <br>`git add .`<br>This stages all of your files (the parameter `.`) with the command `add` so that you can actually commit them to the repository<br><br>
4. Commit the changes you just staged by running: <br>`git commit -m "YOUR MESSAGE HERE"`<br>The parameter `-m` provides the message you're putting with this specific git commit<br><br>
5. Great, now everything is working in your local git. However, you want this on GitHub, right? To do that, you need to point your local git repository at an online target repository. To do that, run the command:<br>`git remote add origin <YOUR COPIED URL HERE>`<br>What you've just told git is, "Hey, I'm adding a remote that I will call 'origin', and its address is this URL"<br><br>
6. Lastly, you need to push your code up. Now, there's one thing here that you only do this one time, otherwise it can cause problems later on. Run the command:<br>`git push -f origin master`<br> What you did here was say,<br> "git, push this code up to the origin (that I previously specified) and push it to the branch master. And do it forcefully (`-f`) because I know what I'm doing"<br>You only want to use the `-f` parameter when you for sure want to overwrite what's going on, so only use this when you know what the results will be. In this case, because we know that the repository we made on GitHub is empty, there's no issue here, but best to confirm before doing this.<br><br>

References:

- <a href="https://www.softwarelab.it/2018/10/12/adding-an-existing-project-to-github-using-the-command-line/" target="_blank">This guy's tutorial</a>
- <a href="https://articles.assembla.com/en/articles/1136998-how-to-add-a-new-remote-to-your-git-repo" target="_blank">This reference on remotes</a>
- <a href="https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html" target="_blank">This GitLab reference</a>

### How to login to GitHub via the command line

<hr>
Now, this one became useful in setting up a Raspberry Pi - I wanted to be able to pull code and just have that work.
