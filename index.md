---
layout: home
title: Home
---

# Welcome to My Blog

This is my personal blog where I share my thoughts, experiences, and knowledge about various topics.

## Recent Posts

{% for post in site.posts %}

- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%B %d, %Y" }}
  {% endfor %}

## About Me

I'm a passionate developer who loves to write and share knowledge. This blog is built using Jekyll and hosted on GitHub Pages.

Feel free to explore my posts and reach out if you have any questions!
