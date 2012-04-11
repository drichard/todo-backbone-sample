# Helper functions available to all specs in the this.scope.

define ["collections/todos"], (TodoList) ->
  beforeEach ->

    # Returns the default options for todos views. Most importantly,
    # it offers an empty todo collection.
    @viewOptions = ->
      # set fake url to not hit the DB with each test.
      # TODO use sinon or stub out Backbone.sync() for better handling
      @todoList = new TodoList
      @todoList.url = "/"

      options =
        todoList: @todoList
