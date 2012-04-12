require(['bootstrap', 'jquery', 'views/stats', 'views/todolist', 'views/todoadd', 'collections/todos'],
  function(bootstrap, $, TodoStatsView, TodoListView, TodoAddView, TodoList) {

    var todoList = new TodoList();
    var options = {collection: todoList};

    // add views
    $("#todo-stats").html(new TodoStatsView(options).render().el);
    $("#todo-list").html(new TodoListView(options).render().el);
    
    var todoAddView = new TodoAddView(options);
    $("#todo-add").html(todoAddView.render().el);
    todoAddView.focus();

    // fills the list with initial data from server
    bootstrap(todoList);

    // show page
    $("#todo-container").removeClass("hidden");
  }
);
