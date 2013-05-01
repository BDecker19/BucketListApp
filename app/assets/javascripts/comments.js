$(document).ready(function() {

  $('body').bind('ajax:success', function(e, data) {
    var itemId = $('<div>').append(data).children().first().data("item-id");
    if(itemId) {
      $('.comments-' +itemId).append(data);
    }
  });

});