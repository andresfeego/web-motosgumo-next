self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/AdminItems/AdminItems.js":
/*!*********************************************!*\
  !*** ./Components/AdminItems/AdminItems.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _AdminItems_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AdminItems.module.scss */ "./Components/AdminItems/AdminItems.module.scss");
/* harmony import */ var _AdminItems_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_AdminItems_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AgregarItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AgregarItem */ "./Components/AdminItems/AgregarItem.js");
/* harmony import */ var _Subitems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subitems */ "./Components/AdminItems/Subitems.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\Components\\AdminItems\\AdminItems.js",
    _this = undefined,
    _s = $RefreshSig$();







var AdminItems = function AdminItems() {
  _s();

  var _jsxDEV2;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("0"),
      idItem = _useState[0],
      setIdItem = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      listaItems = _useState2[0],
      setListaItems = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      subitems = _useState3[0],
      setSubitems = _useState3[1];

  function onChangeIdItem(e) {
    setIdItem(e.target.value);
  }

  var getItems = /*#__PURE__*/function () {
    var _ref = (0,E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var resItems, itemsJson;
      return E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("http://localhost:3020/responseMono" + '/items');

            case 2:
              resItems = _context.sent;
              _context.next = 5;
              return resItems.json();

            case 5:
              itemsJson = _context.sent;
              setListaItems(itemsJson);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getItems() {
      return _ref.apply(this, arguments);
    };
  }();

  var getsubItems = /*#__PURE__*/function () {
    var _ref2 = (0,E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var resSubitems, subitemsJson;
      return E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("http://localhost:3020/responseMono" + '/subitems/' + idItem);

            case 2:
              resSubitems = _context2.sent;
              _context2.next = 5;
              return resSubitems.json();

            case 5:
              subitemsJson = _context2.sent;
              setSubitems(subitemsJson);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getsubItems() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    getsubItems();
  }, [idItem]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    getItems();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "containerVentana",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_AgregarItem__WEBPACK_IMPORTED_MODULE_5__.default, {
      getItems: getItems
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_AdminItems_module_scss__WEBPACK_IMPORTED_MODULE_7___default().adminItems),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
        noValidate: true,
        className: (_AdminItems_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Form),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.FormControl, {
          className: (_AdminItems_module_scss__WEBPACK_IMPORTED_MODULE_7___default().inputForm),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.InputLabel, {
            htmlFor: "max-width",
            children: "Item"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Select, (_jsxDEV2 = {
            className: "inputform",
            autoFocus: true,
            value: 0,
            onChange: onChangeIdItem
          }, (0,E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "value", idItem), (0,E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "inputProps", {
            name: 'idItem',
            id: 'idItem'
          }), (0,E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "children", [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {
            value: 0,
            children: "Seleccioneeeee el item"
          }, 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 29
          }, _this), listaItems.length > 0 ? listaItems.map(function (item) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {
              value: item.id,
              children: item.nombre
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 79
            }, _this);
          }) : null]), _jsxDEV2), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_AdminItems_module_scss__WEBPACK_IMPORTED_MODULE_7___default().adminSubItems),
        children: idItem > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Subitems__WEBPACK_IMPORTED_MODULE_6__.default, {
          subitems: subitems,
          getsubItems: getsubItems,
          idItem: idItem
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 25
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          children: "Selecciona un item"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, _this);
};

_s(AdminItems, "gNEOjdRZAaOjMY2fVzDR+ReoTYw=");

_c = AdminItems;
function getServerSideProps(_x) {
  return _getServerSideProps.apply(this, arguments);
}

