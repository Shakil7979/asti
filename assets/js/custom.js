// A $( document ).ready() block.
$(document).ready(function () {
  $('select').niceSelect();

  $(".hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });
});