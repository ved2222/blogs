### Blog Web Application

This is a full stack blog web application built using Node.js Express.js and EJS.
The application allows users to create view edit and delete blog posts through a clean web interface.

### Project Overview

The goal of this project is to understand how a server side rendered web application works using Express and EJS.
The application handles routing form submission dynamic rendering and in memory data storage.

Posts are stored in a JavaScript array on the server and do not persist after a server restart.
This project focuses on backend logic request handling and template rendering rather than database integration.

### Features

Users can create new blog posts using a form
All posts are displayed on the home page
Users can edit existing posts with prefilled data
Users can delete posts instantly
Each post has a dedicated detailed view page
Basic validation is applied for empty title or content

### Tech Stack

Node.js for backend runtime
Express.js for routing and middleware
EJS for server side HTML rendering
CSS for styling and layout
Nodemon for development server reload

### Application Architecture

The server is initialized using Express and listens on port 3000 by default.
Static files such as CSS images and icons are served from the public directory.
EJS views are rendered dynamically based on the application state.

Routes handle creating updating deleting and viewing posts.
All post data is stored in memory using a JavaScript array.

### Folder Structure Explanation

public folder contains static assets and views
views folder contains EJS templates
partials folder contains reusable header and footer components
index.ejs renders the main page with post creation and post list
post.ejs renders individual blog posts
styles folder contains the main CSS file
images folder contains edit and delete icons

Templates are structured to separate layout logic from server logic.

### What I Learned From This Project

I learned how Express handles GET and POST requests
I understood how form data is processed using middleware
I learned how EJS renders dynamic content using server data
I implemented edit and delete functionality using route parameters
I understood how to structure a Node.js project professionally
I learned how partial templates improve code reuse

### How To Clone And Run This Project

Make sure Node.js is installed on your system.

Open terminal and run the following commands

git clone [https://github.com/ved2222/blogs.git](https://github.com/ved2222/blogs.git)
cd blogs
npm install

After installing dependencies start the server

npm run dev

Open your browser and visit

[http://localhost:3000](http://localhost:3000)

The application will now be running locally.

### Deployment Note

This application cannot be deployed using GitHub Pages because it requires a Node.js backend server.
To deploy this project online a backend hosting platform such as Render or Railway should be used.

### Limitations

Posts are not stored permanently
No database is used in this version
The application is intended for learning and practice

### Future Improvements

Database integration using MongoDB or PostgreSQL
User authentication and login system
Markdown support for blog content
Improved UI and mobile responsiveness

### Author

Ved
