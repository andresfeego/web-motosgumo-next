self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/AdminMarcas/AdminMarcas.js":
/*!***********************************************!*\
  !*** ./Components/AdminMarcas/AdminMarcas.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _AdminMarcas_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AdminMarcas.module.scss */ "./Components/AdminMarcas/AdminMarcas.module.scss");
/* harmony import */ var _AdminMarcas_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AdminMarcas_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AgregarMarca__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AgregarMarca */ "./Components/AdminMarcas/AgregarMarca.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\Components\\AdminMarcas\\AdminMarcas.js",
    _this = undefined,
    _s = $RefreshSig$();






var AdminMarcas = function AdminMarcas() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      listaMarcas = _useState[0],
      setListaMarcas = _useState[1]; //https://stackoverflow.com/questions/11744975/enabling-https-on-express-js


  var getMarcas = /*#__PURE__*/function () {
    var _ref = (0,E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var resMarcas, marcasJson;
      return E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("http://localhost:3020/responseMono" + '/marcas');

            case 2:
              resMarcas = _context.sent;
              _context.next = 5;
              return resMarcas.json();

            case 5:
              marcasJson = _context.sent;
              setListaMarcas(marcasJson);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getMarcas() {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    getMarcas();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "containerVentana",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AgregarMarca__WEBPACK_IMPORTED_MODULE_4__.default, {
      getMarcas: getMarcas
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_AdminMarcas_module_scss__WEBPACK_IMPORTED_MODULE_5___default().adminMarcas),
      children: listaMarcas.length
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, _this);
};

_s(AdminMarcas, "DbRhscD0yuXJ4REXDELxCBdyDiM=");

_c = AdminMarcas;
/* harmony default export */ __webpack_exports__["default"] = (AdminMarcas);

var _c;

$RefreshReg$(_c, "AdminMarcas");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9BZG1pbk1hcmNhcy9BZG1pbk1hcmNhcy5qcyJdLCJuYW1lcyI6WyJBZG1pbk1hcmNhcyIsInVzZVN0YXRlIiwibGlzdGFNYXJjYXMiLCJzZXRMaXN0YU1hcmNhcyIsImdldE1hcmNhcyIsImZldGNoIiwicHJvY2VzcyIsInJlc01hcmNhcyIsImpzb24iLCJtYXJjYXNKc29uIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFFa0JDLCtDQUFRLENBQUMsRUFBRCxDQUYxQjtBQUFBLE1BRWZDLFdBRmU7QUFBQSxNQUVGQyxjQUZFLGlCQUd0Qjs7O0FBQ0QsTUFBTUMsU0FBUztBQUFBLDZUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1dDLEtBQUssQ0FBQ0Msb0NBQUEsR0FBd0IsU0FBekIsQ0FEaEI7O0FBQUE7QUFDUEMsdUJBRE87QUFBQTtBQUFBLHFCQUVZQSxTQUFTLENBQUNDLElBQVYsRUFGWjs7QUFBQTtBQUVQQyx3QkFGTztBQUdiTiw0QkFBYyxDQUFDTSxVQUFELENBQWQ7O0FBSGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVEwsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQU1DTSxrREFBUyxDQUFDLFlBQU07QUFDWk4sYUFBUztBQUNaLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFLQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQWMsZUFBUyxFQUFFQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLGVBQVMsRUFBRU8sNkVBQWhCO0FBQUEsZ0JBQ1NULFdBQVcsQ0FBQ1U7QUFEckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0F2QkQ7O0dBQU1aLFc7O0tBQUFBLFc7QUE2Qk4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTM3MzFmNGQyMGE5YzJjNTFlYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRGlhbG9nLCBEaWFsb2dBY3Rpb25zLCBEaWFsb2dDb250ZW50LCBEaWFsb2dUaXRsZSwgRm9ybUNvbnRyb2wsIElucHV0LCBJbnB1dExhYmVsLCBNZW51SXRlbSwgU2VsZWN0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQWRtaW5NYXJjYXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBZ3JlZ2FyTWFyY2EgZnJvbSAnLi9BZ3JlZ2FyTWFyY2EnO1xyXG5cclxuXHJcblxyXG5jb25zdCBBZG1pbk1hcmNhcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbGlzdGFNYXJjYXMsIHNldExpc3RhTWFyY2FzIF0gPSAgdXNlU3RhdGUoW10pXHJcbiAgICAvL2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExNzQ0OTc1L2VuYWJsaW5nLWh0dHBzLW9uLWV4cHJlc3MtanNcclxuICAgY29uc3QgZ2V0TWFyY2FzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc01hcmNhcyA9IGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkhPU1RfTkFNRSArICcvbWFyY2FzJylcclxuICAgICAgICBjb25zdCBtYXJjYXNKc29uID0gYXdhaXQgcmVzTWFyY2FzLmpzb24oKVxyXG4gICAgICAgIHNldExpc3RhTWFyY2FzKG1hcmNhc0pzb24pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRNYXJjYXMoKVxyXG4gICAgfSwgW10gKVxyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclZlbnRhbmFcIj5cclxuICAgICAgICAgICAgPEFncmVnYXJNYXJjYSBnZXRNYXJjYXM9e2dldE1hcmNhc30vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkbWluTWFyY2FzfT5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdGFNYXJjYXMubGVuZ3RofVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluTWFyY2FzIl0sInNvdXJjZVJvb3QiOiIifQ==