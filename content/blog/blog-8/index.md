---
title: OOP in JavaScript
date: "2020-11-10T22:12:03.284Z"
---
One of the most important subject in all of programming in the idea of Object Oriented Programming. Many languages are built with “OOP” in mind. Based on what I’ve learned about OOP in Ruby and JS, the point of the standalone object is to separate the concerns of a single object or model and allow them to handle themselves. This is great because it helps to keep the code organized; you can even separate each into its own file so you don’t have a “index.js” page with way too many lines of code.
In JavaScript we learn to define an object with a “class” like:

The constructor function refers to how the object is created (similar to “initialize” in Ruby) using the arguments to represent the object’s attributes, and the “this” keyword is used to refer to the current object that it belongs to.
Classes also allow us to use 3 types of methods: getters, setters, and static. It seems pretty self-explanatory but ‘getter’ methods allow us to ‘get’ attributes from an object:

