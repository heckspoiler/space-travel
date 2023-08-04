"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Destination",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst links = [\n    {\n        name: \"HOME\",\n        href: \"/\"\n    },\n    {\n        name: \"DESTINATION\",\n        href: \"/Destination\"\n    },\n    {\n        name: \"CREW\",\n        href: \"/Crew\"\n    },\n    {\n        name: \"TECHNOLOGY\",\n        href: \"/Technology\"\n    }\n];\nfunction Header() {\n    _s();\n    const [selectedLink, setSelectedLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0\n    ]);\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleLinkClick = (link, index)=>{\n        setSelectedLink(link);\n        setActiveIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/assets/shared/logo.svg\",\n                alt: \"logo\",\n                className: \"h-12 ml-12\"\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().stroke)\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar),\n                children: links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        onClick: ()=>handleLinkClick(link, index),\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navlink) && index === activeIndex ? \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().active)) : (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navlink),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: link.href,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: link.name\n                            }, void 0, false, {\n                                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"QVocmRogRZZvxdMlk4gUt+Oa6u8=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNKO0FBQ21CO0FBRWhELE1BQU1HLFFBQVE7SUFDWjtRQUFFQyxNQUFNO1FBQVFDLE1BQU07SUFBSTtJQUMxQjtRQUFFRCxNQUFNO1FBQWVDLE1BQU07SUFBZTtJQUM1QztRQUFFRCxNQUFNO1FBQVFDLE1BQU07SUFBUTtJQUM5QjtRQUFFRCxNQUFNO1FBQWNDLE1BQU07SUFBYztDQUMzQztBQUVELFNBQVNDOztJQUNQLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDO1FBQUM7S0FBRTtJQUNwRCxNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVcsa0JBQWtCLENBQUNDLE1BQU1DO1FBQzdCTCxnQkFBZ0JJO1FBQ2hCRixlQUFlRztJQUNqQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFPQyxXQUFXYix5RUFBWTs7MEJBQzdCLDhEQUFDYztnQkFBSUMsS0FBSTtnQkFBMEJDLEtBQUk7Z0JBQU9ILFdBQVU7Ozs7OzswQkFDeEQsOERBQUNJO2dCQUFJSixXQUFXYix5RUFBWTs7Ozs7OzBCQUM1Qiw4REFBQ21CO2dCQUFJTixXQUFXYix5RUFBWTswQkFDekJDLE1BQU1vQixHQUFHLENBQUMsQ0FBQ1gsTUFBTUMsc0JBQ2hCLDhEQUFDVzt3QkFFQ0MsU0FBUyxJQUFNZCxnQkFBZ0JDLE1BQU1DO3dCQUNyQ0UsV0FDRWIsMEVBQWEsSUFBSVcsVUFBVUosY0FDdkIsR0FBZ0IsT0FBYlAseUVBQVksSUFDZkEsMEVBQWE7a0NBR25CLDRFQUFDRCxrREFBSUE7NEJBQUNJLE1BQU1PLEtBQUtQLElBQUk7c0NBQ25CLDRFQUFDdUI7MENBQUdoQixLQUFLUixJQUFJOzs7Ozs7Ozs7Ozt1QkFUVlM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQmpCO0dBaENTUDtLQUFBQTtBQWtDVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9IZWFkZXIubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBuYW1lOiBcIkhPTUVcIiwgaHJlZjogXCIvXCIgfSxcbiAgeyBuYW1lOiBcIkRFU1RJTkFUSU9OXCIsIGhyZWY6IFwiL0Rlc3RpbmF0aW9uXCIgfSxcbiAgeyBuYW1lOiBcIkNSRVdcIiwgaHJlZjogXCIvQ3Jld1wiIH0sXG4gIHsgbmFtZTogXCJURUNITk9MT0dZXCIsIGhyZWY6IFwiL1RlY2hub2xvZ3lcIiB9LFxuXTtcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBbc2VsZWN0ZWRMaW5rLCBzZXRTZWxlY3RlZExpbmtdID0gdXNlU3RhdGUoWzBdKTtcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVMaW5rQ2xpY2sgPSAobGluaywgaW5kZXgpID0+IHtcbiAgICBzZXRTZWxlY3RlZExpbmsobGluayk7XG4gICAgc2V0QWN0aXZlSW5kZXgoaW5kZXgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlLmhlYWRlcn0+XG4gICAgICA8aW1nIHNyYz1cIi9hc3NldHMvc2hhcmVkL2xvZ28uc3ZnXCIgYWx0PVwibG9nb1wiIGNsYXNzTmFtZT1cImgtMTIgbWwtMTJcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN0cm9rZX0+PC9kaXY+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGUubmF2YmFyfT5cbiAgICAgICAge2xpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IChcbiAgICAgICAgICA8dWxcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMaW5rQ2xpY2sobGluaywgaW5kZXgpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgc3R5bGUubmF2bGluayAmJiBpbmRleCA9PT0gYWN0aXZlSW5kZXhcbiAgICAgICAgICAgICAgICA/IGAke3N0eWxlLmFjdGl2ZX1gXG4gICAgICAgICAgICAgICAgOiBzdHlsZS5uYXZsaW5rXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17bGluay5ocmVmfT5cbiAgICAgICAgICAgICAgPGE+e2xpbmsubmFtZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKSl9XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGluayIsInN0eWxlIiwibGlua3MiLCJuYW1lIiwiaHJlZiIsIkhlYWRlciIsInNlbGVjdGVkTGluayIsInNldFNlbGVjdGVkTGluayIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJoYW5kbGVMaW5rQ2xpY2siLCJsaW5rIiwiaW5kZXgiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJkaXYiLCJzdHJva2UiLCJuYXYiLCJuYXZiYXIiLCJtYXAiLCJ1bCIsIm9uQ2xpY2siLCJuYXZsaW5rIiwiYWN0aXZlIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});