let a = 10;
let b = 3;

console.log((a > 0) && (b > 0)); // true
console.log((a > 0) || (b > 0)); // true
console.log(!(a > 0)); // false

const person1 = {
    name: "João",
    coins: 100
};
const person2 = {
    name: "André",
    coins: 0
};

console.log(
    "does ${person1.name} have any coins ?: ",
    person1.coins
    ? "yes, ${person1.name} have ${person1.coins} coins"
    : "no, ${person1.name} have no coins"
    );
    // does João have any coins ?: yes, João have 100 coins
    
console.log(
    "does ${person2.name} have any coins ?: ",
    person2.coins
    ? "yes, ${person2.name} have ${person2.coins} coins"
    : "no, ${person2.name} have no coins"
    );
    // does André have any coins ?: no, André have no coins