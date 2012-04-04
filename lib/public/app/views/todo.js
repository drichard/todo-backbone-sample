define(['text!templates/todo-item.html', "underscore", "backbone"],
  function(template, _, Backbone) {
    var TodoView = Backbone.View.extend({
      tagName: "li",
      className: "todo-item",
      template : _.template(template),

      events: {
        "click .btn"  : "done",
        "dblclick .todo-display" : "edit"
      },

      initialize: function() {
        _.bindAll(this);

        this.editor = this.options.editor;
        this.model.on("change:done", this.remove);
        this.model.on("change:text", this.update);
      },

      edit: function() {
        this.editor.attach(this);
      },

      update: function() {
        // dont use $el.html() because it might kick out the todo editor
        this.$(".todo-display").replaceWith(this.template(this.model.toJSON()));
      },

      render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        this.$button = this.$(".btn");
        this.fadeIn();

        return this;
      },

      fadeIn: function() {
        var $el = this.$el;

        $el.addClass("new transition-bg");
        setTimeout(function() {
          $el.removeClass("new");
          setTimeout(function() {
            $el.removeClass("transition-bg");
          }, 400);
        }, 200);
      },

      done:  function() {
        this.model.done();
      },
    });

    return TodoView;
  });
