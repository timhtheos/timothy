---
layout: post
title: Run mpd daemon automatically
date: 2015-12-30
permalink: article/run-mpd-daemon-automatically
categories: mpd ncmpcpp
teaser: >
  In article [Install mpd + ncmpcpp on OSX Yosemite](/article/install-mpd-ncmpcpp-on-osx-yosemite),
  many asked how to run mpd automatically.  This isn't an issue at first,
  because I run mpd manually.  I first suggested to include `mpd` into
  your shell rc file, but did not realise that it will run mpd each time
  a terminal is being opened, e.g., in new tab or window, thus resulting
  in `Address already in use` prompt, which may, if not, all the time,
  annoying.  Here, I have come up with this simple snippet to run mpd
  daemon only if it is not yet running.
disqus:
  old: true
  secure: true 
  www: true
  path: article/run-mpd-daemon-automatically
---

In article [Install mpd + ncmpcpp on OSX Yosemite](/article/install-mpd-ncmpcpp-on-osx-yosemite), many asked how to run mpd automatically.  This isn't an issue at first, because I run mpd manually.  I first suggested to include `mpd` into your shell rc file, but did not realise that it will run mpd each time a terminal is being opened, e.g., in new tab or window, thus resulting in `Address already in use` prompt, which may, if not, all the time, annoying.  Here, I have come up with this simple snippet to run mpd daemon only if it is not yet running.

While there are ways to run mpd automatically, here's the easiest way, that I did and now henceforth personally use.

## Check your shell

Check what shell you are using.

~~~
echo $SHELL
~~~

## If bash

Open your ~/.bashrc file found in your home directory, or create one if it does not exist yet.

~~~
cd
vim .bashrc
~~~

## If zsh

Open your ~/.zshrc file found in your home directory, or create one if it does not exist yet.

~~~
cd
vim .zshrc
~~~

## Script to conditionally run mpd if not running

Put the following code at the end of the file.

~~~
# Start mpd automatically if not yet running.
if [[ -z "$(pgrep mpd)" ]]; then
  mpd
fi
~~~

## Save settings

Save and source your .bashrc file.

~~~
source ~/.bashrc
~~~

or

~~~
source ~/.zshrc
~~~

Or, you may just restart your terminal.

This also fixes running mpd twice and multiple times, with the following error as asked by [MiGu3l](https://www.timothyae.com/article/install-mpd-ncmpcpp-on-osx-yosemite#comment-2430022453) in disqus:

~~~
Dec 28 23:55 : socket: Failed to bind to '127.0.0.1:6600': Address already in use
~~~
