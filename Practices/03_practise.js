const mean =(x,y) =>{
    return x/y;
}
let obj= {
    harry: 86,
    Talha: 100,
    Umer: 54
}
for(let a in obj){
    console.log(a+"'s Marks are = " + obj[a]);
}
console.log(mean(30,6));

/*
let n = prompt("Enter Your value");
n = Number.parseInt(n);

i=0;

while(i>n){
    console.log("Try Again")
}
*/
// let correctNumber= 54;
// let n = prompt("Enter Your numerical value")

// while(n!= correctNumber){
//     n= prompt("Enter The correct numerical value")
// if(n==correctNumber){
//     console.log("Congrats you have entered the correct number!");
// }
// else{
//     console.log("Try again")
// };
// }

let correctNumber = 18;
let i;

while(i!= correctNumber){
    i = prompt("Enter your correct numerical value")
    if(i==correctNumber){
        console.log("Congrats")
    }
    else{
        console.log("Try again");
    }
}