---
layout: default
---

{% for post in site.categories.technology %}
  <div class="post">
    <h2 class="post-title">
      <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </h2>
    <div class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</div>
    {% if post.teaser %}
      <div class="post-teaser"><p>{{ post.teaser }}</p></div>
    {% else %}
      <div class="post-teaser">{{ post.excerpt }}</div>
    {% endif %}

  </div>
{% endfor %}

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- footer -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-2377540805505375"
     data-ad-slot="4233921032"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
