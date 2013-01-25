// Santiago Wiltre
// SDI 1301
// Project 3
// SDI Java Script Project 3

//JSON Data
var skiAndRidersInfo = {
	skiers: [
		{"name": "Wiltre",   "equipment": "Skis",       "level": 3},
		{"name": "Nathalie", "equipment": "Skis",       "level": 1},
		{"name": "Jonathan", "equipment": "Snow Board", "level": 3},
		{"name": "Jennifer", "equipment": "Snow Board", "level": 1}
	]
};


// Global Variables
var status ="yes";
var roadConditions ="Good";
var kindOFtrip = " If weather permit, we are going to a ski trip, ";
var when = "The week of New Years 2013";
var weatherTemperatures= [{"current":45, "good":33 }];
var numberOfSkiers = skiAndRidersInfo.skiers.length;



// Method Procedure
var TripStatus ={
	statusInput: function(status){
		if ((status === "yes" || status === "Yes") && roadConditions === "Good") {
			console.log (when + kindOFtrip);	
		} else {
			console.log ("Waiting for weather report");	
		};
	}
};

// Boolean Method
var weatherCheck ={
	status:function (currentWeather,goodWeather){
		if ((currentWeather <= goodWeather) && roadConditions !== "bad") {
			var goodTime = true;		
		} else {
			var goodTime = false;
		};
		return goodTime;
	}
};

// Method Functions
var tripDetails ={
	we:skiAndRidersInfo.skiers.length,
	thanks:" of us want to said thanks for planning the trip",
	organizers:function (plannerA,plannerB,tripHappened){
		if(tripHappened == true){
			var thanksMsg = plannerA + " and " + plannerB +". "+ "Yes " + "it is " + status + ". The " + this.we + this.thanks;
			return thanksMsg
		} else {
			var tripCancel = plannerA + " and " + plannerB + " Announce that the trip was canceled do to bad weather";
			return tripCancel
		};
	}
	
};


//Main Code 
var display = tripDetails.organizers(skiAndRidersInfo.skiers[0].name,skiAndRidersInfo.skiers[1].name,false);
console.log(display);
