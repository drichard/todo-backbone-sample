
define(["views/stats"], function(TodoStatsView) {
  return describe("TodoStatsView", function() {
    beforeEach(function() {
      return this.view = new TodoStatsView(this.viewOptions());
    });
    return it("should render on the 'all' event", function() {
      var spy;
      spy = spyOn(this.view.$el, "html").andCallThrough();
      this.todoList.trigger("all");
      return expect(this.view.$el.html).toHaveBeenCalled();
    });
  });
});
