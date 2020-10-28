console.log("This is coming from script.js");
var app = angular.module('myApp',['smart-table']);

        app.controller('basicsCtrl',['$scope',function(scope){
            var score_valA = 0;
            var score_valB = 0;
            document.getElementById("initial").innerHTML = score_valA+"<br>"+score_valB;

            document.getElementById("scoreA").nodeValue=score_valA;

            function add_1PointerA(){
                score_valA = score_valA+1;
                document.getElementById("scoreA").nodeValue = score_valA;
            }

            // Create an eventEmitter object
            var scoreKeeper = new events.EventEmitter();

            // Create an event Handler function
            var shoot_a_basket = function connected(){
                console.log('Connection Successful!');

                // Fire up the data_received event
                scoreKeeper.emit('data_received');
            }

            // Binding the connection event with the handler
            scoreKeeper.on('connection',shoot_a_basket);

            // Bind the data_received event with the anonymous function
            scoreKeeper.on('data_received',function(){
                document.getElementById("1_pointerA").innerHTML(document.getElementById("1_pointerA").addEventListener("click",add_1PointerA));
                console.log('data received successfully.');
            });

            // Fire up the connection event
            scoreKeeper.emit('connection');

            console.log("Program Ended.");
        }]);