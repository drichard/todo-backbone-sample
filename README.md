A sample todo application built with Backbone and require.js.

This is yet another todo app built in MV\* style. It is inspired by todo-mvc and backbone-boilerplate. I used it to teach myself the basics of idiomatic backbone apps, correct usage of requirejs, strictly modular app composition and easy jasmine testing. 

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
View at: http://localhost:4567

##Run test suite
The test suite should be served by a local file server because otherwise the browser will complain about cross-origin issues (requirejs still loads the modules async).

Therefore:
`ruby -rubygems lib/app.rb`
Run at: http://localhost:4567/test/SpecRunner.html

The specs are written in CoffeeScript simply out of curiosity. The spec runner will ignore all .coffee files and only execute the compiled .js files.


##License
Do What The Fuck You Want To Public License (WTFPL)
