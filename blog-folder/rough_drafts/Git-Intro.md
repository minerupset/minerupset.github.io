---
title: Introduction to Version Control and git
description: What is git and why do we care?
date: Dec. 20, 2021
duration: 8 min
#update_date:
tags:
  - git
  - GitHub
  - Software
hide:
  - navigation
---

# Introduction to Version Control and `git`

## TL; DR

- Instead of saving code manually, you let software (specifically `git`) manage your code versions
- `git` is a local tool for version control, GitHub is an optional remote tool you pair with
- `git` and GitHub both have command line and GUI based tools: I personally recommend learning `git` command line, and using a web tool for managing GitHub

## Why Should You Care

Writing code is never just writing code. While that may be the most fun step, writing code effectively means managing code, and one of the most important elements to that is making sure you're working on the right version. Whether you're working alone or with others, you'll make changes - hopefully good ones - and that means you'll have different versions floating around. The last thing you want is to have spent a day debugging, adding a new feature, or deploying only to find you've been working with an out-of-date codebase.

Software developers like having automated tools for everything, this is no exception: `git` is not just one such tool, it is _the_ tool. Instead of saving each version of your files as "\_v1", "\_v2", etc., you instead track changes with `git`, which can compare different versions and branches of files over time. This means you can always rollback changes, merge changes from others, and 'fast forward' code to include new features.

!!! tip

    It's important to note that `git` only works with text-based files: for most anything a software developer is doing this is fine, but if you're working on things like Excel spreadsheets, Word Docs, or any other such file types, it likely won't work. (I'll be posting later on about the nature of Office Documents and how they aren't what they seem: stay tuned).

Now, `git` itself only runs locally on your machine, but that's why you extend `git` with an online tool, like <a href='https://github.com/' target='_blank'>GitHub</a>. GitHub allows you to push your codebase (as a repository of files) to an online site that allows you to work on the same code from multiple machines, share code with friends and teammates, or even deploy from a single spot. There are plenty of tutorials[^1] on `git` and GitHub to refer to, but here are the basics I have found helpful.

## Quick Overview

Working with `git` in the command line can be hard if you're not used to using a terminal, but this is one tool where it really pays off to feel very comfortable in the command line: committing code early and often will save you plenty of heartache in the long run.

```bash title="Basic git commands"
# Creates a new git repository in the root folder
git init

# Shows the status of your current branch
git status

# Adds files to be tracked
git add .

# 'Saves' a version. One should always have a brief, descriptive message.
git commit -m "MESSAGE"

# Pushes your commit to the specified branch on your GitHub repository
git push origin branch_name

# Creates a new branch (remove -b to access an existing branch)
git checkout -b branch

# These 3 commands add a new remote and push your main branch the 1st time.
# This assumes you have already created that branch on GitHub
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main

# Opposite of push: this pulls your main branch from your remote
git pull origin main
```

## Basic Workflow

This workflow assumes everything goes right (which it rarely does), but it should ground you in the basics

```bash title="Basic git workflow"
git add .

git commit -m "I updated the MeaningOfLife function to return 42"

git push origin branch_name

# Typically you use a pull request to combine your branch
# with the main code base branch
# I recommend handling all pull requests on GitHub itself, so we'll skip that here

# Now that you've combined main and your branch on your remote location,
# it's time to update the main branch on your local machine
git pull origin main

# Merges your two branches so main is up to date locally as well
git checkout branch_name
git merge main
```

## Closing Topics

There are more references you'll want to have, specifically about what to do when something goes wrong (undoing commits, merge with a teammate's code, rebasing etc.) but this should be enough to get you started on a solo project.

[^1]: This <a href="https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html" target="_blank">tutorial here</a> from GitLab is a great introductory one to using `git` on the command line, and also references <a href='https://about.gitlab.com/images/press/git-cheat-sheet.pdf' target='_blank'>this dead-useful cheat sheet</a>.
