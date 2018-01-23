# agularjs_components
Simple app Course Viewer 

Naming convention -  dash notation ending with .component + file extension for both the JS and HTML files.

How to run - live-server

Step by step how it's buit.
1. Root component.
Created mail application module (course-viewer/app-module.js) and root component(course-viewer/course-viewer-app.component.js), html template for course viewer (course-viewer/course-viewer-app.component.js) and wired up to index.html (added added skript tag for the child component file and tag for the component html  <course-viewer-app></course-viewer-app>).

The course viewer template holds placeholders for main three components: user status, nav bar, homepage /course list/ author.

2. Child components

User status and navigation.  
Created user-status.component.js, main-navigator.component.js, user-status.component.html, main-navigator.component.html.
Added a placeholder to the nav html.
Wired up index.html to the new components.
Connected childern templates to the parent - course viewer (replaced span placeholders with tags for user-status and main-navigation).

Home, course list, author. 
The last child component's placeholder cosists of the above 3.
Created &linked a component for home.

The other two are going to have subcomponents, so created the components in 2 subfolders:
course-viewer/course/course-list.component.html
course-viewer/course/course-list.component.js
course-viewer/author/author-list.component.html
course-viewer/author/author-list.component.js

Course List - course subcomponents
