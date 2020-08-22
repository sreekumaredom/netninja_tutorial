const navBar = document.getElementById('main-nav');

window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);

  console.log(top);
  if (top >= 100 && top < 3168) {
    navBar.classList.add('active');
  } else {
    navBar.classList.remove('active');
  }
};
