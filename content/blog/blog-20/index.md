---
title: GCP Pub/Sub
date: "2021-07-06T22:12:03.284Z"
---
Like we discussed before, there are two types of relational databases, OLTP (Online transaction processing) and OLAP (Online Analytics Processing). 

OLTP Relational Databases are for applications where large numbers of users make large numbers of small transactions. Most traditional applications will fall into this category, such as CRM, e-commerce, and banking applications. There are 2 Google Managed Services that are recommended for OLTP Databases: Cloud SQL and Cloud Spanner. Cloud SQL supports PostgreSQL, MySQL and SQL server for regional databases up to a few TBs. Cloud Spanner has unlimited scale (multiple Pbs) and 99.999% availability for global applications with horizontal scaling.

OLAP Relational Databases are for applications allowing users to analyze petabytes of data. For example, this can be used for reporting applications, data warehouses, business intelligence applications or analytics systems. Data is consolidated from multiple (transactional) databases. The recommended GCP managed service for OLAP DBs is BigQuery, which is a petabyte scale distributed data warehouse.


OLAP and OLTP use similar data structures, but a very different approach in how data is stored. OLTP databases use row storage, where each table row is stored together. It is efficient for processing small transactions. OLAP databases use columnal storage, where each table column is stored together. There is high compression, which helps to store petabytes of data efficiently.


