---
title: Basic Heroku Deployment
description: Meta Description
date: January 17, 2022
# update_date:
# specific_css:
# specific_js:
tags:
  - Software
  - Deployment
hide:
  - navigation
---

# Basic Heroku Deployment

HEROKU HAS REALLY GOOD DOCUMENTATION, IS THIS NECESSARY?

I've heard the phrase, "Software you don't sell is a hobby". Now, that's all fine - not everything has to be a money making venture - but a deeper layer on that idea could easily be, "Software you don't deploy is just a text file". To that end, I'm going to go over the basics here of how to create a project to deploy to Heroku. I'll use a basic Node-Express server example so we can focus less on the code and more on the project itself.

The overall steps are:

1. Build the server
2. Initialize a git repo
3. Create a Heroku account and install the Heroku CLI
4. Add Heroku as a remote location (similar to GitHub is a remote to git)
5. Push your code to your Heroku remote

## Creating Our Server

We'll do a basic Express server here, using only basic functions. There are plenty of tutorials online for how to build this kind of service, so I'm going to gloss over some details here: if you're curious about more, I recommend reading up elsewhere before deploying anyways.

To create our Node-Express server:

1. Start a new project with `npm init` in a new folder
2. Add Express as a dependency using the command `npm i express`
3. Write a single file (I use `server.js` as a convention) with the following code:

```js title='server.js'
// Define and create the server instance with a PORT definition.
// You'll want this PORT definition for when you deploy
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3900;

// A single endpoint confirming that the server is working
app.get("/", (req, res) => {
  res.send("Hello example server");
});

// Start your server up with the app.listen(PORT,...) command
app.listen(PORT, () => console.log(`Server listening @ Port ${PORT}`));
```

Test that your code works by running `node server.js` from the terminal and checking port 3900. You should see a screen like this:
![Example Server image](../assets/images/2022/Basic-Heroku-Deployment/Example-server.png)

Assuming that's working for you, let's move on to the Heroku deployment part of this.

## Install Heroku CLI

## Add Heroku as a git Remote

## Push Your Server to Heroku

[^1]: <a href='https://www.heroku.com/home' target='_blank'>Herkou</a> has some good tutorials available as well, so feel comfortable using theirs as another reference
