define(function(require) {
  var template  = require("text!templates/todo-editor.html"),
      $         = require("jquery"),
      _         = require("underscore");

  var TodoEditor = Backbone.View.extend({
    id: "#todo-editor",
    template: _.template(template),
    events: {
      "blur input"  : "detach",
      "keyup input" : "onKeyUp"
    },

    initialize: function() {
      _.bindAll(this);
      this.$el.html(this.template());
      this.$input = this.$("input");
    },

    onKeyUp: function(e) {
      if (e.keyCode === 13) {
        // TODO validation on model
        var text = this.$input.val()

        // TODO why is the order important here?
        this.detach();
        this.model.setText(text); 
      } else if (e.keyCode == 27) {
        this.detach();
      }
    },

    attach: function(view) {
      this.$display = view.$el.children();
      this.model = view.model;

      this.$display.hide();
      this.$input.val(this.model.get("text"));
      view.$el.append(this.$el);
      this.$input.focus();

      this.attached = true;
    },

    detach: function() {
      if (this.attached) {
        this.attached = false;
        this.$el.detach(); 
        this.$display.show();
      }
    }
  });


  return TodoEditor;
});
