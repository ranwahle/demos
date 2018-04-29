parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({5:[function(require,module,exports) {

},{}],4:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=exports.sum=function(e,r){return e+r};
},{}],2:[function(require,module,exports) {
"use strict";var e=require("./styles/index.css"),s=u(e),l=require("./lib");function u(e){return e&&e.__esModule?e:{default:e}}console.log((0,l.sum)(1,2)),console.log(s.default);
},{"./styles/index.css":5,"./lib":4}]},{},[2])
//# sourceMappingURL=/src.6dd8b52c.map