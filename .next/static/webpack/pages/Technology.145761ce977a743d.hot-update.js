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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Technology.module.css */ \"./styles/Technology.module.css\");\n/* harmony import */ var _styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_mainSectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/mainSectionContainer */ \"./components/mainSectionContainer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst technologies = [\n    {\n        subtitle: \"the terminology...\",\n        title: \"Launch Vehicle\",\n        image: \"assets/technology/image-launch-vehicle-portrait.jpg\",\n        imageTablet: \"assets/technology/image-launch-vehicle-landscape.jpg\",\n        description: \"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!\"\n    },\n    {\n        subtitle: \"the terminology...\",\n        title: \"spacereport\",\n        image: \"assets/technology/image-spaceport-portrait.jpg\",\n        imageTablet: \"assets/technology/image-spaceport-landscape.jpg\",\n        description: \"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.\"\n    },\n    {\n        subtitle: \"the terminology...\",\n        title: \"space capsule\",\n        image: \"assets/technology/image-space-capsule-portrait.jpg\",\n        imageTablet: \"assets/technology/image-launch-space-capsule-landscape.jpg\",\n        description: \"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.\"\n    }\n];\nfunction Technology() {\n    _s();\n    const [selectedTechnology, setSelectedTechnology] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(technologies[0]);\n    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(selectedTechnology.image);\n    const handleTechnologyClick = (technology, index)=>{\n        setSelectedTechnology(technology);\n        setSelectedIndex(index);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function handleResize() {\n            if (window.innerWidth <= 850) {\n                setSelectedImage(selectedTechnology.imageTablet);\n            } else {\n                setSelectedImage(selectedTechnology.image);\n            }\n        }\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, [\n        selectedTechnology\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space_travel/space-travel/pages/Technology.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mainSectionContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                reverse: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionTitle),\n                        children: \"Space Launch 101\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space_travel/space-travel/pages/Technology.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionLeft),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().list),\n                                children: technologies.map((technology, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"\".concat((_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().listelement), \" \").concat(index === selectedIndex ? (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().listelementActive) : \"\"),\n                                        onClick: ()=>handleTechnologyClick(technology, index),\n                                        children: index + 1\n                                    }, technology.title, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space_travel/space-travel/pages/Technology.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/Carlito/Desktop/repos/space_travel/space-travel/pages/Technology.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().subsectionLeft),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().subtitleLeft),\n                                        children: selectedTechnology.subtitle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space_travel/space-travel/pages/Technology.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleMain),\n                                        children: selectedTechnology.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space_travel/space-travel/pages/Technology.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().paragraph),\n                                        children: selectedTechnology.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space_travel/space-travel/pages/Technology.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Carlito/Desktop/repos/space_travel/space-travel/pages/Technology.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space_travel/space-travel/pages/Technology.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_Technology_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionRight),\n                        style: {\n                            backgroundImage: \"url(\".concat(selectedTechnology.image, \")\")\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space_travel/space-travel/pages/Technology.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Carlito/Desktop/repos/space_travel/space-travel/pages/Technology.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Carlito/Desktop/repos/space_travel/space-travel/pages/Technology.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Technology, \"tW9PJeg2FSIMNblA87ZNepLcAFg=\");\n_c = Technology;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Technology);\nvar _c;\n$RefreshReg$(_c, \"Technology\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9UZWNobm9sb2d5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ1I7QUFDRjtBQUM0QjtBQUV0RSxNQUFNSyxlQUFlO0lBQ25CO1FBQ0VDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsYUFDRTtJQUNKO0lBRUE7UUFDRUosVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxhQUNFO0lBQ0o7SUFFQTtRQUNFSixVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLGFBQ0U7SUFDSjtDQUNEO0FBRUQsU0FBU0M7O0lBQ1AsTUFBTSxDQUFDQyxvQkFBb0JDLHNCQUFzQixHQUFHWiwrQ0FBUUEsQ0FBQ0ksWUFBWSxDQUFDLEVBQUU7SUFDNUUsTUFBTSxDQUFDUyxlQUFlQyxpQkFBaUIsR0FBR2QsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDZSxlQUFlQyxpQkFBaUIsR0FBR2hCLCtDQUFRQSxDQUFDVyxtQkFBbUJKLEtBQUs7SUFFM0UsTUFBTVUsd0JBQXdCLENBQUNDLFlBQVlDO1FBQ3pDUCxzQkFBc0JNO1FBQ3RCSixpQkFBaUJLO0lBQ25CO0lBRUFsQixnREFBU0EsQ0FBQztRQUNSLFNBQVNtQjtZQUNQLElBQUlDLE9BQU9DLFVBQVUsSUFBSSxLQUFLO2dCQUM1Qk4saUJBQWlCTCxtQkFBbUJILFdBQVc7WUFDakQsT0FBTztnQkFDTFEsaUJBQWlCTCxtQkFBbUJKLEtBQUs7WUFDM0M7UUFDRjtRQUVBYTtRQUVBQyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUVsQyxPQUFPLElBQU1DLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO0lBQ3BELEdBQUc7UUFBQ1Q7S0FBbUI7SUFFdkIscUJBQ0UsOERBQUNjO1FBQUlDLFdBQVczQixnRkFBZTs7MEJBQzdCLDhEQUFDRywwREFBTUE7Ozs7OzBCQUNQLDhEQUFDQyx3RUFBb0JBO2dCQUFDeUIsU0FBUzs7a0NBQzdCLDhEQUFDQzt3QkFBR0gsV0FBVzNCLG1GQUFrQjtrQ0FBRTs7Ozs7O2tDQUNuQyw4REFBQ2dDO3dCQUFRTCxXQUFXM0Isa0ZBQWlCOzswQ0FDbkMsOERBQUNrQztnQ0FBR1AsV0FBVzNCLDJFQUFVOzBDQUN0QkssYUFBYStCLEdBQUcsQ0FBQyxDQUFDakIsWUFBWUMsc0JBQzdCLDhEQUFDaUI7d0NBRUNWLFdBQVcsR0FDVFAsT0FEWXBCLGtGQUFpQixFQUFDLEtBRS9CLE9BRENvQixVQUFVTixnQkFBZ0JkLHdGQUF1QixHQUFHO3dDQUV0RHdDLFNBQVMsSUFBTXRCLHNCQUFzQkMsWUFBWUM7a0RBRWhEQSxRQUFRO3VDQU5KRCxXQUFXWixLQUFLOzs7Ozs7Ozs7OzBDQVUzQiw4REFBQ3lCO2dDQUFRTCxXQUFXM0IscUZBQW9COztrREFDdEMsOERBQUMwQzt3Q0FBR2YsV0FBVzNCLG1GQUFrQjtrREFDOUJZLG1CQUFtQk4sUUFBUTs7Ozs7O2tEQUU5Qiw4REFBQ3NDO3dDQUFHakIsV0FBVzNCLGdGQUFlO2tEQUFHWSxtQkFBbUJMLEtBQUs7Ozs7OztrREFDekQsOERBQUN1Qzt3Q0FBRW5CLFdBQVczQixnRkFBZTtrREFBR1ksbUJBQW1CRixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2xFLDhEQUFDc0I7d0JBQ0NMLFdBQVczQixtRkFBa0I7d0JBQzdCQSxPQUFPOzRCQUFFaUQsaUJBQWlCLE9BQWdDLE9BQXpCckMsbUJBQW1CSixLQUFLLEVBQUM7d0JBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2RTtHQTVEU0c7S0FBQUE7QUE4RFQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVGVjaG5vbG9neS5qcz80MjBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL1RlY2hub2xvZ3kubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBNYWluU2VjdGlvbkNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9tYWluU2VjdGlvbkNvbnRhaW5lclwiO1xuXG5jb25zdCB0ZWNobm9sb2dpZXMgPSBbXG4gIHtcbiAgICBzdWJ0aXRsZTogXCJ0aGUgdGVybWlub2xvZ3kuLi5cIixcbiAgICB0aXRsZTogXCJMYXVuY2ggVmVoaWNsZVwiLFxuICAgIGltYWdlOiBcImFzc2V0cy90ZWNobm9sb2d5L2ltYWdlLWxhdW5jaC12ZWhpY2xlLXBvcnRyYWl0LmpwZ1wiLFxuICAgIGltYWdlVGFibGV0OiBcImFzc2V0cy90ZWNobm9sb2d5L2ltYWdlLWxhdW5jaC12ZWhpY2xlLWxhbmRzY2FwZS5qcGdcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBsYXVuY2ggdmVoaWNsZSBvciBjYXJyaWVyIHJvY2tldCBpcyBhIHJvY2tldC1wcm9wZWxsZWQgdmVoaWNsZSB1c2VkIHRvIGNhcnJ5IGEgcGF5bG9hZCBmcm9tIEVhcnRoJ3Mgc3VyZmFjZSB0byBzcGFjZSwgdXN1YWxseSB0byBFYXJ0aCBvcmJpdCBvciBiZXlvbmQuIE91ciBXRUItWCBjYXJyaWVyIHJvY2tldCBpcyB0aGUgbW9zdCBwb3dlcmZ1bCBpbiBvcGVyYXRpb24uIFN0YW5kaW5nIDE1MCBtZXRyZXMgdGFsbCwgaXQncyBxdWl0ZSBhbiBhd2UtaW5zcGlyaW5nIHNpZ2h0IG9uIHRoZSBsYXVuY2ggcGFkIVwiLFxuICB9LFxuXG4gIHtcbiAgICBzdWJ0aXRsZTogXCJ0aGUgdGVybWlub2xvZ3kuLi5cIixcbiAgICB0aXRsZTogXCJzcGFjZXJlcG9ydFwiLFxuICAgIGltYWdlOiBcImFzc2V0cy90ZWNobm9sb2d5L2ltYWdlLXNwYWNlcG9ydC1wb3J0cmFpdC5qcGdcIixcbiAgICBpbWFnZVRhYmxldDogXCJhc3NldHMvdGVjaG5vbG9neS9pbWFnZS1zcGFjZXBvcnQtbGFuZHNjYXBlLmpwZ1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIHNwYWNlcG9ydCBvciBjb3Ntb2Ryb21lIGlzIGEgc2l0ZSBmb3IgbGF1bmNoaW5nIChvciByZWNlaXZpbmcpIHNwYWNlY3JhZnQsIGJ5IGFuYWxvZ3kgdG8gdGhlIHNlYXBvcnQgZm9yIHNoaXBzIG9yIGFpcnBvcnQgZm9yIGFpcmNyYWZ0LiBCYXNlZCBpbiB0aGUgZmFtb3VzIENhcGUgQ2FuYXZlcmFsLCBvdXIgc3BhY2Vwb3J0IGlzIGlkZWFsbHkgc2l0dWF0ZWQgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgdGhlIEVhcnRo4oCZcyByb3RhdGlvbiBmb3IgbGF1bmNoLlwiLFxuICB9LFxuXG4gIHtcbiAgICBzdWJ0aXRsZTogXCJ0aGUgdGVybWlub2xvZ3kuLi5cIixcbiAgICB0aXRsZTogXCJzcGFjZSBjYXBzdWxlXCIsXG4gICAgaW1hZ2U6IFwiYXNzZXRzL3RlY2hub2xvZ3kvaW1hZ2Utc3BhY2UtY2Fwc3VsZS1wb3J0cmFpdC5qcGdcIixcbiAgICBpbWFnZVRhYmxldDogXCJhc3NldHMvdGVjaG5vbG9neS9pbWFnZS1sYXVuY2gtc3BhY2UtY2Fwc3VsZS1sYW5kc2NhcGUuanBnXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgc3BhY2UgY2Fwc3VsZSBpcyBhbiBvZnRlbi1jcmV3ZWQgc3BhY2VjcmFmdCB0aGF0IHVzZXMgYSBibHVudC1ib2R5IHJlZW50cnkgY2Fwc3VsZSB0byByZWVudGVyIHRoZSBFYXJ0aCdzIGF0bW9zcGhlcmUgd2l0aG91dCB3aW5ncy4gT3VyIGNhcHN1bGUgaXMgd2hlcmUgeW91J2xsIHNwZW5kIHlvdXIgdGltZSBkdXJpbmcgdGhlIGZsaWdodC4gSXQgaW5jbHVkZXMgYSBzcGFjZSBneW0sIGNpbmVtYSwgYW5kIHBsZW50eSBvZiBvdGhlciBhY3Rpdml0aWVzIHRvIGtlZXAgeW91IGVudGVydGFpbmVkLlwiLFxuICB9LFxuXTtcblxuZnVuY3Rpb24gVGVjaG5vbG9neSgpIHtcbiAgY29uc3QgW3NlbGVjdGVkVGVjaG5vbG9neSwgc2V0U2VsZWN0ZWRUZWNobm9sb2d5XSA9IHVzZVN0YXRlKHRlY2hub2xvZ2llc1swXSk7XG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2VsZWN0ZWRJbWFnZSwgc2V0U2VsZWN0ZWRJbWFnZV0gPSB1c2VTdGF0ZShzZWxlY3RlZFRlY2hub2xvZ3kuaW1hZ2UpO1xuXG4gIGNvbnN0IGhhbmRsZVRlY2hub2xvZ3lDbGljayA9ICh0ZWNobm9sb2d5LCBpbmRleCkgPT4ge1xuICAgIHNldFNlbGVjdGVkVGVjaG5vbG9neSh0ZWNobm9sb2d5KTtcbiAgICBzZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA4NTApIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRJbWFnZShzZWxlY3RlZFRlY2hub2xvZ3kuaW1hZ2VUYWJsZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRJbWFnZShzZWxlY3RlZFRlY2hub2xvZ3kuaW1hZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVJlc2l6ZSgpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcblxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICB9LCBbc2VsZWN0ZWRUZWNobm9sb2d5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxNYWluU2VjdGlvbkNvbnRhaW5lciByZXZlcnNlPXt0cnVlfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuc2VjdGlvblRpdGxlfT5TcGFjZSBMYXVuY2ggMTAxPC9oMj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZS5zZWN0aW9uTGVmdH0+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGUubGlzdH0+XG4gICAgICAgICAgICB7dGVjaG5vbG9naWVzLm1hcCgodGVjaG5vbG9neSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXt0ZWNobm9sb2d5LnRpdGxlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUubGlzdGVsZW1lbnR9ICR7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9PT0gc2VsZWN0ZWRJbmRleCA/IHN0eWxlLmxpc3RlbGVtZW50QWN0aXZlIDogXCJcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRlY2hub2xvZ3lDbGljayh0ZWNobm9sb2d5LCBpbmRleCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlLnN1YnNlY3Rpb25MZWZ0fT5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlLnN1YnRpdGxlTGVmdH0+XG4gICAgICAgICAgICAgIHtzZWxlY3RlZFRlY2hub2xvZ3kuc3VidGl0bGV9XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGUudGl0bGVNYWlufT57c2VsZWN0ZWRUZWNobm9sb2d5LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnBhcmFncmFwaH0+e3NlbGVjdGVkVGVjaG5vbG9neS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5zZWN0aW9uUmlnaHR9XG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c2VsZWN0ZWRUZWNobm9sb2d5LmltYWdlfSlgIH19XG4gICAgICAgID48L3NlY3Rpb24+XG4gICAgICA8L01haW5TZWN0aW9uQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUZWNobm9sb2d5O1xuIl0sIm5hbWVzIjpbInN0eWxlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJNYWluU2VjdGlvbkNvbnRhaW5lciIsInRlY2hub2xvZ2llcyIsInN1YnRpdGxlIiwidGl0bGUiLCJpbWFnZSIsImltYWdlVGFibGV0IiwiZGVzY3JpcHRpb24iLCJUZWNobm9sb2d5Iiwic2VsZWN0ZWRUZWNobm9sb2d5Iiwic2V0U2VsZWN0ZWRUZWNobm9sb2d5Iiwic2VsZWN0ZWRJbmRleCIsInNldFNlbGVjdGVkSW5kZXgiLCJzZWxlY3RlZEltYWdlIiwic2V0U2VsZWN0ZWRJbWFnZSIsImhhbmRsZVRlY2hub2xvZ3lDbGljayIsInRlY2hub2xvZ3kiLCJpbmRleCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInJldmVyc2UiLCJoMiIsInNlY3Rpb25UaXRsZSIsInNlY3Rpb24iLCJzZWN0aW9uTGVmdCIsInVsIiwibGlzdCIsIm1hcCIsImxpIiwibGlzdGVsZW1lbnQiLCJsaXN0ZWxlbWVudEFjdGl2ZSIsIm9uQ2xpY2siLCJzdWJzZWN0aW9uTGVmdCIsImg0Iiwic3VidGl0bGVMZWZ0IiwiaDMiLCJ0aXRsZU1haW4iLCJwIiwicGFyYWdyYXBoIiwic2VjdGlvblJpZ2h0IiwiYmFja2dyb3VuZEltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Technology.js\n"));

/***/ })

});