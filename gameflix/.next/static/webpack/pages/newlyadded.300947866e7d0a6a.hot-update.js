/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/newlyadded",{

/***/ "./node_modules/next/dist/build/polyfills/process.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/process.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("\nvar _global_process, _global_process1;\nmodule.exports = ((_global_process = __webpack_require__.g.process) == null ? void 0 : _global_process.env) && typeof ((_global_process1 = __webpack_require__.g.process) == null ? void 0 : _global_process1.env) === \"object\" ? __webpack_require__.g.process : __webpack_require__(/*! ../../compiled/process */ \"./node_modules/next/dist/compiled/process/browser.js\");\n\n//# sourceMappingURL=process.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9wcm9jZXNzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQSxxQ0FBcUMscUJBQU0saUZBQWlGLHFCQUFNLGtFQUFrRSxxQkFBTSxXQUFXLG1CQUFPLENBQUMsb0ZBQXdCOztBQUVyUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9wcm9jZXNzLmpzP2NhNjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2dsb2JhbF9wcm9jZXNzLCBfZ2xvYmFsX3Byb2Nlc3MxO1xubW9kdWxlLmV4cG9ydHMgPSAoKF9nbG9iYWxfcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzKSA9PSBudWxsID8gdm9pZCAwIDogX2dsb2JhbF9wcm9jZXNzLmVudikgJiYgdHlwZW9mICgoX2dsb2JhbF9wcm9jZXNzMSA9IGdsb2JhbC5wcm9jZXNzKSA9PSBudWxsID8gdm9pZCAwIDogX2dsb2JhbF9wcm9jZXNzMS5lbnYpID09PSBcIm9iamVjdFwiID8gZ2xvYmFsLnByb2Nlc3MgOiByZXF1aXJlKFwiLi4vLi4vY29tcGlsZWQvcHJvY2Vzc1wiKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvY2Vzcy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/polyfills/process.js\n"));

/***/ }),

