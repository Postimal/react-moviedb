## react-moviedb

React application to browse most popular Movies, upcoming Movies  etc.
It's responsive(min 360px) React Single-Page Application. Powered by The Movie DB. Build with old good React based on Statefull Components, props drilling and lifecycle methods.

Edit: last features were made with use Functional Component's (useState,useEffect,useRef);

- fetching decent amount of data and displaing it to a screen
- user can log as Guest this give us ability to post data to MovieDB, and fetch them in Guest profile to see our choices during guest session
- discover section  filters the movies by genre, year or type
- filter for official trailer and fire at modal created with React.Portal (responsive content)
- comment section give us ability to post fake comments
- search panel placed in navigation help user to find movies and tv
- usefull: goToTopButton scroll to top but also lead us to the page bottom, goBackHomePage let user get back from DetailPage

pleae notice DetailPage does not support TV serials yet



### Demo
[react-moviedb](https://postimal.github.io/react-moviedb/)


## Built With
- React
- SASS - CSS Pre-Processor
- Fetch for data transfer
- Swiper - Carosel Library downloaded from NPM
- react-circular-progressbar - Library downloaded from NPM
- light-toast - Light notification Library downloaed from NPM


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Contributor

- Postimal



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

