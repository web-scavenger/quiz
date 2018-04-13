let quizApp = angular.module('quizApp', []);

quizApp.controller('quizDataCtrl',  function quizDataCtrl($scope){
    $scope.datas = [
        {
            id: 0,
            question: "1. Which kitchen shape most closely represents your kitchen?",
            variants: [{
                id: 0,
                img: "../app/img/11.JPG",
                text: "U-Shaped"
            },
            {
                id: 1,
                img: "../app/img/12.JPG",
                text: "Straight"
            },
            {
                id: 2,
                img: "../app/img/13.JPG",
                text: "L-Shaped"
            }
            ]
        }
    ]
});