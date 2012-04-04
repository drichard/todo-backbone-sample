define(function(require) {
  var $           = require("jquery"),
      Backbone    = require("backbone"),
      TodoList    = require("collections/todos"),
      TodoView    = require("views/todo"),
      TodoEditor  = require("views/todoedit");

  var TodoListView = Backbone.View.extend({
    todoEditor: new TodoEditor,

    initialize: function() {
      _.bindAll(this);
      this.setElement("#todo-list");

      TodoList.on("add", this.addOne);
      TodoList.on("reset", this.addAll);
    },

    addAll: function(todoList) {
      todoList.filter(function(todo) {
        return !todo.isDone()
      }).forEach(this.addOne);
    },

    addOne: function(todo) {
      var $view = new TodoView({model: todo, editor: this.todoEditor});
      this.$el.append($view.render().el);
    },

  });

  return TodoListView;
});
