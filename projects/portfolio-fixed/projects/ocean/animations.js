// window.jQuery = window.$ = require("jquery.min.js");
// require("js/velocity.min.js");

$("#shorts")
  .mouseenter(function() {
    $(".shorts-stripes").velocity({ fill: '#D9F5FC' }, { duration: 2500 });
   $(".shorts-band").velocity({ fill: '#f00031' }, { duration: 2000 });
  })
  .mouseleave(function() {
    $(".shorts-band").velocity({ fill: '#fff' }, { duration: 2500 });
   $(".shorts-stripes").velocity({ fill: '#fff' }, { duration: 2000 });
  });