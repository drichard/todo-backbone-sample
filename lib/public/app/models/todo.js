define(["backbone"], function(Backbone) {
  var Todo = Backbone.Model.extend({
    defaults: {
      done: false,
      text: ""
    },

    validate: function(attrs) {
      if (attrs.text.trim().length === 0) {
        return "Text cannot be empty";
      }
    },

    setText: function(text) {
      return this.save({text: text});
    },

    getText: function() {
      return this.get("text");
    },

    done : function() {
      this.save({done: true});
    },

    isDone: function() {
      return !!this.get("done");
    }
  });

  return Todo;
});

