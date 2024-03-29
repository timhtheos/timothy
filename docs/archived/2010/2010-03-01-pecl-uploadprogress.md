---
layout: archive
title: PECL uploadprogress
date: 2010-03-01
nav_order: -20100301
parent: 2010
permalink: article/pecl-uploadprogress
categories:
  - development
tags:
  - pecl
  - drupal
  - ubuntu
sticky: true
teaser: >
  Setup, configure plupload using pecl uploadprogress in ubuntu 11.10 and Drupal 7.
---

{% include toc.html %}

I installed plupload libraries in Drupal 7.x.  Plupload is a highly usable upload handler for any CMS or similar.  Plupload functions well if uploadprogress module is installed and enabled in PHP, though it will still function without it.

## Ubuntu 11.10 installation

### Install PECL uploadprogress

```
sudo pecl install uploadprogress
```

### Edit your `php.ini` file

```
sudo vim /etc/php5/apache2/php.ini
```

and append the following:

```
extension=uploadprogress.so
```

### Restart apache2

```
sudo service apache2 restart
```

That's it.
