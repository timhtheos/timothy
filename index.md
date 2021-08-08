---
layout: default
title: Tech
nav_order: -99999999
description: "Official website of Timothy Escopete."
permalink: /
#no_comments: true
---

<h1>Tech</h1>

{%- assign i = 0 -%}
{%- assign ii = 0 -%}
{%- assign pages_array = '' | split: '' -%}
{%- assign pages_array = pages_array | push: site.html_pages -%}

{%- for pages in pages_array -%}
  {%- for page in pages reversed -%}

    {% if page.layout == "post" and page.sticky == true %} 

----
<h4 class="date label">{{ page.date | date: "%Y-%m-%d" }}</h4>
<h3 class="break-link"><a href="{{ page.permalink }}">{{ page.title }}</a></h3>
<p class="teaser">{{ page.teaser }}</p>

{% assign i = i | plus:1 %}

{%- if i == 4 -%}
  {% include ad_sq.html %}
  {% assign i = 0 %}
{%- endif -%}

    {% endif %}

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

{% assign ii = ii | plus:1 %}

{%- if ii == 5 -%}
  {% include ad_sq.html %}
  {% assign ii = 0 %}
{%- endif -%}

    {% endif %}

  {%- endfor -%}
{%- endfor -%}
