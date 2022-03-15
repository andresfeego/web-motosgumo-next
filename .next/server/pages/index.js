(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./Components/AdminItems/AdminItems.js":
/*!*********************************************!*\
  !*** ./Components/AdminItems/AdminItems.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AdminItems_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AdminItems.module.scss */ "./Components/AdminItems/AdminItems.module.scss");
/* harmony import */ var _AdminItems_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AdminItems_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AgregarItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AgregarItem */ "./Components/AdminItems/AgregarItem.js");
/* harmony import */ var _Subitems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Subitems */ "./Components/AdminItems/Subitems.js");

var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\Components\\AdminItems\\AdminItems.js";






const AdminItems = () => {
  const {
    0: idItem,
    1: setIdItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("0");
  const {
    0: listaItems,
    1: setListaItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: subitems,
    1: setSubitems
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);

  function onChangeIdItem(e) {
    setIdItem(e.target.value);
  }

  const getItems = async () => {
    const resItems = await fetch("http://localhost:3020/responseMono" + '/items');
    const itemsJson = await resItems.json();
    setListaItems(itemsJson);
  };

  const getsubItems = async () => {
    const resSubitems = await fetch("http://localhost:3020/responseMono" + '/subitems/' + idItem);
    const subitemsJson = await resSubitems.json();
    setSubitems(subitemsJson);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    getsubItems();
  }, [idItem]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    getItems();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "containerVentana",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AgregarItem__WEBPACK_IMPORTED_MODULE_3__.default, {
      getItems: getItems
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_AdminItems_module_scss__WEBPACK_IMPORTED_MODULE_5___default().adminItems),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        noValidate: true,
        className: (_AdminItems_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Form),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
          className: (_AdminItems_module_scss__WEBPACK_IMPORTED_MODULE_5___default().inputForm),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.InputLabel, {
            htmlFor: "max-width",
            children: "Item"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Select, {
            className: "inputform",
            autoFocus: true,
            value: 0,
            onChange: onChangeIdItem,
            value: idItem,
            inputProps: {
              name: 'idItem',
              id: 'idItem'
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
              value: 0,
              children: "Seleccioneeeee el item"
            }, 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, undefined), listaItems.length > 0 ? listaItems.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
              value: item.id,
              children: item.nombre
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 79
            }, undefined)) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_AdminItems_module_scss__WEBPACK_IMPORTED_MODULE_5___default().adminSubItems),
        children: idItem > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Subitems__WEBPACK_IMPORTED_MODULE_4__.default, {
          subitems: subitems,
          getsubItems: getsubItems,
          idItem: idItem
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Selecciona un item"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, undefined);
};

async function getServerSideProps(ctx) {
  console.log("serversidepropsindex");
  var props = {
    props: {}
  };
  const resSlides = await fetch("http://localhost:3020/responseMono" + '/items');
  const slidesJson = await resSlides.json();
  props.props = {
    items: slidesJson
  };
  return props;
}
/* harmony default export */ __webpack_exports__["default"] = (AdminItems);

/***/ }),

/***/ "./Components/AdminItems/AgregarItem.js":
/*!**********************************************!*\
  !*** ./Components/AdminItems/AgregarItem.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Inicialized/Toast */ "./Components/Inicialized/Toast.js");

var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\Components\\AdminItems\\AgregarItem.js";






const superagent = __webpack_require__(/*! superagent */ "superagent");

const AgregarItem = props => {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: nombre,
    1: setNombre
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: descripcion,
    1: setDescripcion
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

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
    return new Promise((resolve, reject) => {
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
    return new Promise(async (resolve, reject) => {
      superagent.post("http://localhost:3020/responseMono" + '/crearItem').send({
        nombre: nombre,
        descripcion: descripcion
      }) // sends a JSON post body
      .set('X-API-Key', 'foobar').set('accept', 'json').end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async function onSubmit() {
    (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.tiposAlertas.cargando, "Creando Alumno");
    validarInfo().then(() => {
      guardar(nombre, descripcion).then(() => {
        (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.tiposAlertas.cargadoSuccess, "Registro exitoso");
        handleClickClose();
        props.getItems();
      }).catch(error => {
        (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.tiposAlertas.cargadoError, error, 3000);
      });
    }).catch(error => {
      (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.tiposAlertas.cargadoError, error, 3000);
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "agregarAdmin",
      onClick: () => handleClickOpen(),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "agregar",
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "texto",
        children: "Agregar item"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
      fullWidth: true,
      maxWidth: "xs",
      open: open,
      "aria-labelledby": "max-width-dialog-title",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
        id: "max-width-dialog-title",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "tituloAgregarActividad",
          children: "Nuevo Alumno"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 58
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "formularioUniStep",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            noValidate: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Input, {
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
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Input, {
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
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.DialogActions, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
          color: "primary",
          onClick: () => onSubmit(),
          children: "Guardar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
          color: "primary",
          onClick: handleClickClose,
          children: "Cerrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AgregarItem);

/***/ }),

/***/ "./Components/AdminItems/AgregarSubitem.js":
/*!*************************************************!*\
  !*** ./Components/AdminItems/AgregarSubitem.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AgregarSubitem_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AgregarSubitem.module.scss */ "./Components/AdminItems/AgregarSubitem.module.scss");
/* harmony import */ var _AgregarSubitem_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AgregarSubitem_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Inicialized/Toast */ "./Components/Inicialized/Toast.js");

var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\Components\\AdminItems\\AgregarSubitem.js";






const superagent = __webpack_require__(/*! superagent */ "superagent");

const AgregarSubitem = props => {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: valor,
    1: setValor
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: puntaje,
    1: setPuntaje
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

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
    return new Promise((resolve, reject) => {
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
    return new Promise((resolve, reject) => {
      superagent.post("http://localhost:3020/responseMono" + '/crearSubitem').send({
        valor: valor,
        puntaje: puntaje,
        idItem: idItem
      }) // sends a JSON post body
      .set('X-API-Key', 'foobar').set('accept', 'json').end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async function onSubmit() {
    (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.tiposAlertas.cargando, "Creando subitem");
    validarInfo().then(() => {
      guardar(valor, puntaje, props.idItem).then(() => {
        props.getsubItems();
        (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.tiposAlertas.cargadoSuccess, "Registro exitoso");
        handleClickClose();
      }).catch(error => {
        (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.tiposAlertas.cargadoError, error, 3000);
      });
    }).catch(error => {
      (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.tiposAlertas.cargadoError, error, 3000);
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_AgregarSubitem_module_scss__WEBPACK_IMPORTED_MODULE_4___default().agregarSubitem),
      onClick: () => handleClickOpen(),
      children: "Agregar subitem"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
      fullWidth: true,
      maxWidth: "xs",
      open: open,
      "aria-labelledby": "max-width-dialog-title",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
        id: "max-width-dialog-title",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "tituloAgregarActividad",
          children: "Nuevo subitem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 58
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "formularioUniStep",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            noValidate: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Input, {
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
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Input, {
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
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.DialogActions, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
          color: "primary",
          onClick: () => onSubmit(),
          children: "Guardar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
          color: "primary",
          onClick: handleClickClose,
          children: "Cerrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AgregarSubitem);

/***/ }),

/***/ "./Components/AdminItems/EditarSubitems.js":
/*!*************************************************!*\
  !*** ./Components/AdminItems/EditarSubitems.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EditarSubitems_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditarSubitems.module.scss */ "./Components/AdminItems/EditarSubitems.module.scss");
/* harmony import */ var _EditarSubitems_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_EditarSubitems_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Inicialized/Toast */ "./Components/Inicialized/Toast.js");

var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\Components\\AdminItems\\EditarSubitems.js";






const superagent = __webpack_require__(/*! superagent */ "superagent");

const EditarSubitems = props => {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: valor,
    1: setValor
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.subItem.valor);
  const {
    0: puntaje,
    1: setPuntaje
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.subItem.puntaje);

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
    return new Promise((resolve, reject) => {
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
    return new Promise((resolve, reject) => {
      superagent.post("http://localhost:3020/responseMono" + '/editarSubitem').send({
        id: id,
        valor: valor,
        puntaje: puntaje
      }) // sends a JSON post body
      .set('X-API-Key', 'foobar').set('accept', 'json').end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async function onSubmit() {
    (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.tiposAlertas.cargando, "Creando subitem");
    validarInfo().then(() => {
      guardar(props.subItem.id, valor, puntaje).then(() => {
        props.getsubItems();
        (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.tiposAlertas.cargadoSuccess, "Registro exitoso");
        handleClickClose();
      }).catch(error => {
        (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.tiposAlertas.cargadoError, error, 3000);
      });
    }).catch(error => {
      (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.tiposAlertas.cargadoError, error, 3000);
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_EditarSubitems_module_scss__WEBPACK_IMPORTED_MODULE_4___default().editarSubitem),
      onClick: () => handleClickOpen(),
      children: "Editar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
      fullWidth: true,
      maxWidth: "xs",
      open: open,
      "aria-labelledby": "max-width-dialog-title",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
        id: "max-width-dialog-title",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "tituloAgregarActividad",
          children: "Editar subitem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 58
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "formularioUniStep",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            noValidate: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Input, {
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
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Input, {
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
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.DialogActions, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
          color: "primary",
          onClick: () => onSubmit(),
          children: "Guardar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
          color: "primary",
          onClick: handleClickClose,
          children: "Cerrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EditarSubitems);

/***/ }),

/***/ "./Components/AdminItems/Subitems.js":
/*!*******************************************!*\
  !*** ./Components/AdminItems/Subitems.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AgregarSubitem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgregarSubitem */ "./Components/AdminItems/AgregarSubitem.js");
/* harmony import */ var _EditarSubitems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditarSubitems */ "./Components/AdminItems/EditarSubitems.js");
/* harmony import */ var _Subitem_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subitem.module.scss */ "./Components/AdminItems/Subitem.module.scss");
/* harmony import */ var _Subitem_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Subitem_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\Components\\AdminItems\\Subitems.js";




const Subitems = ({
  subitems,
  getsubItems,
  idItem
}) => {
  var puntTotal = 0;

  function renderSubitem(subitem) {
    puntTotal = puntTotal + subitem.puntaje;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Subitem_module_scss__WEBPACK_IMPORTED_MODULE_3___default().subitem),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_Subitem_module_scss__WEBPACK_IMPORTED_MODULE_3___default().valor),
        children: subitem.valor
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_Subitem_module_scss__WEBPACK_IMPORTED_MODULE_3___default().puntaje),
        children: subitem.puntaje
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditarSubitems__WEBPACK_IMPORTED_MODULE_2__.default, {
        getsubItems: getsubItems,
        subItem: subitem
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)]
    }, subitem.id, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this);
  }

  function renderListaSubitems(lista) {
    return lista.map(subitem => renderSubitem(subitem));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Subitem_module_scss__WEBPACK_IMPORTED_MODULE_3___default().subitems),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AgregarSubitem__WEBPACK_IMPORTED_MODULE_1__.default, {
      getsubItems: getsubItems,
      idItem: idItem
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined), subitems.length > 0 ? renderListaSubitems(subitems) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "Sin subitems"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Subitem_module_scss__WEBPACK_IMPORTED_MODULE_3___default().puntajeTotal),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: "Puntaje total: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: puntTotal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 49
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Subitems);

/***/ }),

/***/ "./Components/AdminMarcas/AdminMarcas.js":
/*!***********************************************!*\
  !*** ./Components/AdminMarcas/AdminMarcas.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AdminMarcas_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AdminMarcas.module.scss */ "./Components/AdminMarcas/AdminMarcas.module.scss");
/* harmony import */ var _AdminMarcas_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AdminMarcas_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AgregarMarca__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AgregarMarca */ "./Components/AdminMarcas/AgregarMarca.js");

var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\Components\\AdminMarcas\\AdminMarcas.js";





const AdminMarcas = () => {
  const {
    0: listaMarcas,
    1: setListaMarcas
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]); //https://stackoverflow.com/questions/11744975/enabling-https-on-express-js

  const getMarcas = async () => {
    const resMarcas = await fetch("http://localhost:3020/responseMono" + '/marcas');
    const marcasJson = await resMarcas.json();
    setListaMarcas(marcasJson);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    getMarcas();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "containerVentana",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AgregarMarca__WEBPACK_IMPORTED_MODULE_3__.default, {
      getMarcas: getMarcas
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_AdminMarcas_module_scss__WEBPACK_IMPORTED_MODULE_4___default().adminMarcas),
      children: listaMarcas.length
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AdminMarcas);

/***/ }),

/***/ "./Components/AdminMarcas/AgregarMarca.js":
/*!************************************************!*\
  !*** ./Components/AdminMarcas/AgregarMarca.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Inicialized/Toast */ "./Components/Inicialized/Toast.js");
