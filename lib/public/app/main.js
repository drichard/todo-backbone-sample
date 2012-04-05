require(['bootstrap', 'views/stats', 'views/todolist', 'views/todoadd'],
  function(bootstrap, TodoStatsView, TodoListView, TodoAddView) {

    // views take over from here
    new TodoStatsView; 
    new TodoListView;
    new TodoAddView;

    bootstrap();
  }
);
