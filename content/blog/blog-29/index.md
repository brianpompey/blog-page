---
title: GCPPPPP
date: "2021-03-09T22:12:03.284Z"
---

In the SQL series today we'll go over sorting and grouping using SQL. SQL isn't picky about how it returns data to you, so it is very helpful to be able to manipulate the data so it can be presented the way you need it to look.

First, we'll cover sorting. The key word for sorting in a SQL database is "ORDER BY". Let's say we want a list of all players on a team "basketball_team" in order of their heights from tallest to shortest:

SELECT * FROM basketball_team ORDER BY height DESC;

The default is "ASC" or ascending order but you can alternatively use that if you want.


------------------------------------------------------

