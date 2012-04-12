define ["views/todolist", "models/todo"], (TodoListView, Todo) ->
  describe "TodoListView", ->
    beforeEach ->
      @view = new TodoListView(@viewOptions)

    it "should append a new item on the 'add' event", ->
      @view.collection.trigger("add", new Todo)
      expect(@view.$el.children().length).toEqual 1

      # test if new item has fade-in state
      expect(@view.$el.children()[0]).toHaveClass("new transition-bg")

    it "should append all undone items on the 'reset' event", ->
      items = [new Todo, new Todo, new Todo(done:true)]
      @view.collection.trigger("reset", items)
      expect(@view.$el.children().length).toEqual 2
