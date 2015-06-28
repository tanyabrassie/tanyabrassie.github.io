// var ticketBooth = document.getElementById("");
var svgs =  document.querySelectorAll("svg");

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

Velocity(svgs, {fillOpacity: '0'});
Velocity(svgs, {fillOpacity: '1'}, {delay: 2000, duration: 1500});



// Velocity(rivets, {fillOpacity: '.2', strokeOpacity: '.8'});
// Velocity(subBody, {stroke: '#333', strokeOpacity: '.9', strokeDasharray: '1px 1px'});

svgs.addEventListener("mouseenter", function () {
  Velocity(svgs, {fillOpacity: '1'}, {delay: 2000, duration: 1500});

 }, false);
  



// // ship.addEventListener("mouseleave", function () {
// //    Velocity(ship, { opacity: '1'}, 500);
// // }, false);

// submarine.addEventListener("mouseenter", function () {
//   Velocity(submarine, { fillOpacity: '1', stroke: '#fff',}, 1000);
//  }, false);

// scubaMan.addEventListener("mouseenter", function () {
//    Velocity(scubaMan, { fillOpacity: '1',}, 1000);
//  }, false);



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