define(["jquery", "collections/todos"], function($, TodoList) {
  var TodoListView = Backbone.View.extend({

    initialize: function() {
      _.bindAll(this);
      this.setElement("#todo-list");

      TodoList.on("add", this.addOne);
      TodoList.on("reset", this.addAll);

    },

    addAll: function(todoList) {
      todoList.each(this.addOne);
    },

    addOne: function(todo) {
      // TODO template
      var $view = $("<li class='todo-item'>" + todo.get("text") + "</li>");
      this.$el.append($view);
    }
  });

  return TodoListView;
});
