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

   * The site itself features both a nav bar and a footer as well. With the navbar, I have placed it under the main hero image, meaning that it is not visable until the user scrolls down from the top. Once they have scrolled down they are then greated with the navbar which is `sticky-top` meaning that it's at the top of the screen when ever the user is going between differnt sections, but not when they go back to the hero image.
   The footer shows the important navigation functions for the site for users to quickly go back to certain sections like the weather section and the activity cards section.

   * A feature that is on the site is a back to top button that appears when the user scrolls down from the top of the site, allowing the user to quickly go back to top if they wanted to.


### Colours:
For the colours of the site I based the colour scheme off the colours of the Welsh flag. I primairly used the red from the flad as accent colours to add emphasis on buttons, full stops and exclamation marks to draw the user's attention to those areas even when someone is scrolling throgh the website with no particular aim.
Another reason for choosing `#D50130` as the primary accent colour is also because it's a good contrast over most other colours, meaning that on an accessibility stand point, it'll be easier to identify over the "lighter" colours on the rest of the site.

## UI 
### The Interface:
The site is built to be modern and mobile first. It's features are also supported across multiple browsers. This is shown in differnt parts of the site:
   
   * The hero image is designed to scale on differnt screen sizes but still taking up the equal amount of the screen to make it feel like it's a "landing page", so weather the user arrives to the site on a mobile device or a desktop device with a larger screen, it will seem more like a app (or web app) compared to other travel sites.

   * The navbar is then visable once the user scrolls down from the hero image, and is built to be stuck to the top with `sticky-top` from bootstrap's libary. Allowing users to always have the core navigation features to be present. The navbar is deisgned to be semi translucent to create a layering effect, so when users scroll down the page will experience the page "dissapear" behind the nav-bar, which is a deisgn feature present in some modern software. I chose to do this to offer a differnt feeling but to also algin with newer software design present in modern smart devices and computers.

   * Smooth scrolling is included on the entire page even for safari which has been included with some Javascript.

   * `col` is used throughout the page to make sure every section scales according to screensize and orientation.


## Objectives
### For the Site Owner:
* 
   

### For the User:
* 

## Wireframe:
For my wireframes, I used Balsamiq Wireframes to mockup and create the site in different device sizes. Shown below are the different wireframes for Mobile, Tablet and Desktop. I started with the mobile site and worked from there to scale up the design. You can click on the image for a larger size.

<img src="" alt="Wireframes of small, medium and large screen sizes" width="576" height="360" />

## Accessibility
The site was built with accessibility needs in mind. 
   * All images have the correct alt tags
   * Colours throughout the site offer contrast from on another to ensure easier readability
   * Tested with Lighthouse to improve and fix accessibility concerns

## Scope
I built this project to the schedule that was generated on the Code Institute schedule generator which is ahead of the hard deadline for this project (soft-deadline: 19th January 2021, hard-deadline: 2nd Febuary 2021). This meant that it has been my priority to build this website to in line with my soft deadline, to ensure that I am ahead of schedule and maintain a good pace. 
Initially I had a plan to build another website for this project, based on a scheduling site. However I quickly realised that it would not meet the requirements of this assignment and therefore went to my second idea which was this travel site which I was able to incorporate more features that showed JS usage and also usage of APIs.
I am happy to report that I feel as though I have built a website that meets the criteria that was provided to me as well as utilising the knowledge I have learnt so far all with providing the timeframe even though I am studying part time.

The approach I took was by splitting the project into different sections (Start, Middle and Ongoing). 
   * By doing this I was able to plan out what I wanted to start off with on the website focusing on the basic structure and the different sections I wanted to include
   * Then in the middle I focused on the styling of the sections and on-going testing of the site to make sure what I was building functions normally in different settings
   * Finally my ongoing section is based on what I want to add in the future with any future technologies I learn

