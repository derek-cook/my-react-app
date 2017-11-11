# Full Stack React App with optional Redux Implementation
This React app currently has a main branch for plain React state management, and a Redux branch for redux state management.  Compare main with redux to see the transition from component handled state (plain react) to store handled state (redux).

## Quick Start Demo
1. Clone or download the repo into your system.
2. If you don't already have it, install NodeJs from [NodeJs Official Page](https://nodejs.org/en).
3. Open Terminal
### Run Mongo
4. Make sure you have MongoDB installed.
5. Run ```mongod```
### Run the server
6. Go to my-react-app project directory, then ```cd server```
7. Install dependencies: ```npm install```
8. Start server: ```npm start```
9. (Optional) To test requests on the server directly, try in the browser: `http://localhost:3001/api/employee`
    or use Postman.
### Run the client
10. Go to the my-react-app project directory, then ```cd client```
11. Install dependencies: ```npm install```
12. Start react client: ```npm start```
13. Navigate to `http://localhost:3000/` and try adding an employee

**Protip:** Instead of running mongo, the express server, and the react client seperately, optionally use ```concurrently```
Install: ```npm install -g concurrently```
Run from project directory: ```concurrently "mongod" "cd server && npm start" "cd client && npm start"```

## About
This project is an ongoing demo of a full stack react application. 
The primary stack that will be developed is Node.js + React + Express + MongoDb.
I want to keep this project's stack as simple as possible because this project is meant primarily for learning React,
and secondarily for learning how to set up a fundamental backend for a Node app with React before adding Redux conventions 
or more frameworks. 

In the future I'd like to get more fancy. Maybe I'll use Sails for the MVC framework (built off of express and provides an 
ORM/ODM for major databases). This would enhance Express features and allow an abstracted REST API with Waterline. I will likely build on this app for that future project.
