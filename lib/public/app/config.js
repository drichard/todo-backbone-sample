require.config({
  paths: {
    jquery: '../assets/js/libs/jquery-1.7.2',
    underscore: '../assets/js/libs/underscore',
    backbone: '../assets/js/libs/backbone',
    text: '../assets/js/plugins/text',
  }
});

define(['underscore'], function (_) {
    // use mustache syntax for templating
    _.templateSettings = {
        interpolate : /\{\{(.+?)\}\}/g
    };

    return _;
});

