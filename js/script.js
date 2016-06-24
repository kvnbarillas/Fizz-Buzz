$(document).ready(function() {
for (i=1; i<=100; i++) {

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
})