/*jshint esversion: 6 */
const geoCode = require("./utils/geoCode");

const userInput = process.argv[2];

if (!userInput){
  console.log('Bitte gib deine Standort ein.');
} else {
  geoCode(userInput, (error, {lattitude, longitude, location}) => {
    if (error) {
      return console.log(error);
    } else {
      console.log(location, lattitude, longitude);
      
    }
  });
}