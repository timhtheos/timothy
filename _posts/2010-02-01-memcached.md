---
layout: post
title: Memcached
date:   2010-02-01
categories: memcached drupal ubuntu
permalink: article/memcached
teaser: >
  Memcache is free & open source, high-performance, distributed memory
  object caching system, generic in nature, but intended for use in
  speeding up dynamic web applications by alleviating database load.  It
  is an in-memory key-value store for small chunks of arbitrary data
  (strings, objects) from results of database calls, API calls, or page
  rendering.  It is simple, yet powerful. Its simple design promotes
  quick deployment, ease of development, and solves many problems facing
  large data caches. Its API is available for most popular languages.  -
  memcached.org
---

## About Memcache
- *from memcached.org*
- It is free & open source, high-performance, distributed memory object caching system, generic in nature, but intended for use in speeding up dynamic web applications by alleviating database load.
- It is an in-memory key-value store for small chunks of arbitrary data (strings, objects) from results of database calls, API calls, or page rendering.
- It is simple yet powerful.
- Its simple design promotes quick deployment, ease of development, and solves many problems facing large data caches.
- Its API is available for most popular languages.

## Memcached Users
Memcached should not be underestimated.  Its use will make a big difference for websites with TBs and PBs of files/DBs.  It's just used by no less than the following big websites:

* LiveJournal
* Wikipedia
* Flickr
* Bebo
* Twitter
* Typepad
* Yellowbot
* Youtube
* Digg
* WordPress.com
* Craigslist
* Mixi

## Ubuntu 11.10 Installation and setup using CLI

1.  Install memcached

    ~~~~
    sudo apt-get install memcached libmemcached-tools
    sudo apt-get install memcached libmemcached-tools
    ~~~~

2.  Install memcached php extension using PECL

    ~~~
    sudo apt-get install php5-dev php-pear make
    sudo pecl install memcache
    ~~~

3.  Edit your `php.ini` file

    ~~~
    sudo vim /etc/php5/apache2/php.ini
    ~~~

    Then, insert the following line into it:

    ~~~
    extension=memcache.so
    ~~~

4.  Restart apache and start memcache

    ~~~
    sudo service apache2 restart
    sudo service apache2 restart
    ~~~

5.  That's it, you're done. The following are optionals:

    To check if memcache is running, run

    ~~~
    sudo service memcached status
    ~~~

    Note that memcache's default port is `11211`. To check if it is active and listening to that port, run

    ~~~
    netstat -tap | grep memcached
    ~~~

    To check the status and stats, use memstat tool, where 127.0.0.1 is the local or public IP address.

    ~~~
    memstat 127.0.0.1:11211
    ~~~

    If memstat is not yet installed, install it with

    ~~~
    sudo apt-get install memstat
    ~~~

## Configuring Memcache

Configuring memcache can be done by editing the configuration file that can be found in `/etc/memcached.conf`.

To edit

~~~
sudo vim /etc/memcached.conf
~~~

To change default memory (64 MB), look for the following lines:

~~~
# Start with a cap of 64 megs of memory. It's reasonable, and the daemon default
# Note that the daemon will grow to this size, but does not start out holding this much
# memory
-m 64
~~~

To effect changes, restart memcache and apache2.

~~~
sudo service memcached restart
sudo service apache2 restart
~~~

## Use Memcache with Drupal 7.x

1.  Edit `php.ini` file.

    ~~~
    sudo vim /etc/php5/apache2/php.ini
    ~~~

    Append the following line:

    ~~~
    memcache.hash_strategy=consistent
    ~~~

2.  Install and activate a drupal module `Drupal Memcache`

3.  Edit settings.php of Drupal isntance to include:

    ~~~
    $conf['cache_backends'][] = 'sites/all/modules/memcache/memcache.inc';
    $conf['cache_default_class'] = 'MemCacheDrupal';
    $conf['memcache_key_prefix'] = 'unique';
    ~~~

    where `unique` is whatever word you want. This is important if you have multiple instances of drupal running with memcache in a single server.

## Use Memcache with Drupal 6.x

Perform the same steps in Drupal 7.x except step No. 3.

For step 3, include the following, instead:

~~~
$conf['cache_inc'] ='sites/all/modules/memcache/memcache.inc';
~~~
