"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Search_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Search.module.css */ \"./styles/Search.module.css\");\n/* harmony import */ var _styles_Search_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Search_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_functions_getGames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/functions/getGames */ \"./components/functions/getGames.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_cards_gamecard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/cards/gamecard */ \"./components/cards/gamecard.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Search(param) {\n    let { gameresults, id } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    // setData(gameresults)\n    console.log(gameresults);\n    async function searchGames(event) {\n        if (event.target.value.length > 2) {\n            console.log(id);\n            const results = await (0,_components_functions_getGames__WEBPACK_IMPORTED_MODULE_3__.getGamesData)(id, \"search=\".concat(event.target.value));\n            console.log(results);\n            setData(results.results);\n        }\n        if (event.target.value.length == 0) {\n            const results = await (0,_components_functions_getGames__WEBPACK_IMPORTED_MODULE_3__.getGamesData)(id);\n            setData(results.results);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Gameflix: Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/pages/search.js\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Gameflix Social Media application\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/pages/search.js\",\n                        lineNumber: 45,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/pages/search.js\",\n                        lineNumber: 46,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/pages/search.js\",\n                        lineNumber: 47,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/pages/search.js\",\n                        lineNumber: 48,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/pages/search.js\",\n                        lineNumber: 49,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/pages/search.js\",\n                        lineNumber: 50,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/pages/search.js\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Search_module_css__WEBPACK_IMPORTED_MODULE_6___default().search_container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    onChange: searchGames,\n                    className: (_styles_Search_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchbar),\n                    placeholder: \"Search Games\"\n                }, void 0, false, {\n                    fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/pages/search.js\",\n                    lineNumber: 56,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/pages/search.js\",\n                lineNumber: 55,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Search_module_css__WEBPACK_IMPORTED_MODULE_6___default().genre_cards),\n                children: data.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cards_gamecard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        href: \"/game/\".concat(game.slug),\n                        name: game.name,\n                        bg: game.background_image,\n                        genres: game.genres\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/pages/search.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/pages/search.js\",\n                lineNumber: 58,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/pages/search.js\",\n        lineNumber: 42,\n        columnNumber: 13\n    }, this);\n}\n_s(Search, \"hhQqYsxLIv1exGOzUvDGOVv6fXw=\");\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ0E7QUFDbkI7QUFDa0M7QUFDOUI7QUFDa0I7O0FBZ0JwQyxTQUFTTSxPQUFPLEtBQWtCO1FBQWxCLEVBQUNDLFdBQVcsRUFBRUMsRUFBRSxFQUFFLEdBQWxCOztJQUN6QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUNuQyx1QkFBdUI7SUFDdkJPLFFBQVFDLElBQUlMO0lBRVosZUFBZU0sWUFBWUMsS0FBSztRQUMxQixJQUFJQSxNQUFNQyxPQUFPQyxNQUFNQyxTQUFTLEdBQUc7WUFDN0JOLFFBQVFDLElBQUlKO1lBQ1osTUFBTVUsVUFBVSxNQUFNZiw0RUFBWUEsQ0FBQ0ssSUFBSSxVQUE2QixPQUFuQk0sTUFBTUMsT0FBT0M7WUFDOURMLFFBQVFDLElBQUlNO1lBQ1pSLFFBQVFRLFFBQVFBO1FBQ3RCO1FBQ0EsSUFBSUosTUFBTUMsT0FBT0MsTUFBTUMsVUFBVSxHQUFHO1lBQzlCLE1BQU1DLFVBQVUsTUFBTWYsNEVBQVlBLENBQUNLO1lBQ25DRSxRQUFRUSxRQUFRQTtRQUN0QjtJQUVOO0lBRUEscUJBQ00sOERBQUNqQixpRUFBTUE7OzBCQUNoQiw4REFBQ0Msa0RBQUlBOztrQ0FDSiw4REFBQ2lCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7OztrQ0FDdEIsOERBQUNGO3dCQUFLQyxLQUFJO3dCQUFhQyxNQUFLOzs7Ozs7a0NBQzVCLDhEQUFDRjt3QkFBS0MsS0FBSTt3QkFBYUMsTUFBSzt3QkFBNEJDLFdBQVc7Ozs7OztrQ0FDbkUsOERBQUNIO3dCQUNBRSxNQUFLO3dCQUNMRCxLQUFJOzs7Ozs7Ozs7Ozs7MEJBR1MsOERBQUNHO2dCQUFJQyxXQUFXNUIsbUZBQXVCNkI7MEJBQ2pDLDRFQUFDQztvQkFBTUMsTUFBSztvQkFBT0MsVUFBV25CO29CQUFjZSxXQUFXNUIsNEVBQWdCaUM7b0JBQUVDLGFBQVk7Ozs7Ozs7Ozs7OzBCQUUxRyw4REFBQ1A7Z0JBQUlDLFdBQVc1Qiw4RUFBa0JtQzswQkFDWjFCLEtBQUsyQixJQUFJLENBQUNDLHFCQUN6Qiw4REFBQ2hDLGtFQUFRQTt3QkFDUm9CLE1BQU0sU0FBbUIsT0FBVlksS0FBS0M7d0JBQ3BCakIsTUFBTWdCLEtBQUtoQjt3QkFDWGtCLElBQUlGLEtBQUtHO3dCQUNUQyxRQUFRSixLQUFLSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEI7R0FoRHdCbkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzPzkyMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1NlYXJjaC5tb2R1bGUuY3NzXCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBnZXRHYW1lc0RhdGEgfSBmcm9tIFwiQC9jb21wb25lbnRzL2Z1bmN0aW9ucy9nZXRHYW1lc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHYW1lY2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL2NhcmRzL2dhbWVjYXJkXCI7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXHRjb25zdCBpZCA9IHByb2Nlc3MuZW52LkFQSV9LRVk7XG4gICAgICBjb25zdCBhbGxnYW1lcyA9IGF3YWl0IGdldEdhbWVzRGF0YShpZCk7XG4gICAgICBjb25zdCBnYW1lcmVzdWx0cyA9IGFsbGdhbWVzLnJlc3VsdHM7XG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgIGdhbWVyZXN1bHRzLFxuICAgICAgICAgICAgICAgICAgaWRcblx0XHR9LFxuXHR9O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCh7Z2FtZXJlc3VsdHMgLGlkIH0pIHtcbiAgICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgICAgIC8vIHNldERhdGEoZ2FtZXJlc3VsdHMpXG4gICAgICBjb25zb2xlLmxvZyhnYW1lcmVzdWx0cyk7XG5cbiAgICAgIGFzeW5jIGZ1bmN0aW9uIHNlYXJjaEdhbWVzKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnZXRHYW1lc0RhdGEoaWQsIGBzZWFyY2g9JHtldmVudC50YXJnZXQudmFsdWV9YCk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcbiAgICAgICAgICAgICAgICAgIHNldERhdGEocmVzdWx0cy5yZXN1bHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnZXRHYW1lc0RhdGEoaWQpO1xuICAgICAgICAgICAgICAgICAgc2V0RGF0YShyZXN1bHRzLnJlc3VsdHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICBcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5HYW1lZmxpeDogU2VhcmNoPC90aXRsZT5cblx0XHRcdFx0PG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdhbWVmbGl4IFNvY2lhbCBNZWRpYSBhcHBsaWNhdGlvblwiIC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cblx0XHRcdFx0PGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cblx0XHRcdFx0PGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW4gLz5cblx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbHVzK0pha2FydGErU2FuczppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZGlzcGxheT1zd2FwXCJcblx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvSGVhZD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuc2VhcmNoX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17IHNlYXJjaEdhbWVzIH0gY2xhc3NOYW1lPXtTdHlsZXMuc2VhcmNoYmFyfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBHYW1lc1wiLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5nZW5yZV9jYXJkc30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGdhbWUpID0+IChcblx0XHRcdCAgICAgIFx0PEdhbWVjYXJkXG5cdFx0XHQgICAgICBcdFx0aHJlZj17YC9nYW1lLyR7Z2FtZS5zbHVnfWB9XG5cdFx0XHQgICAgICBcdFx0bmFtZT17Z2FtZS5uYW1lfVxuXHRcdFx0ICAgICAgXHRcdGJnPXtnYW1lLmJhY2tncm91bmRfaW1hZ2V9XG5cdFx0XHQgICAgICBcdFx0Z2VucmVzPXtnYW1lLmdlbnJlc31cblx0XHRcdCAgICAgIFx0PjwvR2FtZWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdDwvTGF5b3V0PlxuICAgICAgKTtcbn0iXSwibmFtZXMiOlsiU3R5bGVzIiwiTGF5b3V0IiwiSGVhZCIsImdldEdhbWVzRGF0YSIsInVzZVN0YXRlIiwiR2FtZWNhcmQiLCJTZWFyY2giLCJnYW1lcmVzdWx0cyIsImlkIiwiZGF0YSIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoR2FtZXMiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwicmVzdWx0cyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJjcm9zc29yaWdpbiIsImRpdiIsImNsYXNzTmFtZSIsInNlYXJjaF9jb250YWluZXIiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInNlYXJjaGJhciIsInBsYWNlaG9sZGVyIiwiZ2VucmVfY2FyZHMiLCJtYXAiLCJnYW1lIiwic2x1ZyIsImJnIiwiYmFja2dyb3VuZF9pbWFnZSIsImdlbnJlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search.js\n"));

/***/ })

});