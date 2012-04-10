define(["jquery", "backbone", "models/todo"],
  function($, Backbone, Todo) {
    var TodoAddView = Backbone.View.extend({
      events: {
        "click .btn" : "add",
        "keypress input" : "createOnEnter"
      },

      initialize: function() {
        _.bindAll(this);
        this.todoList = this.options.todoList;
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
        var todo = this.todoList.create({text: this.getValue()});
        if (todo) {
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
