/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-router-redux/lib/actions.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-redux/lib/actions.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * This action type will be dispatched by the history actions below.\n * If you're writing a middleware to watch for navigation events, be sure to\n * look for actions of this type.\n */\nvar CALL_HISTORY_METHOD = exports.CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';\n\nfunction updateLocation(method) {\n  return function () {\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return {\n      type: CALL_HISTORY_METHOD,\n      payload: { method: method, args: args }\n    };\n  };\n}\n\n/**\n * These actions correspond to the history API.\n * The associated routerMiddleware will capture these events before they get to\n * your reducer and reissue them as the matching function on your history.\n */\nvar push = exports.push = updateLocation('push');\nvar replace = exports.replace = updateLocation('replace');\nvar go = exports.go = updateLocation('go');\nvar goBack = exports.goBack = updateLocation('goBack');\nvar goForward = exports.goForward = updateLocation('goForward');\n\nvar routerActions = exports.routerActions = { push: push, replace: replace, go: go, goBack: goBack, goForward: goForward };\n\n//# sourceURL=webpack:///./node_modules/react-router-redux/lib/actions.js?");

/***/ }),

/***/ "./node_modules/react-router-redux/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router-redux/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.routerMiddleware = exports.routerActions = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = exports.CALL_HISTORY_METHOD = exports.routerReducer = exports.LOCATION_CHANGE = exports.syncHistoryWithStore = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./node_modules/react-router-redux/lib/reducer.js\");\n\nObject.defineProperty(exports, 'LOCATION_CHANGE', {\n  enumerable: true,\n  get: function get() {\n    return _reducer.LOCATION_CHANGE;\n  }\n});\nObject.defineProperty(exports, 'routerReducer', {\n  enumerable: true,\n  get: function get() {\n    return _reducer.routerReducer;\n  }\n});\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./node_modules/react-router-redux/lib/actions.js\");\n\nObject.defineProperty(exports, 'CALL_HISTORY_METHOD', {\n  enumerable: true,\n  get: function get() {\n    return _actions.CALL_HISTORY_METHOD;\n  }\n});\nObject.defineProperty(exports, 'push', {\n  enumerable: true,\n  get: function get() {\n    return _actions.push;\n  }\n});\nObject.defineProperty(exports, 'replace', {\n  enumerable: true,\n  get: function get() {\n    return _actions.replace;\n  }\n});\nObject.defineProperty(exports, 'go', {\n  enumerable: true,\n  get: function get() {\n    return _actions.go;\n  }\n});\nObject.defineProperty(exports, 'goBack', {\n  enumerable: true,\n  get: function get() {\n    return _actions.goBack;\n  }\n});\nObject.defineProperty(exports, 'goForward', {\n  enumerable: true,\n  get: function get() {\n    return _actions.goForward;\n  }\n});\nObject.defineProperty(exports, 'routerActions', {\n  enumerable: true,\n  get: function get() {\n    return _actions.routerActions;\n  }\n});\n\nvar _sync = __webpack_require__(/*! ./sync */ \"./node_modules/react-router-redux/lib/sync.js\");\n\nvar _sync2 = _interopRequireDefault(_sync);\n\nvar _middleware = __webpack_require__(/*! ./middleware */ \"./node_modules/react-router-redux/lib/middleware.js\");\n\nvar _middleware2 = _interopRequireDefault(_middleware);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nexports.syncHistoryWithStore = _sync2['default'];\nexports.routerMiddleware = _middleware2['default'];\n\n//# sourceURL=webpack:///./node_modules/react-router-redux/lib/index.js?");

/***/ }),

/***/ "./node_modules/react-router-redux/lib/middleware.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-router-redux/lib/middleware.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports['default'] = routerMiddleware;\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./node_modules/react-router-redux/lib/actions.js\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n/**\n * This middleware captures CALL_HISTORY_METHOD actions to redirect to the\n * provided history object. This will prevent these actions from reaching your\n * reducer or any middleware that comes after this one.\n */\nfunction routerMiddleware(history) {\n  return function () {\n    return function (next) {\n      return function (action) {\n        if (action.type !== _actions.CALL_HISTORY_METHOD) {\n          return next(action);\n        }\n\n        var _action$payload = action.payload,\n            method = _action$payload.method,\n            args = _action$payload.args;\n\n        history[method].apply(history, _toConsumableArray(args));\n      };\n    };\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/react-router-redux/lib/middleware.js?");

