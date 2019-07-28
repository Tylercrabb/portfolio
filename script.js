$(document).ready(function () {
  $("a").on('click', function (event) {
    if (event.currentTarget.hash === "about me" || "projects" || "contact") {
      event.preventDefault();
      document.querySelector(event.currentTarget.hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  })

  // sticky header
  window.onscroll = function () { stickyHeader() };

  const header = document.getElementById("myHeader");


  const sticky = header.offsetTop;
  console.log(sticky)
  function stickyHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
});