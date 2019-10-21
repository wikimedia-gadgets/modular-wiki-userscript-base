(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _App = _interopRequireDefault(require("./modules/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Promise.all([// Resource loader modules
mw.loader.using(['mediawiki.util', 'mediawiki.api', 'mediawiki.Title', 'mediawiki.RegExp']), // Page ready
$.ready]).then(function () {
  (0, _App["default"])();
});

},{"./modules/App":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _hello = _interopRequireDefault(require("./hello"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = function App() {
  // Example: Using a custom module (imported above)
  var helloTo = "me";
  var greeting1 = (0, _hello["default"])(helloTo);
  console.log("greeting1", greeting1);
  var greeting2 = (0, _hello["default"])();
  console.log("greeting2", greeting2); // Example: Using a MedaiWiki ResourceLoader module (loaded in index.js)

  var api = new mw.Api();
  var id = mw.config.get('wgArticleId');
  api.get({
    action: 'query',
    pageids: id,
    prop: ['revisions', 'info'],
    rvprop: ['user', 'content'],
    rvlimit: 1,
    rvdir: 'newer'
  }).then(function (response) {
    console.log("response", response);
  });
};

var _default = App;
exports["default"] = _default;

},{"./hello":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var hello = function hello(name) {
  return "Hello, " + name || "world";
};

var _default = hello;
exports["default"] = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJteXNjcmlwdG5hbWUtc3JjL2luZGV4LmpzIiwibXlzY3JpcHRuYW1lLXNyYy9tb2R1bGVzL0FwcC5qcyIsIm15c2NyaXB0bmFtZS1zcmMvbW9kdWxlcy9oZWxsby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQSxPQUFPLENBQUMsR0FBUixDQUFZLENBQ1g7QUFDQSxFQUFFLENBQUMsTUFBSCxDQUFVLEtBQVYsQ0FBZ0IsQ0FBQyxnQkFBRCxFQUFtQixlQUFuQixFQUFvQyxpQkFBcEMsRUFBdUQsa0JBQXZELENBQWhCLENBRlcsRUFHWDtBQUNBLENBQUMsQ0FBQyxLQUpTLENBQVosRUFLRyxJQUxILENBS1EsWUFBVztBQUNsQjtBQUNBLENBUEQ7Ozs7Ozs7Ozs7QUNGQTs7OztBQUVBLElBQU0sR0FBRyxHQUFHLFNBQU4sR0FBTSxHQUFNO0FBQ2Q7QUFDQSxNQUFJLE9BQU8sR0FBRyxJQUFkO0FBQ0EsTUFBSSxTQUFTLEdBQUcsdUJBQU0sT0FBTixDQUFoQjtBQUNBLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLFNBQXpCO0FBQ0EsTUFBSSxTQUFTLEdBQUcsd0JBQWhCO0FBQ0EsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFdBQVosRUFBeUIsU0FBekIsRUFOYyxDQVFkOztBQUNBLE1BQUksR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQVAsRUFBVjtBQUNBLE1BQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFILENBQVUsR0FBVixDQUFjLGFBQWQsQ0FBVDtBQUNBLEVBQUEsR0FBRyxDQUFDLEdBQUosQ0FBUztBQUNYLElBQUEsTUFBTSxFQUFFLE9BREc7QUFFWCxJQUFBLE9BQU8sRUFBRSxFQUZFO0FBR1gsSUFBQSxJQUFJLEVBQUUsQ0FBQyxXQUFELEVBQWMsTUFBZCxDQUhLO0FBSVgsSUFBQSxNQUFNLEVBQUUsQ0FBQyxNQUFELEVBQVMsU0FBVCxDQUpHO0FBS1gsSUFBQSxPQUFPLEVBQUUsQ0FMRTtBQU1YLElBQUEsS0FBSyxFQUFFO0FBTkksR0FBVCxFQU9DLElBUEQsQ0FPTSxVQUFTLFFBQVQsRUFBbUI7QUFDckIsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFVBQVosRUFBd0IsUUFBeEI7QUFDSCxHQVREO0FBVUgsQ0FyQkQ7O2VBdUJlLEc7Ozs7Ozs7Ozs7O0FDekJmLElBQUksS0FBSyxHQUFHLFNBQVIsS0FBUSxDQUFTLElBQVQsRUFBZTtBQUN2QixTQUFPLFlBQVksSUFBWixJQUFrQixPQUF6QjtBQUNILENBRkQ7O2VBSWUsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBBcHAgZnJvbSAnLi9tb2R1bGVzL0FwcCc7XHJcblxyXG5Qcm9taXNlLmFsbChbXHJcblx0Ly8gUmVzb3VyY2UgbG9hZGVyIG1vZHVsZXNcclxuXHRtdy5sb2FkZXIudXNpbmcoWydtZWRpYXdpa2kudXRpbCcsICdtZWRpYXdpa2kuYXBpJywgJ21lZGlhd2lraS5UaXRsZScsICdtZWRpYXdpa2kuUmVnRXhwJ10pLFxyXG5cdC8vIFBhZ2UgcmVhZHlcclxuXHQkLnJlYWR5XHJcbl0pLnRoZW4oZnVuY3Rpb24oKSB7XHJcblx0QXBwKCk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgaGVsbG8gZnJvbSAnLi9oZWxsbyc7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICAvLyBFeGFtcGxlOiBVc2luZyBhIGN1c3RvbSBtb2R1bGUgKGltcG9ydGVkIGFib3ZlKVxyXG4gICAgdmFyIGhlbGxvVG8gPSBcIm1lXCI7XHJcbiAgICB2YXIgZ3JlZXRpbmcxID0gaGVsbG8oaGVsbG9Ubyk7XHJcbiAgICBjb25zb2xlLmxvZyhcImdyZWV0aW5nMVwiLCBncmVldGluZzEpO1xyXG4gICAgdmFyIGdyZWV0aW5nMiA9IGhlbGxvKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImdyZWV0aW5nMlwiLCBncmVldGluZzIpO1xyXG4gICAgXHJcbiAgICAvLyBFeGFtcGxlOiBVc2luZyBhIE1lZGFpV2lraSBSZXNvdXJjZUxvYWRlciBtb2R1bGUgKGxvYWRlZCBpbiBpbmRleC5qcylcclxuICAgIHZhciBhcGkgPSBuZXcgbXcuQXBpKCk7XHJcbiAgICB2YXIgaWQgPSBtdy5jb25maWcuZ2V0KCd3Z0FydGljbGVJZCcpO1xyXG4gICAgYXBpLmdldCgge1xyXG5cdFx0YWN0aW9uOiAncXVlcnknLFxyXG5cdFx0cGFnZWlkczogaWQsXHJcblx0XHRwcm9wOiBbJ3JldmlzaW9ucycsICdpbmZvJ10sXHJcblx0XHRydnByb3A6IFsndXNlcicsICdjb250ZW50J10sXHJcblx0XHRydmxpbWl0OiAxLFxyXG5cdFx0cnZkaXI6ICduZXdlcidcclxuXHR9ICkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJ2YXIgaGVsbG8gPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICByZXR1cm4gXCJIZWxsbywgXCIgKyBuYW1lfHxcIndvcmxkXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWxsbzsiXX0=
