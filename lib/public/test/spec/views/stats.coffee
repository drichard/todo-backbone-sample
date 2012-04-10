define ["views/stats", "collections/todos"], (TodoStatsView, TodoList) ->
  describe "TodoStatsView", ->
    beforeEach ->
      @todoList = new TodoList
      options = {
        todoList: @todoList
      }

      @view = new TodoStatsView(options)

    it "should render on the 'all' event", ->
      spy = spyOn(@view.$el, "html").andCallThrough()
      @todoList.trigger("all")

      expect(@view.$el.html).toHaveBeenCalled()
