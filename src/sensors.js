
const imu = require("node-sense-hat").Imu;
const JoystickLib = require("node-sense-hat").Joystick;
const senseLeds = require('sense-hat-led');
const barraColor = [255, 0, 0];
const _ = require('lodash');
const lodash = _;


const IMU = new imu.IMU();

const barra = {
	size: 2,
	colour: barraColor,
	positions: [[0, 3], [0, 4]]
};

var X = [255, 0, 0];  // Red
var O = [255, 255, 255];  // White

var questionMark = [
O, O, O, X, X, O, O, O,
O, O, X, O, O, X, O, O,
O, O, O, O, O, X, O, O,
O, O, O, O, X, O, O, O,
O, O, O, X, O, O, O, O,
O, O, O, X, O, O, O, O,
O, O, O, O, O, O, O, O,
O, O, O, X, O, O, O, O
];

senseLeds.setPixels(questionMark);

senseLeds.getPixels((err, pixelArray)=>{
var arrayNueva = _.clone(pixelArray

	arrayNueva[55]=[0,255,0];
		arrayNueva[56]=[0,255,0];

	arrayNueva[57]=[0,255,0];

	arrayNueva[58]=[0,255,0];

	arrayNueva[59]=[0,255,0];
	arrayNueva[60]=[0,255,0];

setTimeout(()=>{
		senseLeds.setPixels(arrayNueva);

}, 3000)

});



// const pressCallback = (direction) = {
//
//   	// const sensorData = null;
//
//   	IMU.getValue((err, data) => {
//   		if (err !== null) {
// 		    console.error("Could not read sensor data: ", err);
// 		    return;
// 			}
// 		// sensorData = data;
//   	});
//
//   	switch(direction) {
//   		case "up":
//   		 	console.log("Temp is: ", sensorData.temperature);
//   		 	break;
//   		 case "down":
//   		 	console.log("Humidity is: ", sensorData.humidity);
//   		 	break;
//   	}
// }

/*const holdCallback = (direction) => {

  	const sensorData = null;

  	IMU.getValue((err, data) => {
  	// 	if (err !== null) {
		 //    console.error("Could not read sensor data: ", err);
		 //    return;
    // }
		 //  sensorData = data;
  	// });

	  	switch(direction) {
	  		case "up":
	  			console.log("Gyroscope is: ", JSON.stringify(data.gyro, null, "  "));
	  		 	break;
	  		case "down":
	  			console.log("Temp is: ", data.temperature);
	  			break;
	  	}
  	});

}



JoystickLib.getJoystick().then(joystick => {
  //joystick.on("press", pressCallback);
  joystick.on("hold", holdCallback);
});
*/
setInterval(() => {

	IMU.getValue((err, data) => {
	  if (err !== null) {
	    console.error("Could not read sensor data: ", err);
	    return;
	  }

	  console.log("Accelleration is: ", data.accel.x,data.accel.y);
	  //console.log("Gyroscope is: ", JSON.stringify(data.gyro, null, "  "));
	  //console.log("Compass is: ", JSON.stringify(data.compass, null, "  "));
	  /*console.log("Fusion data is: ", JSON.stringify(data.fusionPose, null, "  "));

	  console.log("Temp is: ", data.temperature);
	  console.log("Pressure is: ", data.pressure);
	  console.log("Humidity is: ", data.humidity);*/
	});


},5000);


