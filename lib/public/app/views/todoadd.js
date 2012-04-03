define(["jquery", "models/todo", "collections/todos"],
  function($, Todo, TodoList) {
    var TodoAddView = Backbone.View.extend({
      events: {
        "click .btn" : "add"
      },

      initialize: function() {
        _.bindAll(this);
        this.setElement("#todo-add");
      },

      add: function() {
        var text = this.getValue();
        if (text) {
          TodoList.create({text: text});
        }
      },

      getValue: function() {
        return this.$("input").val();
      }
    });

    return TodoAddView;
  });
