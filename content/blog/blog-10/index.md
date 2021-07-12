---
title: Functional vs Class Components? What’s the difference?
date: "2020-12-10T22:12:03.284Z"
---
Functional, Presentational, Stateless…. Over the course of studying ReactJS, because it’s relatively new and everchanging, you will sometimes find different terms used to describe similar things, and if you’re anything like me, it will confuse the heck out of you!
While React Hooks are currently the “hot” option to bridge the gap, “traditional” React (whatever that means right?) will require you to learn about the difference between a Functional or Presentational or Stateless Component and a Class or Stateful Component. Somewhere along the lines you have seen two or more of these terms in contrast to eachother and it’s very important to know the differences.
In React there are 2 ways for a component to receive information: props and state. Real quick, the difference between the two is well first of all props are read only. You pass the information form a parent component in the form of props and it is meant to just be displayed on the page. On the other hand, state is alive!! Really, it does. You use state when you the information being passed in meant to change. Something as simple as a counter app will have state set as an opening number and however it’s supposed to change, whether by a clicker or by time, it will be updated to display the new count “state”.
Got it? Hope So.
Moving on…..
Functional Components are Stateless Components.
Yeah literally. The name is the best guide to defining them. They accept props only and display them on the page. Also, because they are named so well, functional components are “functions”. They accept the props as an argument to the function and return JSX. Pretty simple right?
On the other hand, class components are written as ES6 classes. They accept state and can have lifecycle methods (think componentDidMount, componentWillUnmount etc.) Class Components must be extended by React.Component and generated from a “render” function.
Generally for cleaner code, you should use as many functional components as possible until you absolutely need state. Functional Components are simpler to read/write! When state is necessary you may convert the functional component to a class one using the required syntaxes (ES6).