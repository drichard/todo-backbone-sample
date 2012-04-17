##Overview
This is yet another todo app built in MV\* style. It is inspired by [todomvc](https://github.com/addyosmani/todomvc) and [backbone-boilerplate](https://github.com/backbone-boilerplate/backbone-boilerplate). I used it to teach myself the basics of idiomatic backbone apps, correct usage of requirejs, strictly modular app composition and easy jasmine testing. 

You might find this useful if you are looking for a backbone/requirejs/sinatra/bootstrap setup for your next app.

##Features:
* Require.js for module handling
* Backbone for views and models
* Simple Sinatra server and REST api for persistence
* Initial data bootstrap via index.erb template
* Complete Test suite with jasmine, requirejs and coffeescript
* Twitter bootstrap for layout
* Underscore templates

##Installation
* Requires Ruby 1.9+
* Clone the repo and do a `bundle install`. This should install all ruby dependencies.

##Start
`ruby -rubygems lib/app.rb`

View at: [localhost:4567](http://localhost:4567)

##Run test suite
The test suite should be served by a local file server because otherwise the browser will complain about cross-origin issues (requirejs still loads the modules async).

Therefore:
`ruby -rubygems lib/app.rb`

Run at: [localhost:4567/test/SpecRunner.html](http://localhost:4567/test/SpecRunner.html)

The specs are written in CoffeeScript simply out of curiosity. The spec runner will ignore all .coffee files and only execute the compiled .js files.

##What's missing
* There is no configuration file for the [RequrieJS optimizer](http://requirejs.org/docs/optimization.html) yet. This means all your script files are served individually. You do not want that in production.
* You cannot run the test suite in a headless mode (yet).

##License
Do What The Fuck You Want To Public License ([WTFPL](http://sam.zoy.org/wtfpl/))
