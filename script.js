
var menu = document.querySelector(".nav__s3")
var sidenav = document.querySelector(".hide")
var close = document.getElementById("p1")
var close2 = document.getElementById("p2")
var welcome = document.querySelector(".welcome")

menu.addEventListener("click",function(){

    sidenav.classList.remove("hidden")

})

close.addEventListener("click",()=>{
    sidenav.classList.add("hidden")
})

close2.addEventListener("click",()=>{
    welcome.classList.add("hidden")
})


var count = document.getElementById("countdown")

setTimeout(() => {
  count.innerText = "Hurry! Limited seats available!"
}, 1000)