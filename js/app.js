window.addEventListener("DOMContentLoaded", (event) => {
  const navbarBullet = document.querySelector(".app-navbar-bullet");
  navbarBullet.addEventListener("click", function() {
    const navbar = document.querySelector(".app-navbar");
    navbar.classList.toggle("visible");
  })
})