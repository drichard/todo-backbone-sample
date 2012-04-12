A sample todo application built with Backbone and require.js.

This is yet another todo app built in MV\* style. It is inspired by todo-mvc and backbone-boilerplate. I used it to teach myself the basics of idiomatic backbone apps, correct usage of requirejs, strictly modular app composition and easy jasmine testing. 


##Features:
* Require.js for module handling
* Backbone for views and models
* Simple Sinatra server and REST api for persistence
* Initial data bootstrap via index.erb template
* Complete Test suite with jasmine, requirejs and coffeescript
* Twitter bootstrap for layout
* Underscore templates

##Installation
* Install ruby
* Install sinatra
TODO

##Start
`ruby -rubygems lib/app.rb`
View at: localhost:4567

##Run test suite
The test suite should be run under a local file server because otherwise the browser will complain about cross-origin issues (requirejs still loads the modules async).

Therefore:
`ruby -rubygems lib/app.rb`
Run at: http://localhost:4567/test/SpecRunner.html

The specs are written in CoffeeScript simply out of curiosity. The spec runner will ignore all .coffee files and only execute the compiled .js files.

##License
Do What The Fuck You Want To Public License (WTFPL)
