# [Cricket Scores](https://emperorarthurix.github.io/CricketScores/)

A simple, mobile and PC optimised website which allows the user to simulate an cricket match between 2 IPL teams - Mumbai Indians and Kolkata Knight Riders


## Inspiration

JavaScript is essential to web development in the modern world, and to emphasize upon both its importance and utility, I decided to develop a script on my own to manipulate webpage content based on user input and interactions


## What it does

### The webpage displays the following on loading:

- A **Cricket Ground** with a **Pitch**
- Names of the competing teams on the pitch
- **Status** of the match
- **Scores** of both teams, initially zero each
- A series of **buttons**, marked by common cricket terms like *run counts*, *wicket* or *dot ball*
- On either side of the pitch, on *wider screens*, are displayed the **team crest** and a picture of the **team captain**
- Team crests and captains' images are **linked** to respective websites to visit for more information

### Flow of the simulation
The match simluation begins once the user clicks the **Begin** button

> Before clicking this button, no score changes or wickets will be registered even if clicked by the user

First Innings of **24 balls** begins. User can choose to simulate any score for the first team during this innings by clicking any of the given buttons.

> Ball count is displayed, and reduces by 1 ball on each button click resulting in a performance update during the innings

Once the first innings is over, **or** all wickets of the first team have fallen, the innings changes over to the second team batting, and the user can simulate their performance as well in a similar manner

### Winning Cases

**CASE 1** - One team wins the match
- By scoring more than the second team by the end of the game
- If the second team runs out of wickets before completing the target score

**Changes**
1. Winning team name displayed on pitch in Green
2. Losing team name displayed on pitch in Red
3. On wider screens, team crest and team captain of losing team fade away

**CASE 2** - The match is tied

**Changes**
1. Both team names are displayed on pitch in Yellow
2. On wider screens, team crest and team captain of both teams fade away

## How I built it

- The website has been **built from scratch**
- No frameworks or modules have been implemented, and all work has been done with the help of **fundamental HTML5**, **CSS3**, and **JavaScript**
- The **main focus** of the project was **to understand the significance** of each of the three tools in web development, thus understanding the features of pure and unaltered forms of the three was considered essential during development

## Tech and Tools used

<a href="https://developer.mozilla.org/en-US/docs/Web/"><img src="https://upload.wikimedia.org/wikipedia/commons/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg" height=75 style="padding: 2.5% 2.5%"></a>
<a href="https://code.visualstudio.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" height=75 style="padding: 2.5% 2.5%"></a>


## Challenges I ran into

- Implementing a website form scratch, without templates or frameworks, requires **meticulous planning**. This was the first challenge, which was overcome by brainstorming the design and structure of the website before beginning development
- JavaScript is `asynchronous` and this behaviour posed a great issue while writing code. After a couple of hours understanding errors and debugging, the asynchronicity issue was **resolved by using functions**, called using event listeners, to carry out tasks


## What I learned

- HTML
    - Using semantic markup
    - Best practices for structuring a page
    - Efficient use of IDs and Classes
- CSS
    - Appropriate use of display and layout attributes
    - Controlling content placement for various screen sizes using flexible values
    - Using media queries to maintain responsiveness
    - Using transitions to beautify content and animations
    - Referencing child elements and applying specific properties to them
- JavaScript
    - Using DOM to manipulate content on screen
    - Asynchronicity and its implications
    - Event Listeners
    - The `this` property

> Made with love by Ishaan Sunita Pandita