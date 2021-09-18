---
title: Python Project a Day - 1
date: "2021-08-01T22:12:03.284Z"
---

So I've been learning Python for a few years now on and off and I've got a lot of the basics down. But one of the main issues we tend to face when learning a new programming language is the question: "How do I use this stuff??"

Application of new skills is something that we have to keep up with and I believe the best way to do that is to ..... make projects! So in this series, I'm going to commit to building a new project in Python everyday so I can learn to apply different techniques and technologies in real time.

First up, I created a simple Youtube Video Downloader script. Many of us grew up watching youtube and needing good wifi to stop the videos from buffering so this project brought me back to the good old days when I wish I had known how to use it. 

To start, we're using a Python library called pytube.

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