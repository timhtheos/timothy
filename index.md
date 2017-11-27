---
layout: default
---

{% for post in paginator.site.categories.technology %}
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

<!-- Pagination links -->
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="previous">Previous</a>
  {% else %}
    <span class="previous">Previous</span>
  {% endif %}
  <span class="page_number ">Page: {{ paginator.page }} of {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="next">Next</a>
  {% else %}
    <span class="next ">Next</span>
  {% endif %}
</div>

<!-- footer -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-2377540805505375"
     data-ad-slot="4233921032"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
