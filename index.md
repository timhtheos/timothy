---
layout: default
---

{% for post in site.posts %}
  <div class="post">
    <h2 class="post-title">
      <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </h2>
    <div class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</div>
    <div class="post-teaser">{{ post.excerpt }}</div>
  </div>
{% endfor %}
