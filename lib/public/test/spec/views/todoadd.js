
define(["views/todoadd"], function(TodoAddView) {
  return describe("TodoAddView", function() {
    beforeEach(function() {
      this.view = new TodoAddView(this.viewOptions);
      return this.view.render();
    });
    it("should create a new todo on add button click", function() {
      spyOn(this.view.collection, "create");
      this.view.$(".btn").click();
      return expect(this.view.collection.create).toHaveBeenCalled();
    });
    it("should create a new todo on pressing the enter key", function() {
      var keyPress;
      spyOn(this.view.collection, "create");
      keyPress = jQuery.Event("keypress", {
        keyCode: 13
      });
      this.view.$("input").trigger(keyPress);
      return expect(this.view.collection.create).toHaveBeenCalled();
    });
    return it("should clear the input after creating a todo", function() {
      spyOn(this.view, "getValue").andReturn("text");
      spyOn(this.view, "clearInput");
      this.view.add();
      return expect(this.view.clearInput).toHaveBeenCalled();
    });
  });
});
