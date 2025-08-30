// Twin Baby Application

function logFeedingActivity(method, amount, time) {
    let feedingActivity = `Baby had ${amount} ounces to eat via ${method} at ${time}.`;
    console.log(feedingActivity);
    return feedingActivity;
}

function checkFeedStatus(hoursAgo) {
    if (hoursAgo > 3) {
        console.log(`Baby may be ready for another feed. Their last feed was ${hoursAgo} hours ago.`);
    } else {
        console.log("Baby is doing well with feeds.");
    }
}

function displayTodaysTasks(taskList) {
    console.log("Today's Tasks:");
    for (let i = 0; i < taskList.length; i++) {
        console.log((i+1) + ". " + taskList[i]);
    }
}

let feedingMethod = "bottle";
let feedingAmount = 6;
let time = "10:00am"; 

let taskList = ["6:30am Diaper Change", "7:00am Feed", "9:00am Nap", "12:00pm Feed"];

// hard-coded data
logFeedingActivity(feedingMethod, feedingAmount, time);

// new data
logFeedingActivity("breast", 3, "6:30am");

checkFeedStatus(4);

displayTodaysTasks(taskList);


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