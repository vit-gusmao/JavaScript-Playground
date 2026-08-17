function welcome() {
    console.log("Welcome");
}

function caller(message, name) {
    console.log(`${message} ${name}`);
}

function callerNick(nickname) {
    return `Welcome, ${nickname}`;
}

// Example usages:
welcome(); // "Welcome"

caller("Hello", "André"); // Hello André 
caller("Good Morning", "Paulo"); // Good Morning Paulo 
caller("Good Night", "Zoe"); // Good Night Zoe

console.log(callerNick("André")); // Welcome, André