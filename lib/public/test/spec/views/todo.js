
define(["views/todo"], function(TodoView) {
  return describe("TodoView", function() {
    beforeEach(function() {
      this.view = new TodoView(this.viewOptions);
      return this.view.render();
    });
    it("should render itself", function() {
      return expect(this.view.$el.text()).toMatch(/foo/);
    });
    it("should remove itself when clicking on 'done'", function() {
      spyOn(this.view.$el, "remove");
      this.view.$(".btn").click();
      return expect(this.view.$el.remove).toHaveBeenCalled();
    });
    it("should update itself when the text of the model changes", function() {
      this.view.model.setText("changed");
      return expect(this.view.$el.text()).toMatch(/changed/);
    });
    return it("should enter edit mode when dbl clicking the element", function() {
      spyOn(this.view.editor, "attach");
      this.view.$(".todo-display").dblclick();
      return expect(this.view.editor.attach).toHaveBeenCalled();
    });
  });
});