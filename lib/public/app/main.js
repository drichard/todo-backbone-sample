require(['bootstrap', 'jquery', 'views/stats', 'views/todolist', 'views/todoadd', 'collections/todos'],
  function(bootstrap, $, TodoStatsView, TodoListView, TodoAddView, TodoList) {

    var todoList = new TodoList();
    var options = {todoList: todoList};

    // views take over from here
    $("#todo-stats").html(new TodoStatsView(options).render().el);

    $("#todo-list").html(new TodoListView(options).render().el);
    
    var todoAddView = new TodoAddView(options);
    $("#todo-add").html(todoAddView.render().el);
    todoAddView.focus();

    bootstrap(todoList);
    $("#todo-container").removeClass("hidden");
  }
);
