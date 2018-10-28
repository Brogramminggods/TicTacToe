# 1 Introduction
On Wednesday October 17 the team sat down on the 2nd floor of the Sun and discussed how we would like the project to look in two and a half weeks’ time when we would hand it in. We decided not to have fixed meetings but we had **scrum** meetings every other day and worked on the project together after school.

We decided that we would implement the game using a **2D-array** and we wouldn't create a console program first because that would be a waste of time because we agreed that we would like to have it web-based. It would have a black background and the Tic Tac Toe game itself would be white. Under the game there should be a scoreboard of how many points each player has in the current game session.

We had a Markdown TODO list in the **README** file in GitHub. We had further information on the TODO list in a Google Sheets file even though we had the markdown list in Github. We also had a Google Docs file where we would put ideas relative to the project. We used **pair programming** quite a lot in the process. We also established some ground rules, e.g. when someone has headphones on they are _in the zone_ and should not be interrupted, we should only send them a message and they would open it when they could.
## 1.1 About the system
TicTacToe is a two person game of wits. The octothorp board makes available nine slots for each player. Alternating turns, the players attempt to put their mark on slots, either across, down or sidewise. The player first to create the pattern wins. Draws are common.
### Practices
The technical infrastructure of the project are integrated elements of best programming practices and agile tools. **Test driven development** was integral to the code weaving. All code written was immediately followed by thorough tests. As the code base grew, so did the number of tests. All new code was expected to pass its test and not to fuck up any old tests. A factor of the best practices was to **loosely-couple** the code and follow good **object-oriented design practices**. Each team member would pull the repo at the start of each day and when working on a feature they'd created a branch. After their new code passed all test they'd create a pull request, another member of the team would review and accept if the code would improve the system, otherwise contact with the aforementioned contributor.
### Tech
Underlying aspect of the teamwork was the **version control system**. Immediately, the team set up a repository on _GitHub_. The **automatic build script** used _Webpack_ and was declared in the _JSON_ package. _Jest_ was used to create a build script to **run all unit tests**. The team was most excited to create a **web app** so there is no **executable artefact**. 

The **Automated Continuous Integration Server** is _Circle CI_ and the **Continuous Delivery** server has _Heroku_.

# 2 Requirement list
The requirement list is a list of features that will, or might, be implemented. Functional requirements detail necessary technical aspects while the non-functional requirements out constraints on system performance.
## 2.1 Functional requirements
1. A game begins when site is loaded.
2. Player turns alternate.
3. User X presses slot, X appears in the slot.
4. User O presses slot, O appears in the slot.
5. "Player turn" displays which player's turn it is, i.e. "Player X, it's your turn!"
6. Board clears when a player wins.
7. Board clears when there's a draw.
8. A draw yields no points for players.
9. A win for X yields a point for player X.
10. A win for O yields a point for player O.
11. Score board increments for every point earned, i.e. "X has 3 points!"
## 2.2 Non-functional requirements
1. Works on all browsers.
2. Works on mobile.
3. The project follows Shneiderman's 8 Golden Rules
4. Clear and simple UI and UX.
5. The design is responsive.
6. No pop-ups.
7. Response time is maximum 500ms.
8. Accessible for color blind people.

