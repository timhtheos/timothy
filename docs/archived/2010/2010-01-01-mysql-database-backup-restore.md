---
layout: archive
title: MySQL Database Backup and Restore
date: 2010-01-01
nav_order: -20100101
parent: 2010
categories:
  - development
tags:
  - ubuntu
permalink: article/mysql-database-backup-and-restore
---

MySQL database backup and restore using a command line interface (cli) do not need logging in to the mysql console. This is simply because the command itself logs into it.

## Backup

The command to use:

```
mysqldump -h host -u user -p[password] database > destination
```

The ones in `[ ]` are optional. The password is either optionally inputted in after the `-p` without any space, or provided after the execution of the command.

The database may be a single database. If multiple database is to be backed-up, use the following:

```
mysqldump -h host -u user -p[password] --databases db1 db2 [...] > destination
```

`db1`, `db2` and `[...]` are names of the databases. We can have as many
database as we want.

Should all databases be backed-up, use this instead:

```
mysqldump -h host -u user -p[password] --all-databases > destination 
```

The destination can be a filename saved in a current directory or a filename with an absolute path. A filename can be of any extension.

## Restore

The command to use:

```
mysql -h host -u user -p[password] database < source
```

Notice the difference between backup and restore command: `mysqldump` and `>` to backup; and `mysql` and `<` to restore. The rest should be the same.

## Export Selected field(s) in a table into a CSV file

```
export selected field(s) in a table into a csv file
SELECT [* | field1[, field2[, field3...]]] OUTFILE '/tmp/file.csv'
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
ESCAPED BY '\\'
LINES TERMINATED BY '\n'
FROM table;
```
