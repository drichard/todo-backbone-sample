define ["views/todo"], (TodoView) ->
  describe "TodoView", ->
    beforeEach ->
      @view = new TodoView(@viewOptions)
      @view.render()

    it "should render itself", ->
      expect(@view.$el.text()).toMatch /new todo/

    it "should remove itself when clicking on 'done'", ->
      spyOn(@view.$el, "remove")
      @view.$(".btn").click()
      expect(@view.$el.remove).toHaveBeenCalled()

    it "should update itself when the text of the model changes", ->
      @view.model.setText "changed"
      expect(@view.$el.text()).toMatch /changed/

    it "should enter edit mode when dbl clicking the element", ->
      spyOn(@view.editor, "attach")
      @view.$el.click()
      expect(@view.editor.attach).toHaveBeenCalled()
