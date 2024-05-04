/* console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)

console.log(document.body.childNodes[0]) // == firstChild
console.log(document.body.childNodes[document.body.childNodes.length - 1]) // == last Child

let arr  = Array.from(document.body.childNodes)
console.log(arr)

*/

// console.log(document.body.firstChild);
// let a = document.body.firstChild;

let a = document.body.firstChild.nextSibling;

console.log(a) 
// console.log(a.parentElement) 