/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active

/*var navbar = document.getElementById('navbar__list');
navbar.innerHTML = `
<li><a href="#section1" class="menu__link">Section 1</a></li>
<li><a href="#section2" class="menu__link">Section 2</a></li>
<li><a href="#section3" class="menu__link">Section 3</a></li>
<li><a href="#section4" class="menu__link">Section 4</a></li>
<li><a href="#section5" class="menu__link">Section 5</a></li>
`;
*/


const allSections = document.querySelectorAll("section");
console.log(allSections);
const fragment = document.createDocumentFragment();
let activeSec = document.querySelector('your-active-class');

for (let oneSection of allSections) {
    console.log(oneSection);
    let li = document.createElement('li');
    let navLink = document.createElement('A');
    navLink.href = `${oneSection.id}`;
    navLink.textContent = oneSection.dataset.nav;
    navLink.classList.add("menu__link");
    navLink.addEventListener("click", e => {
        e.preventDefault();
        oneSection.scrollIntoView({ behavior: "smooth" });
        if (activeSec) {
        }
        oneSection.classList.add("your-active-class")
        console.log(oneSection);
    })
    li.appendChild(navLink)
    fragment.appendChild(li)

}
document.querySelector("#navbar__list").appendChild(fragment);

const menu_item = document.getElementsByClassName('menu__link');

for (var i = 0; i < menu_item.length; i++) {
    menu_item[i].addEventListener("click", function () {
        var not_selected = document.querySelector('.menu__link.active');
        if (not_selected) {
            not_selected.classList.remove('active');
        }
        this.classList.add('active');
    });
}
/*
let navItems = document.querySelectorAll("li");
console.log(navItems);
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
};

function observerCallback(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // get the nav item corresponding to the id of the section
            // that is currently in view
            const navItem = navItems[entry.target.id];
            // add 'active' class on the navItem
            navItem.classList.add('active');
            // remove 'active' class from any navItem that is not
            // same as 'navItem' defined above
            Object.values(navItems).forEach((item) => {
                if (item != navItem) {
                    item.classList.remove('active');
                }
            });
        }
    });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((sec) => observer.observe(sec));
*/
console.log(allSections);
function active(section) {
    const activeElement = section.getBoundingClientRect();
    return activeElement.top > 0 && activeElement.top <= 300
} function makeActive() {
    for (const section of allSections) {
        console.log(section);
        let links = document.querySelectorAll(`a[href="#${section.id}"]`);
        console.log(links);
        if (active(section)) {
            section.classList.add("your-active-class");
            //link.classList.add("active");
        } else {
            section.classList.remove("your-active-class");
            // link.classList.remove("active");
        }
    }
}
window.addEventListener("scroll", makeActive);
        /*
function toggleActiveClass() {
allSections.forEach(section => {
const link = document.querySelector(`a[href="#${section.id}"]`);
const sectionTop = section.getBoundingClientRect().top;
if (sectionTop >= 0 && sectionTop <= 300) {
section.classList.add("active");
link.classList.add('your-active-class');
}
else {
section.classList.remove("your-active-class");
link.classList.remove('active');

}
})
}
window.addEventListener("scroll", toggleActiveClass);
*/