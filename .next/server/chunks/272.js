exports.id = 272;
exports.ids = [272];
exports.modules = {

/***/ 4666:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__072v2",
	"logo": "Header_logo__0dir7",
	"crossContainer": "Header_crossContainer__rSl1i",
	"navbar": "Header_navbar__g1l5B",
	"navlink": "Header_navlink__qCOst",
	"active": "Header_active__3IUjt",
	"stroke": "Header_stroke__H5Gdl",
	"navbarVisible": "Header_navbarVisible__Uz4WI",
	"crossStroke": "Header_crossStroke__4WBr7"
};


/***/ }),

/***/ 5221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4666);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__);





const links = [
    {
        name: "HOME",
        href: "/"
    },
    {
        name: "DESTINATION",
        href: "/Destination"
    },
    {
        name: "CREW",
        href: "/Crew"
    },
    {
        name: "TECHNOLOGY",
        href: "/Technology"
    }
];
function Header() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleToggle = ()=>{
        setIsMobile(!isMobile);
        setIsMenuOpen(!isMenuOpen);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleResize = ()=>{
            if (window.innerWidth > 375) {
                setIsMobile(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().crossContainer),
                onClick: handleToggle,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${isMobile ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().crossStroke) : ""}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${isMobile ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().crossStroke) : ""}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${isMobile ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().crossStroke) : ""}`
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/shared/logo.svg",
                alt: "logo",
                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().stroke)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navbar)} ${isMobile ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navbarVisible) : ""}`,
                children: links.map((link, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: router.pathname === link.href ? `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navlink)} ${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().active)}` : (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navlink),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: link.href,
                            children: link.name
                        })
                    }, index))
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 6004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);


function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;