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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst links = [\n    {\n        name: \"HOME\",\n        href: \"/\"\n    },\n    {\n        name: \"DESTINATION\",\n        href: \"/Destination\"\n    },\n    {\n        name: \"CREW\",\n        href: \"/Crew\"\n    },\n    {\n        name: \"TECHNOLOGY\",\n        href: \"/Technology\"\n    }\n];\nfunction Header() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleToggle = ()=>{\n        setIsMobile(!isMobile);\n        setIsMenuOpen(!isMenuOpen);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth > 375) {\n                setIsMobile(false);\n            }\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().crossContainer),\n                onClick: handleToggle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(isMobile ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().crossStroke) : \"\")\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(isMobile ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().crossStroke) : \"\")\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(isMobile ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().crossStroke) : \"\")\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/assets/shared/logo.svg\",\n                alt: \"logo\",\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo)\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().stroke)\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navbar), \" \").concat(isMobile ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navbarVisible) : \"\"),\n                children: links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: router.pathname === link.href ? \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navlink), \" \").concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().active)) : (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navlink),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: link.href,\n                            children: link.name\n                        }, void 0, false, {\n                            fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"ls+cgS8dNRiN7JXfP1SBBdUcpgM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDWDtBQUNvQjtBQUVqRCxNQUFNSyxRQUFRO0lBQ1o7UUFBRUMsTUFBTTtRQUFRQyxNQUFNO0lBQUk7SUFDMUI7UUFBRUQsTUFBTTtRQUFlQyxNQUFNO0lBQWU7SUFDNUM7UUFBRUQsTUFBTTtRQUFRQyxNQUFNO0lBQVE7SUFDOUI7UUFBRUQsTUFBTTtRQUFjQyxNQUFNO0lBQWM7Q0FDM0M7QUFFRCxTQUFTQzs7SUFDUCxNQUFNQyxTQUFTUCxzREFBU0E7SUFDeEIsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNYyxlQUFlO1FBQ25CSCxZQUFZLENBQUNEO1FBQ2JHLGNBQWMsQ0FBQ0Q7SUFDakI7SUFFQVgsZ0RBQVNBLENBQUM7UUFDUixNQUFNYyxlQUFlO1lBQ25CLElBQUlDLE9BQU9DLFVBQVUsR0FBRyxLQUFLO2dCQUMzQk4sWUFBWTtZQUNkO1FBQ0Y7UUFFQUssT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFFbEMsT0FBTztZQUNMQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDSztRQUFPQyxXQUFXakIseUVBQWE7OzBCQUM5Qiw4REFBQ2tCO2dCQUFJRCxXQUFXakIsaUZBQXFCO2dCQUFFb0IsU0FBU1Y7O2tDQUM5Qyw4REFBQ1E7d0JBQUlELFdBQVcsR0FBc0MsT0FBbkNYLFdBQVdOLDhFQUFrQixHQUFHOzs7Ozs7a0NBQ25ELDhEQUFDa0I7d0JBQUlELFdBQVcsR0FBc0MsT0FBbkNYLFdBQVdOLDhFQUFrQixHQUFHOzs7Ozs7a0NBQ25ELDhEQUFDa0I7d0JBQUlELFdBQVcsR0FBc0MsT0FBbkNYLFdBQVdOLDhFQUFrQixHQUFHOzs7Ozs7Ozs7Ozs7MEJBRXJELDhEQUFDc0I7Z0JBQUlDLEtBQUk7Z0JBQTBCQyxLQUFJO2dCQUFPUCxXQUFXakIsdUVBQVc7Ozs7OzswQkFDcEUsOERBQUNrQjtnQkFBSUQsV0FBV2pCLHlFQUFhOzs7Ozs7MEJBQzdCLDhEQUFDMkI7Z0JBQ0NWLFdBQVcsR0FBb0JYLE9BQWpCTix5RUFBYSxFQUFDLEtBQXdDLE9BQXJDTSxXQUFXTixnRkFBb0IsR0FBRzswQkFFaEVDLE1BQU02QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2hCLDhEQUFDQzt3QkFFQ2hCLFdBQ0VaLE9BQU82QixRQUFRLEtBQUtILEtBQUs1QixJQUFJLEdBQ3pCLEdBQXFCSCxPQUFsQkEsMEVBQWMsRUFBQyxLQUFpQixPQUFkQSx5RUFBYSxJQUNsQ0EsMEVBQWM7a0NBR3BCLDRFQUFDRCxrREFBSUE7NEJBQUNJLE1BQU00QixLQUFLNUIsSUFBSTtzQ0FBRzRCLEtBQUs3QixJQUFJOzs7Ozs7dUJBUDVCOEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhakI7R0FsRFM1Qjs7UUFDUU4sa0RBQVNBOzs7S0FEakJNO0FBb0RULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgbmFtZTogXCJIT01FXCIsIGhyZWY6IFwiL1wiIH0sXG4gIHsgbmFtZTogXCJERVNUSU5BVElPTlwiLCBocmVmOiBcIi9EZXN0aW5hdGlvblwiIH0sXG4gIHsgbmFtZTogXCJDUkVXXCIsIGhyZWY6IFwiL0NyZXdcIiB9LFxuICB7IG5hbWU6IFwiVEVDSE5PTE9HWVwiLCBocmVmOiBcIi9UZWNobm9sb2d5XCIgfSxcbl07XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xuICAgIHNldElzTW9iaWxlKCFpc01vYmlsZSk7XG4gICAgc2V0SXNNZW51T3BlbighaXNNZW51T3Blbik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiAzNzUpIHtcbiAgICAgICAgc2V0SXNNb2JpbGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3Jvc3NDb250YWluZXJ9IG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpc01vYmlsZSA/IHN0eWxlcy5jcm9zc1N0cm9rZSA6IFwiXCJ9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpc01vYmlsZSA/IHN0eWxlcy5jcm9zc1N0cm9rZSA6IFwiXCJ9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpc01vYmlsZSA/IHN0eWxlcy5jcm9zc1N0cm9rZSA6IFwiXCJ9YH0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9zaGFyZWQvbG9nby5zdmdcIiBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3Ryb2tlfT48L2Rpdj5cbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2YmFyfSAke2lzTW9iaWxlID8gc3R5bGVzLm5hdmJhclZpc2libGUgOiBcIlwifWB9XG4gICAgICA+XG4gICAgICAgIHtsaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXG4gICAgICAgICAgPHVsXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBsaW5rLmhyZWZcbiAgICAgICAgICAgICAgICA/IGAke3N0eWxlcy5uYXZsaW5rfSAke3N0eWxlcy5hY3RpdmV9YFxuICAgICAgICAgICAgICAgIDogc3R5bGVzLm5hdmxpbmtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPXtsaW5rLmhyZWZ9PntsaW5rLm5hbWV9PC9MaW5rPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICkpfVxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxpbmsiLCJzdHlsZXMiLCJsaW5rcyIsIm5hbWUiLCJocmVmIiwiSGVhZGVyIiwicm91dGVyIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsImlzTWVudU9wZW4iLCJzZXRJc01lbnVPcGVuIiwiaGFuZGxlVG9nZ2xlIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiY3Jvc3NDb250YWluZXIiLCJvbkNsaWNrIiwiY3Jvc3NTdHJva2UiLCJpbWciLCJzcmMiLCJhbHQiLCJsb2dvIiwic3Ryb2tlIiwibmF2IiwibmF2YmFyIiwibmF2YmFyVmlzaWJsZSIsIm1hcCIsImxpbmsiLCJpbmRleCIsInVsIiwicGF0aG5hbWUiLCJuYXZsaW5rIiwiYWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});