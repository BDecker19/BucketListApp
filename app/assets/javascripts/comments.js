$(document).ready(function() {

  $('body').bind('ajax:success', function(e, data) {
    var temporaryDom = $('<div>').append(data).children().first();
    var itemId = temporaryDom.data("item-id");
    var itemCount = temporaryDom.data("item-count");
    if(itemId) {
      $('.comments-' +itemId).append(data).prev('.comment-count').html(itemCount);
    }
  });

});