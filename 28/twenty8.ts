//Q:28
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// // alien is green
 let alienColor: string = 'green'
if (alienColor === 'green') {
    console.log("(VERSION:1)player just earned 5 points!");
}
else if (alienColor === 'yellow') {
    console.log("player just earned 10 points");
}
else if(alienColor === 'red') {
    console.log("player just earned 15 points!");
}

//VERSION 2  alien is yellow
let alienColor2: string = 'yellow'
if (alienColor2 === 'green') {
    console.log("player just earned 5 points!");
}
else if (alienColor2 === 'yellow') {
    console.log("(VERSION:2)player just earned 10 points");
}
else if(alienColor2 === 'red') {
    console.log("player just earned 15 points!");
}

// VERSION:3 alien is red
let alienColor3= 'red';
if (alienColor3 === 'green') {
    console.log("player just earned 5 points!");
}
else if (alienColo3r === 'yellow') {
    console.log("player just earned 10 points");
}
else if (alienColor3 === 'red') {
    console.log("(VERSION:3)player just earned 15 points!");
}