
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

sections.forEach(section => {
    section.addEventListener("mouseenter", function () {
        const id = this.getAttribute("id");
        const navActive = document.querySelector("a[href= '#" + id + "']"); 
        console.log(navActive);
        navLinks.forEach(link => link.classList.remove("active"));
        navActive.classList.add("active");
    })
})




