// Santiago Wiltre
// SDI 1301
// Project 3
// SDI Java Script Project 3


//JSON Data
var skiAndRidersInfo = {
	"skiers": [
		{"name": "Wiltre",   "equipment": "Skis",       "level": 3},
		{"name": "Nathalie", "equipment": "Skis",       "level": 1},
		{"name": "Jonathan", "equipment": "Snow Board", "level": 3},
		{"name": "Jennifer", "equipment": "Snow Board", "level": 1}
	]
};

//testing for loop in order to isplay JSON Data

var data = function(dataInfo){
	for (var i = 0; i<dataInfo.skiers.length; i++){
		var skier = dataInfo.skiers[i];
		console.log(skier.name + " will use " + skier.equipment + " setup to level " + skier.level); 
	};
};

data(skiAndRidersInfo);





//working with the object example not for the project is more for reference. 
  
var cube ={
	name: "myCube",
	length: 10,
	width: 5,
	height: 5,
	area: function(){
		var totalArea = this.height * this.width * this.length;
		return totalArea;
	},

};
console.log ("Total area is " + cube.area());