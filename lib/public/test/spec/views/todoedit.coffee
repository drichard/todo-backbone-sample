define ["views/todoedit"], (TodoEditor) ->
  describe "TodoEditor", ->
    beforeEach ->
      @view = new TodoEditor
      @$element = $("<div><div id='todo-item'></div><div>")
      setFixtures(@$element)

    describe "attaching", ->
      it "should hide the element", ->
        spyOn(@$element, "hide")
        @view.attach(@$element, @todo)
        expect(@$element.hide).toHaveBeenCalled()

      it "should set the value of the input to the models text", ->
        @view.attach(@$element, @todo)
        expect(@view.$input.val()).toMatch /new todo/

      it "should focus the input", ->
        @view.attach(@$element, @todo)
        expect(@view.$input).toBeFocused()

     describe "detaching", ->
       beforeEach ->
         @view.attach(@$element, @todo)

       it "should show the hidden element again", ->
         @view.detach()
         expect(@$element).toBeVisible()
         
       it "should detach the editor element", ->
         @view.detach()
         expect(@view.$el.parent().length).toBe(0)

     describe "when attached", ->
       beforeEach ->
         @view.attach(@$element, @todo)
         spyOn(@todo, "setText").andCallThrough()

       it "should save and detach on blur", ->
         @view.$input.blur()
         expect(@todo.setText).toHaveBeenCalled()
         expect(@view.attached).toBeFalsy()

       it "should just detach on pressing ESC", ->
         keyUp = jQuery.Event("keyup", {keyCode: 27})
         @view.$input.trigger(keyUp)
         expect(@todo.setText).not.toHaveBeenCalled()
         expect(@view.attached).toBeFalsy()

       it "should save and detach on pressing ENTER", ->
         keyUp = jQuery.Event("keyup", {keyCode: 13})
         @view.$input.trigger(keyUp)
         expect(@todo.setText).toHaveBeenCalled()
         expect(@view.attached).toBeFalsy()

       it "should not detach when text is empty", ->
         @view.$input.val("")
         @view.save()
         expect(@view.attached).toBeTruthy()
