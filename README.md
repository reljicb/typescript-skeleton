TypeScript project skeleton.


Features:

* **TypeScript linting**
* **TypeScript compilation**
* **browserify** - loads TS application, by resolving all node 'require' statements
* **uglify** - makes javascript code hard to read (only in production mode)
* **source maps** - generates maps to TS files for easier debuging in Chrome (only in development mode)
* **webserver** - runs webserver and opens the main page in the default browser

#Requirements
* Gulp
* npm

#Run
Run server in production mode:

    gulp webserver

Run server in development mode:

    gulp webserver:debug


