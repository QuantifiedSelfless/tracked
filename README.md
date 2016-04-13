# qself-tracked

# Prerequisites

Install firebase-tools, because this app depends on a server bundled with
firebase-tools to do url writes to support routing.

(TODO: if desirable, we can look into how to set up SimpleHTTPServer to do
url writes)

$ npm install -g firebase-tools

-g is to make the command line "firebase" available.

# Run locally

$ npm run-script serve

Amelia's screen
http://localhost:5000/amelia

Guest's screen
http://localhost:5000/guest

# Develop

(This should not be run on PI. This is intended for running on a development
machine)

$ npm start

http://localhost:3000/amelia

http://localhost:3000/guest?userid=12345

A development version of the app is served at localhost post 3000. Changes
to code will trigger automatic rebuild, and the app will try to reload itself
automatically too in the browser.

A special user id 'test12345' is hard-coded to NOT connect to the backend
server to help with testing. If you do,

http://localhost:3000/guest?userid=test12345

it will load data from `/data/guest-messages.json` rather than from
`quantifiedselfbackend`.

For all other user ids, it will attempt to load data from

https://quantifiedselfbackend.local/tracked_processor/tracking?userid=${userid}


# Build

(This should not be run on PI. This is intended for running on a development
machine)

When it's ready to build a production app, run this command. This will load
the config file for Webapck to specifically do things for production, such as
running UglifyJsPlugin.

$ npm run-script build-app

This produces a bundled javascript file, saved as `/public/js/qself-news-app.js`.

Then, to serve, run

$ npm run-script serve

The app will be now running on localhost at port 5000.

Note the difference between the port numbers: 3000 for development server and
5000 for production server. The production server is currently using the one
bundled as a part of firebase-tools. It does url rewrite to enable routing.
See `firebase.json` for the rewrite rules.


[x] Support guest id http://localhost:3000/guest?userid=XXXX
[ ] Test connection with the data processor
[ ] Better styling
