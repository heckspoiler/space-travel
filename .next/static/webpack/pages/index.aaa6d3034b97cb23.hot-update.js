"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst links = [\n    {\n        name: \"HOME\",\n        href: \"/\"\n    },\n    {\n        name: \"DESTINATION\",\n        href: \"/Destination\"\n    },\n    {\n        name: \"CREW\",\n        href: \"/Crew\"\n    },\n    {\n        name: \"TECHNOLOGY\",\n        href: \"/Technology\"\n    }\n];\nfunction Header() {\n    _s();\n    const [selectedLink, setSelectedLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0\n    ]);\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleLinkClick = (link, index)=>{\n        setSelectedLink(link);\n        setActiveIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/assets/shared/logo.svg\",\n                alt: \"logo\",\n                className: \"h-12 ml-12\"\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().stroke)\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar),\n                children: links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        onClick: ()=>handleLinkClick(link, index),\n                        className: index === activeIndex ? \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navlink), \" \").concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().active)) : (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navlink),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: link.href,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: link.name\n                            }, void 0, false, {\n                                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"QVocmRogRZZvxdMlk4gUt+Oa6u8=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNKO0FBQ21CO0FBRWhELE1BQU1HLFFBQVE7SUFDWjtRQUFFQyxNQUFNO1FBQVFDLE1BQU07SUFBSTtJQUMxQjtRQUFFRCxNQUFNO1FBQWVDLE1BQU07SUFBZTtJQUM1QztRQUFFRCxNQUFNO1FBQVFDLE1BQU07SUFBUTtJQUM5QjtRQUFFRCxNQUFNO1FBQWNDLE1BQU07SUFBYztDQUMzQztBQUVELFNBQVNDOztJQUNQLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDO1FBQUM7S0FBRTtJQUNwRCxNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVcsa0JBQWtCLENBQUNDLE1BQU1DO1FBQzdCTCxnQkFBZ0JJO1FBQ2hCRixlQUFlRztJQUNqQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFPQyxXQUFXYix5RUFBWTs7MEJBQzdCLDhEQUFDYztnQkFBSUMsS0FBSTtnQkFBMEJDLEtBQUk7Z0JBQU9ILFdBQVU7Ozs7OzswQkFDeEQsOERBQUNJO2dCQUFJSixXQUFXYix5RUFBWTs7Ozs7OzBCQUM1Qiw4REFBQ21CO2dCQUFJTixXQUFXYix5RUFBWTswQkFDekJDLE1BQU1vQixHQUFHLENBQUMsQ0FBQ1gsTUFBTUMsc0JBQ2hCLDhEQUFDVzt3QkFFQ0MsU0FBUyxJQUFNZCxnQkFBZ0JDLE1BQU1DO3dCQUNyQ0UsV0FDRUYsVUFBVUosY0FDTixHQUFvQlAsT0FBakJBLDBFQUFhLEVBQUMsS0FBZ0IsT0FBYkEseUVBQVksSUFDaENBLDBFQUFhO2tDQUduQiw0RUFBQ0Qsa0RBQUlBOzRCQUFDSSxNQUFNTyxLQUFLUCxJQUFJO3NDQUNuQiw0RUFBQ3VCOzBDQUFHaEIsS0FBS1IsSUFBSTs7Ozs7Ozs7Ozs7dUJBVFZTOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JqQjtHQWhDU1A7S0FBQUE7QUFrQ1QsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgbmFtZTogXCJIT01FXCIsIGhyZWY6IFwiL1wiIH0sXG4gIHsgbmFtZTogXCJERVNUSU5BVElPTlwiLCBocmVmOiBcIi9EZXN0aW5hdGlvblwiIH0sXG4gIHsgbmFtZTogXCJDUkVXXCIsIGhyZWY6IFwiL0NyZXdcIiB9LFxuICB7IG5hbWU6IFwiVEVDSE5PTE9HWVwiLCBocmVmOiBcIi9UZWNobm9sb2d5XCIgfSxcbl07XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW3NlbGVjdGVkTGluaywgc2V0U2VsZWN0ZWRMaW5rXSA9IHVzZVN0YXRlKFswXSk7XG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlTGlua0NsaWNrID0gKGxpbmssIGluZGV4KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRMaW5rKGxpbmspO1xuICAgIHNldEFjdGl2ZUluZGV4KGluZGV4KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZS5oZWFkZXJ9PlxuICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL3NoYXJlZC9sb2dvLnN2Z1wiIGFsdD1cImxvZ29cIiBjbGFzc05hbWU9XCJoLTEyIG1sLTEyXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zdHJva2V9PjwvZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlLm5hdmJhcn0+XG4gICAgICAgIHtsaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXG4gICAgICAgICAgPHVsXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTGlua0NsaWNrKGxpbmssIGluZGV4KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIGluZGV4ID09PSBhY3RpdmVJbmRleFxuICAgICAgICAgICAgICAgID8gYCR7c3R5bGUubmF2bGlua30gJHtzdHlsZS5hY3RpdmV9YFxuICAgICAgICAgICAgICAgIDogc3R5bGUubmF2bGlua1xuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmsuaHJlZn0+XG4gICAgICAgICAgICAgIDxhPntsaW5rLm5hbWV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICkpfVxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJzdHlsZSIsImxpbmtzIiwibmFtZSIsImhyZWYiLCJIZWFkZXIiLCJzZWxlY3RlZExpbmsiLCJzZXRTZWxlY3RlZExpbmsiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiaGFuZGxlTGlua0NsaWNrIiwibGluayIsImluZGV4IiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiZGl2Iiwic3Ryb2tlIiwibmF2IiwibmF2YmFyIiwibWFwIiwidWwiLCJvbkNsaWNrIiwibmF2bGluayIsImFjdGl2ZSIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});