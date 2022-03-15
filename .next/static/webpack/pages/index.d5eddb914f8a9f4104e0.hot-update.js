self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/AdminItems/AgregarItem.js":
/*!**********************************************!*\
  !*** ./Components/AdminItems/AgregarItem.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Inicialized/Toast */ "./Components/Inicialized/Toast.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\Components\\AdminItems\\AgregarItem.js",
    _this = undefined,
    _s = $RefreshSig$();







var superagent = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");

var AgregarItem = function AgregarItem(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      nombre = _useState2[0],
      setNombre = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      descripcion = _useState3[0],
      setDescripcion = _useState3[1];

  function onChangeNombre(e) {
    setNombre(e.target.value);
  }

  ;

  function onChangeDescripcion(e) {
    setDescripcion(e.target.value);
  }

  ;

  function handleClickOpen() {
    setOpen(true);
  }

  ;

  function handleClickClose() {
    setOpen(false);
    setNombre("");
    setDescripcion("");
  }

  ;

  function validarInfo() {
    return new Promise(function (resolve, reject) {
      if (nombre == "") {
        reject("No has ingresado un nombre");
      } else {
        if (descripcion == "") {
          reject("No has ingresado una descripcion para el item");
        } else {
          resolve();
        }
      }
    });
  }

  function guardar(nombre, descripcion) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0,E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(resolve, reject) {
        return E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                superagent.post("http://localhost:3020/responseMono" + '/crearItem').send({
                  nombre: nombre,
                  descripcion: descripcion
                }) // sends a JSON post body
                .set('X-API-Key', 'foobar').set('accept', 'json').end(function (err, res) {
                  if (err) {
                    reject(err);
                  } else {
                    resolve();
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  function onSubmit() {
    return _onSubmit.apply(this, arguments);
  }

  function _onSubmit() {
    _onSubmit = (0,E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      return E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.tiposAlertas.cargando, "Creando Alumno");
              validarInfo().then(function () {
                guardar(nombre, descripcion).then(function () {
                  (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.tiposAlertas.cargadoSuccess, "Registro exitoso");
                  handleClickClose();
                  props.getItems();
                })["catch"](function (error) {
                  (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.tiposAlertas.cargadoError, error, 3000);
                });
              })["catch"](function (error) {
                (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.tiposAlertas.cargadoError, error, 3000);
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _onSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "agregarAdmin",
      onClick: function onClick() {
        return handleClickOpen();
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "agregar",
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "texto",
        children: "Agregar item"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
      fullWidth: true,
      maxWidth: "xs",
      open: open,
      "aria-labelledby": "max-width-dialog-title",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.DialogTitle, {
        id: "max-width-dialog-title",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "tituloAgregarActividad",
          children: "Nuevo Alumno"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 58
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.DialogContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "formularioUniStep",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            noValidate: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Input, {
              className: "inputform",
              type: "text",
              placeholder: "Nombre item",
              value: nombre,
              name: "setNombre",
              onChange: onChangeNombre
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Input, {
              className: "inputform",
              type: "text",
              placeholder: "Descripci\xF3n",
              value: descripcion,
              name: "setDescripcion",
              onChange: onChangeDescripcion
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.DialogActions, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {
          color: "primary",
          onClick: function onClick() {
            return onSubmit();
          },
          children: "Guardar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {
          color: "primary",
          onClick: handleClickClose,
          children: "Cerrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 9
  }, _this);
};

_s(AgregarItem, "6QNd5N1qI1ZYvMJL5Ej3v0Vebiw=");

_c = AgregarItem;
/* harmony default export */ __webpack_exports__["default"] = (AgregarItem);

var _c;

$RefreshReg$(_c, "AgregarItem");

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

/***/ "./Components/AdminItems/AgregarSubitem.js":
/*!*************************************************!*\
  !*** ./Components/AdminItems/AgregarSubitem.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AgregarSubitem_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AgregarSubitem.module.scss */ "./Components/AdminItems/AgregarSubitem.module.scss");
/* harmony import */ var _AgregarSubitem_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AgregarSubitem_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Inicialized/Toast */ "./Components/Inicialized/Toast.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\Components\\AdminItems\\AgregarSubitem.js",
    _this = undefined,
    _s = $RefreshSig$();







var superagent = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");

var AgregarSubitem = function AgregarSubitem(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      valor = _useState2[0],
      setValor = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      puntaje = _useState3[0],
      setPuntaje = _useState3[1];

  function onChangeValor(e) {
    setValor(e.target.value);
  }

  ;

  function onChangePuntaje(e) {
    setPuntaje(e.target.value);
  }

  ;

  function handleClickOpen() {
    setOpen(true);
  }

  ;

  function handleClickClose() {
    setOpen(false);
    setValor("");
    setPuntaje("");
  }

  ;

  function validarInfo() {
    return new Promise(function (resolve, reject) {
      if (valor == "") {
        reject("No has ingresado un valor");
      } else {
        if (puntaje == "") {
          reject("No has ingresado un puntaje para el item");
        } else {
          var expr = /^[0-9]+([.][0-9]+)?$/;

          if (!expr.test(puntaje)) {
            reject("El puntaje debe contener solos numeros en formato 25,25");
          } else {
            resolve();
          }
        }
      }
    });
  }

  function guardar(valor, puntaje, idItem) {
    return new Promise(function (resolve, reject) {
      superagent.post("http://localhost:3020/responseMono" + '/crearSubitem').send({
        valor: valor,
        puntaje: puntaje,
        idItem: idItem
      }) // sends a JSON post body
      .set('X-API-Key', 'foobar').set('accept', 'json').end(function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  function onSubmit() {
    return _onSubmit.apply(this, arguments);
  }

  function _onSubmit() {
    _onSubmit = (0,E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.tiposAlertas.cargando, "Creando subitem");
              validarInfo().then(function () {
                guardar(valor, puntaje, props.idItem).then(function () {
                  props.getsubItems();
                  (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.tiposAlertas.cargadoSuccess, "Registro exitoso");
                  handleClickClose();
                })["catch"](function (error) {
                  (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.tiposAlertas.cargadoError, error, 3000);
                });
              })["catch"](function (error) {
                (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.tiposAlertas.cargadoError, error, 3000);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_AgregarSubitem_module_scss__WEBPACK_IMPORTED_MODULE_5___default().agregarSubitem),
      onClick: function onClick() {
        return handleClickOpen();
      },
      children: "Agregar subitem"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Dialog, {
      fullWidth: true,
      maxWidth: "xs",
      open: open,
      "aria-labelledby": "max-width-dialog-title",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.DialogTitle, {
        id: "max-width-dialog-title",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "tituloAgregarActividad",
          children: "Nuevo subitem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 58
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.DialogContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "formularioUniStep",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
            noValidate: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Input, {
              className: "inputform",
              type: "text",
              placeholder: "Valor ",
              value: valor,
              name: "setNombre",
              onChange: onChangeValor
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Input, {
              className: "inputform",
              type: "text",
              placeholder: "Puntaje",
              value: puntaje,
              name: "setDescripcion",
              onChange: onChangePuntaje
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.DialogActions, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
          color: "primary",
          onClick: function onClick() {
            return onSubmit();
          },
          children: "Guardar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
          color: "primary",
          onClick: handleClickClose,
          children: "Cerrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 9
  }, _this);
};

_s(AgregarSubitem, "yqwD6i/hgYKeYy53iaJpeA2rxwI=");

_c = AgregarSubitem;
/* harmony default export */ __webpack_exports__["default"] = (AgregarSubitem);

var _c;

$RefreshReg$(_c, "AgregarSubitem");

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

/***/ "./Components/AdminItems/EditarSubitems.js":
/*!*************************************************!*\
  !*** ./Components/AdminItems/EditarSubitems.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _EditarSubitems_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditarSubitems.module.scss */ "./Components/AdminItems/EditarSubitems.module.scss");
/* harmony import */ var _EditarSubitems_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_EditarSubitems_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Inicialized/Toast */ "./Components/Inicialized/Toast.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\Components\\AdminItems\\EditarSubitems.js",
    _this = undefined,
    _s = $RefreshSig$();







var superagent = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");

var EditarSubitems = function EditarSubitems(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(props.subItem.valor),
      valor = _useState2[0],
      setValor = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(props.subItem.puntaje),
      puntaje = _useState3[0],
      setPuntaje = _useState3[1];

  function onChangeValor(e) {
    setValor(e.target.value);
  }

  ;

  function onChangePuntaje(e) {
    setPuntaje(e.target.value);
  }

  ;

  function handleClickOpen() {
    console.log(props.subItem);
    setOpen(true);
    setValor(props.subItem.valor);
    setPuntaje(props.subItem.puntaje);
  }

  ;

  function handleClickClose() {
    setOpen(false);
    setValor("");
    setPuntaje("");
  }

  ;

  function validarInfo() {
    return new Promise(function (resolve, reject) {
      if (valor == "") {
        reject("No has ingresado un valor");
      } else {
        if (puntaje == "") {
          reject("No has ingresado un puntaje para el item");
        } else {
          var expr = /^[0-9]+([.][0-9]+)?$/;

          if (!expr.test(puntaje)) {
            reject("El puntaje debe contener solos numeros en formato 25,25");
          } else {
            resolve();
          }
        }
      }
    });
  }

  function guardar(id, valor, puntaje) {
    return new Promise(function (resolve, reject) {
      superagent.post("http://localhost:3020/responseMono" + '/editarSubitem').send({
        id: id,
        valor: valor,
        puntaje: puntaje
      }) // sends a JSON post body
      .set('X-API-Key', 'foobar').set('accept', 'json').end(function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  function onSubmit() {
    return _onSubmit.apply(this, arguments);
  }

  function _onSubmit() {
    _onSubmit = (0,E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.tiposAlertas.cargando, "Creando subitem");
              validarInfo().then(function () {
                guardar(props.subItem.id, valor, puntaje).then(function () {
                  props.getsubItems();
                  (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.tiposAlertas.cargadoSuccess, "Registro exitoso");
                  handleClickClose();
                })["catch"](function (error) {
                  (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.tiposAlertas.cargadoError, error, 3000);
                });
              })["catch"](function (error) {
                (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.tiposAlertas.cargadoError, error, 3000);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_EditarSubitems_module_scss__WEBPACK_IMPORTED_MODULE_5___default().editarSubitem),
      onClick: function onClick() {
        return handleClickOpen();
      },
      children: "Editar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Dialog, {
      fullWidth: true,
      maxWidth: "xs",
      open: open,
      "aria-labelledby": "max-width-dialog-title",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.DialogTitle, {
        id: "max-width-dialog-title",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "tituloAgregarActividad",
          children: "Editar subitem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 58
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.DialogContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "formularioUniStep",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
            noValidate: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Input, {
              className: "inputform",
              type: "text",
              placeholder: "Valor ",
              value: valor,
              name: "setNombre",
              onChange: onChangeValor
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Input, {
              className: "inputform",
              type: "text",
              placeholder: "Puntaje",
              value: puntaje,
              name: "setDescripcion",
              onChange: onChangePuntaje
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.DialogActions, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
          color: "primary",
          onClick: function onClick() {
            return onSubmit();
          },
          children: "Guardar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
          color: "primary",
          onClick: handleClickClose,
          children: "Cerrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 9
  }, _this);
};

_s(EditarSubitems, "rgt7NNkwLKZp5KEqFrrjH0UK5cM=");

_c = EditarSubitems;
/* harmony default export */ __webpack_exports__["default"] = (EditarSubitems);

var _c;

$RefreshReg$(_c, "EditarSubitems");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9BZG1pbkl0ZW1zL0FncmVnYXJJdGVtLmpzIiwid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0FkbWluSXRlbXMvQWdyZWdhclN1Yml0ZW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvQWRtaW5JdGVtcy9FZGl0YXJTdWJpdGVtcy5qcyJdLCJuYW1lcyI6WyJzdXBlcmFnZW50IiwicmVxdWlyZSIsIkFncmVnYXJJdGVtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwibm9tYnJlIiwic2V0Tm9tYnJlIiwiZGVzY3JpcGNpb24iLCJzZXREZXNjcmlwY2lvbiIsIm9uQ2hhbmdlTm9tYnJlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VEZXNjcmlwY2lvbiIsImhhbmRsZUNsaWNrT3BlbiIsImhhbmRsZUNsaWNrQ2xvc2UiLCJ2YWxpZGFySW5mbyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ3VhcmRhciIsInBvc3QiLCJwcm9jZXNzIiwic2VuZCIsInNldCIsImVuZCIsImVyciIsInJlcyIsIm9uU3VibWl0IiwibnVldm9NZW5zYWplIiwidGlwb3NBbGVydGFzIiwidGhlbiIsImdldEl0ZW1zIiwiZXJyb3IiLCJBZ3JlZ2FyU3ViaXRlbSIsInZhbG9yIiwic2V0VmFsb3IiLCJwdW50YWplIiwic2V0UHVudGFqZSIsIm9uQ2hhbmdlVmFsb3IiLCJvbkNoYW5nZVB1bnRhamUiLCJleHByIiwidGVzdCIsImlkSXRlbSIsImdldHN1Ykl0ZW1zIiwic3R5bGVzIiwiRWRpdGFyU3ViaXRlbXMiLCJzdWJJdGVtIiwiY29uc29sZSIsImxvZyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsMkRBQUQsQ0FBMUI7O0FB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ZDVlZGRiOTE0ZjhhOWY0MTA0ZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BZ3JlZ2FySXRlbS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIERpYWxvZywgRGlhbG9nQWN0aW9ucywgRGlhbG9nQ29udGVudCwgRGlhbG9nVGl0bGUsIEZvcm1Db250cm9sLCBJbnB1dCwgSW5wdXRMYWJlbCwgTWVudUl0ZW0sIFNlbGVjdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBudWV2b01lbnNhamUsICB0aXBvc0FsZXJ0YXMgfSBmcm9tICcuLi9JbmljaWFsaXplZC9Ub2FzdCdcclxuY29uc3Qgc3VwZXJhZ2VudCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKTtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEFncmVnYXJJdGVtID0gKHByb3BzKSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW25vbWJyZSwgc2V0Tm9tYnJlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbZGVzY3JpcGNpb24sIHNldERlc2NyaXBjaW9uXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlTm9tYnJlKGUpIHtcclxuICAgICAgICBzZXROb21icmUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZURlc2NyaXBjaW9uKGUpIHtcclxuICAgICAgICBzZXREZXNjcmlwY2lvbihlLnRhcmdldC52YWx1ZSlcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPcGVuKCkge1xyXG4gICAgICAgIHNldE9wZW4odHJ1ZSlcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tDbG9zZSgpIHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKVxyXG4gICAgICAgIHNldE5vbWJyZShcIlwiKVxyXG4gICAgICAgIHNldERlc2NyaXBjaW9uKFwiXCIpXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub21icmUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTm8gaGFzIGluZ3Jlc2FkbyB1biBub21icmVcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwY2lvbiA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiTm8gaGFzIGluZ3Jlc2FkbyB1bmEgZGVzY3JpcGNpb24gcGFyYSBlbCBpdGVtXCIpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBndWFyZGFyKG5vbWJyZSwgZGVzY3JpcGNpb24pIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHN1cGVyYWdlbnRcclxuICAgICAgICAgICAgICAgIC5wb3N0KHByb2Nlc3MuZW52LkhPU1RfTkFNRSArICcvY3JlYXJJdGVtJylcclxuICAgICAgICAgICAgICAgIC5zZW5kKHsgbm9tYnJlOiBub21icmUsIGRlc2NyaXBjaW9uOiBkZXNjcmlwY2lvbiB9KSAvLyBzZW5kcyBhIEpTT04gcG9zdCBib2R5XHJcbiAgICAgICAgICAgICAgICAuc2V0KCdYLUFQSS1LZXknLCAnZm9vYmFyJylcclxuICAgICAgICAgICAgICAgIC5zZXQoJ2FjY2VwdCcsICdqc29uJylcclxuICAgICAgICAgICAgICAgIC5lbmQoKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKSAgICBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdCgpIHtcclxuICAgICAgICBudWV2b01lbnNhamUodGlwb3NBbGVydGFzLmNhcmdhbmRvLCBcIkNyZWFuZG8gQWx1bW5vXCIpXHJcbiAgICAgICAgdmFsaWRhckluZm8oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZ3VhcmRhcihub21icmUsIGRlc2NyaXBjaW9uKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb1N1Y2Nlc3MsIFwiUmVnaXN0cm8gZXhpdG9zb1wiKVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2tDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5nZXRJdGVtcygpXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb0Vycm9yLCBlcnJvciwgMzAwMClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb0Vycm9yLCBlcnJvciwgMzAwMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyZWdhckFkbWluXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tPcGVuKCl9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyZWdhclwiPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0b1wiPkFncmVnYXIgaXRlbTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG1heFdpZHRoPVwieHNcIlxyXG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1heC13aWR0aC1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJtYXgtd2lkdGgtZGlhbG9nLXRpdGxlXCI+PGRpdiBjbGFzc05hbWU9XCJ0aXR1bG9BZ3JlZ2FyQWN0aXZpZGFkXCI+TnVldm8gQWx1bW5vPC9kaXY+PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybXVsYXJpb1VuaVN0ZXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBjbGFzc05hbWU9XCJpbnB1dGZvcm1cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTm9tYnJlIGl0ZW1cIiB2YWx1ZT17bm9tYnJlfSBuYW1lPVwic2V0Tm9tYnJlXCIgb25DaGFuZ2U9e29uQ2hhbmdlTm9tYnJlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGNsYXNzTmFtZT1cImlucHV0Zm9ybVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwY2nDs25cIiB2YWx1ZT17ZGVzY3JpcGNpb259IG5hbWU9XCJzZXREZXNjcmlwY2lvblwiIG9uQ2hhbmdlPXtvbkNoYW5nZURlc2NyaXBjaW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBvblN1Ym1pdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR3VhcmRhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDZXJyYXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWdyZWdhckl0ZW0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQWdyZWdhclN1Yml0ZW0ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBEaWFsb2csIERpYWxvZ0FjdGlvbnMsIERpYWxvZ0NvbnRlbnQsIERpYWxvZ1RpdGxlLCBGb3JtQ29udHJvbCwgSW5wdXQsIElucHV0TGFiZWwsIE1lbnVJdGVtLCBTZWxlY3QgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbnVldm9NZW5zYWplLCAgdGlwb3NBbGVydGFzIH0gZnJvbSAnLi4vSW5pY2lhbGl6ZWQvVG9hc3QnXHJcbmNvbnN0IHN1cGVyYWdlbnQgPSByZXF1aXJlKCdzdXBlcmFnZW50Jyk7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBBZ3JlZ2FyU3ViaXRlbSA9IChwcm9wcykgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt2YWxvciwgc2V0VmFsb3JdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtwdW50YWplLCBzZXRQdW50YWplXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlVmFsb3IoZSkge1xyXG4gICAgICAgIHNldFZhbG9yKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VQdW50YWplKGUpIHtcclxuICAgICAgICBzZXRQdW50YWplKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGlja09wZW4oKSB7XHJcbiAgICAgICAgc2V0T3Blbih0cnVlKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGlja0Nsb3NlKCkge1xyXG4gICAgICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgICAgICAgc2V0VmFsb3IoXCJcIilcclxuICAgICAgICBzZXRQdW50YWplKFwiXCIpXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWxvciA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJObyBoYXMgaW5ncmVzYWRvIHVuIHZhbG9yXCIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHVudGFqZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiTm8gaGFzIGluZ3Jlc2FkbyB1biBwdW50YWplIHBhcmEgZWwgaXRlbVwiKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXhwciA9IC9eWzAtOV0rKFsuXVswLTldKyk/JC87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhwci50ZXN0KHB1bnRhamUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcIkVsIHB1bnRhamUgZGViZSBjb250ZW5lciBzb2xvcyBudW1lcm9zIGVuIGZvcm1hdG8gMjUsMjVcIilcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGd1YXJkYXIodmFsb3IsIHB1bnRhamUsIGlkSXRlbSkge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgc3VwZXJhZ2VudFxyXG4gICAgICAgICAgICAgICAgLnBvc3QocHJvY2Vzcy5lbnYuSE9TVF9OQU1FICsgJy9jcmVhclN1Yml0ZW0nKVxyXG4gICAgICAgICAgICAgICAgLnNlbmQoeyB2YWxvcjogdmFsb3IsIHB1bnRhamU6IHB1bnRhamUsIGlkSXRlbTogaWRJdGVtIH0pIC8vIHNlbmRzIGEgSlNPTiBwb3N0IGJvZHlcclxuICAgICAgICAgICAgICAgIC5zZXQoJ1gtQVBJLUtleScsICdmb29iYXInKVxyXG4gICAgICAgICAgICAgICAgLnNldCgnYWNjZXB0JywgJ2pzb24nKVxyXG4gICAgICAgICAgICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KCkge1xyXG4gICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2FuZG8sIFwiQ3JlYW5kbyBzdWJpdGVtXCIpXHJcbiAgICAgICAgdmFsaWRhckluZm8oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZ3VhcmRhcih2YWxvciwgcHVudGFqZSwgcHJvcHMuaWRJdGVtKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb3BzLmdldHN1Ykl0ZW1zKClcclxuICAgICAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb1N1Y2Nlc3MsIFwiUmVnaXN0cm8gZXhpdG9zb1wiKVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2tDbG9zZSgpXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb0Vycm9yLCBlcnJvciwgMzAwMClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb0Vycm9yLCBlcnJvciwgMzAwMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZ3JlZ2FyU3ViaXRlbX0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tPcGVuKCl9PkFncmVnYXIgc3ViaXRlbTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg9XCJ4c1wiXHJcbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibWF4LXdpZHRoLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cIm1heC13aWR0aC1kaWFsb2ctdGl0bGVcIj48ZGl2IGNsYXNzTmFtZT1cInRpdHVsb0FncmVnYXJBY3RpdmlkYWRcIj5OdWV2byBzdWJpdGVtPC9kaXY+PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybXVsYXJpb1VuaVN0ZXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBjbGFzc05hbWU9XCJpbnB1dGZvcm1cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVmFsb3IgXCIgdmFsdWU9e3ZhbG9yfSBuYW1lPVwic2V0Tm9tYnJlXCIgb25DaGFuZ2U9e29uQ2hhbmdlVmFsb3J9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRmb3JtXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlB1bnRhamVcIiB2YWx1ZT17cHVudGFqZX0gbmFtZT1cInNldERlc2NyaXBjaW9uXCIgb25DaGFuZ2U9e29uQ2hhbmdlUHVudGFqZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gb25TdWJtaXQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVDbGlja0Nsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2VycmFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFncmVnYXJTdWJpdGVtIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0VkaXRhclN1Yml0ZW1zLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRGlhbG9nLCBEaWFsb2dBY3Rpb25zLCBEaWFsb2dDb250ZW50LCBEaWFsb2dUaXRsZSwgRm9ybUNvbnRyb2wsIElucHV0LCBJbnB1dExhYmVsLCBNZW51SXRlbSwgU2VsZWN0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG51ZXZvTWVuc2FqZSwgIHRpcG9zQWxlcnRhcyB9IGZyb20gJy4uL0luaWNpYWxpemVkL1RvYXN0J1xyXG5jb25zdCBzdXBlcmFnZW50ID0gcmVxdWlyZSgnc3VwZXJhZ2VudCcpO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgRWRpdGFyU3ViaXRlbXMgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3ZhbG9yLCBzZXRWYWxvcl0gPSB1c2VTdGF0ZShwcm9wcy5zdWJJdGVtLnZhbG9yKVxyXG4gICAgY29uc3QgW3B1bnRhamUsIHNldFB1bnRhamVdID0gdXNlU3RhdGUocHJvcHMuc3ViSXRlbS5wdW50YWplKVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZVZhbG9yKGUpIHtcclxuICAgICAgICBzZXRWYWxvcihlLnRhcmdldC52YWx1ZSlcclxuICAgIH07XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlUHVudGFqZShlKSB7XHJcbiAgICAgICAgc2V0UHVudGFqZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPcGVuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLnN1Ykl0ZW0pXHJcbiAgICAgICAgc2V0T3Blbih0cnVlKVxyXG4gICAgICAgIHNldFZhbG9yKHByb3BzLnN1Ykl0ZW0udmFsb3IpXHJcbiAgICAgICAgc2V0UHVudGFqZShwcm9wcy5zdWJJdGVtLnB1bnRhamUpXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrQ2xvc2UoKSB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSlcclxuICAgICAgICBzZXRWYWxvcihcIlwiKVxyXG4gICAgICAgIHNldFB1bnRhamUoXCJcIilcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhckluZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbG9yID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcIk5vIGhhcyBpbmdyZXNhZG8gdW4gdmFsb3JcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChwdW50YWplID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJObyBoYXMgaW5ncmVzYWRvIHVuIHB1bnRhamUgcGFyYSBlbCBpdGVtXCIpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBleHByID0gL15bMC05XSsoWy5dWzAtOV0rKT8kLztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleHByLnRlc3QocHVudGFqZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiRWwgcHVudGFqZSBkZWJlIGNvbnRlbmVyIHNvbG9zIG51bWVyb3MgZW4gZm9ybWF0byAyNSwyNVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ3VhcmRhcihpZCwgdmFsb3IsIHB1bnRhamUpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHN1cGVyYWdlbnRcclxuICAgICAgICAgICAgICAgIC5wb3N0KHByb2Nlc3MuZW52LkhPU1RfTkFNRSArICcvZWRpdGFyU3ViaXRlbScpXHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7IGlkOiBpZCwgdmFsb3I6IHZhbG9yLCBwdW50YWplOiBwdW50YWplfSkgLy8gc2VuZHMgYSBKU09OIHBvc3QgYm9keVxyXG4gICAgICAgICAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXHJcbiAgICAgICAgICAgICAgICAuc2V0KCdhY2NlcHQnLCAnanNvbicpXHJcbiAgICAgICAgICAgICAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycikgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoKSB7XHJcbiAgICAgICAgbnVldm9NZW5zYWplKHRpcG9zQWxlcnRhcy5jYXJnYW5kbywgXCJDcmVhbmRvIHN1Yml0ZW1cIilcclxuICAgICAgICB2YWxpZGFySW5mbygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBndWFyZGFyKCBwcm9wcy5zdWJJdGVtLmlkICwgdmFsb3IsIHB1bnRhamUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuZ2V0c3ViSXRlbXMoKVxyXG4gICAgICAgICAgICAgICAgbnVldm9NZW5zYWplKHRpcG9zQWxlcnRhcy5jYXJnYWRvU3VjY2VzcywgXCJSZWdpc3RybyBleGl0b3NvXCIpXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVDbGlja0Nsb3NlKClcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbnVldm9NZW5zYWplKHRpcG9zQWxlcnRhcy5jYXJnYWRvRXJyb3IsIGVycm9yLCAzMDAwKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgbnVldm9NZW5zYWplKHRpcG9zQWxlcnRhcy5jYXJnYWRvRXJyb3IsIGVycm9yLCAzMDAwKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRhclN1Yml0ZW19IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrT3BlbigpfSA+RWRpdGFyPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aD1cInhzXCJcclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtYXgtd2lkdGgtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwibWF4LXdpZHRoLWRpYWxvZy10aXRsZVwiPjxkaXYgY2xhc3NOYW1lPVwidGl0dWxvQWdyZWdhckFjdGl2aWRhZFwiPkVkaXRhciBzdWJpdGVtPC9kaXY+PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybXVsYXJpb1VuaVN0ZXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBjbGFzc05hbWU9XCJpbnB1dGZvcm1cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVmFsb3IgXCIgdmFsdWU9e3ZhbG9yfSBuYW1lPVwic2V0Tm9tYnJlXCIgb25DaGFuZ2U9e29uQ2hhbmdlVmFsb3J9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRmb3JtXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlB1bnRhamVcIiB2YWx1ZT17cHVudGFqZX0gbmFtZT1cInNldERlc2NyaXBjaW9uXCIgb25DaGFuZ2U9e29uQ2hhbmdlUHVudGFqZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gb25TdWJtaXQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVDbGlja0Nsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2VycmFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRhclN1Yml0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==