require.config({
  paths: {
    jquery: '../assets/js/libs/jquery-1.7.2',
    underscore: '../assets/js/libs/underscore',
    backbone: '../assets/js/libs/backbone',
    text: '../assets/js/plugins/text',
  }
});

define(['underscore'], function (_) {
    // use mustache syntax
    _.templateSettings = {
        interpolate : /\{\{(.+?)\}\}/g
    };

    return _;
});

require(['bootstrap', 'views/stats', 'views/todolist', 'views/todoadd'],
  function(bootstrap, TodoStatsView, TodoListView, TodoAddView) {

    new TodoStatsView; 
    new TodoListView;
    new TodoAddView;

    bootstrap();
  }
);
