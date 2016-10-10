---
layout: post
title: Tools I Use
date:   2015-01-01
permalink: tools-i-use
---

The tools listed here are the tools I personally use for development, and other matters. I have arranged them in categories, as well as provided information (when I can) as to when I started using them.

Here are the following:

## Editor / IDE
present
: *vim* - I use this starting 2014 up to the present in both Linux and Mac.

in the past
: *PHPStorm* - I use this in 2013 only in Mac.
: *Sublime Text* - I seldom use this in 2013 in Mac.
: *Geany* - I use this all the time during my Linux/Unix days.
: *Notepad++* - I use this in Windows during college days.

## Vim Plugin Manager
[Vundle](https://github.com/gmarik/Vundle.vim)
: is short for `Vim Vundle`.
: *why?* A former colleague said, he is using [pathogen](https://github.com/tpope/vim-pathogen/), so I have decided to use an alternative i.e., vundle.

## Vim Plugins

I have a lot of installed vim plugins on my local, but I only use some of it. The some are the following:

1.  Lokaltog's [easymotion](https://github.com/Lokaltog/vim-easymotion) - This provides a much simplier way to use some motions in vim.

2.  Tpope's [fugitive](https://github.com/tpope/vim-fugitive) - This is a git wrapper for vim.

3.  Scrooloose' [nerdtree](https://github.com/scrooloose/nerdtree) - I seldom use this but this provides a sidebar directory structure in vim.

4.  Scrooloose' [syntastic](https://github.com/scrooloose/syntastic) - I use all the time with vim, passively. This checks code syntax of what I write when I save it. See the following screenshot:

    ![](https://raw.githubusercontent.com/scrooloose/syntastic/master/_assets/screenshot_1.png)
    *Img src: https://github.com/scrooloose/syntastic*

5.  Kien's [ctrlp](https://github.com/kien/ctrlp.vim) - This I use all the time. This is a full path fuzzy `file, buffer, mru, tag, ...` finder for vim.

6.  Raimondi's [delimitMate](https://github.com/Raimondi/delimitMate) - I also use this all the time, passively. This plugin provides automatic closing of quotes, parenthesis, brackets, among others.

7.  Godlygeek's [tabular](https://github.com/godlygeek/tabular) - I use this when needed especially with tables. See [vimcast](http://vimcasts.org/episodes/aligning-text-with-tabular-vim/).

8.  Majutsushi's [tagbar](https://github.com/majutsushi/tagbar) - I seldom use this when needed. This provides a sidebar to vim for all tags in the current file, among others.

9.  Nathanaelkane's [indent-guides](https://github.com/nathanaelkane/vim-indent-guides) - Indent guides for vim.

10. Tpope's [markdown](https://github.com/tpope/vim-markdown) - A markdown highlighter in vim.

11. Mattn's [emmet](https://github.com/mattn/emmet-vim) - A support for expanding abbreviations.

    Example: type in `html:5`

    and press `Ctrl y` and `,`

    The above will become

    ~~~ html
    <!DOCTYPE html>
    <html lang=en>
    <head>
      <meta charset=UTF-8>
      <title></title>
    </head>
    <body>
      
    </body>
    </html>
    ~~~

12. Rstacruz's [sparkup](https://github.com/rstacruz/sparkup) - Similar to emmet but can do more.  For examples, see [here](https://github.com/rstacruz/sparkup#examples).

13. Valloric's [YouCompeleteMe](https://github.com/Valloric/YouCompleteMe) - A code completion engine for Vim. See animated screenshot below:

    ![](https://camo.githubusercontent.com/1f3f922431d5363224b20e99467ff28b04e810e2/687474703a2f2f692e696d6775722e636f6d2f304f50346f6f642e676966)
    *Img src: https://github.com/Valloric/YouCompleteMe*

14. [Powerline](https://github.com/powerline/powerline) - This is a statusline plugin for vim, and provides statuslines and prompts for several other applications, including zsh, bash, tmux, IPython, Awsome and Qtile.

15. Mattn's [gist](https://github.com/mattn/gist-vim) - A vimscript in creating gists in gist.github.com. To create gist, one can just `:Gist` and `ENTER`. Then, it will return the link to your gist. This however, requires [webapi](https://github.com/mattn/webapi-vim) for this plugin to work.

There are other plugins that I use passively. Some I have not yet explored. For complete list of plugins that I use, see my [dotfiles](https://github.com/timhtheos/dotfiles/blob/master/vimrc).

## Terminal

1.  iTerm 2 - When in Mac, I use iTerm 2.

2.  guake - When in Linux, I use guake.

## Shell

1.  ZSH - is a shell designed for interactive use.

2.  Bourne-again shell - *Bash* is a Unix shell as a free software replacement for Bourne shell.

3.  Shell plugins that I use include:

    a) Junegunn's [fzf](https://github.com/junegunn/fzf) - It is a general-purpose command-line fuzzy finder.

    ![](https://camo.githubusercontent.com/0b07def9e05309281212369b118fcf9b9fc7948e/68747470733a2f2f7261772e6769746875622e636f6d2f6a756e6567756e6e2f692f6d61737465722f667a662e676966)
    *Img src: https://github.com/junegunn/fzf*

    When I am lost where I am with vim, I just use fzf's plugin for vim with `:FZF`.  This does not create vim buffer though, so as much as possible, I stick with ctrlp vim plugin.

## ZSH Manager

1.  robbyrussell's [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) - A community-driven framework for managing your zsh configuration. Includes 180+ optional plugins (rails, git, OSX, hub, capistrano, brew, ant, php, python, etc), over 120 themes to spice up your morning, and an auto-update tool so that makes it easy to keep up with the latest updates from the community. 

2.  oh-my-zsh plugins that I use

    a) *z* - jump around

    b) *git* and other git- plugins

## Mux / Multiplexer

1.  GNU Screen - In remote servers, I use screen to manage my sessions.

2.  tmux - In my local desktop environment, I use tmux to manager different sessions and projects.

## Tmux Plugins

1.  Powerline

2.  Thewtex' [tmux-mem-cpu-load](https://github.com/thewtex/tmux-mem-cpu-load) - CPU, RAM memory, and load monitor for use with tmux.

For my .tmux.conf file, please check my [dotfiles](https://github.com/timhtheos/dotfiles/blob/master/tmux.conf).

## Dotfiles Manager

I use [rcm](https://github.com/thoughtbot/rcm). It is a management suite for dotfiles. My dotfiles can be found [here](https://github.com/timhtheos/dotfiles).

## Web Browsers

1.  Chrome - only for browsing.

2.  Firefox - only for theming and debugging.

## Music Daemon and Player

1.  mpd - music player daemon

2.  ncmpcpp - mpd client/player inspired by ncmpc

For installation, see [installation guide article](article/install-mpd-ncmpcpp-on-osx-yosemite).

## Webservers

1.  Nginx - I use now in my remote server as well on my local.

2.  Apache2 - I use before.

## Others

1.  vagrant - I use vagrant with puppet provisioner on my local development.

2.  console - I use console all the time. I have crazy plans to do everything on console.

3.  bash - I just love writing bash scripts.

There are other things that I did not mention here. I will just add into this list as time permits.
