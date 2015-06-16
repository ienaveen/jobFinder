angular.module('app', ['ngResource']);
angular.module('app').controller('testCtrl', function($scope,$http,$resource) {
    //$scope.test = "working ";
      $scope.jobs = $resource('/api/jobs').query();
     /*$http.get('/api/jobs').then(function(data){
        $scope.jobs = data.data;
    });*/
});
