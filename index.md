---
layout: default
---

{% for post in site.categories.technology %}
  <div class="post">
    <h2 class="post-title">
      <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </h2>
    <div class="post-meta">{{ post.date | date: "%b %-d, %Y, %a" }}</div>
    {% if post.teaser %}
      <div class="post-teaser"><p>{{ post.teaser }}</p></div>
    {% else %}
      <div class="post-teaser">{{ post.excerpt }}</div>
    {% endif %}

    {% if forloop.index == 4 %}
      {% include components/ads/in-feed-ad.html %}
    {% endif %}
    {% if forloop.index == 10 %}
      {% include components/ads/in-feed-ad.html %}
    {% endif %}
  </div>
{% endfor %}
