---
---

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytplayer', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady() {
  // player.playVideo();
  // player.mute();
}

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

  var yt_ids    = new Array(
                    {% for id in site.yt.ids %}
                      {% if forloop.index != 1 %}, {% endif %}
                      {
                        id: "{% if id.id %}{{ id.id }}{% else %}{{ id }}{% endif %}"
                        {% if id.dimension %}
                          , dimension: 
                          {
                            {% if id.dimension.width %}
                              width: "{{ id.dimension.width }}"
                            {% endif %}
                            {% if id.dimension.height %}
                              , height: "{{ id.dimension.height }}"
                            {% endif %}
                          }
                        {% endif %}
                        {% if id.autoplay %}
                          , autoplay: "{{ id.autoplay }}"
                        {% endif %}
                        {% if id.controls %}
                          , controls: "{{ id.controls }}"
                        {% endif %}
                        {% if id.showinfo %}
                          , showinfo: "{{ id.showinfo }}"
                        {% endif %}
                      }
                    {% endfor %}),
      yt_id     = yt_ids[Math.floor(Math.random() * yt_ids.length)],
      yt_params = new Array(
                    {% if site.yt.settings %}
                      {% for setting in site.yt.settings %}
                        {% if forloop.index != 1 %}, {% endif %}
                        "{{ setting[0] }}={{ setting[1] }}"
                      {% endfor %}
                    {% endif %}
                  ),
      yt_pf     = Array.prototype.join.call(yt_params, "&"),
      yt_src    = "https://www.youtube.com/embed/" + yt_id.id + "?" + yt_pf,
      yt_iframe = ".front .region-content-header > iframe";
  
  var yt_dimension_width = {{ site.yt.dimension.width }};
  var yt_dimension_height = {{ site.yt.dimension.height }};

  $(yt_iframe).attr("src", yt_src);

  var rw = yt_dimension_width,
      rh = yt_dimension_height,
      r = rw/rh;

  function responsiveHeaderVideo() {
    var wh = $( window ).height(),
        ww = $( window ).width(),
        w  = ww,
        h  = wh,
        t  = 0,
        l  = 0;

    if (ww/wh < r) {
      var w = (((wh-rh)/rh)*rw)+rw,
          l = ((((((wh-rh)/rh)*rw)+rw)-ww)/2)*(-1);
    }

    if (ww/wh > r) {
      var h = (((ww-rw)/rw)*rh)+rh,
          t = ((((((ww-rw)/rw)*rh)+rh)-wh)/2)*(-1);

      // Because I reverted back the top nav bar to not transparent. (part 2/2)
      var t = ((((((ww-rw)/rw)*rh)+rh)-wh)/2)*(-1) - (75/2);
    }

    $(yt_iframe).css("width", w + "px");
    $(yt_iframe).css("height", h + "px");
    $(yt_iframe).css("top", t + "px");
    $(yt_iframe).css("left", l + "px");

    // Because I reverted back the top nav bar to not transparent. (part 1/2)
    $('.front .region-content-header').css("margin-top", "75px");
    $('.front .region-content-header').css("height", (wh-75) + "px");
  }

  responsiveHeaderVideo();

  {% if site.yt.settings.mute %}
    {% if site.yt.settings.mute == 1 %}
      $(".front .yt-controls .volume").addClass("mute");
    {% endif %}
  {% endif %}

  $(window).on('resize', function () {
    responsiveHeaderVideo();
  });

  $(".front .yt-controls .play").click(function() {
    if ($(this).hasClass("pause")) {
      player.playVideo();
    }
    else {
      player.pauseVideo();
    }

    $(this).toggleClass("pause");
  });

  $(".front .yt-controls .volume").click(function() {
    if ($(this).hasClass("mute")) {
      player.unMute();
    }
    else {
      player.mute();
    }

    $(this).toggleClass("mute");
  });

});
