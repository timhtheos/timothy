---
layout: post
title: DNS management with Cloudflare, etc
date:   2021-08-05
nav_order: -20210805
# parent: August
# grand_parent: 2021
permalink: /2021/08/dns-management-with-cloudflare-etc
categories:
  - devops
sticky: true
teaser: >
  I had DNS management managed by my domain registrar `name.com` for more
  than a decade. Having been exposed to cloudflare for years, I have
  finally decided to move DNS management to cloudflare.
---

{% include toc.html %}

I had DNS management managed by my domain registrar for more than a
decade. Having been exposed to cloudflare for years, I have finally
decided to move DNS management to cloudflare.

## Plans and pricing

Plans include the following:

- Free
- Pro
- Business
- Enterprise

I signed-up for a `[free plan](https://www.cloudflare.com/en-gb/plans/)`.

The `Free` plan includes the following:

- Fast, easy-to-use DNS
- Free automated SSL certificates
- Global content delivery network (CDN)
- Unmetered mitigation of DDoS attacks with up to 67 Tbps capacity
- Up to 100k Workers requests and 30 scripts
- 3 Page Rules

Originally, I only after for `DNS` management and `Page Rules`.

## DNS management

Upon sign-up, most of my domain name's existing DNS entries were imported
automatically. Some, I added manually.

I had to change nameservers from name.com to cloudflare.

From (name.com):
```
ns1.name.com
ns2.name.com
ns3.name.com
ns4.name.com
```

To (cloudflare):
```
hans.ns.cloudflare.com
molly.ns.cloudflare.com
```

All of my DNS entries are proxied by cloudflare, meaning, real IP addresses
aren't exposed, with exceptions to `MX` entries.

## DNSSEC

I enabled DNSSEC protection on my domain name. This protects against forged
DNS answer. DNSSEC protected zones are cryptographically signed to ensure the
DNS records received are identical to the DNS records I published.

## CNAME Flattening

This returns the IP address of the value of a CNAME entry, instead of the
name value itself.

## Page rules

I am only allowed to get 3 free page rules' entries.

I used 1 for to 301 redirect `www` to `non-www`. Before, I had this managed
using nginx.

5 additional page rules in excess of 3 free, costs $5/month. This is
without the need to upgrade the subscription plan from `Free` to `Pro`.

## SSL/TLS

I set my SSL/TLS encryption mode to `Full`.

I also set `Always Use HTTPS` to `On`.

Further, I set HTTP Strict Transport Security (HSTS) to `On` with the following
settings:

```
Status: On
Max-Age: 0 (Disable)
Include subdomains: Off
Preload: Off
```

Also, I set automatic HTTPS Rewrites to `On`. This helps fix mixed content by
chaning `http` to `https` for all resources or links on my website that can be
served with HTTPS.

I had this before setup with nginx `proxy_pass`'s `sub_filter`.

## Conclusion

With added protection and features, cloudflare is a very good option. I can do
everything and more with added security, speed, caching, among others.
