---
layout: archive
title: Drupal 7.x multi-site set-up and configuration
date:   2011-02-01
nav_order: -20110201
parent: 2011
categories:
  - development
tags:
  - ubuntu
  - drupal
permalink: article/drupal-7x-multi-site-set-up-and-configuration
---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

Drupal has been known for its multisite feature but it lacks detailed documentation on how to set-up and configure it.

The following multi-site setup and configuration features the following:

A multi-site with a domain name for each site;
A multi-site with one shared core files, modules and themes; and
A multi-site with separate databases for each site but with an option to share common users, sessions and user roles.

## Prerequisites

1. The domain names nameservers (ns1, ns2, ...), or the DNS A record should have been pointed to the server already;
2. The virtual host configuration file of the domain names in the server should have been set to point to the same directory in the server; and
3. The main Drupal instance is already setup and running.  Herein we call its domain name, domain1.com.
 
## Setting up multisite

In the sites/ directory, duplicate the `example.sites.php` to `sites.php`.

```
cd sites
cp example.sites.php sites.php
```

Edit `sites.php`:

```
sudo nano sites.php
```

Add the following at the bottom of `sites.php`: (Don't forget to replace `domain1` and `domain2`, respectively.)

```
$sites['domain1.com'] = 'domain1.com';
$sites['domain1.com/domain2.com'] = 'domain2.com';
```

Create `domain2.com` directory:

```
mkdir domain2.com
```

Duplicate `default.settings.php` from `sites/default/` directory to `sites/domain2.com/` directory.

```
# Assuming we are in sites/ directory.
cp default/default.settings.php domain2.com/default.settings.php
```

In the `sites/domain2.com/` directory, create `files` directory. We will change permissions of files directory to public.

```
# Assuming we are in sites/domain2.com/ directory.
mkdir files
sudo chmod 777 files
```

In `sites/domain2.com/` directory, duplicate `default.settings.php` to `settings.php`.

```
# Assuming we are in sites/domain2.com/ directory
cp default.settings.php settings.php
```

That's it. We are ready for the next step.

## Drupal Install

Install Drupal to `domain2.com` by going to the domain name using a browser. Just install it the way the first domain `domain1.com` has been installed with the following important notes:

1. That it should use the same database, and not another database; and
2. That `domain2.com` must use a different table `prefix_`. The database of `domain1.com` does not need to have a prefix, but encouraged to have one. For this purpose, let's assume that `domain1.com` and `domain2.com` use the following prefixes: `d1_` and `d2_`, respectively.

## Configure `domain2` to share users, user roles and session with `domain1`

Navigate to sites/domain2.com/ directory.

```
cd sites/domain2.com
```

Edit `settings.php`.

```
sudo nano settings.php
```

Go to the `$databases` variable and change the value of `$databases['default']['default']['prefix']` from its non-array value to an associative array value. The array must contain the following information

```
default = 'd2_'
users = 'd1_'
sessions = 'd1_'
role = 'd1_'
authmap = 'd1_'
```

Or, you can copy-paste the following into the value of prefix.

```
array(
  'default' => 'd2_',
  'users' => 'd1_',
  'sessions' => 'd1_',
  'role' => 'd1_',
  'authmap' => 'd1_',
)
```

The above shows that `domain2's` default database has the prefix of `d2_` but with the users, sessions, role and authmap tables, it will use the tables of `domain1's` default.

## Test your sites
Test your sites by going to `domain1.com` and `domain2.com`.

If there is a problem with `domain2`, try to clear your cache.
