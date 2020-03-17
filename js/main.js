'use strict';

// const header = document.getElementById("main-heading");
// const aside = document.getElementById("aside");


// header.innerHTML = "<h2> This is another heading </h2>";
// header.classList.add('text-right');

// // const heading = document.getElementsByTagName("h2");

// //remove:
// aside.classList.remove('bg-warning');

// // Change the text allignement for each aside heading:
// const aside_headings = document.getElementsByClassName("aside-text");

// aside_headings.forEach(element => {
//     element.classList.add("text-right");
// });

const pSection = document.getElementById("pSection");
const p = document.getElementById("paragraph");
const redBtn = document.getElementById("redBtn");
const blueBtn = document.getElementById("blueBtn");
const changeBtn = document.getElementById("changeBtn");


redBtn.addEventListener("click", function() {
    p.classList.remove('text-primary');
    p.classList.add('red-text');
    // alert('Adding red text');
});

blueBtn.addEventListener("click", function() {
    p.classList.remove('red-text');
    p.classList.add('text-primary');
    // alert('Adding red text');
});

// Change the content of the paragraph 
changeBtn.addEventListener("click", function() {
    // pSection.innerHTML = "<p>This is the changed text</p>";
    p.textContent = "This is the changed text";
});


// Add a new element:
let newArticle = document.createElement('article');
let newHeading = document.createElement('h2');
let newParagraph = document.createElement('p');

// Create content:
newHeading.textContent = 'Article 001';
newParagraph.textContent = 'lorum';

// Stitch them together:
newArticle.appendChild(newHeading);
newArticle.appendChild(newParagraph);

// Add some styling:
newArticle.classList.add('bg-light', 'p-4', 'border');

// Add atributes like id, etc
newArticle.setAttribute('id', 'article001');

// Add newArticle to page:
// const newSection = document.getElementById("newSection");
const main = document.querySelector('main');
main.appendChild(newArticle);