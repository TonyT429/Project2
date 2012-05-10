// SDI 1205 Assignment Week 2
// Student: Anthony Torrez
// Date: May 10th , 2012

var cash = 50
	boxLancets = 10.99,
	boxTestStrips = 25.99,
	treats1 = "MilkBones",
	treats2 = "15lb. Bag of Beneful",
	treats3 = "Chicken Jerky";
	
	
	  
	  
console.log("I crack my eyes open and the clock say 9 am.  And so the day begins.  First things first, get up and check to see if there's enough coffee beans to make a pot.  If not, I'll have to settle for tea.  Let's see, I need 4 scoops to make a pot.");
					
// Procedure

var makeCoffee = function (beans) {
	if (beans >= 4) {
		console.log("Yay! I have " + beans + " scoops.  There is enough beans to make a pot of coffee");
		} else {
			console.log("Hmmm...  Only " + beans + " scoops.  Not enough beans for a pot of coffee, guess it's tea today.");
		}
};

makeCoffee(5);

console.log('Well, while I wait for the coffee to brew, perhaps I should check my blood sugars.  I am running low on test supplies, I hope I have enough for today\'s test');

// Boolean

var checkBlood = function (testStrip, lancet) {
	  if (testStrip >= 1 && lancet >= 1) {
		   var testBlood = ("I have " + testStrip + " test strips and " + lancet + " lancets, so I can test my blood");
		   } else {
		   var testBlood = ("I have " + testStrip + " test strips and " + lancet + " lancets, so I am unable to test my blood at this time. But my blood sugar averages have been good, so I'll just pay strict attention to what I eat until I can get more test supplies");
		   }
		   return testBlood;
};
checkBlood(4 , 0);

console.log('As I grab a cup of coffee, I need to go buy some more test supplies.  Let me see if I have enough cash or else I\'ll have to put it on my card.'); 

// Number

function myWallet () {
	  var change = (cash - boxTestStrips - boxLancets);
	  var myChange = change.toFixed(2);
    return ("$" + myChange);
	  
};
myWallet();

console.log("I think I have enough money left to buy the dogs something");

// String

function cruisePetAisle () {
	var buyTreats = ("treats1" + "treats2" + "treats3");
	return buyTreats
};
cruisePetAisle()

alert("JavaScript works!");







/*
// String

// Array



// recheck the boolean function on the chart - need two variables to compare!


*/