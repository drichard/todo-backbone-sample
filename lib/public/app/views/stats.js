define(["text!templates/todo-stats.html", "underscore", "backbone" ],
  function(template, _, Backbone) {
    var TodoStatsView = Backbone.View.extend({
      template: _.template(template),

      initialize: function() {
        _.bindAll(this);

        this.collection.on("all", this.render);
      },

      render: function() {
        var data = {
          remaining: this.collection.getRemainingCount(),
          done: this.collection.getCompletedCount(),
          total: this.collection.getTotalCount()
        };
        this.$el.html(this.template(data));

        return this;
      },

    });

    return TodoStatsView;
  });
