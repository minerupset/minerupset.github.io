---
title: Introduction to Version Control and `git`
description: What is git and why do we care?
date: Dec. 13, 2021
tags:
  - git
  - GitHub
  - Software
hide:
  - navigation
---

# Introduction to Version Control and `git`

## TL; DR

- Instead of saving code version manually, you left software (`git`) manage your code versions
- `git` is a local tool for version control, GitHub is the remote tool you pair with
- `git` and GitHub both have command line and GUI based tools: I personally recommend learning `git` command line, and using a web tool for managing GitHub

## Why Should You Care

Writing code is never just writing code: while that may be the most fun step, writing code effectively means managing code as well, and one of the most important elements of that is making sure you're working on the right version of your code. Whether you're working alone or with others, you'll make new and improved versions of your code, and that means you'll have different versions floating around. The last thing you want is to have spent a day debugging, adding a new feature, or deploying your code only to find you've been staring at an out-of-date codebase.

Software developers like having automated tools for everything, and tools for managing code is no exception: `git` is one such tool. Instead of saving each version of your files as "\_v1", "\_v2", etc., you instead track changes with `git`, which can compare different versions and branches of files over time. This means you can always rollback changes, merge changes from others, and 'fast forward' code to include new features.

Now, `git` itself only runs locally on your machine, but that's why you extend `git` with an online tool, like <a href='https://github.com/' target='_blank'>GitHub</a>. GitHub allows you to push your codebase (aka a repository) to an online site that allows you to work on the same code from multiple machines, share code with friends and teammates, or even deploy from a single spot. There are plenty of tutorials[^1] on `git` and GitHub to refer to, but here are the basics I have found helpful.

## Quick Overview

Working with `git` in the command line can be hard if you're not used to using a terminal, but this is one tool where it really pays off to feel very comfortable in the command line: committing code early and often will save you plenty of heartache in the long run

```bash title="Basic git commands"
# Creates a new git repository in the root folder
git init

# For seeing what the status of your current branch is
git status

# 'git add' adds files to be tracked
git add .

# Commit 'saves' a version. One should always have a descriptive message
git commit -m "MESSAGE"

# These 3 commands add a new remote and push your main branch the 1st time
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main

# Pushes your commit to the main branch on your remote
git push origin main

# Creates a new branch (remove -b to access an existing branch)
git checkout -b branch (-b to make new branch)

# Opposite of push: this pulls your main branch from your remote
git pull origin main
```

## Basic Workflow

This workflow assumes everything goes right (which it never does), but it should ground you in how the basics

```bash title="Basic git workflow"
git add .

git commit -m "MESSAGE"

git push origin branch_name

# I recommend handling all pull requests on GitHub itself
# Typically you use a pull request to combine your branch
# with the main code base branch

# Now that you've combined main and your branch on your remote location,
# it's time to update the main branch on your local machine
git pull origin main

# Merges your two branches so main is up to date locally
git checkout branch_name
git merge main
```

## Closing Topics

[^1]: This <a href="https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html" target="_blank">tutorial here</a> from GitLab is a great introductory one to using `git` on the command line, and also references <a href='https://about.gitlab.com/images/press/git-cheat-sheet.pdf' target='_blank'>this great cheat sheet</a>.
