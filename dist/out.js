(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _App = _interopRequireDefault(require("./modules/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Promise.all([// Resource loader modules
mw.loader.using(['mediawiki.util', 'mediawiki.api', 'mediawiki.Title']), // Page ready
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
  console.log({
    greeting2: greeting2
  }); // Example: Using a MedaiWiki ResourceLoader module (loaded in index.js)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJteXNjcmlwdG5hbWUtc3JjL2luZGV4LmpzIiwibXlzY3JpcHRuYW1lLXNyYy9tb2R1bGVzL0FwcC5qcyIsIm15c2NyaXB0bmFtZS1zcmMvbW9kdWxlcy9oZWxsby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQSxPQUFPLENBQUMsR0FBUixDQUFZLENBQ1g7QUFDQSxFQUFFLENBQUMsTUFBSCxDQUFVLEtBQVYsQ0FBZ0IsQ0FBQyxnQkFBRCxFQUFtQixlQUFuQixFQUFvQyxpQkFBcEMsQ0FBaEIsQ0FGVyxFQUdYO0FBQ0EsQ0FBQyxDQUFDLEtBSlMsQ0FBWixFQUtHLElBTEgsQ0FLUSxZQUFXO0FBQ2xCO0FBQ0EsQ0FQRDs7Ozs7Ozs7OztBQ0ZBOzs7O0FBRUEsSUFBTSxHQUFHLEdBQUcsU0FBTixHQUFNLEdBQU07QUFDZDtBQUNBLE1BQU0sT0FBTyxHQUFHLElBQWhCO0FBQ0EsTUFBTSxTQUFTLEdBQUcsdUJBQU0sT0FBTixDQUFsQjtBQUNBLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLFNBQXpCO0FBQ0EsTUFBTSxTQUFTLEdBQUcsd0JBQWxCO0FBQ0EsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZO0FBQUMsSUFBQSxTQUFTLEVBQVQ7QUFBRCxHQUFaLEVBTmMsQ0FRZDs7QUFDQSxNQUFJLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFQLEVBQVY7QUFDQSxNQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBSCxDQUFVLEdBQVYsQ0FBYyxhQUFkLENBQVQ7QUFDQSxFQUFBLEdBQUcsQ0FBQyxHQUFKLENBQVM7QUFDWCxJQUFBLE1BQU0sRUFBRSxPQURHO0FBRVgsSUFBQSxPQUFPLEVBQUUsRUFGRTtBQUdYLElBQUEsSUFBSSxFQUFFLENBQUMsV0FBRCxFQUFjLE1BQWQsQ0FISztBQUlYLElBQUEsTUFBTSxFQUFFLENBQUMsTUFBRCxFQUFTLFNBQVQsQ0FKRztBQUtYLElBQUEsT0FBTyxFQUFFLENBTEU7QUFNWCxJQUFBLEtBQUssRUFBRTtBQU5JLEdBQVQsRUFPQyxJQVBELENBT00sVUFBQSxRQUFRLEVBQUk7QUFDZCxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksVUFBWixFQUF3QixRQUF4QjtBQUNILEdBVEQ7QUFVSCxDQXJCRDs7ZUF1QmUsRzs7Ozs7Ozs7Ozs7QUN6QmYsSUFBSSxLQUFLLEdBQUcsU0FBUixLQUFRLENBQVMsSUFBVCxFQUFlO0FBQ3ZCLFNBQU8sWUFBWSxJQUFaLElBQWtCLE9BQXpCO0FBQ0gsQ0FGRDs7ZUFJZSxLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IEFwcCBmcm9tICcuL21vZHVsZXMvQXBwJztcblxuUHJvbWlzZS5hbGwoW1xuXHQvLyBSZXNvdXJjZSBsb2FkZXIgbW9kdWxlc1xuXHRtdy5sb2FkZXIudXNpbmcoWydtZWRpYXdpa2kudXRpbCcsICdtZWRpYXdpa2kuYXBpJywgJ21lZGlhd2lraS5UaXRsZSddKSxcblx0Ly8gUGFnZSByZWFkeVxuXHQkLnJlYWR5XG5dKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRBcHAoKTtcbn0pO1xuIiwiaW1wb3J0IGhlbGxvIGZyb20gJy4vaGVsbG8nO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgLy8gRXhhbXBsZTogVXNpbmcgYSBjdXN0b20gbW9kdWxlIChpbXBvcnRlZCBhYm92ZSlcbiAgICBjb25zdCBoZWxsb1RvID0gXCJtZVwiO1xuICAgIGNvbnN0IGdyZWV0aW5nMSA9IGhlbGxvKGhlbGxvVG8pO1xuICAgIGNvbnNvbGUubG9nKFwiZ3JlZXRpbmcxXCIsIGdyZWV0aW5nMSk7XG4gICAgY29uc3QgZ3JlZXRpbmcyID0gaGVsbG8oKTtcbiAgICBjb25zb2xlLmxvZyh7Z3JlZXRpbmcyfSk7XG4gICAgXG4gICAgLy8gRXhhbXBsZTogVXNpbmcgYSBNZWRhaVdpa2kgUmVzb3VyY2VMb2FkZXIgbW9kdWxlIChsb2FkZWQgaW4gaW5kZXguanMpXG4gICAgdmFyIGFwaSA9IG5ldyBtdy5BcGkoKTtcbiAgICB2YXIgaWQgPSBtdy5jb25maWcuZ2V0KCd3Z0FydGljbGVJZCcpO1xuICAgIGFwaS5nZXQoIHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0cGFnZWlkczogaWQsXG5cdFx0cHJvcDogWydyZXZpc2lvbnMnLCAnaW5mbyddLFxuXHRcdHJ2cHJvcDogWyd1c2VyJywgJ2NvbnRlbnQnXSxcblx0XHRydmxpbWl0OiAxLFxuXHRcdHJ2ZGlyOiAnbmV3ZXInXG5cdH0gKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJ2YXIgaGVsbG8gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIFwiSGVsbG8sIFwiICsgbmFtZXx8XCJ3b3JsZFwiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVsbG87Il19
