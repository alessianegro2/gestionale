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
exports.id = "app/api/insertAttivita/route";
exports.ids = ["app/api/insertAttivita/route"];
exports.modules = {

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your MongoDB URI to .env.local\");\n}\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1DLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSSxDQUFDTCxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlJLE1BQU07QUFDbEI7QUFPQSxJQUFJTixJQUFzQyxFQUFFO0lBQzFDLElBQUksQ0FBQ08sT0FBT0MsbUJBQW1CLEVBQUU7UUFDL0JKLFNBQVMsSUFBSU4sZ0RBQVdBLENBQUNDLEtBQUtJO1FBQzlCSSxPQUFPQyxtQkFBbUIsR0FBR0osT0FBT0ssT0FBTztJQUM3QztJQUNBSixnQkFBZ0JFLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBR047QUFFRCxpRUFBZUgsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxuZWdyb1xcRGVza3RvcFxcZ2VzdGlvbmFsZVxcbGliXFxtb25nb2RiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIlxyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgYXMgc3RyaW5nXHJcbmNvbnN0IG9wdGlvbnMgPSB7fVxyXG5cclxubGV0IGNsaWVudFxyXG5sZXQgY2xpZW50UHJvbWlzZTogUHJvbWlzZTxNb25nb0NsaWVudD5cclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIHlvdXIgTW9uZ29EQiBVUkkgdG8gLmVudi5sb2NhbFwiKVxyXG59XHJcblxyXG4vLyBDcmVhIHVuYSB2YXJpYWJpbGUgZ2xvYmFsZSBwZXIgbGEgY29ubmVzc2lvbmUgaW4gc3ZpbHVwcG8gKGV2aXRhIHBpw7kgY29ubmVzc2lvbmkgc3UgaG90IHJlbG9hZClcclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIHZhciBfbW9uZ29DbGllbnRQcm9taXNlOiBQcm9taXNlPE1vbmdvQ2xpZW50PiB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXHJcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXHJcbn0gZWxzZSB7XHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcclxuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlXHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiRXJyb3IiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FinsertAttivita%2Froute&page=%2Fapi%2FinsertAttivita%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FinsertAttivita%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FinsertAttivita%2Froute&page=%2Fapi%2FinsertAttivita%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FinsertAttivita%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_negro_Desktop_gestionale_src_app_api_insertAttivita_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/insertAttivita/route.ts */ \"(rsc)/./src/app/api/insertAttivita/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/insertAttivita/route\",\n        pathname: \"/api/insertAttivita\",\n        filename: \"route\",\n        bundlePath: \"app/api/insertAttivita/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\negro\\\\Desktop\\\\gestionale\\\\src\\\\app\\\\api\\\\insertAttivita\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_negro_Desktop_gestionale_src_app_api_insertAttivita_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZpbnNlcnRBdHRpdml0YSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGaW5zZXJ0QXR0aXZpdGElMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZpbnNlcnRBdHRpdml0YSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNuZWdybyU1Q0Rlc2t0b3AlNUNnZXN0aW9uYWxlJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNuZWdybyU1Q0Rlc2t0b3AlNUNnZXN0aW9uYWxlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM4QjtBQUMzRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbmVncm9cXFxcRGVza3RvcFxcXFxnZXN0aW9uYWxlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGluc2VydEF0dGl2aXRhXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9pbnNlcnRBdHRpdml0YS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2luc2VydEF0dGl2aXRhXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9pbnNlcnRBdHRpdml0YS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXG5lZ3JvXFxcXERlc2t0b3BcXFxcZ2VzdGlvbmFsZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxpbnNlcnRBdHRpdml0YVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FinsertAttivita%2Froute&page=%2Fapi%2FinsertAttivita%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FinsertAttivita%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/insertAttivita/route.ts":
/*!*********************************************!*\
  !*** ./src/app/api/insertAttivita/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n\nasync function POST(req) {\n    try {\n        const { idA, nome, data_i, data_f, n_settimane, costo_settimana } = await req.json();\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const db = client.db(\"gestionale\");\n        if (!idA) {\n            return new Response(JSON.stringify({\n                message: \"Inserire un codice dell'attività!\"\n            }), {\n                status: 400\n            } // 400 bad Request\n            );\n        }\n        // Controllo se esiste già \n        const existingUser = await db.collection(\"attivita\").findOne({\n            idA\n        });\n        if (existingUser) {\n            return new Response(JSON.stringify({\n                message: \"Codice attività già esistente\"\n            }), {\n                status: 409\n            } // 409 conflitto\n            );\n        }\n        // Funzione per convertire da yyyy-mm-dd a dd-mm-yyyy\n        const convertDateFormat = (dateStr)=>{\n            const [yyyy, mm, dd] = dateStr.split(\"-\");\n            return `${dd}/${mm}/${yyyy}`;\n        };\n        const newA = {\n            idA,\n            nome,\n            data_i: convertDateFormat(data_i),\n            data_f: convertDateFormat(data_f),\n            n_settimane,\n            costo_settimana\n        };\n        await db.collection(\"attivita\").insertOne(newA);\n        return new Response(JSON.stringify({\n            message: \"Attività inserita con successo\"\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        const errorMessage = error instanceof Error ? error.message : \"An unknown error occurred\";\n        return new Response(JSON.stringify({\n            message: errorMessage\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9pbnNlcnRBdHRpdml0YS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvRDtBQUU3QyxlQUFlQyxLQUFLQyxHQUFZO0lBQ3JDLElBQUk7UUFDRixNQUFNLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxlQUFlLEVBQUUsR0FBRyxNQUFNTixJQUFJTyxJQUFJO1FBQ2xGLE1BQU1DLFNBQVMsTUFBTVYsb0RBQWFBO1FBQ2xDLE1BQU1XLEtBQUtELE9BQU9DLEVBQUUsQ0FBQztRQUVyQixJQUFHLENBQUNSLEtBQUk7WUFDSixPQUFPLElBQUlTLFNBQ1BDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsU0FBUztZQUFvQyxJQUM5RDtnQkFBRUMsUUFBUTtZQUFJLEVBQUUsa0JBQWtCOztRQUUxQztRQUVBLDJCQUEyQjtRQUMzQixNQUFNQyxlQUFlLE1BQU1OLEdBQUdPLFVBQVUsQ0FBQyxZQUFZQyxPQUFPLENBQUM7WUFBRWhCO1FBQUk7UUFDbkUsSUFBSWMsY0FBYztZQUNoQixPQUFPLElBQUlMLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsU0FBUztZQUFnQyxJQUMxRDtnQkFBRUMsUUFBUTtZQUFJLEVBQUUsZ0JBQWdCOztRQUVwQztRQUVBLHFEQUFxRDtRQUNyRCxNQUFNSSxvQkFBb0IsQ0FBQ0M7WUFDekIsTUFBTSxDQUFDQyxNQUFNQyxJQUFJQyxHQUFHLEdBQUdILFFBQVFJLEtBQUssQ0FBQztZQUNyQyxPQUFPLEdBQUdELEdBQUcsQ0FBQyxFQUFFRCxHQUFHLENBQUMsRUFBRUQsTUFBTTtRQUM5QjtRQUVBLE1BQU1JLE9BQU87WUFDWHZCO1lBQ0FDO1lBQ0FDLFFBQVFlLGtCQUFrQmY7WUFDMUJDLFFBQVFjLGtCQUFrQmQ7WUFDMUJDO1lBQ0FDO1FBQ0Y7UUFFQSxNQUFNRyxHQUFHTyxVQUFVLENBQUMsWUFBWVMsU0FBUyxDQUFDRDtRQUUxQyxPQUFPLElBQUlkLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTO1FBQWlDLElBQzNEO1lBQUVDLFFBQVE7UUFBSTtJQUVsQixFQUFFLE9BQU9ZLE9BQXdCO1FBQy9CLE1BQU1DLGVBQWVELGlCQUFpQkUsUUFBUUYsTUFBTWIsT0FBTyxHQUFHO1FBQzlELE9BQU8sSUFBSUgsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFNBQVNjO1FBQWEsSUFDdkM7WUFBRWIsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmVncm9cXERlc2t0b3BcXGdlc3Rpb25hbGVcXHNyY1xcYXBwXFxhcGlcXGluc2VydEF0dGl2aXRhXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL21vbmdvZGJcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGlkQSwgbm9tZSwgZGF0YV9pLCBkYXRhX2YsIG5fc2V0dGltYW5lLCBjb3N0b19zZXR0aW1hbmEgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJnZXN0aW9uYWxlXCIpO1xyXG5cclxuICAgIGlmKCFpZEEpe1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJJbnNlcmlyZSB1biBjb2RpY2UgZGVsbCdhdHRpdml0w6AhXCIgfSksXHJcbiAgICAgICAgICAgIHsgc3RhdHVzOiA0MDAgfSAvLyA0MDAgYmFkIFJlcXVlc3RcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnRyb2xsbyBzZSBlc2lzdGUgZ2nDoCBcclxuICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJhdHRpdml0YVwiKS5maW5kT25lKHsgaWRBIH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nVXNlcikge1xyXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJDb2RpY2UgYXR0aXZpdMOgIGdpw6AgZXNpc3RlbnRlXCIgfSksXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwOSB9IC8vIDQwOSBjb25mbGl0dG9cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW56aW9uZSBwZXIgY29udmVydGlyZSBkYSB5eXl5LW1tLWRkIGEgZGQtbW0teXl5eVxyXG4gICAgY29uc3QgY29udmVydERhdGVGb3JtYXQgPSAoZGF0ZVN0cjogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IFt5eXl5LCBtbSwgZGRdID0gZGF0ZVN0ci5zcGxpdChcIi1cIik7XHJcbiAgICAgIHJldHVybiBgJHtkZH0vJHttbX0vJHt5eXl5fWA7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5ld0EgPSB7XHJcbiAgICAgIGlkQSxcclxuICAgICAgbm9tZSxcclxuICAgICAgZGF0YV9pOiBjb252ZXJ0RGF0ZUZvcm1hdChkYXRhX2kpLFxyXG4gICAgICBkYXRhX2Y6IGNvbnZlcnREYXRlRm9ybWF0KGRhdGFfZiksXHJcbiAgICAgIG5fc2V0dGltYW5lLFxyXG4gICAgICBjb3N0b19zZXR0aW1hbmFcclxuICAgIH07XHJcblxyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImF0dGl2aXRhXCIpLmluc2VydE9uZShuZXdBKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiQXR0aXZpdMOgIGluc2VyaXRhIGNvbiBzdWNjZXNzb1wiIH0pLFxyXG4gICAgICB7IHN0YXR1czogMjAwIH1cclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IEVycm9yIHwgdW5rbm93bikge1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkFuIHVua25vd24gZXJyb3Igb2NjdXJyZWRcIjtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogZXJyb3JNZXNzYWdlIH0pLFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwiUE9TVCIsInJlcSIsImlkQSIsIm5vbWUiLCJkYXRhX2kiLCJkYXRhX2YiLCJuX3NldHRpbWFuZSIsImNvc3RvX3NldHRpbWFuYSIsImpzb24iLCJjbGllbnQiLCJkYiIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJleGlzdGluZ1VzZXIiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsImNvbnZlcnREYXRlRm9ybWF0IiwiZGF0ZVN0ciIsInl5eXkiLCJtbSIsImRkIiwic3BsaXQiLCJuZXdBIiwiaW5zZXJ0T25lIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/insertAttivita/route.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



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

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FinsertAttivita%2Froute&page=%2Fapi%2FinsertAttivita%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FinsertAttivita%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();