function hamburg(){
    const navbar=document.querySelector(".dropdown")
    navbar.style.transform="translateY(0px)"
}
function cancel(){
    const navbar=document.querySelector(".dropdown")
    navbar.style.transform="translateY(-500px)"
}
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text1", {
        strings: ["Web Developer", "Freelancer", "Designer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});