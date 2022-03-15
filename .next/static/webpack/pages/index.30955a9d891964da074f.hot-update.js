self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Index.module.scss */ "./pages/Index.module.scss");
/* harmony import */ var _Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Index_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Motorcycle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Motorcycle */ "./node_modules/@material-ui/icons/Motorcycle.js");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/List */ "./node_modules/@material-ui/icons/List.js");
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/VerifiedUser */ "./node_modules/@material-ui/icons/VerifiedUser.js");
/* harmony import */ var _material_ui_icons_ChatBubble__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ChatBubble */ "./node_modules/@material-ui/icons/ChatBubble.js");
/* harmony import */ var _Components_AdminItems_AdminItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/AdminItems/AdminItems */ "./Components/AdminItems/AdminItems.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_AdminMarcas_AdminMarcas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/AdminMarcas/AdminMarcas */ "./Components/AdminMarcas/AdminMarcas.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var Index = function Index() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("0"),
      menuStatus = _useState[0],
      setMenuStatus = _useState[1];

  function renderContenido() {
    switch (menuStatus) {
      case 1:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_AdminMarcas_AdminMarcas__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 24
        }, this);
        break;

      case 4:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_AdminItems_AdminItems__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 24
        }, this);
        break;

      default:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Sin informaci\xF3n en menu"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 24
        }, this);
        break;
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contenedor),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().arriba),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        alt: "",
        src: __webpack_require__(/*! ../scrAppServer/images/fondo_header.png */ "./scrAppServer/images/fondo_header.png"),
        className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().fondo_header)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        alt: "",
        src: __webpack_require__(/*! ../scrAppServer/images/logo_Gumo.png */ "./scrAppServer/images/logo_Gumo.png"),
        className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logo)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().abajo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().menu),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().fondo)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().menuItem),
          onClick: function onClick() {
            return setMenuStatus(1);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconMenuItem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Marcas"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().menuItem),
          onClick: function onClick() {
            return setMenuStatus(2);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconMenuItem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Motorcycle__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Motos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().menuItem),
          onClick: function onClick() {
            return setMenuStatus(3);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconMenuItem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ChatBubble__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Comentarios"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().menuItem),
          onClick: function onClick() {
            return setMenuStatus(4);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconMenuItem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Items"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contenido),
        children: renderContenido()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, _this);
};

_s(Index, "6NVJBt3y0R5/8BeSTv2dnzmAO60=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./pages/Index.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./pages/Index.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.Index_contenedor__25AcN {\n  width: 100vw;\n  height: 100vh;\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n}\n\n.Index_arriba__oGWtk {\n  background-color: #000000;\n  height: 7vw;\n  width: 100%;\n  display: -moz-box;\n  display: flex;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n  position: relative;\n}\n\n.Index_abajo__dm8qb {\n  -moz-box-flex: 1;\n       flex: 1 1;\n  width: 100%;\n  display: -moz-box;\n  display: flex;\n}\n\n.Index_menu__1Id6h {\n  width: 20vw;\n  height: 100%;\n  position: relative;\n  background: rgba(24, 24, 24, 0.8);\n}\n\n.Index_menu__1Id6h > .Index_fondo__3SXOR {\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5) url(/_next/static/media/fondo_header.31a6022….png);\n  background-size: 28vw;\n  background-position-x: -4.2vw;\n  background-position-y: -0.15vw;\n  opacity: 0.5;\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  width: 20vw;\n}\n\n.Index_arriba__oGWtk > .Index_logo__mW9Ug {\n  height: 5vw;\n}\n\n.Index_arriba__oGWtk > .Index_fondo_header__3L4ON {\n  height: 100%;\n  position: absolute;\n  left: -5.5vw;\n}\n\n.Index_contenido__3L7jh {\n  -moz-box-flex: 1;\n       flex: 1 1;\n}\n\n.Index_menu__1Id6h > .Index_menuItem__3CzYa {\n  height: 2vw;\n  display: -moz-box;\n  display: flex;\n  -moz-box-align: center;\n       align-items: center;\n  padding-left: 1vw;\n  cursor: pointer;\n}\n\n.Index_iconMenuItem__3aLjR {\n  display: -moz-box;\n  display: flex;\n  width: 3em;\n  height: 100%;\n  border-right: solid 1px #CF4747;\n  color: #fff;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n  -webkit-box-shadow: inset -6px 0px 16px -11px #000000;\n  box-shadow: inset -6px 0px 16px -11px #000000;\n}\n\n.Index_menuItem__3CzYa span {\n  margin-left: 1vw;\n  padding-left: 1vw;\n  -moz-box-align: center;\n       align-items: center;\n}", "",{"version":3,"sources":["webpack://Index.module.scss","webpack://../Components/Inicialized/variables.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAEhB;EACI,YAAA;EACA,aAAA;EACA,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;AAAJ;;AAGA;EACI,yBCTS;EDUT,WAAA;EACA,WAAA;EACA,iBAAA;EAAA,aAAA;EACA,qBAAA;OAAA,uBAAA;EACA,sBAAA;OAAA,mBAAA;EACA,kBAAA;AAAJ;;AAGA;EACI,gBAAA;OAAA,SAAA;EACA,WAAA;EACA,iBAAA;EAAA,aAAA;AAAJ;;AAIA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;AADJ;;AAIA;EACI,YAAA;EACA,iFAAA;EACA,qBAAA;EACA,6BAAA;EACA,8BAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,OAAA;EACA,WAAA;AADJ;;AAIA;EACI,WAAA;AADJ;;AAIA;EACI,YAAA;EACA,kBAAA;EACA,YAAA;AADJ;;AAKA;EACI,gBAAA;OAAA,SAAA;AAFJ;;AAKA;EACI,WAAA;EACA,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,mBAAA;EACA,iBAAA;EACA,eAAA;AAFJ;;AAKA;EACI,iBAAA;EAAA,aAAA;EACA,UAAA;EACA,YAAA;EACA,+BAAA;EACA,WAAA;EACA,qBAAA;OAAA,uBAAA;EACA,sBAAA;OAAA,mBAAA;EACA,qDAAA;EACA,6CAAA;AAFJ;;AAKA;EACI,gBAAA;EACA,iBAAA;EACA,sBAAA;OAAA,mBAAA;AAFJ","sourcesContent":["@charset \"UTF-8\";\n.contenedor {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.arriba {\n  background-color: #000000;\n  height: 7vw;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.abajo {\n  flex: 1;\n  width: 100%;\n  display: flex;\n}\n\n.menu {\n  width: 20vw;\n  height: 100%;\n  position: relative;\n  background: rgba(24, 24, 24, 0.8);\n}\n\n.menu > .fondo {\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5) url(/_next/static/media/fondo_header.31a6022….png);\n  background-size: 28vw;\n  background-position-x: -4.2vw;\n  background-position-y: -0.15vw;\n  opacity: 0.5;\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  width: 20vw;\n}\n\n.arriba > .logo {\n  height: 5vw;\n}\n\n.arriba > .fondo_header {\n  height: 100%;\n  position: absolute;\n  left: -5.5vw;\n}\n\n.contenido {\n  flex: 1;\n}\n\n.menu > .menuItem {\n  height: 2vw;\n  display: flex;\n  align-items: center;\n  padding-left: 1vw;\n  cursor: pointer;\n}\n\n.iconMenuItem {\n  display: flex;\n  width: 3em;\n  height: 100%;\n  border-right: solid 1px #CF4747;\n  color: #fff;\n  justify-content: center;\n  align-items: center;\n  -webkit-box-shadow: inset -6px 0px 16px -11px #000000;\n  box-shadow: inset -6px 0px 16px -11px #000000;\n}\n\n.menuItem span {\n  margin-left: 1vw;\n  padding-left: 1vw;\n  align-items: center;\n}","$primary: #383838;\r\n$primaryDark:#000000;\r\n$primaryTransparent: rgba(255,171,0,0.3);\r\n\r\n$secondary: #CF4747;\r\n$secondaryDark: #1E8C86;\r\n$secondaryTrasparent: #4de4dc59;\r\n\r\n$verde: #A8CF45;\r\n$rojo: #F33446;\r\n$azul: #0098DA;\r\n\r\n$gray0: #ebebeb;\r\n$gray1: #cecece;\r\n$gray2: #797979;\r\n$gray3: #444444;\r\n$gray4: #313131;\r\n\r\n$white1: #fcf5ed;\r\n\r\n$alert-color: #cb492a;\r\n$light-black-color: #706e72;\r\n$black-color: #414042;\r\n$black-color-trasparent: #00000093;\r\n\r\n$blurGeneral: 2px;"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"contenedor": "Index_contenedor__25AcN",
	"arriba": "Index_arriba__oGWtk",
	"abajo": "Index_abajo__dm8qb",
	"menu": "Index_menu__1Id6h",
	"fondo": "Index_fondo__3SXOR",
	"logo": "Index_logo__mW9Ug",
	"fondo_header": "Index_fondo_header__3L4ON",
	"contenido": "Index_contenido__3L7jh",
	"menuItem": "Index_menuItem__3CzYa",
	"iconMenuItem": "Index_iconMenuItem__3aLjR"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0luZGV4Lm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJtZW51U3RhdHVzIiwic2V0TWVudVN0YXR1cyIsInJlbmRlckNvbnRlbmlkbyIsInN0eWxlcyIsInJlcXVpcmUiLCJmb25kb19oZWFkZXIiLCJsb2dvIiwiZm9uZG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBRXNCQywrQ0FBUSxDQUFDLEdBQUQsQ0FGOUI7QUFBQSxNQUVUQyxVQUZTO0FBQUEsTUFFR0MsYUFGSDs7QUFJaEIsV0FBU0MsZUFBVCxHQUEwQjtBQUN0QixZQUFRRixVQUFSO0FBRUksV0FBSyxDQUFMO0FBQ0ksNEJBQU8sOERBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQUNKOztBQUVBLFdBQUssQ0FBTDtBQUNJLDRCQUFPLDhEQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFDSjs7QUFJQTtBQUNJLDRCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBQ0E7QUFkUjtBQWdCSDs7QUFFRCxzQkFDSTtBQUFLLGFBQVMsRUFBRUcsc0VBQWhCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVBLGtFQUFoQjtBQUFBLDhCQUNJO0FBQUssV0FBRyxFQUFDLEVBQVQ7QUFBWSxXQUFHLEVBQUVDLG1CQUFPLENBQUMsdUZBQUQsQ0FBeEI7QUFBcUUsaUJBQVMsRUFBRUQsd0VBQW1CRTtBQUFuRztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFLLFdBQUcsRUFBQyxFQUFUO0FBQVksV0FBRyxF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Vyw0Q0FBNEMsZUFBZSxpQkFBaUIsa0JBQWtCLGtCQUFrQiwyQkFBMkIsR0FBRyxhQUFhLDhCQUE4QixnQkFBZ0IsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHVCQUF1QixHQUFHLFlBQVksWUFBWSxnQkFBZ0Isa0JBQWtCLEdBQUcsV0FBVyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixzQ0FBc0MsR0FBRyxvQkFBb0IsaUJBQWlCLHNGQUFzRiwwQkFBMEIsa0NBQWtDLG1DQUFtQyxpQkFBaUIsdUJBQXVCLGdCQUFnQixZQUFZLGdCQUFnQixHQUFHLHFCQUFxQixnQkFBZ0IsR0FBRyw2QkFBNkIsaUJBQWlCLHVCQUF1QixpQkFBaUIsR0FBRyxnQkFBZ0IsWUFBWSxHQUFHLHVCQUF1QixnQkFBZ0Isa0JBQWtCLHdCQUF3QixzQkFBc0Isb0JBQW9CLEdBQUcsbUJBQW1CLGtCQUFrQixlQUFlLGlCQUFpQixvQ0FBb0MsZ0JBQWdCLDRCQUE0Qix3QkFBd0IsMERBQTBELGtEQUFrRCxHQUFHLG9CQUFvQixxQkFBcUIsc0JBQXNCLHdCQUF3QixHQUFHLHFCQUFxQix5QkFBeUIsNkNBQTZDLDRCQUE0Qiw0QkFBNEIsb0NBQW9DLHdCQUF3QixtQkFBbUIsbUJBQW1CLHdCQUF3QixvQkFBb0Isb0JBQW9CLG9CQUFvQixvQkFBb0IseUJBQXlCLDhCQUE4QixnQ0FBZ0MsMEJBQTBCLHVDQUF1QywwQkFBMEIsbUJBQW1CO0FBQ242SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMwOTU1YTlkODkxOTY0ZGEwNzRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5kZXgubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBNb3RvcmN5Y2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW90b3JjeWNsZSc7XHJcbmltcG9ydCBMaXN0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdCc7XHJcbmltcG9ydCBWZXJpZmllZFVzZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WZXJpZmllZFVzZXInO1xyXG5pbXBvcnQgQ2hhdEJ1YmJsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRCdWJibGUnO1xyXG5cclxuXHJcbmltcG9ydCBBZG1pbkl0ZW1zIGZyb20gJy4uL0NvbXBvbmVudHMvQWRtaW5JdGVtcy9BZG1pbkl0ZW1zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBZG1pbk1hcmNhcyBmcm9tICcuLi9Db21wb25lbnRzL0FkbWluTWFyY2FzL0FkbWluTWFyY2FzJztcclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbWVudVN0YXR1cywgc2V0TWVudVN0YXR1cyBdID0gIHVzZVN0YXRlKFwiMFwiKVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlckNvbnRlbmlkbygpe1xyXG4gICAgICAgIHN3aXRjaCAobWVudVN0YXR1cykge1xyXG5cclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxBZG1pbk1hcmNhcyAvPjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEFkbWluSXRlbXMgLz47XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4+U2luIGluZm9ybWFjacOzbiBlbiBtZW51PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW5lZG9yfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnJpYmF9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9e3JlcXVpcmUoXCIuLi9zY3JBcHBTZXJ2ZXIvaW1hZ2VzL2ZvbmRvX2hlYWRlci5wbmdcIil9IGNsYXNzTmFtZT17c3R5bGVzLmZvbmRvX2hlYWRlcn0gLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPXtyZXF1aXJlKFwiLi4vc2NyQXBwU2VydmVyL2ltYWdlcy9sb2dvX0d1bW8ucG5nXCIpfSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYmFqb30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9uZG99IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbX0gb25DbGljaz17KCkgPT4gc2V0TWVudVN0YXR1cygxKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbk1lbnVJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWZXJpZmllZFVzZXJJY29uICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TWFyY2FzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJdGVtfSBvbkNsaWNrPXsoKSA9PiBzZXRNZW51U3RhdHVzKDIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uTWVudUl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vdG9yY3ljbGVJY29uICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TW90b3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW19IG9uQ2xpY2s9eygpID0+IHNldE1lbnVTdGF0dXMoMyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25NZW51SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhdEJ1YmJsZUljb24gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db21lbnRhcmlvczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbX0gb25DbGljaz17KCkgPT4gc2V0TWVudVN0YXR1cyg0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbk1lbnVJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SWNvbiAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkl0ZW1zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbmlkb30+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlbmRlckNvbnRlbmlkbygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4uSW5kZXhfY29udGVuZWRvcl9fMjVBY04ge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLkluZGV4X2FycmliYV9fb0dXdGsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gIGhlaWdodDogN3Z3O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLkluZGV4X2FiYWpvX19kbThxYiB7XFxuICAtbW96LWJveC1mbGV4OiAxO1xcbiAgICAgICBmbGV4OiAxIDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLkluZGV4X21lbnVfXzFJZDZoIHtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNCwgMjQsIDI0LCAwLjgpO1xcbn1cXG5cXG4uSW5kZXhfbWVudV9fMUlkNmggPiAuSW5kZXhfZm9uZG9fXzNTWE9SIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KSB1cmwoL19uZXh0L3N0YXRpYy9tZWRpYS9mb25kb19oZWFkZXIuMzFhNjAyMuKApi5wbmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyOHZ3O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtNC4ydnc7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0wLjE1dnc7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMjB2dztcXG59XFxuXFxuLkluZGV4X2FycmliYV9fb0dXdGsgPiAuSW5kZXhfbG9nb19fbVc5VWcge1xcbiAgaGVpZ2h0OiA1dnc7XFxufVxcblxcbi5JbmRleF9hcnJpYmFfX29HV3RrID4gLkluZGV4X2ZvbmRvX2hlYWRlcl9fM0w0T04ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTUuNXZ3O1xcbn1cXG5cXG4uSW5kZXhfY29udGVuaWRvX18zTDdqaCB7XFxuICAtbW96LWJveC1mbGV4OiAxO1xcbiAgICAgICBmbGV4OiAxIDE7XFxufVxcblxcbi5JbmRleF9tZW51X18xSWQ2aCA+IC5JbmRleF9tZW51SXRlbV9fM0N6WWEge1xcbiAgaGVpZ2h0OiAydnc7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5JbmRleF9pY29uTWVudUl0ZW1fXzNhTGpSIHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAzZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjQ0Y0NzQ3O1xcbiAgY29sb3I6ICNmZmY7XFxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgLTZweCAwcHggMTZweCAtMTFweCAjMDAwMDAwO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTZweCAwcHggMTZweCAtMTFweCAjMDAwMDAwO1xcbn1cXG5cXG4uSW5kZXhfbWVudUl0ZW1fXzNDellhIHNwYW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG4gIHBhZGRpbmctbGVmdDogMXZ3O1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0luZGV4Lm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vQ29tcG9uZW50cy9JbmljaWFsaXplZC92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFFaEI7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO0VBQUEsMEJBQUE7T0FBQSxzQkFBQTtBQUFKOztBQUdBO0VBQ0kseUJDVFM7RURVVCxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO09BQUEsdUJBQUE7RUFDQSxzQkFBQTtPQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO09BQUEsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUFBLGFBQUE7QUFBSjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGlGQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBREo7O0FBS0E7RUFDSSxnQkFBQTtPQUFBLFNBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtPQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO09BQUEsdUJBQUE7RUFDQSxzQkFBQTtPQUFBLG1CQUFBO0VBQ0EscURBQUE7RUFDQSw2Q0FBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO09BQUEsbUJBQUE7QUFGSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi5jb250ZW5lZG9yIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFycmliYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgaGVpZ2h0OiA3dnc7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hYmFqbyB7XFxuICBmbGV4OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWVudSB7XFxuICB3aWR0aDogMjB2dztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQsIDI0LCAyNCwgMC44KTtcXG59XFxuXFxuLm1lbnUgPiAuZm9uZG8ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpIHVybCgvX25leHQvc3RhdGljL21lZGlhL2ZvbmRvX2hlYWRlci4zMWE2MDIy4oCmLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDI4dnc7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC00LjJ2dztcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTAuMTV2dztcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAyMHZ3O1xcbn1cXG5cXG4uYXJyaWJhID4gLmxvZ28ge1xcbiAgaGVpZ2h0OiA1dnc7XFxufVxcblxcbi5hcnJpYmEgPiAuZm9uZG9faGVhZGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC01LjV2dztcXG59XFxuXFxuLmNvbnRlbmlkbyB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ubWVudSA+IC5tZW51SXRlbSB7XFxuICBoZWlnaHQ6IDJ2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY29uTWVudUl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAzZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjQ0Y0NzQ3O1xcbiAgY29sb3I6ICNmZmY7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IC02cHggMHB4IDE2cHggLTExcHggIzAwMDAwMDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IC02cHggMHB4IDE2cHggLTExcHggIzAwMDAwMDtcXG59XFxuXFxuLm1lbnVJdGVtIHNwYW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG4gIHBhZGRpbmctbGVmdDogMXZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsXCIkcHJpbWFyeTogIzM4MzgzODtcXHJcXG4kcHJpbWFyeURhcms6IzAwMDAwMDtcXHJcXG4kcHJpbWFyeVRyYW5zcGFyZW50OiByZ2JhKDI1NSwxNzEsMCwwLjMpO1xcclxcblxcclxcbiRzZWNvbmRhcnk6ICNDRjQ3NDc7XFxyXFxuJHNlY29uZGFyeURhcms6ICMxRThDODY7XFxyXFxuJHNlY29uZGFyeVRyYXNwYXJlbnQ6ICM0ZGU0ZGM1OTtcXHJcXG5cXHJcXG4kdmVyZGU6ICNBOENGNDU7XFxyXFxuJHJvam86ICNGMzM0NDY7XFxyXFxuJGF6dWw6ICMwMDk4REE7XFxyXFxuXFxyXFxuJGdyYXkwOiAjZWJlYmViO1xcclxcbiRncmF5MTogI2NlY2VjZTtcXHJcXG4kZ3JheTI6ICM3OTc5Nzk7XFxyXFxuJGdyYXkzOiAjNDQ0NDQ0O1xcclxcbiRncmF5NDogIzMxMzEzMTtcXHJcXG5cXHJcXG4kd2hpdGUxOiAjZmNmNWVkO1xcclxcblxcclxcbiRhbGVydC1jb2xvcjogI2NiNDkyYTtcXHJcXG4kbGlnaHQtYmxhY2stY29sb3I6ICM3MDZlNzI7XFxyXFxuJGJsYWNrLWNvbG9yOiAjNDE0MDQyO1xcclxcbiRibGFjay1jb2xvci10cmFzcGFyZW50OiAjMDAwMDAwOTM7XFxyXFxuXFxyXFxuJGJsdXJHZW5lcmFsOiAycHg7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGVuZWRvclwiOiBcIkluZGV4X2NvbnRlbmVkb3JfXzI1QWNOXCIsXG5cdFwiYXJyaWJhXCI6IFwiSW5kZXhfYXJyaWJhX19vR1d0a1wiLFxuXHRcImFiYWpvXCI6IFwiSW5kZXhfYWJham9fX2RtOHFiXCIsXG5cdFwibWVudVwiOiBcIkluZGV4X21lbnVfXzFJZDZoXCIsXG5cdFwiZm9uZG9cIjogXCJJbmRleF9mb25kb19fM1NYT1JcIixcblx0XCJsb2dvXCI6IFwiSW5kZXhfbG9nb19fbVc5VWdcIixcblx0XCJmb25kb19oZWFkZXJcIjogXCJJbmRleF9mb25kb19oZWFkZXJfXzNMNE9OXCIsXG5cdFwiY29udGVuaWRvXCI6IFwiSW5kZXhfY29udGVuaWRvX18zTDdqaFwiLFxuXHRcIm1lbnVJdGVtXCI6IFwiSW5kZXhfbWVudUl0ZW1fXzNDellhXCIsXG5cdFwiaWNvbk1lbnVJdGVtXCI6IFwiSW5kZXhfaWNvbk1lbnVJdGVtX18zYUxqUlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=