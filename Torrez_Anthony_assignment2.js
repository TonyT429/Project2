// SDI 1205 Assignment Week 2
// Student: Anthony Torrez
// Date: May 10th , 2012


console.log("I crack my eyes open and the clock say 9 am.  And so the day begins.  First things first, get up and check to see if there's ",
					"enough coffee beans to make a pot.  If not, I'll have to settle for tea.  Let's see, I need 4 scoops to make a pot.");
					
// Procedure

var makeCoffee = function (beans) {
	if (beans >= 4) {
		console.log("Yay! There is enough beans to make a pot of coffee");
		} else {
		console.log("Hmmm...  Not enough beans for a pot of coffee, guess it's tea today.");
		}
};

makeCoffee(3);

makeCoffee();
console.log(" ");
console.log("Well, while I wait for the coffee to brew, perhaps I should check my blood sugars. ");

// Boolean

var checkBlood = function (testStrip, lancet) {
	  if (testStrip >=1 && lancet >= 1) {
		   var testBlood = ("I have " + testStrip + " test strips and " + lancet + " lancets, so I can test my blood");
		   } else {
		   var testBlood = ("I have " + testStrip + " test strips and " + lancet + " lancets, so I am unable to test my blood");
		   }
		   return testBlood;
};
checkBlood(0 , 10);

/*
// Number

// String

// Array



// recheck the boolean function on the chart - need two variables to compare!

alert("JavaScript works!");
*/