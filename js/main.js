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


const p = document.getElementById("paragraph");
const redBtn = document.getElementById("redBtn");
const blueBtn = document.getElementById("blueBtn");


redBtn.addEventListener("click", function() {
    p.classList.remove('text-primary');
    p.classList.add('red-text');
    // alert('Adding red text');
});

blueBtn.addEventListener("click", function() {
    p.classList.remove('red-text')
    p.classList.add('text-primary');
    // alert('Adding red text');
});