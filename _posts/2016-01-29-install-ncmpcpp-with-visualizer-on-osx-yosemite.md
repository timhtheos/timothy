---
layout: post
title: Install ncmpcpp with visualizer on OSX [Yosemite]
date: 2016-01-29
permalink: article/install-ncmpcpp-with-visualizer-on-osx-yosemite
categories: mpd ncmpcpp visualizer osx yosemite
teaser: >
  Ncmpcpp is an mpd client.  It is compatible with mopidy and its UI is
  very similar to ncmpc.  It's a TUI-based music player that is very
  lightweight.  Default installation on OSX can be easily done with
  `brew install ncmpcpp`.
---

Ncmpcpp is an mpd client.  It is compatible with mopidy and its UI is very similar to ncmpc.  It's a TUI-based music player that is very lightweight.  Default installation on OSX can be easily done with homebrew.

~~~
brew install ncmpcpp
~~~

When you check `man ncmpcpp`, movement keys include numeric keys from 1 to 8.  No. 8 is `Show music visualizer`.  Yes you have ncmpcpp, but after install, and you press `8`, you are shown nothing but an empty space in the main area of the player.  You then configured your mpd and ncmpcpp dotfiles, to no avail.

The following is the easiest way to enable visualizer in ncmpcpp.

When you have ncmpcpp installed already, uninstall it.

~~~
brew remove ncmpcpp
~~~

But, if you do not have ncmpcpp, you may proceed with installing it with the following:

~~~
brew install ncmpcpp --with-visualizer  
~~~

You are done.  Launch your ncmpcpp player and press `8`, it should show the visualizer in the main part of the player.  This however, requires some configuration in the mpd and ncmpcpp dotfiles.  And such configuration can be found here.
