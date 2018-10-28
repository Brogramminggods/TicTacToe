## Administration Manual
#### Welcome! Here's what you need to do to get things up and running.
###### You'll need to have an account on GitHub, if you don't have one, go to github.com and create one!
###### You'll also need:
* Git	version 2.19.1 or later
* Node	version 8.12.0 or later
* npm	version 6.04.1 or later
* A text editor to work on the code, we recommend Visual Studio Code

## Admin Setup
#### When you set up for the first time:
##### Fork the project to your profile on GitHub, go to the desired folder you want it to be in and go to your command terminal and do the following:

```
git clone git@github.com:YOUR-USERNAME/TicTacToe.git

cd TicTacToe

npm install
```
#### Now that you've got things set up on your computer, you can change things whenever at will.

##### If you want to get the program running on your local server, do the following:

```
npm run build

npm start
```
##### If you want the program to run on the Heroku server, do the following:
###### First you'll need to have an account on Heroku, if you don't have one, go to heroku.com and create One! You'll also need to download Heroku CLI on your computer, then do the following:
###### To add Heroku as a git remote repository that you can push to, do the following:

```
heroku create

git push heroku master
```
### Testing:
##### If you want to create end-to-end tests, create the tests in the Puppeteer folder in the root of the repository.
##### If you want to run all the test that are already created, do the following:

```
npm test
```
##### The command above will all tests, including tests using Puppeteer.