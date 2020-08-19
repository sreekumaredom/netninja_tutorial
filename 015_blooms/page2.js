const leftBtn = document.getElementById('mv-left');
const rightBtn = document.getElementById('mv-right');

let jsondata;
fetch('./page2.json')
  .then(function (u) {
    return u.json();
  })
  .then(function (json) {
    jsondata = json;
  });

console.log(jsondata);

//Left button event listener
leftBtn.addEventListener('click', () => {
  console.log('Left');
});

//Right button event listener
rightBtn.addEventListener('click', () => {
  console.log('Right');
});
