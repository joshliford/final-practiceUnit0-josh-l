// Twin Baby Application
const input = require('readline-sync');

let taskList = [];

function logBottleActivity(amount, time) {
    let measurement;
    if (amount < 0) {
        throw new Error("Please enter a valid amount.");
    } else if (amount === 1) {
        measurement = "ounce";
    } else {
        measurement = "ounces";
    }

    let bottleFeedingActivity = `${babyName} had ${amount} ${measurement} to eat via bottle at ${time}.`;
    console.log(bottleFeedingActivity);

    taskList.push(bottleFeedingActivity);

    return bottleFeedingActivity;
}

function logBreastActivity(side, amountOfTime, time) {
    let timeUnit;
    if (amountOfTime < 0) {
        throw new Error("Please enter a valid amount of time.");
    } else if (amountOfTime === 1) {
        timeUnit = "minute";
    } else {
        timeUnit = "minutes";
    }

    let breastFeedingActivity = `${babyName} spent ${amountOfTime} ${timeUnit} feeding on the ${side} breast at ${time}.`;
    console.log(breastFeedingActivity);

    taskList.push(breastFeedingActivity);

    return breastFeedingActivity;
}

function checkFeedStatus(hoursAgo) {
    if (hoursAgo < 0) {
        throw new Error("Please enter a valid number (in hours).");
    } else if (hoursAgo > 3) {
        console.log(`${babyName} may be ready for another feed. Their last feed was ${hoursAgo} hours ago.`);
    } else {
        console.log(`${babyName} is doing well with feeds.`);
    }
}

function displayTodaysTasks(taskList) {
    console.log("Today's Tasks:");
    if (taskList.length === 0) {
        console.log("No Tasks Logged Today.");
    } else {
        for (let i = 0; i < taskList.length; i++) {
            console.log((i+1) + ". " + taskList[i]);
        }
    }
}

function formatBabyName(inputName) {
    if (!inputName || typeof inputName !== 'string') {
        throw new Error("Error: Please enter a valid name.");
    }

    let capitalizedName = inputName.charAt(0).toUpperCase() + inputName.slice(1).toLowerCase();
    return capitalizedName;
}

// Main Program
console.log("Welcome to the Baby Tracking App!\nLet's start by getting your baby's name.");

let babyName;
while (!babyName)
        try {
        babyName = input.question("Please enter your baby's name: ");
        babyName = formatBabyName(babyName);
        console.log(`We will be tracking tasks for ${babyName} today.\n`);
    } catch (error) {
        console.log(error.message);
    }

while (true) {
    let action = input.question("Please choose an action (enter the respective number):\n1. Log a Feed\n2. Check Feed Status\n3. Check Today's Tasks\n4. Exit Program\n");
    
    if (action === "4") {
        console.log("Thank you! Goodbye!");
        break;

    } else if (action === "1") {
        try {
            let feedType = input.question("Was baby fed via 'breast' or 'bottle'? ");
            if (feedType.toLowerCase() === "breast") {
                let breastSide = input.question(`Which breast was used to feed ${babyName}? (left or right): `).toLowerCase();
                let feedLength = Number(input.question(`How long did ${babyName} feed on the ${breastSide} breast? (in minutes): `));
                let time = input.question("What time was the feed? (Please enter in HH:MM am/pm format) ");

                logBreastActivity(breastSide, feedLength, time);

            } else if (feedType.toLowerCase() === "bottle") {
                let amount = Number(input.question(`How many ounces did ${babyName} eat? `));
                let time = input.question("What time was the feed? (Please enter in HH:MM am/pm format) ");

                logBottleActivity(amount, time);

            } else {
                console.log("Please enter 'breast' or 'bottle'.");
            }

            } catch (error) {
                console.log(error.message);
            }
   
    } else if (action === "2") {
        try {
            let hoursSinceLastFeed = Number(input.question(`How many hours ago did ${babyName} eat? `));

            checkFeedStatus(hoursSinceLastFeed);

        } catch (error) {
            console.log(error.message);
        }

    } else if (action === "3") {
        displayTodaysTasks(taskList);

    } else {
        console.log("Invalid action:\n1. Log a Feed\n2. Check Feed Status\n3. Check Today's Tasks\n4. Exit Program\n");
    }
}


// *----------------------------------------------------------------------------------------------------------------------------*

// Original Code:


/* Values, Data Types, Operations skills:
- Declaring variables for certain tasks/items
- Helps store and track different types of data
*/

// let feedingMethod = "bottle"; // one possible feeding method - could convert this to an array to store multiple feeding methods
// let feedingAmount = 6; // 6 ounces for feeding amount
// let time = "10:00am"; // creates a timestamp for a specific task
// let wetDiaper = true; // indicates the baby had a wet diaper

