---
layout: post
title: Git filter-branch
date: 2017-06-19
permalink: article/git-filter-branch
categories: technology git filter-branch
disqus:
  path: git-filter-branch
---

## Scenario

### Let's assume the following:

1. Original repository: `A`.
2. Other repository: `B`.
3. Directory in `A` that we need to copy with commit history: `www/modules/custom/sms_gateway`
4. Directory in `B` that we need to copy into the files and commits from `A`:  git root directory

### Let's start supposing:

Suppose, you want to move a directory from a repository `A` to be merged
into another repository `B`.  The noob approach would be just to copy
the contents of the said directory from `A` to (that of) `B`.

That however, will render all efforts of commits made in the direcotry in
`A` to just one commit in `B`.  This is something we want to avoid
especially to open source projects where commit history is important to
the developers who made them, and to the company they work in as credits.

Suppose, you want to retain git commit history made in repository `A` in
that particular directory.  This can be done by one-by-one re-committing
changes made in that directory in `A` to `B`.

Soon you will realize that you re-wrote the commit history made in the
said directory in `A` to `B` with you as the committer, author, and the
dates of the commits were done just now, not on the date those commits
were originally made in `A`.

That can be solved, by setting up the env variable for git committer
name, author name, and the date committed.  This however, would be very
tedious.

## Simple solution

Let's use git's `filter-branch` command.

## Steps

1. Clone `A`. Let's clone it in `/var/www/demo/`.  Any path will do.  I
  would suggest to clone a new one, than to use existing one where you
  currently work on.
  ```
  git clone A-git-url
  ```

2. Go to `A`.

  ```
  cd /path/to/A
  ```

3. Checkout to the branch you want.  E.g., `develop`.

4. Let's remove the remote origin. This is to make sure we don't
  accidentally push changes we will about to make.

  ```
  git remote remove origin
  ```
5. Now, let's do the filter-branch. This process will move the directory
  set in the filter-branch command, to the root of the repository. This
  means, all other files will be removed, and the ones that are left are
  the ones in the branch set in filter-branch.

  ```
  git filter-branch --subdirectory-filter www/modules/custom/sms_gateway -- --all
  ```

6. Now, before we go ahead and merge the files and commit history to `B`,
  we need to have a new clone repository `B` first.  Same with `A`, it's
  better that we clone a new one, than working on the existing one.

  ```
  git clone B-git-url
  ```

7. In `B` git checkout to the branch of your choice and then branch out
  to a new branch to do the merging of commits there.  You can do this to
  the original branch, but it's better to branch out to a different
  branch. There is no need to remove the remote origin from the newly
  cloned `B`.  Let's say, you branched out to `feature-commits-from-A`
  branch.

8. In `B` add a new remote to be named to whatever you want, e.g.,
  `from-A`.  Confirm remotes, with `git remote -v`.  You should see,
  aside from `origin`, the `from-A`.  The remote url would be the local
  path of the newly cloned `A` earlier. The easiest way to do this is to
  go to /path/to/A and then `pwd` in its root.

  ```
  cd /path/to/A
  pwd (then copy the result)
  cd /path/to/B
  git remote add from-A /path/to/A
  ```

  Again, in the last command, the `from-A` is the alias of the remote
  you just added.  `/path/to/A` is the local path of you newly cloned
  `A` you did a while ago.  Note that you should do this inside the newly
  cloned `B`.

9. Now, let's do the merging.

  ```
  git fetch from-A
  git merge from-A/feature-commits-from-A
  ```

  If you encounter some error related to unrelated histories, you should
  add `--allow-unrelated-histories` in the second command.

  ```
  git merge from-A/feature-commits-from-A --allow-unrelated-histories
  ```

10. Confirm commit histories.  In `B` in branch `feature-commits-from-A`,
  just `git log` and see the commits.  You can check back in `A` for
  reference.

11. If you are satisfied, merge back branch `feature-commits-from-A` to
  the original branch, e.g, `develop`, or `8.x-1.x` - to the branch where
  `feature-commits-from-A` was branched out.

That's it.

For clarification(s), and/or question(s), please let me know.
