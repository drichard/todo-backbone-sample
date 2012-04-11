define ["views/todolist", "models/todo"], (TodoListView, Todo) ->
  describe "TodoListView", ->
    beforeEach ->
      @view = new TodoListView(@viewOptions())

    it "should append a new item on the 'add' event", ->
      @view.todoList.trigger("add", new Todo)
      expect(@view.$el.children().length).toEqual 1

    it "should append all undone items on the 'reset' event", ->
      items = [new Todo, new Todo, new Todo(done:true)]
      @view.todoList.trigger("reset", items)
      expect(@view.$el.children().length).toEqual 2
