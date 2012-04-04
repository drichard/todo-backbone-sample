define(["backbone", "models/todo"], function(Backbone, Todo) {
  var Todos = Backbone.Collection.extend({
    model: Todo,
    url: "/todos",

    getRemainingCount: function() {
      return this.where({done: false}).length;
    },

    getCompletedCount: function() {
      return this.where({done: true}).length;  
    },

    getTotalCount: function() {
      return this.length;
    }

  });

  return new Todos;
});

