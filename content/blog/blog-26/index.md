---
title: SQL Basics
date: "2021-02-12T22:12:03.284Z"
---
SQL or Structured Query Language is a domain specific language that I think everybody should have some level of familiarity with. SQL allows you to search through or "query" data whether small or large and it can be an extremely useful tool for software engineers, data scientists, business analysts, and the lists goes on. Data is an essential part of today's business world and the ability to comb through large quantities of data and access it using code can be an asset.

Today I'm going to go over some of the basics of SQL that any beginner should get familiar with...

For starters, let's image we have a table called "people" with diffent fields of information and tons of data. To retrieve that whole table and all of its data, we use a simple SQL query like:

SELECT * FROM people;


------------------------------------

Now let's say we want to retrieve the ages of all people. Actually, lets say we want their names and ages. The query goes as follow:

SELECT name,age FROM people;

-----------------------------------

Next, let's see how we retrieve the names of all people who are over 18 years old.

SELECT name FROM people where age>18;

---------------------------------------

Now what if I want the names of people older than 21 and weighing less than 180 pounds?

SELECT name FROM people where age>21 and weight<180;

-----------------------------------------

