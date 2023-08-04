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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst links = [\n    {\n        name: \"HOME\",\n        href: \"/\"\n    },\n    {\n        name: \"DESTINATION\",\n        href: \"/Destination\"\n    },\n    {\n        name: \"CREW\",\n        href: \"/Crew\"\n    },\n    {\n        name: \"TECHNOLOGY\",\n        href: \"/Technology\"\n    }\n];\nfunction Header() {\n    _s();\n    const [selectedLink, setSelectedLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleLinkClick = (link, index)=>{\n        setSelectedLink(link);\n        setActiveIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/assets/shared/logo.svg\",\n                alt: \"logo\",\n                className: \"h-12 ml-12\"\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().stroke)\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar),\n                children: links.map((link, index)=>()=>handleLinkClick(link, index))\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"1KyM45+Eon5tXaNSYMb/FCNgpGo=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNKO0FBQ21CO0FBRWhELE1BQU1HLFFBQVE7SUFDWjtRQUFFQyxNQUFNO1FBQVFDLE1BQU07SUFBSTtJQUMxQjtRQUFFRCxNQUFNO1FBQWVDLE1BQU07SUFBZTtJQUM1QztRQUFFRCxNQUFNO1FBQVFDLE1BQU07SUFBUTtJQUM5QjtRQUFFRCxNQUFNO1FBQWNDLE1BQU07SUFBYztDQUMzQztBQUVELFNBQVNDOztJQUNQLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNVyxrQkFBa0IsQ0FBQ0MsTUFBTUM7UUFDN0JMLGdCQUFnQkk7UUFDaEJGLGVBQWVHO0lBQ2pCO0lBRUEscUJBQ0UsOERBQUNDO1FBQU9DLFdBQVdiLHlFQUFZOzswQkFDN0IsOERBQUNjO2dCQUFJQyxLQUFJO2dCQUEwQkMsS0FBSTtnQkFBT0gsV0FBVTs7Ozs7OzBCQUN4RCw4REFBQ0k7Z0JBQUlKLFdBQVdiLHlFQUFZOzs7Ozs7MEJBQzVCLDhEQUFDbUI7Z0JBQUlOLFdBQVdiLHlFQUFZOzBCQUN6QkMsTUFBTW9CLEdBQUcsQ0FBQyxDQUFDWCxNQUFNQyxRQUFVLElBQU1GLGdCQUFnQkMsTUFBTUM7Ozs7Ozs7Ozs7OztBQWdCaEU7R0E5QlNQO0tBQUFBO0FBZ0NULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL0hlYWRlci5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IGxpbmtzID0gW1xuICB7IG5hbWU6IFwiSE9NRVwiLCBocmVmOiBcIi9cIiB9LFxuICB7IG5hbWU6IFwiREVTVElOQVRJT05cIiwgaHJlZjogXCIvRGVzdGluYXRpb25cIiB9LFxuICB7IG5hbWU6IFwiQ1JFV1wiLCBocmVmOiBcIi9DcmV3XCIgfSxcbiAgeyBuYW1lOiBcIlRFQ0hOT0xPR1lcIiwgaHJlZjogXCIvVGVjaG5vbG9neVwiIH0sXG5dO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZExpbmssIHNldFNlbGVjdGVkTGlua10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVMaW5rQ2xpY2sgPSAobGluaywgaW5kZXgpID0+IHtcbiAgICBzZXRTZWxlY3RlZExpbmsobGluayk7XG4gICAgc2V0QWN0aXZlSW5kZXgoaW5kZXgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlLmhlYWRlcn0+XG4gICAgICA8aW1nIHNyYz1cIi9hc3NldHMvc2hhcmVkL2xvZ28uc3ZnXCIgYWx0PVwibG9nb1wiIGNsYXNzTmFtZT1cImgtMTIgbWwtMTJcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN0cm9rZX0+PC9kaXY+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGUubmF2YmFyfT5cbiAgICAgICAge2xpbmtzLm1hcCgobGluaywgaW5kZXgpID0+ICgpID0+IGhhbmRsZUxpbmtDbGljayhsaW5rLCBpbmRleCkpfVxuICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9e3N0eWxlLm5hdmxpbmt9PlxuICAgICAgICAgIEhPTUVcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL0Rlc3RpbmF0aW9uXCIgY2xhc3NOYW1lPXtzdHlsZS5uYXZsaW5rfT5cbiAgICAgICAgICBERVNUSU5BVElPTlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvQ3Jld1wiIGNsYXNzTmFtZT17c3R5bGUubmF2bGlua30+XG4gICAgICAgICAgQ1JFV1xuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvVGVjaG5vbG9neVwiIGNsYXNzTmFtZT17c3R5bGUubmF2bGlua30+XG4gICAgICAgICAgVEVDSE5PTE9HWVxuICAgICAgICA8L0xpbms+ICovfVxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJzdHlsZSIsImxpbmtzIiwibmFtZSIsImhyZWYiLCJIZWFkZXIiLCJzZWxlY3RlZExpbmsiLCJzZXRTZWxlY3RlZExpbmsiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiaGFuZGxlTGlua0NsaWNrIiwibGluayIsImluZGV4IiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiZGl2Iiwic3Ryb2tlIiwibmF2IiwibmF2YmFyIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});