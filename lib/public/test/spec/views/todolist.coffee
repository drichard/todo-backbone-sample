define ["views/todolist", "models/todo"], (TodoListView, Todo) ->
  describe "TodoListView", ->
    beforeEach ->
      @view = new TodoListView(@viewOptions)
      $element = sandbox(id: "todo-list")
      $element.append(@view.render().el)

    it "should append a new item on the 'add' event", ->
      @view.collection.trigger("add", new Todo)
      expect(@view.$el.children().length).toEqual 1

      # test if new item has fade-in state
      expect(@view.$el.children()[0]).toHaveClass("new transition-bg")

    it "should append all undone items on the 'reset' event", ->
      @view.collection.add([new Todo, new Todo, new Todo(done:true)], silent: true)
      @view.collection.trigger("reset", @view.collection)
      expect(@view.$el.children().length).toEqual 2

    it "should show a message instead of the list when no more items are remaining", ->
      @view.collection.reset()
      expect(@view.$el.parent().length).toEqual 0
      expect(@view.$emptyList.parent().length).toEqual 1

    it "should hide the empty message before a new item is added", ->
      @view.collection.reset()
      @view.collection.add(@todo)
      expect(@view.$emptyList.parent().length).toEqual 0
