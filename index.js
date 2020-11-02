import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');

//fifaData.forEach(e => {if (e['Win conditions'] !== '') console.log(e['Win conditions'])});

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

//(a)
fifaData.forEach(e => {if (e['Year'] === 2014) console.log(e['Home Team Name'])});
//(b)
fifaData.forEach(e => {if (e['Year'] === 2014) console.log(e['Away Team Name'])});
//(c)
fifaData.forEach(e => {if (e['Year'] === 2014) console.log(e['Home Team Goals'])});
//(d)
fifaData.forEach(e => {if (e['Year'] === 2014) console.log(e['Away Team Goals'])});
//(e)
function createFunction1() {
    if (['Away Team Goals'] > ['Home Team Goals']){
                return ['Away Team Name']; 
     } if (['Home Team Goals'] > ['Away Team Goals' ]) {
                return ['Home Team Name']; 
      } if (['Home Team Goals'] === ['Away Team Goals']){
                return ['Win conditions']; 
    }
}
let theWinner2014 = createFunction1();
fifaData.forEach(e => {if (e['Year'] === 2014 && e['Stage'] === 'Final') console.log(e[theWinner2014])});


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {   
   let finalsData = data.filter(e => e['Stage'] === 'Final');
   return finalsData;
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    let years = [];
    callback.forEach(  e => {years.push(e['Year'])});
        return years;
}
console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
function createFunction2() {
        if (['Away Team Goals'] > ['Home Team Goals']){
                return ['Away Team Name']; 
         } if (['Home Team Goals'] > ['Away Team Goals' ]) {
                return ['Home Team Name']; }
         } if (['Home Team Goals'] === ['Away Team Goals']) {
                return ['Win conditions']; 
}
let result = createFunction2();
let winners = [];
callback.forEach(e => {winners.push(e[result])});
        return winners;
}
console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinnersFunc, getYearsFunc) {
//     fifaData.forEach(e => console.log(`In ${e[getYearsFunc]}, ${e[getWinnersFunc]} won the world cup!`));
 }

// getWinnersByYear(getWinners(fifaData), getYears(fifaData));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
