$(document).ready(function() {

  $('body').on('change', '#search', function () {
  //$('#search').change(function() {
    var _this = this;
    var searchTerm = $(this).val();

    var results = _.filter(items, function(item) {
      var matchTerm = new RegExp(searchTerm);
      return item.name.match(matchTerm);
    });

    console.log(results);

    $('.items').html('');

    _.each(results, function(item) {
      var html = _.template('<div class="todo-item "> <h4><%= name %></h4> <a href="#" class="comment-count">8 Comments</a> <a href="javascript:" class="toggle-comment">Leave a comment</a> <div class="new-comment"> <h3>New Comment</h3> <form accept-charset="UTF-8" action="/comments" class="new_comment" data-remote="true" id="new_comment" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="O+gGzs8FrTU82bG0neEGtD9UTjXBkpL7JjWGyAwpylQ="></div> <input id="comment_todo_item_id" name="comment[todo_item_id]" type="hidden" value="1"> <div class="field"> <textarea cols="40" id="comment_body" name="comment[body]" rows="20"></textarea> </div> <div class="field"> <input name="commit" type="submit" value="Create Comment"> </div> </form></div> <div class="comments-1 comment-list"> <div class="comment" data-item-id="1" data-item-count="8"> Hmm nice </div> <div class="comment" data-item-id="1" data-item-count="8"> Make sure you down it in one </div> <div class="comment" data-item-id="1" data-item-count="8"> Make sure its a real pickle </div> <div class="comment" data-item-id="1" data-item-count="8"> comment </div> <div class="comment" data-item-id="1" data-item-count="8"> what is this e object all about? </div> <div class="comment" data-item-id="1" data-item-count="8"> Hello </div> <div class="comment" data-item-id="1" data-item-count="8"> Great stuff </div> <div class="comment" data-item-id="1" data-item-count="8"> Great stuff </div> </div> <div class="info"> 3 days ago </div> </div>');
      var output = html({ name : item.name });
      $('.items').append(output);
    });
  });

});