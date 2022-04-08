## Table of Contents
* [Purpose](#Purpose)
* [User Experience Design](#User-Experience-Design)
    * [User Stories](#User-Stories)
        * [First Time Visitor Goals](#First-Time-Visitor-Goals)
        * [Returning Visitor Goals](#Returning-Visitor-Goals)
    * [Design](#Design)
        * [Imagery](#Imagery)
        * [Fonts](#Fonts)
        * [Color Scheme](#Color-Scheme)
- [Features](#Features)
    * [Existing Features](#Existing-Features)
        * [Splash Screen](#Splash-Screen)
        * [Choice Area](#Choice-Area)
        * [Chosen Area](#Chosen-Area)
        * [Score Area](#Score-Area)
        * [Restart Area](#Restart-Area)
        * [Social Media Area](#Social-Media-Area)
    * [Features Left To Implement](#Features-Left-To-Implement)
- [Technologies](#Technologies)
- [Testing](#Testing)
    * [Validator Testing](#Validator-Testing)
    * [Issues And Resolutions](#Issues-And-Resolutions)
- [Deployment](#Deployment)
- [Credits](#Credits)

# Milestone Project 2 - Rock, Paper, Scissors Game
## Purpose
This website was created to complete the second Milestone Project for Code Insitute's Full Stack Software Developer course. I built this from the ground up using knowledge I gained from the previous modules. These being HTML, CSS, User Centric Design and JavaScript. The full list of technologies used can be found in the technologies section further down.

Users of this website are able to challenge themselves to play against a computer, with the winner being declared when either one reaches a score of 5.

![Website Mock Up](assets/images/readme/website-mock-up.png)

You can find the link to the live website right [here](https://jrdnbrkfld.github.io/pp2-rock-paper-scissors/).


***

## User Experience Design

### User Stories
#### First Time Visitor Goals
* As a First Time user, I want to easily understand the main purpose of the site.
* As a First Time user, I want a simple but effective way of making my choices while playing the game.
* As a First Time user, I want to clearly see how my choices are affecting the game for good or bad.
* As a First Time user, I want to see the scores of the game to understand which user is winning or losing.
* As a First Time user, I want to find ways to follow the creator of the site on multiple social media platforms to keep up to date with what they have created.
#### Returning Visitor Goals
* As a Returning user, I want to be able to return to see if I can beat the computer again or for the first time.


## Design
#### Imagery
The images you are greeted to when entering the website are relating to the objective of the game. The sizes of the images vary depending on the size of the screen they are viewed on.
#### Fonts
The font used throughout the website is **Space Grotesk**. I used only 1 font for the site, but used text-transform to make all text uppercase. I also added a background shadow to the text to give it a bit more style.
#### Color Scheme
Four colors are used in this website, these being #000000, #D4C900, #450089 and #C10606. I incorporated a background gradient to mix the Milano Red and Pigment Indigo to make the site more appealing. The background and foreground colors have a sufficient contrast ratio to aid with accessibility.
![Color Pallete](assets/images/readme/color-pallete.png)

*** 

## Features

### Existing Features
* #### Splash Screen
    * This section is the first thing the user is greeted with when opening the website. 
    * It clearly states the main objective of the game, the rules to follow and a supporting message.
    * The purpose of this is to fulfill the user story:
    > As a First Time user, I want to easily understand the main purpose of the site.

    ![Splash Screen](assets/images/readme/splash-screen.png)

* #### Choice Area
    * This section includes a block of text encouraging the user to make a choice, and buttons corresponding to either of the 3 choices to make.
    * The buttons in this section are styled in a way that when the user hovers over (on desktop) or clicks the button (on mobile) it will apply a shadow to give a raised look.
    * I also incorporated an idle animation to the buttons that loops every 5 seconds. This gives the buttons a bouncy animation that has a small delay between each of them, so they don't all bounce at once.
    * The purpose of this is to fulfill the user story:
    > As a First Time user, I want a simple but effective way of making my choices while playing the game.

    ![Choice Area](assets/images/readme/choice-area.png)

* #### Chosen Area
    * This section has 2 main blocks of text. These being what the user has chosen, and what the computer has chosen.
    * The computer choice is generated through a JavaScript function I created that generates a random number of 1 (rock), 2 (paper) or 3 (scissors). In this case I chose the option Rock, while the computer choice generated the number 3 resulting in Scissors. Therefore I won the round.
    * The purpose of this is to fulfill the user story:
    > As a First Time user, I want to clearly see how my choices are affecting the game for good or bad.

    ![Chosen Area](assets/images/readme/chosen-area.png)

* #### Score Area
    * This section returns the result after the user and computer have made their choice.
    * I wrote a JavaScript function that increments the score by 1 each time their is a winner. It does nothing when it is a loss, or draw.
    * I changed the font color of the scores to reflect the user score and computer score.
    * The purpose of this is to fulfill the user story:
    > As a First Time user, I want to see the scores of the game to understand which user is winning or losing.

    ![Score Area](assets/images/readme/score-area.png)

* #### Restart Area
    * This section contains the Restart Game button, which the user can press when either the user or the computer has reached a score of 5 before their opponent.
    * When a score of 5 is reached an alert appears letting the user know who has won, while also informing them on how to try again.
    * The purpose of this is to fulfill the user story:
    > As a Returning user, I want to be able to return to see if I can beat the computer again or for the first time.
    
    ![Restart Area](assets/images/readme/restart.png)
    ![Alert](assets/images/readme/alert.png)

* #### Social Media Area
    * This section contains the links to my Twitter, LinkedIn and GitHub profiles
    * When clicked they will open in a seperate tab.
    * The purpose of this is to fulfill the user story
    > As a First Time user, I want to find ways to follow the creator of the site on multiple social media platforms to keep up to date with what they have created.

    ![Social Media Links](assets/images/readme/social-media-area.png)

* ### Features Left to Implement
    * I would like to incorporate a form that takes the name of the user and saves it to add a more personalised touch to the experience.
    * I will add a leaderboard eventually that will keep a tally of wins/losses.

*** 

## Technologies

* HTML
    * This project uses HTML as the main language that is used to complete the structure of the website.
* CSS
    * This project uses custom written CSS that I have used to style the website.
* JavaScript
    * This project uses JavaScript code I have personally written to handle certain aspects of the website.
* [Font Awesome](https://fontawesome.com/)
    * Font Awesome icons are used for the rock, paper and scissors icons and the social media links located in the Footer section of the website.
* [Google Fonts](https://fonts.google.com/)
    * Google fonts are used in the project to import the **Space Grotesk** font.
* [Quicktools by Picsart](https://tools.picsart.com/)
    * Quicktools by Picsart is used to generate the image of the color pallete.
* [Am I Responsive?](http://ami.responsivedesign.is/)
    * Am I Responsive is used to generate the website mock up.
* [GitHub](https://github.com/)
    * GitHub is the hosting site I used to store the code for the website.
* [GitPod](https://gitpod.io/)
    * GitPod is the Integrated Development Environment used to develop the website in a browser.
* [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/)
    * The built in developer tools in Google Chrome are used to test CSS styles, inspect page elements and help with debugging problems with the layout of the website.
* [Stack Overflow](https://stackoverflow.com/)
    * Stack Overflow was the primary source for help regarding HTML, CSS and JavaScript issues.

***

## Testing

* I tested that the website is responsive, functions well and looks good on all screen sizes using Google Dev Tools and [Responsive Design Checker](https://responsivedesignchecker.com/). 
* I did this by incorporating a varitety of media queries to the CSS file, these being: 
    * Large devices 2560px and up.
    * Medium devices 1440px and up.
    * Small devices 768px and up.
    * Extra small devices 321px and up.

## Validator Testing

validator tests

## Issues and Resolutions

list bugs and what was done to fix

***

## Deployment

* This website was deployed using GitHub pages. The steps to deploy are as follows:
    * In the GitHub repository, navigate to the settings tab.
    * From the source section drop-down menu, select the Main Branch.
    * After the main branch has been selected, the page provided the link to the completed website.

***

## Credits

mention all who helped