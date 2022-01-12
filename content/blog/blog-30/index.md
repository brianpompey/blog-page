---
title: React Native --- Pressable vs Touchable?
date: "2022-01-01T22:12:03.284Z"
---

Over the last few years, I've spent a lot of time playing around with Reactjs and one day I stumbled upon React Native. I think everybody who aspires to be a developer in recent times has imagined being a big time app developer, working on some of the apps that we use and enjoy everyday. Back then, it seemed so simple; before I knew about different languages and backend vs frontend, I thought that's what a developer was and that's a big part of what brought me to the field.

I haven't taken the leap yet to learn Swift, Kotlin or any of the Native app development languages. But as I am already pretty comfortable with React, I figured the best entry point for me would be React-Native, so that's why we're here. I've already worked on some personal and portfolio projects so far so I wouldn't call myself a COMPLETE beginner, but as we know about learning, it never ends so I know I've only really scratched the surface.

Today I'm gonna discuss one of the most aspects of a mobile application -- the things that we have to press or touch or click. When dealing with the web, we're accustomed to creating and styling buttons, but with modern mobile apps, there is so much more functionality that must be considered, and React gives us some options, specifically Pressable and Touchable.

When building an application with React Native, the goal is for the user to have a seamless experience that comes as close as possible to "native", meaning an app that was built with Swift for ios or Kotlin for Android. The goal is to avoid the "tells" or obvious clues that prove it was built using an alternate language, and that is why React constantly updates with new built in functionality to improve on this. 

First we used the Touchable component. Touchable components capture touch gestures and provide feedback when the gesture is recognized. React Native provides four built in versions of the Touchable component: TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, and TouchableWithoutFeedback. TouchableHighlights are similar to buttons on the web and darken when clicked. TouchableNativeFeedback uses its own drawable state to display touch feedback on Android. TouchableOpacity gets lighter when clicked. TouchableWithoutFeedback handles the touch gesture without any feedback. 


-----------------------------
        from pytube import YouTube

-----------------------------
Pytube is a lightweight Python library for downloaded Youtube videos. 

Next, we'll create a variable "link", where the user input for the Youtube link will be saved. Also another variable "yt" which will take the link variable and pass it through the Youtube library.


-----------------------------
        link = input("Enter the link: ")

        yt = YouTube(link)

-----------------------------


Next, we'll print some information to be displayed once the youtube video is accessed.

-----------------------------

        print("Title: ",yt.title)



        print("Number of views: ",yt.views)



        print("Length of video: ",yt.length,"seconds")



        print("Description: ",yt.description)



        print("Ratings: ",yt.rating)

-----------------------------


And lastly, to work on the streams. First so we can get an understanding of what's going on, lets print them all out.

-----------------------------
        print(yt.streams)

-----------------------------

This gives us a view of all available streams to download including audio and video only. We can filter them out and access which ones we want but for the purpose of this we'll keep this simple. 

-----------------------------

        ys = yt.streams.get_highest_resolution()

-----------------------------

We set a variable to save the stream with the highest video quality and next we download and optionally choose out location!

-----------------------------

        ys.download()

        or

        ys.download(LOCATION)

-----------------------------