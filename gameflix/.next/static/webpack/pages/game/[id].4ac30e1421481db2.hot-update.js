"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game/[id]",{

/***/ "./pages/game/[id].js":
/*!****************************!*\
  !*** ./pages/game/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _styles_Gameview_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Gameview.module.css */ \"./styles/Gameview.module.css\");\n/* harmony import */ var _styles_Gameview_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Gameview_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar __N_SSP = true;\nfunction Page(param) {\n    let { gameData } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"\".concat((_styles_Gameview_module_css__WEBPACK_IMPORTED_MODULE_3___default().game_container)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_styles_Gameview_module_css__WEBPACK_IMPORTED_MODULE_3___default().hero)),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"\".concat(gameData.background_image),\n                        alt: \"Game background image\"\n                    }, void 0, false, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/game/[id].js\",\n                        lineNumber: 20,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/game/[id].js\",\n                    lineNumber: 19,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_styles_Gameview_module_css__WEBPACK_IMPORTED_MODULE_3___default().game_information_container)),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_Gameview_module_css__WEBPACK_IMPORTED_MODULE_3___default().game_information_hero_container)),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_Gameview_module_css__WEBPACK_IMPORTED_MODULE_3___default().hero_image_container)),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"\".concat((_styles_Gameview_module_css__WEBPACK_IMPORTED_MODULE_3___default().hero_image_container)),\n                                    src: \"\".concat(gameData.background_image),\n                                    alt: \"Game background image\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/game/[id].js\",\n                                    lineNumber: 25,\n                                    columnNumber: 8\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/game/[id].js\",\n                                lineNumber: 24,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_Gameview_module_css__WEBPACK_IMPORTED_MODULE_3___default().main_info_container)),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: gameData.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/game/[id].js\",\n                                        lineNumber: 28,\n                                        columnNumber: 8\n                                    }, this),\n                                    gameData.genres.map((genre, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: genre.name\n                                        }, index, false, {\n                                            fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/game/[id].js\",\n                                            lineNumber: 30,\n                                            columnNumber: 9\n                                        }, this)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: gameData.developers[0].name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/game/[id].js\",\n                                        lineNumber: 32,\n                                        columnNumber: 8\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Metascore: \",\n                                            gameData.metacritic\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/game/[id].js\",\n                                        lineNumber: 33,\n                                        columnNumber: 8\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\".concat((_styles_Gameview_module_css__WEBPACK_IMPORTED_MODULE_3___default().platforms_container)),\n                                        children: gameData.parent_platforms.map((platform, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: platform.platform.name\n                                            }, index, false, {\n                                                fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/game/[id].js\",\n                                                lineNumber: 36,\n                                                columnNumber: 10\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/game/[id].js\",\n                                        lineNumber: 34,\n                                        columnNumber: 8\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/game/[id].js\",\n                                lineNumber: 27,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_Gameview_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttons_container))\n                            }, void 0, false, {\n                                fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/game/[id].js\",\n                                lineNumber: 40,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/game/[id].js\",\n                        lineNumber: 23,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/game/[id].js\",\n                    lineNumber: 22,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/game/[id].js\",\n            lineNumber: 18,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/isakgerre/Documents/GitHub/gameflix/gameflix/pages/game/[id].js\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, this);\n}\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lL1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNnRDtBQUNDO0FBQ25COztBQVdmLFNBQVNHLEtBQUssS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaO0lBQzVCLHFCQUNDLDhEQUFDSixpRUFBTUE7a0JBQ04sNEVBQUNLO1lBQVFDLFdBQVcsR0FBeUIsT0FBdEJMLG1GQUFxQk07OzhCQUMzQyw4REFBQ0M7b0JBQUlGLFdBQVcsR0FBZSxPQUFaTCx5RUFBV1E7OEJBQzdCLDRFQUFDQzt3QkFBSUMsS0FBTSxHQUE2QixPQUExQlAsU0FBU1E7d0JBQXFCQyxLQUFJOzs7Ozs7Ozs7Ozs4QkFFakQsOERBQUNMO29CQUFJRixXQUFXLEdBQXFDLE9BQWxDTCwrRkFBaUNhOzhCQUNuRCw0RUFBQ047d0JBQUlGLFdBQVcsR0FBMEMsT0FBdkNMLG9HQUFzQ2M7OzBDQUN4RCw4REFBQ1A7Z0NBQUlGLFdBQVcsR0FBK0IsT0FBNUJMLHlGQUEyQmU7MENBQzdDLDRFQUFDZCxtREFBS0E7b0NBQUNJLFdBQVcsR0FBK0IsT0FBNUJMLHlGQUEyQmU7b0NBQUlMLEtBQU0sR0FBNkIsT0FBMUJQLFNBQVNRO29DQUFxQkMsS0FBSTs7Ozs7Ozs7Ozs7MENBRWhHLDhEQUFDTDtnQ0FBSUYsV0FBVyxHQUE4QixPQUEzQkwsd0ZBQTBCZ0I7O2tEQUM1Qyw4REFBQ0M7a0RBQUlkLFNBQVNlOzs7Ozs7b0NBQ2JmLFNBQVNnQixPQUFPQyxJQUFJLENBQUNDLE9BQU9DLHNCQUM1Qiw4REFBQ0w7c0RBQWVJLE1BQU1IOzJDQUFkSTs7Ozs7a0RBRVQsOERBQUNMO2tEQUFJZCxTQUFTb0IsVUFBVSxDQUFDLEVBQUUsQ0FBQ0w7Ozs7OztrREFDNUIsOERBQUNEOzs0Q0FBRTs0Q0FBWWQsU0FBU3FCOzs7Ozs7O2tEQUN4Qiw4REFBQ2pCO3dDQUFJRixXQUFXLEdBQThCLE9BQTNCTCx3RkFBMEJ5QjtrREFDM0N0QixTQUFTdUIsaUJBQWlCTixJQUFJLENBQUNPLFVBQVNMLHNCQUN4Qyw4REFBQ0w7MERBQWVVLFNBQVNBLFNBQVNUOytDQUExQkk7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSVgsOERBQUNmO2dDQUFJRixXQUFXLEdBQTRCLE9BQXpCTCxzRkFBd0I0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqRDtLQWpDd0IxQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYW1lL1tpZF0uanM/MGNmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRHYW1lRGF0YSB9IGZyb20gXCJAL2NvbXBvbmVudHMvZnVuY3Rpb25zL2dldEdhbWVzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dFwiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvR2FtZXZpZXcubW9kdWxlLmNzc1wiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zIH0pIHtcblx0Y29uc3QgZ2FtZURhdGEgPSBhd2FpdCBnZXRHYW1lRGF0YShwYXJhbXMuaWQsIHByb2Nlc3MuZW52LkFQSV9LRVkpO1xuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRnYW1lRGF0YSxcblx0XHR9LFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHsgZ2FtZURhdGEgfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQ+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e2Ake1N0eWxlcy5nYW1lX2NvbnRhaW5lcn1gfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake1N0eWxlcy5oZXJvfWB9PlxuXHRcdFx0XHRcdDxpbWcgc3JjPXsgYCR7Z2FtZURhdGEuYmFja2dyb3VuZF9pbWFnZX1gIH0gYWx0PVwiR2FtZSBiYWNrZ3JvdW5kIGltYWdlXCI+PC9pbWc+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7U3R5bGVzLmdhbWVfaW5mb3JtYXRpb25fY29udGFpbmVyfWB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZXMuZ2FtZV9pbmZvcm1hdGlvbl9oZXJvX2NvbnRhaW5lcn1gfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZXMuaGVyb19pbWFnZV9jb250YWluZXJ9YH0+XG5cdFx0XHRcdFx0XHRcdDxJbWFnZSBjbGFzc05hbWU9e2Ake1N0eWxlcy5oZXJvX2ltYWdlX2NvbnRhaW5lcn1gfSBzcmM9eyBgJHtnYW1lRGF0YS5iYWNrZ3JvdW5kX2ltYWdlfWAgfSBhbHQ9XCJHYW1lIGJhY2tncm91bmQgaW1hZ2VcIi8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZXMubWFpbl9pbmZvX2NvbnRhaW5lcn1gfT5cblx0XHRcdFx0XHRcdFx0PHA+eyBnYW1lRGF0YS5uYW1lfTwvcD5cblx0XHRcdFx0XHRcdFx0e2dhbWVEYXRhLmdlbnJlcy5tYXAoKGdlbnJlLCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxwIGtleT17aW5kZXh9PntnZW5yZS5uYW1lfTwvcD5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdDxwPnsgZ2FtZURhdGEuZGV2ZWxvcGVyc1swXS5uYW1lfTwvcD5cblx0XHRcdFx0XHRcdFx0PHA+TWV0YXNjb3JlOiB7Z2FtZURhdGEubWV0YWNyaXRpY308L3A+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZXMucGxhdGZvcm1zX2NvbnRhaW5lcn1gfT5cblx0XHRcdFx0XHRcdFx0XHR7Z2FtZURhdGEucGFyZW50X3BsYXRmb3Jtcy5tYXAoKHBsYXRmb3JtLGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBrZXk9e2luZGV4fT57cGxhdGZvcm0ucGxhdGZvcm0ubmFtZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7U3R5bGVzLmJ1dHRvbnNfY29udGFpbmVyfWB9PlxuXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0PC9MYXlvdXQ+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiU3R5bGVzIiwiSW1hZ2UiLCJQYWdlIiwiZ2FtZURhdGEiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZ2FtZV9jb250YWluZXIiLCJkaXYiLCJoZXJvIiwiaW1nIiwic3JjIiwiYmFja2dyb3VuZF9pbWFnZSIsImFsdCIsImdhbWVfaW5mb3JtYXRpb25fY29udGFpbmVyIiwiZ2FtZV9pbmZvcm1hdGlvbl9oZXJvX2NvbnRhaW5lciIsImhlcm9faW1hZ2VfY29udGFpbmVyIiwibWFpbl9pbmZvX2NvbnRhaW5lciIsInAiLCJuYW1lIiwiZ2VucmVzIiwibWFwIiwiZ2VucmUiLCJpbmRleCIsImRldmVsb3BlcnMiLCJtZXRhY3JpdGljIiwicGxhdGZvcm1zX2NvbnRhaW5lciIsInBhcmVudF9wbGF0Zm9ybXMiLCJwbGF0Zm9ybSIsImJ1dHRvbnNfY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/game/[id].js\n"));

/***/ })

});