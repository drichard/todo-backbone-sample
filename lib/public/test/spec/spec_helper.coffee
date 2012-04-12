# Helper functions available to all specs in the this.scope.

define ["models/todo", "collections/todos", "views/todoedit"], (Todo, TodoList, TodoEditor) ->
  beforeEach ->

    # set fake url to not hit the DB with each test.
    # TODO use sinon or stub out Backbone.sync() for better handling
    @todoList = new TodoList
    @todoList.url = "/"

    @todo = new Todo(text: "new todo") 
    @todo.urlRoot = "/"

    @editor = new TodoEditor

    # Returns the default options for todos views.
    @viewOptions =
      model     : @todo
      collection  : @todoList
      editor    : @editor
