// SDI 1205 Assignment Week 2
// Student: Anthony Torrez
// Date: May 10th , 2012

// Global Variables

var cash = 74
	boxLancets = 10.99,
	boxTestStrips = 25.99,
	treats1 = "MilkBones",
	treats2 = "15lb. Bag of Beneful",
	treats3 = "Chicken Jerky",
	toDo =["water the garden", "wash the dishes", "feed the dogs", "do homework"];  

	  
console.log("I crack my eyes open and the clock say 9 am.  And so the day begins.");
console.log("First things first, get up and check to see if there's enough coffee beans"); 
console.log("to make a pot.  If not, I'll have to settle for tea.  Let's see, I need 4");
console.log("scoops to make a pot.");
console.log(" ");		
// Procedure

var makeCoffee = function (beans) {
	if (beans >= 4) {
		console.log("Yay! I have " + beans + " scoops.  There is enough beans to make a pot of coffee");
		} else {
			console.log("Hmmm...  Only " + beans + " scoops.  Not enough beans for a pot of coffee, guess it's tea today.");
		}
};

makeCoffee(3);

console.log(" ");
console.log("Well, while I wait for the coffee to brew, perhaps I should check my blood sugars.");
console.log("I am running low on test supplies, I hope I have enough for today\'s test.");
console.log(" ");
// Boolean

var checkBlood = function (testStrip, lancet) {
	  if (testStrip >= 1 && lancet >= 1) {
		   var testBlood = ("I have " + testStrip + " test strips and " + lancet + " lancets, so I can test my blood.  Nothing like stapling your finger first thing in the morning.");
		   } else {
		   var testBlood = ("I have " + testStrip + " test strips and " + lancet + " lancets, so I am unable to test my blood at this time.  So I'll just pay strict attention to what I eat until I can get more test supplies.");
		   }
		   return testBlood;
};
console.log(checkBlood(5, 10));

console.log(" ");
console.log("After I drink a cup of coffee, I see I will need to go buy some more test supplies.");
console.log("Let me see if I have enough cash or else I\'ll have to put it on my card.");
console.log("Okay I have $" + cash + " before buying my test strips and lancets"); 
console.log("Guess I'll head to the store");
console.log(" ");

//  Number

function myWallet () {
	  var change = (cash - boxTestStrips - boxLancets);
	  var myChange = change.toFixed(2);
    return ("$" + myChange);
	  
};
myWallet();

console.log("After paying for my test strips and lancets, I have " + (myWallet()) + " left.");
console.log("I think I'll buy something for my dogs. But what?"); 
console.log(" ");

// String

function shop4Dogs () {
	var buyTreats = (treats1 + ", " + treats2 + " and " + treats3 + ".  Hmm... I don't think I have enough to buy everything so I think " + treats2 + " and maybe a box of " + treats1 + " will have to do.");
	return buyTreats
};
console.log("Okay, now that I'm in the Pet Section, what do we have .... " );
console.log(shop4Dogs());

console.log("Okay, time to head home.  I still have stuff to do");


// alert("JavaScript works!");






