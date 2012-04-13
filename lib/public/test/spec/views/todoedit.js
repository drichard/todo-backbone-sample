
define(["views/todoedit"], function(TodoEditor) {
  return describe("TodoEditor", function() {
    beforeEach(function() {
      this.view = new TodoEditor;
      this.$element = $("<div><div id='todo-item'></div><div>");
      return setFixtures(this.$element);
    });
    describe("attaching", function() {
      it("should hide the element", function() {
        spyOn(this.$element, "hide");
        this.view.attach(this.$element, this.todo);
        return expect(this.$element.hide).toHaveBeenCalled();
      });
      it("should set the value of the input to the models text", function() {
        this.view.attach(this.$element, this.todo);
        return expect(this.view.$input.val()).toMatch(/new todo/);
      });
      return it("should focus the input", function() {
        this.view.attach(this.$element, this.todo);
        return expect(this.view.$input).toBeFocused();
      });
    });
    describe("detaching", function() {
      beforeEach(function() {
        return this.view.attach(this.$element, this.todo);
      });
      it("should show the hidden element again", function() {
        this.view.detach();
        return expect(this.$element).toBeVisible();
      });
      return it("should detach the editor element", function() {
        this.view.detach();
        return expect(this.view.$el.parent().length).toBe(0);
      });
    });
    return describe("when attached", function() {
      beforeEach(function() {
        this.view.attach(this.$element, this.todo);
        return spyOn(this.todo, "setText").andCallThrough();
      });
      it("should save and detach on blur", function() {
        this.view.$input.blur();
        expect(this.todo.setText).toHaveBeenCalled();
        return expect(this.view.attached).toBeFalsy();
      });
      it("should just detach on pressing ESC", function() {
        var keyUp;
        keyUp = jQuery.Event("keyup", {
          keyCode: 27
        });
        this.view.$input.trigger(keyUp);
        expect(this.todo.setText).not.toHaveBeenCalled();
        return expect(this.view.attached).toBeFalsy();
      });
      it("should save and detach on pressing ENTER", function() {
        var keyUp;
        keyUp = jQuery.Event("keyup", {
          keyCode: 13
        });
        this.view.$input.trigger(keyUp);
        expect(this.todo.setText).toHaveBeenCalled();
        return expect(this.view.attached).toBeFalsy();
      });
      return it("should not detach when text is empty", function() {
        this.view.$input.val("");
        this.view.save();
        return expect(this.view.attached).toBeTruthy();
      });
    });
  });
});
