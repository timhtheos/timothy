$(document).ready(function() {
  $('#toggle-navigation').sidr({
    name: 'navigation',
    side: 'right'
  });

  $comment_div = $("#disqus-recent-comments");
  $.get("https://disqus.com/api/3.0/forums/listPosts.json?forum=timhtheos&limit=20&related=thread&api_key=mARVtOgZo3Gjz2whc6CPuR1eQZywsACQkvsKLRc2ljXL4A0hia640WHJGIktiJ5Z", function(res, code) {
    //Good response?
    if(res.code === 0) {
      var result = "";
      for(var i=0, len=res.response.length; i<len; i++) {
        var post = res.response[i];
        // var date = moment(post.createdAt).fromNow();
        var date = moment(post.createdAt);
        date = date.format("DD MMM YYYY");
        var msg = post.raw_message;
        var author = post.author.name;
        author = author.substring(0,7);
        console.dir(post);
        var html = "<div class='disqus-comment'>";
        html +=    "  <h3 class='disqus-comment-title'><a href='"+ post.thread.link + "'>" + post.thread.title + "</a></h3>";
        html +=    "  <div class='disqus-comment-wrapper'>";
        html +=    "    <div class='disqus-comment-image'><img src='" + post.author.avatar.small.permalink + "'></div>";
        html +=    "    <div class='disqus-comment-message-wrapper'>";
        html +=    "      <div class='disqus-comment-author-wrapper'>";
        html +=    "        <div class='disqus-comment-author'><i class='fa fa-user' aria-hidden='true'></i><a target='_blank' href='"+ post.author.profileUrl + "'>" + author + "</a></div>";
        html +=    "        <div class='disqus-comment-date'><i class='fa fa-clock-o' aria-hidden='true'></i>" + date + "</div>";
        html +=    "      </div>";
        html +=    "      <div class='disqus-comment-message'>" + msg + "</div>";
        html +=    "    </div>";
        html +=    "  </div>";
        html +=    "</div>";

        result+=html;
      }

      $comment_div.html(result);
    }
  });

});
