
define(["views/todolist", "models/todo"], function(TodoListView, Todo) {
  return describe("TodoListView", function() {
    beforeEach(function() {
      var $element;
      this.view = new TodoListView(this.viewOptions);
      $element = sandbox({
        id: "todo-list"
      });
      return $element.append(this.view.render().el);
    });
    it("should append a new item on the 'add' event", function() {
      this.view.collection.trigger("add", new Todo);
      expect(this.view.$el.children().length).toEqual(1);
      return expect(this.view.$el.children()[0]).toHaveClass("new transition-bg");
    });
    it("should append all undone items on the 'reset' event", function() {
      this.view.collection.add([
        new Todo, new Todo, new Todo({
          done: true
        })
      ], {
        silent: true
      });
      this.view.collection.trigger("reset", this.view.collection);
      return expect(this.view.$el.children().length).toEqual(2);
    });
    it("should show a message instead of the list when no more items are remaining", function() {
      this.view.collection.reset();
      expect(this.view.$el.parent().length).toEqual(0);
      return expect(this.view.$emptyList.parent().length).toEqual(1);
    });
    return it("should hide the empty message before a new item is added", function() {
      this.view.collection.reset();
      this.view.collection.add(this.todo);
      return expect(this.view.$emptyList.parent().length).toEqual(0);
    });
  });
});
