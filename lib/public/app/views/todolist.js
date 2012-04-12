define(function(require) {
  var $           = require("jquery"),
      Backbone    = require("backbone"),
      TodoView    = require("views/todo"),
      TodoEditor  = require("views/todoedit");

  var TodoListView = Backbone.View.extend({
    todoEditor: new TodoEditor,

    initialize: function() {
      _.bindAll(this);

      this.collection.on("add", this.addOne);
      this.collection.on("reset", this.addAll);
    },

    render: function() {
      return this;
    },

    /**
     * Adds a list of all undone todos to the view.
     */
    addAll: function(collection) {
      collection.filter(function(todo) {
        return !todo.isDone()
      }).forEach(this.addItem);
    },

    /**
     * Adds a single todo to the view and animates the appearance.
     */
    addOne: function(todo) {
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
