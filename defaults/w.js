/*
 (c) 2015-2016, Timur Fatykhov
 This set of functions intended to work with node-red application based on WINK hub API
 https://github.com/tfatykhov/WinkRedNode/
*/



(function (){
var wnr = {
        "w1":[ -53, -52, -100, -51, -54, -102, -55, -50, -53, -51, -55, -58, -54, -50, -103, -53, -49, -58, -102, -53, -50, -98, -56, -54, -99, -99, -51, -53, -102, -100, -100, -54 ],
        "w2":[ -100, -103, -103, -53, -53, -50, -54, -103, -51, -55, -102, -54, -56, -101, -57, -56, -100, -50, -100, -100, -56, -101, -54, -55, -99, -99, -57, -52, -100, -56, -49, -54 ]
      };

if (typeof define === 'function' && define.amd) define(wnr);
else if (typeof module !== 'undefined') module.exports = wnr;
else window.wnr = wnr;
}());

