
define(["views/todoadd", "collections/todos"], function(TodoAddView, TodoList) {
  return describe("TodoAddView", function() {
    beforeEach(function() {
      var options;
      this.todoList = new TodoList;
      this.todoList.url = "/";
      options = {
        todoList: this.todoList
      };
      this.view = new TodoAddView(options);
      return this.view.render();
    });
    it("should create a new todo on add button click", function() {
      spyOn(this.todoList, "create");
      this.view.$(".btn").click();
      return expect(this.todoList.create).toHaveBeenCalled();
    });
    it("should create a new todo on pressing the enter key", function() {
      var keyPress;
      spyOn(this.todoList, "create");
      keyPress = jQuery.Event("keypress", {
        keyCode: 13
      });
      this.view.$("input").trigger(keyPress);
      return expect(this.todoList.create).toHaveBeenCalled();
    });
    return it("should clear the input after creating a todo", function() {
      spyOn(this.view, "getValue").andReturn("text");
      spyOn(this.view, "clearInput");
      this.view.add();
      return expect(this.view.clearInput).toHaveBeenCalled();
    });
  });
});
