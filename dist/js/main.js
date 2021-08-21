"use strict";
var loveMe = document.querySelector('.loveMe');
var times = document.querySelector('#times');
var clickTime = 0;
var timesClicked = 0;
var createHeart = function (e) {
    var heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    var x = e.clientX;
    var y = e.clientY;
    var leftOffset = e.target.offsetLeft;
    var topOffset = e.target.offsetTop;
    var xInside = x - leftOffset;
    var yInside = y - topOffset;
    heart.style.top = yInside + "px";
    heart.style.left = xInside + "px";
    loveMe.appendChild(heart);
    var likes = ++timesClicked;
    times.innerHTML = likes.toString();
    setTimeout(function () { return heart.remove(); }, 1000);
};
loveMe.addEventListener('click', function (e) {
    if (clickTime === 0) {
        clickTime = new Date().getTime();
    }
    else if (new Date().getTime() - clickTime < 800) {
        createHeart(e);
        clickTime = 0;
    }
    else {
        clickTime = new Date().getTime();
    }
});
