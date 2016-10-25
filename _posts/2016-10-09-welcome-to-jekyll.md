---
layout: post
title:  "Welcome to Jekyll! Updated!"
date:   2016-10-09
categories: jekyll update
permalink: welcome-to-jekyll
teaser: >
  After years of using Drupal 7.x on my personal website, from
  timothyae.com, to using a secure protocol, and to timothy.sh, I have
  finally decided, after serveral months of search, to move to Jekyll
  for my own website, just to save paid cloud servers, among others.
---

After years of using Drupal 7.x on my personal website, from
timothyae.com, to using a secure protocol, and to timothy.sh, I have
finally decided, after serveral months of searches, to move to Jekyll for
my own website, just to save paid cloud servers fees, among others.

The following are "the" reasons for my switch:

1.  Static pages.

    Unlike Drupal, Jekyll pages are static html pages. There's no need
    for sql servers, and other server fine tunings.

2.  Ease of management.

    When in Drupal, we learned to add nodes and pages, first through its
    UI.  Later on, I decided to automate nodes/pages creation with some
    tools outside Drupal.

    TLTR; I create Drupal nodes via a plain text editor using markdown.

    With Jekyll, it's the default.

3.  Continuous deployment.

    When in Drupal, I did custom continuous deployment with my own cloud
    server, custom made git hooks, bash, features, among others.

    With Jekyll, there are free hosting that can be used. One of which is
    [Github Pages](https://pages.github.com/), and [Netlify](https://www.netlify.com/),
    among others.

## So, why not github pages?

While Github pages is free, [HTTPS is not supported for Github Pages
using custom domain names](https://help.github.com/articles/securing-your-github-pages-site-with-https/).

I have seen the advantage of using SSL certificates to my domain names,
and this is one of the main factors for the switch.

## What am I using then?

I'm using [Netlify](https://www.netlify.com/).

The [repository](https://github.com/timhtheos/timothy), is hosted in Github.

Each time I update my repository, a build is triggered in Netlify and
then my site is built.

## Original `Welcome to Jekyll!` content.

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
