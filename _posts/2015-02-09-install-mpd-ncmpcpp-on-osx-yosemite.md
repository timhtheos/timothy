---
layout: post
title: Install mpd + ncmpcpp on OSX Yosemite
date: 2015-02-09
permalink: article/install-mpd-ncmpcpp-on-osx-yosemite
categories: mpd ncmpcpp unix osx yosemite
disqus:
  old: true
  secure: false
  www: false
  path: article/install-mpd-ncmpcpp-on-osx-yosemite-0
alias: article/install-mpd-ncmpcpp-on-osx-yosemite-0
---

I had successful installation of mpd + ncmpcpp on Linux and OSX Mavericks.  When I upgraded to Yosemite, I had this installed too, but on the exception that running `mpd` requires `--no-daemon` option.  That was last year.

Early this year, I was forced to do a clean reformat and install of Yosemite.  After setting up my local, here are the steps I did to sucessfuly install mpd + ncmpcpp on Yosemite without the `--no-daemon` option.

## Background
1. mpd
  - *Stands for* Music Player Daemon.
  - *From [musicpd.org](http://www.musicpd.org/)* is a flexible, powerful, server-side application for playing music. Through plugins and libraries it can play a variety of sound files while being controlled by its network protocol.
  - *Can be installed into* Unix/Linux, OSX, and Windows.
<br>
2. ncmpcpp
  - *Stands for* NCurses Music Player Client (Plus Plus).
  - *From [wiki.archlinux.org](https://wiki.archlinux.org/index.php/Ncmpcpp)* is an mpd client (compatible with mopidy) with a UI very similar to ncmpc, but it provides new useful features such as support for regular expressions for library searches, extended song format, items filtering, the ability to sort playlists, and a local filesystem browser.
  - *Website* [ncmpcpp.rybczak.net](http://ncmpcpp.rybczak.net/)
  - *Can be installed into* Unix/Linux (Gentoo, Arch, FreeBSD, Fedora, Debian, Mandriva, etc), and OSX.

## Installation

1.  Install mpd via homebrew

    ~~~
    brew install mpd
    ~~~

2.  Install ncmpcpp

    ~~~
    brew install ncmpcpp
    ~~~

3.  Create directories and files

    ~~~
    cd ~
    mkdir .mpd
    cd .mpd
    mkdir playlists
    touch mpd.conf
    touch mpd.db
    touch mpd.log
    touch mpd.pid
    touch mpdstate
    ~~~

    or you can execute all together

    ~~~
    cd ~ && mkdir .mpd && cd .mpd && mkdir playlists && touch mpd.conf mpd.db mpd.log mpd.pid mpdstate
    ~~~

4.  Write conf file in `mpd.conf`

    ~~~
    music_directory         "~/Music"
    playlist_directory      "~/.mpd/playlists"
    db_file                 "~/.mpd/mpd.db"
    log_file                "~/.mpd/mpd.log"
    pid_file                "~/.mpd/mpd.pid"
    state_file              "~/.mpd/mpdstate"
    auto_update             "yes"
    auto_update_depth       "2"
    follow_outside_symlinks "yes"
    follow_inside_symlinks  "yes"

    audio_output {
        type                  "osx"
        name                  "CoreAudio"
        mixer_type            "software"
    }

    decoder {
        plugin                "mp4ff"
        enabled               "no"
    }

    bind_to_address         "127.0.0.1"
    port                    "6600"
    
    user                    "timothy"
    ~~~

    Change paths to your choice, and the `user` to what you get when you do `whoami` in your shell.

5.  Finally, run `mpd` daemon

    ~~~
    mpd
    ~~~

    And, run `ncmpcpp`

    ~~~
    ncmpcpp
    ~~~

That's it.  I didn't thought that installing it into Yosemite was that simple. Hope this helps.
