let togleBtn = document.querySelector(".toggleBtn")
let container = document.querySelector(".container")

togleBtn.onclick=function(){
    container.classList.toggle("active")
}