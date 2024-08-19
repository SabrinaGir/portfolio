'use strict';

const buttons = document.querySelectorAll("li");
const homeButton = document.querySelector("#home-logo");


buttons.forEach(button => {
    button.addEventListener('click', showInfo)
})

homeButton.addEventListener('click', hideInfo)





function showInfo(event) {
    const clickedButton = (event.target).textContent.trim();
    const info = document.querySelector("#info");

    info.style.visibility = 'visible';
    info.style.opacity = '1';

    if (clickedButton === "about") {
       showAboutPage();
    }
    else if (clickedButton === "projects") {
        showProjectsPage();
    }
    else if (clickedButton === "contact") {
        showContactPage();
    }
    else {
        console.log("Unknown button clicked")
    }



}

function hideInfo() {
    info.style.opacity = '0';
}


function showAboutPage() {
    console.log("about");
}

function showProjectsPage() {
    console.log("project")
}

function showContactPage() {
    console.log("contact")
}