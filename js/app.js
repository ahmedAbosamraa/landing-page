//golbal variables

const allSections = document.querySelectorAll("section");
console.log(allSections);
const fragment = document.createDocumentFragment();
let activeSec = document.querySelector('your-active-class');
const menu_item = document.getElementsByClassName('menu__link');


// function for render navbar and make section active
for (let oneSection of allSections) {
    console.log(oneSection);
    let li = document.createElement('li');
    let navLink = document.createElement('A');
    navLink.href = `${oneSection.id}`;
    navLink.id = `section-${oneSection.id}-selector`;
    navLink.textContent = oneSection.dataset.nav;
    navLink.classList.add("menu__link");
    navLink.addEventListener("click", e => {
        e.preventDefault();
        oneSection.scrollIntoView({ behavior: "smooth" });
        if (activeSec) {
            section.classList.remove('your-active-class')
        }
        oneSection.classList.add("your-active-class")
        console.log(oneSection);
    })
    li.appendChild(navLink)
    fragment.appendChild(li)
    oneSection.addEventListener("click", function () {

        this.classList.toggle('active');
    });
}
document.querySelector("#navbar__list").appendChild(fragment);

// highlight function on scroll
function active(section) {
    const activeElement = section.getBoundingClientRect();
    return activeElement.top > -50 && activeElement.top <= 300
} function makeActive() {
    for (const section of allSections) {
        console.log(section);
        let link = document.querySelector(`a#section-${section.id}-selector`);
        console.log(link.id);
        if (active(section)) {
            section.classList.add("your-active-class");
            link.classList.add("active");
        } else {
            section.classList.remove("your-active-class");
            link.classList.remove("active");
        }
    }
}
window.addEventListener("scroll", makeActive);