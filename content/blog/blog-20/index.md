---
title: GCP Pub/Sub
date: "2021-07-08T22:12:03.284Z"
---
Asynchronous Communication is a very beneficial part of GCP. When an application on the web server makes synchronous calls to the logging service, we can have a major problem if the logging service goes down or there is high loads and lots of logs coming in at the same time.

Enter Pub/Sub, which we use to "decouple" our applications. You create a topic and have your applications put log messages on the topic. The logging service picks them up for processing when ready. The benefit of "decoupling" is that our apps don't care about who is listening. Other benefits of Pub/Sub include: Availability (Publisher stays up even if a subsciber or logging service is down), Scalability (Scale consumer instances under high load), and Durability (Message is not lost even if subsciber is down).

Pub/Sub is a reliable scalable fully managed asynchronous messaging service. It is the backbone for highly available and highly scalable solutions, as it autoscales to process billions of messages per day and has a low cost. Pub/Sub supports push and pull message deliveries and can be used for event ingestion and delivery for streaming analytics pipelines.

In Pub/Sub, the Publisher (or sender of the message) sends messages by making HTTPS requests to pubsub.googleapis.com. The Subscriber (or receiver of the message) pulls, subscriber pulls message when ready by making a HTTPS request to pubsub.googleapis.com, or pushes, messages are sent to subscribers and subscribers provide a web hook endpoint at the time of registration. When a message is recieved on the topic, a HTTPS POST request is sent to the web hook endpoints. Pub/Sub has very flexible Publisher(s) and Subscriber(s) Relationships: one to many, many to one, and many to many.