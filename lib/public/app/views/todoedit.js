define(function(require) {
  var template  = require("text!templates/todo-editor.html"),
      $         = require("jquery"),
      _         = require("underscore");

  var TodoEditor = Backbone.View.extend({
    id: "#todo-editor",
    template: _.template(template),
    events: {
      "blur input"  : "onBlur",
      "keyup input" : "onKeyUp"
    },

    initialize: function() {
      _.bindAll(this);
      this.$el.html(this.template());
      this.$input = this.$("input");
    },

    onKeyUp: function(e) {
      if (e.keyCode === 13) {
        this.save();
      } else if (e.keyCode == 27) {
        this.detach();
      }
    },

    onBlur: function() {
      // onblur fires also after detaching the element with keyup
      if (this.attached) {
        this.save();
      }
    },

    save: function() {
      // TODO validation on model
      var text = this.$input.val()

      this.model.setText(text); 
      this.detach();
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
