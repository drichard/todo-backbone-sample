require(['views/stats', 'views/todolist', 'views/todoadd'],
  function(TodoStatsView, TodoListView, TodoAddView) {

      new TodoStatsView().render(); 
      new TodoListView;
      new TodoAddView;


    // TODO bootstrap instead of fetch at app start
    //TodoList.fetch();
  }
);
