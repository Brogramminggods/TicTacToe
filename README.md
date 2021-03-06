# Tic Tac Toe

STATUS: [![CircleCI](https://circleci.com/gh/Brogramminggods/TicTacToe.svg?style=svg)](https://circleci.com/gh/Brogramminggods/TicTacToe)

  

## Dev Setup

#### For first time setup perform:

```

git clone git@github.com:Brogramminggods/TicTacToe.git

  

cd TicTacToe

  

npm install

```

  

## Git branching

#### Creating a new branch:

```

git checkout -b <your_branch_name>

  

git push -u origin <your_branch_name>

```

#### And when you are ready to merge:

Create a pullrequest on [github.com](https://github.com/Brogramminggods/TicTacToe/branches). Or else...

  

![Or else](https://media.giphy.com/media/cFkiFMDg3iFoI/giphy.gif)

  

## Heroku

![HEROKU](https://media.giphy.com/media/AmC5W2bbc41wY/giphy.gif)

#### Setup heroku

Create an account on [Heroku](https://signup.heroku.com/) and

install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install), then run:

```

heroku login

heroku git:remote -a brogramminggods

```

to add heroku as a git remote repository that you can push to

  

#### Pushing with heroku

```

// Pushing from <your_branch_name> to heroku master

git push heroku <your_branch_name>:master

  

// Pushing from git master to heroku master

git push heroku master

```

  

#### Heroku scaling

```

// To see all instances running on heroku

heroku ps

  

// To start one instance of the site on heroku

heroku ps:scale web=1

  

// To stop all instances of the site on heroku

heroku ps:scale web=0

  

// To open the site on heroku

heroku open

  

// To run the site locally

heroku local

```

  

## TODO:

  

-  [x] Created a organization for the team on GitHub

-  [x] Feature branches and pull requests

-  [x] Unit tests

-  [x] Coded game logic

-  [x] Documentation using markdown

-  [x] Design report

-  [x] Development manual

-  [x] Administration manual

-  [x] Build script

-  [x] Continuous Integration using Circle CI

- [ ] ~~UI in console~~( We went straigh to web interface ) 

- [ ] ~~Output of the build tool is executable artifact~~ (Web interface )

- [ ] ~~Deployment target in build script that deploys console artifact outside of working directory~~ Web interface

- [x] Graphical UI using website

- [x] More build targets, list what build targets you plan to add

- [x] Npm test gives us a overview of the tests, showing where more tests should be added.

- [x] Deployment target in build script that deploys website to external server

- [x] Focused integrations tests

- [x] End-to-end tests using Puppeteer ( Due to latency from US to Iceland and back we it somestimes doesn't work locally, but it always works when circleCI calls heroku! ) 

-  [x] Continuous Delivery!


#### What we did not do from the project description
We did everything asked appart from maybe not doing two build targets, 

The first build target is that when npm test is called. it returns an overview of the testing for every single folder/file, saying what could be tested better etc. 

The second "build target" was github related, we created a webhook so that when some git commands are called, it will make a file with the commit story.
