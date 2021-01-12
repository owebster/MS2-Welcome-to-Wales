# MS2-Welcome-to-Wales
 Milestone Project #2 - a travel site for visiting Wales
![mockup_image]()
## An Overview
For my second milestone project I have chosen to build a travel site for things to do in Wales. This project is built using HTML, CSS, Javascript and accompanying frameworks. Show casing mobile first design, useage of API's and a deeper dive into my current front end development knowledge with more confident use of HTML and CSS but also Javascript.
I decided on building a sit for visiting Wales because I wanted an easy to view experience for anyone who's deciding on their next getaway.
This site is simplistic to use and has a good flow between different sections which tie into eachother.

In this document I will go through what I've built and why, as well as future goals and testing that's been done to make sure this site is functional in what it offers as well as across multiple device types, from mobile to desktop.

View a live version of my site [here](https://owebster.github.io/MS2-Welcome-to-Wales)

## Table of content
   * [UX](#ux) 
   * [UI](#ui)
   * [Objectives](#objectives)
      * [For The Site Owner](#for-the-site-owner)
      * [For The User](#for-the-user)
   * [Wireframe](#wireframe)
   * [Scope](#scope)
      * [Start](#start)
      * [Middle](#middle)
      * [Ongoing](#ongoing)
   * [User Stories](#user-stories)
   * [Features](#features)
   * [Technologies Used](#technologies-used)
   * [Testing](#testing)
   * [Deployment](#deployment)
   * [Credits](#credits)

## UX
### The Experience:
I wanted to create a site where it's user friendly in deisgn and allows the user to flow explore the site easily and in a way that makes sence in terms of it's flow but to also have the most relelvant information that's needed for a travel site. 
Such as the local weather, things to do in the area and also a bit of history to provide a site that's to everyone's tastes. Or map markers holding information about it's marked place to provide more detail. I've made sure each button is working accordinly as well as having a site that's accessible to all and meets the speed requirements a user expects on a modern site (more on speed and accessibility in the testing section).

### Journey of the Site:
The site starts off with a full page image of the coast lines of North Wales with a title and short description on the what the site will offer. This gives the user a clear understanding on what the site offers. Meaning that without any further interaction they will know that it is a website to showcase some quick details on Wales.

   * From hero image on at the top, the user can either scroll with their mouse or finger to the enxt section of the site or they can click the down arrow which guides the user down as well.

   * The user is then greated with a short paragraph about Wales, giving a quick description about Wales and it's location (more on why this matters in "site owner goals" ).
   
   * Following the welcome paragraph, the user is shown the current weather in Cardiff - the capital of Wales. This is done with the Dark Sky API with some JS to inject the information onto the document. Showing an animated image of the weather for a quick and clear idea, as well as the actual temperture and a written description of the weather. E.G. Overcast.

   * After the weather section, the user is greated with the information cards section where it starts off with 2 cards about Wales. This is sorted with Bootstrap's `col` class where the cards in mobile view are sorted by `col-12` so on smaller screen devices they are listed one on top of eachother to make sure information is not cramped next to each other and is easier to view. On  medium / large screen devices, this changes to `col-sm-6` to utlise screen that have a larger area.

   * Onto the final main section of the site which is the maps section where users can select differnt activities and see where in Wales they are without having to leave the site. This is intergrated with the Leaflet API along with JS to make the buttons functional. For example, in the maps section there is a castle button which when the user toggles the button (using the jquery command `$(btnName).click(function(task){})`), it places map markers to show where the top castles are in Wales.


### Colours:
For the colours of the site I based the colour scheme off the colours of the Welsh flag. I primairly used the red from the flad as accent colours to add emphasis on buttons, full stops and exclamation marks to draw the user's attention to those areas even when someone is scrolling throgh the website with no particular aim.


## UI 
### The Interface:

   * 


## Objectives
### For the Site Owner:
* 
   

### For the User:
* 

## Wireframe:
For my wireframes, I used Balsamiq Wireframes to mockup and create the site in different device sizes. Shown below are the different wireframes for Mobile, Tablet and Desktop. I started with the mobile site and worked from there to scale up the design. You can click on the image for a larger size.

<img src="" alt="Wireframes of all small, medium and large screen sizes" width="576" height="360" />

## Accessibility
The site was built with accessibility needs in mind. 
   * All images have the correct alt tags
   * Colours throughout the site offer contrast from on another to ensure easier readability
   * Tested with Lighthouse to improve and fix accessibility concerns

## Scope


### Start


### Middle

   
### Ongoing


## User Stories
### Current Fan


### New user


## Features
### Current:
   

### Future:
  

## Technologies used:
  
## Testing:
### HTML


### CSS

### JS


<img src="" alt="screenshot of CSS w3 Validation completion checks, passed" width="576" height="360" />

### Chrome developer tools
When building the site, during each section I used Chrome's inspect and developer tools (such as lighthouse) to validate my work and to ensure the site worked accross multiple screen sizes.
This was also used to debug any structual and/or styling issues ont he fly

### Buttons and Links
All buttons, links and audio that has been embedded has been accounted for and directs to the right source

## Deployment:


### Questions asked to users

## Credits:
   * [Bootstrap](https://getbootstrap.com/)
   * [ColorTools](https://www.colortools.net/color_complementary.html) for picking complenmentary and contrasting colours
   * My mentor Spencer for helping me along the way on my first project.
   * Everyone who had a look and commented on peer to peer code review on slack


### [Back to Top](#an-overview)