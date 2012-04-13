define(function(require) {
  var $             = require("jquery"),
      _             = require("underscore"),
      Backbone      = require("backbone"),
      TodoView      = require("views/todo"),
      TodoEditor    = require("views/todoedit"),
      emptyTemplate = require("text!templates/todo-list-empty.html");

  var TodoListView = Backbone.View.extend({
    tagName: "ul",
    className: "bordered",
    todoEditor: new TodoEditor,
    emptyTemplate : _.template(emptyTemplate),

    initialize: function() {
      _.bindAll(this);

      this.collection.on("add", this.addOne);
      this.collection.on("reset", this.addAll);
      this.collection.on("change:done", this.checkEmptyList);
    },

    /**
     * If there are no more remaining tasks it displays a message
     * instead of the list. Otherwise it replaces the message with the list
     * if necessary.
     */
    checkEmptyList: function() {
      if (this.collection.getRemaining().length === 0) {
        this.$el.replaceWith(this.$emptyList);
      } else {
        if (this.$emptyList.parent().length > 0) {
          this.$emptyList.replaceWith(this.$el);
        }
      }
    },

    render: function() {
      this.$emptyList = $(this.emptyTemplate());
      return this;
    },

    /**
    * Adds a list of all undone todos to the view.
    */
    addAll: function(collection) {
      this.checkEmptyList();
      collection.getRemaining().forEach(this.addItem);
    },

    /**
    * Adds a single todo to the view and animates the appearance.
    */
    addOne: function(todo) {
      this.checkEmptyList();
      this.addItem(todo).fadeIn();
    },


    addItem: function(todo) {
      var view = new TodoView({model: todo, editor: this.todoEditor});
      this.$el.append(view.render().el);
      return view;
    }

  });

  return TodoListView;
});
