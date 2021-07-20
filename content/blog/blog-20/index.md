---
title: GCP Pub/Sub
date: "2021-07-08T22:12:03.284Z"
---
Asynchronous Communication is a very beneficial part of GCP. When an application on the web server makes synchronous calls to the logging service, we can have a major problem if the logging service goes down or there is high loads and lots of logs coming in at the same time.

Enter Pub/Sub, which we use to "decouple" our applications. You create a topic and have your applications put log messages on the topic. The logging service picks them up for processing when ready.
