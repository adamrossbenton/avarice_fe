# AVARICE THE SMITH

So one day I was getting drinks with my cousin and he, apropos of nothing, said "I think I'm gonna start making swords". My first thought was not "how will you source materials of high enough quality?", "how do you plan on acquiring the necessary equipment for a proper smithy?", or "where exactly do you plan to put said materials?". No, my first thought was "you're gonna need a website to sell those bad boys."

And out of the flames of inebriation arose the boozy phoenix known as AVARICE THE SMITH--a demonstrational eCommerce site to showcase and sell the merchandise of he who would someday proudly don the title of "amateur swordsmith".

Live Frontend: https://boring-wing-14ab79.netlify.app/

Live Backend: https://avaricebackend.herokuapp.com/

NOTE: For this demo, I have only completed the Admin Portal. The client-facing side will be a separate app pinging the same API, but with different functionality (see below for elaboration)

## PROJECT DETAILS

### Backend

Language/Technologies:

* Go
* gin
* GORM
* sqlite
* JWT
* Various open-source plugins from the cool babies in the Golang community (Discord Gophers wya)

### Frontend

Language/Technologies:

* HTML/CSS/JS
* React
* Bootstrap

### Misc

* Heroku (hosted backend)
* Netlify (hosted frontend)
* Github

## PROJECT PLANNING

### Backend

#### Routing Schema

* Admin Login - POST "/login"
    * NOTE: static login, no option to create new admin
* Home Route - GET "/"
* Create Route - POST "/"
* Show Route - GET "/:id"
* Update Route - PATCH "/:id"
* Delete Route - DELETE "/:id"

## Frontend

#### Components

* Home Page
    * Admin Login (required for access to other components)
        * Index
            * Show
                * Edit
        * Create

NOTE: If user is not logged in, all pages/components other than home and login are locked, and user is prompted to visit login page

## CHALLENGES FACED

#### Go, more like Stop, amirite?

*I started dabbling in Golang maybe a month or so before starting this project, and at that time I had planned on using Buffalo for my API framework. However, once I started building a basic Todos with Buffalo, it quickly became evident that I had made a poor choice for the following reasons:

* Buffalo is super opinionated and pretty finicky. Think Ruby on Rails, but less friendly and the syntax is scary.
* I don't know what kind of weird little goblin lives inside my PC but it does NOT like Buffalo for some reason.

At this point, I decided to pivot from the strict and overbearing Buffalo to the much lighter and more freeform Gin

* More or less, Gin is to Go what Express is to JS

In short, Buffalo is the strict dad that grounds you if you're home at 9:01 for your 9:00 curfew. While Gin is the chill mom that lets you drink at home because she'd "rather you do it under my supervision than at some out-of-control party"

