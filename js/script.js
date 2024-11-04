// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamb menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("aktif");
};

// klik di luar sidebar untuk menghilangkan nav nya
const hamb = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamb.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("aktif");
  }
});
