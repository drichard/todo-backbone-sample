define(["backbone", "models/todo"], function(Backbone, Todo) {
  var Todos = Backbone.Collection.extend({
    model: Todo,
    url: "/todos"
  });

  return new Todos;
});

