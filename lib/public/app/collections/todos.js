define(["backbone", "models/todo"], function(Backbone, Todo) {
  var Todos = Backbone.Collection.extend({
    model: Todo,
    url: "/todos",

    getRemaining: function() {
      return this.where({done:false});
    },

    getCompleted: function() {
      return this.where({done: true});
    },
  });

  return Todos;
});