/***/ }),

/***/ "./node_modules/react-router-redux/lib/reducer.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-redux/lib/reducer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.routerReducer = routerReducer;\n/**\n * This action type will be dispatched when your history\n * receives a location change.\n */\nvar LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';\n\nvar initialState = {\n  locationBeforeTransitions: null\n};\n\n/**\n * This reducer will update the state with the most recent location history\n * has transitioned to. This may not be in sync with the router, particularly\n * if you have asynchronously-loaded routes, so reading from and relying on\n * this state is discouraged.\n */\nfunction routerReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      type = _ref.type,\n      payload = _ref.payload;\n\n  if (type === LOCATION_CHANGE) {\n    return _extends({}, state, { locationBeforeTransitions: payload });\n  }\n\n  return state;\n}\n\n//# sourceURL=webpack:///./node_modules/react-router-redux/lib/reducer.js?");

/***/ }),

/***/ "./node_modules/react-router-redux/lib/sync.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-redux/lib/sync.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports['default'] = syncHistoryWithStore;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./node_modules/react-router-redux/lib/reducer.js\");\n\nvar defaultSelectLocationState = function defaultSelectLocationState(state) {\n  return state.routing;\n};\n\n/**\n * This function synchronizes your history state with the Redux store.\n * Location changes flow from history to the store. An enhanced history is\n * returned with a listen method that responds to store updates for location.\n *\n * When this history is provided to the router, this means the location data\n * will flow like this:\n * history.push -> store.dispatch -> enhancedHistory.listen -> router\n * This ensures that when the store state changes due to a replay or other\n * event, the router will be updated appropriately and can transition to the\n * correct router state.\n */\nfunction syncHistoryWithStore(history, store) {\n  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},\n      _ref$selectLocationSt = _ref.selectLocationState,\n      selectLocationState = _ref$selectLocationSt === undefined ? defaultSelectLocationState : _ref$selectLocationSt,\n      _ref$adjustUrlOnRepla = _ref.adjustUrlOnReplay,\n      adjustUrlOnReplay = _ref$adjustUrlOnRepla === undefined ? true : _ref$adjustUrlOnRepla;\n\n  // Ensure that the reducer is mounted on the store and functioning properly.\n  if (typeof selectLocationState(store.getState()) === 'undefined') {\n    throw new Error('Expected the routing state to be available either as `state.routing` ' + 'or as the custom expression you can specify as `selectLocationState` ' + 'in the `syncHistoryWithStore()` options. ' + 'Ensure you have added the `routerReducer` to your store\\'s ' + 'reducers via `combineReducers` or whatever method you use to isolate ' + 'your reducers.');\n  }\n\n  var initialLocation = void 0;\n  var isTimeTraveling = void 0;\n  var unsubscribeFromStore = void 0;\n  var unsubscribeFromHistory = void 0;\n  var currentLocation = void 0;\n\n  // What does the store say about current location?\n  var getLocationInStore = function getLocationInStore(useInitialIfEmpty) {\n    var locationState = selectLocationState(store.getState());\n    return locationState.locationBeforeTransitions || (useInitialIfEmpty ? initialLocation : undefined);\n  };\n\n  // Init initialLocation with potential location in store\n  initialLocation = getLocationInStore();\n\n  // If the store is replayed, update the URL in the browser to match.\n  if (adjustUrlOnReplay) {\n    var handleStoreChange = function handleStoreChange() {\n      var locationInStore = getLocationInStore(true);\n      if (currentLocation === locationInStore || initialLocation === locationInStore) {\n        return;\n      }\n\n      // Update address bar to reflect store state\n      isTimeTraveling = true;\n      currentLocation = locationInStore;\n      history.transitionTo(_extends({}, locationInStore, {\n        action: 'PUSH'\n      }));\n      isTimeTraveling = false;\n    };\n\n    unsubscribeFromStore = store.subscribe(handleStoreChange);\n    handleStoreChange();\n  }\n\n  // Whenever location changes, dispatch an action to get it in the store\n  var handleLocationChange = function handleLocationChange(location) {\n    // ... unless we just caused that location change\n    if (isTimeTraveling) {\n      return;\n    }\n\n    // Remember where we are\n    currentLocation = location;\n\n    // Are we being called for the first time?\n    if (!initialLocation) {\n      // Remember as a fallback in case state is reset\n      initialLocation = location;\n\n      // Respect persisted location, if any\n      if (getLocationInStore()) {\n        return;\n      }\n    }\n\n    // Tell the store to update by dispatching an action\n    store.dispatch({\n      type: _reducer.LOCATION_CHANGE,\n      payload: location\n    });\n  };\n  unsubscribeFromHistory = history.listen(handleLocationChange);\n\n  // History 3.x doesn't call listen synchronously, so fire the initial location change ourselves\n  if (history.getCurrentLocation) {\n    handleLocationChange(history.getCurrentLocation());\n  }\n\n  // The enhanced history uses store as source of truth\n  return _extends({}, history, {\n    // The listeners are subscribed to the store instead of history\n    listen: function listen(listener) {\n      // Copy of last location.\n      var lastPublishedLocation = getLocationInStore(true);\n\n      // Keep track of whether we unsubscribed, as Redux store\n      // only applies changes in subscriptions on next dispatch\n      var unsubscribed = false;\n      var unsubscribeFromStore = store.subscribe(function () {\n        var currentLocation = getLocationInStore(true);\n        if (currentLocation === lastPublishedLocation) {\n          return;\n        }\n        lastPublishedLocation = currentLocation;\n        if (!unsubscribed) {\n          listener(lastPublishedLocation);\n        }\n      });\n\n      // History 2.x listeners expect a synchronous call. Make the first call to the\n      // listener after subscribing to the store, in case the listener causes a\n      // location change (e.g. when it redirects)\n      if (!history.getCurrentLocation) {\n        listener(lastPublishedLocation);\n      }\n\n      // Let user unsubscribe later\n      return function () {\n        unsubscribed = true;\n        unsubscribeFromStore();\n      };\n    },\n\n\n    // It also provides a way to destroy internal listeners\n    unsubscribe: function unsubscribe() {\n      if (adjustUrlOnReplay) {\n        unsubscribeFromStore();\n      }\n      unsubscribeFromHistory();\n    }\n  });\n}\n\n//# sourceURL=webpack:///./node_modules/react-router-redux/lib/sync.js?");

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/Home */ \"./src/client/components/pages/Home.js\");\n/* harmony import */ var _components_pages_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/About */ \"./src/client/components/pages/About.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _components_pages_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/about\",\n    component: _components_pages_About__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }));\n});\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/components/pages/About.js":
/*!**********************************************!*\
  !*** ./src/client/components/pages/About.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar About = function About() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Hi from about page\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\n//# sourceURL=webpack:///./src/client/components/pages/About.js?");

/***/ }),

