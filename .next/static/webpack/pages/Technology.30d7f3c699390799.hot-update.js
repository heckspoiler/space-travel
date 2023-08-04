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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Technology.module.css */ \"./styles/Technology.module.css\");\n/* harmony import */ var _styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_mainSectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/mainSectionContainer */ \"./components/mainSectionContainer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst technologies = [\n    {\n        subtitle: \"the terminology...\",\n        title: \"Launch Vehicle\",\n        image: \"assets/technology/image-launch-vehicle-portrait.jpg\",\n        description: \"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. A launch system includes the launch vehicle, launch pad, vehicle assembly and fuelling systems, range safety, and other related infrastructure.\"\n    },\n    {\n        subtitle: \"the terminology...\",\n        title: \"spacereport\",\n        image: \"assets/technology/image-spaceport-portrait.jpg\",\n        description: \"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.\"\n    },\n    {\n        subtitle: \"the terminology...\",\n        title: \"space capsule\",\n        image: \"assets/technology/image-space-capsule-portrait.jpg\",\n        description: \"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.\"\n    }\n];\nfunction Technology() {\n    _s();\n    const [selectedTechnology, setSelectedTechnology] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(technologies[0]);\n    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleTechnologyClick = (technology, index)=>{\n        setSelectedTechnology(technology);\n        setSelectedIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mainSectionContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                style: {\n                    flexDirection: \"column reverse !important\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionTitle),\n                        children: \"Space Launch 101\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionLeft),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().list),\n                                children: technologies.map((technology, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"\".concat((_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().listelement), \" \").concat(index === selectedIndex ? (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().listelementActive) : \"\"),\n                                        onClick: ()=>handleTechnologyClick(technology, index),\n                                        children: index + 1\n                                    }, technology.title, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().subsectionLeft),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().subtitleLeft),\n                                        children: selectedTechnology.subtitle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleMain),\n                                        children: selectedTechnology.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().paragraph),\n                                        children: selectedTechnology.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionRight),\n                        style: {\n                            backgroundImage: \"url(\".concat(selectedTechnology.image, \")\")\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Technology.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Technology, \"FpuuHZ/0GAm3KOi4wVBgzPXa+MY=\");\n_c = Technology;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Technology);\nvar _c;\n$RefreshReg$(_c, \"Technology\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9UZWNobm9sb2d5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ25CO0FBQ1M7QUFDNEI7QUFFdEUsTUFBTUksZUFBZTtJQUNuQjtRQUNFQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7SUFFQTtRQUNFSCxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7SUFFQTtRQUNFSCxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7Q0FDRDtBQUVELFNBQVNDOztJQUNQLE1BQU0sQ0FBQ0Msb0JBQW9CQyxzQkFBc0IsR0FBR1YsK0NBQVFBLENBQUNHLFlBQVksQ0FBQyxFQUFFO0lBQzVFLE1BQU0sQ0FBQ1EsZUFBZUMsaUJBQWlCLEdBQUdaLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1hLHdCQUF3QixDQUFDQyxZQUFZQztRQUN6Q0wsc0JBQXNCSTtRQUN0QkYsaUJBQWlCRztJQUNuQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXbEIsZ0ZBQWU7OzBCQUM3Qiw4REFBQ0UsMERBQU1BOzs7OzswQkFDUCw4REFBQ0Msd0VBQW9CQTtnQkFDbkJILE9BQU87b0JBQUVvQixlQUFlO2dCQUE0Qjs7a0NBRXBELDhEQUFDQzt3QkFBR0gsV0FBV2xCLG1GQUFrQjtrQ0FBRTs7Ozs7O2tDQUNuQyw4REFBQ3VCO3dCQUFRTCxXQUFXbEIsa0ZBQWlCOzswQ0FDbkMsOERBQUN5QjtnQ0FBR1AsV0FBV2xCLDJFQUFVOzBDQUN0QkksYUFBYXVCLEdBQUcsQ0FBQyxDQUFDWixZQUFZQyxzQkFDN0IsOERBQUNZO3dDQUVDVixXQUFXLEdBQ1RGLE9BRFloQixrRkFBaUIsRUFBQyxLQUUvQixPQURDZ0IsVUFBVUosZ0JBQWdCWix3RkFBdUIsR0FBRzt3Q0FFdEQrQixTQUFTLElBQU1qQixzQkFBc0JDLFlBQVlDO2tEQUVoREEsUUFBUTt1Q0FOSkQsV0FBV1QsS0FBSzs7Ozs7Ozs7OzswQ0FVM0IsOERBQUNpQjtnQ0FBUUwsV0FBV2xCLHFGQUFvQjs7a0RBQ3RDLDhEQUFDaUM7d0NBQUdmLFdBQVdsQixtRkFBa0I7a0RBQzlCVSxtQkFBbUJMLFFBQVE7Ozs7OztrREFFOUIsOERBQUM4Qjt3Q0FBR2pCLFdBQVdsQixnRkFBZTtrREFBR1UsbUJBQW1CSixLQUFLOzs7Ozs7a0RBQ3pELDhEQUFDK0I7d0NBQUVuQixXQUFXbEIsZ0ZBQWU7a0RBQUdVLG1CQUFtQkYsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdsRSw4REFBQ2U7d0JBQ0NMLFdBQVdsQixtRkFBa0I7d0JBQzdCQSxPQUFPOzRCQUFFd0MsaUJBQWlCLE9BQWdDLE9BQXpCOUIsbUJBQW1CSCxLQUFLLEVBQUM7d0JBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2RTtHQTdDU0U7S0FBQUE7QUErQ1QsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVGVjaG5vbG9neS5qcz80MjBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL1RlY2hub2xvZ3kubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgTWFpblNlY3Rpb25Db250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFpblNlY3Rpb25Db250YWluZXJcIjtcblxuY29uc3QgdGVjaG5vbG9naWVzID0gW1xuICB7XG4gICAgc3VidGl0bGU6IFwidGhlIHRlcm1pbm9sb2d5Li4uXCIsXG4gICAgdGl0bGU6IFwiTGF1bmNoIFZlaGljbGVcIixcbiAgICBpbWFnZTogXCJhc3NldHMvdGVjaG5vbG9neS9pbWFnZS1sYXVuY2gtdmVoaWNsZS1wb3J0cmFpdC5qcGdcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBsYXVuY2ggdmVoaWNsZSBvciBjYXJyaWVyIHJvY2tldCBpcyBhIHJvY2tldC1wcm9wZWxsZWQgdmVoaWNsZSB1c2VkIHRvIGNhcnJ5IGEgcGF5bG9hZCBmcm9tIEVhcnRoJ3Mgc3VyZmFjZSB0byBzcGFjZSwgdXN1YWxseSB0byBFYXJ0aCBvcmJpdCBvciBiZXlvbmQuIEEgbGF1bmNoIHN5c3RlbSBpbmNsdWRlcyB0aGUgbGF1bmNoIHZlaGljbGUsIGxhdW5jaCBwYWQsIHZlaGljbGUgYXNzZW1ibHkgYW5kIGZ1ZWxsaW5nIHN5c3RlbXMsIHJhbmdlIHNhZmV0eSwgYW5kIG90aGVyIHJlbGF0ZWQgaW5mcmFzdHJ1Y3R1cmUuXCIsXG4gIH0sXG5cbiAge1xuICAgIHN1YnRpdGxlOiBcInRoZSB0ZXJtaW5vbG9neS4uLlwiLFxuICAgIHRpdGxlOiBcInNwYWNlcmVwb3J0XCIsXG4gICAgaW1hZ2U6IFwiYXNzZXRzL3RlY2hub2xvZ3kvaW1hZ2Utc3BhY2Vwb3J0LXBvcnRyYWl0LmpwZ1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIHNwYWNlcG9ydCBvciBjb3Ntb2Ryb21lIGlzIGEgc2l0ZSBmb3IgbGF1bmNoaW5nIChvciByZWNlaXZpbmcpIHNwYWNlY3JhZnQsIGJ5IGFuYWxvZ3kgdG8gdGhlIHNlYXBvcnQgZm9yIHNoaXBzIG9yIGFpcnBvcnQgZm9yIGFpcmNyYWZ0LiBCYXNlZCBpbiB0aGUgZmFtb3VzIENhcGUgQ2FuYXZlcmFsLCBvdXIgc3BhY2Vwb3J0IGlzIGlkZWFsbHkgc2l0dWF0ZWQgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgdGhlIEVhcnRo4oCZcyByb3RhdGlvbiBmb3IgbGF1bmNoLlwiLFxuICB9LFxuXG4gIHtcbiAgICBzdWJ0aXRsZTogXCJ0aGUgdGVybWlub2xvZ3kuLi5cIixcbiAgICB0aXRsZTogXCJzcGFjZSBjYXBzdWxlXCIsXG4gICAgaW1hZ2U6IFwiYXNzZXRzL3RlY2hub2xvZ3kvaW1hZ2Utc3BhY2UtY2Fwc3VsZS1wb3J0cmFpdC5qcGdcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBzcGFjZSBjYXBzdWxlIGlzIGFuIG9mdGVuLWNyZXdlZCBzcGFjZWNyYWZ0IHRoYXQgdXNlcyBhIGJsdW50LWJvZHkgcmVlbnRyeSBjYXBzdWxlIHRvIHJlZW50ZXIgdGhlIEVhcnRoJ3MgYXRtb3NwaGVyZSB3aXRob3V0IHdpbmdzLiBPdXIgY2Fwc3VsZSBpcyB3aGVyZSB5b3UnbGwgc3BlbmQgeW91ciB0aW1lIGR1cmluZyB0aGUgZmxpZ2h0LiBJdCBpbmNsdWRlcyBhIHNwYWNlIGd5bSwgY2luZW1hLCBhbmQgcGxlbnR5IG9mIG90aGVyIGFjdGl2aXRpZXMgdG8ga2VlcCB5b3UgZW50ZXJ0YWluZWQuXCIsXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBUZWNobm9sb2d5KCkge1xuICBjb25zdCBbc2VsZWN0ZWRUZWNobm9sb2d5LCBzZXRTZWxlY3RlZFRlY2hub2xvZ3ldID0gdXNlU3RhdGUodGVjaG5vbG9naWVzWzBdKTtcbiAgY29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlVGVjaG5vbG9neUNsaWNrID0gKHRlY2hub2xvZ3ksIGluZGV4KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRUZWNobm9sb2d5KHRlY2hub2xvZ3kpO1xuICAgIHNldFNlbGVjdGVkSW5kZXgoaW5kZXgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWFpblNlY3Rpb25Db250YWluZXJcbiAgICAgICAgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogXCJjb2x1bW4gcmV2ZXJzZSAhaW1wb3J0YW50XCIgfX1cbiAgICAgID5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuc2VjdGlvblRpdGxlfT5TcGFjZSBMYXVuY2ggMTAxPC9oMj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZS5zZWN0aW9uTGVmdH0+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGUubGlzdH0+XG4gICAgICAgICAgICB7dGVjaG5vbG9naWVzLm1hcCgodGVjaG5vbG9neSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXt0ZWNobm9sb2d5LnRpdGxlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUubGlzdGVsZW1lbnR9ICR7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9PT0gc2VsZWN0ZWRJbmRleCA/IHN0eWxlLmxpc3RlbGVtZW50QWN0aXZlIDogXCJcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRlY2hub2xvZ3lDbGljayh0ZWNobm9sb2d5LCBpbmRleCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlLnN1YnNlY3Rpb25MZWZ0fT5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlLnN1YnRpdGxlTGVmdH0+XG4gICAgICAgICAgICAgIHtzZWxlY3RlZFRlY2hub2xvZ3kuc3VidGl0bGV9XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGUudGl0bGVNYWlufT57c2VsZWN0ZWRUZWNobm9sb2d5LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnBhcmFncmFwaH0+e3NlbGVjdGVkVGVjaG5vbG9neS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5zZWN0aW9uUmlnaHR9XG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c2VsZWN0ZWRUZWNobm9sb2d5LmltYWdlfSlgIH19XG4gICAgICAgID48L3NlY3Rpb24+XG4gICAgICA8L01haW5TZWN0aW9uQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUZWNobm9sb2d5O1xuIl0sIm5hbWVzIjpbInN0eWxlIiwidXNlU3RhdGUiLCJIZWFkZXIiLCJNYWluU2VjdGlvbkNvbnRhaW5lciIsInRlY2hub2xvZ2llcyIsInN1YnRpdGxlIiwidGl0bGUiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiVGVjaG5vbG9neSIsInNlbGVjdGVkVGVjaG5vbG9neSIsInNldFNlbGVjdGVkVGVjaG5vbG9neSIsInNlbGVjdGVkSW5kZXgiLCJzZXRTZWxlY3RlZEluZGV4IiwiaGFuZGxlVGVjaG5vbG9neUNsaWNrIiwidGVjaG5vbG9neSIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiZmxleERpcmVjdGlvbiIsImgyIiwic2VjdGlvblRpdGxlIiwic2VjdGlvbiIsInNlY3Rpb25MZWZ0IiwidWwiLCJsaXN0IiwibWFwIiwibGkiLCJsaXN0ZWxlbWVudCIsImxpc3RlbGVtZW50QWN0aXZlIiwib25DbGljayIsInN1YnNlY3Rpb25MZWZ0IiwiaDQiLCJzdWJ0aXRsZUxlZnQiLCJoMyIsInRpdGxlTWFpbiIsInAiLCJwYXJhZ3JhcGgiLCJzZWN0aW9uUmlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Technology.js\n"));

/***/ })

});