/* harmony import */ var material_ui_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui-color */ "material-ui-color");
/* harmony import */ var material_ui_color__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_color__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Wallpaper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Wallpaper */ "@material-ui/icons/Wallpaper");
/* harmony import */ var _material_ui_icons_Wallpaper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Wallpaper__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\Components\\AdminMarcas\\AgregarMarca.js";






const superagent = __webpack_require__(/*! superagent */ "superagent");



const palette = ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'];

const AgregarMarca = props => {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: nombre,
    1: setNombre
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: resena,
    1: setResena
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: imagen,
    1: setImagen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: imagenSrc,
    1: setImagenSrc
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: colorUno,
    1: setColorUno
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,material_ui_color__WEBPACK_IMPORTED_MODULE_4__.createColor)('#000000'));
  const {
    0: colorDos,
    1: setColorDos
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,material_ui_color__WEBPACK_IMPORTED_MODULE_4__.createColor)('#000000'));
  const {
    0: colorTres,
    1: setColorTres
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,material_ui_color__WEBPACK_IMPORTED_MODULE_4__.createColor)('#000000'));

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
    setColorUno((0,material_ui_color__WEBPACK_IMPORTED_MODULE_4__.createColor)('#000000'));
    setColorDos((0,material_ui_color__WEBPACK_IMPORTED_MODULE_4__.createColor)('#000000'));
    setColorTres((0,material_ui_color__WEBPACK_IMPORTED_MODULE_4__.createColor)('#000000'));
    setImagen(null);
    setImagenSrc("");
  }

  ;

  function onSelectFileImage(e) {
    if (e.target.files[0]) {
      var file = e.target.files[0];

      if (file.type == "image/jpg" || file.type == "image/jpeg" || file.type == "image/png") {
        setImagen(file);
        const reader = new FileReader();
        reader.addEventListener('load', () => setImagenSrc(reader.result));
        reader.readAsDataURL(file);
      } else {
        (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.tiposAlertas.error, "Solo se permite cargar imagenes - .jpg .png .jpeg -");
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
    return new Promise((resolve, reject) => {
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
    return new Promise((resolve, reject) => {
      superagent.post("http://localhost:3020/responseMono" + '/uploadLogoMarca/' + nombre).attach('image', imagen).set('accept', 'json').end((err, res) => {
        if (err) {
          console.log(err);
          reject("Error al guardar información");
        } else {
          const respuestaLogin = JSON.parse(res.text);
          resolve(respuestaLogin.imagen.filename);
        }
      });
    });
  }

  function guardar() {
    return new Promise(async (resolve, reject) => {
      guardarImagen().then(url => {
        superagent.post("http://localhost:3020/responseMono" + '/crearMarca').send({
          nombre: nombre,
          resena: resena,
          urlLogo: url,
          colorUno: colorUno.hex,
          colorDos: colorDos.hex,
          colorTres: colorTres.hex
        }) // sends a JSON post body
        .set('X-API-Key', 'foobar').set('accept', 'json').end((err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }).catch(error => {
        reject(error);
      });
    });
  }

  async function onSubmit() {
    (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.tiposAlertas.cargando, "Creando marca");
    validarInfo().then(() => {
      guardar().then(() => {
        (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.tiposAlertas.cargadoSuccess, "Registro exitoso");
        handleClickClose();
        props.getMarcas();
      }).catch(error => {
        (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.tiposAlertas.cargadoError, error, 3000);
      });
    }).catch(error => {
      (0,_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.nuevoMensaje)(_Inicialized_Toast__WEBPACK_IMPORTED_MODULE_3__.tiposAlertas.cargadoError, error, 3000);
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "agregarAdmin",
      onClick: () => handleClickOpen(),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "agregar",
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "texto",
        children: "Agregar marca"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
      fullWidth: true,
      maxWidth: "xs",
      open: open,
      "aria-labelledby": "max-width-dialog-title",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
        id: "max-width-dialog-title",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "tituloAgregarActividad",
          children: "Nueva Marca"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 58
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "formularioUniStep",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            noValidate: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Input, {
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
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TextField, {
              value: resena,
              onChange: onChangeResena,
              id: "standard-textarea",
              placeholder: "Rese\xF1a",
              multiline: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
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
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Fab, {
                color: "secondary",
                size: "small",
                component: "span",
                "aria-label": "add",
                variant: "extended",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Wallpaper__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 37
                }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: "Escoger logo "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 55
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: imagenSrc,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "inputform",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "Color 1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(material_ui_color__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
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
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "inputform",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "Color 2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(material_ui_color__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
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
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "inputform",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "Color 3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(material_ui_color__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
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
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.DialogActions, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
          color: "primary",
          onClick: onSubmit,
          children: "Guardar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
          color: "primary",
          onClick: handleClickClose,
          children: "Cerrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 192,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AgregarMarca);

/***/ }),

/***/ "./Components/Inicialized/Toast.js":
/*!*****************************************!*\
  !*** ./Components/Inicialized/Toast.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tiposAlertas": function() { return /* binding */ tiposAlertas; },
/* harmony export */   "nuevoMensaje": function() { return /* binding */ nuevoMensaje; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/InfoOutlined */ "@material-ui/icons/InfoOutlined");
/* harmony import */ var _material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/CheckOutlined */ "@material-ui/icons/CheckOutlined");
/* harmony import */ var _material_ui_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ReportProblemOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ReportProblemOutlined */ "@material-ui/icons/ReportProblemOutlined");
/* harmony import */ var _material_ui_icons_ReportProblemOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ReportProblemOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_HighlightOffOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/HighlightOffOutlined */ "@material-ui/icons/HighlightOffOutlined");
/* harmony import */ var _material_ui_icons_HighlightOffOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HighlightOffOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spinners/BounceLoader */ "react-spinners/BounceLoader");
/* harmony import */ var react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/CloseOutlined */ "@material-ui/icons/CloseOutlined");
/* harmony import */ var _material_ui_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\Components\\Inicialized\\Toast.js";








let cargando = null;
const tiposAlertas = {
  info: 1,
  success: 2,
  warn: 3,
  error: 4,
  autoCloseCustom: 5,
  cargando: 6,
  cargadoSuccess: 7,
  cargadoWarn: 8,
  cargadoError: 9,
  cerrarTodas: 10
};
const nuevoMensaje = (icono, mensaje, auto) => {
  const override = `
  display: flex;
  margin-right: 5px;
  border-color: red;
  flex-direction: row;
`;

  switch (icono) {
    case 1:
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.info( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {
          style: {
            marginRight: '5px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, undefined), mensaje]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined), {
        autoClose: auto
      });
      break;

    case 2:
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {
          style: {
            marginRight: '5px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, undefined), mensaje]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined), {
        autoClose: auto
      });
      break;

    case 3:
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.warn( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_ReportProblemOutlined__WEBPACK_IMPORTED_MODULE_5___default()), {
          style: {
            marginRight: '5px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, undefined), mensaje]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined), {
        autoClose: auto
      });
      break;

    case 4:
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_HighlightOffOutlined__WEBPACK_IMPORTED_MODULE_6___default()), {
          style: {
            marginRight: '5px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, undefined), mensaje]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, undefined), {
        autoClose: auto
      });
      break;

    case 5:
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {
          style: {
            marginRight: '5px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, undefined), mensaje]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, undefined), {
        autoClose: auto
      });
      break;

    case 6:
      cargando = react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.warn( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_7___default()), {
          css: override,
          size: 20,
          color: "#fff"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, undefined), mensaje]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, undefined), {
        autoClose: false
      });
      break;

    case 7:
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.update(cargando, {
        render: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {
            style: {
              marginRight: '5px'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, undefined), mensaje]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, undefined),
        type: react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.TYPE.SUCCESS,
        autoClose: auto
      });
      break;

    case 8:
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.update(cargando, {
        render: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_ReportProblemOutlined__WEBPACK_IMPORTED_MODULE_5___default()), {
            style: {
              marginRight: '5px'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, undefined), mensaje]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, undefined),
        type: react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.TYPE.WARNING,
        autoClose: auto
      });
      break;

    case 9:
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.update(cargando, {
        render: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_HighlightOffOutlined__WEBPACK_IMPORTED_MODULE_6___default()), {
            style: {
              marginRight: '5px'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }, undefined), mensaje]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, undefined),
        type: react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.TYPE.ERROR,
        autoClose: auto
      });
      break;

    case 10:
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_8___default()), {
          style: {
            marginRight: '5px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 17
        }, undefined), mensaje]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }, undefined), {
        onClose: props => react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.dismiss(),
        autoClose: auto
      });
      break;

    default:
      break;
  }
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Index.module.scss */ "./pages/Index.module.scss");
/* harmony import */ var _Index_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Index_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Motorcycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Motorcycle */ "@material-ui/icons/Motorcycle");
/* harmony import */ var _material_ui_icons_Motorcycle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Motorcycle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/List */ "@material-ui/icons/List");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/VerifiedUser */ "@material-ui/icons/VerifiedUser");
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ChatBubble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ChatBubble */ "@material-ui/icons/ChatBubble");
/* harmony import */ var _material_ui_icons_ChatBubble__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChatBubble__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_AdminItems_AdminItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/AdminItems/AdminItems */ "./Components/AdminItems/AdminItems.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_AdminMarcas_AdminMarcas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/AdminMarcas/AdminMarcas */ "./Components/AdminMarcas/AdminMarcas.js");

