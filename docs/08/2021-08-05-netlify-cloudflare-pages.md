---
layout: post
title: Migrate from Netlify to Cloudflare Pages
date:   2021-08-05
nav_order: -20210805.1
# parent: August
# grand_parent: 2021
permalink: /2021/08/migrate-from-netlify-to-cloudflare-pages
categories:
  - devops
sticky: true
teaser: >
  Since I moved to Jekyll in 2017, I host my site for free with Netlify.
---

{% include toc.html %}

Since I moved to Jekyll in 2017, I host my site for free with Netlify.
However, my recent DNS management move from name.com to Cloudflare, leads
me to learn an alternative to Github Pages and Netlify: Cloudflare Pages,
also for free.

## Assumption

The assumption when one is using Github pages, is that the repository
being used is Github.

The assumption when one is using Netlify, is that the repsitory being
used is either Github, GitLab, or Bitbucket.

Either case, the version control used is `git`.

With Cloudflare pages, you would need Github. As of posting, they are not
supporting GitLab and Bitbucket.

For GitLab or Bitbucket, you may want to move your project to Github.

## Preparation

In preparation, all you just have to do is to take note of the following
in Netlify project's build settings.

1. Go to your project.

2. Go to `Site settings`.

3. Go to `Build & Deploy`.

4. Note the `Build settings`.

5. Note the `Branches`.

## Create project in Cloudflare pages

1. Using your existing cloudflare account, go to your [Dashboard](https://dash.cloudflare.com/).

2. In the right side, click `Pages`.

3. Click `Create a project`

4. Click `Connect GitHub account`.

5. In the next page `Install Cloudflare Pages`, choose GitHub account,
team or organization.

6. In the next page `Install & Authorize Cloudflare Pages`, select
whether to authorize `All repositories` or `Only select repositories`,
then click `Install & Authorize`.

7. In the next page `Confirm access`, you will be asked to confirm your
password.

8. In the next page `Create a project from your GitHub repository`,
select a repository, and click `Begin setup`.

## Setup builds and deployments

After creating project in Cloudflare pages, you will be asked to setup
builds and deployments.

1. Type in `Project name` in the field. The name will be the also used as
a subdomain of your project, i.e., `<project-name>.pages.dev`.

2. Choose branch in `Production branch`. Base it on your [notes in
Preparation](#preparation).

3. Choose framework in `Framework preset`. In this case, my site is a
`Jekyll` site.

4. Supply `Build command`. (cf. [Notes in Preparation](#preparation))

5. Supply `Build output directory`. (cf. [Notes in
Preparation](#preparation))

6. Click `Save and Deploy`.

7. The next `Building and deploying` you can see live logs during
your application's deployment. You may `Cancel` deployment or `Continue
to project`.

## Builds

Every build creates a dedicated build url
`<random-hash>.<project-name>.pages.dev`

I don't see this setting in Netlify. Instead, Netlify has an option to
build by branch. Or, perhaps I haven't expored Netlify that much with
their environment settings.

## SSL Certificates

Netlify's SSL certificates are issued using `Let's Encrypt`.

Cloudflare pages', using `Cloudflare, Inc.`

Both are free.

## Conclusion and observations

Cloudflare pages' default subdomain name is way cooler than that of
Netlify. Both Netlify and Cloudflare pages, allow adding custom domain
name.

With my site, Cloudflare pages build takes 5 to 6 minutes to finish,
while in Netlify, it takes a way shorter time to build.

However, upon testing with another project (not my site), the build got
finished for 3 minutes only.

It is a case to case basis for applications, but it's definitely longer
to build with Cloudflare pages.

Unlike Netlify, there is no setting in Cloudflare pages to
automatically redirect supplied subdomain name to the primary domain
name; likewise, to redirect `www` to `non-www` or the other way arround.

I was able to manage to redirect `www` to `non-www` using cloudflare's
`Page Rules` itself. I only get 3 Page Rules with my cloudflare for my
free account, and using one, leaves me with 2 remaining.

Perhaps this is a way for cloudflare to make sure their free users will
ran out of `Page Rules` and purchase more slots to it.

Lastly, Netlify claims that their projects don't need cloudflare because
the pages being served are already static HTML pages.

I agree.

However, one can always setup cloudflare with Netlify.

But then again, I switched to Cloudflare pages, and using Cloudflare
pages with Cloudflare itself, despite slow build time, is so far
tolerably cooler.
