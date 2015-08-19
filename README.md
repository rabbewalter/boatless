# Boatless

Boatless is a bloatless package based on [HTML5 Boilerplate](https://html5boilerplate.com) containing [Normalize.css](https://necolas.github.com/normalize.css/) and [Modernizr](http://modernizr.com/), styled using [Stylus](http://stylus-lang.com/), and generated using [Gulp](http://gulpjs.com/) which runs on [Node.js](https://nodejs.org/).

Boatless has a folder structure which focuses on clear naming and structuring which is a somewhat different approach when comparing to the  commonly used templates and frameworks. Normalize.css is combined with the default CSS from HTML5 Boilerplate and structured for minimal overriding CSS rules. (I tend to favor Normalize.css CSS rules over HTML5 Boilerplates CSS rules for some reason.)


## Getting started

Download [latest release](https://github.com/rabbewalter/boatless/archive/master.zip) or clone — `$ git clone https://github.com/rabbewalter/boatless.git` - and checkout the [tagged release](https://github.com/rabbewalter/boatless/releases) of your choosing.

Boatless has been provided with a package manager which is powered by [gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins).
To isntall these you can simply install the package manager `$ npm install --save-dev gulp-load-plugins` in the root folder. The grunt-load-plugins plugin will automatically lazyload the needed packages using the package.json -file.


## Run Gulp

Run the Gulp command — `$ gulp` - in your terminal to start a local server with your default browser. Gulp listens to the changes in your *stylus* folder and compiles a new *main.css* -file depending on your settings. The browser window will then refresh with the new changes. You can of course change the folder settings in the `gulpfile.js` -file which is located on the root level.


## Dependencies

* [Node.js](https://nodejs.org/)
* [Gulp](http://gulpjs.com/)
* [Stylus](http://stylus-lang.com/)


### NPM module references

* [Gulp](https://www.npmjs.com/package/gulp)
* [Stylus for Gulp](https://www.npmjs.com/package/gulp-stylus)
* [Autoprefixer for Gulp](https://www.npmjs.com/package/gulp-autoprefixer)
* [CSS minifier for Gulp](https://www.npmjs.com/package/gulp-minify-css)
* [Uglifyer for Gulp](https://www.npmjs.com/package/gulp-uglify)
* [Concat for Gulp](https://www.npmjs.com/package/gulp-concat)
* [Rename functions for Gulp](https://www.npmjs.com/package/gulp-rename)
* [Jeet grid for Stylus (Gulp)](https://www.npmjs.com/package/jeet)


## Credits and thanks

There is no way that this project could have been started without the awesome people behind some of the most used tools on the internet today, people who contribute and give us developers their personal time to push the web forward.
* [HTML5 Boilerplate contributors](https://github.com/h5bp/html5-boilerplate/graphs/contributors)
* [Normalize.css contributors](https://github.com/necolas/normalize.css/graphs/contributors)
* [Modernizr contributors](https://nodejs.org/about/organization/)
* [Node.js contributors](https://nodejs.org/about/organization/)
* [Gulp contributors](https://github.com/gulpjs/gulp/graphs/contributors)
* [Jeet contributors](https://github.com/mojotech/jeet/graphs/contributors)
* [Stylus contributors](https://github.com/stylus/stylus/graphs/contributors)
* All the people behind the Npm packages ([Npmjs](https://www.npmjs.com/))


## License

The code is available under the [MIT license](LICENSE).


#### Minor tips

* Look into [BEM](http://getbem.com/introduction/) if you are not familiar with it yet
* Get your full favicon set by visiting and generating a favicon pack over at [Realfavicongenerator](http://realfavicongenerator.net/)
* Don't work too long hours