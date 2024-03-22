// for ( let i=0; i<=20; i++){
//     if( i == 7 ){
//         break;
//     }
//     else{
//         console.log("Hello World", "This is iteration number " + i);
//     }
// }

let sum =0;
let n= prompt("Enter a numerical value:")

n= Number.parseInt(n);
for (let a=0; a<n; a++){
    sum = sum+(a+1);
}

console.log(sum);

// 0 = 0+(0+1)=1, sum = 1 now and a is 1 too
// 1<4 = 1+(1+1)= 3, sum is 3 now and a is 2
// 2<4= 3+(2+1) = 6, sum = 6 and a 3
// 3<4= 6(3+1)= 10, sum = 10 and a = 4

// For in loops

// let obj = {
//   Talha: 96,
//   Umer: 100,
//   Ayyan: 0,
// };
// for (let a in obj) {
//   let marks = obj[a];
//   console.log("Student : " + a + "Marks : "+ marks);
// }


// let meow= ["Talha", "Umer"]
// for(let b of meow){
//   console.log(b);
// }

// While Loops

// let n = prompt("Enter The value on N")
// n = Number.parseInt(n);
// let i =1;

// // while(i<=n){
// //   console.log(i)
// //   i++;
// // }
// // Do while loop
// do{
//   console.log(i)
//   i++;
// }while(i<=n);