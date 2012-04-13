
define(["models/todo", "collections/todos"], function(Todo, TodoList) {
  describe("Todo", function() {
    beforeEach(function() {
      this.todo = new Todo;
      return this.todo.urlRoot = "/";
    });
    it("a done should be false be default", function() {
      return expect(this.todo.get("done")).toBeFalsy();
    });
    it("should return the text", function() {
      this.todo.set("text", "hola");
      return expect(this.todo.getText()).toEqual("hola");
    });
    it("should set and return the done state", function() {
      this.todo.setText("ok");
      this.todo.done();
      return expect(this.todo.isDone()).toBeTruthy();
    });
    return it("should validate the text length", function() {
      expect(this.todo.setText("")).toBeFalsy();
      return expect(this.todo.setText("wat")).toBeTruthy();
    });
  });
  return describe("TodoList", function() {
    beforeEach(function() {
      this.collection = new TodoList;
      this.collection.add({
        done: false,
        text: "uncompleted task"
      });
      return this.collection.add({
        done: true,
        text: "done task"
      });
    });
    it("should return the remaining todos", function() {
      var count;
      count = this.collection.getRemaining().length;
      return expect(count).toEqual(1);
    });
    return it("should return the completed todos", function() {
      var count;
      count = this.collection.getCompleted().length;
      return expect(count).toEqual(1);
    });
  });
});
