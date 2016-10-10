---
layout: post
title: Github History Vandalism
date: 2015-03-01
permalink: article/github-history-vandalism
categories: git github bash
---

A former colleague introduced me to [gelstudios](https://github.com/gelstudios)' [gitfiti](https://github.com/gelstudios/gitfiti).  It's a tool to decorate your github account's commit history calendar by (blatantly) abusing git's ability to accept commits *in the past*.

I tested it, and it works as described.

In its `Notable derivatives or mentions`, it mentions [pikesley](https://github.com/pikesley)'s [pokrovsky](https://github.com/pikesley/pokrovsky) as a [service](http://pokrovsky.herokuapp.com/).

Both works good as described.  However, both missed the automation of the creation of github repository and its deletion for recreation.

Hence, I have come up with a simple solution.

## Simple Solution
*Automation* using github dev API, and bash.

## Dependencies
1.  curl
2.  jq - [http://stedolan.github.io/jq/download/](http://stedolan.github.io/jq/download/)

## How it works
1.  You provide your github username (the one from the url, and not your email address) once.
2.  You provide your github password once.
3.  You provide the repository to create or recreate, once.
4.  The bash script will do the rest of the job for you.

## How to test it
1.  You clone the [ghvandalism repository](https://github.com/timhtheos/ghvandalism) on your local.
2.  You run the bash script with 1 argument, e.g., `TEST`

    ~~~
    bash install.sh TEST
    ~~~

3.  It will ask you for your github username, password, and repository to create/recreate, once.
4.  Wait until it is finished.

## Other things that you should know
1.  Providing your github user and pswd is safe. It is recorded on your local, and is .gitignore'd and therefore it can neither be committed nor pushed.
2.  It is still using pikesley's pokrovsky's web service (see above for links).
3.  The script is provided `as is`, without warranty of any kind, express or implied.

Please let me know what you think of the script - if you are able to ran it successfully or not.
