define(["text!templates/todo-stats.html", "underscore", "backbone" ],
  function(template, _, Backbone) {
    var TodoStatsView = Backbone.View.extend({
      template: _.template(template),

      initialize: function() {
        _.bindAll(this);
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

        return this;
      },

    });

    return TodoStatsView;
  });
