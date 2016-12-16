/* eslint-disable */
require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _express = __webpack_require__(1);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _fsExtra = __webpack_require__(2);
	
	var _fsExtra2 = _interopRequireDefault(_fsExtra);
	
	var _log = __webpack_require__(3);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _morgan = __webpack_require__(4);
	
	var _morgan2 = _interopRequireDefault(_morgan);
	
	var _path = __webpack_require__(5);
	
	var _path2 = _interopRequireDefault(_path);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DEFAULT_LOG_NAME = 'static-server.txt';
	
	var StaticServerLauncher = function () {
	  function StaticServerLauncher() {
	    _classCallCheck(this, StaticServerLauncher);
	  }
	
	  _createClass(StaticServerLauncher, [{
	    key: 'onPrepare',
	    value: function onPrepare(_ref) {
	      var _this = this;
	
	      var folders = _ref.staticServerFolders,
	          _ref$staticServerLog = _ref.staticServerLog,
	          logging = _ref$staticServerLog === undefined ? false : _ref$staticServerLog,
	          _ref$staticServerPort = _ref.staticServerPort,
	          port = _ref$staticServerPort === undefined ? 4567 : _ref$staticServerPort,
	          _ref$staticServer = _ref.staticServer404,
	          server404 = _ref$staticServer === undefined ? "" : _ref$staticServer;
	
	      if (!folders) {
	        return Promise.resolve();
	      }
	
	      this.server = (0, _express2.default)();
	      this.folders = folders;
	      this.port = port;
	
	      if (logging) {
	        var stream = void 0;
	        if (typeof logging === 'string') {
	          var file = _path2.default.join(logging, DEFAULT_LOG_NAME);
	          _fsExtra2.default.createFileSync(file);
	          stream = _fsExtra2.default.createWriteStream(file);
	        }
	        this.log = new _log2.default('debug', stream);
	        this.server.use((0, _morgan2.default)('tiny', { stream: stream }));
	      } else {
	        this.log = new _log2.default('emergency');
	      }
	
	      (Array.isArray(folders) ? folders : [folders]).forEach(function (folder) {
	        _this.log.debug('Mounting folder `%s` at `%s`', _path2.default.resolve(folder.path), folder.mount);
	        _this.server.use(folder.mount, _express2.default.static(folder.path));
	      });
	
	      if (server404) {
	        this.server.use(/.*/, function (req, res) {
	          res.sendFile(_path2.default.resolve(server404));
	        });
	      }
	
	      return new Promise(function (resolve, reject) {
	        _this.server.listen(_this.port, function (err) {
	          if (err) {
	            reject(err);
	          }
	
	          _this.log.info('Static server running at http://localhost:' + port);
	          resolve();
	        });
	      });
	    }
	  }]);
	
	  return StaticServerLauncher;
	}();
	
	exports.default = StaticServerLauncher;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("fs-extra");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("log");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGQ0MGRmMTI3NGYyMWNkM2ViNzkiLCJ3ZWJwYWNrOi8vLy4vbGF1bmNoZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzLWV4dHJhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbIkRFRkFVTFRfTE9HX05BTUUiLCJTdGF0aWNTZXJ2ZXJMYXVuY2hlciIsImZvbGRlcnMiLCJzdGF0aWNTZXJ2ZXJGb2xkZXJzIiwic3RhdGljU2VydmVyTG9nIiwibG9nZ2luZyIsInN0YXRpY1NlcnZlclBvcnQiLCJwb3J0Iiwic3RhdGljU2VydmVyNDA0Iiwic2VydmVyNDA0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXJ2ZXIiLCJzdHJlYW0iLCJmaWxlIiwiam9pbiIsImNyZWF0ZUZpbGVTeW5jIiwiY3JlYXRlV3JpdGVTdHJlYW0iLCJsb2ciLCJ1c2UiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiZm9sZGVyIiwiZGVidWciLCJwYXRoIiwibW91bnQiLCJzdGF0aWMiLCJyZXEiLCJyZXMiLCJzZW5kRmlsZSIsInJlamVjdCIsImxpc3RlbiIsImVyciIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxLQUFNQSxtQkFBbUIsbUJBQXpCOztLQUVxQkMsb0I7Ozs7Ozs7cUNBRW1EO0FBQUE7O0FBQUEsV0FEckNDLE9BQ3FDLFFBRDFEQyxtQkFDMEQ7QUFBQSx1Q0FENUJDLGVBQzRCO0FBQUEsV0FEWEMsT0FDVyx3Q0FERCxLQUNDO0FBQUEsd0NBQWxFQyxnQkFBa0U7QUFBQSxXQUFoREMsSUFBZ0QseUNBQXpDLElBQXlDO0FBQUEsb0NBQW5DQyxlQUFtQztBQUFBLFdBQWxCQyxTQUFrQixxQ0FBTixFQUFNOztBQUNwRSxXQUFJLENBQUNQLE9BQUwsRUFBYztBQUNaLGdCQUFPUSxRQUFRQyxPQUFSLEVBQVA7QUFDRDs7QUFFRCxZQUFLQyxNQUFMLEdBQWMsd0JBQWQ7QUFDQSxZQUFLVixPQUFMLEdBQWVBLE9BQWY7QUFDQSxZQUFLSyxJQUFMLEdBQVlBLElBQVo7O0FBRUEsV0FBSUYsT0FBSixFQUFhO0FBQ1gsYUFBSVEsZUFBSjtBQUNBLGFBQUksT0FBT1IsT0FBUCxLQUFtQixRQUF2QixFQUFpQztBQUMvQixlQUFNUyxPQUFPLGVBQUtDLElBQUwsQ0FBVVYsT0FBVixFQUFtQkwsZ0JBQW5CLENBQWI7QUFDQSw2QkFBR2dCLGNBQUgsQ0FBa0JGLElBQWxCO0FBQ0FELG9CQUFTLGtCQUFHSSxpQkFBSCxDQUFxQkgsSUFBckIsQ0FBVDtBQUNEO0FBQ0QsY0FBS0ksR0FBTCxHQUFXLGtCQUFRLE9BQVIsRUFBaUJMLE1BQWpCLENBQVg7QUFDQSxjQUFLRCxNQUFMLENBQVlPLEdBQVosQ0FBZ0Isc0JBQU8sTUFBUCxFQUFlLEVBQUVOLGNBQUYsRUFBZixDQUFoQjtBQUNELFFBVEQsTUFTTztBQUNMLGNBQUtLLEdBQUwsR0FBVyxrQkFBUSxXQUFSLENBQVg7QUFDRDs7QUFFRCxRQUFDRSxNQUFNQyxPQUFOLENBQWNuQixPQUFkLElBQXlCQSxPQUF6QixHQUFtQyxDQUFFQSxPQUFGLENBQXBDLEVBQWlEb0IsT0FBakQsQ0FBeUQsVUFBQ0MsTUFBRCxFQUFZO0FBQ25FLGVBQUtMLEdBQUwsQ0FBU00sS0FBVCxDQUFlLDhCQUFmLEVBQStDLGVBQUtiLE9BQUwsQ0FBYVksT0FBT0UsSUFBcEIsQ0FBL0MsRUFBMEVGLE9BQU9HLEtBQWpGO0FBQ0EsZUFBS2QsTUFBTCxDQUFZTyxHQUFaLENBQWdCSSxPQUFPRyxLQUF2QixFQUE4QixrQkFBUUMsTUFBUixDQUFlSixPQUFPRSxJQUF0QixDQUE5QjtBQUNELFFBSEQ7O0FBS0EsV0FBSWhCLFNBQUosRUFBZTtBQUNiLGNBQUtHLE1BQUwsQ0FBWU8sR0FBWixDQUFnQixJQUFoQixFQUFzQixVQUFTUyxHQUFULEVBQWNDLEdBQWQsRUFBbUI7QUFDdkNBLGVBQUlDLFFBQUosQ0FBYSxlQUFLbkIsT0FBTCxDQUFhRixTQUFiLENBQWI7QUFDRCxVQUZEO0FBR0Q7O0FBRUQsY0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVb0IsTUFBVixFQUFxQjtBQUN0QyxlQUFLbkIsTUFBTCxDQUFZb0IsTUFBWixDQUFtQixNQUFLekIsSUFBeEIsRUFBOEIsVUFBQzBCLEdBQUQsRUFBUztBQUNyQyxlQUFJQSxHQUFKLEVBQVM7QUFDUEYsb0JBQU9FLEdBQVA7QUFDRDs7QUFFRCxpQkFBS2YsR0FBTCxDQUFTZ0IsSUFBVCxnREFBMkQzQixJQUEzRDtBQUNBSTtBQUNELFVBUEQ7QUFRRCxRQVRNLENBQVA7QUFVRDs7Ozs7O21CQTdDa0JWLG9COzs7Ozs7QUNSckIscUM7Ozs7OztBQ0FBLHNDOzs7Ozs7QUNBQSxpQzs7Ozs7O0FDQUEsb0M7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImxhdW5jaGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGQ0MGRmMTI3NGYyMWNkM2ViNzkiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgTG9nIGZyb20gJ2xvZyc7XG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuY29uc3QgREVGQVVMVF9MT0dfTkFNRSA9ICdzdGF0aWMtc2VydmVyLnR4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpY1NlcnZlckxhdW5jaGVyIHtcbiAgb25QcmVwYXJlKHsgc3RhdGljU2VydmVyRm9sZGVyczogZm9sZGVycywgc3RhdGljU2VydmVyTG9nOiBsb2dnaW5nID0gZmFsc2UsXG4gICAgICBzdGF0aWNTZXJ2ZXJQb3J0OiBwb3J0ID0gNDU2Nywgc3RhdGljU2VydmVyNDA0OiBzZXJ2ZXI0MDQgPSBcIlwiIH0pIHtcbiAgICBpZiAoIWZvbGRlcnMpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNlcnZlciA9IGV4cHJlc3MoKTtcbiAgICB0aGlzLmZvbGRlcnMgPSBmb2xkZXJzO1xuICAgIHRoaXMucG9ydCA9IHBvcnQ7XG5cbiAgICBpZiAobG9nZ2luZykge1xuICAgICAgbGV0IHN0cmVhbTtcbiAgICAgIGlmICh0eXBlb2YgbG9nZ2luZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IHBhdGguam9pbihsb2dnaW5nLCBERUZBVUxUX0xPR19OQU1FKTtcbiAgICAgICAgZnMuY3JlYXRlRmlsZVN5bmMoZmlsZSk7XG4gICAgICAgIHN0cmVhbSA9IGZzLmNyZWF0ZVdyaXRlU3RyZWFtKGZpbGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2cgPSBuZXcgTG9nKCdkZWJ1ZycsIHN0cmVhbSk7XG4gICAgICB0aGlzLnNlcnZlci51c2UobW9yZ2FuKCd0aW55JywgeyBzdHJlYW0gfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZyA9IG5ldyBMb2coJ2VtZXJnZW5jeScpO1xuICAgIH1cblxuICAgIChBcnJheS5pc0FycmF5KGZvbGRlcnMpID8gZm9sZGVycyA6IFsgZm9sZGVycyBdKS5mb3JFYWNoKChmb2xkZXIpID0+IHtcbiAgICAgIHRoaXMubG9nLmRlYnVnKCdNb3VudGluZyBmb2xkZXIgYCVzYCBhdCBgJXNgJywgcGF0aC5yZXNvbHZlKGZvbGRlci5wYXRoKSwgZm9sZGVyLm1vdW50KTtcbiAgICAgIHRoaXMuc2VydmVyLnVzZShmb2xkZXIubW91bnQsIGV4cHJlc3Muc3RhdGljKGZvbGRlci5wYXRoKSk7XG4gICAgfSk7XG5cbiAgICBpZiAoc2VydmVyNDA0KSB7XG4gICAgICB0aGlzLnNlcnZlci51c2UoLy4qLywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgICAgICAgcmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZShzZXJ2ZXI0MDQpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnNlcnZlci5saXN0ZW4odGhpcy5wb3J0LCAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9nLmluZm8oYFN0YXRpYyBzZXJ2ZXIgcnVubmluZyBhdCBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGF1bmNoZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzLWV4dHJhXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnMtZXh0cmFcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2dcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2dcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb3JnYW5cIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=