function _getServerSideProps() {
  _getServerSideProps = (0,E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(ctx) {
    var props, resSlides, slidesJson;
    return E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log("serversidepropsindex");
            props = {
              props: {}
            };
            _context3.next = 4;
            return fetch("http://localhost:3020/responseMono" + '/items');

          case 4:
            resSlides = _context3.sent;
            _context3.next = 7;
            return resSlides.json();

          case 7:
            slidesJson = _context3.sent;
            props.props = {
              items: slidesJson
            };
            return _context3.abrupt("return", props);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getServerSideProps.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (AdminItems);

var _c;

$RefreshReg$(_c, "AdminItems");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9BZG1pbkl0ZW1zL0FkbWluSXRlbXMuanMiXSwibmFtZXMiOlsiQWRtaW5JdGVtcyIsInVzZVN0YXRlIiwiaWRJdGVtIiwic2V0SWRJdGVtIiwibGlzdGFJdGVtcyIsInNldExpc3RhSXRlbXMiLCJzdWJpdGVtcyIsInNldFN1Yml0ZW1zIiwib25DaGFuZ2VJZEl0ZW0iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRJdGVtcyIsImZldGNoIiwicHJvY2VzcyIsInJlc0l0ZW1zIiwianNvbiIsIml0ZW1zSnNvbiIsImdldHN1Ykl0ZW1zIiwicmVzU3ViaXRlbXMiLCJzdWJpdGVtc0pzb24iLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJuYW1lIiwiaWQiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwibm9tYnJlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwiY29uc29sZSIsImxvZyIsInByb3BzIiwicmVzU2xpZGVzIiwic2xpZGVzSnNvbiIsIml0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQU1BLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQTs7QUFBQSxrQkFDT0MsK0NBQVEsQ0FBQyxHQUFELENBRGY7QUFBQSxNQUNkQyxNQURjO0FBQUEsTUFDTkMsU0FETTs7QUFBQSxtQkFFZUYsK0NBQVEsQ0FBQyxFQUFELENBRnZCO0FBQUEsTUFFZEcsVUFGYztBQUFBLE1BRUZDLGFBRkU7O0FBQUEsbUJBR1dKLCtDQUFRLENBQUMsRUFBRCxDQUhuQjtBQUFBLE1BR2RLLFFBSGM7QUFBQSxNQUdKQyxXQUhJOztBQUtyQixXQUFTQyxjQUFULENBQXdCQyxDQUF4QixFQUEyQjtBQUN2Qk4sYUFBUyxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQ0g7O0FBSUQsTUFBTUMsUUFBUTtBQUFBLDZUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1VDLEtBQUssQ0FBQ0Msb0NBQUEsR0FBd0IsUUFBekIsQ0FEZjs7QUFBQTtBQUNQQyxzQkFETztBQUFBO0FBQUEscUJBRVdBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZYOztBQUFBO0FBRVBDLHVCQUZPO0FBR2JaLDJCQUFhLENBQUNZLFNBQUQsQ0FBYjs7QUFIYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSTCxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBTUEsTUFBTU0sV0FBVztBQUFBLDhUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1VMLEtBQUssQ0FBQ0Msb0NBQUEsR0FBd0IsWUFBeEIsR0FBdUNaLE1BQXhDLENBRGY7O0FBQUE7QUFDVmlCLHlCQURVO0FBQUE7QUFBQSxxQkFFV0EsV0FBVyxDQUFDSCxJQUFaLEVBRlg7O0FBQUE7QUFFVkksMEJBRlU7QUFHaEJiLHlCQUFXLENBQUNhLFlBQUQsQ0FBWDs7QUFIZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWEYsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFNQUcsa0RBQVMsQ0FBQyxZQUFNO0FBQ1pILGVBQVc7QUFDZCxHQUZRLEVBRU4sQ0FBQ2hCLE1BQUQsQ0FGTSxDQUFUO0FBSUFtQixrREFBUyxDQUFDLFlBQU07QUFDWlQsWUFBUTtBQUNYLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFLQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBLDRCQUNJLDhEQUFDLGlEQUFEO0FBQWEsY0FBUSxFQUFFQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLGVBQVMsRUFBRVUsMkVBQWhCO0FBQUEsOEJBQ0k7QUFBTSxrQkFBVSxNQUFoQjtBQUFpQixpQkFBUyxFQUFFQSxxRUFBNUI7QUFBQSwrQkFFSSw4REFBQywwREFBRDtBQUFhLG1CQUFTLEVBQUVBLDBFQUF4QjtBQUFBLGtDQUNJLDhEQUFDLHlEQUFEO0FBQVksbUJBQU8sRUFBQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLDhEQUFDLHFEQUFEO0FBQVEscUJBQVMsRUFBQyxXQUFsQjtBQUE4QixxQkFBUyxNQUF2QztBQUF3QyxpQkFBSyxFQUFFLENBQS9DO0FBQWtELG9CQUFRLEVBQUVkO0FBQTVELHFMQUFtRk4sTUFBbkYsZ0xBQXVHO0FBQUVxQixnQkFBSSxFQUFFLFFBQVI7QUFBa0JDLGNBQUUsRUFBRTtBQUF0QixXQUF2Ryw0TEFDSSw4REFBQyx1REFBRDtBQUFrQixpQkFBSyxFQUFFLENBQXpCO0FBQUE7QUFBQSxhQUFlLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUVLcEIsVUFBVSxDQUFDcUIsTUFBWCxHQUFvQixDQUFwQixHQUF3QnJCLFVBQVUsQ0FBQ3NCLEdBQVgsQ0FBZSxVQUFDQyxJQUFEO0FBQUEsZ0NBQVUsOERBQUMsdURBQUQ7QUFBd0IsbUJBQUssRUFBRUEsSUFBSSxDQUFDSCxFQUFwQztBQUFBLHdCQUF5Q0csSUFBSSxDQUFDQztBQUE5QyxlQUFlRCxJQUFJLENBQUNILEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVY7QUFBQSxXQUFmLENBQXhCLEdBQXFILElBRjFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBYUk7QUFBSyxpQkFBUyxFQUFFRiw4RUFBaEI7QUFBQSxrQkFDS3BCLE1BQU0sR0FBRyxDQUFULGdCQUNHLDhEQUFDLDhDQUFEO0FBQVUsa0JBQVEsRUFBRUksUUFBcEI7QUFBOEIscUJBQVcsRUFBRVksV0FBM0M7QUFBd0QsZ0JBQU0sRUFBRWhCO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsZ0JBR0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE0QkgsQ0E1REQ7O0dBQU1GLFU7O0tBQUFBLFU7QUE4REMsU0FBZTZCLGtCQUF0QjtBQUFBO0FBQUE7OztzVUFBTyxrQkFBa0NDLEdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNIQyxtQkFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDSUMsaUJBRkQsR0FFUztBQUFFQSxtQkFBSyxFQUFFO0FBQVQsYUFGVDtBQUFBO0FBQUEsbUJBSXFCcEIsS0FBSyxDQUFDQyxvQ0FBQSxHQUF3QixRQUF6QixDQUoxQjs7QUFBQTtBQUlHb0IscUJBSkg7QUFBQTtBQUFBLG1CQUtzQkEsU0FBUyxDQUFDbEIsSUFBVixFQUx0Qjs7QUFBQTtBQUtHbUIsc0JBTEg7QUFNSEYsaUJBQUssQ0FBQ0EsS0FBTixHQUFjO0FBQUVHLG1CQUFLLEVBQUVEO0FBQVQsYUFBZDtBQU5HLDhDQVVJRixLQVZKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFhUCwrREFBZWpDLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjFkMDkxMzdhMDFiYTlhY2QxYjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRGlhbG9nLCBEaWFsb2dBY3Rpb25zLCBEaWFsb2dDb250ZW50LCBEaWFsb2dUaXRsZSwgRm9ybUNvbnRyb2wsIElucHV0LCBJbnB1dExhYmVsLCBNZW51SXRlbSwgU2VsZWN0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQWRtaW5JdGVtcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBBZ3JlZ2FySXRlbSBmcm9tICcuL0FncmVnYXJJdGVtJztcclxuaW1wb3J0IFN1Yml0ZW1zIGZyb20gJy4vU3ViaXRlbXMnXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgQWRtaW5JdGVtcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpZEl0ZW0sIHNldElkSXRlbV0gPSB1c2VTdGF0ZShcIjBcIilcclxuICAgIGNvbnN0IFtsaXN0YUl0ZW1zLCBzZXRMaXN0YUl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3N1Yml0ZW1zLCBzZXRTdWJpdGVtc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZUlkSXRlbShlKSB7XHJcbiAgICAgICAgc2V0SWRJdGVtKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgZ2V0SXRlbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzSXRlbXMgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5IT1NUX05BTUUgKyAnL2l0ZW1zJylcclxuICAgICAgICBjb25zdCBpdGVtc0pzb24gPSBhd2FpdCByZXNJdGVtcy5qc29uKClcclxuICAgICAgICBzZXRMaXN0YUl0ZW1zKGl0ZW1zSnNvbilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRzdWJJdGVtcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNTdWJpdGVtcyA9IGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkhPU1RfTkFNRSArICcvc3ViaXRlbXMvJyArIGlkSXRlbSlcclxuICAgICAgICBjb25zdCBzdWJpdGVtc0pzb24gPSBhd2FpdCByZXNTdWJpdGVtcy5qc29uKClcclxuICAgICAgICBzZXRTdWJpdGVtcyhzdWJpdGVtc0pzb24pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRzdWJJdGVtcygpXHJcbiAgICB9LCBbaWRJdGVtXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldEl0ZW1zKClcclxuICAgIH0sIFtdKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyVmVudGFuYVwiPlxyXG4gICAgICAgICAgICA8QWdyZWdhckl0ZW0gZ2V0SXRlbXM9e2dldEl0ZW1zfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkbWluSXRlbXN9PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gbm9WYWxpZGF0ZSBjbGFzc05hbWU9e3N0eWxlcy5Gb3JtfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Rm9ybX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwibWF4LXdpZHRoXCI+SXRlbTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9XCJpbnB1dGZvcm1cIiBhdXRvRm9jdXMgdmFsdWU9ezB9IG9uQ2hhbmdlPXtvbkNoYW5nZUlkSXRlbX0gdmFsdWU9e2lkSXRlbX0gaW5wdXRQcm9wcz17eyBuYW1lOiAnaWRJdGVtJywgaWQ6ICdpZEl0ZW0nIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9ezB9IHZhbHVlPXswfT5TZWxlY2Npb25lZWVlZSBlbCBpdGVtPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0YUl0ZW1zLmxlbmd0aCA+IDAgPyBsaXN0YUl0ZW1zLm1hcCgoaXRlbSkgPT4gPE1lbnVJdGVtIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0uaWR9PntpdGVtLm5vbWJyZX08L01lbnVJdGVtPikgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkbWluU3ViSXRlbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpZEl0ZW0gPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1Yml0ZW1zIHN1Yml0ZW1zPXtzdWJpdGVtc30gZ2V0c3ViSXRlbXM9e2dldHN1Ykl0ZW1zfSBpZEl0ZW09e2lkSXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZWxlY2Npb25hIHVuIGl0ZW08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNlcnZlcnNpZGVwcm9wc2luZGV4XCIpXHJcbiAgICB2YXIgcHJvcHMgPSB7IHByb3BzOiB7fSB9XHJcblxyXG4gICAgY29uc3QgcmVzU2xpZGVzID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuSE9TVF9OQU1FICsgJy9pdGVtcycpXHJcbiAgICBjb25zdCBzbGlkZXNKc29uID0gYXdhaXQgcmVzU2xpZGVzLmpzb24oKVxyXG4gICAgcHJvcHMucHJvcHMgPSB7IGl0ZW1zOiBzbGlkZXNKc29uIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiBwcm9wc1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkl0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==