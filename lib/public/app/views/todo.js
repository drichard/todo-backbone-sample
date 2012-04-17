define(['text!templates/todo-item.html', "underscore", "backbone"],
  function(template, _, Backbone) {
    var TodoView = Backbone.View.extend({
      tagName: "li",
      className: "todo-item",
      template : _.template(template),

      events: {
        "click .btn"  : "done",
        "click"       : "edit"
      },

      initialize: function() {
        _.bindAll(this);

        this.editor = this.options.editor;
        this.model.on("change:done", this.remove);
        this.model.on("change:text", this.render);
      },

      /**
       * A click on the todo item and we go into edit mode. Attaches
       * the editor.
       */
      edit: function() {
        this.editor.attach(this.$el.children(), this.model);
      },

      render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
      },

      /**
       * Show a color fade effect with css transitions.
       */
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
