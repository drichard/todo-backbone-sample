define ["views/todoadd", "collections/todos"], (TodoAddView, TodoList) ->
  describe "TodoAddView", ->
    beforeEach ->
      @todoList = new TodoList
      @todoList.url = "/"

      options = {
        todoList: @todoList
      }

      @view = new TodoAddView(options)
      @view.render()

    it "should create a new todo on add button click", ->
      spyOn(@todoList, "create")
      @view.$(".btn").click()
      expect(@todoList.create).toHaveBeenCalled()

    it "should create a new todo on pressing the enter key", ->
      spyOn(@todoList, "create")
      keyPress = jQuery.Event("keypress", {keyCode:13})
      @view.$("input").trigger(keyPress)
      expect(@todoList.create).toHaveBeenCalled()

    it "should clear the input after creating a todo", ->
      spyOn(@view, "getValue").andReturn("text")
      spyOn(@view, "clearInput")
      @view.add()
      expect(@view.clearInput).toHaveBeenCalled()
