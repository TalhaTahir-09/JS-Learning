let a = prompt("Enter value of A here", "Your name...");
let write = confirm("Do you want to write a on the page")
if(write){
    document.write(a);
}else{
    document.write("Please allow me to write this")
}