### Start
   * Research and planning.
      * First thing I did for planning was to look at other travel sites and blogs to get an idea of what there is out there and what reviews customers have had for those sites.
      * Then I layed out a basic layout of what I wanted the site in my wireframes.
      * From there I started with choosing the colour scheme for the site and what accent colours to use.
   * UI and UX planning
      * Beginning with the basic HTML layout, I laid out: 
         * The skeleton of the heading / navbar area.
         * The 4 separate articles and sections within the body (Welcome section, weather, activities section and maps section).
         * The footer of the site.
      * As usual the story is an important aspect for me when deisgning and building a site, so I thought about how the user would be greated when they first open the website and how the flow of the site would work and how things tie into eachother.

### Middle

   * Content
      * I started off with place holders when designing the skeleton of the site. When basic styling was applied and I could see the near finished results of the site, I then replaced the placeholders with actual content for each section.
         * In the welcome paragrah section there is a short description of what to expect on this site as well as what to expect in Wales.
         * Then comes the weather section which shows the weather for the capital of Wales (Cardiff)
         * From there we have the activities cards which shows 6 sections consisting of a bit about North and South Wales and activies of differnt types for customers to explore
         * After that is the maps section which on page load shows Wales. Buttons are also present for people to click to add markers for locations of differnt activies.

   * Styling
      * Once I had the core skeleton/layout of the site, I then moved to styling the elements.
         * As mentioned above I have chosen to use the colours of the Welsh flag for accent colours.
         * The site has a simple off white background that allows the content above to be highlighted easier.
         * For parts of the site where acceptable, such as the hero seciton. I used a full page (with the use of `100vh`) image to capture the user's attention and also give them the best viewing experience of the images used to show off Wales.
   
### Ongoing


## User Stories
### New user


## Features
### Current:
   

### Future:
  

## Technologies used:
  
## Testing:

### HTML


### CSS

<img src="" alt="screenshot of CSS w3 Validation completion checks, passed" width="576" height="360" />

### JS

### Known issues

### Chrome developer tools
When building the site, during each section I used Chrome's inspect and developer tools (such as lighthouse) to validate my work and to ensure the site worked accross multiple screen sizes.
This was also used to debug any structual and/or styling issues ont he fly

### Buttons and Links
All buttons, links and audio that has been embedded has been accounted for and directs to the right source

## Deployment:
During this project, I made sure that I spent some of my time focusing on how to properly manage and deploy my project. I used my own IDE, Github's desktop app and the IDE's (VS Code) terminal to create branches, test and deploy my code. I primarily did my work in my testing branch as I knew that I would commit to my main branch closer to the time I made my site public. Within the IDE:

I used the built in terminal to get git status, git add, git commits and git push
Within Github's desktop app:

I used to push to github and change/create branches when I wanted to test out new features / layouts. An example of this was when I was creating the hero carousel and wanted to test how different screen sizes would affect the provided images


## Credits:
   * [Bootstrap](https://getbootstrap.com/)
   * [ColorTools](https://www.colortools.net/color_complementary.html) for picking complenmentary and contrasting colours
   * My mentor Spencer for helping me along the way on my first project.
   * Everyone who had a look and commented on peer to peer code review on slack
   * [Stackoverflow](https://www.w3schools.com/howto/howto_css_center-vertical.asp) for vertically and horizontally centring a div:
   ```
   margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
   ```
   * [W3School](https://www.w3schools.com/howto/howto_css_smooth_scroll.asp) for safari smooth scrolling: 
      ``` 
      $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {

         // Make sure this.hash has a value before overriding default behavior
         if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
         } // End if
      });
      });
      ```
   * [StackOVerflow](https://stackoverflow.com/questions/41256026/clear-marker-layers-leaflet) for leaflet remove layers + markers
   * [BBC-Good-Foods](https://www.bbcgoodfood.com/howto/guide/top-10-foods-try-wales) for food history and food types
   * [Favicon](https://favicon.io/emoji-favicons/flag-wales/) for favicon generator
   * [Openweather](https://openweathermap.org/current#current_JSON) for weather API
   * [Leaflet](https://leafletjs.com) for maps API
   * [W3School](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp) for back to top button
   * Dev Ed on youtube for tutorial on Javascript

### [Back to Top](#an-overview)