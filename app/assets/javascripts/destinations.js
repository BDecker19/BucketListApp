$(document).ready(function() {
  $('body').on('click', '.toggle-comment', function() {
//  $('.toggle-comment').click(function() {
    $(this).next('.new-comment').slideToggle();
  });
});