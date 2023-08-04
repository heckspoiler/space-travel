"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Technology",{

/***/ "./pages/Technology.js":
/*!*****************************!*\
  !*** ./pages/Technology.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Technology.module.css */ \"./styles/Technology.module.css\");\n/* harmony import */ var _styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_mainSectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/mainSectionContainer */ \"./components/mainSectionContainer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst technologies = [\n    {\n        subtitle: \"the terminology...\",\n        title: \"Launch Vehicle\",\n        image: \"assets/technology/image-launch-vehicle-portrait.jpg\",\n        description: \"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. A launch system includes the launch vehicle, launch pad, vehicle assembly and fuelling systems, range safety, and other related infrastructure.\"\n    },\n    {\n        subtitle: \"the terminology...\",\n        title: \"spacereport\",\n        image: \"assets/technology/image-spaceport-portrait.jpg\",\n        description: \"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.\"\n    },\n    {\n        subtitle: \"the terminology...\",\n        title: \"space capsule\",\n        image: \"assets/technology/image-space-capsule-portrait.jpg\",\n        description: \"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.\"\n    }\n];\nfunction Technology() {\n    _s();\n    const [selectedTechnology, setSelectedTechnology] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(technologies[0]);\n    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleTechnologyClick = (technology, index)=>{\n        setSelectedTechnology(technology);\n        setSelectedIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mainSectionContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionTitle),\n                        children: \"Space Launch 101\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionLeft),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().list),\n                                children: technologies.map((technology, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"\".concat((_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().listelement), \" \").concat(index === selectedIndex ? (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().listelementActive) : \"\"),\n                                        onClick: ()=>handleTechnologyClick(technology, index),\n                                        children: index + 1\n                                    }, technology.title, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().subsectionLeft),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().subtitleLeft),\n                                        children: selectedTechnology.subtitle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleMain),\n                                        children: selectedTechnology.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().paragraph),\n                                        children: selectedTechnology.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionRight),\n                        style: {\n                            backgroundImage: \"url(\".concat(selectedTechnology.image, \")\")\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Technology, \"FpuuHZ/0GAm3KOi4wVBgzPXa+MY=\");\n_c = Technology;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Technology);\nvar _c;\n$RefreshReg$(_c, \"Technology\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9UZWNobm9sb2d5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ25CO0FBQ1M7QUFDNEI7QUFFdEUsTUFBTUksZUFBZTtJQUNuQjtRQUNFQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7SUFFQTtRQUNFSCxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7SUFFQTtRQUNFSCxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7Q0FDRDtBQUVELFNBQVNDOztJQUNQLE1BQU0sQ0FBQ0Msb0JBQW9CQyxzQkFBc0IsR0FBR1YsK0NBQVFBLENBQUNHLFlBQVksQ0FBQyxFQUFFO0lBQzVFLE1BQU0sQ0FBQ1EsZUFBZUMsaUJBQWlCLEdBQUdaLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1hLHdCQUF3QixDQUFDQyxZQUFZQztRQUN6Q0wsc0JBQXNCSTtRQUN0QkYsaUJBQWlCRztJQUNuQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXbEIsZ0ZBQWU7OzBCQUM3Qiw4REFBQ0UsMERBQU1BOzs7OzswQkFDUCw4REFBQ0Msd0VBQW9CQTs7a0NBQ25CLDhEQUFDaUI7d0JBQUdGLFdBQVdsQixtRkFBa0I7a0NBQUU7Ozs7OztrQ0FDbkMsOERBQUNzQjt3QkFBUUosV0FBV2xCLGtGQUFpQjs7MENBQ25DLDhEQUFDd0I7Z0NBQUdOLFdBQVdsQiwyRUFBVTswQ0FDdEJJLGFBQWFzQixHQUFHLENBQUMsQ0FBQ1gsWUFBWUMsc0JBQzdCLDhEQUFDVzt3Q0FFQ1QsV0FBVyxHQUNURixPQURZaEIsa0ZBQWlCLEVBQUMsS0FFL0IsT0FEQ2dCLFVBQVVKLGdCQUFnQlosd0ZBQXVCLEdBQUc7d0NBRXREOEIsU0FBUyxJQUFNaEIsc0JBQXNCQyxZQUFZQztrREFFaERBLFFBQVE7dUNBTkpELFdBQVdULEtBQUs7Ozs7Ozs7Ozs7MENBVTNCLDhEQUFDZ0I7Z0NBQVFKLFdBQVdsQixxRkFBb0I7O2tEQUN0Qyw4REFBQ2dDO3dDQUFHZCxXQUFXbEIsbUZBQWtCO2tEQUM5QlUsbUJBQW1CTCxRQUFROzs7Ozs7a0RBRTlCLDhEQUFDNkI7d0NBQUdoQixXQUFXbEIsZ0ZBQWU7a0RBQUdVLG1CQUFtQkosS0FBSzs7Ozs7O2tEQUN6RCw4REFBQzhCO3dDQUFFbEIsV0FBV2xCLGdGQUFlO2tEQUFHVSxtQkFBbUJGLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHbEUsOERBQUNjO3dCQUNDSixXQUFXbEIsbUZBQWtCO3dCQUM3QkEsT0FBTzs0QkFBRXVDLGlCQUFpQixPQUFnQyxPQUF6QjdCLG1CQUFtQkgsS0FBSyxFQUFDO3dCQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkU7R0EzQ1NFO0tBQUFBO0FBNkNULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1RlY2hub2xvZ3kuanM/NDIwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9UZWNobm9sb2d5Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IE1haW5TZWN0aW9uQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL21haW5TZWN0aW9uQ29udGFpbmVyXCI7XG5cbmNvbnN0IHRlY2hub2xvZ2llcyA9IFtcbiAge1xuICAgIHN1YnRpdGxlOiBcInRoZSB0ZXJtaW5vbG9neS4uLlwiLFxuICAgIHRpdGxlOiBcIkxhdW5jaCBWZWhpY2xlXCIsXG4gICAgaW1hZ2U6IFwiYXNzZXRzL3RlY2hub2xvZ3kvaW1hZ2UtbGF1bmNoLXZlaGljbGUtcG9ydHJhaXQuanBnXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgbGF1bmNoIHZlaGljbGUgb3IgY2FycmllciByb2NrZXQgaXMgYSByb2NrZXQtcHJvcGVsbGVkIHZlaGljbGUgdXNlZCB0byBjYXJyeSBhIHBheWxvYWQgZnJvbSBFYXJ0aCdzIHN1cmZhY2UgdG8gc3BhY2UsIHVzdWFsbHkgdG8gRWFydGggb3JiaXQgb3IgYmV5b25kLiBBIGxhdW5jaCBzeXN0ZW0gaW5jbHVkZXMgdGhlIGxhdW5jaCB2ZWhpY2xlLCBsYXVuY2ggcGFkLCB2ZWhpY2xlIGFzc2VtYmx5IGFuZCBmdWVsbGluZyBzeXN0ZW1zLCByYW5nZSBzYWZldHksIGFuZCBvdGhlciByZWxhdGVkIGluZnJhc3RydWN0dXJlLlwiLFxuICB9LFxuXG4gIHtcbiAgICBzdWJ0aXRsZTogXCJ0aGUgdGVybWlub2xvZ3kuLi5cIixcbiAgICB0aXRsZTogXCJzcGFjZXJlcG9ydFwiLFxuICAgIGltYWdlOiBcImFzc2V0cy90ZWNobm9sb2d5L2ltYWdlLXNwYWNlcG9ydC1wb3J0cmFpdC5qcGdcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBzcGFjZXBvcnQgb3IgY29zbW9kcm9tZSBpcyBhIHNpdGUgZm9yIGxhdW5jaGluZyAob3IgcmVjZWl2aW5nKSBzcGFjZWNyYWZ0LCBieSBhbmFsb2d5IHRvIHRoZSBzZWFwb3J0IGZvciBzaGlwcyBvciBhaXJwb3J0IGZvciBhaXJjcmFmdC4gQmFzZWQgaW4gdGhlIGZhbW91cyBDYXBlIENhbmF2ZXJhbCwgb3VyIHNwYWNlcG9ydCBpcyBpZGVhbGx5IHNpdHVhdGVkIHRvIHRha2UgYWR2YW50YWdlIG9mIHRoZSBFYXJ0aOKAmXMgcm90YXRpb24gZm9yIGxhdW5jaC5cIixcbiAgfSxcblxuICB7XG4gICAgc3VidGl0bGU6IFwidGhlIHRlcm1pbm9sb2d5Li4uXCIsXG4gICAgdGl0bGU6IFwic3BhY2UgY2Fwc3VsZVwiLFxuICAgIGltYWdlOiBcImFzc2V0cy90ZWNobm9sb2d5L2ltYWdlLXNwYWNlLWNhcHN1bGUtcG9ydHJhaXQuanBnXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgc3BhY2UgY2Fwc3VsZSBpcyBhbiBvZnRlbi1jcmV3ZWQgc3BhY2VjcmFmdCB0aGF0IHVzZXMgYSBibHVudC1ib2R5IHJlZW50cnkgY2Fwc3VsZSB0byByZWVudGVyIHRoZSBFYXJ0aCdzIGF0bW9zcGhlcmUgd2l0aG91dCB3aW5ncy4gT3VyIGNhcHN1bGUgaXMgd2hlcmUgeW91J2xsIHNwZW5kIHlvdXIgdGltZSBkdXJpbmcgdGhlIGZsaWdodC4gSXQgaW5jbHVkZXMgYSBzcGFjZSBneW0sIGNpbmVtYSwgYW5kIHBsZW50eSBvZiBvdGhlciBhY3Rpdml0aWVzIHRvIGtlZXAgeW91IGVudGVydGFpbmVkLlwiLFxuICB9LFxuXTtcblxuZnVuY3Rpb24gVGVjaG5vbG9neSgpIHtcbiAgY29uc3QgW3NlbGVjdGVkVGVjaG5vbG9neSwgc2V0U2VsZWN0ZWRUZWNobm9sb2d5XSA9IHVzZVN0YXRlKHRlY2hub2xvZ2llc1swXSk7XG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGhhbmRsZVRlY2hub2xvZ3lDbGljayA9ICh0ZWNobm9sb2d5LCBpbmRleCkgPT4ge1xuICAgIHNldFNlbGVjdGVkVGVjaG5vbG9neSh0ZWNobm9sb2d5KTtcbiAgICBzZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE1haW5TZWN0aW9uQ29udGFpbmVyPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS5zZWN0aW9uVGl0bGV9PlNwYWNlIExhdW5jaCAxMDE8L2gyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlLnNlY3Rpb25MZWZ0fT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZS5saXN0fT5cbiAgICAgICAgICAgIHt0ZWNobm9sb2dpZXMubWFwKCh0ZWNobm9sb2d5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e3RlY2hub2xvZ3kudGl0bGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5saXN0ZWxlbWVudH0gJHtcbiAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBzZWxlY3RlZEluZGV4ID8gc3R5bGUubGlzdGVsZW1lbnRBY3RpdmUgOiBcIlwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGVjaG5vbG9neUNsaWNrKHRlY2hub2xvZ3ksIGluZGV4KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGUuc3Vic2VjdGlvbkxlZnR9PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGUuc3VidGl0bGVMZWZ0fT5cbiAgICAgICAgICAgICAge3NlbGVjdGVkVGVjaG5vbG9neS5zdWJ0aXRsZX1cbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZS50aXRsZU1haW59PntzZWxlY3RlZFRlY2hub2xvZ3kudGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUucGFyYWdyYXBofT57c2VsZWN0ZWRUZWNobm9sb2d5LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnNlY3Rpb25SaWdodH1cbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtzZWxlY3RlZFRlY2hub2xvZ3kuaW1hZ2V9KWAgfX1cbiAgICAgICAgPjwvc2VjdGlvbj5cbiAgICAgIDwvTWFpblNlY3Rpb25Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlY2hub2xvZ3k7XG4iXSwibmFtZXMiOlsic3R5bGUiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIk1haW5TZWN0aW9uQ29udGFpbmVyIiwidGVjaG5vbG9naWVzIiwic3VidGl0bGUiLCJ0aXRsZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJUZWNobm9sb2d5Iiwic2VsZWN0ZWRUZWNobm9sb2d5Iiwic2V0U2VsZWN0ZWRUZWNobm9sb2d5Iiwic2VsZWN0ZWRJbmRleCIsInNldFNlbGVjdGVkSW5kZXgiLCJoYW5kbGVUZWNobm9sb2d5Q2xpY2siLCJ0ZWNobm9sb2d5IiwiaW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMiIsInNlY3Rpb25UaXRsZSIsInNlY3Rpb24iLCJzZWN0aW9uTGVmdCIsInVsIiwibGlzdCIsIm1hcCIsImxpIiwibGlzdGVsZW1lbnQiLCJsaXN0ZWxlbWVudEFjdGl2ZSIsIm9uQ2xpY2siLCJzdWJzZWN0aW9uTGVmdCIsImg0Iiwic3VidGl0bGVMZWZ0IiwiaDMiLCJ0aXRsZU1haW4iLCJwIiwicGFyYWdyYXBoIiwic2VjdGlvblJpZ2h0IiwiYmFja2dyb3VuZEltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Technology.js\n"));

/***/ })

});