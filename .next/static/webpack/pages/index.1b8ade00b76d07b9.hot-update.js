/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/Header.module.css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/Header.module.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/getUrl.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../public/assets/fonts/Barlow_Condensed/BarlowCondensed-Regular.ttf */ \"./public/assets/fonts/Barlow_Condensed/BarlowCondensed-Regular.ttf\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n      font-family: 'Barlow Condensed';\\n      src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('true-type');\\n      font-weight: 400;\\n      font-style: normal;\\n      font-display: swap;\\n}\\n\\n.Header_header__072v2 {\\n      display: flex;\\n      justify-content: space-between;\\n      margin-top: 24px;\\n      position: fixed;\\n      width: 100%;\\n      align-items: center;\\n      font-family: \\\"Barlow Condensed\\\";\\n      height: 4.8rem;\\n}\\n\\n.Header_navbar__g1l5B {\\n      color: white;\\n      font-family: \\\"Barlow Condensed\\\", sans-serif;\\n      letter-spacing: 2.7px;\\n      height: 100%;\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      gap: 30px;\\n      -webkit-backdrop-filter: blur(20px);\\n              backdrop-filter: blur(20px);\\n      background-color: rgba(225, 225, 225, 0.1);\\n      width: 60%;\\n}\\n\\n.Header_navlink__qCOst {\\n      height: 100%;\\n      text-align: center;\\n      padding: 27px 2px;\\n      text-justify: center;\\n      position: relative;\\n}\\n\\n.Header_navlink__qCOst:nth-of-type(1)::before {\\n      content: \\\"00\\\";\\n      height: 100%;\\n      width: 100%;\\n\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Header.module.css\"],\"names\":[],\"mappings\":\"AAAA;MACM,+BAA+B;MAC/B,gEAAmG;MACnG,gBAAgB;MAChB,kBAAkB;MAClB,kBAAkB;AACxB;;AAEA;MACM,aAAa;MACb,8BAA8B;MAC9B,gBAAgB;MAChB,eAAe;MACf,WAAW;MACX,mBAAmB;MACnB,+BAA+B;MAC/B,cAAc;AACpB;;AAEA;MACM,YAAY;MACZ,2CAA2C;MAC3C,qBAAqB;MACrB,YAAY;MACZ,aAAa;MACb,mBAAmB;MACnB,uBAAuB;MACvB,SAAS;MACT,mCAA2B;cAA3B,2BAA2B;MAC3B,0CAA0C;MAC1C,UAAU;AAChB;;AAEA;MACM,YAAY;MACZ,kBAAkB;MAClB,iBAAiB;MACjB,oBAAoB;MACpB,kBAAkB;AACxB;;AAEA;MACM,aAAa;MACb,YAAY;MACZ,WAAW;;AAEjB\",\"sourcesContent\":[\"@font-face {\\n      font-family: 'Barlow Condensed';\\n      src: url(\\\"../public/assets/fonts/Barlow_Condensed/BarlowCondensed-Regular.ttf\\\") format('true-type');\\n      font-weight: 400;\\n      font-style: normal;\\n      font-display: swap;\\n}\\n\\n.header {\\n      display: flex;\\n      justify-content: space-between;\\n      margin-top: 24px;\\n      position: fixed;\\n      width: 100%;\\n      align-items: center;\\n      font-family: \\\"Barlow Condensed\\\";\\n      height: 4.8rem;\\n}\\n\\n.navbar {\\n      color: white;\\n      font-family: \\\"Barlow Condensed\\\", sans-serif;\\n      letter-spacing: 2.7px;\\n      height: 100%;\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      gap: 30px;\\n      backdrop-filter: blur(20px);\\n      background-color: rgba(225, 225, 225, 0.1);\\n      width: 60%;\\n}\\n\\n.navlink {\\n      height: 100%;\\n      text-align: center;\\n      padding: 27px 2px;\\n      text-justify: center;\\n      position: relative;\\n}\\n\\n.navlink:nth-of-type(1)::before {\\n      content: \\\"00\\\";\\n      height: 100%;\\n      width: 100%;\\n\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header\": \"Header_header__072v2\",\n\t\"navbar\": \"Header_navbar__g1l5B\",\n\t\"navlink\": \"Header_navlink__qCOst\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL0hlYWRlci5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pILHNDQUFzQyxtQkFBTyxDQUFDLHlLQUFrRjtBQUNoSSxvQ0FBb0MsbUJBQU8sQ0FBQywrSUFBcUU7QUFDakg7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELHdDQUF3QyxpRkFBaUYseUJBQXlCLDJCQUEyQiwyQkFBMkIsR0FBRywyQkFBMkIsc0JBQXNCLHVDQUF1Qyx5QkFBeUIsd0JBQXdCLG9CQUFvQiw0QkFBNEIsMENBQTBDLHVCQUF1QixHQUFHLDJCQUEyQixxQkFBcUIsc0RBQXNELDhCQUE4QixxQkFBcUIsc0JBQXNCLDRCQUE0QixnQ0FBZ0Msa0JBQWtCLDRDQUE0Qyw0Q0FBNEMsbURBQW1ELG1CQUFtQixHQUFHLDRCQUE0QixxQkFBcUIsMkJBQTJCLDBCQUEwQiw2QkFBNkIsMkJBQTJCLEdBQUcsbURBQW1ELHdCQUF3QixxQkFBcUIsb0JBQW9CLEtBQUssT0FBTyx5RkFBeUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLHNDQUFzQyx3Q0FBd0MsOEdBQThHLHlCQUF5QiwyQkFBMkIsMkJBQTJCLEdBQUcsYUFBYSxzQkFBc0IsdUNBQXVDLHlCQUF5Qix3QkFBd0Isb0JBQW9CLDRCQUE0QiwwQ0FBMEMsdUJBQXVCLEdBQUcsYUFBYSxxQkFBcUIsc0RBQXNELDhCQUE4QixxQkFBcUIsc0JBQXNCLDRCQUE0QixnQ0FBZ0Msa0JBQWtCLG9DQUFvQyxtREFBbUQsbUJBQW1CLEdBQUcsY0FBYyxxQkFBcUIsMkJBQTJCLDBCQUEwQiw2QkFBNkIsMkJBQTJCLEdBQUcscUNBQXFDLHdCQUF3QixxQkFBcUIsb0JBQW9CLEtBQUssbUJBQW1CO0FBQ3J6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3M/N2UzMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9mb250cy9CYXJsb3dfQ29uZGVuc2VkL0Jhcmxvd0NvbmRlbnNlZC1SZWd1bGFyLnR0ZlwiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnO1xcbiAgICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWUtdHlwZScpO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuLkhlYWRlcl9oZWFkZXJfXzA3MnYyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93IENvbmRlbnNlZFxcXCI7XFxuICAgICAgaGVpZ2h0OiA0LjhyZW07XFxufVxcblxcbi5IZWFkZXJfbmF2YmFyX19nMWw1QiB7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93IENvbmRlbnNlZFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuN3B4O1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgZ2FwOiAzMHB4O1xcbiAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbiAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC4xKTtcXG4gICAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uSGVhZGVyX25hdmxpbmtfX3FDT3N0IHtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDI3cHggMnB4O1xcbiAgICAgIHRleHQtanVzdGlmeTogY2VudGVyO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLkhlYWRlcl9uYXZsaW5rX19xQ09zdDpudGgtb2YtdHlwZSgxKTo6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiBcXFwiMDBcXFwiO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9IZWFkZXIubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtNQUNNLCtCQUErQjtNQUMvQixnRUFBbUc7TUFDbkcsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixrQkFBa0I7QUFDeEI7O0FBRUE7TUFDTSxhQUFhO01BQ2IsOEJBQThCO01BQzlCLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsV0FBVztNQUNYLG1CQUFtQjtNQUNuQiwrQkFBK0I7TUFDL0IsY0FBYztBQUNwQjs7QUFFQTtNQUNNLFlBQVk7TUFDWiwyQ0FBMkM7TUFDM0MscUJBQXFCO01BQ3JCLFlBQVk7TUFDWixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixTQUFTO01BQ1QsbUNBQTJCO2NBQTNCLDJCQUEyQjtNQUMzQiwwQ0FBMEM7TUFDMUMsVUFBVTtBQUNoQjs7QUFFQTtNQUNNLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLG9CQUFvQjtNQUNwQixrQkFBa0I7QUFDeEI7O0FBRUE7TUFDTSxhQUFhO01BQ2IsWUFBWTtNQUNaLFdBQVc7O0FBRWpCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICAgIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCc7XFxuICAgICAgc3JjOiB1cmwoXFxcIi4uL3B1YmxpYy9hc3NldHMvZm9udHMvQmFybG93X0NvbmRlbnNlZC9CYXJsb3dDb25kZW5zZWQtUmVndWxhci50dGZcXFwiKSBmb3JtYXQoJ3RydWUtdHlwZScpO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgbWFyZ2luLXRvcDogMjRweDtcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBmb250LWZhbWlseTogXFxcIkJhcmxvdyBDb25kZW5zZWRcXFwiO1xcbiAgICAgIGhlaWdodDogNC44cmVtO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3cgQ29uZGVuc2VkXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMi43cHg7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBnYXA6IDMwcHg7XFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC4xKTtcXG4gICAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4ubmF2bGluayB7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiAyN3B4IDJweDtcXG4gICAgICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uYXZsaW5rOm50aC1vZi10eXBlKDEpOjpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCIwMFxcXCI7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX18wNzJ2MlwiLFxuXHRcIm5hdmJhclwiOiBcIkhlYWRlcl9uYXZiYXJfX2cxbDVCXCIsXG5cdFwibmF2bGlua1wiOiBcIkhlYWRlcl9uYXZsaW5rX19xQ09zdFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/Header.module.css\n"));

/***/ })

});