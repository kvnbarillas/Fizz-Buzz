var addFizzBuzz = function(number) {
	for (i=1; i<=number; i++) {

		if (i % 15 == 0) {
		$("#fizzbuzz").append("<p>FizzBuzz</p>");
		}

		else if (i % 3 == 0) { 
		$("#fizzbuzz").append("<p>Fizz</p>");
		}

		else if (i % 5 == 0){
		$("#fizzbuzz").append("<p>Buzz</p>");
		}

		else {
		$("#fizzbuzz").append("<p>"+ i +"</p>");
		}
	}
}
var promptUserForInput= function() {
	var number = prompt("Please Enter Number ");
	return number; 
}


$(document).ready(function() {
	var number = promptUserForInput();
	while(isNaN(number)){
		number = promptUserForInput();
	}
	addFizzBuzz(number)
});






