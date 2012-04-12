
define(["views/todolist", "models/todo"], function(TodoListView, Todo) {
  return describe("TodoListView", function() {
    beforeEach(function() {
      return this.view = new TodoListView(this.viewOptions);
    });
    it("should append a new item on the 'add' event", function() {
      this.view.collection.trigger("add", new Todo);
      expect(this.view.$el.children().length).toEqual(1);
      return expect(this.view.$el.children()[0]).toHaveClass("new transition-bg");
    });
    return it("should append all undone items on the 'reset' event", function() {
      var items;
      items = [
        new Todo, new Todo, new Todo({
          done: true
        })
      ];
      this.view.collection.trigger("reset", items);
      return expect(this.view.$el.children().length).toEqual(2);
    });
  });
});
