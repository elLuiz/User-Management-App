## Motivation

This project was intended to improve my skills in React and NodeJS. As well as having a better understanding of Authentication.

### Authentication

For this project, a token is generated whenever the user logs in or signs up. This token is stored in a cookie, with the flags httpOnly and ephemeral -- increasing the security of the application

### Run

Before initializing the server, it's necessary to create a .env file; in that file insert the database password and the secret for the token. Example:
DB_CONFIG=YOUR_PASSWORD
SECRET=YOUR_SECRET

After creating this file, you're ready to run. To run properly, first start the server with `npm run server`; second, initiliaze the React app with `npm start`.

### Stack 

* ReactJS
* NodeJS
* Sass
* PostgreSQL
