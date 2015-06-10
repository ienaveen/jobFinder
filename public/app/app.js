angular.module('app', []);
angular.module('app').controller('testCtrl', function($scope) {
    $scope.test = "working ";
    $scope.jobs = [{
        title: "Software Engineer",
        description: "you build software"
    }, {
        title: "Software Engineer",
        description: "you build software"
    }];
});
