define(["backbone"], function(Backbone) {
  var Todo = Backbone.Model.extend({
    defaults: {
      done: false
    },

    setText: function(text) {
      this.save({text: text});
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

