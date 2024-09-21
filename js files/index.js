//collecting data from html
const showLinks = document.getElementById("hover-links")
const hoverLinks = document.querySelector(".hover-links")
const navLinks = document.querySelector(".nav-links")
const hambuger = document.querySelector(".humbeger")
const openMenu = document.querySelector(".open-btn")
const closeMenu = document.querySelector(".close-btn")



openMenu.addEventListener("click",()=>{
    navLinks.style.display = "block"
    openMenu.style.display = "none"
    closeMenu.style.display = "block"

})
closeMenu.addEventListener("click",()=>{
    navLinks.style.display = "none"
    openMenu.style.display = "block"
    closeMenu.style.display = "none"
})