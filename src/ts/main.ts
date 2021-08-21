const loveMe = document.querySelector('.loveMe') as HTMLDivElement;
const times = document.querySelector('#times') as HTMLDivElement;

let clickTime = 0;
let timesClicked = 0;

const createHeart = (e: MouseEvent) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = (e.target as HTMLDivElement).offsetLeft;
  const topOffset = (e.target as HTMLDivElement).offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  const likes = ++timesClicked;

  times.innerHTML = likes.toString();

  setTimeout(() => heart.remove(), 1000);
};

loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else if (new Date().getTime() - clickTime < 800) {
    createHeart(e);
    clickTime = 0;
  } else {
    clickTime = new Date().getTime();
  }
});
