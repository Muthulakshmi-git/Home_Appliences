var sidenavbar = document.getElementById("sidenavbar");
var openbtn = document.getElementById("openbtn");
var closebtn = document.getElementById("closebtn");

openbtn.addEventListener("click",()=>
{
    sidenavbar.style.left = "0"
})

closebtn.addEventListener("click",()=>
{
    sidenavbar.style.left = "-50%"
})