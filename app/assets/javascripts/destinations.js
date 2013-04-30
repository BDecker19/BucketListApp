$(document).ready(function() {
  $('.toggle-comment').click(function() {
    $(this).next('.new-comment').slideToggle();
  });
});