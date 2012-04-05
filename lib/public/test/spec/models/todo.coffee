define ["models/todo"], (Todo) ->

  describe "Todo", ->
    beforeEach ->
      @todo = new Todo
      @todo.urlRoot = "/"

    it "a done should be false be default", ->
      expect(@todo.get("done")).toBeFalsy()

    it "should return the text", ->
      @todo.set "text", "hola"
      expect(@todo.getText()).toEqual "hola"

    it "should set and return the done state", ->
      @todo.setText "ok"
      @todo.done()
      expect(@todo.isDone()).toBeTruthy()

    it "should validate the text length", ->
      expect(@todo.setText("")).toBeFalsy()
      expect(@todo.setText("wat")).toBeTruthy()
