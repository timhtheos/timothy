---
layout: archive
title: How to setup Virtual Host in Ubuntu 11.10 via terminal or Putty
date:   2011-10-13
nav_order: -20111013
parent: 2011
categories:
  - development
tags:
  - ubuntu
permalink: article/ow-to-setup-virtual-host-in-ubuntu-1110-via-terminal-or-putty
---

This article is a personal recollection of what I did when I installed a virtual host in my remote instance server running Ubuntu 11.10. It is presumed that Apache server is setup and running. Also make sure that the domain name's `A` record in the DNS Management of your domain name, is already pointing to the IP address of the instance server, otherwise, you may edit your hostfile to temporarily point your domain to your server's IP address, locally.
 
Go to `/etc/apache2/sites-available/`
 
```
cd /etc/apache2/sites-available
```
 
Create a configuration file for the virtual host that you want to create. I used the domain name (as the filename) which points to the said virtual host - in this case, `timothyae.com` as a filename. Any filename will do. To create/edit, you can use any editor that you want. I used `nano`. Also, you need a "super user" permission.
 
```
sudo nano timothyae.com
```
 
The `timothyae.com` above can be renamed to whatever filename you want such as timothyae.com.conf, if you want that kind of setup.
 
In the nano editor, input the following basic configuration.
 
```
<VirtualHost *:80>
ServerName timothyae.com 
ServerAlias www.timothyae.com
ServerAdmin admin@timothyae.com
DocumentRoot /var/timothyae.com/html
</VirtualHost>
```
 
Save changes to the file `^X`.
 
Make sure that the `DocumentRoot` is an existing directory, otherwise, create it.
 
```
cd /var
sudo mkdir -p timothyae.com
sudo chown timothy timothyae.com
chmod 777 timothyae.com
cd timothyae.com
mkdir -p html
```
 
The above, sets current directory (cd) to the `/var` and creates (mkdir) `timothyae.com` directory. `chown`, changes the ownership of `timothyae.com` directory from `super user` (since we created the directory using sudo) to `timothy`. Don't forget to change `timothy` to your username. `chmod` changes permission of `timothyae.com` directory to a public directory. As you see here, I did not use `sudo` anymore because the target directory is already owned by `timothy`.

Now that we have the virtual host configuration file and the directories setup, we can now enable the site.
 
```
sudo a2ensite timothyae.com
```
 
It is `sudo a2ensite timothyae.com` because our configuration file is `timothyae.com`. In case you want to disable your site, the opposite of `a2ensite` is `a2dissite`.  Note that enabling and disabling a site configuration will make changes in `/etc/apache2/sites-enabled` by creating a symlink there.
 
## Restart apache
 
```
sudo service apache2 restart
```
 
After restarting `Apache`, go to `/var/timothyae.com/html/` and add a file `index.html` or `index.php`.  Add some text inside it and check your website in your browser.