/* Stringing Characters Together:
- Enhances readability for the user by logging text
- Can string together multiple variables to create a sentence or statement
*/

// let activity = "Baby had a " + feedingAmount + "oz. " + feedingMethod + " at " + time; // concatenates multiple variables and strings to create a sentence

// console.log(activity); // logs activity to the console for the user to view

/* Control Structures and Logic:
- Can create "checks" or "reminders" for specific tasks
- Helps keep the user organized and on track for specific needs
*/

// let lastFeed = 4; // sets the lastFeed to be 4 (hours ago)
// if (lastFeed > 3) { // if the lastFeed has been longer than 3 (hours)
//     console.log("Looks like the baby may be ready for another bottle. Their last feed was " + lastFeed + " hours ago."); // this statement is logged to the console as a reminder
// } else {
//     console.log("Baby is doing well with feeds."); // if the baby has been fed less than 3 hours ago then print this to the console
// }

// let wetDiaper = true; // indicates the baby had a wet diaper

/* Working with Loops:
- Loops can be helpful to iterate through an array of tasks or activities for either a specific item or as a summary of tasks
*/

// let tasks = ["8:00am feed", "9:00am diaper change", "11:30am feed", "12:00pm nap"]; // stores tasks that were performed throughout the day
// for (let i = 0; i < tasks.length; i++ ) { // loops through each item in the array and stores it in 'i'
//     console.log(tasks[i]); // logs the tasks to the console for the user to see
// }

/* Building Arrays:
- Helps store multiple items of the same or related types
- Useful for large amounts of related data
*/

// let feedingTypes = ["bottle", "breast"]; // this array stores the different feeding methods for the baby
// let babyMood = ["happy", "fussy", "angry"]; // this array stores different moods the baby may be experiencing - can help keep track of babies mood throughout the day or a longer period of time

// console.log("Babies feeding methods: ", feedingTypes); // log the feeding methods to the console

/* Using Arrays:
- Allows manipulation of data within the arrays that were built in the previous section
- Can access specific tasks/items within a specified array
*/

// let todaysTasks = tasks.length; // calculate the total tasks for the day
// let moodToday = babyMood.push("sleepy"); // adds 'sleepy' to be the most recent mood (new last item in the array) for the baby
// moodToday = babyMood[babyMood.length - 1]; // access the last item added to the babyMood array - which was 'sleepy'

// console.log("Total tasks for the day: ", todaysTasks); // log the total tasks for the day to the user
// console.log("The babies mood now is: ", moodToday); // log the babies mood at this time to the user

// ***************************************************************************************************************************

// // Twin Baby Application

// const input = require('readline-sync');

// let taskList = [];

// function logFeedingActivity(amount, method, time, taskList) {
//     if (!amount || amount < 0) {
//         throw new Error("Invalid input for amount.");
//     }

//     let feedingActivity = `Baby had ${amount} ounces to eat via ${method} at ${time}.`;
//     console.log(feedingActivity);

//     taskList.push(feedingActivity);

//     return feedingActivity;
// }

// function checkFeedStatus(hoursAgo) {
//     if (hoursAgo > 3) {
//         console.log(`Baby may be ready for another feed. Their last feed was ${hoursAgo} hours ago.`);
//     } else {
//         console.log("Baby is doing well with feeds.");
//     }
// }

// function displayTodaysTasks(taskList) {
//     console.log("Today's Tasks:");
//     for (let i = 0; i < taskList.length; i++) {
//         console.log((i+1) + ". " + taskList[i]);
//     }
// }

// // let feedingMethod = "bottle";
// // let feedingAmount = 6;
// // let time = "10:00am"; 

// // let taskList = ["6:30am Diaper Change", "7:00am Feed", "9:00am Nap", "12:00pm Feed"];

// console.log("Welcome to the Baby Tracking App!");
// while (true) {
//     let action = input.question("Choose an action: 'log' a feed, 'check' feed status, 'display' daily tasks, or 'exit' the program: ").toLowerCase();

//     if (action === "exit") {
//         console.log("Thank you! Goodbye!");
//         break;

//     } else if (action === "log") {
//         let amount = Number(input.question("How much did baby eat (in ounces)?: "));
//         let method = input.question("What method was used to feed baby? ('breast'? 'bottle'?): ");
//         let time = input.question("What time was the feed? (Please enter as HH:MMam/pm format): ");

//         try {
//             logFeedingActivity(amount, method, time, taskList);
//         } catch (error) {
//             console.error("Invalid input for amount. Enter a positive number.");
//         }

//     } else if (action === "check") {
//         let lastFeed = Number(input.question("How many hours ago was babies last feed?: "));
//         checkFeedStatus(lastFeed);

//     } else if (action === "display") {
//         displayTodaysTasks(taskList);
//     }
// }
