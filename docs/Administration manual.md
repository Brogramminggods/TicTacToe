## Administration Manual
#### Welcome! Here's what you need to do to get things up and running.
###### You'll need to have an account on GitHub, if you don't have one, go to github.com and create one!
## Admin Setup
###### You'll also need:
* Git	version 2.19.1 or later
* Node	version 8.12.0 or later
* npm	version 6.04.1 or later
* A text editor to work on the code, we recommend Visual Studio Code

#### When you set up for the first time:
##### Go to your command terminal and do the following:

```
git clone git@github.com:Brogramminggods/TicTacToe.git

cd TicTacToe

npm install
```
#### Now that you've got things set up on your computer, you can change things whenever at will.
#### If you want to make any changes to the project, you should do so by creating a branch, working on the branch, and then create a pull request where another team member will have to review and accept the request.
##### To create a new branch, do the following:

```
git checkout -b <branch_name>

git push -u origin <branch_name>
```
##### And when you're ready to merge:
Create a pull request on GitHub, or else...
![OrElse](https://media.giphy.com/media/cFkiFMDg3iFoI/giphy.gif)
##### If you want to get the program running on your local server, do the following:

```
npm run build

npm start
```
##### If you want the program to run on the Heroku server, do the following:
###### First you'll need to have an account on Heroku, if you don't have one, go to heroku.com and create One! You'll also need to download Heroku CLI on your computer, then do the following:

```
heroku login

heroku git:remote -a brogramminggods
```
###### To add Heroku as a git remote repository that you can push to, do the following:

```
git push heroku <branch_name> to heroku master

git push heroku master
```








