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
/* harmony import */ var _Index_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Index.module.scss */ "./pages/Index.module.scss");
/* harmony import */ var _Index_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Index_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Motorcycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Motorcycle */ "@material-ui/icons/Motorcycle");
/* harmony import */ var _material_ui_icons_Motorcycle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Motorcycle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/List */ "@material-ui/icons/List");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/VerifiedUser */ "@material-ui/icons/VerifiedUser");
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ChatBubble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ChatBubble */ "@material-ui/icons/ChatBubble");
/* harmony import */ var _material_ui_icons_ChatBubble__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChatBubble__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_AdminItems_AdminItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/AdminItems/AdminItems */ "./Components/AdminItems/AdminItems.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_AdminMarcas_AdminMarcas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/AdminMarcas/AdminMarcas */ "./Components/AdminMarcas/AdminMarcas.js");

var _jsxFileName = "E:\\NEW LIFE 2.0\\FEEGO\\PROYECTOS\\SERVIDOR\\motosgumo.com\\pages\\index.js";










const Index = () => {
  const {
    0: menuStatus,
    1: setMenuStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("0");

  function renderContenido() {
    switch (menuStatus) {
      case 1:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_AdminMarcas_AdminMarcas__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 24
        }, this);
        break;

      case 4:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_AdminItems_AdminItems__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
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
    className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().contenedor),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      lang: "ES",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "GUMO | Administraci\xF3n"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().arriba),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        alt: "",
        src: __webpack_require__(/*! ../scrAppServer/images/fondo_header.png */ "./scrAppServer/images/fondo_header.png"),
        className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().fondo_header)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        alt: "",
        src: __webpack_require__(/*! ../scrAppServer/images/logo_Gumo.png */ "./scrAppServer/images/logo_Gumo.png"),
        className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().logo)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().abajo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menu),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().fondo)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menuItem),
          onClick: () => setMenuStatus(1),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().iconMenuItem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Marcas"
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
          className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menuItem),
          onClick: () => setMenuStatus(2),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().iconMenuItem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Motorcycle__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Motos"
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
          className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menuItem),
          onClick: () => setMenuStatus(3),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().iconMenuItem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_ChatBubble__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Comentarios"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menuItem),
          onClick: () => setMenuStatus(4),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().iconMenuItem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Items"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().contenido),
        children: renderContenido()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
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
	"fondo": "Index_fondo__3SXOR",
	"logo": "Index_logo__mW9Ug",
	"fondo_header": "Index_fondo_header__3L4ON",
	"contenido": "Index_contenido__3L7jh",
	"menuItem": "Index_menuItem__3CzYa",
	"iconMenuItem": "Index_iconMenuItem__3aLjR"
};


/***/ }),

/***/ "./scrAppServer/images/fondo_header.png":
/*!**********************************************!*\
  !*** ./scrAppServer/images/fondo_header.png ***!
  \**********************************************/
/***/ (function(module) {

module.exports = "/_next/static/images/fondo_header-31a6022d50ac1f590ad2105aa9659438.png";

/***/ }),

/***/ "./scrAppServer/images/logo_Gumo.png":
/*!*******************************************!*\
  !*** ./scrAppServer/images/logo_Gumo.png ***!
  \*******************************************/
