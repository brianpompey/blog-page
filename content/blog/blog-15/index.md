---
title: GCP Database Fundamentals
date: "2021-07-01T22:12:03.284Z"
---
The purpose of a database in the cloud is to provide organized and persistent storage for your data. There are various options to choose from when deciding on a database solution in GCP, and there are a few things that you must consider when making your decision. Among these factors are: Availability, Durability, RTO, RPO, and Consistency.

Availability and Durability
When considering availability and durability, we must weigh two factors: Will I be able to access data now and when I need it? (Availability) Will my data be available after 10 or 100 or 1000 years? (Durability) When measuring these two, we are looking for the most precise number possible. For example, 99.99% (4 9s) is considered very good availability, and 99.9999999% (11 9s) is considered very good durability. A durability of “11 9s” means that if you store one million files for 10 million years, you expect to have lost only one file. Durability is very important because we hate losing data. 


RTO and RPO
	RTO (Recovery Time Objective) and RPO (Recovery Point Objective) are the ways that we measure how quickly a database can recover from failure. RTO is the maximum acceptable downtime and RPO is the maximum acceptable period of data loss. Achieving minimum RPO and RTO can be very expensive so there usually is a tradeoff based on the criticality of the data. 

Data Consistency 
We want to ensure that the data in multiple data instances is updated simultaneously. There are three types of consistency: (1) Strong Consistency- Synchronous replication to all replicas that will be slow if you have multiple replicas or standbys. (2) Eventual Consistency- Asynchronous replication where there is a little lag for a few seconds before the change is available in all replicas. In the intermediate period, different replicas might return different values. This option is used when scalability is more important than data integrity. (3) Read after Write consistency- Inserts are immediately available, however updates would have eventual consistency. 
