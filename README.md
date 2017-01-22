# NodeJS-Ticket-Checker

A simple little app written in NodeJS for the pure purpose of exploring the framework. It is a more developed version (with front-end part added) of this app: https://github.com/igordavydsson/node-readline-ticket-checker

# The task

A party. The gueasts were divided in couples and each couple was given two tickets with the same number. They were also told that if their couple fails to attend they will be kicked out from the party, when all the arrived geusts would be registered.

Now you stand at the entrance and face a challenge: all the arrived guests are waiting in line to get in and you need to check their tickets and find out those who came without their couple(s). Since the organizer's database is down you also have to work around the fact that you don't know the numbers of the tickets that were given to the guests.

# My Node.js solution

My app utilizes **Express** module to create a server, **EJS** to handle the views and **Bower** to load **Bootstrap** (mainly just because I wanted to also use Bower; Bootstrap could be loaded with a simple CDN link).

All in all it looks like this: 

![Screenshot1](/../screenshots/screenshot1.png?raw=true "Front page screenshot")
![Screenshot2](/../screenshots/screenshot2.png?raw=true "Second page screenshot")

# How to run it

1. install all the node modules with `$ npm install`

2. go to <http://localhost:3000>
