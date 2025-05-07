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
exports.id = "app/api/insertIscritto/route";
exports.ids = ["app/api/insertIscritto/route"];
exports.modules = {

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your MongoDB URI to .env.local\");\n}\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1DLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSSxDQUFDTCxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlJLE1BQU07QUFDbEI7QUFPQSxJQUFJTixJQUFzQyxFQUFFO0lBQzFDLElBQUksQ0FBQ08sT0FBT0MsbUJBQW1CLEVBQUU7UUFDL0JKLFNBQVMsSUFBSU4sZ0RBQVdBLENBQUNDLEtBQUtJO1FBQzlCSSxPQUFPQyxtQkFBbUIsR0FBR0osT0FBT0ssT0FBTztJQUM3QztJQUNBSixnQkFBZ0JFLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBR047QUFFRCxpRUFBZUgsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxuZWdyb1xcRGVza3RvcFxcZ2VzdGlvbmFsZVxcbGliXFxtb25nb2RiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIlxyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgYXMgc3RyaW5nXHJcbmNvbnN0IG9wdGlvbnMgPSB7fVxyXG5cclxubGV0IGNsaWVudFxyXG5sZXQgY2xpZW50UHJvbWlzZTogUHJvbWlzZTxNb25nb0NsaWVudD5cclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIHlvdXIgTW9uZ29EQiBVUkkgdG8gLmVudi5sb2NhbFwiKVxyXG59XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgLy8gcGVybWV0dGUgaG90IHJlbG9hZCBpbiBkZXYgc2VuemEgY3JlYXJlIG51b3ZlIGNvbm5lc3Npb25pXHJcbiAgdmFyIF9tb25nb0NsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+XHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG4gIH1cclxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2VcclxufSBlbHNlIHtcclxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2VcclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJFcnJvciIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FinsertIscritto%2Froute&page=%2Fapi%2FinsertIscritto%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FinsertIscritto%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FinsertIscritto%2Froute&page=%2Fapi%2FinsertIscritto%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FinsertIscritto%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_negro_Desktop_gestionale_src_app_api_insertIscritto_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/insertIscritto/route.ts */ \"(rsc)/./src/app/api/insertIscritto/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/insertIscritto/route\",\n        pathname: \"/api/insertIscritto\",\n        filename: \"route\",\n        bundlePath: \"app/api/insertIscritto/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\negro\\\\Desktop\\\\gestionale\\\\src\\\\app\\\\api\\\\insertIscritto\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_negro_Desktop_gestionale_src_app_api_insertIscritto_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZpbnNlcnRJc2NyaXR0byUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGaW5zZXJ0SXNjcml0dG8lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZpbnNlcnRJc2NyaXR0byUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNuZWdybyU1Q0Rlc2t0b3AlNUNnZXN0aW9uYWxlJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNuZWdybyU1Q0Rlc2t0b3AlNUNnZXN0aW9uYWxlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM4QjtBQUMzRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbmVncm9cXFxcRGVza3RvcFxcXFxnZXN0aW9uYWxlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGluc2VydElzY3JpdHRvXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9pbnNlcnRJc2NyaXR0by9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2luc2VydElzY3JpdHRvXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9pbnNlcnRJc2NyaXR0by9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXG5lZ3JvXFxcXERlc2t0b3BcXFxcZ2VzdGlvbmFsZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxpbnNlcnRJc2NyaXR0b1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FinsertIscritto%2Froute&page=%2Fapi%2FinsertIscritto%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FinsertIscritto%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/insertIscritto/route.ts":
/*!*********************************************!*\
  !*** ./src/app/api/insertIscritto/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n\n// converto data da yyyy-mm-dd a dd-mm-yyyy\nconst formatDate = (dateStr)=>{\n    const [yyyy, mm, dd] = dateStr.split(\"-\");\n    return `${dd}/${mm}/${yyyy}`;\n};\nasync function POST(req) {\n    try {\n        const data = await req.json();\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const db = client.db(\"gestionale\");\n        if (data == null) {\n            return new Response(JSON.stringify({\n                message: \"Errore nell'inserimento dell'iscritto. \"\n            }), {\n                status: 400\n            } // 400 bad Request\n            );\n        }\n        const newI = {\n            nome: data.nome,\n            cognome: data.cognome,\n            sesso: data.sesso,\n            data_n: formatDate(data.data_n),\n            luogo_n: data.luogo_n,\n            indirizzo: data.indirizzo,\n            citta: data.citta,\n            cap: data.cap,\n            nazionalita: data.nazionalita,\n            autorizzato_uscita: data.autorizzato_uscita,\n            note: data.note,\n            genitore: {\n                nome: data.genitore_nome,\n                cognome: data.genitore_cognome,\n                telefono: data.genitore_telefono,\n                email: data.genitore_email\n            },\n            disabilita: data.disabilita,\n            privacy: data.privacy,\n            trasporto: data.trasporto,\n            pranzo: data.pranzo\n        };\n        await db.collection(\"iscritti\").insertOne(newI);\n        return new Response(JSON.stringify({\n            message: \"Iscritto inserito con successo\"\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        return new Response(JSON.stringify({\n            message: error.message\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9pbnNlcnRJc2NyaXR0by9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvRDtBQUVwRCwyQ0FBMkM7QUFDM0MsTUFBTUMsYUFBYSxDQUFDQztJQUNsQixNQUFNLENBQUNDLE1BQU1DLElBQUlDLEdBQUcsR0FBR0gsUUFBUUksS0FBSyxDQUFDO0lBQ3JDLE9BQU8sR0FBR0QsR0FBRyxDQUFDLEVBQUVELEdBQUcsQ0FBQyxFQUFFRCxNQUFNO0FBQzlCO0FBRU8sZUFBZUksS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO1FBQzNCLE1BQU1DLFNBQVMsTUFBTVgsb0RBQWFBO1FBQ2xDLE1BQU1ZLEtBQUtELE9BQU9DLEVBQUUsQ0FBQztRQUVyQixJQUFHSCxRQUFRLE1BQUs7WUFDWixPQUFPLElBQUlJLFNBQ1BDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsU0FBUztZQUEwQyxJQUNwRTtnQkFBRUMsUUFBUTtZQUFJLEVBQUUsa0JBQWtCOztRQUUxQztRQUVBLE1BQU1DLE9BQU87WUFDWEMsTUFBTVYsS0FBS1UsSUFBSTtZQUNmQyxTQUFTWCxLQUFLVyxPQUFPO1lBQ3JCQyxPQUFPWixLQUFLWSxLQUFLO1lBQ2pCQyxRQUFRckIsV0FBV1EsS0FBS2EsTUFBTTtZQUM5QkMsU0FBU2QsS0FBS2MsT0FBTztZQUNyQkMsV0FBV2YsS0FBS2UsU0FBUztZQUN6QkMsT0FBT2hCLEtBQUtnQixLQUFLO1lBQ2pCQyxLQUFLakIsS0FBS2lCLEdBQUc7WUFDYkMsYUFBYWxCLEtBQUtrQixXQUFXO1lBQzdCQyxvQkFBb0JuQixLQUFLbUIsa0JBQWtCO1lBQzNDQyxNQUFNcEIsS0FBS29CLElBQUk7WUFDZkMsVUFBUztnQkFDUFgsTUFBTVYsS0FBS3NCLGFBQWE7Z0JBQ3hCWCxTQUFTWCxLQUFLdUIsZ0JBQWdCO2dCQUM5QkMsVUFBVXhCLEtBQUt5QixpQkFBaUI7Z0JBQ2hDQyxPQUFPMUIsS0FBSzJCLGNBQWM7WUFDNUI7WUFDQUMsWUFBWTVCLEtBQUs0QixVQUFVO1lBQzNCQyxTQUFTN0IsS0FBSzZCLE9BQU87WUFDckJDLFdBQVc5QixLQUFLOEIsU0FBUztZQUN6QkMsUUFBUS9CLEtBQUsrQixNQUFNO1FBQ3JCO1FBRUEsTUFBTTVCLEdBQUc2QixVQUFVLENBQUMsWUFBWUMsU0FBUyxDQUFDeEI7UUFFMUMsT0FBTyxJQUFJTCxTQUNUQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsU0FBUztRQUFpQyxJQUMzRDtZQUFFQyxRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPMEIsT0FBb0I7UUFDM0IsT0FBTyxJQUFJOUIsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFNBQVMyQixNQUFNM0IsT0FBTztRQUFDLElBQ3hDO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXG5lZ3JvXFxEZXNrdG9wXFxnZXN0aW9uYWxlXFxzcmNcXGFwcFxcYXBpXFxpbnNlcnRJc2NyaXR0b1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9tb25nb2RiXCI7XHJcblxyXG4vLyBjb252ZXJ0byBkYXRhIGRhIHl5eXktbW0tZGQgYSBkZC1tbS15eXl5XHJcbmNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZVN0cjogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgW3l5eXksIG1tLCBkZF0gPSBkYXRlU3RyLnNwbGl0KFwiLVwiKTtcclxuICByZXR1cm4gYCR7ZGR9LyR7bW19LyR7eXl5eX1gO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKFwiZ2VzdGlvbmFsZVwiKTtcclxuXHJcbiAgICBpZihkYXRhID09IG51bGwpe1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJFcnJvcmUgbmVsbCdpbnNlcmltZW50byBkZWxsJ2lzY3JpdHRvLiBcIiB9KSxcclxuICAgICAgICAgICAgeyBzdGF0dXM6IDQwMCB9IC8vIDQwMCBiYWQgUmVxdWVzdFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IG5ld0kgPSB7XHJcbiAgICAgIG5vbWU6IGRhdGEubm9tZSxcclxuICAgICAgY29nbm9tZTogZGF0YS5jb2dub21lLFxyXG4gICAgICBzZXNzbzogZGF0YS5zZXNzbyxcclxuICAgICAgZGF0YV9uOiBmb3JtYXREYXRlKGRhdGEuZGF0YV9uKSxcclxuICAgICAgbHVvZ29fbjogZGF0YS5sdW9nb19uLFxyXG4gICAgICBpbmRpcml6em86IGRhdGEuaW5kaXJpenpvLFxyXG4gICAgICBjaXR0YTogZGF0YS5jaXR0YSxcclxuICAgICAgY2FwOiBkYXRhLmNhcCxcclxuICAgICAgbmF6aW9uYWxpdGE6IGRhdGEubmF6aW9uYWxpdGEsXHJcbiAgICAgIGF1dG9yaXp6YXRvX3VzY2l0YTogZGF0YS5hdXRvcml6emF0b191c2NpdGEsXHJcbiAgICAgIG5vdGU6IGRhdGEubm90ZSxcclxuICAgICAgZ2VuaXRvcmU6e1xyXG4gICAgICAgIG5vbWU6IGRhdGEuZ2VuaXRvcmVfbm9tZSAsXHJcbiAgICAgICAgY29nbm9tZTogZGF0YS5nZW5pdG9yZV9jb2dub21lLFxyXG4gICAgICAgIHRlbGVmb25vOiBkYXRhLmdlbml0b3JlX3RlbGVmb25vLFxyXG4gICAgICAgIGVtYWlsOiBkYXRhLmdlbml0b3JlX2VtYWlsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRpc2FiaWxpdGE6IGRhdGEuZGlzYWJpbGl0YSxcclxuICAgICAgcHJpdmFjeTogZGF0YS5wcml2YWN5LCBcclxuICAgICAgdHJhc3BvcnRvOiBkYXRhLnRyYXNwb3J0bywgXHJcbiAgICAgIHByYW56bzogZGF0YS5wcmFuem9cclxuICAgIH07XHJcblxyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcImlzY3JpdHRpXCIpLmluc2VydE9uZShuZXdJKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiSXNjcml0dG8gaW5zZXJpdG8gY29uIHN1Y2Nlc3NvXCIgfSksXHJcbiAgICAgIHsgc3RhdHVzOiAyMDAgfVxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnJvcjogRXJyb3IgfCBhbnkpIHtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsImZvcm1hdERhdGUiLCJkYXRlU3RyIiwieXl5eSIsIm1tIiwiZGQiLCJzcGxpdCIsIlBPU1QiLCJyZXEiLCJkYXRhIiwianNvbiIsImNsaWVudCIsImRiIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsInN0YXR1cyIsIm5ld0kiLCJub21lIiwiY29nbm9tZSIsInNlc3NvIiwiZGF0YV9uIiwibHVvZ29fbiIsImluZGlyaXp6byIsImNpdHRhIiwiY2FwIiwibmF6aW9uYWxpdGEiLCJhdXRvcml6emF0b191c2NpdGEiLCJub3RlIiwiZ2VuaXRvcmUiLCJnZW5pdG9yZV9ub21lIiwiZ2VuaXRvcmVfY29nbm9tZSIsInRlbGVmb25vIiwiZ2VuaXRvcmVfdGVsZWZvbm8iLCJlbWFpbCIsImdlbml0b3JlX2VtYWlsIiwiZGlzYWJpbGl0YSIsInByaXZhY3kiLCJ0cmFzcG9ydG8iLCJwcmFuem8iLCJjb2xsZWN0aW9uIiwiaW5zZXJ0T25lIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/insertIscritto/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FinsertIscritto%2Froute&page=%2Fapi%2FinsertIscritto%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FinsertIscritto%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();