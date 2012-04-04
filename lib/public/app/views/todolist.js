define(["jquery", "backbone", "collections/todos", "views/todo"],
function($, Backbone, TodoList, TodoView) {
  var TodoListView = Backbone.View.extend({

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
      var $view = new TodoView({model: todo});
      this.$el.append($view.render().el);
    },

  });

  return TodoListView;
});
