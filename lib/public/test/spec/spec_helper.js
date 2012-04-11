
define(["collections/todos"], function(TodoList) {
  return beforeEach(function() {
    return this.viewOptions = function() {
      var options;
      this.todoList = new TodoList;
      this.todoList.url = "/";
      return options = {
        todoList: this.todoList
      };
    };
  });
});
