# Race Stats Tracker

Amateur athletes often enjoy "tracking their runs" to see what they have accomplished. While there are many digital tools that have replaced the long-cherished analog "run logs", there are not many tools specifically for races.

I have been keeping my own races stats, separate from my preferred digital tool, for some number of years. I wanted a way to track all race distances, view comparative information, and potentially generate some charts. In addition, I am a masters runner who can participate in the USATF Phidippides standings.

Race Stats Tracker moves this data from trusty Excel or Google sheets into a managed application.

## Install Instructions

1. Ensure the following are installed on your machine:
   1. Rails 6.0
   1. Node 
   1. npm 
1. Clone this repo to your local machine
1. Navigate to the `backend` directory and execute the following steps:
  1. Run `bundle install`
  1. Run `rails db:migrate` to install the database
  1. Run `rails db:seed` to migrate test data
  1. Run `rails s` to start the server; the Rails API will serve on `localhost:3001` but there is no need to access the backend unless you would like to review the JSON data itself
1. In a new terminal window, navigate to the `frontend` directory and execute the following steps:
  1. Run `npm install`
  1. Run `npm start`; the React app will serve on `localhost:3000`

## Contributor's Guide

Thank you for your interest in contributing to this project. Contributions are expected to be thoughtful, kind, explore new possibilities and add value to the application for all users.  

If you have an idea or issue fix that you have not seen contributed or completed, please open a pull request with a meaningful message for review.  

You will need to install the project, following the installation instructions, to ensure you are able to view and work with the source code.  

## License

This application carries an [MIT License](https://github.com/kristenkinnearohlmann/race-stats-tracker/blob/main/LICENSE)