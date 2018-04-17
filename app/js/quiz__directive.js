quizApp.directive('quiz', function () {
    return {
        restrict: 'E',
        templateUrl: '../app/js/quiz.tpl.html',
        controller: function ($scope, $element, $timeout) {

            let answerData = [];


            $scope.goTo = function () {

                for (let i = 0; i < $scope.datas.length; i++) {
                    $scope.datas[i].selected = false;
                }
                $scope.datas[this.$index].selected = !$scope.datas[this.$index].selected;
                $scope.selected = !$scope.datas[this.$index].selected;
            }


            $scope.checkControl = function (slide) {

                let answer = this.$index;

                let object = {};
                for (let i = 0; i < $scope.datas[slide].variants.length; i++) {
                    $scope.datas[slide].variants[i].selected = false;
                }
                $scope.datas[slide].variants[this.$index].selected = !$scope.datas[slide].variants[this.$index].selected


                $timeout(function () {
                    $scope.datas[slide].selected = !$scope.datas[slide].selected;
                    $scope.selected = !$scope.datas[slide].selected;

                    object.question = slide + 1;
                    object.answer = answer;
                    answerData[slide] = object;

                    slide++;
                    if (slide >= $scope.datas.length) {

                        console.log('That`s all!')
                        console.log(answerData);

                    }
                    else {
                        $scope.datas[slide].selected = !$scope.datas[slide].selected;
                        $scope.selected = !$scope.datas[slide].selected;

                    }
                }, 500)

            }

        },
        link: function ($scope, $element) {
            let elemWidth = 100 / $scope.datas[0].variants.length;

            $scope.objWidth = {
                "width": `${elemWidth}%`
            };


        }
    }
})