
const imu = require("node-sense-hat").Imu;
const JoystickLib = require("node-sense-hat").Joystick;


const IMU = new imu.IMU();

const pressCallback = (direction) = {

  	const sensorData = null;
 
  	IMU.getValue((err, data) => {
  		if (err !== null) {
		    console.error("Could not read sensor data: ", err);
		    return;
		}
		sensorData = data;
  	});

  	switch(direction) {
  		case "up":
  		 	console.log("Temp is: ", sensorData.temperature);
  		 	break;
  		 case "down":
  		 	console.log("Humidity is: ", sensorData.humidity);
  		 	break;
  	}
};

const holdCallback = (direction) => {

  	const sensorData = null;
 
  	IMU.getValue((err, data) => {
  		if (err !== null) {
		    console.error("Could not read sensor data: ", err);
		    return;
		}
		sensorData = data;
  	});

  	switch(direction) {
  		case "up":
	  		console.log("Accelleration is: ", JSON.stringify(sensorData.accel, null, "  "));
  		 	break;
  	}
}



JoystickLib.getJoystick().then(joystick => {
  joystick.on("press", pressCallback);
  joystick.on("hold", holdCallback);
});
/*
setInterval(() => {

	IMU.getValue((err, data) => {
	  if (err !== null) {
	    console.error("Could not read sensor data: ", err);
	    return;
	  }

	  console.log("Accelleration is: ", JSON.stringify(data.accel, null, "  "));
	  console.log("Gyroscope is: ", JSON.stringify(data.gyro, null, "  "));
	  console.log("Compass is: ", JSON.stringify(data.compass, null, "  "));
	  console.log("Fusion data is: ", JSON.stringify(data.fusionPose, null, "  "));

	  console.log("Temp is: ", data.temperature);
	  console.log("Pressure is: ", data.pressure);
	  console.log("Humidity is: ", data.humidity);
	});


},5000);
*/

