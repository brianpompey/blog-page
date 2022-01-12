---
title: React Native --- Pressable vs Touchable?
date: "2022-01-01T22:12:03.284Z"
---

Over the last few years, I've spent a lot of time playing around with Reactjs and one day I stumbled upon React Native. I think everybody who aspires to be a developer in recent times has imagined being a big time app developer, working on some of the apps that we use and enjoy everyday. Back then, it seemed so simple; before I knew about different languages and backend vs frontend, I thought that's what a developer was and that's a big part of what brought me to the field.

I haven't taken the leap yet to learn Swift, Kotlin or any of the Native app development languages. But as I am already pretty comfortable with React, I figured the best entry point for me would be React-Native, so that's why we're here. I've already worked on some personal and portfolio projects so far so I wouldn't call myself a COMPLETE beginner, but as we know about learning, it never ends so I know I've only really scratched the surface.

Today I'm gonna discuss one of the most aspects of a mobile application -- the things that we have to press or touch or click. When dealing with the web, we're accustomed to creating and styling buttons, but with modern mobile apps, there is so much more functionality that must be considered, and React gives us some options, specifically Pressable and Touchable.

When building an application with React Native, the goal is for the user to have a seamless experience that comes as close as possible to "native", meaning an app that was built with Swift for ios or Kotlin for Android. The goal is to avoid the "tells" or obvious clues that prove it was built using an alternate language, and that is why React constantly updates with new built in functionality to improve on this. 

First we used the Touchable component. Touchable components capture touch gestures and provide feedback when the gesture is recognized. React Native provides four built in versions of the Touchable component: TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, and TouchableWithoutFeedback. TouchableHighlights are similar to buttons on the web and darken when clicked. TouchableNativeFeedback uses its own drawable state to display touch feedback on Android. TouchableOpacity gets lighter when clicked. TouchableWithoutFeedback handles the touch gesture without any feedback. 

Pressable was introduced for React Native 0.63 as a new way to handle touch. Pressable components are "smarter" than Touchable ones, and can detect different stages of press interaction on any of its defined children, similar to lifecycle methods. When a Pressable component is "pressed", the onPressIn method is activated. If the finger stays on the pressable for longer than 500ms, the onLongPress method is activated. When the pressable is released, the onPressOut method is activated. 

Pressable components have all the functionality of Touchable ones without the complicated options, so it is a better option. 