var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\pages\\index.js";









const Index = () => {
  const {
    0: menuStatus,
    1: setMenuStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("0");

  function renderContenido() {
    switch (menuStatus) {
      case 1:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_AdminMarcas_AdminMarcas__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 24
        }, this);
        break;

      case 4:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_AdminItems_AdminItems__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
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
    className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().contenedor),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().arriba),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        alt: "",
        src: __webpack_require__(/*! ../scrAppServer/images/logo_mono.png */ "./scrAppServer/images/logo_mono.png"),
        className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().logo)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().abajo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().menu),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().menuItem),
          onClick: () => setMenuStatus(1),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().iconMenuItem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Marcas"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().menuItem),
          onClick: () => setMenuStatus(2),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().iconMenuItem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Motorcycle__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Motos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().menuItem),
          onClick: () => setMenuStatus(3),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().iconMenuItem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_ChatBubble__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Comentarios"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().menuItem),
          onClick: () => setMenuStatus(4),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().iconMenuItem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Items"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().contenido),
        children: renderContenido()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./Components/AdminItems/AdminItems.module.scss":
/*!******************************************************!*\
  !*** ./Components/AdminItems/AdminItems.module.scss ***!
  \******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"adminItems": "AdminItems_adminItems__1WbYW",
	"Form": "AdminItems_Form__1DEDg",
	"inputForm": "AdminItems_inputForm__3-q5q",
	"adminSubItems": "AdminItems_adminSubItems__2T4kd"
};


/***/ }),

/***/ "./Components/AdminItems/AgregarSubitem.module.scss":
/*!**********************************************************!*\
  !*** ./Components/AdminItems/AgregarSubitem.module.scss ***!
  \**********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"agregarSubitem": "AgregarSubitem_agregarSubitem__1wkjp"
};


/***/ }),

/***/ "./Components/AdminItems/EditarSubitems.module.scss":
/*!**********************************************************!*\
  !*** ./Components/AdminItems/EditarSubitems.module.scss ***!
  \**********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"editarSubitem": "EditarSubitems_editarSubitem__17SvZ"
};


/***/ }),

/***/ "./Components/AdminItems/Subitem.module.scss":
/*!***************************************************!*\
  !*** ./Components/AdminItems/Subitem.module.scss ***!
  \***************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"subitems": "Subitem_subitems__1-8ar",
	"subitem": "Subitem_subitem__BdMjO",
	"valor": "Subitem_valor__2fJXL",
	"puntaje": "Subitem_puntaje__-n1uf",
	"puntajeTotal": "Subitem_puntajeTotal__1N1io"
};


/***/ }),

/***/ "./Components/AdminMarcas/AdminMarcas.module.scss":
/*!********************************************************!*\
  !*** ./Components/AdminMarcas/AdminMarcas.module.scss ***!
  \********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"adminMarcas": "AdminMarcas_adminMarcas__Iwzuh",
	"Form": "AdminMarcas_Form__Vu8S0",
	"inputForm": "AdminMarcas_inputForm__3CCI-",
	"adminSubItems": "AdminMarcas_adminSubItems__nHpIi"
};


/***/ }),

/***/ "./pages/Index.module.scss":
/*!*********************************!*\
  !*** ./pages/Index.module.scss ***!
  \*********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"contenedor": "Index_contenedor__25AcN",
	"arriba": "Index_arriba__oGWtk",
	"abajo": "Index_abajo__dm8qb",
	"menu": "Index_menu__1Id6h",
	"logo": "Index_logo__mW9Ug",
	"contenido": "Index_contenido__3L7jh",
	"menuItem": "Index_menuItem__3CzYa",
	"iconMenuItem": "Index_iconMenuItem__3aLjR"
};


/***/ }),

/***/ "./scrAppServer/images/logo_mono.png":
/*!*******************************************!*\
  !*** ./scrAppServer/images/logo_mono.png ***!
  \*******************************************/
/***/ (function(module) {

module.exports = "/_next/static/images/logo_mono-e9856586988e92eca73a9742d988cc7b.png";

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/icons/ChatBubble":
/*!************************************************!*\
  !*** external "@material-ui/icons/ChatBubble" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/ChatBubble");;

/***/ }),

/***/ "@material-ui/icons/CheckOutlined":
/*!***************************************************!*\
  !*** external "@material-ui/icons/CheckOutlined" ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/CheckOutlined");;

/***/ }),

/***/ "@material-ui/icons/CloseOutlined":
/*!***************************************************!*\
  !*** external "@material-ui/icons/CloseOutlined" ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/CloseOutlined");;

/***/ }),

/***/ "@material-ui/icons/HighlightOffOutlined":
/*!**********************************************************!*\
  !*** external "@material-ui/icons/HighlightOffOutlined" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/HighlightOffOutlined");;

/***/ }),

/***/ "@material-ui/icons/InfoOutlined":
/*!**************************************************!*\
  !*** external "@material-ui/icons/InfoOutlined" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/InfoOutlined");;

/***/ }),

/***/ "@material-ui/icons/List":
/*!******************************************!*\
  !*** external "@material-ui/icons/List" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/List");;

/***/ }),

/***/ "@material-ui/icons/Motorcycle":
/*!************************************************!*\
  !*** external "@material-ui/icons/Motorcycle" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Motorcycle");;

/***/ }),

/***/ "@material-ui/icons/ReportProblemOutlined":
/*!***********************************************************!*\
  !*** external "@material-ui/icons/ReportProblemOutlined" ***!
  \***********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/ReportProblemOutlined");;

/***/ }),

/***/ "@material-ui/icons/VerifiedUser":
/*!**************************************************!*\
  !*** external "@material-ui/icons/VerifiedUser" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/VerifiedUser");;

/***/ }),

/***/ "@material-ui/icons/Wallpaper":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Wallpaper" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Wallpaper");;

/***/ }),

