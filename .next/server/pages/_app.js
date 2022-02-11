(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 47:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-redux"
var external_react_redux_namespaceObject = require("react-redux");;
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
;// CONCATENATED MODULE: ./components/Inicialized/LocalStore.js


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

let rootReducer = (0,external_redux_namespaceObject.combineReducers)({
  busqueda: busquedaReducer,
  ciudad: ciudadReducer,
  categoria: categoriaReducer,
  lblCategoria: lblCategoriaReducer
});
/* harmony default export */ var LocalStore = ((0,external_redux_namespaceObject.createStore)(rootReducer));
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(34);
;// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const App = ({
  Component,
  pageProps
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: true,
    closeOnClick: true,
    transition: external_react_toastify_.Flip,
    rtl: false,
    pauseOnVisibilityChange: true,
    draggable: true,
    pauseOnHover: true
  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
    store: LocalStore,
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  })]
});

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

/* harmony default export */ var _app = (App);

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 34:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(47));
module.exports = __webpack_exports__;

})();