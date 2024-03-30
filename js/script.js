// toggle class active untuk nampilin yg awal nya tdk ada menjadi ada
const navbarNav = document.querySelector('.navbar-nav');
// ketika icons menu di klik
document.querySelector('#menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// untuk menghilangkan side bar dengan cara klik di tempat lain tanpa klik icons menu nya
const hamMenu = document.querySelector('#menu');

document.addEventListener('click', function (e) {
  if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
