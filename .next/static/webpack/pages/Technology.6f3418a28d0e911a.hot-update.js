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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Technology.module.css */ \"./styles/Technology.module.css\");\n/* harmony import */ var _styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_mainSectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/mainSectionContainer */ \"./components/mainSectionContainer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst technologies = [\n    {\n        subtitle: \"the terminology...\",\n        title: \"Launch Vehicle\",\n        image: \"assets/technology/image-launch-vehicle.jpeg\",\n        description: \"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. A launch system includes the launch vehicle, launch pad, vehicle assembly and fuelling systems, range safety, and other related infrastructure.\"\n    },\n    {\n        subtitle: \"the terminology...\",\n        title: \"spacereport\",\n        image: \"assets/technology/image-spaceport-landscape.jpg\",\n        description: \"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.\"\n    },\n    {\n        subtitle: \"the terminology...\",\n        title: \"space capsule\",\n        image: \"assets/technology/image-space-capsule-landscape.jpg\",\n        description: \"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.\"\n    }\n];\nfunction Technology() {\n    _s();\n    const [selectedTechnology, setSelectedTechnology] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(technologies[0]);\n    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleTechnologyClick = (technology, index)=>{\n        setSelectedTechnology(technology);\n        setSelectedIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mainSectionContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionTitle),\n                        children: \"Space Launch 101\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionLeft),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().list),\n                                children: technologies.map((technology, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"\".concat((_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().listelement), \" \").concat(index === selectedIndex ? (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().listelementActive) : \"\"),\n                                        onClick: ()=>handleTechnologyClick(technology, index),\n                                        children: selectedIndex\n                                    }, technology.title, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().subsectionLeft),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().subtitleLeft),\n                                        children: selectedTechnology.subtitle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleMain),\n                                        children: selectedTechnology.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().paragraph),\n                                        children: selectedTechnology.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionRight),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: selectedTechnology.image,\n                            alt: \"image of \".concat(selectedTechnology.name)\n                        }, void 0, false, {\n                            fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Technology, \"FpuuHZ/0GAm3KOi4wVBgzPXa+MY=\");\n_c = Technology;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Technology);\nvar _c;\n$RefreshReg$(_c, \"Technology\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9UZWNobm9sb2d5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ25CO0FBQ1M7QUFDNEI7QUFFdEUsTUFBTUksZUFBZTtJQUNuQjtRQUNFQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7SUFFQTtRQUNFSCxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7SUFFQTtRQUNFSCxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7Q0FDRDtBQUVELFNBQVNDOztJQUNQLE1BQU0sQ0FBQ0Msb0JBQW9CQyxzQkFBc0IsR0FBR1YsK0NBQVFBLENBQUNHLFlBQVksQ0FBQyxFQUFFO0lBQzVFLE1BQU0sQ0FBQ1EsZUFBZUMsaUJBQWlCLEdBQUdaLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1hLHdCQUF3QixDQUFDQyxZQUFZQztRQUN6Q0wsc0JBQXNCSTtRQUN0QkYsaUJBQWlCRztJQUNuQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXbEIsZ0ZBQWU7OzBCQUM3Qiw4REFBQ0UsMERBQU1BOzs7OzswQkFDUCw4REFBQ0Msd0VBQW9CQTs7a0NBQ25CLDhEQUFDaUI7d0JBQUdGLFdBQVdsQixtRkFBa0I7a0NBQUU7Ozs7OztrQ0FDbkMsOERBQUNzQjt3QkFBUUosV0FBV2xCLGtGQUFpQjs7MENBQ25DLDhEQUFDd0I7Z0NBQUdOLFdBQVdsQiwyRUFBVTswQ0FDdEJJLGFBQWFzQixHQUFHLENBQUMsQ0FBQ1gsWUFBWUMsc0JBQzdCLDhEQUFDVzt3Q0FFQ1QsV0FBVyxHQUNURixPQURZaEIsa0ZBQWlCLEVBQUMsS0FFL0IsT0FEQ2dCLFVBQVVKLGdCQUFnQlosd0ZBQXVCLEdBQUc7d0NBRXREOEIsU0FBUyxJQUFNaEIsc0JBQXNCQyxZQUFZQztrREFFaERKO3VDQU5JRyxXQUFXVCxLQUFLOzs7Ozs7Ozs7OzBDQVUzQiw4REFBQ2dCO2dDQUFRSixXQUFXbEIscUZBQW9COztrREFDdEMsOERBQUNnQzt3Q0FBR2QsV0FBV2xCLG1GQUFrQjtrREFDOUJVLG1CQUFtQkwsUUFBUTs7Ozs7O2tEQUU5Qiw4REFBQzZCO3dDQUFHaEIsV0FBV2xCLGdGQUFlO2tEQUFHVSxtQkFBbUJKLEtBQUs7Ozs7OztrREFDekQsOERBQUM4Qjt3Q0FBRWxCLFdBQVdsQixnRkFBZTtrREFBR1UsbUJBQW1CRixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2xFLDhEQUFDYzt3QkFBUUosV0FBV2xCLG1GQUFrQjtrQ0FDcEMsNEVBQUN1Qzs0QkFDQ0MsS0FBSzlCLG1CQUFtQkgsS0FBSzs0QkFDN0JrQyxLQUFLLFlBQW9DLE9BQXhCL0IsbUJBQW1CZ0MsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEQ7R0E3Q1NqQztLQUFBQTtBQStDVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9UZWNobm9sb2d5LmpzPzQyMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZXMvVGVjaG5vbG9neS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBNYWluU2VjdGlvbkNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9tYWluU2VjdGlvbkNvbnRhaW5lclwiO1xuXG5jb25zdCB0ZWNobm9sb2dpZXMgPSBbXG4gIHtcbiAgICBzdWJ0aXRsZTogXCJ0aGUgdGVybWlub2xvZ3kuLi5cIixcbiAgICB0aXRsZTogXCJMYXVuY2ggVmVoaWNsZVwiLFxuICAgIGltYWdlOiBcImFzc2V0cy90ZWNobm9sb2d5L2ltYWdlLWxhdW5jaC12ZWhpY2xlLmpwZWdcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBsYXVuY2ggdmVoaWNsZSBvciBjYXJyaWVyIHJvY2tldCBpcyBhIHJvY2tldC1wcm9wZWxsZWQgdmVoaWNsZSB1c2VkIHRvIGNhcnJ5IGEgcGF5bG9hZCBmcm9tIEVhcnRoJ3Mgc3VyZmFjZSB0byBzcGFjZSwgdXN1YWxseSB0byBFYXJ0aCBvcmJpdCBvciBiZXlvbmQuIEEgbGF1bmNoIHN5c3RlbSBpbmNsdWRlcyB0aGUgbGF1bmNoIHZlaGljbGUsIGxhdW5jaCBwYWQsIHZlaGljbGUgYXNzZW1ibHkgYW5kIGZ1ZWxsaW5nIHN5c3RlbXMsIHJhbmdlIHNhZmV0eSwgYW5kIG90aGVyIHJlbGF0ZWQgaW5mcmFzdHJ1Y3R1cmUuXCIsXG4gIH0sXG5cbiAge1xuICAgIHN1YnRpdGxlOiBcInRoZSB0ZXJtaW5vbG9neS4uLlwiLFxuICAgIHRpdGxlOiBcInNwYWNlcmVwb3J0XCIsXG4gICAgaW1hZ2U6IFwiYXNzZXRzL3RlY2hub2xvZ3kvaW1hZ2Utc3BhY2Vwb3J0LWxhbmRzY2FwZS5qcGdcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBzcGFjZXBvcnQgb3IgY29zbW9kcm9tZSBpcyBhIHNpdGUgZm9yIGxhdW5jaGluZyAob3IgcmVjZWl2aW5nKSBzcGFjZWNyYWZ0LCBieSBhbmFsb2d5IHRvIHRoZSBzZWFwb3J0IGZvciBzaGlwcyBvciBhaXJwb3J0IGZvciBhaXJjcmFmdC4gQmFzZWQgaW4gdGhlIGZhbW91cyBDYXBlIENhbmF2ZXJhbCwgb3VyIHNwYWNlcG9ydCBpcyBpZGVhbGx5IHNpdHVhdGVkIHRvIHRha2UgYWR2YW50YWdlIG9mIHRoZSBFYXJ0aOKAmXMgcm90YXRpb24gZm9yIGxhdW5jaC5cIixcbiAgfSxcblxuICB7XG4gICAgc3VidGl0bGU6IFwidGhlIHRlcm1pbm9sb2d5Li4uXCIsXG4gICAgdGl0bGU6IFwic3BhY2UgY2Fwc3VsZVwiLFxuICAgIGltYWdlOiBcImFzc2V0cy90ZWNobm9sb2d5L2ltYWdlLXNwYWNlLWNhcHN1bGUtbGFuZHNjYXBlLmpwZ1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIHNwYWNlIGNhcHN1bGUgaXMgYW4gb2Z0ZW4tY3Jld2VkIHNwYWNlY3JhZnQgdGhhdCB1c2VzIGEgYmx1bnQtYm9keSByZWVudHJ5IGNhcHN1bGUgdG8gcmVlbnRlciB0aGUgRWFydGgncyBhdG1vc3BoZXJlIHdpdGhvdXQgd2luZ3MuIE91ciBjYXBzdWxlIGlzIHdoZXJlIHlvdSdsbCBzcGVuZCB5b3VyIHRpbWUgZHVyaW5nIHRoZSBmbGlnaHQuIEl0IGluY2x1ZGVzIGEgc3BhY2UgZ3ltLCBjaW5lbWEsIGFuZCBwbGVudHkgb2Ygb3RoZXIgYWN0aXZpdGllcyB0byBrZWVwIHlvdSBlbnRlcnRhaW5lZC5cIixcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIFRlY2hub2xvZ3koKSB7XG4gIGNvbnN0IFtzZWxlY3RlZFRlY2hub2xvZ3ksIHNldFNlbGVjdGVkVGVjaG5vbG9neV0gPSB1c2VTdGF0ZSh0ZWNobm9sb2dpZXNbMF0pO1xuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVUZWNobm9sb2d5Q2xpY2sgPSAodGVjaG5vbG9neSwgaW5kZXgpID0+IHtcbiAgICBzZXRTZWxlY3RlZFRlY2hub2xvZ3kodGVjaG5vbG9neSk7XG4gICAgc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxNYWluU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuc2VjdGlvblRpdGxlfT5TcGFjZSBMYXVuY2ggMTAxPC9oMj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZS5zZWN0aW9uTGVmdH0+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGUubGlzdH0+XG4gICAgICAgICAgICB7dGVjaG5vbG9naWVzLm1hcCgodGVjaG5vbG9neSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXt0ZWNobm9sb2d5LnRpdGxlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUubGlzdGVsZW1lbnR9ICR7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9PT0gc2VsZWN0ZWRJbmRleCA/IHN0eWxlLmxpc3RlbGVtZW50QWN0aXZlIDogXCJcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRlY2hub2xvZ3lDbGljayh0ZWNobm9sb2d5LCBpbmRleCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJbmRleH1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZS5zdWJzZWN0aW9uTGVmdH0+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZS5zdWJ0aXRsZUxlZnR9PlxuICAgICAgICAgICAgICB7c2VsZWN0ZWRUZWNobm9sb2d5LnN1YnRpdGxlfVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlLnRpdGxlTWFpbn0+e3NlbGVjdGVkVGVjaG5vbG9neS50aXRsZX08L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5wYXJhZ3JhcGh9PntzZWxlY3RlZFRlY2hub2xvZ3kuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlLnNlY3Rpb25SaWdodH0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtzZWxlY3RlZFRlY2hub2xvZ3kuaW1hZ2V9XG4gICAgICAgICAgICBhbHQ9e2BpbWFnZSBvZiAke3NlbGVjdGVkVGVjaG5vbG9neS5uYW1lfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9NYWluU2VjdGlvbkNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVjaG5vbG9neTtcbiJdLCJuYW1lcyI6WyJzdHlsZSIsInVzZVN0YXRlIiwiSGVhZGVyIiwiTWFpblNlY3Rpb25Db250YWluZXIiLCJ0ZWNobm9sb2dpZXMiLCJzdWJ0aXRsZSIsInRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsIlRlY2hub2xvZ3kiLCJzZWxlY3RlZFRlY2hub2xvZ3kiLCJzZXRTZWxlY3RlZFRlY2hub2xvZ3kiLCJzZWxlY3RlZEluZGV4Iiwic2V0U2VsZWN0ZWRJbmRleCIsImhhbmRsZVRlY2hub2xvZ3lDbGljayIsInRlY2hub2xvZ3kiLCJpbmRleCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgyIiwic2VjdGlvblRpdGxlIiwic2VjdGlvbiIsInNlY3Rpb25MZWZ0IiwidWwiLCJsaXN0IiwibWFwIiwibGkiLCJsaXN0ZWxlbWVudCIsImxpc3RlbGVtZW50QWN0aXZlIiwib25DbGljayIsInN1YnNlY3Rpb25MZWZ0IiwiaDQiLCJzdWJ0aXRsZUxlZnQiLCJoMyIsInRpdGxlTWFpbiIsInAiLCJwYXJhZ3JhcGgiLCJzZWN0aW9uUmlnaHQiLCJpbWciLCJzcmMiLCJhbHQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Technology.js\n"));

/***/ })

});