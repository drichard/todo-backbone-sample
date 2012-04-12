
define(["models/todo", "collections/todos", "views/todoedit"], function(Todo, TodoList, TodoEditor) {
  return beforeEach(function() {
    this.todoList = new TodoList;
    this.todoList.url = "/";
    this.todo = new Todo({
      text: "new todo"
    });
    this.todo.urlRoot = "/";
    this.editor = new TodoEditor;
    return this.viewOptions = {
      model: this.todo,
      collection: this.todoList,
      editor: this.editor
    };
  });
});
