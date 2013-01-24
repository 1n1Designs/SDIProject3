// Santiago Wiltre
// SDI 1301
// Project 3
// SDI Java Script Project 3

// Global Variables
var status ="yes";
var roadConditions ="Good";
var kindOFtrip = " If weather permit, we are going to a ski trip, ";
var when = "The week of New Years 2013";
var weatherTemperatures= [{"current":45, "good":33 }];


//JSON Data
var skiAndRidersInfo = {
	skiers: [
		{"name": "Wiltre",   "equipment": "Skis",       "level": 3},
		{"name": "Nathalie", "equipment": "Skis",       "level": 1},
		{"name": "Jonathan", "equipment": "Snow Board", "level": 3},
		{"name": "Jennifer", "equipment": "Snow Board", "level": 1}
	]
};


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















