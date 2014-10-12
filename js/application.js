'use strict';

angular.module('app', ['app.controllers','angular-loading-bar' ,'ngAnimate','angularFileUpload','ngRoute', 'ui.bootstrap']).
config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

    $routeProvider.when('/home', {
        controller: 'home',
        templateUrl: 'partials/home.html'
    });

    $routeProvider.when('/about', {
        controller: 'about',
        templateUrl: 'partials/about.html'
    });

    $routeProvider.when('/project-list', {
        controller: 'projectList',
        templateUrl: 'partials/project-list.html'
    });

    $routeProvider.when('/new-project', {
        controller: 'newProject',
        templateUrl: 'partials/new-project.html'
    });

    $routeProvider.when('/delete-project', {
        controller: 'deleteProject',
        templateUrl: 'partials/delete-project.html'
    });

    $routeProvider.when('/task-list', {
        controller: 'taskList',
        templateUrl: 'partials/task-list.html'
    });

    $routeProvider.when('/new-task', {
        controller: 'newTask',
        templateUrl: 'partials/new-task.html'
    });

    $routeProvider.when('/time-list', {
        controller: 'timeList',
        templateUrl: 'partials/time-list.html'
    });

    $routeProvider.when('/new-time-entry', {
        controller: 'newTimeEntry',
        templateUrl: 'partials/new-time-entry.html'
    });
    $routeProvider.otherwise({
        redirectTo: '/home'
    });

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    var param = function(obj) {
        var query = '',
            name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
            value = obj[name];

            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value !== undefined && value !== null) query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };

    $httpProvider.defaults.transformRequest = [function(data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
    
}]);