/***/ "./src/client/components/pages/Home.js":
/*!*********************************************!*\
  !*** ./src/client/components/pages/Home.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar users = [{\n  id: 1,\n  name: 'John Doe',\n  email: 'jdoe@gmail.com'\n}, {\n  id: 2,\n  name: 'Sam Smith',\n  email: 'ssmith@gmail.com'\n}, {\n  id: 3,\n  name: 'Karen Wilson',\n  email: 'kwilson@gmail.com'\n}, {\n  id: 4,\n  name: 'Brad Traversy',\n  email: 'btraversy@gmail.com'\n}];\n\nvar Home = function Home() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, users.map(function (user) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: user.id\n    }, user.name);\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return console.log('Hi there!');\n    }\n  }, \"Press me\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/client/components/pages/Home.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-redux */ \"./node_modules/react-router-redux/lib/index.js\");\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  routing: react_router_redux__WEBPACK_IMPORTED_MODULE_1__[\"routerReducer\"]\n}));\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n\n\n\nvar initialState = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_client_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n  return store;\n});\n\n//# sourceURL=webpack:///./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, store) {\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.path,\n    context: {}\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_Routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))));\n  return \"\\n    <html>\\n    <head></head>\\n    <body>\\n      <div id=\\\"root\\\">\".concat(content, \"</div>\\n      <script src=\\\"bundle.js\\\"></script>\\n    </body>\\n    </html>\\n  \");\n});\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n/* harmony import */ var _helpers_createStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public'));\napp.get('*', function (req, res) {\n  var store = Object(_helpers_createStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // Some logic to initialize and load data into the store\n\n  res.send(Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, store));\n});\napp.listen(3000, function () {\n  console.log('Server listening on port 3000');\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });