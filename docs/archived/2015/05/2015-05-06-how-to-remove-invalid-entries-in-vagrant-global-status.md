---
layout: archive
title: How to remove invalid entries in vagrant global-status
date: 2015-05-06
nav_order: -20150506
parent: May
grand_parent: 2015
permalink: article/how-to-remove-invalid-entries-in-vagrant-global-status
categories:
  - development
tags:
  - vagrant
  - virtualbox
sticky: true
teaser: >
  You may at one point deleted a vagrant directory, accidentally. Perhaps you had that project, finished, and wasn’t able to have it up for too long. This will make your vagrant virtual machine as an orphaned VM. So you went ahead and opened your vagrant’s default provider, e.g., Virtualbox, and delete these VMs. What you did not realise is that, the vagrant entry/ies is/are still there.
---

{% include toc.html %}

You may at one point deleted a vagrant directory, accidentally.  Perhaps you had that project, finished, and wasn't able to have it up for too long.  This will make your vagrant virtual machine as an orphaned VM.  So you went ahead and opened your vagrant's default provider, e.g., Virtualbox, and delete these VMs.  What you did not realise is that, the vagrant entry/ies is/are still there.

To check all list of vagrant instances, execute `vagrant global-status` in your terminal.  Check all instances against the one listed in your provider.

## To Remove
~~~
vagrant global-status --prune
~~~

## Works in
1.  Linux/Unix systems
2.  OSX
3.  Windows using Cygwin (not tested)
