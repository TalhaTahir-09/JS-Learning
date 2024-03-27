let num = [1, 2, 5, 4, 8];
// for(let i = 0; i < num.length; i++){
//     console.log(num[i]);
// }

// For Each loop
num.forEach((element) => {
    console.log(element*element);
})

// Array from (creates a array from any other object)

let name = "Harry";
let arr = Array.from(name);
console.log(arr);

// For of

for( let i of num){
    console.log(i);
}

// For in (returns index or key)
for(let i in num){
    console.log(i);
}