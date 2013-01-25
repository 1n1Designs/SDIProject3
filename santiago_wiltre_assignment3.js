// Santiago Wiltre
// SDI 1301
// Project 3
// SDI Java Script Project 3

//JSON Data
var skiAndRiders = {
	skiers: [
		{"name": "Wiltre",   "equipment": "Skis",       "level": 3},
		{"name": "Nathalie", "equipment": "Skis",       "level": 1},
		{"name": "Jonathan", "equipment": "Snow Board", "level": 3},
		{"name": "Jennifer", "equipment": "Snow Board", "level": 1},
		{"name": "Ismael", "equipment": "Snow Board", "level": 3}
	]
};

// Global Variables
var status ="yes";
var roadConditions ="Good";
var kindOFtrip = " If weather permit, we are going to a ski trip, ";
var when = "The week of New Years 2013";
var weatherTemperatures= [22,33];
var numberOfSkiers = skiAndRiders.skiers.length;

//Global Function


// Method Procedure
var tripStatus ={
	statusInput: function(statusInput){
		if ((statusInput === "yes" || statusInput === "Yes") && roadConditions === "Good") {
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
	we:skiAndRiders.skiers.length,
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

// Method Accessor with for loop and while loop 

var displaySkiersAndRiders ={
	data:function(dataInfo){
		var finalOutput = [];
		for(var i=0; i<dataInfo.skiers.length; i++){
			var skier = dataInfo.skiers[i];
			var  dinfo =(skier.name + " will use " + skier.equipment + " setup to level " + skier.level);
			finalOutput.push(dinfo);
			var key = i;
			var skierName=dataInfo.skiers.name
			while (key < i+1){
				var skierName=dataInfo.skiers[i].name;
				console.log( skierName +" Confirmed assistance");
				key++;
			}
			
		};
		
		return finalOutput
		
	},
	
};


//Main Code 
var tripPlan= tripStatus.statusInput(status);
console.log(tripPlan);
var weather = weatherCheck.status(weatherTemperatures[0],weatherTemperatures[1]);
console.log(weather);
var displayA = tripDetails.organizers(skiAndRiders.skiers[0].name,skiAndRiders.skiers[1].name,weather);
console.log(displayA);
var displayC = displaySkiersAndRiders.data(skiAndRiders);
console.log (displayC[1]);


