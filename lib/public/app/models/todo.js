define(["backbone"], function(Backbone) {
  var Todo = Backbone.Model.extend({
    defaults: {
      done: false
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

