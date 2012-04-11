define(["text!templates/todo-add.html", "jquery", "underscore", "backbone", "models/todo"],
  function(template, $, _, Backbone, Todo) {
    var TodoAddView = Backbone.View.extend({
      template: _.template(template),

      events: {
        "click .btn" : "add",
        "keypress input" : "createOnEnter"
      },

      initialize: function() {
        _.bindAll(this);
        this.todoList = this.options.todoList;
      },

      render: function() {
        this.$el.html(this.template());
        this.$input = this.$("input");
        return this;
      },

      focus: function() {
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
