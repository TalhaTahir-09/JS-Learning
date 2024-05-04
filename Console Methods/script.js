console.log(console)
console.error("Hey this is an error!")
console.assert(5<4)
// console.clear()
let obj = {
    Harry: "name",
    Age: 35
}

console.table(obj)
console.warn("Please stop doing this!")
console.info("This is some info")

console.time("For-in Loop")
for(let x in obj){
    console.log(obj[x]);
}
console.timeEnd("For-in Loop")

console.time("While Loop")
let i = 0;
while(i<5){
    console.log(54)
    i++
}
console.timeEnd("While Loop")
