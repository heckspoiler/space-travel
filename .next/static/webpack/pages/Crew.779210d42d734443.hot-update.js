"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Crew",{

/***/ "./pages/Crew.js":
/*!***********************!*\
  !*** ./pages/Crew.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Crew.module.css */ \"./styles/Crew.module.css\");\n/* harmony import */ var _styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_mainSectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/mainSectionContainer */ \"./components/mainSectionContainer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst members = [\n    {\n        role: \"commander\",\n        name: \"Doug Hurley\",\n        image: \"/assets/crew/image-douglas-hurley.png\",\n        description: \"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.\"\n    },\n    {\n        role: \"Mission Specialist\",\n        name: \"mark shuttleworth\",\n        image: \"/assets/crew/image-mark-shuttleworth.png\",\n        description: \"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.\"\n    },\n    {\n        role: \"pilot\",\n        name: \"Victor Glover\",\n        image: \"/assets/crew/image-victor-glover.png\",\n        description: \"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. \"\n    },\n    {\n        role: \"flight engineer\",\n        name: \"anousheh ansari\",\n        image: \"/assets/crew/image-anousheh-ansari.png\",\n        description: \"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. \"\n    }\n];\nfunction Crew() {\n    _s();\n    const [selectedMember, setSelectedMember] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(members[0]);\n    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleMemberClick = (member, index)=>{\n        setSelectedMember(member);\n        setSelectedIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mainSectionContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionTitle),\n                        children: \"Meet your crew\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionLeft),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: selectedMember.role\n                            }, void 0, false, {\n                                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: selectedMember.name\n                            }, void 0, false, {\n                                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: selectedMember.description\n                            }, void 0, false, {\n                                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: (_styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4___default().memberList),\n                                children: members.map((member, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"\".concat((_styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4___default().listobject), \" \").concat(index === selectedIndex ? (_styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4___default().listobjectActive) : \"\"),\n                                        onClick: ()=>handleMemberClick(member, index)\n                                    }, member.name, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionRight),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: selectedMember.image,\n                            alt: \"image of \".concat(members.name)\n                        }, void 0, false, {\n                            fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Crew, \"74gVLmgYmHUEC0aG5cu3fd1H9hQ=\");\n_c = Crew;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Crew);\nvar _c;\n$RefreshReg$(_c, \"Crew\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9DcmV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2E7QUFDSjtBQUM0QjtBQUV0RSxNQUFNSSxVQUFVO0lBQ2Q7UUFDRUMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBRUE7UUFDRUgsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBRUE7UUFDRUgsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBRUE7UUFDRUgsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0NBQ0Q7QUFFRCxTQUFTQzs7SUFDUCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdYLCtDQUFRQSxDQUFDSSxPQUFPLENBQUMsRUFBRTtJQUMvRCxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNYyxvQkFBb0IsQ0FBQ0MsUUFBUUM7UUFDakNMLGtCQUFrQkk7UUFDbEJGLGlCQUFpQkc7SUFDbkI7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV2pCLDBFQUFlOzswQkFDN0IsOERBQUNDLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNDLHdFQUFvQkE7O2tDQUNuQiw4REFBQ2lCO3dCQUFHRixXQUFXakIsNkVBQWtCO2tDQUFFOzs7Ozs7a0NBQ25DLDhEQUFDcUI7d0JBQVFKLFdBQVdqQiw0RUFBaUI7OzBDQUNuQyw4REFBQ3VCOzBDQUFJZCxlQUFlTCxJQUFJOzs7Ozs7MENBQ3hCLDhEQUFDZTswQ0FBSVYsZUFBZUosSUFBSTs7Ozs7OzBDQUN4Qiw4REFBQ21COzBDQUFHZixlQUFlRixXQUFXOzs7Ozs7MENBQzlCLDhEQUFDa0I7Z0NBQUdSLFdBQVdqQiwyRUFBZ0I7MENBQzVCRyxRQUFRd0IsR0FBRyxDQUFDLENBQUNiLFFBQVFDLHNCQUNwQiw4REFBQ2E7d0NBRUNYLFdBQVcsR0FDVEYsT0FEWWYsMkVBQWdCLEVBQUMsS0FFOUIsT0FEQ2UsVUFBVUosZ0JBQWdCWCxpRkFBc0IsR0FBRzt3Q0FFckQrQixTQUFTLElBQU1sQixrQkFBa0JDLFFBQVFDO3VDQUpwQ0QsT0FBT1QsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FVeEIsOERBQUNnQjt3QkFBUUosV0FBV2pCLDZFQUFrQjtrQ0FDcEMsNEVBQUNpQzs0QkFBSUMsS0FBS3pCLGVBQWVILEtBQUs7NEJBQUU2QixLQUFLLFlBQXlCLE9BQWJoQyxRQUFRRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2RTtHQXBDU0c7S0FBQUE7QUFzQ1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ3Jldy5qcz9mZTVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9DcmV3Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgTWFpblNlY3Rpb25Db250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFpblNlY3Rpb25Db250YWluZXJcIjtcblxuY29uc3QgbWVtYmVycyA9IFtcbiAge1xuICAgIHJvbGU6IFwiY29tbWFuZGVyXCIsXG4gICAgbmFtZTogXCJEb3VnIEh1cmxleVwiLFxuICAgIGltYWdlOiBcIi9hc3NldHMvY3Jldy9pbWFnZS1kb3VnbGFzLWh1cmxleS5wbmdcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRG91Z2xhcyBHZXJhbGQgSHVybGV5IGlzIGFuIEFtZXJpY2FuIGVuZ2luZWVyLCBmb3JtZXIgTWFyaW5lIENvcnBzIHBpbG90IGFuZCBmb3JtZXIgTkFTQSBhc3Ryb25hdXQuIEhlIGxhdW5jaGVkIGludG8gc3BhY2UgZm9yIHRoZSB0aGlyZCB0aW1lIGFzIGNvbW1hbmRlciBvZiBDcmV3IERyYWdvbiBEZW1vLTIuXCIsXG4gIH0sXG5cbiAge1xuICAgIHJvbGU6IFwiTWlzc2lvbiBTcGVjaWFsaXN0XCIsXG4gICAgbmFtZTogXCJtYXJrIHNodXR0bGV3b3J0aFwiLFxuICAgIGltYWdlOiBcIi9hc3NldHMvY3Jldy9pbWFnZS1tYXJrLXNodXR0bGV3b3J0aC5wbmdcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiTWFyayBSaWNoYXJkIFNodXR0bGV3b3J0aCBpcyB0aGUgZm91bmRlciBhbmQgQ0VPIG9mIENhbm9uaWNhbCwgdGhlIGNvbXBhbnkgYmVoaW5kIHRoZSBMaW51eC1iYXNlZCBVYnVudHUgb3BlcmF0aW5nIHN5c3RlbS4gU2h1dHRsZXdvcnRoIGJlY2FtZSB0aGUgZmlyc3QgU291dGggQWZyaWNhbiB0byB0cmF2ZWwgdG8gc3BhY2UgYXMgYSBzcGFjZSB0b3VyaXN0LlwiLFxuICB9LFxuXG4gIHtcbiAgICByb2xlOiBcInBpbG90XCIsXG4gICAgbmFtZTogXCJWaWN0b3IgR2xvdmVyXCIsXG4gICAgaW1hZ2U6IFwiL2Fzc2V0cy9jcmV3L2ltYWdlLXZpY3Rvci1nbG92ZXIucG5nXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlBpbG90IG9uIHRoZSBmaXJzdCBvcGVyYXRpb25hbCBmbGlnaHQgb2YgdGhlIFNwYWNlWCBDcmV3IERyYWdvbiB0byB0aGUgSW50ZXJuYXRpb25hbCBTcGFjZSBTdGF0aW9uLiBHbG92ZXIgaXMgYSBjb21tYW5kZXIgaW4gdGhlIFUuUy4gTmF2eSB3aGVyZSBoZSBwaWxvdHMgYW4gRi9BLTE4LkhlIHdhcyBhIGNyZXcgbWVtYmVyIG9mIEV4cGVkaXRpb24gNjQsIGFuZCBzZXJ2ZWQgYXMgYSBzdGF0aW9uIHN5c3RlbXMgZmxpZ2h0IGVuZ2luZWVyLiBcIixcbiAgfSxcblxuICB7XG4gICAgcm9sZTogXCJmbGlnaHQgZW5naW5lZXJcIixcbiAgICBuYW1lOiBcImFub3VzaGVoIGFuc2FyaVwiLFxuICAgIGltYWdlOiBcIi9hc3NldHMvY3Jldy9pbWFnZS1hbm91c2hlaC1hbnNhcmkucG5nXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkFub3VzaGVoIEFuc2FyaSBpcyBhbiBJcmFuaWFuIEFtZXJpY2FuIGVuZ2luZWVyIGFuZCBjby1mb3VuZGVyIG9mIFByb2RlYSBTeXN0ZW1zLiBBbnNhcmkgd2FzIHRoZSBmb3VydGggc2VsZi1mdW5kZWQgc3BhY2UgdG91cmlzdCwgdGhlIGZpcnN0IHNlbGYtZnVuZGVkIHdvbWFuIHRvIGZseSB0byB0aGUgSVNTLCBhbmQgdGhlIGZpcnN0IElyYW5pYW4gaW4gc3BhY2UuIFwiLFxuICB9LFxuXTtcblxuZnVuY3Rpb24gQ3JldygpIHtcbiAgY29uc3QgW3NlbGVjdGVkTWVtYmVyLCBzZXRTZWxlY3RlZE1lbWJlcl0gPSB1c2VTdGF0ZShtZW1iZXJzWzBdKTtcbiAgY29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlTWVtYmVyQ2xpY2sgPSAobWVtYmVyLCBpbmRleCkgPT4ge1xuICAgIHNldFNlbGVjdGVkTWVtYmVyKG1lbWJlcik7XG4gICAgc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWFpblNlY3Rpb25Db250YWluZXI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLnNlY3Rpb25UaXRsZX0+TWVldCB5b3VyIGNyZXc8L2gyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlLnNlY3Rpb25MZWZ0fT5cbiAgICAgICAgICA8aDM+e3NlbGVjdGVkTWVtYmVyLnJvbGV9PC9oMz5cbiAgICAgICAgICA8aDI+e3NlbGVjdGVkTWVtYmVyLm5hbWV9PC9oMj5cbiAgICAgICAgICA8cD57c2VsZWN0ZWRNZW1iZXIuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlLm1lbWJlckxpc3R9PlxuICAgICAgICAgICAge21lbWJlcnMubWFwKChtZW1iZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17bWVtYmVyLm5hbWV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5saXN0b2JqZWN0fSAke1xuICAgICAgICAgICAgICAgICAgaW5kZXggPT09IHNlbGVjdGVkSW5kZXggPyBzdHlsZS5saXN0b2JqZWN0QWN0aXZlIDogXCJcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1lbWJlckNsaWNrKG1lbWJlciwgaW5kZXgpfVxuICAgICAgICAgICAgICA+PC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlLnNlY3Rpb25SaWdodH0+XG4gICAgICAgICAgPGltZyBzcmM9e3NlbGVjdGVkTWVtYmVyLmltYWdlfSBhbHQ9e2BpbWFnZSBvZiAke21lbWJlcnMubmFtZX1gfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L01haW5TZWN0aW9uQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDcmV3O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGUiLCJIZWFkZXIiLCJNYWluU2VjdGlvbkNvbnRhaW5lciIsIm1lbWJlcnMiLCJyb2xlIiwibmFtZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJDcmV3Iiwic2VsZWN0ZWRNZW1iZXIiLCJzZXRTZWxlY3RlZE1lbWJlciIsInNlbGVjdGVkSW5kZXgiLCJzZXRTZWxlY3RlZEluZGV4IiwiaGFuZGxlTWVtYmVyQ2xpY2siLCJtZW1iZXIiLCJpbmRleCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgyIiwic2VjdGlvblRpdGxlIiwic2VjdGlvbiIsInNlY3Rpb25MZWZ0IiwiaDMiLCJwIiwidWwiLCJtZW1iZXJMaXN0IiwibWFwIiwibGkiLCJsaXN0b2JqZWN0IiwibGlzdG9iamVjdEFjdGl2ZSIsIm9uQ2xpY2siLCJzZWN0aW9uUmlnaHQiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Crew.js\n"));

/***/ })

});