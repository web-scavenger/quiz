quizApp.directive('quiz', function () {
    return {
        restrict: 'E',
        templateUrl: '../app/js/quiz.tpl.html',
        controller: function ($scope, $element, $timeout) {
            let counter = 0;
            $scope.checkControl = function ($element) {

                let answer = this.$index + 1;
                $timeout(function () {
                    $scope.datas[counter].selected = !$scope.datas[counter].selected;
                    $scope.selected = !$scope.datas[counter].selected;

                    counter++;
                    if (counter >= $scope.datas.length) {
                        console.log('In ' + counter + ' question user chose ' + answer);
                        console.log('that`s all')
                    }
                    else {
                        $scope.datas[counter].selected = !$scope.datas[counter].selected;
                        $scope.selected = !$scope.datas[counter].selected;
                        console.log('In ' + counter + ' question user chose ' + answer);
                    }
                }, 1000)




            }


        },
        link: function ($scope, $element) {
            let elemWidth = 100 / $scope.datas[0].variants.length;

            $scope.objWidth = {
                "width": `${elemWidth}%`
            };
           
                console.log($element[0].getElementsByClassName('pointsCircle'));
                
           



            //ng-repeat includes points, that`s why we use setTimeout to catch element by className
        }
    }
})