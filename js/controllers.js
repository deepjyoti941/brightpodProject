'use strict';

var controllers = angular.module('app.controllers', []);

controllers.controller('navigation', ['$scope', '$location', function($scope, $location) {
    $scope.active = function(path) {
        return path === $location.path();
    }; 
}]);

controllers.controller('projectList', ['$scope', '$location', '$http', function($scope, $location, $http) {
    $http.get('api/brightpod/projectList').success(function(data) {
        $scope.project_listing = data.projects.project;
    });
    $scope.getProjectDetails = function(project_id) {
      $http.post('api/brightpod/getProjecById', {project_id:project_id})
          .success(function(data) {
          console.log(data);
          $scope.project_details = data.project;
      });    
    }
}]);

controllers.controller('deleteProject', ['$scope', '$location', '$http', function($scope, $location, $http) {
    $http.get('api/brightpod/projectList').success(function(data) {
        $scope.project_listing = data.projects.project;
    });
    $scope.deleteProject = function(project_id) {
      $http.post('api/brightpod/deleteProject', {project_id:project_id})
          .success(function(data) {
           if (data['@attributes'].status == 'ok') {
              toastr.success("Project Deleted successfully");
              toastr.options = {
                "closeButton": false,
                "debug": false,
                "positionClass": "toast-top-right",
                "onclick": null,
                "showDuration": "800",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
              }

          }else {
            toastr.error("Some Error Occurred");
            toastr.options = {
              "closeButton": false,
              "debug": false,
              "positionClass": "toast-bottom-left",
              "onclick": null,
              "showDuration": "800",
              "hideDuration": "1000",
              "timeOut": "5000",
              "extendedTimeOut": "1000",
              "showEasing": "swing",
              "hideEasing": "linear",
              "showMethod": "fadeIn",
              "hideMethod": "fadeOut"
            } 
          }
      });    
    }
}]);


controllers.controller('newProject', ['$scope', '$location','$http', '$upload','cfpLoadingBar', function($scope, $location, $http, $upload, cfpLoadingBar) {
    $http.get('api/brightpod/getClientDetails').success(function(data) {
        $scope.client_info = data.clients.client;
    });

    $http.get('api/brightpod/taskList').success(function(data) {
        $scope.task_listing = data.tasks.task;
    });
    $scope.model = {};
    $scope.model.client_id = 68759;

    $scope.createProject = function () {
      cfpLoadingBar.start();
      $scope.model.task_id = angular.element('#task_list').val();
      $scope.upload = $upload.upload({
          url: 'api/brightpod/newProject',
          method: 'POST',
          data: $scope.model
      }).success(function (data) {
            if (data['@attributes'].status == 'ok') {
              toastr.success("Project Created successfully");
              toastr.options = {
                "closeButton": false,
                "debug": false,
                "positionClass": "toast-top-right",
                "onclick": null,
                "showDuration": "800",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
              }

          }else {
            toastr.error("Some Error Occurred");
            toastr.options = {
              "closeButton": false,
              "debug": false,
              "positionClass": "toast-bottom-left",
              "onclick": null,
              "showDuration": "800",
              "hideDuration": "1000",
              "timeOut": "5000",
              "extendedTimeOut": "1000",
              "showEasing": "swing",
              "hideEasing": "linear",
              "showMethod": "fadeIn",
              "hideMethod": "fadeOut"
            } 
          }
      });
    };
}]);

controllers.controller('taskList', ['$scope', '$location', '$http', function($scope, $location, $http) {
    $http.get('api/brightpod/taskList').success(function(data) {
        $scope.task_listing = data.tasks.task;
    });
    $scope.getTaskDetails = function(task_id) {
      $http.post('api/brightpod/getTaskById', {task_id:task_id})
          .success(function(data) {
          console.log(data);
          $scope.task_details = data.task;
      });    
    }
}]);

controllers.controller('newTask', ['$scope', '$location', '$upload','cfpLoadingBar', function($scope, $location, $upload, cfpLoadingBar) {
    $scope.model = {};
    $scope.createTask = function () {
      cfpLoadingBar.start();
        $scope.upload = $upload.upload({
            url: 'api/brightpod/newTask',
            method: 'POST',
            data: $scope.model
        }).success(function (data) {
              if (data['@attributes'].status == 'ok') {
                toastr.success("Task Created successfully");
                toastr.options = {
                  "closeButton": false,
                  "debug": false,
                  "positionClass": "toast-top-right",
                  "onclick": null,
                  "showDuration": "800",
                  "hideDuration": "1000",
                  "timeOut": "5000",
                  "extendedTimeOut": "1000",
                  "showEasing": "swing",
                  "hideEasing": "linear",
                  "showMethod": "fadeIn",
                  "hideMethod": "fadeOut"
                }

            }else {
              toastr.error("Some Error Occurred");
              toastr.options = {
                "closeButton": false,
                "debug": false,
                "positionClass": "toast-bottom-left",
                "onclick": null,
                "showDuration": "800",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
              } 
            }
        });
    };

}]);

controllers.controller('timeList', ['$scope', '$location', '$http', function($scope, $location, $http) {
    $http.get('api/brightpod/timeList').success(function(data) {
      console.log(data);
        $scope.time_listing = data.time_entries.time_entry;
    });
    $scope.getTimeEntryDetails = function(time_entry_id) {
      $http.post('api/brightpod/getTimeById', {time_entry_id:time_entry_id})
          .success(function(data) {
          $scope.time_entry_details = data.time_entry;
      });    
    }
}]);

controllers.controller('newTimeEntry', ['$scope', '$location','$http', '$upload','cfpLoadingBar', function($scope, $location, $http, $upload, cfpLoadingBar) {
    $http.get('api/brightpod/taskList').success(function(data) {
        $scope.task_listing = data.tasks.task;
    });  
    $http.get('api/brightpod/projectList').success(function(data) {
        $scope.project_listing = data.projects.project;
    }); 
    $scope.getAssociatedTask = function(project_id) {
        $http.post('api/brightpod/getProjecById', {project_id:project_id})
          .success(function(data) {
            angular.element('#task_list').val(data.project.tasks.task.task_id);
      });   
    }
    $scope.model = {};
    $scope.createTimeEntry = function () {
      cfpLoadingBar.start();
      $scope.model.project_id = angular.element('#project_list').val();
      $scope.model.task_id = angular.element('#task_list').val();
      $scope.upload = $upload.upload({
          url: 'api/brightpod/newTimeEntry',
          method: 'POST',
          data: $scope.model
      }).success(function (data) {
            if (data['@attributes'].status == 'ok') {
              toastr.success("Time Entry Created successfully");
              toastr.options = {
                "closeButton": false,
                "debug": false,
                "positionClass": "toast-top-right",
                "onclick": null,
                "showDuration": "800",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
              }

          }else {
            toastr.error("Some Error Occurred");
            toastr.options = {
              "closeButton": false,
              "debug": false,
              "positionClass": "toast-bottom-left",
              "onclick": null,
              "showDuration": "800",
              "hideDuration": "1000",
              "timeOut": "5000",
              "extendedTimeOut": "1000",
              "showEasing": "swing",
              "hideEasing": "linear",
              "showMethod": "fadeIn",
              "hideMethod": "fadeOut"
            } 
          }
      });
    };

}]);

controllers.controller('home', ['$scope', '$location', '$http', function($scope, $location, $http) {
   $http.get('api/brightpod/getClientDetails').success(function(data) {
      $scope.client_info = data.clients.client;
  });
}]);

controllers.controller('about', ['$scope', '$location', '$http', function($scope, $location, $http) {

}]);
