// Santiago Wiltre
// SDI 1301
// Project 3
// SDI Java Script Project 3

// Global Variables
var status ="yes";
var roadConditions ="Good";
var kindOFtrip = " If weather permit, we are going to a ski trip, ";
var when = "The week of New Years 2013";

//JSON Data
var skiAndRidersInfo = {
	skiers: [
		{"name": "Wiltre",   "equipment": "Skis",       "level": 3},
		{"name": "Nathalie", "equipment": "Skis",       "level": 1},
		{"name": "Jonathan", "equipment": "Snow Board", "level": 3},
		{"name": "Jennifer", "equipment": "Snow Board", "level": 1}
	]
};

//For loop in order to isplay JSON Data

var data = function(dataInfo){
	for (var i = 0; i<dataInfo.skiers.length; i++){
		var skier = dataInfo.skiers[i];
		console.log(skier.name + " will use " + skier.equipment + " setup to level " + skier.level); 
	};
};

// Method Procedure
var TripStatus ={
	status: function(status){
	if ((status === "yes" || status === "Yes") && roadConditions === "Good") {
		console.log (when + kindOFtrip);	
	} else {
		console.log ("Waiting for weather report");	
	};

	}
};

//Main Code 
var skiersData= data(skiAndRidersInfo);

console.log(skiAndRidersInfo.skiers.length)
TripStatus.status(status);











// From Here below everything is for reference or testing. The final code
// will not include anything below this line. =



// Reference for syntax
// array syntax || var arr =[];  
// Function Syntax || var fun = function(){};
// Object Syntax || var obj={};


//object example for reference. 
  
var cube ={
	name: "My nice Cube",
	length: 10,
	width: 5,
	height: 5,   
	densiti: "fat",
	area: function(){
			var totalArea = this.height * this.width * this.length;
			return totalArea;
	},
	arr: [3,true,2,],
	json: [
		{"time":5, "clasification":"first", "passNextRount": true}
		]
		

};
// Playing with the mutator and accesor. 
console.log ("Total area is " + cube.area());
console.log (cube.name);
var key = "name";
console.log (cube[key]);

for (var key in cube) {
	console.log ("key: " + key + ", Value : " + cube[key]);
	
};