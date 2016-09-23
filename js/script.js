var addFizzBuzz = function() {
	for (i=1; i<=""; i++) {

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

$(document).ready(function() {
			var number = prompt("Please Enter Number ");
			 if(isNaN(number)){
			 	alert("You must enter a number!");
			 }
			else{
				addFizzBuzz();
			 }
});






