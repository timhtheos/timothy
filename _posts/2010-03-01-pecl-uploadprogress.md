---
layout: post
title: PECL uploadprogress
date:   2010-03-01
categories: pecl drupal ubuntu
permalink: article/pecl-uploadprogress
---

I installed plupload libraries in Drupal 7.x.  Plupload is a highly usable upload handler for any CMS or similar.  Plupload functions well if uploadprogress module is installed and enabled in PHP, though it will still function without it.

## Ubuntu 11.10 installation

1.  Install PECL uploadprogress

    ~~~
    sudo pecl install uploadprogress
    ~~~

2.  Edit your `php.ini` file

    ~~~
    sudo vim /etc/php5/apache2/php.ini
    ~~~

    and append the following:

    ~~~
    extension=uploadprogress.so
    ~~~

3.  Restart apache2

    ~~~
    sudo service apache2 restart
    ~~~

4.  That's it.
