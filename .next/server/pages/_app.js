(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Components/Inicialized/LocalStore.js":
/*!**********************************************!*\
  !*** ./Components/Inicialized/LocalStore.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);


function busquedaReducer(state = '', action) {
  switch (action.type) {
    case 'SET_BUSQUEDA':
      return action.busqueda;

    case 'CLEAR_BUSQUEDA':
      return '';

    default:
      return state;
  }
}

function ciudadReducer(state = '', action) {
  switch (action.type) {
    case 'SET_CIUDAD':
      if (action.ciudad != 'Todas') {
        return action.ciudad;
      } else {
        return '';
      }

    case 'CLEAR_CIUDAD':
      return '';

    default:
      return state;
  }
}

function categoriaReducer(state = '', action) {
  switch (action.type) {
    case 'SET_CATEGORIA':
      return action.categoria;

    case 'CLEAR_CATEGORIA':
      return '';

    default:
      return state;
  }
}

function lblCategoriaReducer(state = '', action) {
  switch (action.type) {
    case 'SET_LBLCATEGORIA':
      return action.lblCategoria;

    case 'CLEAR_LBLCATEGORIA':
      return '';

    default:
      return state;
  }
}

let rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  busqueda: busquedaReducer,
  ciudad: ciudadReducer,
  categoria: categoriaReducer,
  lblCategoria: lblCategoriaReducer
});
/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(rootReducer));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stylesGlobal_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesGlobal.scss */ "./pages/stylesGlobal.scss");
/* harmony import */ var _stylesGlobal_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylesGlobal_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Inicialized_LocalStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Inicialized/LocalStore */ "./Components/Inicialized/LocalStore.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const App = ({
  Component,
  pageProps
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: true,
    closeOnClick: true,
    transition: react_toastify__WEBPACK_IMPORTED_MODULE_5__.Flip,
    rtl: false,
    pauseOnVisibilityChange: true,
    draggable: true,
    pauseOnHover: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _Components_Inicialized_LocalStore__WEBPACK_IMPORTED_MODULE_4__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 7
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 11,
  columnNumber: 3
}, undefined);

