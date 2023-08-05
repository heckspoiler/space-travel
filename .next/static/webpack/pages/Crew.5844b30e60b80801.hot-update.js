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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst links = [\n    {\n        name: \"HOME\",\n        href: \"/\"\n    },\n    {\n        name: \"DESTINATION\",\n        href: \"/Destination\"\n    },\n    {\n        name: \"CREW\",\n        href: \"/Crew\"\n    },\n    {\n        name: \"TECHNOLOGY\",\n        href: \"/Technology\"\n    }\n];\nfunction Header() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleToggle = ()=>{\n        setIsMobile(!isMobile);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth > 375) {\n                setIsMobile(false);\n            }\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().crossContainer),\n                onClick: handleToggle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/assets/shared/logo.svg\",\n                alt: \"logo\",\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo)\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().stroke)\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navbar), \" \").concat(isOpen ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navbarVisible) : \"\"),\n                children: links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: router.pathname === link.href ? \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navlink), \" \").concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().active)) : (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navlink),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: link.href,\n                            children: link.name\n                        }, void 0, false, {\n                            fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Carlito/Desktop/repos/space-travel/components/Header.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"pqqXOEAIE6UbqleU6zHY5ziUVow=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDWDtBQUNvQjtBQUVqRCxNQUFNSyxRQUFRO0lBQ1o7UUFBRUMsTUFBTTtRQUFRQyxNQUFNO0lBQUk7SUFDMUI7UUFBRUQsTUFBTTtRQUFlQyxNQUFNO0lBQWU7SUFDNUM7UUFBRUQsTUFBTTtRQUFRQyxNQUFNO0lBQVE7SUFDOUI7UUFBRUQsTUFBTTtRQUFjQyxNQUFNO0lBQWM7Q0FDM0M7QUFFRCxTQUFTQzs7SUFDUCxNQUFNQyxTQUFTUCxzREFBU0E7SUFDeEIsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1ZLGVBQWU7UUFDbkJELFlBQVksQ0FBQ0Q7SUFDZjtJQUVBVCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLGVBQWU7WUFDbkIsSUFBSUMsT0FBT0MsVUFBVSxHQUFHLEtBQUs7Z0JBQzNCSixZQUFZO1lBQ2Q7UUFDRjtRQUVBRyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUVsQyxPQUFPO1lBQ0xDLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNLO1FBQU9DLFdBQVdmLHlFQUFhOzswQkFDOUIsOERBQUNnQjtnQkFBSUQsV0FBV2YsaUZBQXFCO2dCQUFFa0IsU0FBU1Y7O2tDQUM5Qyw4REFBQ1E7Ozs7O2tDQUNELDhEQUFDQTs7Ozs7a0NBQ0QsOERBQUNBOzs7Ozs7Ozs7OzswQkFFSCw4REFBQ0c7Z0JBQUlDLEtBQUk7Z0JBQTBCQyxLQUFJO2dCQUFPTixXQUFXZix1RUFBVzs7Ozs7OzBCQUNwRSw4REFBQ2dCO2dCQUFJRCxXQUFXZix5RUFBYTs7Ozs7OzBCQUM3Qiw4REFBQ3dCO2dCQUFJVCxXQUFXLEdBQW9CVSxPQUFqQnpCLHlFQUFhLEVBQUMsS0FBc0MsT0FBbkN5QixTQUFTekIsZ0ZBQW9CLEdBQUc7MEJBQ2pFQyxNQUFNMkIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNoQiw4REFBQ0M7d0JBRUNoQixXQUNFVixPQUFPMkIsUUFBUSxLQUFLSCxLQUFLMUIsSUFBSSxHQUN6QixHQUFxQkgsT0FBbEJBLDBFQUFjLEVBQUMsS0FBaUIsT0FBZEEseUVBQWEsSUFDbENBLDBFQUFjO2tDQUdwQiw0RUFBQ0Qsa0RBQUlBOzRCQUFDSSxNQUFNMEIsS0FBSzFCLElBQUk7c0NBQUcwQixLQUFLM0IsSUFBSTs7Ozs7O3VCQVA1QjRCOzs7Ozs7Ozs7Ozs7Ozs7O0FBYWpCO0dBOUNTMUI7O1FBQ1FOLGtEQUFTQTs7O0tBRGpCTTtBQWdEVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hlYWRlci5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IGxpbmtzID0gW1xuICB7IG5hbWU6IFwiSE9NRVwiLCBocmVmOiBcIi9cIiB9LFxuICB7IG5hbWU6IFwiREVTVElOQVRJT05cIiwgaHJlZjogXCIvRGVzdGluYXRpb25cIiB9LFxuICB7IG5hbWU6IFwiQ1JFV1wiLCBocmVmOiBcIi9DcmV3XCIgfSxcbiAgeyBuYW1lOiBcIlRFQ0hOT0xPR1lcIiwgaHJlZjogXCIvVGVjaG5vbG9neVwiIH0sXG5dO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgc2V0SXNNb2JpbGUoIWlzTW9iaWxlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDM3NSkge1xuICAgICAgICBzZXRJc01vYmlsZShmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcm9zc0NvbnRhaW5lcn0gb25DbGljaz17aGFuZGxlVG9nZ2xlfT5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL3NoYXJlZC9sb2dvLnN2Z1wiIGFsdD1cImxvZ29cIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdHJva2V9PjwvZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYXZiYXJ9ICR7aXNPcGVuID8gc3R5bGVzLm5hdmJhclZpc2libGUgOiBcIlwifWB9PlxuICAgICAgICB7bGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDx1bFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gbGluay5ocmVmXG4gICAgICAgICAgICAgICAgPyBgJHtzdHlsZXMubmF2bGlua30gJHtzdHlsZXMuYWN0aXZlfWBcbiAgICAgICAgICAgICAgICA6IHN0eWxlcy5uYXZsaW5rXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17bGluay5ocmVmfT57bGluay5uYW1lfTwvTGluaz5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICApKX1cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwic3R5bGVzIiwibGlua3MiLCJuYW1lIiwiaHJlZiIsIkhlYWRlciIsInJvdXRlciIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJoYW5kbGVUb2dnbGUiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJjcm9zc0NvbnRhaW5lciIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJsb2dvIiwic3Ryb2tlIiwibmF2IiwiaXNPcGVuIiwibmF2YmFyIiwibmF2YmFyVmlzaWJsZSIsIm1hcCIsImxpbmsiLCJpbmRleCIsInVsIiwicGF0aG5hbWUiLCJuYXZsaW5rIiwiYWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});