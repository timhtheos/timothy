---
layout: default
title: Technology
nav_order: 1
description: "Official website of Timothy Escopete."
permalink: /
#no_comments: true
---

<h1>Technology</h1>

{%- assign pages_array = '' | split: '' -%}
{%- assign pages_array = pages_array | push: site.html_pages -%}

{%- for pages in pages_array -%}
  {%- for page in pages reversed -%}
    {% if page.layout == "archive-year" %} 

----
#### {{ page.title }}
{: .year .label .label-green }

    {% endif %}

    {% if page.layout == "archive" and page.sticky == true %} 

----
<h4 class="date label">{{ page.date | date: "%m-%d" }}</h4>
<h3 class="break-link"><a href="{{ page.permalink }}">{{ page.title }}</a></h3>
<p class="teaser">{{ page.teaser }}</p>

    {% endif %}

  {%- endfor -%}
{%- endfor -%}
