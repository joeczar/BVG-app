/*jshint esversion: 6 */
const geoCode = require("./utils/geoCode");
const bvgRest = require("./utils/bvg");

const userInput = process.argv[2];

if (!userInput) {
  console.log("Bitte gib deine Standort ein.");
} else {
  geoCode(userInput, (error, { longitude, lattitude, location }) => {
    if (error) {
      return console.log(error);
    } else {
      console.log(location, lattitude, longitude);
      bvgRest(lattitude, longitude, (error, stationData) => {
        if (error) {
          return console.log(error);
        }
        //console.log(location);

        console.log(stationData.body);
      });
    }
  });
}
