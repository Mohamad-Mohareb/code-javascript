// Navbar Hamburger
const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");

ham.addEventListener("click", ()=> {
    ham.classList.toggle("active");
    nav.classList.toggle("active");
});


// Color Changer
const body = document.querySelector("body");
const modeToggle = document.querySelector(".dark-light");

modeToggle.addEventListener("click", ()=> {
    body.classList.toggle("dark");
    modeToggle.classList.toggle("active");
});


// Scroll 
const goTop = document.querySelector(".go-top");

window.addEventListener("scroll", ()=> {
    if (document.documentElement.scrollTop > 20) {
        goTop.classList.add("active");
    }
    else {
        goTop.classList.remove("active");
    }
});


// Navbar Active-Link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset 

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.navbar a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else {
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

