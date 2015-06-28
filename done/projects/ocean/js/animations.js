var ship = document.getElementById("ship");
var scubaMan = document.getElementById("scuba-man");
var shipWave = document.querySelectorAll(".ship-wave");
var submarine = document.getElementById("submarine");
var lights = document.querySelectorAll(".lights");
var subLid = document.querySelectorAll(".sub-lide");
var whaleBody = document.getElementById("whale");
var Clouds = document.querySelectorAll(".cloud--right, .cloud--left");
// var rivets = document.querySelectorAll(".rivets");
// var subBody = document.querySelectorAll(".sub-body");


// shorts.addEventListener("mouseenter", function() {   
//   Velocity(shortsStripes, { fill: '#D9F5FC' }, 500);
//   Velocity(shortsBand, { fill: '#f00031' }, 500);
// }, false);

// shorts.addEventListener("mouseleave", function() {
//   Velocity(shortsStripes, { fill: '#fff' }, 500);
//   Velocity(shortsBand, { fill: '#fff' }, 500);
// }, false);

Velocity(submarine, {fillOpacity: '.2', stroke: '#fff', strokeOpacity: '.8',});
Velocity(ship, {fillOpacity: '.2', stroke: '#0F597A', strokeOpacity: '.4',});
Velocity(scubaMan, {fillOpacity: '.3', strokeOpacity: '.9',});

Velocity(shipWave, {fillOpacity: '1.0', stroke: '#fff'});
Velocity(lights, {strokeOpacity: '.7', strokeWidth: '.5px', stroke: '#D3CD00'});
Velocity(subLid, {rotateZ: 50});
Velocity(whaleBody, {opacity: '1'});
Velocity(Clouds, {opacity: '.4'}, {loop: true, duration: 5000});

// Velocity(rivets, {fillOpacity: '.2', strokeOpacity: '.8'});
// Velocity(subBody, {stroke: '#333', strokeOpacity: '.9', strokeDasharray: '1px 1px'});

ship.addEventListener("mouseenter", function () {
  Velocity(ship, { fillOpacity: '1',  stroke: '#fff'}, 1000);
  Velocity(lights, { strokeOpacity: '.9', strokeWidth: '2px', stroke: '#D3CD00'}, {loop: true, duration: 800});

}, false);
  


// ship.addEventListener("mouseleave", function () {
//    Velocity(ship, { opacity: '1'}, 500);
// }, false);

submarine.addEventListener("mouseenter", function () {
  Velocity(submarine, { fillOpacity: '1', stroke: '#fff',}, 1000);
 }, false);

scubaMan.addEventListener("mouseenter", function () {
   Velocity(scubaMan, { fillOpacity: '1',}, 1000);
 }, false);



// submarine.addEventListener("mouseleave", function () {
//    Velocity(submarine, { opacity: '1'}, 500);
// }, false);
               //window.jQuery = window.$ = require("jquery.min.js");
//("velocity.js");

// $("body").velocity({opacity: 0.5});

// $("#shorts")
//   .mouseenter(function() {
//     $(".shorts-stripes").velocity({ fill: '#D9F5FC' }, { duration: 2500 });
//    $(".shorts-band").velocity({ fill: '#f00031' }, { duration: 2000 });
//   })
//   .mouseleave(function() {
//     $(".shorts-band").velocity({ fill: '#fff' }, { duration: 2500 });
//    $(".shorts-stripes").velocity({ fill: '#fff' }, { duration: 2000 });
//   });