
$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var counter = 0;
	var numOptions = new Array(4);

	function newGame() {

		// Randomly choose & display the targetNumber
		var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		$("#number-to-guess").text(targetNumber);
		//console.log("Target is" + targetNumber);

		// Populate empty 4-item array with random numbers 1-12, loop 4 times
		var numOptions = new Array(4);
		for (var i = 0; i < numOptions.length; i++) {
			numOptions[i] = Math.floor(Math.random() * 12) + 1;
			console.log("Array is:" + numOptions);
		}
		// Assign values to crystal-images
		// For each iteration, we will create an imageCrystal
    	var imageCrystal1 = $("<img>");
    	var imageCrystal2 = $("<img>");
    	var imageCrystal3 = $("<img>");
    	var imageCrystal4 = $("<img>");

	    // First each crystal will be given the class ".crystal-image".
	    // This will allow the CSS to take effect.
	    //	Tried putting all the selectors together, incorrect syntax?
	    //$("img.imageCrystal1, img.imageCrystal2, img.imageCrystal3, img.imageCrystal4").addClass("crystal-image");


	    imageCrystal1.addClass("crystal-image");
	    imageCrystal2.addClass("crystal-image");
	    imageCrystal3.addClass("crystal-image");
	    imageCrystal4.addClass("crystal-image");


	    // Each imageCrystal will be given a src link to the crystal image
	    
	    /*imageCrystal1.attr("src", "assets/images/cry1.jpg"); 
	    imageCrystal2.attr("src", "assets/images/cry2.jpg");
	    imageCrystal3.attr("src", "assets/images/cry3.jpg");
	    imageCrystal4.attr("src", "assets/images/cry4.jpg");
*/
	    // Below didn't work either to re-size images.	
	    //$(".crystal-image").css({width : "240px", height : "240px"});
	    
	    // Each imageCrystal will be given a data attribute called data-crystalValue.
	    // This data attribute will be set equal to the array value.
	    imageCrystal1.attr("data-crystalvalue", numOptions[i]);
	    imageCrystal2.attr("data-crystalvalue", numOptions[i]);
	    imageCrystal3.attr("data-crystalvalue", numOptions[i]);
	    imageCrystal4.attr("data-crystalvalue", numOptions[i]);

	    $("#crystals").append(imageCrystal1, imageCrystal2, imageCrystal3, imageCrystal4);
		
	    console.log("Value is:" + imageCrystal1 + imageCrystal2);
	    
	    // Each imageCrystal will be given a src link to the crystal image
	    
	    imageCrystal1.attr("src", "assets/images/cry1.jpg"); 
	    imageCrystal2.attr("src", "assets/images/cry2.jpg");
	    imageCrystal3.attr("src", "assets/images/cry3.jpg");
	    imageCrystal4.attr("src", "assets/images/cry4.jpg");


	    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
	  

		};
	

	});

	













