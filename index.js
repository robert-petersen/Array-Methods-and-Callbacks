import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final */

let finals2014 = fifaData.filter(function(array){
    return array.Year === 2014 && array.Stage === "Final";
});
// console.log(finals2014);
// console.log(finals2014[0]["Home Team Name"]);


// (b) Away Team name for 2014 world cup final*/

// console.log(finals2014[0]["Away Team Name"]);

// (c) Home Team goals for 2014 world cup final

// console.log(finals2014[0]["Home Team Goals"]);

// (d) Away Team goals for 2014 world cup final

// console.log(finals2014[0]["Away Team Goals"]);

// (e) Winner of 2014 world cup final */

// console.log(finals2014[0]["Home Team Name"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    let finalsGames = data.filter((data)=>{
        return data.Stage === "Final";
    });
    return finalsGames;
};
console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals, data) {
    let finalsGames = getFinals(data);
    let years = finalsGames.map((data)=>{
        return data.Year;
    });
    return years;
};
// getYears(getFinals, fifaData);
// console.log(getYears(getFinals, fifaData));


/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals, data) {
    let finalsGames = getFinals(data);
    let winners = finalsGames.forEach((data)=>{
        if(data["Home Team Goals"] > data["Away Team Goals"]){
            return data["Home Team Name"];
        }
        else if(data["Home Team Goals"] < data["Away Team Goals"]){
            return data["Away Team Name"];
        }
        else{
            return "Had a win Condition";
        }
    })
    return winners;
};
// getWinners(getFinals, fifaData);
console.log(getWinners(getFinals, fifaData));


/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears, data) {
    let finalsWinners = getWinners(data);
    let finalsYears = getYears(data);
    let yearWinner = [];
    let year;
    let winner;
    for(let i in finalsYears){
        year = finalsYears[i];
        winner = finalsWinner[i];
        yearWinner.push(`In ${year}, ${winner} won the world cup!`);
    }
    return yearWinner;
};
// // getWinnersByYear(getWinners, getYears, fifaData);
console.log(getWinnersByYear(getWinners, getYears, fifaData));


/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeTeamGoals = data.reduce((counter, data)=>{
        return counter += data["Home Team Goals"];
    },0);
    let awayTeamGoals = data.reduce((counter, data)=>{
        return counter += data["Away Team Goals"];
    },0);
    let totalGames = data.length;
    let homeAverage = homeTeamGoals / totalGames;
    let awayAverage = awayTeamGoals / totalGames;
    return {"Average Home Score":homeAverage, "Average Away Score": awayAverage};
};
// getAverageGoals(fifaData);
// console.log(getAverageGoals(fifaData));



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