/***/ "material-ui-color":
/*!************************************!*\
  !*** external "material-ui-color" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("material-ui-color");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-spinners/BounceLoader":
/*!**********************************************!*\
  !*** external "react-spinners/BounceLoader" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-spinners/BounceLoader");;

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

/***/ "superagent":
/*!*****************************!*\
  !*** external "superagent" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("superagent");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJNb25vLy4vQ29tcG9uZW50cy9BZG1pbkl0ZW1zL0FkbWluSXRlbXMuanMiLCJ3ZWJwYWNrOi8vV2ViTW9uby8uL0NvbXBvbmVudHMvQWRtaW5JdGVtcy9BZ3JlZ2FySXRlbS5qcyIsIndlYnBhY2s6Ly9XZWJNb25vLy4vQ29tcG9uZW50cy9BZG1pbkl0ZW1zL0FncmVnYXJTdWJpdGVtLmpzIiwid2VicGFjazovL1dlYk1vbm8vLi9Db21wb25lbnRzL0FkbWluSXRlbXMvRWRpdGFyU3ViaXRlbXMuanMiLCJ3ZWJwYWNrOi8vV2ViTW9uby8uL0NvbXBvbmVudHMvQWRtaW5JdGVtcy9TdWJpdGVtcy5qcyIsIndlYnBhY2s6Ly9XZWJNb25vLy4vQ29tcG9uZW50cy9BZG1pbk1hcmNhcy9BZG1pbk1hcmNhcy5qcyIsIndlYnBhY2s6Ly9XZWJNb25vLy4vQ29tcG9uZW50cy9BZG1pbk1hcmNhcy9BZ3JlZ2FyTWFyY2EuanMiLCJ3ZWJwYWNrOi8vV2ViTW9uby8uL0NvbXBvbmVudHMvSW5pY2lhbGl6ZWQvVG9hc3QuanMiLCJ3ZWJwYWNrOi8vV2ViTW9uby8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL1dlYk1vbm8vLi9Db21wb25lbnRzL0FkbWluSXRlbXMvQWRtaW5JdGVtcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9XZWJNb25vLy4vQ29tcG9uZW50cy9BZG1pbkl0ZW1zL0FncmVnYXJTdWJpdGVtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL1dlYk1vbm8vLi9Db21wb25lbnRzL0FkbWluSXRlbXMvRWRpdGFyU3ViaXRlbXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vV2ViTW9uby8uL0NvbXBvbmVudHMvQWRtaW5JdGVtcy9TdWJpdGVtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL1dlYk1vbm8vLi9Db21wb25lbnRzL0FkbWluTWFyY2FzL0FkbWluTWFyY2FzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL1dlYk1vbm8vLi9wYWdlcy9JbmRleC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9XZWJNb25vLy4vc2NyQXBwU2VydmVyL2ltYWdlcy9sb2dvX21vbm8ucG5nIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdEJ1YmJsZVwiIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tPdXRsaW5lZFwiIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VPdXRsaW5lZFwiIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSGlnaGxpZ2h0T2ZmT3V0bGluZWRcIiIsIndlYnBhY2s6Ly9XZWJNb25vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luZm9PdXRsaW5lZFwiIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdFwiIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW90b3JjeWNsZVwiIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwb3J0UHJvYmxlbU91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vV2ViTW9uby9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9WZXJpZmllZFVzZXJcIiIsIndlYnBhY2s6Ly9XZWJNb25vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1dhbGxwYXBlclwiIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJtYXRlcmlhbC11aS1jb2xvclwiIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJyZWFjdC1zcGlubmVycy9Cb3VuY2VMb2FkZXJcIiIsIndlYnBhY2s6Ly9XZWJNb25vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly9XZWJNb25vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vV2ViTW9uby9leHRlcm5hbCBcInN1cGVyYWdlbnRcIiJdLCJuYW1lcyI6WyJBZG1pbkl0ZW1zIiwiaWRJdGVtIiwic2V0SWRJdGVtIiwidXNlU3RhdGUiLCJsaXN0YUl0ZW1zIiwic2V0TGlzdGFJdGVtcyIsInN1Yml0ZW1zIiwic2V0U3ViaXRlbXMiLCJvbkNoYW5nZUlkSXRlbSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldEl0ZW1zIiwicmVzSXRlbXMiLCJmZXRjaCIsInByb2Nlc3MiLCJpdGVtc0pzb24iLCJqc29uIiwiZ2V0c3ViSXRlbXMiLCJyZXNTdWJpdGVtcyIsInN1Yml0ZW1zSnNvbiIsInVzZUVmZmVjdCIsInN0eWxlcyIsIm5hbWUiLCJpZCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJub21icmUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJyZXNTbGlkZXMiLCJzbGlkZXNKc29uIiwiaXRlbXMiLCJzdXBlcmFnZW50IiwicmVxdWlyZSIsIkFncmVnYXJJdGVtIiwib3BlbiIsInNldE9wZW4iLCJzZXROb21icmUiLCJkZXNjcmlwY2lvbiIsInNldERlc2NyaXBjaW9uIiwib25DaGFuZ2VOb21icmUiLCJvbkNoYW5nZURlc2NyaXBjaW9uIiwiaGFuZGxlQ2xpY2tPcGVuIiwiaGFuZGxlQ2xpY2tDbG9zZSIsInZhbGlkYXJJbmZvIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJndWFyZGFyIiwicG9zdCIsInNlbmQiLCJzZXQiLCJlbmQiLCJlcnIiLCJyZXMiLCJvblN1Ym1pdCIsIm51ZXZvTWVuc2FqZSIsInRpcG9zQWxlcnRhcyIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwiQWdyZWdhclN1Yml0ZW0iLCJ2YWxvciIsInNldFZhbG9yIiwicHVudGFqZSIsInNldFB1bnRhamUiLCJvbkNoYW5nZVZhbG9yIiwib25DaGFuZ2VQdW50YWplIiwiZXhwciIsInRlc3QiLCJFZGl0YXJTdWJpdGVtcyIsInN1Ykl0ZW0iLCJTdWJpdGVtcyIsInB1bnRUb3RhbCIsInJlbmRlclN1Yml0ZW0iLCJzdWJpdGVtIiwicmVuZGVyTGlzdGFTdWJpdGVtcyIsImxpc3RhIiwiQWRtaW5NYXJjYXMiLCJsaXN0YU1hcmNhcyIsInNldExpc3RhTWFyY2FzIiwiZ2V0TWFyY2FzIiwicmVzTWFyY2FzIiwibWFyY2FzSnNvbiIsInBhbGV0dGUiLCJBZ3JlZ2FyTWFyY2EiLCJyZXNlbmEiLCJzZXRSZXNlbmEiLCJpbWFnZW4iLCJzZXRJbWFnZW4iLCJpbWFnZW5TcmMiLCJzZXRJbWFnZW5TcmMiLCJjb2xvclVubyIsInNldENvbG9yVW5vIiwiY3JlYXRlQ29sb3IiLCJjb2xvckRvcyIsInNldENvbG9yRG9zIiwiY29sb3JUcmVzIiwic2V0Q29sb3JUcmVzIiwib25DaGFuZ2VSZXNlbmEiLCJvbkNoYW5nZUNvbG9yVW5vIiwiY29sb3IiLCJvbkNoYW5nZUNvbG9yRG9zIiwib25DaGFuZ2VDb2xvclRyZXMiLCJvblNlbGVjdEZpbGVJbWFnZSIsImZpbGVzIiwiZmlsZSIsInR5cGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJpc1ZhbGlkQ29sb3IiLCJpc0NvbG9yIiwibWF0Y2giLCJoZXgiLCJndWFyZGFySW1hZ2VuIiwiYXR0YWNoIiwicmVzcHVlc3RhTG9naW4iLCJKU09OIiwicGFyc2UiLCJ0ZXh0IiwiZmlsZW5hbWUiLCJ1cmwiLCJ1cmxMb2dvIiwiZGlzcGxheSIsImNhcmdhbmRvIiwiaW5mbyIsInN1Y2Nlc3MiLCJ3YXJuIiwiYXV0b0Nsb3NlQ3VzdG9tIiwiY2FyZ2Fkb1N1Y2Nlc3MiLCJjYXJnYWRvV2FybiIsImNhcmdhZG9FcnJvciIsImNlcnJhclRvZGFzIiwiaWNvbm8iLCJtZW5zYWplIiwiYXV0byIsIm92ZXJyaWRlIiwidG9hc3QiLCJtYXJnaW5SaWdodCIsImF1dG9DbG9zZSIsInJlbmRlciIsIm9uQ2xvc2UiLCJJbmRleCIsIm1lbnVTdGF0dXMiLCJzZXRNZW51U3RhdHVzIiwicmVuZGVyQ29udGVuaWRvIiwibG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQU1BLE1BQU1BLFVBQVUsR0FBRyxNQUFNO0FBQ3JCLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJKLCtDQUFRLENBQUMsRUFBRCxDQUF4Qzs7QUFFQSxXQUFTSyxjQUFULENBQXdCQyxDQUF4QixFQUEyQjtBQUN2QlAsYUFBUyxDQUFDTyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQ0g7O0FBSUQsUUFBTUMsUUFBUSxHQUFHLFlBQVk7QUFDekIsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0Msb0NBQUEsR0FBd0IsUUFBekIsQ0FBNUI7QUFDQSxVQUFNQyxTQUFTLEdBQUcsTUFBTUgsUUFBUSxDQUFDSSxJQUFULEVBQXhCO0FBQ0FaLGlCQUFhLENBQUNXLFNBQUQsQ0FBYjtBQUNILEdBSkQ7O0FBTUEsUUFBTUUsV0FBVyxHQUFHLFlBQVk7QUFDNUIsVUFBTUMsV0FBVyxHQUFHLE1BQU1MLEtBQUssQ0FBQ0Msb0NBQUEsR0FBd0IsWUFBeEIsR0FBdUNkLE1BQXhDLENBQS9CO0FBQ0EsVUFBTW1CLFlBQVksR0FBRyxNQUFNRCxXQUFXLENBQUNGLElB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QUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBa0NJO0FBQUssaUJBQVMsRUFBRUEscUVBQWhCO0FBQUEsa0JBQ0ttSSxlQUFlO0FBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWlESCxDQXhFRDs7QUEwRUEsK0RBQWVILEtBQWYsRTs7Ozs7Ozs7OztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkEsdUY7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIERpYWxvZywgRGlhbG9nQWN0aW9ucywgRGlhbG9nQ29udGVudCwgRGlhbG9nVGl0bGUsIEZvcm1Db250cm9sLCBJbnB1dCwgSW5wdXRMYWJlbCwgTWVudUl0ZW0sIFNlbGVjdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FkbWluSXRlbXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQWdyZWdhckl0ZW0gZnJvbSAnLi9BZ3JlZ2FySXRlbSc7XHJcbmltcG9ydCBTdWJpdGVtcyBmcm9tICcuL1N1Yml0ZW1zJ1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEFkbWluSXRlbXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaWRJdGVtLCBzZXRJZEl0ZW1dID0gdXNlU3RhdGUoXCIwXCIpXHJcbiAgICBjb25zdCBbbGlzdGFJdGVtcywgc2V0TGlzdGFJdGVtc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtzdWJpdGVtcywgc2V0U3ViaXRlbXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VJZEl0ZW0oZSkge1xyXG4gICAgICAgIHNldElkSXRlbShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGdldEl0ZW1zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc0l0ZW1zID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuSE9TVF9OQU1FICsgJy9pdGVtcycpXHJcbiAgICAgICAgY29uc3QgaXRlbXNKc29uID0gYXdhaXQgcmVzSXRlbXMuanNvbigpXHJcbiAgICAgICAgc2V0TGlzdGFJdGVtcyhpdGVtc0pzb24pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0c3ViSXRlbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzU3ViaXRlbXMgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5IT1NUX05BTUUgKyAnL3N1Yml0ZW1zLycgKyBpZEl0ZW0pXHJcbiAgICAgICAgY29uc3Qgc3ViaXRlbXNKc29uID0gYXdhaXQgcmVzU3ViaXRlbXMuanNvbigpXHJcbiAgICAgICAgc2V0U3ViaXRlbXMoc3ViaXRlbXNKc29uKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0c3ViSXRlbXMoKVxyXG4gICAgfSwgW2lkSXRlbV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRJdGVtcygpXHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclZlbnRhbmFcIj5cclxuICAgICAgICAgICAgPEFncmVnYXJJdGVtIGdldEl0ZW1zPXtnZXRJdGVtc30gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZG1pbkl0ZW1zfT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG5vVmFsaWRhdGUgY2xhc3NOYW1lPXtzdHlsZXMuRm9ybX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZvcm19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cIm1heC13aWR0aFwiPkl0ZW08L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPVwiaW5wdXRmb3JtXCIgYXV0b0ZvY3VzIHZhbHVlPXswfSBvbkNoYW5nZT17b25DaGFuZ2VJZEl0ZW19IHZhbHVlPXtpZEl0ZW19IGlucHV0UHJvcHM9e3sgbmFtZTogJ2lkSXRlbScsIGlkOiAnaWRJdGVtJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXswfSB2YWx1ZT17MH0+U2VsZWNjaW9uZWVlZWUgZWwgaXRlbTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdGFJdGVtcy5sZW5ndGggPiAwID8gbGlzdGFJdGVtcy5tYXAoKGl0ZW0pID0+IDxNZW51SXRlbSBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpdGVtLmlkfT57aXRlbS5ub21icmV9PC9NZW51SXRlbT4pIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZG1pblN1Ykl0ZW1zfT5cclxuICAgICAgICAgICAgICAgICAgICB7aWRJdGVtID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJpdGVtcyBzdWJpdGVtcz17c3ViaXRlbXN9IGdldHN1Ykl0ZW1zPXtnZXRzdWJJdGVtc30gaWRJdGVtPXtpZEl0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2VsZWNjaW9uYSB1biBpdGVtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xyXG4gICAgY29uc29sZS5sb2coXCJzZXJ2ZXJzaWRlcHJvcHNpbmRleFwiKVxyXG4gICAgdmFyIHByb3BzID0geyBwcm9wczoge30gfVxyXG5cclxuICAgIGNvbnN0IHJlc1NsaWRlcyA9IGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkhPU1RfTkFNRSArICcvaXRlbXMnKVxyXG4gICAgY29uc3Qgc2xpZGVzSnNvbiA9IGF3YWl0IHJlc1NsaWRlcy5qc29uKClcclxuICAgIHByb3BzLnByb3BzID0geyBpdGVtczogc2xpZGVzSnNvbiB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gcHJvcHNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5JdGVtcyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BZ3JlZ2FySXRlbS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIERpYWxvZywgRGlhbG9nQWN0aW9ucywgRGlhbG9nQ29udGVudCwgRGlhbG9nVGl0bGUsIEZvcm1Db250cm9sLCBJbnB1dCwgSW5wdXRMYWJlbCwgTWVudUl0ZW0sIFNlbGVjdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBudWV2b01lbnNhamUsICB0aXBvc0FsZXJ0YXMgfSBmcm9tICcuLi9JbmljaWFsaXplZC9Ub2FzdCdcclxuY29uc3Qgc3VwZXJhZ2VudCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKTtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEFncmVnYXJJdGVtID0gKHByb3BzKSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW25vbWJyZSwgc2V0Tm9tYnJlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbZGVzY3JpcGNpb24sIHNldERlc2NyaXBjaW9uXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlTm9tYnJlKGUpIHtcclxuICAgICAgICBzZXROb21icmUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZURlc2NyaXBjaW9uKGUpIHtcclxuICAgICAgICBzZXREZXNjcmlwY2lvbihlLnRhcmdldC52YWx1ZSlcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPcGVuKCkge1xyXG4gICAgICAgIHNldE9wZW4odHJ1ZSlcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tDbG9zZSgpIHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKVxyXG4gICAgICAgIHNldE5vbWJyZShcIlwiKVxyXG4gICAgICAgIHNldERlc2NyaXBjaW9uKFwiXCIpXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub21icmUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTm8gaGFzIGluZ3Jlc2FkbyB1biBub21icmVcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwY2lvbiA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiTm8gaGFzIGluZ3Jlc2FkbyB1bmEgZGVzY3JpcGNpb24gcGFyYSBlbCBpdGVtXCIpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBndWFyZGFyKG5vbWJyZSwgZGVzY3JpcGNpb24pIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHN1cGVyYWdlbnRcclxuICAgICAgICAgICAgICAgIC5wb3N0KHByb2Nlc3MuZW52LkhPU1RfTkFNRSArICcvY3JlYXJJdGVtJylcclxuICAgICAgICAgICAgICAgIC5zZW5kKHsgbm9tYnJlOiBub21icmUsIGRlc2NyaXBjaW9uOiBkZXNjcmlwY2lvbiB9KSAvLyBzZW5kcyBhIEpTT04gcG9zdCBib2R5XHJcbiAgICAgICAgICAgICAgICAuc2V0KCdYLUFQSS1LZXknLCAnZm9vYmFyJylcclxuICAgICAgICAgICAgICAgIC5zZXQoJ2FjY2VwdCcsICdqc29uJylcclxuICAgICAgICAgICAgICAgIC5lbmQoKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKSAgICBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdCgpIHtcclxuICAgICAgICBudWV2b01lbnNhamUodGlwb3NBbGVydGFzLmNhcmdhbmRvLCBcIkNyZWFuZG8gQWx1bW5vXCIpXHJcbiAgICAgICAgdmFsaWRhckluZm8oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZ3VhcmRhcihub21icmUsIGRlc2NyaXBjaW9uKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb1N1Y2Nlc3MsIFwiUmVnaXN0cm8gZXhpdG9zb1wiKVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2tDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5nZXRJdGVtcygpXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb0Vycm9yLCBlcnJvciwgMzAwMClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb0Vycm9yLCBlcnJvciwgMzAwMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyZWdhckFkbWluXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tPcGVuKCl9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyZWdhclwiPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0b1wiPkFncmVnYXIgaXRlbTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG1heFdpZHRoPVwieHNcIlxyXG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1heC13aWR0aC1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJtYXgtd2lkdGgtZGlhbG9nLXRpdGxlXCI+PGRpdiBjbGFzc05hbWU9XCJ0aXR1bG9BZ3JlZ2FyQWN0aXZpZGFkXCI+TnVldm8gQWx1bW5vPC9kaXY+PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybXVsYXJpb1VuaVN0ZXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBjbGFzc05hbWU9XCJpbnB1dGZvcm1cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTm9tYnJlIGl0ZW1cIiB2YWx1ZT17bm9tYnJlfSBuYW1lPVwic2V0Tm9tYnJlXCIgb25DaGFuZ2U9e29uQ2hhbmdlTm9tYnJlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGNsYXNzTmFtZT1cImlucHV0Zm9ybVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwY2nDs25cIiB2YWx1ZT17ZGVzY3JpcGNpb259IG5hbWU9XCJzZXREZXNjcmlwY2lvblwiIG9uQ2hhbmdlPXtvbkNoYW5nZURlc2NyaXBjaW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBvblN1Ym1pdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR3VhcmRhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDZXJyYXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWdyZWdhckl0ZW0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQWdyZWdhclN1Yml0ZW0ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBEaWFsb2csIERpYWxvZ0FjdGlvbnMsIERpYWxvZ0NvbnRlbnQsIERpYWxvZ1RpdGxlLCBGb3JtQ29udHJvbCwgSW5wdXQsIElucHV0TGFiZWwsIE1lbnVJdGVtLCBTZWxlY3QgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbnVldm9NZW5zYWplLCAgdGlwb3NBbGVydGFzIH0gZnJvbSAnLi4vSW5pY2lhbGl6ZWQvVG9hc3QnXHJcbmNvbnN0IHN1cGVyYWdlbnQgPSByZXF1aXJlKCdzdXBlcmFnZW50Jyk7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBBZ3JlZ2FyU3ViaXRlbSA9IChwcm9wcykgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt2YWxvciwgc2V0VmFsb3JdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtwdW50YWplLCBzZXRQdW50YWplXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlVmFsb3IoZSkge1xyXG4gICAgICAgIHNldFZhbG9yKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VQdW50YWplKGUpIHtcclxuICAgICAgICBzZXRQdW50YWplKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGlja09wZW4oKSB7XHJcbiAgICAgICAgc2V0T3Blbih0cnVlKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGlja0Nsb3NlKCkge1xyXG4gICAgICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgICAgICAgc2V0VmFsb3IoXCJcIilcclxuICAgICAgICBzZXRQdW50YWplKFwiXCIpXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWxvciA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJObyBoYXMgaW5ncmVzYWRvIHVuIHZhbG9yXCIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHVudGFqZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiTm8gaGFzIGluZ3Jlc2FkbyB1biBwdW50YWplIHBhcmEgZWwgaXRlbVwiKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXhwciA9IC9eWzAtOV0rKFsuXVswLTldKyk/JC87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhwci50ZXN0KHB1bnRhamUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcIkVsIHB1bnRhamUgZGViZSBjb250ZW5lciBzb2xvcyBudW1lcm9zIGVuIGZvcm1hdG8gMjUsMjVcIilcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGd1YXJkYXIodmFsb3IsIHB1bnRhamUsIGlkSXRlbSkge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgc3VwZXJhZ2VudFxyXG4gICAgICAgICAgICAgICAgLnBvc3QocHJvY2Vzcy5lbnYuSE9TVF9OQU1FICsgJy9jcmVhclN1Yml0ZW0nKVxyXG4gICAgICAgICAgICAgICAgLnNlbmQoeyB2YWxvcjogdmFsb3IsIHB1bnRhamU6IHB1bnRhamUsIGlkSXRlbTogaWRJdGVtIH0pIC8vIHNlbmRzIGEgSlNPTiBwb3N0IGJvZHlcclxuICAgICAgICAgICAgICAgIC5zZXQoJ1gtQVBJLUtleScsICdmb29iYXInKVxyXG4gICAgICAgICAgICAgICAgLnNldCgnYWNjZXB0JywgJ2pzb24nKVxyXG4gICAgICAgICAgICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KCkge1xyXG4gICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2FuZG8sIFwiQ3JlYW5kbyBzdWJpdGVtXCIpXHJcbiAgICAgICAgdmFsaWRhckluZm8oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZ3VhcmRhcih2YWxvciwgcHVudGFqZSwgcHJvcHMuaWRJdGVtKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb3BzLmdldHN1Ykl0ZW1zKClcclxuICAgICAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb1N1Y2Nlc3MsIFwiUmVnaXN0cm8gZXhpdG9zb1wiKVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2tDbG9zZSgpXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb0Vycm9yLCBlcnJvciwgMzAwMClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb0Vycm9yLCBlcnJvciwgMzAwMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZ3JlZ2FyU3ViaXRlbX0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tPcGVuKCl9PkFncmVnYXIgc3ViaXRlbTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg9XCJ4c1wiXHJcbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibWF4LXdpZHRoLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cIm1heC13aWR0aC1kaWFsb2ctdGl0bGVcIj48ZGl2IGNsYXNzTmFtZT1cInRpdHVsb0FncmVnYXJBY3RpdmlkYWRcIj5OdWV2byBzdWJpdGVtPC9kaXY+PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybXVsYXJpb1VuaVN0ZXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBjbGFzc05hbWU9XCJpbnB1dGZvcm1cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVmFsb3IgXCIgdmFsdWU9e3ZhbG9yfSBuYW1lPVwic2V0Tm9tYnJlXCIgb25DaGFuZ2U9e29uQ2hhbmdlVmFsb3J9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRmb3JtXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlB1bnRhamVcIiB2YWx1ZT17cHVudGFqZX0gbmFtZT1cInNldERlc2NyaXBjaW9uXCIgb25DaGFuZ2U9e29uQ2hhbmdlUHVudGFqZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gb25TdWJtaXQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVDbGlja0Nsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2VycmFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFncmVnYXJTdWJpdGVtIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0VkaXRhclN1Yml0ZW1zLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRGlhbG9nLCBEaWFsb2dBY3Rpb25zLCBEaWFsb2dDb250ZW50LCBEaWFsb2dUaXRsZSwgRm9ybUNvbnRyb2wsIElucHV0LCBJbnB1dExhYmVsLCBNZW51SXRlbSwgU2VsZWN0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG51ZXZvTWVuc2FqZSwgIHRpcG9zQWxlcnRhcyB9IGZyb20gJy4uL0luaWNpYWxpemVkL1RvYXN0J1xyXG5jb25zdCBzdXBlcmFnZW50ID0gcmVxdWlyZSgnc3VwZXJhZ2VudCcpO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgRWRpdGFyU3ViaXRlbXMgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3ZhbG9yLCBzZXRWYWxvcl0gPSB1c2VTdGF0ZShwcm9wcy5zdWJJdGVtLnZhbG9yKVxyXG4gICAgY29uc3QgW3B1bnRhamUsIHNldFB1bnRhamVdID0gdXNlU3RhdGUocHJvcHMuc3ViSXRlbS5wdW50YWplKVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZVZhbG9yKGUpIHtcclxuICAgICAgICBzZXRWYWxvcihlLnRhcmdldC52YWx1ZSlcclxuICAgIH07XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlUHVudGFqZShlKSB7XHJcbiAgICAgICAgc2V0UHVudGFqZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPcGVuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLnN1Ykl0ZW0pXHJcbiAgICAgICAgc2V0T3Blbih0cnVlKVxyXG4gICAgICAgIHNldFZhbG9yKHByb3BzLnN1Ykl0ZW0udmFsb3IpXHJcbiAgICAgICAgc2V0UHVudGFqZShwcm9wcy5zdWJJdGVtLnB1bnRhamUpXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrQ2xvc2UoKSB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSlcclxuICAgICAgICBzZXRWYWxvcihcIlwiKVxyXG4gICAgICAgIHNldFB1bnRhamUoXCJcIilcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhckluZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbG9yID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcIk5vIGhhcyBpbmdyZXNhZG8gdW4gdmFsb3JcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChwdW50YWplID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJObyBoYXMgaW5ncmVzYWRvIHVuIHB1bnRhamUgcGFyYSBlbCBpdGVtXCIpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBleHByID0gL15bMC05XSsoWy5dWzAtOV0rKT8kLztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleHByLnRlc3QocHVudGFqZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiRWwgcHVudGFqZSBkZWJlIGNvbnRlbmVyIHNvbG9zIG51bWVyb3MgZW4gZm9ybWF0byAyNSwyNVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ3VhcmRhcihpZCwgdmFsb3IsIHB1bnRhamUpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHN1cGVyYWdlbnRcclxuICAgICAgICAgICAgICAgIC5wb3N0KHByb2Nlc3MuZW52LkhPU1RfTkFNRSArICcvZWRpdGFyU3ViaXRlbScpXHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7IGlkOiBpZCwgdmFsb3I6IHZhbG9yLCBwdW50YWplOiBwdW50YWplfSkgLy8gc2VuZHMgYSBKU09OIHBvc3QgYm9keVxyXG4gICAgICAgICAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXHJcbiAgICAgICAgICAgICAgICAuc2V0KCdhY2NlcHQnLCAnanNvbicpXHJcbiAgICAgICAgICAgICAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycikgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoKSB7XHJcbiAgICAgICAgbnVldm9NZW5zYWplKHRpcG9zQWxlcnRhcy5jYXJnYW5kbywgXCJDcmVhbmRvIHN1Yml0ZW1cIilcclxuICAgICAgICB2YWxpZGFySW5mbygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBndWFyZGFyKCBwcm9wcy5zdWJJdGVtLmlkICwgdmFsb3IsIHB1bnRhamUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuZ2V0c3ViSXRlbXMoKVxyXG4gICAgICAgICAgICAgICAgbnVldm9NZW5zYWplKHRpcG9zQWxlcnRhcy5jYXJnYWRvU3VjY2VzcywgXCJSZWdpc3RybyBleGl0b3NvXCIpXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVDbGlja0Nsb3NlKClcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbnVldm9NZW5zYWplKHRpcG9zQWxlcnRhcy5jYXJnYWRvRXJyb3IsIGVycm9yLCAzMDAwKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgbnVldm9NZW5zYWplKHRpcG9zQWxlcnRhcy5jYXJnYWRvRXJyb3IsIGVycm9yLCAzMDAwKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRhclN1Yml0ZW19IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrT3BlbigpfSA+RWRpdGFyPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aD1cInhzXCJcclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtYXgtd2lkdGgtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwibWF4LXdpZHRoLWRpYWxvZy10aXRsZVwiPjxkaXYgY2xhc3NOYW1lPVwidGl0dWxvQWdyZWdhckFjdGl2aWRhZFwiPkVkaXRhciBzdWJpdGVtPC9kaXY+PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybXVsYXJpb1VuaVN0ZXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBjbGFzc05hbWU9XCJpbnB1dGZvcm1cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVmFsb3IgXCIgdmFsdWU9e3ZhbG9yfSBuYW1lPVwic2V0Tm9tYnJlXCIgb25DaGFuZ2U9e29uQ2hhbmdlVmFsb3J9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRmb3JtXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlB1bnRhamVcIiB2YWx1ZT17cHVudGFqZX0gbmFtZT1cInNldERlc2NyaXBjaW9uXCIgb25DaGFuZ2U9e29uQ2hhbmdlUHVudGFqZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gb25TdWJtaXQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVDbGlja0Nsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2VycmFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRhclN1Yml0ZW1zIiwiXHJcbmltcG9ydCBBZ3JlZ2FyU3ViaXRlbSBmcm9tIFwiLi9BZ3JlZ2FyU3ViaXRlbVwiXHJcbmltcG9ydCBFZGl0YXJTdWJpdGVtcyBmcm9tIFwiLi9FZGl0YXJTdWJpdGVtc1wiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU3ViaXRlbS5tb2R1bGUuc2Nzc1wiXHJcblxyXG5jb25zdCBTdWJpdGVtcyA9ICh7c3ViaXRlbXMsIGdldHN1Ykl0ZW1zLCBpZEl0ZW0gfSkgPT4ge1xyXG5cclxuICAgIHZhciBwdW50VG90YWwgPSAwXHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyU3ViaXRlbSAoc3ViaXRlbSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1bnRUb3RhbCA9IHB1bnRUb3RhbCArIHN1Yml0ZW0ucHVudGFqZVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1Yml0ZW19IGtleT17c3ViaXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy52YWxvcn0gPntzdWJpdGVtLnZhbG9yfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnB1bnRhamV9ID57c3ViaXRlbS5wdW50YWplfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxFZGl0YXJTdWJpdGVtcyBnZXRzdWJJdGVtcz17Z2V0c3ViSXRlbXN9IHN1Ykl0ZW0gPSB7c3ViaXRlbX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlckxpc3RhU3ViaXRlbXMgKGxpc3RhKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBsaXN0YS5tYXAgKChzdWJpdGVtKSA9PiByZW5kZXJTdWJpdGVtKHN1Yml0ZW0pKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1Yml0ZW1zfT5cclxuICAgICAgICAgICAgPEFncmVnYXJTdWJpdGVtIGdldHN1Ykl0ZW1zPXtnZXRzdWJJdGVtc30gaWRJdGVtID0ge2lkSXRlbX0vPlxyXG5cclxuICAgICAgICAgICAge3N1Yml0ZW1zLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyTGlzdGFTdWJpdGVtcyhzdWJpdGVtcylcclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxzcGFuPlNpbiBzdWJpdGVtczwvc3Bhbj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wdW50YWplVG90YWx9PlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5QdW50YWplIHRvdGFsOiA8L3N0cm9uZz48c3Bhbj57cHVudFRvdGFsfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJpdGVtc1xyXG4iLCJcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIERpYWxvZywgRGlhbG9nQWN0aW9ucywgRGlhbG9nQ29udGVudCwgRGlhbG9nVGl0bGUsIEZvcm1Db250cm9sLCBJbnB1dCwgSW5wdXRMYWJlbCwgTWVudUl0ZW0sIFNlbGVjdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FkbWluTWFyY2FzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQWdyZWdhck1hcmNhIGZyb20gJy4vQWdyZWdhck1hcmNhJztcclxuXHJcblxyXG5cclxuY29uc3QgQWRtaW5NYXJjYXMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2xpc3RhTWFyY2FzLCBzZXRMaXN0YU1hcmNhcyBdID0gIHVzZVN0YXRlKFtdKVxyXG4gICAgLy9odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTc0NDk3NS9lbmFibGluZy1odHRwcy1vbi1leHByZXNzLWpzXHJcbiAgIGNvbnN0IGdldE1hcmNhcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNNYXJjYXMgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5IT1NUX05BTUUgKyAnL21hcmNhcycpXHJcbiAgICAgICAgY29uc3QgbWFyY2FzSnNvbiA9IGF3YWl0IHJlc01hcmNhcy5qc29uKClcclxuICAgICAgICBzZXRMaXN0YU1hcmNhcyhtYXJjYXNKc29uKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0TWFyY2FzKClcclxuICAgIH0sIFtdIClcclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJWZW50YW5hXCI+XHJcbiAgICAgICAgICAgIDxBZ3JlZ2FyTWFyY2EgZ2V0TWFyY2FzPXtnZXRNYXJjYXN9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZG1pbk1hcmNhc30+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3RhTWFyY2FzLmxlbmd0aH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbk1hcmNhcyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BZ3JlZ2FyTWFyY2EubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBEaWFsb2csIERpYWxvZ0FjdGlvbnMsIERpYWxvZ0NvbnRlbnQsIERpYWxvZ1RpdGxlLCBGYWIsIEZvcm1Db250cm9sLCBJbnB1dCwgSW5wdXRMYWJlbCwgTWVudUl0ZW0sIFNlbGVjdCwgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG51ZXZvTWVuc2FqZSwgdGlwb3NBbGVydGFzIH0gZnJvbSAnLi4vSW5pY2lhbGl6ZWQvVG9hc3QnXHJcbmNvbnN0IHN1cGVyYWdlbnQgPSByZXF1aXJlKCdzdXBlcmFnZW50Jyk7XHJcbmltcG9ydCB7IENvbG9yLCBDb2xvclBpY2tlciwgY3JlYXRlQ29sb3IsIGlzY29sbyB9IGZyb20gXCJtYXRlcmlhbC11aS1jb2xvclwiO1xyXG5pbXBvcnQgV2FsbHBhcGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvV2FsbHBhcGVyJztcclxuXHJcbmNvbnN0IHBhbGV0dGUgPSBbXHJcbiAgICAnI0QwMDIxQicsICcjRjVBNjIzJywgJyNGOEU3MUMnLCAnIzhCNTcyQScsICcjN0VEMzIxJywgJyM0MTc1MDUnLCAnI0JEMTBFMCcsICcjOTAxM0ZFJywgJyM0QTkwRTInLCAnIzUwRTNDMicsICcjQjhFOTg2JywgJyMwMDAwMDAnLCAnIzRBNEE0QScsICcjOUI5QjlCJywgJyNGRkZGRkYnLFxyXG5dO1xyXG5cclxuXHJcblxyXG5jb25zdCBBZ3JlZ2FyTWFyY2EgPSAocHJvcHMpID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbbm9tYnJlLCBzZXROb21icmVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtyZXNlbmEsIHNldFJlc2VuYV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2ltYWdlbiwgc2V0SW1hZ2VuXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbaW1hZ2VuU3JjLCBzZXRJbWFnZW5TcmNdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtjb2xvclVubywgc2V0Q29sb3JVbm9dID0gdXNlU3RhdGUoY3JlYXRlQ29sb3IoJyMwMDAwMDAnKSlcclxuICAgIGNvbnN0IFtjb2xvckRvcywgc2V0Q29sb3JEb3NdID0gdXNlU3RhdGUoY3JlYXRlQ29sb3IoJyMwMDAwMDAnKSlcclxuICAgIGNvbnN0IFtjb2xvclRyZXMsIHNldENvbG9yVHJlc10gPSB1c2VTdGF0ZShjcmVhdGVDb2xvcignIzAwMDAwMCcpKVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZU5vbWJyZShlKSB7XHJcbiAgICAgICAgc2V0Tm9tYnJlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZVJlc2VuYShlKSB7XHJcbiAgICAgICAgc2V0UmVzZW5hKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZUNvbG9yVW5vKGNvbG9yKSB7XHJcbiAgICAgICAgc2V0Q29sb3JVbm8oY29sb3IpXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZUNvbG9yRG9zKGNvbG9yKSB7XHJcbiAgICAgICAgc2V0Q29sb3JEb3MoY29sb3IpXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlQ29sb3JUcmVzKGNvbG9yKSB7XHJcbiAgICAgICAgc2V0Q29sb3JUcmVzKGNvbG9yKVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPcGVuKCkge1xyXG4gICAgICAgIHNldE9wZW4odHJ1ZSlcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tDbG9zZSgpIHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKVxyXG4gICAgICAgIHNldE5vbWJyZShcIlwiKVxyXG4gICAgICAgIHNldFJlc2VuYShcIlwiKVxyXG4gICAgICAgIHNldENvbG9yVW5vKGNyZWF0ZUNvbG9yKCcjMDAwMDAwJykpXHJcbiAgICAgICAgc2V0Q29sb3JEb3MoY3JlYXRlQ29sb3IoJyMwMDAwMDAnKSlcclxuICAgICAgICBzZXRDb2xvclRyZXMoY3JlYXRlQ29sb3IoJyMwMDAwMDAnKSlcclxuICAgICAgICBzZXRJbWFnZW4obnVsbClcclxuICAgICAgICBzZXRJbWFnZW5TcmMoXCJcIilcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gb25TZWxlY3RGaWxlSW1hZ2UoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5maWxlc1swXSkge1xyXG4gICAgICAgICAgICB2YXIgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXHJcblxyXG4gICAgICAgICAgICBpZiAoZmlsZS50eXBlID09IFwiaW1hZ2UvanBnXCIgfHwgZmlsZS50eXBlID09IFwiaW1hZ2UvanBlZ1wiIHx8IGZpbGUudHlwZSA9PSBcImltYWdlL3BuZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJbWFnZW4oZmlsZSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VuU3JjKHJlYWRlci5yZXN1bHQpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBudWV2b01lbnNhamUodGlwb3NBbGVydGFzLmVycm9yLCBcIlNvbG8gc2UgcGVybWl0ZSBjYXJnYXIgaW1hZ2VuZXMgLSAuanBnIC5wbmcgLmpwZWcgLVwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1ZhbGlkQ29sb3IoY29sb3IpIHtcclxuICAgICAgICB2YXIgaXNDb2xvciA9IHRydWVcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpc0NvbG9yID0gKGNvbG9yLm1hdGNoKC9eI1tBLUYwLTldezZ9JC9pKSAhPT0gbnVsbCB8fCBjb2xvci5tYXRjaCgvXiNbQS1GMC05XXs4fSQvaSkgIT09IG51bGwgfHwgY29sb3IubWF0Y2goL14jW0EtRjAtOV17M30kL2kpICE9PSBudWxsKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGlzQ29sb3JcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhckluZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vbWJyZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJObyBoYXMgaW5ncmVzYWRvIHVuIG5vbWJyZVwiKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc2VuYSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiTm8gaGFzIGluZ3Jlc2FkbyB1bmEgcmVzZW5hIHBhcmEgZXN0YSBtYXJjYVwiKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRDb2xvcignIycgKyBjb2xvclVuby5oZXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcIkNvbG9yIDEgbm8gdmFsaWRvXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkQ29sb3IoJyMnICsgY29sb3JEb3MuaGV4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiQ29sb3IgMiBubyB2YWxpZG9cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZENvbG9yKCcjJyArIGNvbG9yVHJlcy5oZXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiQ29sb3IgMyBubyB2YWxpZG9cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcIkRlYmVzIGFncmVnYXIgdW4gbG9nb1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ3VhcmRhckltYWdlbigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBzdXBlcmFnZW50XHJcbiAgICAgICAgICAgICAgICAucG9zdChwcm9jZXNzLmVudi5IT1NUX05BTUUgKyAnL3VwbG9hZExvZ29NYXJjYS8nICsgbm9tYnJlKVxyXG4gICAgICAgICAgICAgICAgLmF0dGFjaCgnaW1hZ2UnLCBpbWFnZW4pXHJcbiAgICAgICAgICAgICAgICAuc2V0KCdhY2NlcHQnLCAnanNvbicpXHJcbiAgICAgICAgICAgICAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiRXJyb3IgYWwgZ3VhcmRhciBpbmZvcm1hY2nDs25cIilcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwdWVzdGFMb2dpbiA9IEpTT04ucGFyc2UocmVzLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3B1ZXN0YUxvZ2luLmltYWdlbi5maWxlbmFtZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBndWFyZGFyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZ3VhcmRhckltYWdlbigpLnRoZW4oKHVybCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHN1cGVyYWdlbnRcclxuICAgICAgICAgICAgICAgICAgICAucG9zdChwcm9jZXNzLmVudi5IT1NUX05BTUUgKyAnL2NyZWFyTWFyY2EnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHsgbm9tYnJlOiBub21icmUsIHJlc2VuYTogcmVzZW5hLCB1cmxMb2dvOiB1cmwsIGNvbG9yVW5vOiBjb2xvclVuby5oZXgsIGNvbG9yRG9zOiBjb2xvckRvcy5oZXgsIGNvbG9yVHJlczogY29sb3JUcmVzLmhleCB9KSAvLyBzZW5kcyBhIEpTT04gcG9zdCBib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldCgnYWNjZXB0JywgJ2pzb24nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoKSB7XHJcbiAgICAgICAgbnVldm9NZW5zYWplKHRpcG9zQWxlcnRhcy5jYXJnYW5kbywgXCJDcmVhbmRvIG1hcmNhXCIpXHJcbiAgICAgICAgdmFsaWRhckluZm8oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZ3VhcmRhcigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbnVldm9NZW5zYWplKHRpcG9zQWxlcnRhcy5jYXJnYWRvU3VjY2VzcywgXCJSZWdpc3RybyBleGl0b3NvXCIpXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVDbGlja0Nsb3NlKClcclxuICAgICAgICAgICAgICAgIHByb3BzLmdldE1hcmNhcygpXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb0Vycm9yLCBlcnJvciwgMzAwMClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb0Vycm9yLCBlcnJvciwgMzAwMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyZWdhckFkbWluXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tPcGVuKCl9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyZWdhclwiPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0b1wiPkFncmVnYXIgbWFyY2E8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aD1cInhzXCJcclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtYXgtd2lkdGgtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwibWF4LXdpZHRoLWRpYWxvZy10aXRsZVwiPjxkaXYgY2xhc3NOYW1lPVwidGl0dWxvQWdyZWdhckFjdGl2aWRhZFwiPk51ZXZhIE1hcmNhPC9kaXY+PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybXVsYXJpb1VuaVN0ZXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBjbGFzc05hbWU9XCJpbnB1dGZvcm1cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTm9tYnJlIGl0ZW1cIiB2YWx1ZT17bm9tYnJlfSBuYW1lPVwic2V0Tm9tYnJlXCIgb25DaGFuZ2U9e29uQ2hhbmdlTm9tYnJlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YWx1ZT17cmVzZW5hfSBvbkNoYW5nZT17b25DaGFuZ2VSZXNlbmF9IGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIiBwbGFjZWhvbGRlcj1cIlJlc2XDsWFcIiBtdWx0aWxpbmUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXBsb2FkLXBob3RvXCIgY2xhc3NOYW1lPVwiaW5wdXRmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVwbG9hZC1waG90b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1cGxvYWQtcGhvdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdEZpbGVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZXh0ZW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdhbGxwYXBlckljb24gLz4gPHNwYW4+RXNjb2dlciBsb2dvIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VuU3JjfSBhbHQ9XCJcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNvbG9yIDE8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlciB2YWx1ZT17Y29sb3JVbm99IGlkPVwibmV3Q2F0ZWdvcnlDb2xvdXJcIiBvbkNoYW5nZT17b25DaGFuZ2VDb2xvclVub30gZm9ybWF0PVwiaGV4XCIgbWFyZ2luPVwiZGVuc2VcIiBzaXplPVwic21hbGxcIiBoaWRlVGV4dGZpZWxkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNvbG9yIDI8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlciB2YWx1ZT17Y29sb3JEb3N9IGlkPVwibmV3Q2F0ZWdvcnlDb2xvdXJcIiBvbkNoYW5nZT17b25DaGFuZ2VDb2xvckRvc30gZm9ybWF0PVwiaGV4XCIgbWFyZ2luPVwiZGVuc2VcIiBzaXplPVwic21hbGxcIiBoaWRlVGV4dGZpZWxkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNvbG9yIDM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlciB2YWx1ZT17Y29sb3JUcmVzfSBpZD1cIm5ld0NhdGVnb3J5Q29sb3VyXCIgb25DaGFuZ2U9e29uQ2hhbmdlQ29sb3JUcmVzfSBmb3JtYXQ9XCJoZXhcIiBtYXJnaW49XCJkZW5zZVwiIHNpemU9XCJzbWFsbFwiIGhpZGVUZXh0ZmllbGQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR3VhcmRhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDZXJyYXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWdyZWdhck1hcmNhIiwiaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbmZvT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbmZvT3V0bGluZWQnO1xyXG5pbXBvcnQgQ2hlY2tPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrT3V0bGluZWQnO1xyXG5pbXBvcnQgUmVwb3J0UHJvYmxlbU91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwb3J0UHJvYmxlbU91dGxpbmVkJztcclxuaW1wb3J0IEhpZ2hsaWdodE9mZk91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSGlnaGxpZ2h0T2ZmT3V0bGluZWQnO1xyXG5pbXBvcnQgQm91bmNlTG9hZGVyIGZyb20gXCJyZWFjdC1zcGlubmVycy9Cb3VuY2VMb2FkZXJcIjtcclxuaW1wb3J0IENsb3NlT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZU91dGxpbmVkJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5sZXQgY2FyZ2FuZG8gPSBudWxsO1xyXG5leHBvcnQgY29uc3QgdGlwb3NBbGVydGFzID0ge2luZm86IDEsIHN1Y2Nlc3M6IDIsIHdhcm46IDMsIGVycm9yOiA0LCBhdXRvQ2xvc2VDdXN0b206IDUsIGNhcmdhbmRvOiA2LCBjYXJnYWRvU3VjY2VzczogNywgY2FyZ2Fkb1dhcm46IDgsIGNhcmdhZG9FcnJvcjogOSwgY2VycmFyVG9kYXM6IDEwfTtcclxuXHJcbmV4cG9ydCBjb25zdCBudWV2b01lbnNhamUgPSAoaWNvbm8sbWVuc2FqZSxhdXRvKSA9PntcclxuXHJcbiAgICBjb25zdCBvdmVycmlkZSA9IGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmA7XHJcblxyXG5cclxuICAgIHN3aXRjaCAoaWNvbm8pIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHRvYXN0LmluZm8oXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEluZm9PdXRsaW5lZEljb24gc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCd9fS8+XHJcbiAgICAgICAgICAgICAgICB7bWVuc2FqZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2Pix7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiBhdXRvXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENoZWNrT3V0bGluZWRJY29uIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnfX0vPlxyXG4gICAgICAgICAgICAgICAge21lbnNhamV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4se1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogYXV0b1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICB0b2FzdC53YXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxSZXBvcnRQcm9ibGVtT3V0bGluZWRJY29uIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnfX0vPlxyXG4gICAgICAgICAgICAgICAge21lbnNhamV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4se1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogYXV0b1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGlnaGxpZ2h0T2ZmT3V0bGluZWRJY29uIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnfX0vPlxyXG4gICAgICAgICAgICAgICAge21lbnNhamV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4se1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogYXV0b1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxDaGVja091dGxpbmVkSWNvbiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4J319Lz5cclxuICAgICAgICAgICAgICAgIHttZW5zYWplfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+LHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IGF1dG9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgY2FyZ2FuZG8gPSB0b2FzdC53YXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxCb3VuY2VMb2FkZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzPXtvdmVycmlkZX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCIjZmZmXCJ9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICB7bWVuc2FqZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IGZhbHNlICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgdG9hc3QudXBkYXRlKGNhcmdhbmRvLCB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja091dGxpbmVkSWNvbiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4J319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21lbnNhamV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdG9hc3QuVFlQRS5TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiBhdXRvXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgIHRvYXN0LnVwZGF0ZShjYXJnYW5kbywge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVwb3J0UHJvYmxlbU91dGxpbmVkSWNvbiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4J319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21lbnNhamV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdG9hc3QuVFlQRS5XQVJOSU5HLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiBhdXRvXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgIHRvYXN0LnVwZGF0ZShjYXJnYW5kbywge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlnaGxpZ2h0T2ZmT3V0bGluZWRJY29uIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVuc2FqZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0b2FzdC5UWVBFLkVSUk9SLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiBhdXRvXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxDbG9zZU91dGxpbmVkSWNvbiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4J319Lz5cclxuICAgICAgICAgICAgICAgIHttZW5zYWplfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+LHtcclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlOiBwcm9wcyA9PiB0b2FzdC5kaXNtaXNzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiBhdXRvXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbmRleC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE1vdG9yY3ljbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3RvcmN5Y2xlJztcclxuaW1wb3J0IExpc3RJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MaXN0JztcclxuaW1wb3J0IFZlcmlmaWVkVXNlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1ZlcmlmaWVkVXNlcic7XHJcbmltcG9ydCBDaGF0QnViYmxlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdEJ1YmJsZSc7XHJcblxyXG5cclxuaW1wb3J0IEFkbWluSXRlbXMgZnJvbSAnLi4vQ29tcG9uZW50cy9BZG1pbkl0ZW1zL0FkbWluSXRlbXMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFkbWluTWFyY2FzIGZyb20gJy4uL0NvbXBvbmVudHMvQWRtaW5NYXJjYXMvQWRtaW5NYXJjYXMnO1xyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFttZW51U3RhdHVzLCBzZXRNZW51U3RhdHVzIF0gPSAgdXNlU3RhdGUoXCIwXCIpXHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyQ29udGVuaWRvKCl7XHJcbiAgICAgICAgc3dpdGNoIChtZW51U3RhdHVzKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEFkbWluTWFyY2FzIC8+O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8QWRtaW5JdGVtcyAvPjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8c3Bhbj5TaW4gaW5mb3JtYWNpw7NuIGVuIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbmVkb3J9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFycmliYX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz17cmVxdWlyZShcIi4uL3NjckFwcFNlcnZlci9pbWFnZXMvbG9nb19tb25vLnBuZ1wiKX0gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJham99PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJdGVtfSBvbkNsaWNrPXsoKSA9PiBzZXRNZW51U3RhdHVzKDEpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uTWVudUl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZlcmlmaWVkVXNlckljb24gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5NYXJjYXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW19IG9uQ2xpY2s9eygpID0+IHNldE1lbnVTdGF0dXMoMil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25NZW51SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW90b3JjeWNsZUljb24gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Nb3Rvczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbX0gb25DbGljaz17KCkgPT4gc2V0TWVudVN0YXR1cygzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbk1lbnVJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0QnViYmxlSWNvbiAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNvbWVudGFyaW9zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJdGVtfSBvbkNsaWNrPXsoKSA9PiBzZXRNZW51U3RhdHVzKDQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uTWVudUl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJY29uICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SXRlbXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVuaWRvfT5cclxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVyQ29udGVuaWRvKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhZG1pbkl0ZW1zXCI6IFwiQWRtaW5JdGVtc19hZG1pbkl0ZW1zX18xV2JZV1wiLFxuXHRcIkZvcm1cIjogXCJBZG1pbkl0ZW1zX0Zvcm1fXzFERURnXCIsXG5cdFwiaW5wdXRGb3JtXCI6IFwiQWRtaW5JdGVtc19pbnB1dEZvcm1fXzMtcTVxXCIsXG5cdFwiYWRtaW5TdWJJdGVtc1wiOiBcIkFkbWluSXRlbXNfYWRtaW5TdWJJdGVtc19fMlQ0a2RcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFncmVnYXJTdWJpdGVtXCI6IFwiQWdyZWdhclN1Yml0ZW1fYWdyZWdhclN1Yml0ZW1fXzF3a2pwXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJlZGl0YXJTdWJpdGVtXCI6IFwiRWRpdGFyU3ViaXRlbXNfZWRpdGFyU3ViaXRlbV9fMTdTdlpcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1Yml0ZW1zXCI6IFwiU3ViaXRlbV9zdWJpdGVtc19fMS04YXJcIixcblx0XCJzdWJpdGVtXCI6IFwiU3ViaXRlbV9zdWJpdGVtX19CZE1qT1wiLFxuXHRcInZhbG9yXCI6IFwiU3ViaXRlbV92YWxvcl9fMmZKWExcIixcblx0XCJwdW50YWplXCI6IFwiU3ViaXRlbV9wdW50YWplX18tbjF1ZlwiLFxuXHRcInB1bnRhamVUb3RhbFwiOiBcIlN1Yml0ZW1fcHVudGFqZVRvdGFsX18xTjFpb1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWRtaW5NYXJjYXNcIjogXCJBZG1pbk1hcmNhc19hZG1pbk1hcmNhc19fSXd6dWhcIixcblx0XCJGb3JtXCI6IFwiQWRtaW5NYXJjYXNfRm9ybV9fVnU4UzBcIixcblx0XCJpbnB1dEZvcm1cIjogXCJBZG1pbk1hcmNhc19pbnB1dEZvcm1fXzNDQ0ktXCIsXG5cdFwiYWRtaW5TdWJJdGVtc1wiOiBcIkFkbWluTWFyY2FzX2FkbWluU3ViSXRlbXNfX25IcElpXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW5lZG9yXCI6IFwiSW5kZXhfY29udGVuZWRvcl9fMjVBY05cIixcblx0XCJhcnJpYmFcIjogXCJJbmRleF9hcnJpYmFfX29HV3RrXCIsXG5cdFwiYWJham9cIjogXCJJbmRleF9hYmFqb19fZG04cWJcIixcblx0XCJtZW51XCI6IFwiSW5kZXhfbWVudV9fMUlkNmhcIixcblx0XCJsb2dvXCI6IFwiSW5kZXhfbG9nb19fbVc5VWdcIixcblx0XCJjb250ZW5pZG9cIjogXCJJbmRleF9jb250ZW5pZG9fXzNMN2poXCIsXG5cdFwibWVudUl0ZW1cIjogXCJJbmRleF9tZW51SXRlbV9fM0N6WWFcIixcblx0XCJpY29uTWVudUl0ZW1cIjogXCJJbmRleF9pY29uTWVudUl0ZW1fXzNhTGpSXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbG9nb19tb25vLWU5ODU2NTg2OTg4ZTkyZWNhNzNhOTc0MmQ5ODhjYzdiLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdEJ1YmJsZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrT3V0bGluZWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZU91dGxpbmVkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSGlnaGxpZ2h0T2ZmT3V0bGluZWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbmZvT3V0bGluZWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9MaXN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW90b3JjeWNsZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlcG9ydFByb2JsZW1PdXRsaW5lZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZlcmlmaWVkVXNlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1dhbGxwYXBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWF0ZXJpYWwtdWktY29sb3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zcGlubmVycy9Cb3VuY2VMb2FkZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN1cGVyYWdlbnRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=