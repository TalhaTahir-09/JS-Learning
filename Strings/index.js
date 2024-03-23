/* let name= "Talha";
let friend= 'Umer';
// console.log(name.length);
console.log(name[1]);

console.log(friend);


// Template literals

let sentence = `${name} is a friend of ${friend} `
// let sentence = `"Talha" is a friend of 'Umer'`
console.log(sentence)
// Escape Characters

let fruit = 'Bana\'na' // add single inverted comma
let xq = "He said \"Hello World!\"" // add double inverted comma
let xs = "He said \n \"Hello World\"" // Next line
let xt = "He said \t \"Hello World\"" // Tabbed
let xp = "He said \\ \"Hello World\"" // Backslash
let xu = "He said \r \"Hello World\"" // Only show data inside the \\
console.log(xu);

*/

// String methods

let name = "Talha";
/*
console.log(name.toUpperCase());
console.log(name.slice(2,3));
console.log(name.slice(2));
console.log(name.toLowerCase()); // This a function because we need to add () to envoke it (toLowerCase())
// console.log(name.length); // This a property (length)

*/
let greeting= "Hey There";
/*console.log(greeting.replace("There", "You"));
console.log(name.replace("Tal", "Um"));
console.log(name.concat(" is a friend of ", greeting));

*/
let spaces= "      Talha        "
console.log(spaces.trim());

for(let i = 0; i<5; i++){
    console.log(name[i])
}