/***/ "./pages/newlyadded.js":
/*!*****************************!*\
  !*** ./pages/newlyadded.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Newlyadded; },\n/* harmony export */   handleLoadMore: function() { return /* binding */ handleLoadMore; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Newlyadded_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Newlyadded.module.css */ \"./styles/Newlyadded.module.css\");\n/* harmony import */ var _styles_Newlyadded_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Newlyadded_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_functions_getGames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/functions/getGames */ \"./components/functions/getGames.js\");\n/* harmony import */ var _components_cards_gamecard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/cards/gamecard */ \"./components/cards/gamecard.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSG = true;\nasync function handleLoadMore() {\n    setPage(page + 1);\n    const key = process.env.API_KEY;\n    const games = await (0,_components_functions_getGames__WEBPACK_IMPORTED_MODULE_3__.getGamesData)(key, \"ordering=released&page=\".concat(page));\n    setData([\n        data\n    ]);\n}\nfunction Newlyadded(param) {\n    let { games } = param;\n    _s();\n    const [data1, setData1] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(games.results);\n    const [page1, setPage1] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(2);\n    console.log(data1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Explore\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/newlyadded.js\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Gameflix Social Media application\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/newlyadded.js\",\n                        lineNumber: 33,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/newlyadded.js\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/newlyadded.js\",\n                        lineNumber: 35,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/newlyadded.js\",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/newlyadded.js\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/newlyadded.js\",\n                        lineNumber: 38,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/newlyadded.js\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_Newlyadded_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Newlyadded_module_css__WEBPACK_IMPORTED_MODULE_6___default().header_container),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_Newlyadded_module_css__WEBPACK_IMPORTED_MODULE_6___default().header_text),\n                            children: \"Popular Games\"\n                        }, void 0, false, {\n                            fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/newlyadded.js\",\n                            lineNumber: 45,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/newlyadded.js\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Newlyadded_module_css__WEBPACK_IMPORTED_MODULE_6___default().header_text)\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/newlyadded.js\",\n                        lineNumber: 47,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Newlyadded_module_css__WEBPACK_IMPORTED_MODULE_6___default().genre_container),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Newlyadded_module_css__WEBPACK_IMPORTED_MODULE_6___default().genre_cards),\n                            children: [\n                                data1.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cards_gamecard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        href: \"/game/\".concat(game.slug),\n                                        name: game.name,\n                                        bg: game.background_image,\n                                        genres: game.genres\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/newlyadded.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 8\n                                    }, this)),\n                                page1,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setPage1(page1 + 1),\n                                    children: \"Load more\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/newlyadded.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/newlyadded.js\",\n                            lineNumber: 49,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/newlyadded.js\",\n                        lineNumber: 48,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/newlyadded.js\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/newlyadded.js\",\n        lineNumber: 30,\n        columnNumber: 3\n    }, this);\n}\n_s(Newlyadded, \"BDQXojteVOiJvAxdgJffy8CsxJY=\");\n_c = Newlyadded;\nvar _c;\n$RefreshReg$(_c, \"Newlyadded\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdseWFkZGVkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ25CO0FBQ3VCO0FBQ3NCO0FBQ3ZCO0FBQ2xCOztBQVcxQixlQUFlTztJQUNyQkMsUUFBUUMsT0FBTztJQUNmLE1BQU1DLE1BQU1DLE9BQU9BLENBQUNDLElBQUlDO0lBQ3hCLE1BQU1DLFFBQVEsTUFBTVgsNEVBQVlBLENBQUNPLEtBQUssMEJBQStCLE9BQUxEO0lBQ2hFTSxRQUFRO1FBQUNDO0tBQUs7QUFDZjtBQUVlLFNBQVNDLFdBQVcsS0FBUztRQUFULEVBQUVILEtBQUssRUFBRSxHQUFUOztJQUNsQyxNQUFNLENBQUNFLE9BQU1ELFNBQVEsR0FBR1QsK0NBQVFBLENBQUNRLE1BQU1JO0lBQ3ZDLE1BQU0sQ0FBQ1QsT0FBTUQsU0FBUSxHQUFHRiwrQ0FBUUEsQ0FBQztJQUNqQ2EsUUFBUUMsSUFBSUo7SUFFWixxQkFDQyw4REFBQ2hCLGlFQUFNQTs7MEJBQ04sOERBQUNDLGtEQUFJQTs7a0NBQ0osOERBQUNvQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7a0NBQ3RCLDhEQUFDRjt3QkFBS0MsS0FBSTt3QkFBYUMsTUFBSzs7Ozs7O2tDQUM1Qiw4REFBQ0Y7d0JBQUtDLEtBQUk7d0JBQWFDLE1BQUs7d0JBQTRCQyxXQUFXOzs7Ozs7a0NBQ25FLDhEQUFDSDt3QkFDQUUsTUFBSzt3QkFDTEQsS0FBSTs7Ozs7Ozs7Ozs7OzBCQUdOLDhEQUFDRztnQkFBUUMsV0FBVzVCLDJFQUFXNkI7O2tDQUM5Qiw4REFBQ0M7d0JBQUlGLFdBQVc1Qix1RkFBdUIrQjtrQ0FDdEMsNEVBQUNDOzRCQUFHSixXQUFXNUIsa0ZBQWtCaUM7c0NBQUU7Ozs7Ozs7Ozs7O2tDQUVwQyw4REFBQ0g7d0JBQUlGLFdBQVc1QixrRkFBa0JpQzs7Ozs7O2tDQUNsQyw4REFBQ0g7d0JBQUlGLFdBQVc1QixzRkFBc0JrQztrQ0FDckMsNEVBQUNKOzRCQUFJRixXQUFXNUIsa0ZBQWtCbUM7O2dDQUNoQ3JCLE1BQUtzQixJQUFJLENBQUNDLHFCQUNWLDhEQUFDbEMsa0VBQVFBO3dDQUNSc0IsTUFBTSxTQUFtQixPQUFWWSxLQUFLQzt3Q0FDcEJqQixNQUFNZ0IsS0FBS2hCO3dDQUNYa0IsSUFBSUYsS0FBS0c7d0NBQ1RDLFFBQVFKLEtBQUtJOzs7Ozs7Z0NBR2RsQzs4Q0FDRCw4REFBQ21DO29DQUFPQyxTQUFTLElBQU1yQyxTQUFRQyxRQUFPOzhDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9oRDtHQTFDd0JRO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ld2x5YWRkZWQuanM/OTYzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvTmV3bHlhZGRlZC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRHYW1lc0RhdGEsIGdldEdlbnJlcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZnVuY3Rpb25zL2dldEdhbWVzXCI7XG5pbXBvcnQgR2FtZWNhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9jYXJkcy9nYW1lY2FyZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXHRjb25zdCBrZXkgPSBwcm9jZXNzLmVudi5BUElfS0VZO1xuXHRjb25zdCBnYW1lcyA9IGF3YWl0IGdldEdhbWVzRGF0YShrZXksIFwib3JkZXJpbmc9cmVsZWFzZWRcIik7XG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdGdhbWVzLFxuXHRcdH0sXG5cdH07XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlTG9hZE1vcmUoKSB7XG5cdHNldFBhZ2UocGFnZSArIDEpXG5cdGNvbnN0IGtleSA9IHByb2Nlc3MuZW52LkFQSV9LRVk7XG5cdGNvbnN0IGdhbWVzID0gYXdhaXQgZ2V0R2FtZXNEYXRhKGtleSwgYG9yZGVyaW5nPXJlbGVhc2VkJnBhZ2U9JHtwYWdlfWApO1xuXHRzZXREYXRhKFtkYXRhXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3bHlhZGRlZCh7IGdhbWVzIH0pIHtcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoZ2FtZXMucmVzdWx0cyk7XG5cdGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDIpO1xuXHRjb25zb2xlLmxvZyhkYXRhKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQ+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPkV4cGxvcmU8L3RpdGxlPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2FtZWZsaXggU29jaWFsIE1lZGlhIGFwcGxpY2F0aW9uXCIgLz5cblx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuXHRcdFx0XHQ8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxuXHRcdFx0XHQ8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc29yaWdpbiAvPlxuXHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsdXMrSmFrYXJ0YStTYW5zOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZkaXNwbGF5PXN3YXBcIlxuXHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtTdHlsZXMubWFpbn0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuaGVhZGVyX2NvbnRhaW5lcn0+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT17U3R5bGVzLmhlYWRlcl90ZXh0fT5Qb3B1bGFyIEdhbWVzPC9oMT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuaGVhZGVyX3RleHR9PjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmdlbnJlX2NvbnRhaW5lcn0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5nZW5yZV9jYXJkc30+XG5cdFx0XHRcdFx0XHR7ZGF0YS5tYXAoKGdhbWUpID0+IChcblx0XHRcdFx0XHRcdFx0PEdhbWVjYXJkXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17YC9nYW1lLyR7Z2FtZS5zbHVnfWB9XG5cdFx0XHRcdFx0XHRcdFx0bmFtZT17Z2FtZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdGJnPXtnYW1lLmJhY2tncm91bmRfaW1hZ2V9XG5cdFx0XHRcdFx0XHRcdFx0Z2VucmVzPXtnYW1lLmdlbnJlc31cblx0XHRcdFx0XHRcdFx0PjwvR2FtZWNhcmQ+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdHtwYWdlfVxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKHBhZ2UgKyAxKX0+TG9hZCBtb3JlPC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdDwvc2VjdGlvbj5cblx0XHQ8L0xheW91dD5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJIZWFkIiwiU3R5bGVzIiwiZ2V0R2FtZXNEYXRhIiwiZ2V0R2VucmVzIiwiR2FtZWNhcmQiLCJ1c2VTdGF0ZSIsImhhbmRsZUxvYWRNb3JlIiwic2V0UGFnZSIsInBhZ2UiLCJrZXkiLCJwcm9jZXNzIiwiZW52IiwiQVBJX0tFWSIsImdhbWVzIiwic2V0RGF0YSIsImRhdGEiLCJOZXdseWFkZGVkIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiY3Jvc3NvcmlnaW4iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibWFpbiIsImRpdiIsImhlYWRlcl9jb250YWluZXIiLCJoMSIsImhlYWRlcl90ZXh0IiwiZ2VucmVfY29udGFpbmVyIiwiZ2VucmVfY2FyZHMiLCJtYXAiLCJnYW1lIiwic2x1ZyIsImJnIiwiYmFja2dyb3VuZF9pbWFnZSIsImdlbnJlcyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/newlyadded.js\n"));

