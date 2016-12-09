---
layout: post
title:  "Create nginx proxy pass"
date:   2016-12-08
categories:
  - nginx
  - proxy_pass 
permalink: article/create-nginx-proxy-pass
---

An nginx proxy pass server is where you pass a request from nginx to
proxied servers, whether this be another nginx or other web servers, over
different protocols.

I won't be giving a case scenario by which this would be useful.

Here's the code:

```
server {
  listen 80;
  server_name torrents.example.com;

  location / {
    proxy_pass http://www.demo.com:8080/rutorrent;
  }
}
```

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
