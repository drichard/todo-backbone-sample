define(["text!templates/todo-stats.html", "jquery", "underscore", "backbone" ],
  function(template, $, _, Backbone) {
    var TodoStatsView = Backbone.View.extend({
      template: _.template(template),

      initialize: function() {
        _.bindAll(this);
        this.setElement("#todo-stats");
        this.todoList = this.options.todoList;

        this.todoList.on("all", this.render);
      },

      render: function() {
        var data = {
          remaining: this.todoList.getRemainingCount(),
          done: this.todoList.getCompletedCount(),
          total: this.todoList.getTotalCount()
        };
        this.$el.html(this.template(data));
        this.$el.removeClass("hidden");
      },

    });

    return TodoStatsView;
  });
