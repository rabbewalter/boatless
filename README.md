# Boatless

Boatless is a bloatless *starting package* for app or website development and testing based on current best practices. Boatless is also suitable for prototyping as the `.html` templates are being generated using *Twig.js*, this will keep each component and layout maintainable even for larger projects.



## Usage

Download [latest release](https://github.com/rabbewalter/boatless/archive/master.zip) or clone — `$ git clone https://github.com/rabbewalter/boatless.git` - and checkout the [tagged release](https://github.com/rabbewalter/boatless/releases) of your choosing.

Launch your project with a simple Gulp.js command: `gulp` after installing the [requirements](#requirements). This will launch a web server for you and compile all the defined files. All these settings can be found in the `gulpfile.js` -file, the tasks have been separated (with dependencies) so that the tasks could be modified for use if they do not cut it for the current project. Normalize and Boilerplate styles have been included to each respective class and element but will only be loaded if you add the element to the build.

Consider reading more about the [CSS structure](https://github.com/rabbewalter/boatless/tree/master/src/stylus/README.md) in the _stylus_ folder.



### Compiling workflow

Once you have gone through the base (./stylus/base) -files and chosen the styles that you need (either in the `ctitical.styl` or `index.styl` -files), you are ready to start compiling and adding new components in the respective folder.

You can expect the following when compiling your styles:
* combination of all work files
* possible prefixing if needed
* optimization of the respective files
* `inline` -marked `<link>` and/or `<script>` -tags will be inlined once the templates have been generated, please see example in the twig folder
* You will find your files in the "./dist" -folder, these files could easily be moved to a real server

Please note that the *./dist* -folder is included in the deafult _.gitignore_ -file so that you could consider adding a separate version control for the generated files.



#### Requirements
* [Node.js](https://nodejs.org/)
* [Gulp](http://gulpjs.com/)
* [Stylus](http://stylus-lang.com/)



### Moving the files to production
The compiled build of your project will be in the *./dits/* folder by default, these files can be moved to a production server. Please note that it is recommended to configure the server to enable compression, a possible CDN (this needs to be configured in the project as well), and expiring headers.



### The future of Boatless
A React.js port is being considered as well as a version including other template engines than Twig.js. Webpack is being looked into, looking forward to when Webpack will be production ready. Until then the Twig.js functionality will be improved. Workflow improvements will be made and updated, these should not



##### Minimatch in used modules
```
├─┬ gulp@3.9.1
│ └─┬ vinyl-fs@0.3.14
│   ├─┬ glob-stream@3.1.18
│   │ └── minimatch@2.0.10
│   └─┬ glob-watcher@0.0.6
│     └─┬ gaze@0.5.2
│       └─┬ globule@0.1.0
│         └── minimatch@0.2.14
├─┬ gulp-jshint@2.0.1
│ └── minimatch@2.0.10
├─┬ gulp-stylus@2.4.0
│ ├─┬ accord@0.24.1
│ │ └─┬ glob@7.0.3
│ │   └── minimatch@3.0.3
│ └─┬ stylus@0.54.5
│   └─┬ glob@7.0.6
│     └── minimatch@3.0.3
├─┬ gulp-twig@0.5.0
│ └─┬ twig@0.8.6
│   └── minimatch@0.2.14
└─┬ jshint@2.9.3
  └── minimatch@3.0.3
```



###### NPM module references

* [Gulp](https://www.npmjs.com/package/gulp)
* [Stylus for Gulp](https://www.npmjs.com/package/gulp-stylus)
* [Autoprefixer for Gulp](https://www.npmjs.com/package/gulp-autoprefixer)
* [Browser-sync](https://www.npmjs.com/package/browser-sync)
* [CSS minifier for Gulp](https://www.npmjs.com/package/gulp-minify-css)
* [Image min for Gulp](https://www.npmjs.com/package/gulp-imagemin)
* [HTML minifier for Gulp](https://www.npmjs.com/package/gulp-htmlmin)
* [Uglifyer for Gulp](https://www.npmjs.com/package/gulp-uglify)
* [Concat for Gulp](https://www.npmjs.com/package/gulp-concat)
* [Rename functions for Gulp](https://www.npmjs.com/package/gulp-rename)
* ~~[Jeet grid for Stylus (Gulp)](https://www.npmjs.com/package/jeet)~~
* [Gulp load plugins](https://www.npmjs.com/package/gulp-load-plugins)
* [Gulp jsHint](https://www.npmjs.com/package/gulp-jshint)
* [Gulp uglify](https://www.npmjs.com/package/gulp-uglify)
* [Gulp util](https://www.npmjs.com/package/gulp-util)


## Credits and thanks

There is no way that this project could have been started without the awesome people behind some of the most used tools on the internet today, people who contribute and give us developers their personal time to push the web forward.
* [HTML5 Boilerplate contributors](https://github.com/h5bp/html5-boilerplate/graphs/contributors)
* [Normalize.css contributors](https://github.com/necolas/normalize.css/graphs/contributors)
* [Modernizr contributors](https://nodejs.org/about/organization/)
* [Node.js contributors](https://nodejs.org/about/organization/)
* [Gulp contributors](https://github.com/gulpjs/gulp/graphs/contributors)
* [Stylus contributors](https://github.com/stylus/stylus/graphs/contributors)
* All the people behind the Npm packages ([Npmjs](https://www.npmjs.com/))

### From the community with love

* [@akx](https://github.com/akx)

## License

The code is available under the [MIT license](LICENSE).


#### Minor tips

* Look into [BEM](http://getbem.com/introduction/) if you are not familiar with it yet
* Get your full favicon set by visiting and generating a favicon pack over at [Realfavicongenerator](http://realfavicongenerator.net/)
* Time spent can never be returned
