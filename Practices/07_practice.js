let ul = document.getElementById("ul");
let container = document.getElementById("container")
let lis = document.querySelectorAll("li");
console.log(lis)
lis.forEach(li => {
    li.style.background = "hotpink";
});
ul.firstElementChild.style.color = "red";
container.firstElementChild.style.color="blue";
