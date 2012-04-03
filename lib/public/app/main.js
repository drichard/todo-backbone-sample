require.config({
  paths: {
    jquery: '../assets/js/libs/jquery-1.7.2',
    underscore: '../assets/js/libs/underscore',
    backbone: '../assets/js/libs/backbone',
    text: '../assets/js/plugins/text'
  }
});

require(['jquery', 'underscore', 'backbone', 'collections/todos', 'views/stats', 'views/todolist', 'views/todoadd'],
  function($, _, Backbone, TodoList, StatsView, TodoListView, TodoAddView) {
    new TodoListView;
    new TodoAddView;

    // TODO bootstrap instead of fetch at app start
    TodoList.fetch();
  }
);
