---
title: Intro to IAM Roles
date: "2021-06-23T22:12:03.284Z"
---
IAM Roles (Identity Access Management) give the admin the ability to designate what permissions users have access to in the application. This can include rights like viewing, writing, editing etc. I think it’s a really cool acronym because it simply says “I AM” and the user knows that means what they are or what their role is. Roles are a set of permissions and the admin assigns or binds the role to a member to give them access to these permissions.

There are 3 types of Roles in GCP: Basic, Predefined, and Custom Roles. While Basic (or Primitive) Roles aren’t the most recommended method for handing out permissions in production, because they really aren’t specific enough for working at scale, they are the quickest and most convenient way to give a user permission access to the application.
The Basic Roles fit into 3 classifications: Viewer, Editer and Owner. The viewer (roles.viewer) has read only actions. The Editor (roles.editor) has viewer and editor actions. Last, the Owner (roles.owner) has editor and management actions plus billing, so everything.

So as you can see, the basic roles, while being really generalized, are a quick way to assign roles. In the GCP console, IAM is one of the menu options and you can configure the roles there.