App.getInitialProps = async ({
  Component,
  ctx
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (function() {



/***/ }),

/***/ "./pages/stylesGlobal.scss":
/*!*********************************!*\
  !*** ./pages/stylesGlobal.scss ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJNb25vLy4vQ29tcG9uZW50cy9JbmljaWFsaXplZC9Mb2NhbFN0b3JlLmpzIiwid2VicGFjazovL1dlYk1vbm8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9XZWJNb25vL2V4dGVybmFsIFwicmVkdXhcIiJdLCJuYW1lcyI6WyJidXNxdWVkYVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJidXNxdWVkYSIsImNpdWRhZFJlZHVjZXIiLCJjaXVkYWQiLCJjYXRlZ29yaWFSZWR1Y2VyIiwiY2F0ZWdvcmlhIiwibGJsQ2F0ZWdvcmlhUmVkdWNlciIsImxibENhdGVnb3JpYSIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiY3JlYXRlU3RvcmUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJGbGlwIiwiTG9jYWxTdG9yZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLGVBQVQsQ0FBeUJDLEtBQUssR0FBQyxFQUEvQixFQUFrQ0MsTUFBbEMsRUFBeUM7QUFDckMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxjQUFMO0FBQ0ksYUFBT0QsTUFBTSxDQUFDRSxRQUFkOztBQUVKLFNBQUssZ0JBQUw7QUFDSSxhQUFPLEVBQVA7O0FBR0o7QUFDSSxhQUFPSCxLQUFQO0FBVFI7QUFXSDs7QUFFRCxTQUFTSSxhQUFULENBQXVCSixLQUFLLEdBQUMsRUFBN0IsRUFBZ0NDLE1BQWhDLEVBQXVDO0FBQ25DLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUssWUFBTDtBQUNJLFVBQUlELE1BQU0sQ0FBQ0ksTUFBUCxJQUFpQixPQUFyQixFQUE4QjtBQUMxQixlQUFPSixNQUFNLENBQUNJLE1BQWQ7QUFDSCxPQUZELE1BRU87QUFDSCxlQUFPLEVBQVA7QUFDSDs7QUFFTCxTQUFLLGNBQUw7QUFDSSxhQUFPLEVBQVA7O0FBR0o7QUFDSSxhQUFPTCxLQUFQO0FBYlI7QUFlSDs7QUFFRCxTQUFTTSxnQkFBVCxDQUEwQk4sS0FBSyxHQUFDLEVBQWhDLEVBQW1DQyxNQUFuQyxFQUEwQztBQUN0QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLLGVBQUw7QUFDSSxhQUFPRCxNQUFNLENBQUNNLFNBQWQ7O0FBRUosU0FBSyxpQkFBTDtBQUNJLGFBQU8sRUFBUDs7QUFHSjtBQUNJLGFBQU9QLEtBQVA7QUFUUjtBQVdIOztBQUVELFNBQVNRLG1CQUFULENBQTZCUixLQUFLLEdBQUMsRUFBbkMsRUFBc0NDLE1BQXRDLEVBQTZDO0FBQ3pDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUssa0JBQUw7QUFDSSxhQUFPRCxNQUFNLENBQUNRLFlBQWQ7O0FBRUosU0FBSyxvQkFBTDtBQUNJLGFBQU8sRUFBUDs7QUFHSjtBQUNJLGFBQU9ULEtBQVA7QUFUUjtBQVdIOztBQUdELElBQUlVLFdBQVcsR0FBR0Msc0RBQWUsQ0FBQztBQUM5QlIsVUFBUSxFQUFFSixlQURvQjtBQUU5Qk0sUUFBTSxFQUFFRCxhQUZzQjtBQUc5QkcsV0FBUyxFQUFFRCxnQkFIbUI7QUFJOUJHLGNBQVksRUFBRUQ7QUFKZ0IsQ0FBRCxDQUFqQztBQU9BLCtEQUFlSSxrREFBVyxDQUFDRixXQUFELENBQTFCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUcsR0FBRyxHQUFHLENBQUM7QUFBQ0MsV0FBRDtBQUFZQztBQUFaLENBQUQsa0JBQ1YsOERBQUMsdURBQUQ7QUFBQSwwQkFDTSw4REFBQywwREFBRDtBQUNBLFlBQVEsRUFBQyxVQURUO0FBRUEsYUFBUyxFQUFFLElBRlg7QUFHQSxtQkFBZSxFQUFFLEtBSGpCO0FBSUEsZUFBVyxNQUpYO0FBS0EsZ0JBQVksTUFMWjtBQU1BLGNBQVUsRUFBRUMsZ0RBTlo7QUFPQSxPQUFHLEVBQUUsS0FQTDtBQVFBLDJCQUF1QixNQVJ2QjtBQVNBLGFBQVMsTUFUVDtBQVVBLGdCQUFZO0FBVlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUROLGVBWUksOERBQUMsaURBQUQ7QUFBVSxTQUFLLEVBQUVDLHVFQUFqQjtBQUFBLDJCQUNFLDhEQUFDLFNBQUQsb0JBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUFvQkFGLEdBQUcsQ0FBQ0ssZUFBSixHQUFzQixPQUFPO0FBQUNKLFdBQUQ7QUFBWUs7QUFBWixDQUFQLEtBQTRCO0FBQ2hELE1BQUlKLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxNQUFHRCxTQUFTLENBQUNJLGVBQWIsRUFBNkI7QUFDM0JILGFBQVMsR0FBRyxNQUFNRCxTQUFTLENBQUNJLGVBQVYsQ0FBMEJDLEdBQTFCLENBQWxCO0FBQ0Q7O0FBQ0QsU0FBTztBQUFFSjtBQUFGLEdBQVA7QUFDRCxDQU5EOztBQVFFLCtEQUFlRixHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0YsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnXHJcblxyXG5mdW5jdGlvbiBidXNxdWVkYVJlZHVjZXIoc3RhdGU9JycsYWN0aW9uKXtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdTRVRfQlVTUVVFREEnOiAgXHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uYnVzcXVlZGE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnQ0xFQVJfQlVTUVVFREEnOiBcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgXHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2l1ZGFkUmVkdWNlcihzdGF0ZT0nJyxhY3Rpb24pe1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NFVF9DSVVEQUQnOiAgXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24uY2l1ZGFkICE9ICdUb2RhcycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24uY2l1ZGFkO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnQ0xFQVJfQ0lVREFEJzogXHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgIFxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhdGVnb3JpYVJlZHVjZXIoc3RhdGU9JycsYWN0aW9uKXtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdTRVRfQ0FURUdPUklBJzogIFxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmNhdGVnb3JpYTtcclxuICAgICAgICBcclxuICAgICAgICBjYXNlICdDTEVBUl9DQVRFR09SSUEnOiBcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgXHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGJsQ2F0ZWdvcmlhUmVkdWNlcihzdGF0ZT0nJyxhY3Rpb24pe1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NFVF9MQkxDQVRFR09SSUEnOiAgXHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ubGJsQ2F0ZWdvcmlhO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ0NMRUFSX0xCTENBVEVHT1JJQSc6IFxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICBcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxubGV0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGJ1c3F1ZWRhOiBidXNxdWVkYVJlZHVjZXIsXHJcbiAgICBjaXVkYWQ6IGNpdWRhZFJlZHVjZXIsXHJcbiAgICBjYXRlZ29yaWE6IGNhdGVnb3JpYVJlZHVjZXIsXHJcbiAgICBsYmxDYXRlZ29yaWE6IGxibENhdGVnb3JpYVJlZHVjZXJcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZShyb290UmVkdWNlcikiLCJpbXBvcnQgXCIuL3N0eWxlc0dsb2JhbC5zY3NzXCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IExvY2FsU3RvcmUgZnJvbSAnLi4vQ29tcG9uZW50cy9JbmljaWFsaXplZC9Mb2NhbFN0b3JlJ1xyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCB7IFNsaWRlLCBab29tLCBGbGlwLCBCb3VuY2UgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5jb25zdCBBcHAgPSAoe0NvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IChcclxuICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPFRvYXN0Q29udGFpbmVyIFxyXG4gICAgICAgIHBvc2l0aW9uPVwidG9wLWxlZnRcIlxyXG4gICAgICAgIGF1dG9DbG9zZT17MzAwMH1cclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxyXG4gICAgICAgIG5ld2VzdE9uVG9wXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrXHJcbiAgICAgICAgdHJhbnNpdGlvbj17RmxpcH1cclxuICAgICAgICBydGw9e2ZhbHNlfVxyXG4gICAgICAgIHBhdXNlT25WaXNpYmlsaXR5Q2hhbmdlXHJcbiAgICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyLz5cclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtMb2NhbFN0b3JlfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHMgfS8+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcblxyXG4gIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbilcclxuXHJcbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe0NvbXBvbmVudCwgY3R4fSkgPT4ge1xyXG4gIGxldCBwYWdlUHJvcHMgPSB7fVxyXG4gIGlmKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpe1xyXG4gICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXHJcbiAgfVxyXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XHJcbn1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBBcHBcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==