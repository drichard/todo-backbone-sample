define ["views/todoadd"], (TodoAddView) ->
  describe "TodoAddView", ->
    beforeEach ->
      @view = new TodoAddView(@viewOptions)
      @view.render()

    it "should create a new todo on add button click", ->
      spyOn(@view.collection, "create")
      @view.$(".btn").click()
      expect(@view.collection.create).toHaveBeenCalled()

    it "should create a new todo on pressing the enter key", ->
      spyOn(@view.collection, "create")
      keyPress = jQuery.Event("keypress", {keyCode:13})
      @view.$("input").trigger(keyPress)
      expect(@view.collection.create).toHaveBeenCalled()

    it "should clear the input after creating a todo", ->
      spyOn(@view, "getValue").andReturn("text")
      spyOn(@view, "clearInput")
      @view.add()
      expect(@view.clearInput).toHaveBeenCalled()
