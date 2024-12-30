/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/submitForm/route";
exports.ids = ["app/api/submitForm/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FsubmitForm%2Froute&page=%2Fapi%2FsubmitForm%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsubmitForm%2Froute.ts&appDir=C%3A%5CUsers%5CSachin%20Kumar%20Gupta%5CDesktop%5Cwork-space%5CSignupform%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSachin%20Kumar%20Gupta%5CDesktop%5Cwork-space%5CSignupform%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FsubmitForm%2Froute&page=%2Fapi%2FsubmitForm%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsubmitForm%2Froute.ts&appDir=C%3A%5CUsers%5CSachin%20Kumar%20Gupta%5CDesktop%5Cwork-space%5CSignupform%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSachin%20Kumar%20Gupta%5CDesktop%5Cwork-space%5CSignupform%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Sachin_Kumar_Gupta_Desktop_work_space_Signupform_frontend_src_app_api_submitForm_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/submitForm/route.ts */ \"(rsc)/./src/app/api/submitForm/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/submitForm/route\",\n        pathname: \"/api/submitForm\",\n        filename: \"route\",\n        bundlePath: \"app/api/submitForm/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Sachin Kumar Gupta\\\\Desktop\\\\work-space\\\\Signupform\\\\frontend\\\\src\\\\app\\\\api\\\\submitForm\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Sachin_Kumar_Gupta_Desktop_work_space_Signupform_frontend_src_app_api_submitForm_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzdWJtaXRGb3JtJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzdWJtaXRGb3JtJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc3VibWl0Rm9ybSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNTYWNoaW4lMjBLdW1hciUyMEd1cHRhJTVDRGVza3RvcCU1Q3dvcmstc3BhY2UlNUNTaWdudXBmb3JtJTVDZnJvbnRlbmQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1NhY2hpbiUyMEt1bWFyJTIwR3VwdGElNUNEZXNrdG9wJTVDd29yay1zcGFjZSU1Q1NpZ251cGZvcm0lNUNmcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDNkQ7QUFDMUk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFNhY2hpbiBLdW1hciBHdXB0YVxcXFxEZXNrdG9wXFxcXHdvcmstc3BhY2VcXFxcU2lnbnVwZm9ybVxcXFxmcm9udGVuZFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxzdWJtaXRGb3JtXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zdWJtaXRGb3JtL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc3VibWl0Rm9ybVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc3VibWl0Rm9ybS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXFNhY2hpbiBLdW1hciBHdXB0YVxcXFxEZXNrdG9wXFxcXHdvcmstc3BhY2VcXFxcU2lnbnVwZm9ybVxcXFxmcm9udGVuZFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxzdWJtaXRGb3JtXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FsubmitForm%2Froute&page=%2Fapi%2FsubmitForm%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsubmitForm%2Froute.ts&appDir=C%3A%5CUsers%5CSachin%20Kumar%20Gupta%5CDesktop%5Cwork-space%5CSignupform%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSachin%20Kumar%20Gupta%5CDesktop%5Cwork-space%5CSignupform%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/submitForm/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/submitForm/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _dbConnect_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../dbConnect/dbConnect */ \"(rsc)/./src/dbConnect/dbConnect.ts\");\n/* harmony import */ var _models_FormSubmission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/FormSubmission */ \"(rsc)/./src/models/FormSubmission.js\");\n/* harmony import */ var _models_FormSubmission__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_FormSubmission__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n(0,_dbConnect_dbConnect__WEBPACK_IMPORTED_MODULE_0__.connect)();\nasync function POST(request) {\n    try {\n        const body = await request.json();\n        const { email, name, info, message } = body;\n        console.log(body);\n        if (!email || !name || !info?.phoneNumber || !info?.CompanyName || !info?.CompanyWebsite) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                message: \"All required fields must be provided.\"\n            }, {\n                status: 404\n            });\n        }\n        const newSubmission = new (_models_FormSubmission__WEBPACK_IMPORTED_MODULE_1___default())({\n            email,\n            name,\n            info,\n            message\n        });\n        await newSubmission.save();\n    } catch (error) {\n        throw next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        message: \"Form submitted successfully\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zdWJtaXRGb3JtL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVEO0FBQ0s7QUFDSjtBQUN4REEsNkRBQU9BO0FBRUEsZUFBZUcsS0FBS0MsT0FBb0I7SUFDN0MsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUQsUUFBUUUsSUFBSTtRQUMvQixNQUFNLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxHQUFHTDtRQUN2Q00sUUFBUUMsR0FBRyxDQUFDUDtRQUVaLElBQ0UsQ0FBQ0UsU0FDRCxDQUFDQyxRQUNELENBQUNDLE1BQU1JLGVBQ1AsQ0FBQ0osTUFBTUssZUFDUCxDQUFDTCxNQUFNTSxnQkFDUDtZQUNBLE9BQU9iLHFEQUFZQSxDQUFDSSxJQUFJLENBQ3RCO2dCQUNFSSxTQUFTO1lBQ1gsR0FDQTtnQkFDRU0sUUFBUTtZQUNWO1FBRUo7UUFDQSxNQUFNQyxnQkFBZ0IsSUFBSWhCLCtEQUFjQSxDQUFDO1lBQ3ZDTTtZQUNBQztZQUNBQztZQUNBQztRQUNGO1FBQ0EsTUFBTU8sY0FBY0MsSUFBSTtJQUMxQixFQUFFLE9BQU9DLE9BQVk7UUFDbkIsTUFBTWpCLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRWEsT0FBT0EsTUFBTVQsT0FBTztRQUFDLEdBQUc7WUFBRU0sUUFBUTtRQUFJO0lBQ2xFO0lBRUEsT0FBT2QscURBQVlBLENBQUNJLElBQUksQ0FBQztRQUFFSSxTQUFTO0lBQThCO0FBQ3BFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFNhY2hpbiBLdW1hciBHdXB0YVxcRGVza3RvcFxcd29yay1zcGFjZVxcU2lnbnVwZm9ybVxcZnJvbnRlbmRcXHNyY1xcYXBwXFxhcGlcXHN1Ym1pdEZvcm1cXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwiLi4vLi4vLi4vZGJDb25uZWN0L2RiQ29ubmVjdFwiO1xyXG5pbXBvcnQgRm9ybVN1Ym1pc3Npb24gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9Gb3JtU3VibWlzc2lvblwiO1xyXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmNvbm5lY3QoKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgIGNvbnN0IHsgZW1haWwsIG5hbWUsIGluZm8sIG1lc3NhZ2UgfSA9IGJvZHk7XHJcbiAgICBjb25zb2xlLmxvZyhib2R5KTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICFlbWFpbCB8fFxyXG4gICAgICAhbmFtZSB8fFxyXG4gICAgICAhaW5mbz8ucGhvbmVOdW1iZXIgfHxcclxuICAgICAgIWluZm8/LkNvbXBhbnlOYW1lIHx8XHJcbiAgICAgICFpbmZvPy5Db21wYW55V2Vic2l0ZVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBcIkFsbCByZXF1aXJlZCBmaWVsZHMgbXVzdCBiZSBwcm92aWRlZC5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHN0YXR1czogNDA0LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1N1Ym1pc3Npb24gPSBuZXcgRm9ybVN1Ym1pc3Npb24oe1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgbmFtZSxcclxuICAgICAgaW5mbyxcclxuICAgICAgbWVzc2FnZSxcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgbmV3U3VibWlzc2lvbi5zYXZlKCk7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgdGhyb3cgTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJGb3JtIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHlcIiB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiY29ubmVjdCIsIkZvcm1TdWJtaXNzaW9uIiwiTmV4dFJlc3BvbnNlIiwiUE9TVCIsInJlcXVlc3QiLCJib2R5IiwianNvbiIsImVtYWlsIiwibmFtZSIsImluZm8iLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInBob25lTnVtYmVyIiwiQ29tcGFueU5hbWUiLCJDb21wYW55V2Vic2l0ZSIsInN0YXR1cyIsIm5ld1N1Ym1pc3Npb24iLCJzYXZlIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/submitForm/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/dbConnect/dbConnect.ts":
/*!************************************!*\
  !*** ./src/dbConnect/dbConnect.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connect: () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"(rsc)/../../node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nasync function connect() {\n    try {\n        if (!process.env.MONGODB_URL) {\n            throw new Error(\"MONGODB_URL is not defined in environment variables\");\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URL);\n        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        connection.on(\"connected\", ()=>{\n            console.log(\"MongoDB connected successfully\");\n        });\n        connection.on(\"error\", (err)=>{\n            console.log(\"MongoDB connection failed !: \" + err);\n            process.exit();\n        });\n    } catch (error) {\n        console.log(\"Something went wrong in connecting to DB: \" + error.message);\n    // toast(error.message);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGJDb25uZWN0L2RiQ29ubmVjdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUNKO0FBRTVCQyxvREFBYTtBQUVOLGVBQWVFO0lBQ3BCLElBQUk7UUFDRixJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO1lBQzVCLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUVBLE1BQU1QLHVEQUFnQixDQUFDSSxRQUFRQyxHQUFHLENBQUNDLFdBQVc7UUFFOUMsTUFBTUUsYUFBYVIsNERBQW1CO1FBRXRDUSxXQUFXQyxFQUFFLENBQUMsYUFBYTtZQUN6QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7UUFFQUgsV0FBV0MsRUFBRSxDQUFDLFNBQVMsQ0FBQ0c7WUFDdEJGLFFBQVFDLEdBQUcsQ0FBQyxrQ0FBa0NDO1lBQzlDUixRQUFRUyxJQUFJO1FBQ2Q7SUFDRixFQUFFLE9BQU9DLE9BQVk7UUFDbkJKLFFBQVFDLEdBQUcsQ0FBQywrQ0FBK0NHLE1BQU1DLE9BQU87SUFDeEUsd0JBQXdCO0lBQzFCO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2FjaGluIEt1bWFyIEd1cHRhXFxEZXNrdG9wXFx3b3JrLXNwYWNlXFxTaWdudXBmb3JtXFxmcm9udGVuZFxcc3JjXFxkYkNvbm5lY3RcXGRiQ29ubmVjdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xyXG5cclxuZG90ZW52LmNvbmZpZygpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTU9OR09EQl9VUkwgaXMgbm90IGRlZmluZWQgaW4gZW52aXJvbm1lbnQgdmFyaWFibGVzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwpO1xyXG5cclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBtb25nb29zZS5jb25uZWN0aW9uO1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub24oXCJjb25uZWN0ZWRcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgY29ubmVjdGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub24oXCJlcnJvclwiLCAoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTW9uZ29EQiBjb25uZWN0aW9uIGZhaWxlZCAhOiBcIiArIGVycik7XHJcbiAgICAgIHByb2Nlc3MuZXhpdCgpO1xyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coXCJTb21ldGhpbmcgd2VudCB3cm9uZyBpbiBjb25uZWN0aW5nIHRvIERCOiBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgLy8gdG9hc3QoZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImRvdGVudiIsImNvbmZpZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkwiLCJFcnJvciIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJleGl0IiwiZXJyb3IiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/dbConnect/dbConnect.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/FormSubmission.js":
/*!**************************************!*\
  !*** ./src/models/FormSubmission.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst formSubmissionSchema = new mongoose.Schema({\n    email: {\n        type: String,\n        required: true\n    },\n    name: {\n        type: String,\n        required: true\n    },\n    info: {\n        phoneNumber: {\n            type: String,\n            required: true\n        },\n        CompanyName: {\n            type: String,\n            required: true\n        },\n        CompanyWebsite: {\n            type: String,\n            required: true\n        }\n    },\n    message: {\n        type: String,\n        maxlength: 500\n    }\n}, {\n    timestamps: true\n});\nconst FormSubmission = mongoose.models.FormSubmission || mongoose.model(\"FormSubmission\", formSubmissionSchema);\nmodule.exports = FormSubmission;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0Zvcm1TdWJtaXNzaW9uLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQywwQkFBVTtBQUVuQyxNQUFNQyx1QkFBdUIsSUFBSUYsU0FBU0csTUFBTSxDQUM5QztJQUNFQyxPQUFPO1FBQ0xDLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBQyxNQUFNO1FBQ0pILE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBRSxNQUFNO1FBQ0pDLGFBQWE7WUFDWEwsTUFBTUM7WUFDTkMsVUFBVTtRQUNaO1FBQ0FJLGFBQWE7WUFDWE4sTUFBTUM7WUFDTkMsVUFBVTtRQUNaO1FBQ0FLLGdCQUFnQjtZQUNkUCxNQUFNQztZQUNOQyxVQUFVO1FBQ1o7SUFDRjtJQUNBTSxTQUFTO1FBQ1BSLE1BQU1DO1FBQ05RLFdBQVc7SUFDYjtBQUNGLEdBQ0E7SUFBRUMsWUFBWTtBQUFLO0FBR3JCLE1BQU1DLGlCQUNKaEIsU0FBU2lCLE1BQU0sQ0FBQ0QsY0FBYyxJQUM5QmhCLFNBQVNrQixLQUFLLENBQUMsa0JBQWtCaEI7QUFFbkNpQixPQUFPQyxPQUFPLEdBQUdKIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFNhY2hpbiBLdW1hciBHdXB0YVxcRGVza3RvcFxcd29yay1zcGFjZVxcU2lnbnVwZm9ybVxcZnJvbnRlbmRcXHNyY1xcbW9kZWxzXFxGb3JtU3VibWlzc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuXHJcbmNvbnN0IGZvcm1TdWJtaXNzaW9uU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBlbWFpbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgIHBob25lTnVtYmVyOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBDb21wYW55TmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgQ29tcGFueVdlYnNpdGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIG1heGxlbmd0aDogNTAwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5jb25zdCBGb3JtU3VibWlzc2lvbiA9XHJcbiAgbW9uZ29vc2UubW9kZWxzLkZvcm1TdWJtaXNzaW9uIHx8XHJcbiAgbW9uZ29vc2UubW9kZWwoXCJGb3JtU3VibWlzc2lvblwiLCBmb3JtU3VibWlzc2lvblNjaGVtYSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1TdWJtaXNzaW9uO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiZm9ybVN1Ym1pc3Npb25TY2hlbWEiLCJTY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm5hbWUiLCJpbmZvIiwicGhvbmVOdW1iZXIiLCJDb21wYW55TmFtZSIsIkNvbXBhbnlXZWJzaXRlIiwibWVzc2FnZSIsIm1heGxlbmd0aCIsInRpbWVzdGFtcHMiLCJGb3JtU3VibWlzc2lvbiIsIm1vZGVscyIsIm1vZGVsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/FormSubmission.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FsubmitForm%2Froute&page=%2Fapi%2FsubmitForm%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsubmitForm%2Froute.ts&appDir=C%3A%5CUsers%5CSachin%20Kumar%20Gupta%5CDesktop%5Cwork-space%5CSignupform%5Cfrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSachin%20Kumar%20Gupta%5CDesktop%5Cwork-space%5CSignupform%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();