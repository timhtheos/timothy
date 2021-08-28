---
layout: post
title: Create Drupal 8 project using Composer with Docksal, the native way
date:   2019-03-22
nav_order: -20190322
parent: March
grand_parent: 2019
permalink: /2019/03/create-drupal-8-project-using-composer-with-docksal-the-native-way
categories:
  - drupal
  - drupal 8
  - docksal
  - composer
sticky: true
teaser: >
  This is the native way, and from scratch, to create Drupal 8 project using
  composer ran using docksal/cli.
---

{% include toc.html %}

This if for you if you want the following:

* Manual creation of Drupal 8 project from scratch using Composer.
* Manual initialization of Docksal from scratch.

## Install Docksal

To install, follow [official instructions in docksal docs](https://docs.docksal.io/getting-started/setup/#what-is-your-operating-system).

For OSX/macOS, I would recommend [Docker Desktop](https://docs.docksal.io/getting-started/setup/#install-macos-docker-for-mac) installation option.

## Manage Docksal

### Start Docksal

```
fin system start
```

### Stop Docksal

```
fin system stop
```

## Download Drupal 8

We will use `Composer` to download Drupal 8, and we will run `composer` using docksal/cli.

Do not use your host `composer`.

### Create project directory
```
mkdir my-new-project
```

### Go to project directory
```
cd my-new-project
```

### Download Drupal 8 using composer, docksal/cli
```
fin run-cli composer create-project drupal-composer/drupal-project:8.x-dev . --stability dev --no-interaction
```

## Initialize Docksal project

### Create Docksal directory

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

## Manage Docksal project, container(s)

### Start your project, container(s)
```
fin project start
```

### Stop your project, container(s)
```
fin project stop
```

### Remove your project, container(s)
```
fin project remove
```

## Database config settings

| host | username | password | database |
|:-----|:---------|:---------|:---------|
| db | user | user | default |

## Drush

All `drush` commands must be prefixed with `fin`. For example,

```
drush cr
```

would become

```
fin drush cr
```

## Composer and other commands

All `composer` commands must also be prefixed with `fin` or `fin exec`. For example,

```
composer install
```

would become

```
fin composer install
```

or

```
fin exec composer install
```

Likewise, all other commands must be prefixed with `fin exec`.

`fin exec` is recommended over just `fin` for both `composer` and other commands.
