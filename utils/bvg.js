/*jshint esversion: 6 */
const request = require('request');

const bvgRest = (  longitude, latitude, callback) => {
 const url = `https://1.bvg.transport.rest/stations/nearby?latitude=${latitude}&longitude=${longitude}` 
 request({ url, json: true}, (error, request) => {
   if (error) {
    callback("Couldn't reach service.", undefined);
   } else {
    callback(undefined, request)
   }
 });

};

module.exports = bvgRest;
