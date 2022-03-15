self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/AdminMarcas/AgregarMarca.js":
/*!************************************************!*\
  !*** ./Components/AdminMarcas/AgregarMarca.js ***!
  \************************************************/
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Inicialized/Toast */ "./Components/Inicialized/Toast.js");
/* harmony import */ var material_ui_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui-color */ "./node_modules/material-ui-color/esm/index.js");
/* harmony import */ var _material_ui_icons_Wallpaper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Wallpaper */ "./node_modules/@material-ui/icons/Wallpaper.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\Components\\AdminMarcas\\AgregarMarca.js",
    _this = undefined,
    _s = $RefreshSig$();







var superagent = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");



var palette = ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'];

var AgregarMarca = function AgregarMarca(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      nombre = _useState2[0],
      setNombre = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      resena = _useState3[0],
      setResena = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      imagen = _useState4[0],
      setImagen = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      imagenSrc = _useState5[0],
      setImagenSrc = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,material_ui_color__WEBPACK_IMPORTED_MODULE_5__.createColor)('#000000')),
      colorUno = _useState6[0],
      setColorUno = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,material_ui_color__WEBPACK_IMPORTED_MODULE_5__.createColor)('#000000')),
      colorDos = _useState7[0],
      setColorDos = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,material_ui_color__WEBPACK_IMPORTED_MODULE_5__.createColor)('#000000')),
      colorTres = _useState8[0],
      setColorTres = _useState8[1];

  function onChangeNombre(e) {
    setNombre(e.target.value);
  }

  ;

  function onChangeResena(e) {
    setResena(e.target.value);
  }

  ;

  function onChangeColorUno(color) {
    setColorUno(color);
  }

  ;

  function onChangeColorDos(color) {
    setColorDos(color);
  }

  ;

  function onChangeColorTres(color) {
    setColorTres(color);
  }

  ;

  function handleClickOpen() {
    setOpen(true);
  }

  ;

  function handleClickClose() {
    setOpen(false);
    setNombre("");
    setResena("");
    setColorUno((0,material_ui_color__WEBPACK_IMPORTED_MODULE_5__.createColor)('#000000'));
    setColorDos((0,material_ui_color__WEBPACK_IMPORTED_MODULE_5__.createColor)('#000000'));
    setColorTres((0,material_ui_color__WEBPACK_IMPORTED_MODULE_5__.createColor)('#000000'));
    setImagen(null);
    setImagenSrc("");
  }

  ;

  function onSelectFileImage(e) {
    if (e.target.files[0]) {
      var file = e.target.files[0];

      if (file.type == "image/jpg" || file.type == "image/jpeg" || file.type == "image/png") {
        setImagen(file);
        var reader = new FileReader();
        reader.addEventListener('load', function () {
          return setImagenSrc(reader.result);
        });
        reader.readAsDataURL(file);
      } else {
        (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.tiposAlertas.error, "Solo se permite cargar imagenes - .jpg .png .jpeg -");
      }
    }
  }

  function isValidColor(color) {
    var isColor = true;

    try {
      isColor = color.match(/^#[A-F0-9]{6}$/i) !== null || color.match(/^#[A-F0-9]{8}$/i) !== null || color.match(/^#[A-F0-9]{3}$/i) !== null;
      return isColor;
    } catch (error) {
      return false;
    }
  }

  function validarInfo() {
    return new Promise(function (resolve, reject) {
      if (nombre == "") {
        reject("No has ingresado un nombre");
      } else {
        if (resena == "") {
          reject("No has ingresado una resena para esta marca");
        } else {
          if (!isValidColor('#' + colorUno.hex)) {
            reject("Color 1 no valido");
          } else {
            if (!isValidColor('#' + colorDos.hex)) {
              reject("Color 2 no valido");
            } else {
              if (!isValidColor('#' + colorTres.hex)) {
                reject("Color 3 no valido");
              } else {
                if (imagen == null) {
                  reject("Debes agregar un logo");
                } else {
                  resolve();
                }
              }
            }
          }
        }
      }
    });
  }

  function guardarImagen() {
    return new Promise(function (resolve, reject) {
      superagent.post("http://localhost:3020/responseMono" + '/uploadLogoMarca/' + nombre).attach('image', imagen).set('accept', 'json').end(function (err, res) {
        if (err) {
          console.log(err);
          reject("Error al guardar información");
        } else {
          var respuestaLogin = JSON.parse(res.text);
          resolve(respuestaLogin.imagen.filename);
        }
      });
    });
  }

  function guardar() {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0,E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(resolve, reject) {
        return E_NEW_LIFE_2_0_FEEGO_PROYECTOS_SERVIDOR_motosgumo_com_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                guardarImagen().then(function (url) {
                  superagent.post("http://localhost:3020/responseMono" + '/crearMarca').send({
                    nombre: nombre,
                    resena: resena,
                    urlLogo: url,
                    colorUno: colorUno.hex,
                    colorDos: colorDos.hex,
                    colorTres: colorTres.hex
                  }) // sends a JSON post body
                  .set('X-API-Key', 'foobar').set('accept', 'json').end(function (err, res) {
                    if (err) {
                      reject(err);
                    } else {
                      resolve();
                    }
                  });
                })["catch"](function (error) {
                  reject(error);
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
              (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.tiposAlertas.cargando, "Creando marca");
              validarInfo().then(function () {
                guardar().then(function () {
                  (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_4__.tiposAlertas.cargadoSuccess, "Registro exitoso");
                  handleClickClose();
                  props.getMarcas();
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
        lineNumber: 195,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "texto",
        children: "Agregar marca"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Dialog, {
      fullWidth: true,
      maxWidth: "xs",
      open: open,
      "aria-labelledby": "max-width-dialog-title",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.DialogTitle, {
        id: "max-width-dialog-title",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "tituloAgregarActividad",
          children: "Nueva Marca"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 58
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.DialogContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "formularioUniStep",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            noValidate: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Input, {
              className: "inputform",
              type: "text",
              placeholder: "Nombre item",
              value: nombre,
              name: "setNombre",
              onChange: onChangeNombre
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TextField, {
              value: resena,
              onChange: onChangeResena,
              id: "standard-textarea",
              placeholder: "Rese\xF1a",
              multiline: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "upload-photo",
              className: "inputform",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                style: {
                  display: 'none'
                },
                id: "upload-photo",
                name: "upload-photo",
                type: "file",
                onChange: onSelectFileImage
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Fab, {
                color: "secondary",
                size: "small",
                component: "span",
                "aria-label": "add",
                variant: "extended",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Wallpaper__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 37
                }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: "Escoger logo "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 55
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: imagenSrc,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "inputform",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "Color 1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(material_ui_color__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, {
                value: colorUno,
                id: "newCategoryColour",
                onChange: onChangeColorUno,
                format: "hex",
                margin: "dense",
                size: "small",
                hideTextfield: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "inputform",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "Color 2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(material_ui_color__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, {
                value: colorDos,
                id: "newCategoryColour",
                onChange: onChangeColorDos,
                format: "hex",
                margin: "dense",
                size: "small",
                hideTextfield: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "inputform",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "Color 3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(material_ui_color__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, {
                value: colorTres,
                id: "newCategoryColour",
                onChange: onChangeColorTres,
                format: "hex",
                margin: "dense",
                size: "small",
                hideTextfield: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.DialogActions, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
          color: "primary",
          onClick: onSubmit,
          children: "Guardar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
          color: "primary",
          onClick: handleClickClose,
          children: "Cerrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 192,
    columnNumber: 9
  }, _this);
};

_s(AgregarMarca, "0nFd7fxg/s8Hj4kX/ZfYSRhOlyE=");

_c = AgregarMarca;
/* harmony default export */ __webpack_exports__["default"] = (AgregarMarca);

var _c;

$RefreshReg$(_c, "AgregarMarca");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9BZG1pbk1hcmNhcy9BZ3JlZ2FyTWFyY2EuanMiXSwibmFtZXMiOlsic3VwZXJhZ2VudCIsInJlcXVpcmUiLCJwYWxldHRlIiwiQWdyZWdhck1hcmNhIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwibm9tYnJlIiwic2V0Tm9tYnJlIiwicmVzZW5hIiwic2V0UmVzZW5hIiwiaW1hZ2VuIiwic2V0SW1hZ2VuIiwiaW1hZ2VuU3JjIiwic2V0SW1hZ2VuU3JjIiwiY3JlYXRlQ29sb3IiLCJjb2xvclVubyIsInNldENvbG9yVW5vIiwiY29sb3JEb3MiLCJzZXRDb2xvckRvcyIsImNvbG9yVHJlcyIsInNldENvbG9yVHJlcyIsIm9uQ2hhbmdlTm9tYnJlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VSZXNlbmEiLCJvbkNoYW5nZUNvbG9yVW5vIiwiY29sb3IiLCJvbkNoYW5nZUNvbG9yRG9zIiwib25DaGFuZ2VDb2xvclRyZXMiLCJoYW5kbGVDbGlja09wZW4iLCJoYW5kbGVDbGlja0Nsb3NlIiwib25TZWxlY3RGaWxlSW1hZ2UiLCJmaWxlcyIsImZpbGUiLCJ0eXBlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwibnVldm9NZW5zYWplIiwidGlwb3NBbGVydGFzIiwiaXNWYWxpZENvbG9yIiwiaXNDb2xvciIsIm1hdGNoIiwiZXJyb3IiLCJ2YWxpZGFySW5mbyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaGV4IiwiZ3VhcmRhckltYWdlbiIsInBvc3QiLCJwcm9jZXNzIiwiYXR0YWNoIiwic2V0IiwiZW5kIiwiZXJyIiwicmVzIiwiY29uc29sZSIsImxvZyIsInJlc3B1ZXN0YUxvZ2luIiwiSlNPTiIsInBhcnNlIiwidGV4dCIsImZpbGVuYW1lIiwiZ3VhcmRhciIsInRoZW4iLCJ1cmwiLCJzZW5kIiwidXJsTG9nbyIsIm9uU3VibWl0IiwiZ2V0TWFyY2FzIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsMkRBQUQsQ0FBMUI7O0FBQ0E7QUFDQTtBQUVBLElBQU1DLE9BQU8sR0FBRyxDQUNaLFNBRFksRUFDRCxTQURDLEVBQ1UsU0FEVixFQUNxQixTQURyQixFQUNnQyxTQURoQyxFQUMyQyxTQUQzQyxFQUNzRCxTQUR0RCxFQUNpRSxTQURqRSxFQUM0RSxTQUQ1RSxFQUN1RixTQUR2RixFQUNrRyxTQURsRyxFQUM2RyxTQUQ3RyxFQUN3SCxTQUR4SCxFQUNtSSxTQURuSSxFQUM4SSxTQUQ5SSxDQUFoQjs7QUFNQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFHSkMsK0NBQVEsQ0FBQyxLQUFELENBSEo7QUFBQSxNQUdyQkMsSUFIcUI7QUFBQSxNQUdmQyxPQUhlOztBQUFBLG1CQUlBRiwrQ0FBUSxDQUFDLEVBQUQsQ0FKUjtBQUFBLE1BSXJCRyxNQUpxQjtBQUFBLE1BSWJDLFNBSmE7O0FBQUEsbUJBS0FKLCtDQUFRLENBQUMsRUFBRCxDQUxSO0FBQUEsTUFLckJLLE1BTHFCO0FBQUEsTUFLYkMsU0FMYTs7QUFBQSxtQkFNQU4sK0NBQVEsQ0FBQyxJQUFELENBTlI7QUFBQSxNQU1yQk8sTUFOcUI7QUFBQSxNQU1iQyxTQU5hOztBQUFBLG1CQU9NUiwrQ0FBUSxDQUFDLEVBQUQsQ0FQZDtBQUFBLE1BT3JCUyxTQVBxQjtBQUFBLE1BT1ZDLFlBUFU7O0FBQUEsbUJBUUlWLCtDQUFRLENBQUNXLDhEQUFXLENBQUMsU0FBRCxDQUFaLENBUlo7QUFBQSxNQVFyQkMsUUFScUI7QUFBQSxNQVFYQyxXQVJXOztBQUFBLG1CQVNJYiwrQ0FBUSxDQUFDVyw4REFBVyxDQUFDLFNBQUQsQ0FBWixDQVRaO0FBQUEsTUFTckJHLFFBVHFCO0FBQUEsTUFTWEMsV0FUVzs7QUFBQSxtQkFVTWYsK0NBQVEsQ0FBQ1csOERBQVcsQ0FBQyxTQUFELENBQVosQ0FWZDtBQUFBLE1BVXJCSyxTQVZxQjtBQUFBLE1BVVZDLFlBVlU7O0FBYTVCLFdBQVNDLGNBQVQsQ0FBd0JDLENBQXhCLEVBQTJCO0FBQ3ZCZixhQUFTLENBQUNlLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFDSDs7QUFBQTs7QUFFRCxXQUFTQyxjQUFULENBQXdCSCxDQUF4QixFQUEyQjtBQUN2QmIsYUFBUyxDQUFDYSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQ0g7O0FBQUE7O0FBRUQsV0FBU0UsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDO0FBQzdCWCxlQUFXLENBQUNXLEtBQUQsQ0FBWDtBQUVIOztBQUFBOztBQUVELFdBQVNDLGdCQUFULENBQTBCRCxLQUExQixFQUFpQztBQUM3QlQsZUFBVyxDQUFDUyxLQUFELENBQVg7QUFDSDs7QUFBQTs7QUFFRCxXQUFTRSxpQkFBVCxDQUEyQkYsS0FBM0IsRUFBa0M7QUFDOUJQLGdCQUFZLENBQUNPLEtBQUQsQ0FBWjtBQUNIOztBQUFBOztBQUdELFdBQVNHLGVBQVQsR0FBMkI7QUFDdkJ6QixXQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0g7O0FBQUE7O0FBRUQsV0FBUzBCLGdCQUFULEdBQTRCO0FBQ3hCMUIsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBRSxhQUFTLENBQUMsRUFBRCxDQUFUO0FBQ0FFLGFBQVMsQ0FBQyxFQUFELENBQVQ7QUFDQU8sZUFBVyxDQUFDRiw4REFBVyxDQUFDLFNBQUQsQ0FBWixDQUFYO0FBQ0FJLGVBQVcsQ0FBQ0osOERBQVcsQ0FBQyxTQUFELENBQVosQ0FBWDtBQUNBTSxnQkFBWSxDQUFDTiw4REFBVyxDQUFDLFNBQUQsQ0FBWixDQUFaO0FBQ0FILGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQUUsZ0JBQVksQ0FBQyxFQUFELENBQVo7QUFDSDs7QUFBQTs7QUFFRCxXQUFTbUIsaUJBQVQsQ0FBMkJWLENBQTNCLEVBQThCO0FBQzFCLFFBQUlBLENBQUMsQ0FBQ0MsTUFBRixDQUFTVSxLQUFULENBQWUsQ0FBZixDQUFKLEVBQXVCO0FBQ25CLFVBQUlDLElBQUksR0FBR1osQ0FBQyxDQUFDQyxNQUFGLENBQVNVLEtBQVQsQ0FBZSxDQUFmLENBQVg7O0FBRUEsVUFBSUMsSUFBSSxDQUFDQyxJQUFMLElBQWEsV0FBYixJQUE0QkQsSUFBSSxDQUFDQyxJQUFMLElBQWEsWUFBekMsSUFBeURELElBQUksQ0FBQ0MsSUFBTCxJQUFhLFdBQTFFLEVBQXVGO0FBQ25GeEIsaUJBQVMsQ0FBQ3VCLElBQUQsQ0FBVDtBQUNBLFlBQU1FLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7QUFDQUQsY0FBTSxDQUFDRSxnQkFBUCxDQUF3QixNQUF4QixFQUFnQztBQUFBLGlCQUM1QnpCLFlBQVksQ0FBQ3VCLE1BQU0sQ0FBQ0csTUFBUixDQURnQjtBQUFBLFNBQWhDO0FBR0FILGNBQU0sQ0FBQ0ksYUFBUCxDQUFxQk4sSUFBckI7QUFDSCxPQVBELE1BT087QUFDSE8sd0VBQVksQ0FBQ0Msa0VBQUQsRUFBcUIscURBQXJCLENBQVo7QUFDSDtBQUNKO0FBRUo7O0FBRUQsV0FBU0MsWUFBVCxDQUFzQmhCLEtBQXRCLEVBQTZCO0FBQ3pCLFFBQUlpQixPQUFPLEdBQUcsSUFBZDs7QUFDQSxRQUFJO0FBQ0FBLGFBQU8sR0FBSWpCLEtBQUssQ0FBQ2tCLEtBQU4sQ0FBWSxpQkFBWixNQUFtQyxJQUFuQyxJQUEyQ2xCLEtBQUssQ0FBQ2tCLEtBQU4sQ0FBWSxpQkFBWixNQUFtQyxJQUE5RSxJQUFzRmxCLEtBQUssQ0FBQ2tCLEtBQU4sQ0FBWSxpQkFBWixNQUFtQyxJQUFwSTtBQUVBLGFBQU9ELE9BQVA7QUFDSCxLQUpELENBSUUsT0FBT0UsS0FBUCxFQUFjO0FBQ1osYUFBTyxLQUFQO0FBQ0g7QUFDSjs7QUFFRCxXQUFTQyxXQUFULEdBQXVCO0FBQ25CLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxVQUFJNUMsTUFBTSxJQUFJLEVBQWQsRUFBa0I7QUFDZDRDLGNBQU0sQ0FBQyw0QkFBRCxDQUFOO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsWUFBSTFDLE1BQU0sSUFBSSxFQUFkLEVBQWtCO0FBQ2QwQyxnQkFBTSxDQUFDLDZDQUFELENBQU47QUFDSCxTQUZELE1BRU87QUFDSCxjQUFJLENBQUNQLFlBQVksQ0FBQyxNQUFNNUIsUUFBUSxDQUFDb0MsR0FBaEIsQ0FBakIsRUFBdUM7QUFDbkNELGtCQUFNLENBQUMsbUJBQUQsQ0FBTjtBQUNILFdBRkQsTUFFTztBQUNILGdCQUFJLENBQUNQLFlBQVksQ0FBQyxNQUFNMUIsUUFBUSxDQUFDa0MsR0FBaEIsQ0FBakIsRUFBdUM7QUFDbkNELG9CQUFNLENBQUMsbUJBQUQsQ0FBTjtBQUNILGFBRkQsTUFFTztBQUNILGtCQUFJLENBQUNQLFlBQVksQ0FBQyxNQUFNeEIsU0FBUyxDQUFDZ0MsR0FBakIsQ0FBakIsRUFBd0M7QUFDcENELHNCQUFNLENBQUMsbUJBQUQsQ0FBTjtBQUNILGVBRkQsTUFFTztBQUNILG9CQUFJeEMsTUFBTSxJQUFJLElBQWQsRUFBb0I7QUFDaEJ3Qyx3QkFBTSxDQUFDLHVCQUFELENBQU47QUFDSCxpQkFGRCxNQUVPO0FBQ0hELHlCQUFPO0FBQ1Y7QUFDSjtBQUNKO0FBQ0o7QUFDSjtBQUNKO0FBQ0osS0ExQk0sQ0FBUDtBQTJCSDs7QUFFRCxXQUFTRyxhQUFULEdBQXlCO0FBQ3JCLFdBQU8sSUFBSUosT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ3BELGdCQUFVLENBQ0x1RCxJQURMLENBQ1VDLG9DQUFBLEdBQXdCLG1CQUF4QixHQUE4Q2hELE1BRHhELEVBRUtpRCxNQUZMLENBRVksT0FGWixFQUVxQjdDLE1BRnJCLEVBR0s4QyxHQUhMLENBR1MsUUFIVCxFQUdtQixNQUhuQixFQUlLQyxHQUpMLENBSVMsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDZixZQUFJRCxHQUFKLEVBQVM7QUFDTEUsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBQ0FSLGdCQUFNLENBQUMsOEJBQUQsQ0FBTjtBQUNILFNBSEQsTUFHTztBQUNILGNBQU1ZLGNBQWMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLEdBQUcsQ0FBQ00sSUFBZixDQUF2QjtBQUNBaEIsaUJBQU8sQ0FBQ2EsY0FBYyxDQUFDcEQsTUFBZixDQUFzQndELFFBQXZCLENBQVA7QUFFSDtBQUNKLE9BYkw7QUFjSCxLQWZNLENBQVA7QUFnQkg7O0FBRUQsV0FBU0MsT0FBVCxHQUFtQjtBQUVmLFdBQU8sSUFBSW5CLE9BQUo7QUFBQSwrVEFBWSxpQkFBT0MsT0FBUCxFQUFnQkMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVmRSw2QkFBYSxHQUFHZ0IsSUFBaEIsQ0FBcUIsVUFBQ0MsR0FBRCxFQUFTO0FBRTFCdkUsNEJBQVUsQ0FDTHVELElBREwsQ0FDVUMsb0NBQUEsR0FBd0IsYUFEbEMsRUFFS2dCLElBRkwsQ0FFVTtBQUFFaEUsMEJBQU0sRUFBRUEsTUFBVjtBQUFrQkUsMEJBQU0sRUFBRUEsTUFBMUI7QUFBa0MrRCwyQkFBTyxFQUFFRixHQUEzQztBQUFnRHRELDRCQUFRLEVBQUVBLFFBQVEsQ0FBQ29DLEdBQW5FO0FBQXdFbEMsNEJBQVEsRUFBRUEsUUFBUSxDQUFDa0MsR0FBM0Y7QUFBZ0doQyw2QkFBUyxFQUFFQSxTQUFTLENBQUNnQztBQUFySCxtQkFGVixFQUVzSTtBQUZ0SSxtQkFHS0ssR0FITCxDQUdTLFdBSFQsRUFHc0IsUUFIdEIsRUFJS0EsR0FKTCxDQUlTLFFBSlQsRUFJbUIsTUFKbkIsRUFLS0MsR0FMTCxDQUtTLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2Ysd0JBQUlELEdBQUosRUFBUztBQUNMUiw0QkFBTSxDQUFDUSxHQUFELENBQU47QUFDSCxxQkFGRCxNQUVPO0FBQ0hULDZCQUFPO0FBQ1Y7QUFDSixtQkFYTDtBQWFILGlCQWZELFdBZVMsVUFBQ0gsS0FBRCxFQUFXO0FBQ2hCSSx3QkFBTSxDQUFDSixLQUFELENBQU47QUFDSCxpQkFqQkQ7O0FBRmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQO0FBd0JIOztBQTFKMkIsV0E2SmIwQixRQTdKYTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw4VEE2SjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSS9CLDhFQUFZLENBQUNDLHFFQUFELEVBQXdCLGVBQXhCLENBQVo7QUFDQUsseUJBQVcsR0FBR3FCLElBQWQsQ0FBbUIsWUFBTTtBQUNyQkQsdUJBQU8sR0FBR0MsSUFBVixDQUFlLFlBQU07QUFDakIzQixrRkFBWSxDQUFDQywyRUFBRCxFQUE4QixrQkFBOUIsQ0FBWjtBQUNBWCxrQ0FBZ0I7QUFDaEI3Qix1QkFBSyxDQUFDdUUsU0FBTjtBQUVILGlCQUxELFdBS1MsVUFBQzNCLEtBQUQsRUFBVztBQUNoQkwsa0ZBQVksQ0FBQ0MseUVBQUQsRUFBNEJJLEtBQTVCLEVBQW1DLElBQW5DLENBQVo7QUFDSCxpQkFQRDtBQVNILGVBVkQsV0FVUyxVQUFDQSxLQUFELEVBQVc7QUFDaEJMLGdGQUFZLENBQUNDLHlFQUFELEVBQTRCSSxLQUE1QixFQUFtQyxJQUFuQyxDQUFaO0FBQ0gsZUFaRDs7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTdKNEI7QUFBQTtBQUFBOztBQStLNUIsc0JBQ0ksOERBQUMsdURBQUQ7QUFBQSw0QkFFSTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQThCLGFBQU8sRUFBRTtBQUFBLGVBQU1oQixlQUFlLEVBQXJCO0FBQUEsT0FBdkM7QUFBQSw4QkFDSTtBQUFNLGlCQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQU0saUJBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBU0ksOERBQUMscURBQUQ7QUFDSSxlQUFTLEVBQUUsSUFEZjtBQUVJLGNBQVEsRUFBQyxJQUZiO0FBR0ksVUFBSSxFQUFFMUIsSUFIVjtBQUlJLHlCQUFnQix3QkFKcEI7QUFBQSw4QkFNSSw4REFBQywwREFBRDtBQUFhLFVBQUUsRUFBQyx3QkFBaEI7QUFBQSwrQkFBeUM7QUFBSyxtQkFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSixlQU9JLDhEQUFDLDREQUFEO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQUEsaUNBQ0k7QUFBTSxzQkFBVSxNQUFoQjtBQUFBLG9DQUNJLDhEQUFDLG9EQUFEO0FBQU8sdUJBQVMsRUFBQyxXQUFqQjtBQUE2QixrQkFBSSxFQUFDLE1BQWxDO0FBQXlDLHlCQUFXLEVBQUMsYUFBckQ7QUFBbUUsbUJBQUssRUFBRUUsTUFBMUU7QUFBa0Ysa0JBQUksRUFBQyxXQUF2RjtBQUFtRyxzQkFBUSxFQUFFZTtBQUE3RztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUksOERBQUMsd0RBQUQ7QUFBVyxtQkFBSyxFQUFFYixNQUFsQjtBQUEwQixzQkFBUSxFQUFFaUIsY0FBcEM7QUFBb0QsZ0JBQUUsRUFBQyxtQkFBdkQ7QUFBMkUseUJBQVcsRUFBQyxXQUF2RjtBQUFnRyx1QkFBUztBQUF6RztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0k7QUFBTyxxQkFBTyxFQUFDLGNBQWY7QUFBOEIsdUJBQVMsRUFBQyxXQUF4QztBQUFBLHNDQUNJO0FBQ0kscUJBQUssRUFBRTtBQUFFaUQseUJBQU8sRUFBRTtBQUFYLGlCQURYO0FBRUksa0JBQUUsRUFBQyxjQUZQO0FBR0ksb0JBQUksRUFBQyxjQUhUO0FBSUksb0JBQUksRUFBQyxNQUpUO0FBS0ksd0JBQVEsRUFBRTFDO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQVNJLDhEQUFDLGtEQUFEO0FBQ0kscUJBQUssRUFBQyxXQURWO0FBRUksb0JBQUksRUFBQyxPQUZUO0FBR0kseUJBQVMsRUFBQyxNQUhkO0FBSUksOEJBQVcsS0FKZjtBQUtJLHVCQUFPLEVBQUMsVUFMWjtBQUFBLHdDQU9JLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEosb0JBT3NCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVB0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKLGVBdUJJO0FBQUssaUJBQUcsRUFBRXBCLFNBQVY7QUFBcUIsaUJBQUcsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXZCSixlQXlCSTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUFBLHNDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUksOERBQUMsMERBQUQ7QUFBYSxxQkFBSyxFQUFFRyxRQUFwQjtBQUE4QixrQkFBRSxFQUFDLG1CQUFqQztBQUFxRCx3QkFBUSxFQUFFVyxnQkFBL0Q7QUFBaUYsc0JBQU0sRUFBQyxLQUF4RjtBQUE4RixzQkFBTSxFQUFDLE9BQXJHO0FBQTZHLG9CQUFJLEVBQUMsT0FBbEg7QUFBMEgsNkJBQWE7QUFBdkk7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBekJKLGVBNkJJO0FBQUssdUJBQVMsRUFBQyxXQUFmO0FBQUEsc0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSSw4REFBQywwREFBRDtBQUFhLHFCQUFLLEVBQUVULFFBQXBCO0FBQThCLGtCQUFFLEVBQUMsbUJBQWpDO0FBQXFELHdCQUFRLEVBQUVXLGdCQUEvRDtBQUFpRixzQkFBTSxFQUFDLEtBQXhGO0FBQThGLHNCQUFNLEVBQUMsT0FBckc7QUFBNkcsb0JBQUksRUFBQyxPQUFsSDtBQUEwSCw2QkFBYTtBQUF2STtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE3QkosZUFpQ0k7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLDhEQUFDLDBEQUFEO0FBQWEscUJBQUssRUFBRVQsU0FBcEI7QUFBK0Isa0JBQUUsRUFBQyxtQkFBbEM7QUFBc0Qsd0JBQVEsRUFBRVUsaUJBQWhFO0FBQW1GLHNCQUFNLEVBQUMsS0FBMUY7QUFBZ0csc0JBQU0sRUFBQyxPQUF2RztBQUErRyxvQkFBSSxFQUFDLE9BQXBIO0FBQTRILDZCQUFhO0FBQXpJO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKLGVBb0RJLDhEQUFDLDREQUFEO0FBQUEsZ0NBQ0ksOERBQUMscURBQUQ7QUFBUSxlQUFLLEVBQUMsU0FBZDtBQUF3QixpQkFBTyxFQUFFMkMsUUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFLSSw4REFBQyxxREFBRDtBQUFRLGVBQUssRUFBQyxTQUFkO0FBQXdCLGlCQUFPLEVBQUV6QyxnQkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMEVILENBelBEOztHQUFNOUIsWTs7S0FBQUEsWTtBQTJQTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNWVjYzgyMzAwNjQzMDY0ZGRkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FncmVnYXJNYXJjYS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIERpYWxvZywgRGlhbG9nQWN0aW9ucywgRGlhbG9nQ29udGVudCwgRGlhbG9nVGl0bGUsIEZhYiwgRm9ybUNvbnRyb2wsIElucHV0LCBJbnB1dExhYmVsLCBNZW51SXRlbSwgU2VsZWN0LCBUZXh0RmllbGQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbnVldm9NZW5zYWplLCB0aXBvc0FsZXJ0YXMgfSBmcm9tICcuLi9JbmljaWFsaXplZC9Ub2FzdCdcclxuY29uc3Qgc3VwZXJhZ2VudCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKTtcclxuaW1wb3J0IHsgQ29sb3IsIENvbG9yUGlja2VyLCBjcmVhdGVDb2xvciwgaXNjb2xvIH0gZnJvbSBcIm1hdGVyaWFsLXVpLWNvbG9yXCI7XHJcbmltcG9ydCBXYWxscGFwZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XYWxscGFwZXInO1xyXG5cclxuY29uc3QgcGFsZXR0ZSA9IFtcclxuICAgICcjRDAwMjFCJywgJyNGNUE2MjMnLCAnI0Y4RTcxQycsICcjOEI1NzJBJywgJyM3RUQzMjEnLCAnIzQxNzUwNScsICcjQkQxMEUwJywgJyM5MDEzRkUnLCAnIzRBOTBFMicsICcjNTBFM0MyJywgJyNCOEU5ODYnLCAnIzAwMDAwMCcsICcjNEE0QTRBJywgJyM5QjlCOUInLCAnI0ZGRkZGRicsXHJcbl07XHJcblxyXG5cclxuXHJcbmNvbnN0IEFncmVnYXJNYXJjYSA9IChwcm9wcykgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtub21icmUsIHNldE5vbWJyZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3Jlc2VuYSwgc2V0UmVzZW5hXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbaW1hZ2VuLCBzZXRJbWFnZW5dID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtpbWFnZW5TcmMsIHNldEltYWdlblNyY10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2NvbG9yVW5vLCBzZXRDb2xvclVub10gPSB1c2VTdGF0ZShjcmVhdGVDb2xvcignIzAwMDAwMCcpKVxyXG4gICAgY29uc3QgW2NvbG9yRG9zLCBzZXRDb2xvckRvc10gPSB1c2VTdGF0ZShjcmVhdGVDb2xvcignIzAwMDAwMCcpKVxyXG4gICAgY29uc3QgW2NvbG9yVHJlcywgc2V0Q29sb3JUcmVzXSA9IHVzZVN0YXRlKGNyZWF0ZUNvbG9yKCcjMDAwMDAwJykpXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlTm9tYnJlKGUpIHtcclxuICAgICAgICBzZXROb21icmUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlUmVzZW5hKGUpIHtcclxuICAgICAgICBzZXRSZXNlbmEoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlQ29sb3JVbm8oY29sb3IpIHtcclxuICAgICAgICBzZXRDb2xvclVubyhjb2xvcilcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlQ29sb3JEb3MoY29sb3IpIHtcclxuICAgICAgICBzZXRDb2xvckRvcyhjb2xvcilcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VDb2xvclRyZXMoY29sb3IpIHtcclxuICAgICAgICBzZXRDb2xvclRyZXMoY29sb3IpXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGlja09wZW4oKSB7XHJcbiAgICAgICAgc2V0T3Blbih0cnVlKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGlja0Nsb3NlKCkge1xyXG4gICAgICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgICAgICAgc2V0Tm9tYnJlKFwiXCIpXHJcbiAgICAgICAgc2V0UmVzZW5hKFwiXCIpXHJcbiAgICAgICAgc2V0Q29sb3JVbm8oY3JlYXRlQ29sb3IoJyMwMDAwMDAnKSlcclxuICAgICAgICBzZXRDb2xvckRvcyhjcmVhdGVDb2xvcignIzAwMDAwMCcpKVxyXG4gICAgICAgIHNldENvbG9yVHJlcyhjcmVhdGVDb2xvcignIzAwMDAwMCcpKVxyXG4gICAgICAgIHNldEltYWdlbihudWxsKVxyXG4gICAgICAgIHNldEltYWdlblNyYyhcIlwiKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBvblNlbGVjdEZpbGVJbWFnZShlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmZpbGVzWzBdKSB7XHJcbiAgICAgICAgICAgIHZhciBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF1cclxuXHJcbiAgICAgICAgICAgIGlmIChmaWxlLnR5cGUgPT0gXCJpbWFnZS9qcGdcIiB8fCBmaWxlLnR5cGUgPT0gXCJpbWFnZS9qcGVnXCIgfHwgZmlsZS50eXBlID09IFwiaW1hZ2UvcG5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHNldEltYWdlbihmaWxlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZW5TcmMocmVhZGVyLnJlc3VsdClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuZXJyb3IsIFwiU29sbyBzZSBwZXJtaXRlIGNhcmdhciBpbWFnZW5lcyAtIC5qcGcgLnBuZyAuanBlZyAtXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzVmFsaWRDb2xvcihjb2xvcikge1xyXG4gICAgICAgIHZhciBpc0NvbG9yID0gdHJ1ZVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlzQ29sb3IgPSAoY29sb3IubWF0Y2goL14jW0EtRjAtOV17Nn0kL2kpICE9PSBudWxsIHx8IGNvbG9yLm1hdGNoKC9eI1tBLUYwLTldezh9JC9pKSAhPT0gbnVsbCB8fCBjb2xvci5tYXRjaCgvXiNbQS1GMC05XXszfSQvaSkgIT09IG51bGwpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaXNDb2xvclxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGFySW5mbygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9tYnJlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcIk5vIGhhcyBpbmdyZXNhZG8gdW4gbm9tYnJlXCIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzZW5hID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJObyBoYXMgaW5ncmVzYWRvIHVuYSByZXNlbmEgcGFyYSBlc3RhIG1hcmNhXCIpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZENvbG9yKCcjJyArIGNvbG9yVW5vLmhleCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiQ29sb3IgMSBubyB2YWxpZG9cIilcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRDb2xvcignIycgKyBjb2xvckRvcy5oZXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJDb2xvciAyIG5vIHZhbGlkb1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkQ29sb3IoJyMnICsgY29sb3JUcmVzLmhleCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJDb2xvciAzIG5vIHZhbGlkb1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VuID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiRGViZXMgYWdyZWdhciB1biBsb2dvXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBndWFyZGFySW1hZ2VuKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHN1cGVyYWdlbnRcclxuICAgICAgICAgICAgICAgIC5wb3N0KHByb2Nlc3MuZW52LkhPU1RfTkFNRSArICcvdXBsb2FkTG9nb01hcmNhLycgKyBub21icmUpXHJcbiAgICAgICAgICAgICAgICAuYXR0YWNoKCdpbWFnZScsIGltYWdlbilcclxuICAgICAgICAgICAgICAgIC5zZXQoJ2FjY2VwdCcsICdqc29uJylcclxuICAgICAgICAgICAgICAgIC5lbmQoKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJFcnJvciBhbCBndWFyZGFyIGluZm9ybWFjacOzblwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3B1ZXN0YUxvZ2luID0gSlNPTi5wYXJzZShyZXMudGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcHVlc3RhTG9naW4uaW1hZ2VuLmZpbGVuYW1lKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGd1YXJkYXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBndWFyZGFySW1hZ2VuKCkudGhlbigodXJsKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3VwZXJhZ2VudFxyXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KHByb2Nlc3MuZW52LkhPU1RfTkFNRSArICcvY3JlYXJNYXJjYScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoeyBub21icmU6IG5vbWJyZSwgcmVzZW5hOiByZXNlbmEsIHVybExvZ286IHVybCwgY29sb3JVbm86IGNvbG9yVW5vLmhleCwgY29sb3JEb3M6IGNvbG9yRG9zLmhleCwgY29sb3JUcmVzOiBjb2xvclRyZXMuaGV4IH0pIC8vIHNlbmRzIGEgSlNPTiBwb3N0IGJvZHlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0KCdYLUFQSS1LZXknLCAnZm9vYmFyJylcclxuICAgICAgICAgICAgICAgICAgICAuc2V0KCdhY2NlcHQnLCAnanNvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdCgpIHtcclxuICAgICAgICBudWV2b01lbnNhamUodGlwb3NBbGVydGFzLmNhcmdhbmRvLCBcIkNyZWFuZG8gbWFyY2FcIilcclxuICAgICAgICB2YWxpZGFySW5mbygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBndWFyZGFyKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBudWV2b01lbnNhamUodGlwb3NBbGVydGFzLmNhcmdhZG9TdWNjZXNzLCBcIlJlZ2lzdHJvIGV4aXRvc29cIilcclxuICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgcHJvcHMuZ2V0TWFyY2FzKClcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbnVldm9NZW5zYWplKHRpcG9zQWxlcnRhcy5jYXJnYWRvRXJyb3IsIGVycm9yLCAzMDAwKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgbnVldm9NZW5zYWplKHRpcG9zQWxlcnRhcy5jYXJnYWRvRXJyb3IsIGVycm9yLCAzMDAwKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JlZ2FyQWRtaW5cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGlja09wZW4oKX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZ3JlZ2FyXCI+Kzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRvXCI+QWdyZWdhciBtYXJjYTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG1heFdpZHRoPVwieHNcIlxyXG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1heC13aWR0aC1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJtYXgtd2lkdGgtZGlhbG9nLXRpdGxlXCI+PGRpdiBjbGFzc05hbWU9XCJ0aXR1bG9BZ3JlZ2FyQWN0aXZpZGFkXCI+TnVldmEgTWFyY2E8L2Rpdj48L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtdWxhcmlvVW5pU3RlcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBub1ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGNsYXNzTmFtZT1cImlucHV0Zm9ybVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOb21icmUgaXRlbVwiIHZhbHVlPXtub21icmV9IG5hbWU9XCJzZXROb21icmVcIiBvbkNoYW5nZT17b25DaGFuZ2VOb21icmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHZhbHVlPXtyZXNlbmF9IG9uQ2hhbmdlPXtvbkNoYW5nZVJlc2VuYX0gaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiIHBsYWNlaG9sZGVyPVwiUmVzZcOxYVwiIG11bHRpbGluZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1cGxvYWQtcGhvdG9cIiBjbGFzc05hbWU9XCJpbnB1dGZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXBsb2FkLXBob3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVwbG9hZC1waG90b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0RmlsZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImFkZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJleHRlbmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2FsbHBhcGVySWNvbiAvPiA8c3Bhbj5Fc2NvZ2VyIGxvZ28gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZW5TcmN9IGFsdD1cIlwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dGZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q29sb3IgMTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yUGlja2VyIHZhbHVlPXtjb2xvclVub30gaWQ9XCJuZXdDYXRlZ29yeUNvbG91clwiIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbG9yVW5vfSBmb3JtYXQ9XCJoZXhcIiBtYXJnaW49XCJkZW5zZVwiIHNpemU9XCJzbWFsbFwiIGhpZGVUZXh0ZmllbGQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dGZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q29sb3IgMjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yUGlja2VyIHZhbHVlPXtjb2xvckRvc30gaWQ9XCJuZXdDYXRlZ29yeUNvbG91clwiIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbG9yRG9zfSBmb3JtYXQ9XCJoZXhcIiBtYXJnaW49XCJkZW5zZVwiIHNpemU9XCJzbWFsbFwiIGhpZGVUZXh0ZmllbGQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dGZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q29sb3IgMzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yUGlja2VyIHZhbHVlPXtjb2xvclRyZXN9IGlkPVwibmV3Q2F0ZWdvcnlDb2xvdXJcIiBvbkNoYW5nZT17b25DaGFuZ2VDb2xvclRyZXN9IGZvcm1hdD1cImhleFwiIG1hcmdpbj1cImRlbnNlXCIgc2l6ZT1cInNtYWxsXCIgaGlkZVRleHRmaWVsZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xpY2tDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENlcnJhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZ3JlZ2FyTWFyY2EiXSwic291cmNlUm9vdCI6IiJ9