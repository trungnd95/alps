window.addEventListener("DOMContentLoaded", (event) => {
  //---- Header navbar toggle
  const navbarBullet = document.querySelector(".app-navbar-bullet");
  navbarBullet.addEventListener("click", function() {
    const navbar = document.querySelector(".app-navbar");
    navbar.classList.toggle("visible");
  })

  //---- Left sidebar toggle
  const sidebarBullet =  document.querySelector(".sidebar-toggle-bullet");
  sidebarBullet.addEventListener("click", (e) => {
    const sidebar = document.querySelector(".left-sidebar");
    sidebar.classList.toggle("sidebar-visible");
  })
})