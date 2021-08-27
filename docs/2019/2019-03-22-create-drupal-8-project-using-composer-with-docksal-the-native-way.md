---
layout: post
title: Create Drupal 8 project using Composer with Docksal, the native way
date:   2019-03-22
nav_order: -20190322
# parent: March
# grand_parent: 2019
permalink: /2019/03/create-drupal-8-project-using-composer-with-docksal-the-native-way
categories:
  - drupal
  - drupal 8
  - docksal
  - composer
sticky: true
teaser: >
  If you are looking for the native way from scratch to create a Drupal 8 project
  using composer ran using docksal/cli, this tutorial notes is for you.
---

{% include toc.html %}

If you want to the following, this tutorial is for you:

* Manual creation of Drupal 8 project from scratch using Composer.
* Manual initialization of Docksal from scratch.

## Install Docksal

To install, follow [official instructions in docksal docs](https://docs.docksal.io/getting-started/setup/#what-is-your-operating-system).

For OSX/macOS, I would recommend [Docker Desktop](https://docs.docksal.io/getting-started/setup/#install-macos-docker-for-mac) installation option.

## Start Docksal

To start Docksal:

```
fin system start
```

To stop Docksal:

```
fin system stop
```

## Download Drupal 8

We will use `Composer` to download Drupal 8, and we will run `composer` using docksal/cli. Do not use your host `composer`.

Create project directory:
```
mkdir my-new-project
```

Go to project directory:
```
cd my-new-project
```

Download Drupal 8 using composer, and inside docksal:
```
fin run-cli composer create-project drupal-composer/drupal-project:8.x-dev . --stability dev --no-interaction
```

## Initialize Docksal project

Inside the project root:

```
mkdir .docksal
```

### Set docroot directory

Assuming you would host your production site into Acquia Cloud, the docroot/webroot directory would be `docroot`. You may change it to any directory such as `web`, or `www`.

```
fin config set DOCROOT=docroot
```

The configuration settings for your docksal can be found inside `.docksal` directory.

## Start your project container

To start your project:

```
fin project start
```

To stop your project:

```
fin project stop
```

## Database config settings

Your database configuration settings would look like this:

* host: `db`
* user: `user`
* pswd: `user`
* db: `default`
