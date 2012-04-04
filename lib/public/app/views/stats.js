define(["text!templates/todo-stats.html", "jquery", "underscore", "backbone", "collections/todos" ],
  function(template, $, _, Backbone, TodoList) {
    var TodoStatsView = Backbone.View.extend({
      template: _.template(template),

      initialize: function() {
        _.bindAll(this);
        this.setElement("#todo-stats");

        TodoList.on("all", this.render);
      },

      render: function() {
        var data = {
          remaining: TodoList.getRemainingCount(),
          done: TodoList.getCompletedCount(),
          total: TodoList.getTotalCount()
        };
        this.$el.html(this.template(data));
        this.$el.removeClass("hidden");
      },

    });

    return TodoStatsView;
  });
