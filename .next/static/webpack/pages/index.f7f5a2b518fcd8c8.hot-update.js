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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst links = [\n    {\n        name: \"HOME\",\n        href: \"/\"\n    },\n    {\n        name: \"DESTINATION\",\n        href: \"/Destination\"\n    },\n    {\n        name: \"CREW\",\n        href: \"/Crew\"\n    },\n    {\n        name: \"TECHNOLOGY\",\n        href: \"/Technology\"\n    }\n];\nfunction Header() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleToggle = ()=>{\n        setIsMobile(!isMobile);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth > 375) {\n                setIsMobile(false);\n            }\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().crossContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/assets/shared/logo.svg\",\n                alt: \"logo\",\n                className: \"h-12 ml-12\"\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().stroke)\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: isMobile ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburgerMenu) : (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navbar),\n                children: [\n                    links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: router.pathname === link.href ? \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navlink), \" \").concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().active)) : (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navlink),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: link.href,\n                                children: link.name\n                            }, void 0, false, {\n                                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburgerIcon),\n                        onClick: handleToggle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/path-to-hamburger-icon\",\n                            alt: \"menu\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"pqqXOEAIE6UbqleU6zHY5ziUVow=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDWDtBQUNvQjtBQUVqRCxNQUFNSyxRQUFRO0lBQ1o7UUFBRUMsTUFBTTtRQUFRQyxNQUFNO0lBQUk7SUFDMUI7UUFBRUQsTUFBTTtRQUFlQyxNQUFNO0lBQWU7SUFDNUM7UUFBRUQsTUFBTTtRQUFRQyxNQUFNO0lBQVE7SUFDOUI7UUFBRUQsTUFBTTtRQUFjQyxNQUFNO0lBQWM7Q0FDM0M7QUFFRCxTQUFTQzs7SUFDUCxNQUFNQyxTQUFTUCxzREFBU0E7SUFDeEIsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1ZLGVBQWU7UUFDbkJELFlBQVksQ0FBQ0Q7SUFDZjtJQUVBVCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLGVBQWU7WUFDbkIsSUFBSUMsT0FBT0MsVUFBVSxHQUFHLEtBQUs7Z0JBQzNCSixZQUFZO1lBQ2Q7UUFDRjtRQUVBRyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUVsQyxPQUFPO1lBQ0xDLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNLO1FBQU9DLFdBQVdmLHlFQUFhOzswQkFDOUIsOERBQUNnQjtnQkFBSUQsV0FBV2YsaUZBQXFCOztrQ0FDbkMsOERBQUNnQjs7Ozs7a0NBQ0QsOERBQUNBOzs7OztrQ0FDRCw4REFBQ0E7Ozs7Ozs7Ozs7OzBCQUVILDhEQUFDRTtnQkFBSUMsS0FBSTtnQkFBMEJDLEtBQUk7Z0JBQU9MLFdBQVU7Ozs7OzswQkFDeEQsOERBQUNDO2dCQUFJRCxXQUFXZix5RUFBYTs7Ozs7OzBCQUM3Qiw4REFBQ3NCO2dCQUFJUCxXQUFXVCxXQUFXTixnRkFBb0IsR0FBR0EseUVBQWE7O29CQUM1REMsTUFBTXdCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDaEIsOERBQUNDOzRCQUVDYixXQUNFVixPQUFPd0IsUUFBUSxLQUFLSCxLQUFLdkIsSUFBSSxHQUN6QixHQUFxQkgsT0FBbEJBLDBFQUFjLEVBQUMsS0FBaUIsT0FBZEEseUVBQWEsSUFDbENBLDBFQUFjO3NDQUdwQiw0RUFBQ0Qsa0RBQUlBO2dDQUFDSSxNQUFNdUIsS0FBS3ZCLElBQUk7MENBQUd1QixLQUFLeEIsSUFBSTs7Ozs7OzJCQVA1QnlCOzs7OztrQ0FVVCw4REFBQ1g7d0JBQUlELFdBQVdmLGdGQUFvQjt3QkFBRWlDLFNBQVN6QjtrQ0FDN0MsNEVBQUNVOzRCQUFJQyxLQUFJOzRCQUEwQkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakQ7R0FqRFNoQjs7UUFDUU4sa0RBQVNBOzs7S0FEakJNO0FBbURULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgbmFtZTogXCJIT01FXCIsIGhyZWY6IFwiL1wiIH0sXG4gIHsgbmFtZTogXCJERVNUSU5BVElPTlwiLCBocmVmOiBcIi9EZXN0aW5hdGlvblwiIH0sXG4gIHsgbmFtZTogXCJDUkVXXCIsIGhyZWY6IFwiL0NyZXdcIiB9LFxuICB7IG5hbWU6IFwiVEVDSE5PTE9HWVwiLCBocmVmOiBcIi9UZWNobm9sb2d5XCIgfSxcbl07XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRJc01vYmlsZSghaXNNb2JpbGUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMzc1KSB7XG4gICAgICAgIHNldElzTW9iaWxlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyb3NzQ29udGFpbmVyfT5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL3NoYXJlZC9sb2dvLnN2Z1wiIGFsdD1cImxvZ29cIiBjbGFzc05hbWU9XCJoLTEyIG1sLTEyXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3Ryb2tlfT48L2Rpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtpc01vYmlsZSA/IHN0eWxlcy5oYW1idXJnZXJNZW51IDogc3R5bGVzLm5hdmJhcn0+XG4gICAgICAgIHtsaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXG4gICAgICAgICAgPHVsXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBsaW5rLmhyZWZcbiAgICAgICAgICAgICAgICA/IGAke3N0eWxlcy5uYXZsaW5rfSAke3N0eWxlcy5hY3RpdmV9YFxuICAgICAgICAgICAgICAgIDogc3R5bGVzLm5hdmxpbmtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPXtsaW5rLmhyZWZ9PntsaW5rLm5hbWV9PC9MaW5rPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICkpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhhbWJ1cmdlckljb259IG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0+XG4gICAgICAgICAgPGltZyBzcmM9XCIvcGF0aC10by1oYW1idXJnZXItaWNvblwiIGFsdD1cIm1lbnVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwic3R5bGVzIiwibGlua3MiLCJuYW1lIiwiaHJlZiIsIkhlYWRlciIsInJvdXRlciIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJoYW5kbGVUb2dnbGUiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJjcm9zc0NvbnRhaW5lciIsImltZyIsInNyYyIsImFsdCIsInN0cm9rZSIsIm5hdiIsImhhbWJ1cmdlck1lbnUiLCJuYXZiYXIiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJ1bCIsInBhdGhuYW1lIiwibmF2bGluayIsImFjdGl2ZSIsImhhbWJ1cmdlckljb24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});