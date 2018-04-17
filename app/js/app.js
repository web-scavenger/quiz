let quizApp = angular.module('quizApp', []);

quizApp.controller('quizDataCtrl', function quizDataCtrl($scope) {

    $scope.datas = [
        {
            id: 1,
            question: "1. Which kitchen shape most closely represents your kitchen?",
            selected: true,
            variants: [{
                question_id: 0,
                img: "../app/img/11.JPG",
                text: "U-Shaped"
            },
            {
                question_id: 0,
                img: "../app/img/12.JPG",
                text: "Straight with Island"
            },
            {
                question_id: 0,
                img: "../app/img/13.JPG",
                text: "L-Shaped"
            }
            ]
        },
        {
            id: 2,
            question: "2. Choose the design level of your kitchen?",
            selected: false,
            variants: [{
                question_id: 1,
                img: "../app/img/21.png",
                text: "Advanced"
            },
            {
                question_id: 1,
                img: "../app/img/22.png",
                text: "Intermediate"
            },
            {
                question_id: 1,
                img: "../app/img/23.png",
                text: "Basic"
            }
            ]
        },
        {
            id: 3,
            question: "3. Choose the design level of your kitchen?",
            selected: false,
            variants: [{
                question_id: 2,
                img: "../app/img/31.jpg",
                text: "Advanced"
            },
            {
                question_id: 2,
                img: "../app/img/32.jpg",
                text: "Intermediate"
            }
            ]
        }
        ,
        {

            id: 4,
            question: "4. What type of countertop do you envision in your dream kitchen?",
            selected: false,
            variants: [{
                question_id: 3,
                img: "../app/img/41.jpg"
                
            },
            {
                question_id: 3,
                img: "../app/img/42.jpg"
                
            },
            {
                question_id: 3,
                img: "../app/img/43.jpg"
                
            }
            ]
        },
        {
            id: 5,
            question: "5. What type of flooring do you envision in your dream kitchen?",
            selected: false,
            variants: [{
                question_id: 4,
                img: "../app/img/51.jpg",
            },
            {
                question_id: 4,
                img: "../app/img/52.jpg",
            },
            {
                question_id: 4,
                img: "../app/img/43.jpg",
            }
            ]
        }

    ]
});