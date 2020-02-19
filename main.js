const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */


for (i=0; i<=4; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic'+(i+1)+'.jpg');
    thumbBar.appendChild(newImage);
    newImage.onclick = function(e) {
        displayedImage.setAttribute('src', newImage.getAttribute('src')); 
    }
};

/* Wiring up the Darken/Lighten button */

displayedImage.setAttribute('backgroundColor', 'rgba(0,0,0,0.5)'); 
btn.onclick = function(e) {
    if ('dark' === btn.getAttribute('class')) {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
}