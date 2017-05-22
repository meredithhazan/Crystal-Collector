
$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var counter = 0;
	var crystals = ["assets/images/cry1.jpg", "assets/images/cry2.jpg", "assets/images/cry3.jpg", "assets/images/cry4.jpg"]
	var targetNumber;
	var gameRunning = false;

	function newGame() {

		// Randomly choose & display the targetNumber
		targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		$("#number-to-guess").text(targetNumber);
		//console.log("Target is" + targetNumber);

		//Populate empty 4-item array with random numbers 1-12, loop 4 times
		
		for (var i = 0; i < crystals.length; i++) {
			$("#crystals").append("<img src ='" + crystals[i] + "' id='ci" + i + "' class='crystal-image'/>");
			$("#ci" + i).attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);

		};
	        
	    // Counter reset to 0
	    $("#total-score").text(counter);
	    // Clear results message
	    $("#results").html("Click on any Crystal to begin.");

		};



	newGame();

	$(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    	var audioElement = document.createElement("audio");
      	audioElement.setAttribute("src", "assets/javascript/marvlous.mp3");

    	var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    	counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    	$("#total-score").text(counter);

    	if (counter === targetNumber) {
    		$("#results").html("Boom! You won!");
    		$("#results").animate({ fontSize: "24px" }, 2000 );
    		audioElement.play();
    		wins++;
    		$("#wins").text(wins);
    		$("#playAgain").html("Press any key to play again.");
    /*setTimeout(restart, 5000);

	function restart() {
		$("#results").html("Click any Crystal to begin again.");
		$(".crystal-image").on("click", function() {
			newGame();
		});*/

    	} else if (counter > targetNumber) {
    		$("#results").html("Sorry, you lost.");
    		losses++
    		$("#losses").text(losses);
    		$("#playAgain").html("Press any key to try again.");
    	};
			/*setTimeout(restart, 5000);*/
	});
	
	$("#playAgain").keyup(function() {
		newGame();
	});
		
	
});
		

	













