define(["models/todo"], function(Todo) {
  console.log(Todo)

  describe("Todo", function() {
    beforeEach(function() {
      this.todo = new Todo();
    });

    it("done should be false by default", function() {
      expect(this.todo.get("done")).toBeFalsy();
    });
  });
});

describe("test", function() {
  it("should work", function() {
    expect(1).toEqual(1);
  });
});
