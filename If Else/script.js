let choice = 2;

if (choice == 1) {
    console.log("you chose 1");
} else if (choice == 2) {
    console.log("you chose 2");
} else {
    console.log("you chose 3");
}

let age = 65;

if (age >= 18) {
    console.log("You are an adult");

    if (age >= 60) {
        console.log("And you are also elderly");
    } else {
        console.log("And you are not elderly");
    }
} else {
    console.log("You are a minor");
}

let x = 1;
if (x == 1 || x == 2) {
    console.log("You typed 1 or 2");
}

let y = 7;
if (y >= 1 && y <= 10) {
    console.log("You typed 7");
}

let z = 5;
if (!(z != 5)) {
    console.log("Correct, you typed 5");
}

let n = 2;
if ([1, 2, 3].includes(n)) {
    console.log("You chose 2");
}

let n2 = 8;
if (![1, 2, 3].includes(n2)) {
    console.log("The number 8 is allowed");
}

let ageInline = 20;
let message = ageInline >= 18 ? "adult" : "minor";
console.log(message); // adult
