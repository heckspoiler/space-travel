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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Crew.module.css */ \"./styles/Crew.module.css\");\n/* harmony import */ var _styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_mainSectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/mainSectionContainer */ \"./components/mainSectionContainer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst members = [\n    {\n        role: \"commander\",\n        name: \"Doug Hurley\",\n        image: \"/assets/crew/image-doug-hurley.png\",\n        description: \"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.\"\n    },\n    {\n        role: \"Mission Specialist\",\n        name: \"mark shuttleworth\",\n        image: \"/assets/crew/image-mark-shuttleworth.png\",\n        description: \"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.\"\n    },\n    {\n        role: \"pilot\",\n        name: \"Victor Glover\",\n        image: \"/assets/crew/image-victor-glover.png\",\n        description: \"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. \"\n    },\n    {\n        role: \"flight engineer\",\n        name: \"anousheh ansari\",\n        image: \"/assets/crew/image-anousheh-ansari.png\",\n        description: \"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. \"\n    }\n];\nfunction Crew() {\n    _s();\n    const [selectedMember, setSelectedMember] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(members[0]);\n    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleMemberClick = (member, index)=>{\n        setSelectedMember(member);\n        setSelectedIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mainSectionContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionTitle),\n                        children: \"Meet your crew\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionLeft),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: members.map((member, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: index === selectedIndex ? (_styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\",\n                                    onClick: ()=>handleMemberClick(member, index),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: member.image,\n                                        alt: member.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_Crew_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionRight)\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Carlito/Desktop/repos/space-travel/pages/Crew.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Crew, \"74gVLmgYmHUEC0aG5cu3fd1H9hQ=\");\n_c = Crew;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Crew);\nvar _c;\n$RefreshReg$(_c, \"Crew\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9DcmV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2E7QUFDSjtBQUM0QjtBQUV0RSxNQUFNSSxVQUFVO0lBQ2Q7UUFDRUMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBRUE7UUFDRUgsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBRUE7UUFDRUgsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBRUE7UUFDRUgsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFDRTtJQUNKO0NBQ0Q7QUFFRCxTQUFTQzs7SUFDUCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdYLCtDQUFRQSxDQUFDSSxPQUFPLENBQUMsRUFBRTtJQUMvRCxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNYyxvQkFBb0IsQ0FBQ0MsUUFBUUM7UUFDakNMLGtCQUFrQkk7UUFDbEJGLGlCQUFpQkc7SUFDbkI7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV2pCLDBFQUFlOzswQkFDN0IsOERBQUNDLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNDLHdFQUFvQkE7O2tDQUNuQiw4REFBQ2lCO3dCQUFHRixXQUFXakIsNkVBQWtCO2tDQUFFOzs7Ozs7a0NBQ25DLDhEQUFDcUI7d0JBQVFKLFdBQVdqQiw0RUFBaUI7a0NBQ25DLDRFQUFDdUI7c0NBQ0VwQixRQUFRcUIsR0FBRyxDQUFDLENBQUNWLFFBQVFDLHNCQUNwQiw4REFBQ1U7b0NBRUNSLFdBQVdGLFVBQVVKLGdCQUFnQlgsdUVBQVksR0FBRztvQ0FDcEQyQixTQUFTLElBQU1kLGtCQUFrQkMsUUFBUUM7OENBRXpDLDRFQUFDYTt3Q0FBSUMsS0FBS2YsT0FBT1IsS0FBSzt3Q0FBRXdCLEtBQUtoQixPQUFPVCxJQUFJOzs7Ozs7bUNBSm5DVTs7Ozs7Ozs7Ozs7Ozs7O2tDQVViLDhEQUFDTTt3QkFBUUosV0FBV2pCLDZFQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlDO0dBL0JTUTtLQUFBQTtBQWlDVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9DcmV3LmpzP2ZlNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL0NyZXcubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBNYWluU2VjdGlvbkNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9tYWluU2VjdGlvbkNvbnRhaW5lclwiO1xuXG5jb25zdCBtZW1iZXJzID0gW1xuICB7XG4gICAgcm9sZTogXCJjb21tYW5kZXJcIixcbiAgICBuYW1lOiBcIkRvdWcgSHVybGV5XCIsXG4gICAgaW1hZ2U6IFwiL2Fzc2V0cy9jcmV3L2ltYWdlLWRvdWctaHVybGV5LnBuZ1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJEb3VnbGFzIEdlcmFsZCBIdXJsZXkgaXMgYW4gQW1lcmljYW4gZW5naW5lZXIsIGZvcm1lciBNYXJpbmUgQ29ycHMgcGlsb3QgYW5kIGZvcm1lciBOQVNBIGFzdHJvbmF1dC4gSGUgbGF1bmNoZWQgaW50byBzcGFjZSBmb3IgdGhlIHRoaXJkIHRpbWUgYXMgY29tbWFuZGVyIG9mIENyZXcgRHJhZ29uIERlbW8tMi5cIixcbiAgfSxcblxuICB7XG4gICAgcm9sZTogXCJNaXNzaW9uIFNwZWNpYWxpc3RcIixcbiAgICBuYW1lOiBcIm1hcmsgc2h1dHRsZXdvcnRoXCIsXG4gICAgaW1hZ2U6IFwiL2Fzc2V0cy9jcmV3L2ltYWdlLW1hcmstc2h1dHRsZXdvcnRoLnBuZ1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJNYXJrIFJpY2hhcmQgU2h1dHRsZXdvcnRoIGlzIHRoZSBmb3VuZGVyIGFuZCBDRU8gb2YgQ2Fub25pY2FsLCB0aGUgY29tcGFueSBiZWhpbmQgdGhlIExpbnV4LWJhc2VkIFVidW50dSBvcGVyYXRpbmcgc3lzdGVtLiBTaHV0dGxld29ydGggYmVjYW1lIHRoZSBmaXJzdCBTb3V0aCBBZnJpY2FuIHRvIHRyYXZlbCB0byBzcGFjZSBhcyBhIHNwYWNlIHRvdXJpc3QuXCIsXG4gIH0sXG5cbiAge1xuICAgIHJvbGU6IFwicGlsb3RcIixcbiAgICBuYW1lOiBcIlZpY3RvciBHbG92ZXJcIixcbiAgICBpbWFnZTogXCIvYXNzZXRzL2NyZXcvaW1hZ2UtdmljdG9yLWdsb3Zlci5wbmdcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUGlsb3Qgb24gdGhlIGZpcnN0IG9wZXJhdGlvbmFsIGZsaWdodCBvZiB0aGUgU3BhY2VYIENyZXcgRHJhZ29uIHRvIHRoZSBJbnRlcm5hdGlvbmFsIFNwYWNlIFN0YXRpb24uIEdsb3ZlciBpcyBhIGNvbW1hbmRlciBpbiB0aGUgVS5TLiBOYXZ5IHdoZXJlIGhlIHBpbG90cyBhbiBGL0EtMTguSGUgd2FzIGEgY3JldyBtZW1iZXIgb2YgRXhwZWRpdGlvbiA2NCwgYW5kIHNlcnZlZCBhcyBhIHN0YXRpb24gc3lzdGVtcyBmbGlnaHQgZW5naW5lZXIuIFwiLFxuICB9LFxuXG4gIHtcbiAgICByb2xlOiBcImZsaWdodCBlbmdpbmVlclwiLFxuICAgIG5hbWU6IFwiYW5vdXNoZWggYW5zYXJpXCIsXG4gICAgaW1hZ2U6IFwiL2Fzc2V0cy9jcmV3L2ltYWdlLWFub3VzaGVoLWFuc2FyaS5wbmdcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQW5vdXNoZWggQW5zYXJpIGlzIGFuIElyYW5pYW4gQW1lcmljYW4gZW5naW5lZXIgYW5kIGNvLWZvdW5kZXIgb2YgUHJvZGVhIFN5c3RlbXMuIEFuc2FyaSB3YXMgdGhlIGZvdXJ0aCBzZWxmLWZ1bmRlZCBzcGFjZSB0b3VyaXN0LCB0aGUgZmlyc3Qgc2VsZi1mdW5kZWQgd29tYW4gdG8gZmx5IHRvIHRoZSBJU1MsIGFuZCB0aGUgZmlyc3QgSXJhbmlhbiBpbiBzcGFjZS4gXCIsXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBDcmV3KCkge1xuICBjb25zdCBbc2VsZWN0ZWRNZW1iZXIsIHNldFNlbGVjdGVkTWVtYmVyXSA9IHVzZVN0YXRlKG1lbWJlcnNbMF0pO1xuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVNZW1iZXJDbGljayA9IChtZW1iZXIsIGluZGV4KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRNZW1iZXIobWVtYmVyKTtcbiAgICBzZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxNYWluU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuc2VjdGlvblRpdGxlfT5NZWV0IHlvdXIgY3JldzwvaDI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGUuc2VjdGlvbkxlZnR9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHttZW1iZXJzLm1hcCgobWVtYmVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aW5kZXggPT09IHNlbGVjdGVkSW5kZXggPyBzdHlsZS5hY3RpdmUgOiBcIlwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1lbWJlckNsaWNrKG1lbWJlciwgaW5kZXgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e21lbWJlci5pbWFnZX0gYWx0PXttZW1iZXIubmFtZX0gLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlLnNlY3Rpb25SaWdodH0+PC9zZWN0aW9uPlxuICAgICAgPC9NYWluU2VjdGlvbkNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JldztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlIiwiSGVhZGVyIiwiTWFpblNlY3Rpb25Db250YWluZXIiLCJtZW1iZXJzIiwicm9sZSIsIm5hbWUiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiQ3JldyIsInNlbGVjdGVkTWVtYmVyIiwic2V0U2VsZWN0ZWRNZW1iZXIiLCJzZWxlY3RlZEluZGV4Iiwic2V0U2VsZWN0ZWRJbmRleCIsImhhbmRsZU1lbWJlckNsaWNrIiwibWVtYmVyIiwiaW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMiIsInNlY3Rpb25UaXRsZSIsInNlY3Rpb24iLCJzZWN0aW9uTGVmdCIsInVsIiwibWFwIiwibGkiLCJhY3RpdmUiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0Iiwic2VjdGlvblJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Crew.js\n"));

/***/ })

});