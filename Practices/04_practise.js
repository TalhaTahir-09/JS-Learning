// Start and end

const day = "Saturday";

console.log(day.startsWith("Sat"))
console.log(day.startsWith("tur", 2))

const date= "Today is march 23 2024";
console.log(date.endsWith("2024"))
console.log(date.endsWith("23", 17))

let name = "Talha is a good boy"
console.log(name.toUpperCase())

let extract = "Please Give me RS 1000";
console.log(extract.slice(18))

let change= "The 4th value"
console.log(change.replace("4th", "5th"));

let count= 24;
let a = 15;
for(let i = 0; i<16; i++){
    if(a<count){
        a++
    }
    else{
        a = a;
    }
}
console.log(a)
