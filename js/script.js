$(document).ready(function() {
  $('#toggle-navigation').sidr({
    name: 'navigation',
    side: 'right'
  });

  $comment_div = $("#disqus-recent-comments");
  $.get("https://disqus.com/api/3.0/forums/listPosts.json?forum=timhtheos&limit=10&related=thread&api_key=mARVtOgZo3Gjz2whc6CPuR1eQZywsACQkvsKLRc2ljXL4A0hia640WHJGIktiJ5Z", function(res, code) {
    //Good response?
    if(res.code === 0) {
      var result = "";
      for(var i=0, len=res.response.length; i<len; i++) {
        var post = res.response[i];
        console.dir(post);
        var html = "<div class='comment'>";
        html += "<img src='" + post.author.avatar.small.permalink + "'>";
        html += "<a href='"+ post.author.profileUrl + "'>" + post.author.name + "</a>";
        html += "<p>"+post.raw_message+"</p>";
        html += "<p class='postRef'>Posted at " + post.createdAt + " on <a href='"+ post.thread.link + "'>" + post.thread.title + "</a></p>";
        html += "</div>";

        result+=html;
      }

      $comment_div.html(result);
    }
  });

});
