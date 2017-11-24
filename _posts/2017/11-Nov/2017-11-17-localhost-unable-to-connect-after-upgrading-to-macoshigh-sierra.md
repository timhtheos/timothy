---
layout: default
title:  Localhost unable to connect after upgrading to macOS High Sierra
date: 2017-11-17T03:43:32Z
categories:
  - technology
permalink: entry/2017-11-17/localhost-unable-to-connect-after-upgrading-to-macos-high-sierra
---

I was notified to upgrade from maxOS Sierra to macOS High Sierra earlier and I
thought for few seconds and hit install button.

I waited for almost an hour for it to finish the OS upgrade.

After it, I checked my local sites, and I was unable to connect. It further
states using Firefox Quantum, the ff:

> Firefox can’t establish a connection to the server at accounting.dev.
>
> * The site could be temporarily unavailable or too busy. Try again in a few
> moments.
> * If you are unable to load any pages, check your computer’s network
> connection.
> * If your computer or network is protected by a firewall or proxy, make sure
> that Firefox is permitted to access the Web.

I restarted nginx several times, and even checking if it was running non-sudo. I
am running it via sudo so that I can use port 80. I also upgraded nginx to its
latest version. And, a lot of stuff.

After searching and searching, here's the solution:

1.  Install `dnsmasq` via brew, `brew install dnsmasq`. If you have it already,
    uninstall it, `brew remove dnsmasq`.

2.  Remove dnsmasq config file and directory from `/usr/local/etc`.

    ```
    cd /usr/local/etc
    rm -rf dnsmasq.conf dnsmasq.d
    ```

3.  And finally, restart nginx.

    ```
    [sudo] brew services stop nginx
    [sudo] brew services start nginx
    ```

That's it.