/***/ }),

/***/ "./node_modules/next/dist/compiled/process/browser.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/compiled/process/browser.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __dirname = \"/\";\n(function(){var e={229:function(e){var t=e.exports={};var r;var n;function defaultSetTimout(){throw new Error(\"setTimeout has not been defined\")}function defaultClearTimeout(){throw new Error(\"clearTimeout has not been defined\")}(function(){try{if(typeof setTimeout===\"function\"){r=setTimeout}else{r=defaultSetTimout}}catch(e){r=defaultSetTimout}try{if(typeof clearTimeout===\"function\"){n=clearTimeout}else{n=defaultClearTimeout}}catch(e){n=defaultClearTimeout}})();function runTimeout(e){if(r===setTimeout){return setTimeout(e,0)}if((r===defaultSetTimout||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout){return clearTimeout(e)}if((n===defaultClearTimeout||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}var i=[];var o=false;var u;var a=-1;function cleanUpNextTick(){if(!o||!u){return}o=false;if(u.length){i=u.concat(i)}else{a=-1}if(i.length){drainQueue()}}function drainQueue(){if(o){return}var e=runTimeout(cleanUpNextTick);o=true;var t=i.length;while(t){u=i;i=[];while(++a<t){if(u){u[a].run()}}a=-1;t=i.length}u=null;o=false;runClearTimeout(e)}t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}i.push(new Item(e,t));if(i.length===1&&!o){runTimeout(drainQueue)}};function Item(e,t){this.fun=e;this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};t.title=\"browser\";t.browser=true;t.env={};t.argv=[];t.version=\"\";t.versions={};function noop(){}t.on=noop;t.addListener=noop;t.once=noop;t.off=noop;t.removeListener=noop;t.removeAllListeners=noop;t.emit=noop;t.prependListener=noop;t.prependOnceListener=noop;t.listeners=function(e){return[]};t.binding=function(e){throw new Error(\"process.binding is not supported\")};t.cwd=function(){return\"/\"};t.chdir=function(e){throw new Error(\"process.chdir is not supported\")};t.umask=function(){return 0}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!==\"undefined\")__nccwpck_require__.ab=__dirname+\"/\";var r=__nccwpck_require__(229);module.exports=r})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsWUFBWSxPQUFPLGdCQUFnQixtQkFBbUIsTUFBTSxNQUFNLDRCQUE0QixtREFBbUQsK0JBQStCLHFEQUFxRCxZQUFZLElBQUksbUNBQW1DLGFBQWEsS0FBSyxvQkFBb0IsU0FBUyxtQkFBbUIsSUFBSSxxQ0FBcUMsZUFBZSxLQUFLLHVCQUF1QixTQUFTLHVCQUF1QixJQUFJLHVCQUF1QixtQkFBbUIsdUJBQXVCLDJDQUEyQyxhQUFhLHVCQUF1QixJQUFJLGNBQWMsU0FBUyxJQUFJLHdCQUF3QixTQUFTLDBCQUEwQiw0QkFBNEIscUJBQXFCLHVCQUF1QixnREFBZ0QsZUFBZSx1QkFBdUIsSUFBSSxZQUFZLFNBQVMsSUFBSSxzQkFBc0IsU0FBUyx3QkFBd0IsU0FBUyxZQUFZLE1BQU0sU0FBUywyQkFBMkIsV0FBVyxPQUFPLFFBQVEsYUFBYSxjQUFjLEtBQUssS0FBSyxhQUFhLGNBQWMsc0JBQXNCLE1BQU0sT0FBTyxrQ0FBa0MsT0FBTyxlQUFlLFNBQVMsSUFBSSxLQUFLLGFBQWEsTUFBTSxZQUFZLEtBQUssV0FBVyxPQUFPLFFBQVEsbUJBQW1CLHVCQUF1QixvQ0FBb0MsdUJBQXVCLFlBQVksbUJBQW1CLEtBQUsscUJBQXFCLHNCQUFzQixxQkFBcUIseUJBQXlCLG1CQUFtQixXQUFXLGFBQWEsOEJBQThCLGlDQUFpQyxrQkFBa0IsZUFBZSxTQUFTLFVBQVUsYUFBYSxjQUFjLGlCQUFpQixVQUFVLG1CQUFtQixZQUFZLFdBQVcsc0JBQXNCLDBCQUEwQixZQUFZLHVCQUF1QiwyQkFBMkIsd0JBQXdCLFVBQVUsc0JBQXNCLHFEQUFxRCxpQkFBaUIsV0FBVyxvQkFBb0IsbURBQW1ELG1CQUFtQixZQUFZLFNBQVMsZ0NBQWdDLFdBQVcsa0JBQWtCLGlCQUFpQixZQUFZLFlBQVksV0FBVyxJQUFJLHNDQUFzQyxRQUFRLFFBQVEsaUJBQWlCLGlCQUFpQixtRUFBbUUsU0FBUyxLQUFLLCtCQUErQixpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wcm9jZXNzL2Jyb3dzZXIuanM/MWIxZCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXt2YXIgZT17MjI5OmZ1bmN0aW9uKGUpe3ZhciB0PWUuZXhwb3J0cz17fTt2YXIgcjt2YXIgbjtmdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0KCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfShmdW5jdGlvbigpe3RyeXtpZih0eXBlb2Ygc2V0VGltZW91dD09PVwiZnVuY3Rpb25cIil7cj1zZXRUaW1lb3V0fWVsc2V7cj1kZWZhdWx0U2V0VGltb3V0fX1jYXRjaChlKXtyPWRlZmF1bHRTZXRUaW1vdXR9dHJ5e2lmKHR5cGVvZiBjbGVhclRpbWVvdXQ9PT1cImZ1bmN0aW9uXCIpe249Y2xlYXJUaW1lb3V0fWVsc2V7bj1kZWZhdWx0Q2xlYXJUaW1lb3V0fX1jYXRjaChlKXtuPWRlZmF1bHRDbGVhclRpbWVvdXR9fSkoKTtmdW5jdGlvbiBydW5UaW1lb3V0KGUpe2lmKHI9PT1zZXRUaW1lb3V0KXtyZXR1cm4gc2V0VGltZW91dChlLDApfWlmKChyPT09ZGVmYXVsdFNldFRpbW91dHx8IXIpJiZzZXRUaW1lb3V0KXtyPXNldFRpbWVvdXQ7cmV0dXJuIHNldFRpbWVvdXQoZSwwKX10cnl7cmV0dXJuIHIoZSwwKX1jYXRjaCh0KXt0cnl7cmV0dXJuIHIuY2FsbChudWxsLGUsMCl9Y2F0Y2godCl7cmV0dXJuIHIuY2FsbCh0aGlzLGUsMCl9fX1mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQoZSl7aWYobj09PWNsZWFyVGltZW91dCl7cmV0dXJuIGNsZWFyVGltZW91dChlKX1pZigobj09PWRlZmF1bHRDbGVhclRpbWVvdXR8fCFuKSYmY2xlYXJUaW1lb3V0KXtuPWNsZWFyVGltZW91dDtyZXR1cm4gY2xlYXJUaW1lb3V0KGUpfXRyeXtyZXR1cm4gbihlKX1jYXRjaCh0KXt0cnl7cmV0dXJuIG4uY2FsbChudWxsLGUpfWNhdGNoKHQpe3JldHVybiBuLmNhbGwodGhpcyxlKX19fXZhciBpPVtdO3ZhciBvPWZhbHNlO3ZhciB1O3ZhciBhPS0xO2Z1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpe2lmKCFvfHwhdSl7cmV0dXJufW89ZmFsc2U7aWYodS5sZW5ndGgpe2k9dS5jb25jYXQoaSl9ZWxzZXthPS0xfWlmKGkubGVuZ3RoKXtkcmFpblF1ZXVlKCl9fWZ1bmN0aW9uIGRyYWluUXVldWUoKXtpZihvKXtyZXR1cm59dmFyIGU9cnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO289dHJ1ZTt2YXIgdD1pLmxlbmd0aDt3aGlsZSh0KXt1PWk7aT1bXTt3aGlsZSgrK2E8dCl7aWYodSl7dVthXS5ydW4oKX19YT0tMTt0PWkubGVuZ3RofXU9bnVsbDtvPWZhbHNlO3J1bkNsZWFyVGltZW91dChlKX10Lm5leHRUaWNrPWZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSl7Zm9yKHZhciByPTE7cjxhcmd1bWVudHMubGVuZ3RoO3IrKyl7dFtyLTFdPWFyZ3VtZW50c1tyXX19aS5wdXNoKG5ldyBJdGVtKGUsdCkpO2lmKGkubGVuZ3RoPT09MSYmIW8pe3J1blRpbWVvdXQoZHJhaW5RdWV1ZSl9fTtmdW5jdGlvbiBJdGVtKGUsdCl7dGhpcy5mdW49ZTt0aGlzLmFycmF5PXR9SXRlbS5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX07dC50aXRsZT1cImJyb3dzZXJcIjt0LmJyb3dzZXI9dHJ1ZTt0LmVudj17fTt0LmFyZ3Y9W107dC52ZXJzaW9uPVwiXCI7dC52ZXJzaW9ucz17fTtmdW5jdGlvbiBub29wKCl7fXQub249bm9vcDt0LmFkZExpc3RlbmVyPW5vb3A7dC5vbmNlPW5vb3A7dC5vZmY9bm9vcDt0LnJlbW92ZUxpc3RlbmVyPW5vb3A7dC5yZW1vdmVBbGxMaXN0ZW5lcnM9bm9vcDt0LmVtaXQ9bm9vcDt0LnByZXBlbmRMaXN0ZW5lcj1ub29wO3QucHJlcGVuZE9uY2VMaXN0ZW5lcj1ub29wO3QubGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3JldHVybltdfTt0LmJpbmRpbmc9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9O3QuY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9O3QuY2hkaXI9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfTt0LnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXt2YXIgbj10W3JdO2lmKG4hPT11bmRlZmluZWQpe3JldHVybiBuLmV4cG9ydHN9dmFyIGk9dFtyXT17ZXhwb3J0czp7fX07dmFyIG89dHJ1ZTt0cnl7ZVtyXShpLGkuZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtvPWZhbHNlfWZpbmFsbHl7aWYobylkZWxldGUgdFtyXX1yZXR1cm4gaS5leHBvcnRzfWlmKHR5cGVvZiBfX25jY3dwY2tfcmVxdWlyZV9fIT09XCJ1bmRlZmluZWRcIilfX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjt2YXIgcj1fX25jY3dwY2tfcmVxdWlyZV9fKDIyOSk7bW9kdWxlLmV4cG9ydHM9cn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/process/browser.js\n"));

/***/ })

});