require(['bootstrap', 'views/stats', 'views/todolist', 'views/todoadd', 'collections/todos'],
  function(bootstrap, TodoStatsView, TodoListView, TodoAddView, TodoList) {

    var todoList = new TodoList();
    var options = {todoList: todoList};

    // views take over from here
    new TodoStatsView(options); 
    new TodoListView(options);
    new TodoAddView(options);

    bootstrap(todoList);
  }
);
