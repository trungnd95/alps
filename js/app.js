window.addEventListener("DOMContentLoaded", (event) => {
  //---- Header navbar toggle
  const navbarBullet = document.querySelector(".app-navbar-bullet");
  navbarBullet.addEventListener("click", function() {
    const navbar = document.querySelector(".app-navbar");
    navbar.classList.toggle("visible");
  })

  const appnavBullet = document.querySelector(".app-nav-bullet");
  appnavBullet.addEventListener("click", function() {
    const navs = document.querySelectorAll("nav");
    navs.forEach(function(nav) {
      nav.classList.toggle("visible");
    })
  })

  //---- Left sidebar toggle
  function toggleSidebar() {
    const sidebar = document.querySelector(".left-sidebar");
    sidebar.classList.toggle("sidebar-visible");
  }
  const sidebarBullet =  document.querySelector(".sidebar-toggle-bullet");
  sidebarBullet.addEventListener("click", (e) => {
    toggleSidebar();
  })

  const sidebarBulletXs =  document.querySelector(".sidebar-toggle-bullet-xs");
  sidebarBulletXs.addEventListener("click", (e) => {
    toggleSidebar();
  })
})
