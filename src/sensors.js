const imu = require("node-sense-hat").Imu;
const JoystickLib = require("node-sense-hat").Joystick;


const IMU = new imu.IMU();

JoystickLib.getJoystick().then(joystick => {
  joystick.on("press", direction => {
    console.log("Joystick pressed in " + direction + " direction");
  });
  joystick.on("release", direction => {
    console.log("Joystick released in " + direction + " direction");
  });
  joystick.on("hold", direction => {
    console.log("The joystick is being held in the " + direction + " direction");
  });
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

