quizApp.directive('quiz', function () {
    return {
        restrict: 'E',
        templateUrl: '../app/js/quiz.tpl.html',
        controller: function($scope, $element){
            $scope.checkControl = function($element){
                console.log(this.$index);
            }
        },
        link: function ($scope, $element) {
            let elemCounter = $scope.datas[0].variants.length;
            let selector = $element[0].querySelector('.variants');
            console.log(selector)
            
        }
    }
})