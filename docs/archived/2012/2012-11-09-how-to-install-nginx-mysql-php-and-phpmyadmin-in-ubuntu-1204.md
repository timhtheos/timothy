---
layout: archive
title: How to install Nginx, MySQL, PHP and phpmyadmin in Ubuntu 12.04
date: 2012-11-09
nav_order: -20121109
parent: 2012
categories:
  - development
tags:
  - ubuntu
  - linux
  - nginx
  - mysql
  - php
  - phpmyadmin
permalink: article/how-to-install-nginx-mysql-php-and-phpmyadmin-in-ubuntu-1204
---

{% include toc.html %}

This tutorial is a personal knowledge based on compilation of several tutorials on the web that worked for me on how to install LEMP and PHPMyAdmin in Ubuntu 12.04.  LEMP stands for Linux, Nginx, MySQL and PHP.  PHPMyAdmin by default is for either Apache2 or Lighttpd web servers.  Thus, this tutorial, also covers how to install PHPMyAdmin in Nginx web server.

Assuming that you have thoroughly updated your Ubuntu 12.04, let's begin directly with the installation.

## Install Nginx

### The command

```
sudo apt-get install nginx
```

**Notes**
: The default root directory of nginx for public html is found in `/usr/share/nginx/www/`.
: The nginx service does not start on its own, by default.

## Install MySQL

### The command

``` 
sudo apt-get install mysql-server mysql-client php5-mysql
```

**Notes**
: If the server is a live server, it is recommended to set the root password.
: In cases like you missed this chance, you can do so later in mysql shell.

## Install PHP

### The command

```
sudo apt-get install php5 php5-fpm php-apc
```

If you wish to run Drupal and use Drush, install `php5-cli`.

```
sudo apt-get install php5-cli
```

**Notes**
: `php-apc` is optional but is required for phpmyadmin installation.
: `php5-fpm` is our FastCGI daemon.

## Install phpmyadmin

### Restart php5-fpm. 

```
sudo service php5-fpm restart
```

### The command to install

```
sudo apt-get install phpmyadmin
```

**Important**
: It will ask for webserver to reconfigure automatically, select `None`; and configure database for phpmyadmin with `dbconfig-common`, select `No`.

## Configure Nginx and PHP

### Start nginx

```
sudo service nginx start
```

### Open the default virtual host file.

```
sudo nano /etc/nginx/sites-available/default
```

Apply the following changes:

-  set the root from /usr/share/nginx/www to /var/www/html
-  add index.php as the first of items in the index line
-  change the server_name from localhost to your domain name or IP address.  Multiple domain names can be put therein, e.g., server_name www.timothyae.com timothyae.com
-  uncomment this line:  location ~ \.php$ {
-  uncomment this line:  fastcgi_split_path_info ^(.+\.php)(/.+)$;
-  uncomment this line:  fastcgi_pass 127.0.0.1:9000;
-  uncomment this line:  fastcgi_index index.php;
-  uncomment this line:  include fastcgi_params;
-  make sure you close the { in location ~ \.php$ { with } at the end right after include fastcgi_params;
 

### Restart nginx

```
sudo service nginx restart
```

### Check if `cgi.gix_pathinfo` is set to `0` in your `php.ini` file

If it is, then there is no need to change it; otherwise, if commented, uncomment it and set to `0`.

```
sudo nano /etc/php5/fpm/php.ini
```

### Save and exit, and restart php-fpm

```
sudo service php5-fpm restart
```

## Pause & Review

Let us pause and review what we have done so far.

1. We have installed nginx, mysql (with root password), php and phpmyadmin.
2. We have configured nginx and set its root to /var/www/html.
3. We have set our domain as www.timothyae.com and timothyae.com
4. We have configured php as well.

The next steps will be the creation of virtual host and other things.  Please take note that in nginx, a virtual host's server_name cannot be the same to other's virtual host's server_name.

In here, our root is in /var/www/html and we will be planning to put all vhosts under `/var/www/<site>/html` where `<site>` is the site directory and the `html` is the `root` directory.  This is to allow each host to have a private space to put some of its stuff.

## Create Virtual Host for phpmyadmin

### Go to the configuration directory in the /sites-available/

```
cd /etc/nginx/sites-available
```

### Create a basic nginx vhost configuration file

```
sudo nano phpmyadmin
```

### Virtual Host configuration

Paste the following:

```
server {
       listen 80;
       server_name admin.timothyae.com;
       root /var/www/html;
       index index.php index.html;
       location = /favicon.ico {
                log_not_found off;
                access_log off;
       }
       location = /robots.txt {
                allow all;
                log_not_found off;
                access_log off;
       }
       # Make sure files with the following extensions do not get loaded by nginx because nginx would display the source code, and these files can contain PASSWORDS!
        location ~* \.(engine|inc|info|install|make|module|profile|test|po|sh|.*sql|theme|tpl(\.php)?|xtmpl)$|^(\..*|Entries.*|Repository|Root|Tag|Template)$|\.php_ {
                deny all;
        }
       # Deny all attempts to access hidden files such as .htaccess, .htpasswd, .DS_Store (Mac).
       location ~ /\. {
                deny all;
                access_log off;
                log_not_found off;
       }
       location ~*  \.(jpg|jpeg|png|gif|css|js|ico)$ {
                expires max;
                log_not_found off;
       }
       location ~ \.php$ {
                try_files $uri =404;
                include /etc/nginx/fastcgi_params;
                fastcgi_pass 127.0.0.1:9000;
                fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
       }
 
        location /phpmyadmin {
               root /usr/share/;
               index index.php index.html index.htm;
               location ~ ^/phpmyadmin/(.+\.php)$ {
                       try_files $uri =404;
                       root /usr/share/;
                       fastcgi_pass 127.0.0.1:9000;
                       fastcgi_index index.php;
                       fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                       include /etc/nginx/fastcgi_params;
               }
               location ~* ^/phpmyadmin/(.+\.(jpg|jpeg|gif|css|png|js|ico|html|xml|txt))$ {
                       root /usr/share/;
               }
        }
}
```

Notice as you can see in the 3rd and 4th line the following

```
server_name admin.timothyae.com;
root /var/www/html;
```

The 3rd line is setting-up our phpmyadmin to be only available in a sub-domain admin.timothyae.com.  You can set this to any domain or sub-domain that you want.  You cannot however, set this to the main domain or to any domain that is used already in the default configuration file or in any vhost configuration file.  Please take note also that, if you use a sub-domain or domain, you have to point the A record of its DNS to the server's IP address.

The 4th line, if you have noticed, that its root is set to the default's root too.  In this case, when someone visits the domain name in server_name of the default, the same content will be displayed when visiting the admin.timothyae.com.

The point is that the default server_name (domain name) be the server's IP address (public IP address) and the phpmyadmin be a sub-domain of any domain vhosted in the same server.

### Enable the virtual host phpmyadmin

```
ln -s /etc/nginx/sites-available/phpmyadmin /etc/nginx/sites-enabled/phpmyadmin
```

### Restart nginx

```
sudo service nginx restart
```

## Try it out!

Copy default pages from the old nginx root to the new root.

```
cd /var/www/html
cp /usr/share/nginx/www/* .
```

Create a php info page (assuming you are already in /var/www/html).

```
sudo nano info.php
```

Add the following line in the info.php file.

```
<?php phpinfo(); ?>
```

Save and exit.

You can see the welcome page by nginx in your domain name set in your default's server_name.

You can also see the page info.php when you go to the same domain /info.php

You can also visit the phpmyadmin by going to admin.timothyae.com/phpmyadmin

Lastly, notice that when you go to admin.timothyae.com, you will see the welcome page by nginx.

If you get an error, just restart nginx

```
sudo service nginx restart
```

Your LEMP stack + phpmyadmin are now setup and configured on your server.
 
## Other optional install

### PHP Curl

```
sudo apt-get isntall php5-curl

Restart nginx and php5-fpm.

```
sudo service nginx restart
sudo service php5-fpm restart
```
