$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {


    if (this.hash !== "") {

      event.preventDefault();


      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });

  window.onscroll = function () { stickyHeader() };


  var header = document.getElementById("myHeader");


  var sticky = header.offsetTop;

  function stickyHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
});