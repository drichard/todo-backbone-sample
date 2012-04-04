define(["jquery", "backbone", "models/todo", "collections/todos"],
  function($, Backbone, Todo, TodoList) {
    var TodoAddView = Backbone.View.extend({
      events: {
        "click .btn" : "add",
        "keypress input" : "createOnEnter"
      },

      initialize: function() {
        _.bindAll(this);
        this.setElement("#todo-add");
        this.$input = this.$("input");

        this.$input.focus();
      },

      createOnEnter: function(event) {
        if (event.keyCode === 13) {
          this.add(); 
        }
      },

      add: function() {
        var text = this.getValue().trim();
        if (text) {
          TodoList.create({text: text});
          this.clearInput();
        }
      },
      
      clearInput: function() {
        this.$input.val("");
      },

      getValue: function() {
        return this.$input.val();
      }
    });

    return TodoAddView;
  });