/***/ (function(module) {

module.exports = "/_next/static/images/logo_Gumo-a7ee6f58ecdf5dc814178de4b9f170a9.png";

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJNb25vLy4vQ29tcG9uZW50cy9BZG1pbkl0ZW1zL0FkbWluSXRlbXMuanMiLCJ3ZWJwYWNrOi8vV2ViTW9uby8uL0NvbXBvbmVudHMvQWRtaW5JdGVtcy9BZ3JlZ2FySXRlbS5qcyIsIndlYnBhY2s6Ly9XZWJNb25vLy4vQ29tcG9uZW50cy9BZG1pbkl0ZW1zL0FncmVnYXJTdWJpdGVtLmpzIiwid2VicGFjazovL1dlYk1vbm8vLi9Db21wb25lbnRzL0FkbWluSXRlbXMvRWRpdGFyU3ViaXRlbXMuanMiLCJ3ZWJwYWNrOi8vV2ViTW9uby8uL0NvbXBvbmVudHMvQWRtaW5JdGVtcy9TdWJpdGVtcy5qcyIsIndlYnBhY2s6Ly9XZWJNb25vLy4vQ29tcG9uZW50cy9BZG1pbk1hcmNhcy9BZG1pbk1hcmNhcy5qcyIsIndlYnBhY2s6Ly9XZWJNb25vLy4vQ29tcG9uZW50cy9BZG1pbk1hcmNhcy9BZ3JlZ2FyTWFyY2EuanMiLCJ3ZWJwYWNrOi8vV2ViTW9uby8uL0NvbXBvbmVudHMvSW5pY2lhbGl6ZWQvVG9hc3QuanMiLCJ3ZWJwYWNrOi8vV2ViTW9uby8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL1dlYk1vbm8vLi9Db21wb25lbnRzL0FkbWluSXRlbXMvQWRtaW5JdGVtcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9XZWJNb25vLy4vQ29tcG9uZW50cy9BZG1pbkl0ZW1zL0FncmVnYXJTdWJpdGVtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL1dlYk1vbm8vLi9Db21wb25lbnRzL0FkbWluSXRlbXMvRWRpdGFyU3ViaXRlbXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vV2ViTW9uby8uL0NvbXBvbmVudHMvQWRtaW5JdGVtcy9TdWJpdGVtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL1dlYk1vbm8vLi9Db21wb25lbnRzL0FkbWluTWFyY2FzL0FkbWluTWFyY2FzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL1dlYk1vbm8vLi9wYWdlcy9JbmRleC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9XZWJNb25vLy4vc2NyQXBwU2VydmVyL2ltYWdlcy9mb25kb19oZWFkZXIucG5nIiwid2VicGFjazovL1dlYk1vbm8vLi9zY3JBcHBTZXJ2ZXIvaW1hZ2VzL2xvZ29fR3Vtby5wbmciLCJ3ZWJwYWNrOi8vV2ViTW9uby9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vV2ViTW9uby9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGF0QnViYmxlXCIiLCJ3ZWJwYWNrOi8vV2ViTW9uby9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGVja091dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vV2ViTW9uby9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZU91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vV2ViTW9uby9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9IaWdobGlnaHRPZmZPdXRsaW5lZFwiIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mb091dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vV2ViTW9uby9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MaXN0XCIiLCJ3ZWJwYWNrOi8vV2ViTW9uby9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3RvcmN5Y2xlXCIiLCJ3ZWJwYWNrOi8vV2ViTW9uby9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9SZXBvcnRQcm9ibGVtT3V0bGluZWRcIiIsIndlYnBhY2s6Ly9XZWJNb25vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZlcmlmaWVkVXNlclwiIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2FsbHBhcGVyXCIiLCJ3ZWJwYWNrOi8vV2ViTW9uby9leHRlcm5hbCBcIm1hdGVyaWFsLXVpLWNvbG9yXCIiLCJ3ZWJwYWNrOi8vV2ViTW9uby9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL1dlYk1vbm8vZXh0ZXJuYWwgXCJyZWFjdC1zcGlubmVycy9Cb3VuY2VMb2FkZXJcIiIsIndlYnBhY2s6Ly9XZWJNb25vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly9XZWJNb25vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vV2ViTW9uby9leHRlcm5hbCBcInN1cGVyYWdlbnRcIiJdLCJuYW1lcyI6WyJBZG1pbkl0ZW1zIiwiaWRJdGVtIiwic2V0SWRJdGVtIiwidXNlU3RhdGUiLCJsaXN0YUl0ZW1zIiwic2V0TGlzdGFJdGVtcyIsInN1Yml0ZW1zIiwic2V0U3ViaXRlbXMiLCJvbkNoYW5nZUlkSXRlbSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldEl0ZW1zIiwicmVzSXRlbXMiLCJmZXRjaCIsInByb2Nlc3MiLCJpdGVtc0pzb24iLCJqc29uIiwiZ2V0c3ViSXRlbXMiLCJyZXNTdWJpdGVtcyIsInN1Yml0ZW1zSnNvbiIsInVzZUVmZmVjdCIsInN0eWxlcyIsIm5hbWUiLCJpZCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJub21icmUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJyZXNTbGlkZXMiLCJzbGlkZXNKc29uIiwiaXRlbXMiLCJzdXBlcmFnZW50IiwicmVxdWlyZSIsIkFncmVnYXJJdGVtIiwib3BlbiIsInNldE9wZW4iLCJzZXROb21icmUiLCJkZXNjcmlwY2lvbiIsInNldERlc2NyaXBjaW9uIiwib25DaGFuZ2VOb21icmUiLCJvbkNoYW5nZURlc2NyaXBjaW9uIiwiaGFuZGxlQ2xpY2tPcGVuIiwiaGFuZGxlQ2xpY2tDbG9zZSIsInZhbGlkYXJJbmZvIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJndWFyZGFyIiwicG9zdCIsInNlbmQiLCJzZXQiLCJlbmQiLCJlcnIiLCJyZXMiLCJvblN1Ym1pdCIsIm51ZXZvTWVuc2FqZSIsInRpcG9zQWxlcnRhcyIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwiQWdyZWdhclN1Yml0ZW0iLCJ2YWxvciIsInNldFZhbG9yIiwicHVudGFqZSIsInNldFB1bnRhamUiLCJvbkNoYW5nZVZhbG9yIiwib25DaGFuZ2VQdW50YWplIiwiZXhwciIsInRlc3QiLCJFZGl0YXJTdWJpdGVtcyIsInN1Ykl0ZW0iLCJTdWJpdGVtcyIsInB1bnRUb3RhbCIsInJlbmRlclN1Yml0ZW0iLCJzdWJpdGVtIiwicmVuZGVyTGlzdGFTdWJpdGVtcyIsImxpc3RhIiwiQWRtaW5NYXJjYXMiLCJsaXN0YU1hcmNhcyIsInNldExpc3RhTWFyY2FzIiwiZ2V0TWFyY2FzIiwicmVzTWFyY2FzIiwibWFyY2FzSnNvbiIsInBhbGV0dGUiLCJBZ3JlZ2FyTWFyY2EiLCJyZXNlbmEiLCJzZXRSZXNlbmEiLCJpbWFnZW4iLCJzZXRJbWFnZW4iLCJpbWFnZW5TcmMiLCJzZXRJbWFnZW5TcmMiLCJjb2xvclVubyIsInNldENvbG9yVW5vIiwiY3JlYXRlQ29sb3IiLCJjb2xvckRvcyIsInNldENvbG9yRG9zIiwiY29sb3JUcmVzIiwic2V0Q29sb3JUcmVzIiwib25DaGFuZ2VSZXNlbmEiLCJvbkNoYW5nZUNvbG9yVW5vIiwiY29sb3IiLCJvbkNoYW5nZUNvbG9yRG9zIiwib25DaGFuZ2VDb2xvclRyZXMiLCJvblNlbGVjdEZpbGVJbWFnZSIsImZpbGVzIiwiZmlsZSIsInR5cGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJpc1ZhbGlkQ29sb3IiLCJpc0NvbG9yIiwibWF0Y2giLCJoZXgiLCJndWFyZGFySW1hZ2VuIiwiYXR0YWNoIiwicmVzcHVlc3RhTG9naW4iLCJKU09OIiwicGFyc2UiLCJ0ZXh0IiwiZmlsZW5hbWUiLCJ1cmwiLCJ1cmxMb2dvIiwiZGlzcGxheSIsImNhcmdhbmRvIiwiaW5mbyIsInN1Y2Nlc3MiLCJ3YXJuIiwiYXV0b0Nsb3NlQ3VzdG9tIiwiY2FyZ2Fkb1N1Y2Nlc3MiLCJjYXJnYWRvV2FybiIsImNhcmdhZG9FcnJvciIsImNlcnJhclRvZGFzIiwiaWNvbm8iLCJtZW5zYWplIiwiYXV0byIsIm92ZXJyaWRlIiwidG9hc3QiLCJtYXJnaW5SaWdodCIsImF1dG9DbG9zZSIsInJlbmRlciIsIm9uQ2xvc2UiLCJJbmRleCIsIm1lbnVTdGF0dXMiLCJzZXRNZW51U3RhdHVzIiwicmVuZGVyQ29udGVuaWRvIiwiZm9uZG9faGVhZGVyIiwibG9nbyIsImZvbmRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBTUEsTUFBTUEsVUFBVSxHQUFHLE1BQU07QUFDckIsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCQywrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJGLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDRyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkosK0NBQVEsQ0FBQyxFQUFELENBQXhDOztBQUVBLFdBQVNLLGNBQVQsQ0FBd0JDLENBQXhCLEVBQTJCO0FBQ3ZCUCxhQUFTLENBQUNPLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFDSDs7QUFJRCxRQUFNQyxRQUFRLEdBQUcsWUFBWTtBQUN6QixVQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDQyxvQ0FBQSxHQUF3QixRQUF6QixDQUE1QjtBQUNBLFVBQU1DLFNBQVMsR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQVQsRUFBeEI7QUFDQVosaUJBQWEsQ0FBQ1csU0FBRCxDQUFiO0FBQ0gsR0FKRDs7QUFNQSxRQUFNRSxXQUFXLEdB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O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNaQSwwRjs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBEaWFsb2csIERpYWxvZ0FjdGlvbnMsIERpYWxvZ0NvbnRlbnQsIERpYWxvZ1RpdGxlLCBGb3JtQ29udHJvbCwgSW5wdXQsIElucHV0TGFiZWwsIE1lbnVJdGVtLCBTZWxlY3QgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BZG1pbkl0ZW1zLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEFncmVnYXJJdGVtIGZyb20gJy4vQWdyZWdhckl0ZW0nO1xyXG5pbXBvcnQgU3ViaXRlbXMgZnJvbSAnLi9TdWJpdGVtcydcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBBZG1pbkl0ZW1zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lkSXRlbSwgc2V0SWRJdGVtXSA9IHVzZVN0YXRlKFwiMFwiKVxyXG4gICAgY29uc3QgW2xpc3RhSXRlbXMsIHNldExpc3RhSXRlbXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbc3ViaXRlbXMsIHNldFN1Yml0ZW1zXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlSWRJdGVtKGUpIHtcclxuICAgICAgICBzZXRJZEl0ZW0oZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBnZXRJdGVtcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNJdGVtcyA9IGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkhPU1RfTkFNRSArICcvaXRlbXMnKVxyXG4gICAgICAgIGNvbnN0IGl0ZW1zSnNvbiA9IGF3YWl0IHJlc0l0ZW1zLmpzb24oKVxyXG4gICAgICAgIHNldExpc3RhSXRlbXMoaXRlbXNKc29uKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldHN1Ykl0ZW1zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc1N1Yml0ZW1zID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuSE9TVF9OQU1FICsgJy9zdWJpdGVtcy8nICsgaWRJdGVtKVxyXG4gICAgICAgIGNvbnN0IHN1Yml0ZW1zSnNvbiA9IGF3YWl0IHJlc1N1Yml0ZW1zLmpzb24oKVxyXG4gICAgICAgIHNldFN1Yml0ZW1zKHN1Yml0ZW1zSnNvbilcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldHN1Ykl0ZW1zKClcclxuICAgIH0sIFtpZEl0ZW1dKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0SXRlbXMoKVxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJWZW50YW5hXCI+XHJcbiAgICAgICAgICAgIDxBZ3JlZ2FySXRlbSBnZXRJdGVtcz17Z2V0SXRlbXN9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRtaW5JdGVtc30+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBub1ZhbGlkYXRlIGNsYXNzTmFtZT17c3R5bGVzLkZvcm19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGb3JtfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJtYXgtd2lkdGhcIj5JdGVtPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT1cImlucHV0Zm9ybVwiIGF1dG9Gb2N1cyB2YWx1ZT17MH0gb25DaGFuZ2U9e29uQ2hhbmdlSWRJdGVtfSB2YWx1ZT17aWRJdGVtfSBpbnB1dFByb3BzPXt7IG5hbWU6ICdpZEl0ZW0nLCBpZDogJ2lkSXRlbScgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17MH0gdmFsdWU9ezB9PlNlbGVjY2lvbmVlZWVlIGVsIGl0ZW08L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RhSXRlbXMubGVuZ3RoID4gMCA/IGxpc3RhSXRlbXMubWFwKChpdGVtKSA9PiA8TWVudUl0ZW0ga2V5PXtpdGVtLmlkfSB2YWx1ZT17aXRlbS5pZH0+e2l0ZW0ubm9tYnJlfTwvTWVudUl0ZW0+KSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRtaW5TdWJJdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAge2lkSXRlbSA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3ViaXRlbXMgc3ViaXRlbXM9e3N1Yml0ZW1zfSBnZXRzdWJJdGVtcz17Z2V0c3ViSXRlbXN9IGlkSXRlbT17aWRJdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNlbGVjY2lvbmEgdW4gaXRlbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwic2VydmVyc2lkZXByb3BzaW5kZXhcIilcclxuICAgIHZhciBwcm9wcyA9IHsgcHJvcHM6IHt9IH1cclxuXHJcbiAgICBjb25zdCByZXNTbGlkZXMgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5IT1NUX05BTUUgKyAnL2l0ZW1zJylcclxuICAgIGNvbnN0IHNsaWRlc0pzb24gPSBhd2FpdCByZXNTbGlkZXMuanNvbigpXHJcbiAgICBwcm9wcy5wcm9wcyA9IHsgaXRlbXM6IHNsaWRlc0pzb24gfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHByb3BzXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluSXRlbXMiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQWdyZWdhckl0ZW0ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBEaWFsb2csIERpYWxvZ0FjdGlvbnMsIERpYWxvZ0NvbnRlbnQsIERpYWxvZ1RpdGxlLCBGb3JtQ29udHJvbCwgSW5wdXQsIElucHV0TGFiZWwsIE1lbnVJdGVtLCBTZWxlY3QgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbnVldm9NZW5zYWplLCAgdGlwb3NBbGVydGFzIH0gZnJvbSAnLi4vSW5pY2lhbGl6ZWQvVG9hc3QnXHJcbmNvbnN0IHN1cGVyYWdlbnQgPSByZXF1aXJlKCdzdXBlcmFnZW50Jyk7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBBZ3JlZ2FySXRlbSA9IChwcm9wcykgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtub21icmUsIHNldE5vbWJyZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2Rlc2NyaXBjaW9uLCBzZXREZXNjcmlwY2lvbl0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZU5vbWJyZShlKSB7XHJcbiAgICAgICAgc2V0Tm9tYnJlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VEZXNjcmlwY2lvbihlKSB7XHJcbiAgICAgICAgc2V0RGVzY3JpcGNpb24oZS50YXJnZXQudmFsdWUpXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrT3BlbigpIHtcclxuICAgICAgICBzZXRPcGVuKHRydWUpXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrQ2xvc2UoKSB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSlcclxuICAgICAgICBzZXROb21icmUoXCJcIilcclxuICAgICAgICBzZXREZXNjcmlwY2lvbihcIlwiKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGFySW5mbygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9tYnJlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcIk5vIGhhcyBpbmdyZXNhZG8gdW4gbm9tYnJlXCIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcGNpb24gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIk5vIGhhcyBpbmdyZXNhZG8gdW5hIGRlc2NyaXBjaW9uIHBhcmEgZWwgaXRlbVwiKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ3VhcmRhcihub21icmUsIGRlc2NyaXBjaW9uKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzdXBlcmFnZW50XHJcbiAgICAgICAgICAgICAgICAucG9zdChwcm9jZXNzLmVudi5IT1NUX05BTUUgKyAnL2NyZWFySXRlbScpXHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7IG5vbWJyZTogbm9tYnJlLCBkZXNjcmlwY2lvbjogZGVzY3JpcGNpb24gfSkgLy8gc2VuZHMgYSBKU09OIHBvc3QgYm9keVxyXG4gICAgICAgICAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXHJcbiAgICAgICAgICAgICAgICAuc2V0KCdhY2NlcHQnLCAnanNvbicpXHJcbiAgICAgICAgICAgICAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycikgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoKSB7XHJcbiAgICAgICAgbnVldm9NZW5zYWplKHRpcG9zQWxlcnRhcy5jYXJnYW5kbywgXCJDcmVhbmRvIEFsdW1ub1wiKVxyXG4gICAgICAgIHZhbGlkYXJJbmZvKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGd1YXJkYXIobm9tYnJlLCBkZXNjcmlwY2lvbikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBudWV2b01lbnNhamUodGlwb3NBbGVydGFzLmNhcmdhZG9TdWNjZXNzLCBcIlJlZ2lzdHJvIGV4aXRvc29cIilcclxuICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgcHJvcHMuZ2V0SXRlbXMoKVxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBudWV2b01lbnNhamUodGlwb3NBbGVydGFzLmNhcmdhZG9FcnJvciwgZXJyb3IsIDMwMDApXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBudWV2b01lbnNhamUodGlwb3NBbGVydGFzLmNhcmdhZG9FcnJvciwgZXJyb3IsIDMwMDApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmVnYXJBZG1pblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrT3BlbigpfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFncmVnYXJcIj4rPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dG9cIj5BZ3JlZ2FyIGl0ZW08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aD1cInhzXCJcclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtYXgtd2lkdGgtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwibWF4LXdpZHRoLWRpYWxvZy10aXRsZVwiPjxkaXYgY2xhc3NOYW1lPVwidGl0dWxvQWdyZWdhckFjdGl2aWRhZFwiPk51ZXZvIEFsdW1ubzwvZGl2PjwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm11bGFyaW9VbmlTdGVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRmb3JtXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5vbWJyZSBpdGVtXCIgdmFsdWU9e25vbWJyZX0gbmFtZT1cInNldE5vbWJyZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZU5vbWJyZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBjbGFzc05hbWU9XCJpbnB1dGZvcm1cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcGNpw7NuXCIgdmFsdWU9e2Rlc2NyaXBjaW9ufSBuYW1lPVwic2V0RGVzY3JpcGNpb25cIiBvbkNoYW5nZT17b25DaGFuZ2VEZXNjcmlwY2lvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gb25TdWJtaXQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVDbGlja0Nsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2VycmFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFncmVnYXJJdGVtIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FncmVnYXJTdWJpdGVtLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRGlhbG9nLCBEaWFsb2dBY3Rpb25zLCBEaWFsb2dDb250ZW50LCBEaWFsb2dUaXRsZSwgRm9ybUNvbnRyb2wsIElucHV0LCBJbnB1dExhYmVsLCBNZW51SXRlbSwgU2VsZWN0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG51ZXZvTWVuc2FqZSwgIHRpcG9zQWxlcnRhcyB9IGZyb20gJy4uL0luaWNpYWxpemVkL1RvYXN0J1xyXG5jb25zdCBzdXBlcmFnZW50ID0gcmVxdWlyZSgnc3VwZXJhZ2VudCcpO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgQWdyZWdhclN1Yml0ZW0gPSAocHJvcHMpID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdmFsb3IsIHNldFZhbG9yXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbcHVudGFqZSwgc2V0UHVudGFqZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZVZhbG9yKGUpIHtcclxuICAgICAgICBzZXRWYWxvcihlLnRhcmdldC52YWx1ZSlcclxuICAgIH07XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlUHVudGFqZShlKSB7XHJcbiAgICAgICAgc2V0UHVudGFqZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPcGVuKCkge1xyXG4gICAgICAgIHNldE9wZW4odHJ1ZSlcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tDbG9zZSgpIHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKVxyXG4gICAgICAgIHNldFZhbG9yKFwiXCIpXHJcbiAgICAgICAgc2V0UHVudGFqZShcIlwiKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGFySW5mbygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsb3IgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTm8gaGFzIGluZ3Jlc2FkbyB1biB2YWxvclwiKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHB1bnRhamUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIk5vIGhhcyBpbmdyZXNhZG8gdW4gcHVudGFqZSBwYXJhIGVsIGl0ZW1cIilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4cHIgPSAvXlswLTldKyhbLl1bMC05XSspPyQvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4cHIudGVzdChwdW50YWplKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJFbCBwdW50YWplIGRlYmUgY29udGVuZXIgc29sb3MgbnVtZXJvcyBlbiBmb3JtYXRvIDI1LDI1XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBndWFyZGFyKHZhbG9yLCBwdW50YWplLCBpZEl0ZW0pIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHN1cGVyYWdlbnRcclxuICAgICAgICAgICAgICAgIC5wb3N0KHByb2Nlc3MuZW52LkhPU1RfTkFNRSArICcvY3JlYXJTdWJpdGVtJylcclxuICAgICAgICAgICAgICAgIC5zZW5kKHsgdmFsb3I6IHZhbG9yLCBwdW50YWplOiBwdW50YWplLCBpZEl0ZW06IGlkSXRlbSB9KSAvLyBzZW5kcyBhIEpTT04gcG9zdCBib2R5XHJcbiAgICAgICAgICAgICAgICAuc2V0KCdYLUFQSS1LZXknLCAnZm9vYmFyJylcclxuICAgICAgICAgICAgICAgIC5zZXQoJ2FjY2VwdCcsICdqc29uJylcclxuICAgICAgICAgICAgICAgIC5lbmQoKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKSAgICBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdCgpIHtcclxuICAgICAgICBudWV2b01lbnNhamUodGlwb3NBbGVydGFzLmNhcmdhbmRvLCBcIkNyZWFuZG8gc3ViaXRlbVwiKVxyXG4gICAgICAgIHZhbGlkYXJJbmZvKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGd1YXJkYXIodmFsb3IsIHB1bnRhamUsIHByb3BzLmlkSXRlbSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5nZXRzdWJJdGVtcygpXHJcbiAgICAgICAgICAgICAgICBudWV2b01lbnNhamUodGlwb3NBbGVydGFzLmNhcmdhZG9TdWNjZXNzLCBcIlJlZ2lzdHJvIGV4aXRvc29cIilcclxuICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrQ2xvc2UoKVxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBudWV2b01lbnNhamUodGlwb3NBbGVydGFzLmNhcmdhZG9FcnJvciwgZXJyb3IsIDMwMDApXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBudWV2b01lbnNhamUodGlwb3NBbGVydGFzLmNhcmdhZG9FcnJvciwgZXJyb3IsIDMwMDApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWdyZWdhclN1Yml0ZW19IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrT3BlbigpfT5BZ3JlZ2FyIHN1Yml0ZW08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG1heFdpZHRoPVwieHNcIlxyXG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1heC13aWR0aC1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJtYXgtd2lkdGgtZGlhbG9nLXRpdGxlXCI+PGRpdiBjbGFzc05hbWU9XCJ0aXR1bG9BZ3JlZ2FyQWN0aXZpZGFkXCI+TnVldm8gc3ViaXRlbTwvZGl2PjwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm11bGFyaW9VbmlTdGVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRmb3JtXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlZhbG9yIFwiIHZhbHVlPXt2YWxvcn0gbmFtZT1cInNldE5vbWJyZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZVZhbG9yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGNsYXNzTmFtZT1cImlucHV0Zm9ybVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQdW50YWplXCIgdmFsdWU9e3B1bnRhamV9IG5hbWU9XCJzZXREZXNjcmlwY2lvblwiIG9uQ2hhbmdlPXtvbkNoYW5nZVB1bnRhamV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IG9uU3VibWl0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xpY2tDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENlcnJhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZ3JlZ2FyU3ViaXRlbSIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9FZGl0YXJTdWJpdGVtcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIERpYWxvZywgRGlhbG9nQWN0aW9ucywgRGlhbG9nQ29udGVudCwgRGlhbG9nVGl0bGUsIEZvcm1Db250cm9sLCBJbnB1dCwgSW5wdXRMYWJlbCwgTWVudUl0ZW0sIFNlbGVjdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBudWV2b01lbnNhamUsICB0aXBvc0FsZXJ0YXMgfSBmcm9tICcuLi9JbmljaWFsaXplZC9Ub2FzdCdcclxuY29uc3Qgc3VwZXJhZ2VudCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKTtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEVkaXRhclN1Yml0ZW1zID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt2YWxvciwgc2V0VmFsb3JdID0gdXNlU3RhdGUocHJvcHMuc3ViSXRlbS52YWxvcilcclxuICAgIGNvbnN0IFtwdW50YWplLCBzZXRQdW50YWplXSA9IHVzZVN0YXRlKHByb3BzLnN1Ykl0ZW0ucHVudGFqZSlcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VWYWxvcihlKSB7XHJcbiAgICAgICAgc2V0VmFsb3IoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZVB1bnRhamUoZSkge1xyXG4gICAgICAgIHNldFB1bnRhamUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrT3BlbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5zdWJJdGVtKVxyXG4gICAgICAgIHNldE9wZW4odHJ1ZSlcclxuICAgICAgICBzZXRWYWxvcihwcm9wcy5zdWJJdGVtLnZhbG9yKVxyXG4gICAgICAgIHNldFB1bnRhamUocHJvcHMuc3ViSXRlbS5wdW50YWplKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGlja0Nsb3NlKCkge1xyXG4gICAgICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgICAgICAgc2V0VmFsb3IoXCJcIilcclxuICAgICAgICBzZXRQdW50YWplKFwiXCIpXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWxvciA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJObyBoYXMgaW5ncmVzYWRvIHVuIHZhbG9yXCIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHVudGFqZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiTm8gaGFzIGluZ3Jlc2FkbyB1biBwdW50YWplIHBhcmEgZWwgaXRlbVwiKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXhwciA9IC9eWzAtOV0rKFsuXVswLTldKyk/JC87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhwci50ZXN0KHB1bnRhamUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcIkVsIHB1bnRhamUgZGViZSBjb250ZW5lciBzb2xvcyBudW1lcm9zIGVuIGZvcm1hdG8gMjUsMjVcIilcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGd1YXJkYXIoaWQsIHZhbG9yLCBwdW50YWplKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzdXBlcmFnZW50XHJcbiAgICAgICAgICAgICAgICAucG9zdChwcm9jZXNzLmVudi5IT1NUX05BTUUgKyAnL2VkaXRhclN1Yml0ZW0nKVxyXG4gICAgICAgICAgICAgICAgLnNlbmQoeyBpZDogaWQsIHZhbG9yOiB2YWxvciwgcHVudGFqZTogcHVudGFqZX0pIC8vIHNlbmRzIGEgSlNPTiBwb3N0IGJvZHlcclxuICAgICAgICAgICAgICAgIC5zZXQoJ1gtQVBJLUtleScsICdmb29iYXInKVxyXG4gICAgICAgICAgICAgICAgLnNldCgnYWNjZXB0JywgJ2pzb24nKVxyXG4gICAgICAgICAgICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KCkge1xyXG4gICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2FuZG8sIFwiQ3JlYW5kbyBzdWJpdGVtXCIpXHJcbiAgICAgICAgdmFsaWRhckluZm8oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZ3VhcmRhciggcHJvcHMuc3ViSXRlbS5pZCAsIHZhbG9yLCBwdW50YWplKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb3BzLmdldHN1Ykl0ZW1zKClcclxuICAgICAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb1N1Y2Nlc3MsIFwiUmVnaXN0cm8gZXhpdG9zb1wiKVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2tDbG9zZSgpXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb0Vycm9yLCBlcnJvciwgMzAwMClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb0Vycm9yLCBlcnJvciwgMzAwMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0YXJTdWJpdGVtfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGlja09wZW4oKX0gPkVkaXRhcjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg9XCJ4c1wiXHJcbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibWF4LXdpZHRoLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cIm1heC13aWR0aC1kaWFsb2ctdGl0bGVcIj48ZGl2IGNsYXNzTmFtZT1cInRpdHVsb0FncmVnYXJBY3RpdmlkYWRcIj5FZGl0YXIgc3ViaXRlbTwvZGl2PjwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm11bGFyaW9VbmlTdGVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRmb3JtXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlZhbG9yIFwiIHZhbHVlPXt2YWxvcn0gbmFtZT1cInNldE5vbWJyZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZVZhbG9yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGNsYXNzTmFtZT1cImlucHV0Zm9ybVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQdW50YWplXCIgdmFsdWU9e3B1bnRhamV9IG5hbWU9XCJzZXREZXNjcmlwY2lvblwiIG9uQ2hhbmdlPXtvbkNoYW5nZVB1bnRhamV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IG9uU3VibWl0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xpY2tDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENlcnJhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0YXJTdWJpdGVtcyIsIlxyXG5pbXBvcnQgQWdyZWdhclN1Yml0ZW0gZnJvbSBcIi4vQWdyZWdhclN1Yml0ZW1cIlxyXG5pbXBvcnQgRWRpdGFyU3ViaXRlbXMgZnJvbSBcIi4vRWRpdGFyU3ViaXRlbXNcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1N1Yml0ZW0ubW9kdWxlLnNjc3NcIlxyXG5cclxuY29uc3QgU3ViaXRlbXMgPSAoe3N1Yml0ZW1zLCBnZXRzdWJJdGVtcywgaWRJdGVtIH0pID0+IHtcclxuXHJcbiAgICB2YXIgcHVudFRvdGFsID0gMFxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlclN1Yml0ZW0gKHN1Yml0ZW0pIHtcclxuICAgICAgICBcclxuICAgICAgICBwdW50VG90YWwgPSBwdW50VG90YWwgKyBzdWJpdGVtLnB1bnRhamVcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJpdGVtfSBrZXk9e3N1Yml0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudmFsb3J9ID57c3ViaXRlbS52YWxvcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wdW50YWplfSA+e3N1Yml0ZW0ucHVudGFqZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8RWRpdGFyU3ViaXRlbXMgZ2V0c3ViSXRlbXM9e2dldHN1Ykl0ZW1zfSBzdWJJdGVtID0ge3N1Yml0ZW19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJMaXN0YVN1Yml0ZW1zIChsaXN0YSl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbGlzdGEubWFwICgoc3ViaXRlbSkgPT4gcmVuZGVyU3ViaXRlbShzdWJpdGVtKSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJpdGVtc30+XHJcbiAgICAgICAgICAgIDxBZ3JlZ2FyU3ViaXRlbSBnZXRzdWJJdGVtcz17Z2V0c3ViSXRlbXN9IGlkSXRlbSA9IHtpZEl0ZW19Lz5cclxuXHJcbiAgICAgICAgICAgIHtzdWJpdGVtcy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgIHJlbmRlckxpc3RhU3ViaXRlbXMoc3ViaXRlbXMpXHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5TaW4gc3ViaXRlbXM8L3NwYW4+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHVudGFqZVRvdGFsfT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+UHVudGFqZSB0b3RhbDogPC9zdHJvbmc+PHNwYW4+e3B1bnRUb3RhbH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ViaXRlbXNcclxuIiwiXHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBEaWFsb2csIERpYWxvZ0FjdGlvbnMsIERpYWxvZ0NvbnRlbnQsIERpYWxvZ1RpdGxlLCBGb3JtQ29udHJvbCwgSW5wdXQsIElucHV0TGFiZWwsIE1lbnVJdGVtLCBTZWxlY3QgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BZG1pbk1hcmNhcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFncmVnYXJNYXJjYSBmcm9tICcuL0FncmVnYXJNYXJjYSc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEFkbWluTWFyY2FzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtsaXN0YU1hcmNhcywgc2V0TGlzdGFNYXJjYXMgXSA9ICB1c2VTdGF0ZShbXSlcclxuICAgIC8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTE3NDQ5NzUvZW5hYmxpbmctaHR0cHMtb24tZXhwcmVzcy1qc1xyXG4gICBjb25zdCBnZXRNYXJjYXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzTWFyY2FzID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuSE9TVF9OQU1FICsgJy9tYXJjYXMnKVxyXG4gICAgICAgIGNvbnN0IG1hcmNhc0pzb24gPSBhd2FpdCByZXNNYXJjYXMuanNvbigpXHJcbiAgICAgICAgc2V0TGlzdGFNYXJjYXMobWFyY2FzSnNvbilcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldE1hcmNhcygpXHJcbiAgICB9LCBbXSApXHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyVmVudGFuYVwiPlxyXG4gICAgICAgICAgICA8QWdyZWdhck1hcmNhIGdldE1hcmNhcz17Z2V0TWFyY2FzfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRtaW5NYXJjYXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0YU1hcmNhcy5sZW5ndGh9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5NYXJjYXMiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQWdyZWdhck1hcmNhLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRGlhbG9nLCBEaWFsb2dBY3Rpb25zLCBEaWFsb2dDb250ZW50LCBEaWFsb2dUaXRsZSwgRmFiLCBGb3JtQ29udHJvbCwgSW5wdXQsIElucHV0TGFiZWwsIE1lbnVJdGVtLCBTZWxlY3QsIFRleHRGaWVsZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBudWV2b01lbnNhamUsIHRpcG9zQWxlcnRhcyB9IGZyb20gJy4uL0luaWNpYWxpemVkL1RvYXN0J1xyXG5jb25zdCBzdXBlcmFnZW50ID0gcmVxdWlyZSgnc3VwZXJhZ2VudCcpO1xyXG5pbXBvcnQgeyBDb2xvciwgQ29sb3JQaWNrZXIsIGNyZWF0ZUNvbG9yLCBpc2NvbG8gfSBmcm9tIFwibWF0ZXJpYWwtdWktY29sb3JcIjtcclxuaW1wb3J0IFdhbGxwYXBlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1dhbGxwYXBlcic7XHJcblxyXG5jb25zdCBwYWxldHRlID0gW1xyXG4gICAgJyNEMDAyMUInLCAnI0Y1QTYyMycsICcjRjhFNzFDJywgJyM4QjU3MkEnLCAnIzdFRDMyMScsICcjNDE3NTA1JywgJyNCRDEwRTAnLCAnIzkwMTNGRScsICcjNEE5MEUyJywgJyM1MEUzQzInLCAnI0I4RTk4NicsICcjMDAwMDAwJywgJyM0QTRBNEEnLCAnIzlCOUI5QicsICcjRkZGRkZGJyxcclxuXTtcclxuXHJcblxyXG5cclxuY29uc3QgQWdyZWdhck1hcmNhID0gKHByb3BzKSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW25vbWJyZSwgc2V0Tm9tYnJlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbcmVzZW5hLCBzZXRSZXNlbmFdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtpbWFnZW4sIHNldEltYWdlbl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2ltYWdlblNyYywgc2V0SW1hZ2VuU3JjXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbY29sb3JVbm8sIHNldENvbG9yVW5vXSA9IHVzZVN0YXRlKGNyZWF0ZUNvbG9yKCcjMDAwMDAwJykpXHJcbiAgICBjb25zdCBbY29sb3JEb3MsIHNldENvbG9yRG9zXSA9IHVzZVN0YXRlKGNyZWF0ZUNvbG9yKCcjMDAwMDAwJykpXHJcbiAgICBjb25zdCBbY29sb3JUcmVzLCBzZXRDb2xvclRyZXNdID0gdXNlU3RhdGUoY3JlYXRlQ29sb3IoJyMwMDAwMDAnKSlcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VOb21icmUoZSkge1xyXG4gICAgICAgIHNldE5vbWJyZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VSZXNlbmEoZSkge1xyXG4gICAgICAgIHNldFJlc2VuYShlLnRhcmdldC52YWx1ZSlcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VDb2xvclVubyhjb2xvcikge1xyXG4gICAgICAgIHNldENvbG9yVW5vKGNvbG9yKVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VDb2xvckRvcyhjb2xvcikge1xyXG4gICAgICAgIHNldENvbG9yRG9zKGNvbG9yKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZUNvbG9yVHJlcyhjb2xvcikge1xyXG4gICAgICAgIHNldENvbG9yVHJlcyhjb2xvcilcclxuICAgIH07XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrT3BlbigpIHtcclxuICAgICAgICBzZXRPcGVuKHRydWUpXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrQ2xvc2UoKSB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSlcclxuICAgICAgICBzZXROb21icmUoXCJcIilcclxuICAgICAgICBzZXRSZXNlbmEoXCJcIilcclxuICAgICAgICBzZXRDb2xvclVubyhjcmVhdGVDb2xvcignIzAwMDAwMCcpKVxyXG4gICAgICAgIHNldENvbG9yRG9zKGNyZWF0ZUNvbG9yKCcjMDAwMDAwJykpXHJcbiAgICAgICAgc2V0Q29sb3JUcmVzKGNyZWF0ZUNvbG9yKCcjMDAwMDAwJykpXHJcbiAgICAgICAgc2V0SW1hZ2VuKG51bGwpXHJcbiAgICAgICAgc2V0SW1hZ2VuU3JjKFwiXCIpXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uU2VsZWN0RmlsZUltYWdlKGUpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXNbMF0pIHtcclxuICAgICAgICAgICAgdmFyIGZpbGUgPSBlLnRhcmdldC5maWxlc1swXVxyXG5cclxuICAgICAgICAgICAgaWYgKGZpbGUudHlwZSA9PSBcImltYWdlL2pwZ1wiIHx8IGZpbGUudHlwZSA9PSBcImltYWdlL2pwZWdcIiB8fCBmaWxlLnR5cGUgPT0gXCJpbWFnZS9wbmdcIikge1xyXG4gICAgICAgICAgICAgICAgc2V0SW1hZ2VuKGZpbGUpXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNldEltYWdlblNyYyhyZWFkZXIucmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbnVldm9NZW5zYWplKHRpcG9zQWxlcnRhcy5lcnJvciwgXCJTb2xvIHNlIHBlcm1pdGUgY2FyZ2FyIGltYWdlbmVzIC0gLmpwZyAucG5nIC5qcGVnIC1cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNWYWxpZENvbG9yKGNvbG9yKSB7XHJcbiAgICAgICAgdmFyIGlzQ29sb3IgPSB0cnVlXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaXNDb2xvciA9IChjb2xvci5tYXRjaCgvXiNbQS1GMC05XXs2fSQvaSkgIT09IG51bGwgfHwgY29sb3IubWF0Y2goL14jW0EtRjAtOV17OH0kL2kpICE9PSBudWxsIHx8IGNvbG9yLm1hdGNoKC9eI1tBLUYwLTldezN9JC9pKSAhPT0gbnVsbClcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpc0NvbG9yXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub21icmUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTm8gaGFzIGluZ3Jlc2FkbyB1biBub21icmVcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNlbmEgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIk5vIGhhcyBpbmdyZXNhZG8gdW5hIHJlc2VuYSBwYXJhIGVzdGEgbWFyY2FcIilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkQ29sb3IoJyMnICsgY29sb3JVbm8uaGV4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJDb2xvciAxIG5vIHZhbGlkb1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZENvbG9yKCcjJyArIGNvbG9yRG9zLmhleCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcIkNvbG9yIDIgbm8gdmFsaWRvXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRDb2xvcignIycgKyBjb2xvclRyZXMuaGV4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcIkNvbG9yIDMgbm8gdmFsaWRvXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZW4gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJEZWJlcyBhZ3JlZ2FyIHVuIGxvZ29cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGd1YXJkYXJJbWFnZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgc3VwZXJhZ2VudFxyXG4gICAgICAgICAgICAgICAgLnBvc3QocHJvY2Vzcy5lbnYuSE9TVF9OQU1FICsgJy91cGxvYWRMb2dvTWFyY2EvJyArIG5vbWJyZSlcclxuICAgICAgICAgICAgICAgIC5hdHRhY2goJ2ltYWdlJywgaW1hZ2VuKVxyXG4gICAgICAgICAgICAgICAgLnNldCgnYWNjZXB0JywgJ2pzb24nKVxyXG4gICAgICAgICAgICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcIkVycm9yIGFsIGd1YXJkYXIgaW5mb3JtYWNpw7NuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcHVlc3RhTG9naW4gPSBKU09OLnBhcnNlKHJlcy50ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwdWVzdGFMb2dpbi5pbWFnZW4uZmlsZW5hbWUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ3VhcmRhcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGd1YXJkYXJJbWFnZW4oKS50aGVuKCh1cmwpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdXBlcmFnZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLnBvc3QocHJvY2Vzcy5lbnYuSE9TVF9OQU1FICsgJy9jcmVhck1hcmNhJylcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7IG5vbWJyZTogbm9tYnJlLCByZXNlbmE6IHJlc2VuYSwgdXJsTG9nbzogdXJsLCBjb2xvclVubzogY29sb3JVbm8uaGV4LCBjb2xvckRvczogY29sb3JEb3MuaGV4LCBjb2xvclRyZXM6IGNvbG9yVHJlcy5oZXggfSkgLy8gc2VuZHMgYSBKU09OIHBvc3QgYm9keVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXQoJ1gtQVBJLUtleScsICdmb29iYXInKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXQoJ2FjY2VwdCcsICdqc29uJylcclxuICAgICAgICAgICAgICAgICAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KCkge1xyXG4gICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2FuZG8sIFwiQ3JlYW5kbyBtYXJjYVwiKVxyXG4gICAgICAgIHZhbGlkYXJJbmZvKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGd1YXJkYXIoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG51ZXZvTWVuc2FqZSh0aXBvc0FsZXJ0YXMuY2FyZ2Fkb1N1Y2Nlc3MsIFwiUmVnaXN0cm8gZXhpdG9zb1wiKVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2tDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5nZXRNYXJjYXMoKVxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBudWV2b01lbnNhamUodGlwb3NBbGVydGFzLmNhcmdhZG9FcnJvciwgZXJyb3IsIDMwMDApXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBudWV2b01lbnNhamUodGlwb3NBbGVydGFzLmNhcmdhZG9FcnJvciwgZXJyb3IsIDMwMDApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmVnYXJBZG1pblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrT3BlbigpfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFncmVnYXJcIj4rPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dG9cIj5BZ3JlZ2FyIG1hcmNhPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg9XCJ4c1wiXHJcbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibWF4LXdpZHRoLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cIm1heC13aWR0aC1kaWFsb2ctdGl0bGVcIj48ZGl2IGNsYXNzTmFtZT1cInRpdHVsb0FncmVnYXJBY3RpdmlkYWRcIj5OdWV2YSBNYXJjYTwvZGl2PjwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm11bGFyaW9VbmlTdGVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRmb3JtXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5vbWJyZSBpdGVtXCIgdmFsdWU9e25vbWJyZX0gbmFtZT1cInNldE5vbWJyZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZU5vbWJyZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdmFsdWU9e3Jlc2VuYX0gb25DaGFuZ2U9e29uQ2hhbmdlUmVzZW5hfSBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCIgcGxhY2Vob2xkZXI9XCJSZXNlw7FhXCIgbXVsdGlsaW5lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVwbG9hZC1waG90b1wiIGNsYXNzTmFtZT1cImlucHV0Zm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1cGxvYWQtcGhvdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXBsb2FkLXBob3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RGaWxlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiYWRkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImV4dGVuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXYWxscGFwZXJJY29uIC8+IDxzcGFuPkVzY29nZXIgbG9nbyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlblNyY30gYWx0PVwiXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Zm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Db2xvciAxPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JQaWNrZXIgdmFsdWU9e2NvbG9yVW5vfSBpZD1cIm5ld0NhdGVnb3J5Q29sb3VyXCIgb25DaGFuZ2U9e29uQ2hhbmdlQ29sb3JVbm99IGZvcm1hdD1cImhleFwiIG1hcmdpbj1cImRlbnNlXCIgc2l6ZT1cInNtYWxsXCIgaGlkZVRleHRmaWVsZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Zm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Db2xvciAyPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JQaWNrZXIgdmFsdWU9e2NvbG9yRG9zfSBpZD1cIm5ld0NhdGVnb3J5Q29sb3VyXCIgb25DaGFuZ2U9e29uQ2hhbmdlQ29sb3JEb3N9IGZvcm1hdD1cImhleFwiIG1hcmdpbj1cImRlbnNlXCIgc2l6ZT1cInNtYWxsXCIgaGlkZVRleHRmaWVsZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Zm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Db2xvciAzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JQaWNrZXIgdmFsdWU9e2NvbG9yVHJlc30gaWQ9XCJuZXdDYXRlZ29yeUNvbG91clwiIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbG9yVHJlc30gZm9ybWF0PVwiaGV4XCIgbWFyZ2luPVwiZGVuc2VcIiBzaXplPVwic21hbGxcIiBoaWRlVGV4dGZpZWxkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVDbGlja0Nsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2VycmFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFncmVnYXJNYXJjYSIsImltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5mb091dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mb091dGxpbmVkJztcclxuaW1wb3J0IENoZWNrT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja091dGxpbmVkJztcclxuaW1wb3J0IFJlcG9ydFByb2JsZW1PdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlcG9ydFByb2JsZW1PdXRsaW5lZCc7XHJcbmltcG9ydCBIaWdobGlnaHRPZmZPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hpZ2hsaWdodE9mZk91dGxpbmVkJztcclxuaW1wb3J0IEJvdW5jZUxvYWRlciBmcm9tIFwicmVhY3Qtc3Bpbm5lcnMvQm91bmNlTG9hZGVyXCI7XHJcbmltcG9ydCBDbG9zZU91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VPdXRsaW5lZCc7XHJcblxyXG5cclxuXHJcblxyXG5cclxubGV0IGNhcmdhbmRvID0gbnVsbDtcclxuZXhwb3J0IGNvbnN0IHRpcG9zQWxlcnRhcyA9IHtpbmZvOiAxLCBzdWNjZXNzOiAyLCB3YXJuOiAzLCBlcnJvcjogNCwgYXV0b0Nsb3NlQ3VzdG9tOiA1LCBjYXJnYW5kbzogNiwgY2FyZ2Fkb1N1Y2Nlc3M6IDcsIGNhcmdhZG9XYXJuOiA4LCBjYXJnYWRvRXJyb3I6IDksIGNlcnJhclRvZGFzOiAxMH07XHJcblxyXG5leHBvcnQgY29uc3QgbnVldm9NZW5zYWplID0gKGljb25vLG1lbnNhamUsYXV0bykgPT57XHJcblxyXG4gICAgY29uc3Qgb3ZlcnJpZGUgPSBgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBib3JkZXItY29sb3I6IHJlZDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5gO1xyXG5cclxuXHJcbiAgICBzd2l0Y2ggKGljb25vKSB7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICB0b2FzdC5pbmZvKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxJbmZvT3V0bGluZWRJY29uIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnfX0vPlxyXG4gICAgICAgICAgICAgICAge21lbnNhamV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4se1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogYXV0b1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxDaGVja091dGxpbmVkSWNvbiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4J319Lz5cclxuICAgICAgICAgICAgICAgIHttZW5zYWplfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+LHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IGF1dG9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgdG9hc3Qud2FybihcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8UmVwb3J0UHJvYmxlbU91dGxpbmVkSWNvbiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4J319Lz5cclxuICAgICAgICAgICAgICAgIHttZW5zYWplfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+LHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IGF1dG9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhpZ2hsaWdodE9mZk91dGxpbmVkSWNvbiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4J319Lz5cclxuICAgICAgICAgICAgICAgIHttZW5zYWplfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+LHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IGF1dG9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tPdXRsaW5lZEljb24gc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCd9fS8+XHJcbiAgICAgICAgICAgICAgICB7bWVuc2FqZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2Pix7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiBhdXRvXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgIGNhcmdhbmRvID0gdG9hc3Qud2FybihcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Qm91bmNlTG9hZGVyIFxyXG4gICAgICAgICAgICAgICAgICAgIGNzcz17b3ZlcnJpZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e1wiI2ZmZlwifS8+XHJcblxyXG4gICAgICAgICAgICAgICAge21lbnNhamV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiBmYWxzZSAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgIHRvYXN0LnVwZGF0ZShjYXJnYW5kbywge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tPdXRsaW5lZEljb24gc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW5zYWplfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgIHR5cGU6IHRvYXN0LlRZUEUuU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogYXV0b1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICB0b2FzdC51cGRhdGUoY2FyZ2FuZG8sIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlcG9ydFByb2JsZW1PdXRsaW5lZEljb24gc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW5zYWplfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgIHR5cGU6IHRvYXN0LlRZUEUuV0FSTklORyxcclxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogYXV0b1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICB0b2FzdC51cGRhdGUoY2FyZ2FuZG8sIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhpZ2hsaWdodE9mZk91dGxpbmVkSWNvbiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4J319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21lbnNhamV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdG9hc3QuVFlQRS5FUlJPUixcclxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogYXV0b1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Q2xvc2VPdXRsaW5lZEljb24gc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCd9fS8+XHJcbiAgICAgICAgICAgICAgICB7bWVuc2FqZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2Pix7XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZTogcHJvcHMgPT4gdG9hc3QuZGlzbWlzcygpLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogYXV0b1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5kZXgubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBNb3RvcmN5Y2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW90b3JjeWNsZSc7XHJcbmltcG9ydCBMaXN0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdCc7XHJcbmltcG9ydCBWZXJpZmllZFVzZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WZXJpZmllZFVzZXInO1xyXG5pbXBvcnQgQ2hhdEJ1YmJsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRCdWJibGUnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5pbXBvcnQgQWRtaW5JdGVtcyBmcm9tICcuLi9Db21wb25lbnRzL0FkbWluSXRlbXMvQWRtaW5JdGVtcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQWRtaW5NYXJjYXMgZnJvbSAnLi4vQ29tcG9uZW50cy9BZG1pbk1hcmNhcy9BZG1pbk1hcmNhcyc7XHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW21lbnVTdGF0dXMsIHNldE1lbnVTdGF0dXMgXSA9ICB1c2VTdGF0ZShcIjBcIilcclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJDb250ZW5pZG8oKXtcclxuICAgICAgICBzd2l0Y2ggKG1lbnVTdGF0dXMpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8QWRtaW5NYXJjYXMgLz47XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxBZG1pbkl0ZW1zIC8+O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuPlNpbiBpbmZvcm1hY2nDs24gZW4gbWVudTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVuZWRvcn0+XHJcbiAgICAgICAgICAgIDxIZWFkIGxhbmc9XCJFU1wiPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkdVTU8gfCBBZG1pbmlzdHJhY2nDs248L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFycmliYX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz17cmVxdWlyZShcIi4uL3NjckFwcFNlcnZlci9pbWFnZXMvZm9uZG9faGVhZGVyLnBuZ1wiKX0gY2xhc3NOYW1lPXtzdHlsZXMuZm9uZG9faGVhZGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9e3JlcXVpcmUoXCIuLi9zY3JBcHBTZXJ2ZXIvaW1hZ2VzL2xvZ29fR3Vtby5wbmdcIil9IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFiYWpvfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb25kb30gLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJdGVtfSBvbkNsaWNrPXsoKSA9PiBzZXRNZW51U3RhdHVzKDEpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uTWVudUl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZlcmlmaWVkVXNlckljb24gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5NYXJjYXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW19IG9uQ2xpY2s9eygpID0+IHNldE1lbnVTdGF0dXMoMil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25NZW51SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW90b3JjeWNsZUljb24gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Nb3Rvczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbX0gb25DbGljaz17KCkgPT4gc2V0TWVudVN0YXR1cygzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbk1lbnVJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0QnViYmxlSWNvbiAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNvbWVudGFyaW9zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJdGVtfSBvbkNsaWNrPXsoKSA9PiBzZXRNZW51U3RhdHVzKDQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uTWVudUl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJY29uICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SXRlbXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVuaWRvfT5cclxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVyQ29udGVuaWRvKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWRtaW5JdGVtc1wiOiBcIkFkbWluSXRlbXNfYWRtaW5JdGVtc19fMVdiWVdcIixcblx0XCJGb3JtXCI6IFwiQWRtaW5JdGVtc19Gb3JtX18xREVEZ1wiLFxuXHRcImlucHV0Rm9ybVwiOiBcIkFkbWluSXRlbXNfaW5wdXRGb3JtX18zLXE1cVwiLFxuXHRcImFkbWluU3ViSXRlbXNcIjogXCJBZG1pbkl0ZW1zX2FkbWluU3ViSXRlbXNfXzJUNGtkXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhZ3JlZ2FyU3ViaXRlbVwiOiBcIkFncmVnYXJTdWJpdGVtX2FncmVnYXJTdWJpdGVtX18xd2tqcFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZWRpdGFyU3ViaXRlbVwiOiBcIkVkaXRhclN1Yml0ZW1zX2VkaXRhclN1Yml0ZW1fXzE3U3ZaXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdWJpdGVtc1wiOiBcIlN1Yml0ZW1fc3ViaXRlbXNfXzEtOGFyXCIsXG5cdFwic3ViaXRlbVwiOiBcIlN1Yml0ZW1fc3ViaXRlbV9fQmRNak9cIixcblx0XCJ2YWxvclwiOiBcIlN1Yml0ZW1fdmFsb3JfXzJmSlhMXCIsXG5cdFwicHVudGFqZVwiOiBcIlN1Yml0ZW1fcHVudGFqZV9fLW4xdWZcIixcblx0XCJwdW50YWplVG90YWxcIjogXCJTdWJpdGVtX3B1bnRhamVUb3RhbF9fMU4xaW9cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFkbWluTWFyY2FzXCI6IFwiQWRtaW5NYXJjYXNfYWRtaW5NYXJjYXNfX0l3enVoXCIsXG5cdFwiRm9ybVwiOiBcIkFkbWluTWFyY2FzX0Zvcm1fX1Z1OFMwXCIsXG5cdFwiaW5wdXRGb3JtXCI6IFwiQWRtaW5NYXJjYXNfaW5wdXRGb3JtX18zQ0NJLVwiLFxuXHRcImFkbWluU3ViSXRlbXNcIjogXCJBZG1pbk1hcmNhc19hZG1pblN1Ykl0ZW1zX19uSHBJaVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGVuZWRvclwiOiBcIkluZGV4X2NvbnRlbmVkb3JfXzI1QWNOXCIsXG5cdFwiYXJyaWJhXCI6IFwiSW5kZXhfYXJyaWJhX19vR1d0a1wiLFxuXHRcImFiYWpvXCI6IFwiSW5kZXhfYWJham9fX2RtOHFiXCIsXG5cdFwibWVudVwiOiBcIkluZGV4X21lbnVfXzFJZDZoXCIsXG5cdFwiZm9uZG9cIjogXCJJbmRleF9mb25kb19fM1NYT1JcIixcblx0XCJsb2dvXCI6IFwiSW5kZXhfbG9nb19fbVc5VWdcIixcblx0XCJmb25kb19oZWFkZXJcIjogXCJJbmRleF9mb25kb19oZWFkZXJfXzNMNE9OXCIsXG5cdFwiY29udGVuaWRvXCI6IFwiSW5kZXhfY29udGVuaWRvX18zTDdqaFwiLFxuXHRcIm1lbnVJdGVtXCI6IFwiSW5kZXhfbWVudUl0ZW1fXzNDellhXCIsXG5cdFwiaWNvbk1lbnVJdGVtXCI6IFwiSW5kZXhfaWNvbk1lbnVJdGVtX18zYUxqUlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ZvbmRvX2hlYWRlci0zMWE2MDIyZDUwYWMxZjU5MGFkMjEwNWFhOTY1OTQzOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbG9nb19HdW1vLWE3ZWU2ZjU4ZWNkZjVkYzgxNDE3OGRlNGI5ZjE3MGE5LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdEJ1YmJsZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrT3V0bGluZWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZU91dGxpbmVkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSGlnaGxpZ2h0T2ZmT3V0bGluZWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbmZvT3V0bGluZWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9MaXN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW90b3JjeWNsZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlcG9ydFByb2JsZW1PdXRsaW5lZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZlcmlmaWVkVXNlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1dhbGxwYXBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWF0ZXJpYWwtdWktY29sb3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNwaW5uZXJzL0JvdW5jZUxvYWRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3VwZXJhZ2VudFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==