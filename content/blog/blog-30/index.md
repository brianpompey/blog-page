---
title: React Native --- Pressable vs Touchable?
date: "2022-01-01T22:12:03.284Z"
---

Over the last few years, I've spent a lot of time playing around with Reactjs and one day I stumbled upon React Native. I think everybody who aspires to be a developer in recent times has imagined being a big time app developer, working on some of the apps that we use and enjoy everyday. 

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