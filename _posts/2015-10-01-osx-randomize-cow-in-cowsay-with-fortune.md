---
layout: post
title: "OSX: Randomize cow in Cowsay with Fortune"
date: 2015-10-01
permalink: article/osx-randomize-cow-in-cowsay-with-fortune
categories: gshuf shuf cowsay fortune osx
---

Cowsay is a program which generates ASCII pictures of a cow with a message. It can also generate pictures using pre-made images of other animals, such as Tux the Penguin, the Linux mascot.  While fortune is a simple program that displays a pseudorandom message from a database of quotations.

When fortune is piped to cowsay, it generates an ASCII pictures of a random cow which displays a pseudorandom random quotation message.

## Installation via Homebrew

~~~
brew install fortune
brew install cowsay
brew install coreutils
~~~

## Command

~~~
fortune | cowsay -f $(ls /usr/local/Cellar/cowsay/3.03/share/cows | gshuf -n1)
~~~

## Other Information

1.  shuf - is a linux command
2.  gshuf - is an OSX equivalent command via coreutils

## Notes

The first paragraph is a wikipedia definition of cowsay and fortune.
