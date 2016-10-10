---
layout: post
title: Install rtorrent on Yosemite via brew
date: 2015-07-17
permalink: article/install-rtorrent-on-yosemite-via-brew
categories: rtorrent yosemite
---

The following steps are the easiest way to install rtorrent - a console-based torrent client - on OSX Yosemite.  The same may work on Mavericks and previous versions, but not personally tested.  I previously installed it with the previous OS differently which I cannot recount anymore.

## Install Dependency
~~~
brew install gcc
~~~

## Install rtorrent
~~~
brew install rtorrent
~~~

## Setup RC file
~~~
cd ~
wget https://gist.githubusercontent.com/timhtheos/463842fd0e4ca25086e2/raw/bf168e2c5b65fece626ec2b2d84089cd92dfe0a4/.rtorrent.rc
mkdir ~/.rtorrent.session
~~~

## Download Directory
To set for the download directory, change value for the `directory` inside `.rtorrent.rc` file.

## Start rtorrent
~~~
rtorrent
~~~

## Basic Shortcuts

| Command                 | Description
| ----------------------- | ------------------------------------------------------------ |
| ctrl + q                | quit                                                         |
| ctrl + s                | start download                                               |
| ctrl + d                | stop; remove if done twice                                   |
| left, right arrow keys  | move to next/previous screen or option                       |
| up, down arrow keys     | move up/down in an option or on the list of torrents         |
| return key              | rtorrent prompt where you can paste your torrent magnet link |

That's it.
