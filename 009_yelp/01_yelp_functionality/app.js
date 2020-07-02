//Review obj
const reviews_1 = document.getElementById('reviews-no1');
const reviews_2 = document.getElementById('reviews-no2');
const reviews_3 = document.getElementById('reviews-no3');

//Week obj
const week_1 = document.getElementById('week-no1');
const week_2 = document.getElementById('week-no2');
const week_3 = document.getElementById('week-no3');

//Rating image obj
const img_1 = document.getElementById('rate-1');
const img_2 = document.getElementById('rate-2');
const img_3 = document.getElementById('rate-3');

//Change review values here
const review_no1 = 12;
const review_no2 = 2;
const review_no3 = 30;

//Change week value here
const week_no1 = 12;
const week_no2 = 2;
const week_no3 = 30;

//Cahnge rating here
const rating_1 = 1;
const rating_2 = 2;
const rating_3 = 5;

//Changing the review values
reviews_1.textContent = review_no1;
reviews_2.textContent = review_no2;
reviews_3.textContent = review_no3;

//Changing the week values
week_1.textContent = week_no1;
week_2.textContent = week_no2;
week_3.textContent = week_no3;

//Changing the stars
switch (rating_1) {
  case 0:
    img_1.style.clipPath = 'polygon(0 0, 0 4%, 100% 4%, 99% 0%)';
    break;
  case 1:
    img_1.style.clipPath = 'polygon(0 4%, 0 9%, 100% 9%, 100% 4%)';
    break;
  case 1.5:
    img_1.style.clipPath = 'polygon(0 8%, 0 13%, 100% 13%, 100% 8%)';
    break;
  case 2:
    img_1.style.clipPath = 'polygon(0 13%, 0 17%, 100% 17%, 100% 13%)';
    break;
  case 2.5:
    img_1.style.clipPath = ' polygon(0 17%, 0 21%, 100% 21%, 100% 17%)';
    break;
  case 3:
    img_1.style.clipPath = 'polygon(0 21%, 0 26%, 99% 26%, 97% 21%)';
    break;
  case 3.5:
    img_1.style.clipPath = 'polygon(0 26%, 0 30%, 100% 30%, 100% 26%)';
    break;
  case 4:
    img_1.style.clipPath = 'polygon(0 30%, 0 34%, 100% 34%, 100% 30%)';
    break;
  case 4.5:
    img_1.style.clipPath = 'polygon(0 34%, 0 39%, 100% 39%, 100% 34%)';
    break;
  case 5:
    img_1.style.clipPath = 'polygon(0 39%, 0 43%, 100% 43%, 100% 39%)';
    break;
  default:
    img_1.style.clipPath = 'polygon(0 39%, 0 43%, 100% 43%, 100% 39%)';
}
switch (rating_2) {
  case 0:
    img_2.style.clipPath = 'polygon(0 0, 0 4%, 100% 4%, 99% 0%)';
    break;
  case 1:
    img_2.style.clipPath = 'polygon(0 4%, 0 9%, 100% 9%, 100% 4%)';
    break;
  case 1.5:
    img_2.style.clipPath = 'polygon(0 8%, 0 13%, 100% 13%, 100% 8%)';
    break;
  case 2:
    img_2.style.clipPath = 'polygon(0 13%, 0 17%, 100% 17%, 100% 13%)';
    break;
  case 2.5:
    img_2.style.clipPath = ' polygon(0 17%, 0 21%, 100% 21%, 100% 17%)';
    break;
  case 3:
    img_2.style.clipPath = 'polygon(0 21%, 0 26%, 99% 26%, 97% 21%)';
    break;
  case 3.5:
    img_2.style.clipPath = 'polygon(0 26%, 0 30%, 100% 30%, 100% 26%)';
    break;
  case 4:
    img_2.style.clipPath = 'polygon(0 30%, 0 34%, 100% 34%, 100% 30%)';
    break;
  case 4.5:
    img_2.style.clipPath = 'polygon(0 34%, 0 39%, 100% 39%, 100% 34%)';
    break;
  case 5:
    img_2.style.clipPath = 'polygon(0 39%, 0 43%, 100% 43%, 100% 39%)';
    break;
  default:
    img_2.style.clipPath = 'polygon(0 39%, 0 43%, 100% 43%, 100% 39%)';
}
switch (rating_3) {
  case 0:
    img_3.style.clipPath = 'polygon(0 0, 0 4%, 100% 4%, 99% 0%)';
    break;
  case 1:
    img_3.style.clipPath = 'polygon(0 4%, 0 9%, 100% 9%, 100% 4%)';
    break;
  case 1.5:
    img_3.style.clipPath = 'polygon(0 8%, 0 13%, 100% 13%, 100% 8%)';
    break;
  case 2:
    img_3.style.clipPath = 'polygon(0 13%, 0 17%, 100% 17%, 100% 13%)';
    break;
  case 2.5:
    img_3.style.clipPath = ' polygon(0 17%, 0 21%, 100% 21%, 100% 17%)';
    break;
  case 3:
    img_3.style.clipPath = 'polygon(0 21%, 0 26%, 99% 26%, 97% 21%)';
    break;
  case 3.5:
    img_3.style.clipPath = 'polygon(0 26%, 0 30%, 100% 30%, 100% 26%)';
    break;
  case 4:
    img_3.style.clipPath = 'polygon(0 30%, 0 34%, 100% 34%, 100% 30%)';
    break;
  case 4.5:
    img_3.style.clipPath = 'polygon(0 34%, 0 39%, 100% 39%, 100% 34%)';
    break;
  case 5:
    img_3.style.clipPath = 'polygon(0 39%, 0 43%, 100% 43%, 100% 39%)';
    break;
  default:
    img_3.style.clipPath = 'polygon(0 39%, 0 43%, 100% 43%, 100% 39%)';
}

//card selector
const card = document.getElementsByClassName('hot-business-card');
const cards = Array.from(card);
cards.forEach((card) =>
  card.firstElementChild.addEventListener('mouseup', rotate)
);

function rotate(e) {
  let parent = document.querySelector('.hot-business-cards');

  var temp = parent.firstElementChild;
  parent.firstElementChild.remove();
  parent.appendChild(temp);
}
