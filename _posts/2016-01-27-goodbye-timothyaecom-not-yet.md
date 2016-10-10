---
layout: post
title: Goodbye timothyae.com? Not yet!!!
date: 2016-01-27 02:00:00
permalink: article/goodbye-timothyaecom-not-yet
categories:
  - domain
  - (dot) sh
teaser: >
  After learning yesterday that there exists a (dot) sh domain name, I
  had second thoughts of changing my old and existing domain name,
  timothyae.com, to a much shorter name, timothy.sh.  I have been using
  timothyae.com for several years already, since 2008.  Now, I just have
  registered timothy.sh, and configured its DNS to point to my existing
  Digital Ocean droplet server instance.
---

After learning yesterday that there exists a (dot) sh domain name, I had second thoughts of changing my old and existing domain name, timothyae.com, to a much shorter name, timothy.sh.  I have been using timothyae.com for several years already, since 2008.  Now, I just have registered timothy.sh, and configured its DNS to point to my existing Digital Ocean droplet server instance.  For me to not have bad SEO and broken links, I did the following:

1.  301 redirect all links from timothyae.com to https://www.timothy.sh
2.  301 redirect all links from *.timothyae.com to https://www.timothy.sh
3.  301 redirect all links from https://timothyae.com to https://www.timothy.sh
4.  301 redirect all links from https://*.timothyae.com to https://www.timothy.sh
5.  301 redirect all links from timothy.sh to https://www.timothy.sh
6.  301 redirect all links from *.timothy.sh to https://www.timothy.sh
7.  301 redirect all links from https://timothy.sh to https://www.timothy.sh

That is all that I did.  I hope I can share my nginx server block for the above configuration, maybe next time.

My old domain timothyae.com will stay probably for several years because my email is still using that domain, or may stay together with timothy.sh.
