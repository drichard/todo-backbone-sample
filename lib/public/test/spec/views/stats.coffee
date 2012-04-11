define ["views/stats"], (TodoStatsView) ->
  describe "TodoStatsView", ->
    beforeEach ->
      @view = new TodoStatsView(@viewOptions())

    it "should render on the 'all' event", ->
      spy = spyOn(@view.$el, "html").andCallThrough()
      @todoList.trigger("all")

      expect(@view.$el.html).toHaveBeenCalled()
