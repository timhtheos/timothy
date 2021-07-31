---
layout: archive
title:  "Install RVM (Ruby Version manager) in Ubuntu 14.04"
date:   2016-12-09
nav_order: -20161209
parent: 2016
categories:
  - development
tags:
  - rvm
  - ubuntu
  - ruby version manager
permalink: article/install-rvm-ruby-version-manager-in-ubuntu-14.04
---

Ruby Version Manager (RVM) is a tool that managers Ruby application
environments and enables switching between them. This is more of a
personal note, as I always end up re-searching about this.

## Install via PPA

1.  Add RVM PPA.

    ```
    sudo apt-add-repository ppa:rael-gc/rvm
    ```

2.  Update system.

    ```
    sudo apt-get update
    ```

## Install RVM, Ruby

1.  Install RVM.

    ```
    sudo apt-get install rvm
    ```

2.  Restart your terminal, or logout/login.

3.  Install Ruby.

    ```
    rvm install ruby
    ```

That's it.
