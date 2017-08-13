# CraigsList Mock

To run:

You must create a new postgres database and start it up.

Then create a .env file in the root of the project with the line (example):

DB_LOCAL = postgres://localhost:5432/databaseName

Run the npm script "reset-db" with the command:

npm run reset-db

This will drop any tables in the database and reinsert dummy data.

Build the project with the build script:

npm run build

To start the server:

node server/index.js

Summary:

The homepage is populated with dummy data from data.json in the root of the project directory. During development, I thought that it may have been feasible to make API calls for this data, but since these values aren't changing I just directly imported the data. The title of the website is clickable to return back to the homepage. Clicking on a category sends a request to the server for any posts related to the category and returns any posts found. Currently, I only have 3 posts for a single category that can be found. Since the insertion of the dummy data is unclear, you must check the database to see which category has ID #1. Clicking on the title of a post will bring you to a page to view the post, but I have not implemented it yet.