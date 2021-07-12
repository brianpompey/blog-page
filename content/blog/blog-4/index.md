---
title: Finally out of Ruby on Rails !
date: "2020-05-11T22:12:03.284Z"
---
So I'm coming up to a whole year in the self paced program at Flatiron and I've finally reached the end of the Ruby on Rails section. I feel a little down, thinking it took me about a year to get out of Ruby, but at the same time I genuinely feel like a developer now. Meaning I know how to use google to find out correct syntax and I'm not totally confused by what I see!

This project required me to put that on display at every step of the way and I was amazed every time I figured out a solution without needing any assistance from a teacher. Now whenever I needed a little guidance they were extremely helpful (shoutout to Dustin, Ayana, and Alice) but I'd like to think I figured out most things on my own (with Google haha).
So a little backstory, since I started my journey at Flatiron last year, I've been trying to find ways to network and put myself in the right position to get a job when I'm ready without needed TOO much help from the school. I'm pretty introverted though so I wanted to position myself in the right way. I ended up volunteering for Codeland Conference in Manhattan because I couldn't really afford a ticket at the time. It was an amazing experience and the only thing I would change is that I would have tried to be social a little earlier. I participated in a workshop led by Avi, the head of Flatiron School, and I helped coordinate the VR activities at the conference afterparty. Overall I had a great experience and the idea of getting to network, soak up great tech information, and step behind the scenes at the same time all for the price of …..ZERO dollars was something I was happily looking forward to do again.
Now as we all know this has been a very difficult year. I had just registered to volunteer at 2 more conferences and hoping to be a recognizable face among my peers by forcing my way out of my comfort zone and being super social but the COVID 19 shows up and messed it all up. It was difficult enough to find those conferences (more on that soon).
Ever since, all conferences either got cancelled, pushed back, or reorganized as remote. So now I'm stuck trying to network online which I find way more difficult. You can't read people's body language or just jump in a conversation without it seeming a little weird because I think social media can be a very cliquey place. And to this day I haven't been able to find a great resource for when the tech conferences (now remote) will take place. I even find big ones like Microsoft Ignite and Apple WWDC to be hard to locate unless you're in the know, and this was going on even when we could go outside.
Maybe I'm living under a rock or not as apart of the tech community as I should be (again, cliquey) so I often google something like "tech conferences 2020" or something like that and the results are always mixed and don't include the stuff I'm really looking for. So I decided to build a shell site that would make that as simple as possible. I'd love to maybe help make these things more accessible for the newbie like myself or outsiders who don't follow the "right" people on twitter but for now this is what I've got..
And now for the project. The set up was pretty straightforward; I had to create a basic mvc structure with models that "have-many" of and "belong-to" eachother. After drawing out a diagram of the models I wanted to include, I decided that "Users" would "have_many" donations and "Conferences" would "have_many" donations, which would create the "many-to-many" relationship that I'm looking for. Additionally, Users would have their own user_interest and Conferences would have workshops!
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Ex:
class Conference < ApplicationRecord
has_many :donations
has_many :users, through: :donations
has_many :workshops
accepts_nested_attributes_for :workshops, reject_if: lambda {|attributes| attributes['name'].blank?}
class User < ApplicationRecord
has_secure_password
has_many :donations
has_many :conferences, through: :donations
has_one :user_interest
validates :email, presence: true
validates :name, presence: true
validates :password, length: { minimum: 6 }
end
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
The User views would require users to submit a user_interest form after signing up. This would give admins info on each user's code experience, history, and whether or not they're looking for a job.
On the other end, when an admin creates a new conference, they submit info for workshops which will appear on the conference show page.
The root path, which is the conference index page, can be viewed by anyone whether or not they're signed in. It's a basic table with fields for all of the conference info. However, to register for a conference you must sign in and there's an alert that will let you know that. When they're signed in, they can submit a donation, and as long as it's greater than or equal to the minimum donation amount for the specific conference, they are officially registered for the conference!
To be honest, the app sounds a lot simpler than it was to build now that I'm explaining it 🤦🏻‍♂️. It was a great experience though. The omniauth was definitely the toughest part; it literally took me more than a week to get it working but that's just another example of me googling my way into success!!!Like a real programmer haha On to Javascript…. 😳