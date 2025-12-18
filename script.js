window.addEventListener("load",()=>{
    window.scrollTo(0, 0);
})
const nav = document.querySelector("nav");
window.addEventListener("scroll", ()=>{
    let currentScroll = window.scrollY;

    if(currentScroll > 3){
        nav.style.opacity = "1";
        nav.style.position = "fixed";
        nav.style.backdropFilter = "blur(10px)";
        nav.style.zIndex = "100"
    }
    else {
        nav.style.position = "sticky";
    }
});
const logo = document.querySelector(".logo");
logo.addEventListener("click", (e)=>{
    e.preventDefault()
    location.reload();
});