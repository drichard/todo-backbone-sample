
define(["views/stats", "collections/todos"], function(TodoStatsView, TodoList) {
  return describe("TodoStatsView", function() {
    beforeEach(function() {
      var options;
      this.todoList = new TodoList;
      options = {
        todoList: this.todoList
      };
      return this.view = new TodoStatsView(options);
    });
    return it("should render on the 'all' event", function() {
      var spy;
      spy = spyOn(this.view.$el, "html").andCallThrough();
      this.todoList.trigger("all");
      return expect(this.view.$el.html).toHaveBeenCalled();
    });
  });
});
