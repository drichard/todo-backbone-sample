define ["views/stats"], (TodoStatsView) ->
  describe "TodoStatsView", ->
    beforeEach ->
      @view = new TodoStatsView(@viewOptions)

    it "should render on the 'all' event", ->
      spyOn(@view.$el, "html").andCallThrough()
      @view.collection.trigger("all")
      expect(@view.$el.html).toHaveBeenCalled()
