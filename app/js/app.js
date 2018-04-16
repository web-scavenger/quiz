let quizApp = angular.module('quizApp', []);

quizApp.controller('quizDataCtrl',  function quizDataCtrl($scope){
    
    $scope.datas = [
        {
            id: 0,
            question: "1. Which kitchen shape most closely represents your kitchen?",
            selected : true,
            variants: [{
                id: 1,
                img: "../app/img/11.JPG",
                text: "U-Shaped"
            },
            {
                id: 2,
                img: "../app/img/12.JPG",
                text: "Straight with Island"
            },
            {
                id: 3,
                img: "../app/img/13.JPG",
                text: "L-Shaped"
            }
            
            
            ]
        },
        {
            id: 1,
            question: "2. Choose the design level of your kitchen?",
            selected : false,   
            variants: [{
                id: 1,
                img: "../app/img/21.png",
                text: "Advanced"
            },
            {
                id: 2,
                img: "../app/img/22.png",
                text: "Intermediate"
            },
            {
                id: 3,
                img: "../app/img/23.png",
                text: "Basic"
            }
            
            
            ]
        },
        {
            id: 1,
            question: "3. Choose the design level of your kitchen?",
            selected : false,   
            variants: [{
                id: 1,
                img: "../app/img/21.png",
                text: "Advanced"
            },
            {
                id: 2,
                img: "../app/img/22.png",
                text: "Intermediate"
            },
            {
                id: 3,
                img: "../app/img/23.png",
                text: "Basic"
            }
            
            
            ]
        }
        
    ]
});