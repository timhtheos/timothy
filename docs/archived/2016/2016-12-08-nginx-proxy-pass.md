---
layout: post
title:  "Create nginx proxy pass"
date:   2016-12-08
nav_order: 58
parent: Archived
categories:
  - development
tags:
  - nginx
  - proxy_pass 
permalink: article/create-nginx-proxy-pass
---

Information in this page is outdated. Last update was made on {{ page.date | date_to_long_string }}
{: .label .label-red }

# {{ page.title }}

An nginx proxy pass server is where you pass a request from nginx to
proxied servers, whether this be another nginx or other web servers, over
different protocols.

I won't be giving a case scenario by which this would be useful.

## The code

~~~
server {
  listen 80;
  server_name torrents.example.com;

  location / {
    proxy_pass http://www.demo.com:8080/rutorrent;
  }
}
~~~

## About the code

In the code above, you have a server where you have rutorrent in a
directory in port 8080.  The domain name is www.demo.com and the protocol
is not secure.

That long url, http://www.demo.com:8080/rutorrent, is too long to
memorize and it has a port number in it.

So in the code, instead of a long url with port number and a directory,
the same can be accessed via http://torrents.example.com with no port
number and no extra directory path.

That's it.

Btw, I have been using nginx proxy pass since last year, but I just did
not document it.
