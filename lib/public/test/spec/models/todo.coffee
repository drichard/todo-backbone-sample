define ["models/todo", "collections/todos"], (Todo, TodoList) ->

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

    
   describe "TodoList", ->
     beforeEach ->
       @collection = new TodoList
       @collection.add({done: false, text: "uncompleted task"})
       @collection.add({done: true, text: "done task"})

     it "should return the remaining todos", ->
       count = @collection.getRemaining().length
       expect(count).toEqual(1)

     it "should return the completed todos", ->
       count = @collection.getCompleted().length
       expect(count).toEqual(1)
