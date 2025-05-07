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
exports.id = "app/api/updateIscritto/route";
exports.ids = ["app/api/updateIscritto/route"];
exports.modules = {

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your MongoDB URI to .env.local\");\n}\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1DLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSSxDQUFDTCxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlJLE1BQU07QUFDbEI7QUFPQSxJQUFJTixJQUFzQyxFQUFFO0lBQzFDLElBQUksQ0FBQ08sT0FBT0MsbUJBQW1CLEVBQUU7UUFDL0JKLFNBQVMsSUFBSU4sZ0RBQVdBLENBQUNDLEtBQUtJO1FBQzlCSSxPQUFPQyxtQkFBbUIsR0FBR0osT0FBT0ssT0FBTztJQUM3QztJQUNBSixnQkFBZ0JFLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBR047QUFFRCxpRUFBZUgsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxuZWdyb1xcRGVza3RvcFxcZ2VzdGlvbmFsZVxcbGliXFxtb25nb2RiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIlxyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgYXMgc3RyaW5nXHJcbmNvbnN0IG9wdGlvbnMgPSB7fVxyXG5cclxubGV0IGNsaWVudFxyXG5sZXQgY2xpZW50UHJvbWlzZTogUHJvbWlzZTxNb25nb0NsaWVudD5cclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIHlvdXIgTW9uZ29EQiBVUkkgdG8gLmVudi5sb2NhbFwiKVxyXG59XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgLy8gcGVybWV0dGUgaG90IHJlbG9hZCBpbiBkZXYgc2VuemEgY3JlYXJlIG51b3ZlIGNvbm5lc3Npb25pXHJcbiAgdmFyIF9tb25nb0NsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+XHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG4gIH1cclxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2VcclxufSBlbHNlIHtcclxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2VcclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJFcnJvciIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FupdateIscritto%2Froute&page=%2Fapi%2FupdateIscritto%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FupdateIscritto%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FupdateIscritto%2Froute&page=%2Fapi%2FupdateIscritto%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FupdateIscritto%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_negro_Desktop_gestionale_src_app_api_updateIscritto_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/updateIscritto/route.ts */ \"(rsc)/./src/app/api/updateIscritto/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/updateIscritto/route\",\n        pathname: \"/api/updateIscritto\",\n        filename: \"route\",\n        bundlePath: \"app/api/updateIscritto/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\negro\\\\Desktop\\\\gestionale\\\\src\\\\app\\\\api\\\\updateIscritto\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_negro_Desktop_gestionale_src_app_api_updateIscritto_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1cGRhdGVJc2NyaXR0byUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXBkYXRlSXNjcml0dG8lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1cGRhdGVJc2NyaXR0byUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNuZWdybyU1Q0Rlc2t0b3AlNUNnZXN0aW9uYWxlJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNuZWdybyU1Q0Rlc2t0b3AlNUNnZXN0aW9uYWxlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM4QjtBQUMzRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbmVncm9cXFxcRGVza3RvcFxcXFxnZXN0aW9uYWxlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVwZGF0ZUlzY3JpdHRvXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91cGRhdGVJc2NyaXR0by9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VwZGF0ZUlzY3JpdHRvXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91cGRhdGVJc2NyaXR0by9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXG5lZ3JvXFxcXERlc2t0b3BcXFxcZ2VzdGlvbmFsZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx1cGRhdGVJc2NyaXR0b1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FupdateIscritto%2Froute&page=%2Fapi%2FupdateIscritto%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FupdateIscritto%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/updateIscritto/route.ts":
/*!*********************************************!*\
  !*** ./src/app/api/updateIscritto/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n\n// converto data da yyyy-mm-dd a dd-mm-yyyy\nconst formatDate = (dateStr)=>{\n    const [yyyy, mm, dd] = dateStr.split(\"-\");\n    return `${dd}/${mm}/${yyyy}`;\n};\nasync function POST(req) {\n    try {\n        const data = await req.json();\n        if (!data._id) {\n            return new Response(JSON.stringify({\n                message: \"ID mancante. Impossibile aggiornare l'iscritto.\"\n            }), {\n                status: 400\n            });\n        }\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const db = client.db(\"gestionale\");\n        const { ObjectId } = __webpack_require__(/*! mongodb */ \"mongodb\");\n        const updated = await db.collection(\"iscritti\").updateOne({\n            \"_id\": new ObjectId(data._id)\n        }, {\n            $set: {\n                nome: data.nome,\n                cognome: data.cognome,\n                sesso: data.sesso,\n                data_n: formatDate(data.data_n),\n                luogo_n: data.luogo_n,\n                indirizzo: data.indirizzo,\n                citta: data.citta,\n                cap: data.cap,\n                nazionalita: data.nazionalita,\n                autorizzato_uscita: data.autorizzato_uscita,\n                note: data.note,\n                genitore: {\n                    nome: data.genitore.nome,\n                    cognome: data.genitore.cognome,\n                    telefono: data.genitore.telefono,\n                    email: data.genitore.email\n                },\n                disabilita: data.disabilita,\n                privacy: data.privacy,\n                trasporto: data.trasporto,\n                pranzo: data.pranzo\n            }\n        });\n        if (updated.modifiedCount === 0) {\n            return new Response(JSON.stringify({\n                message: \"Nessuna modifica effettuata. Verifica che l'ID esista.\"\n            }), {\n                status: 404\n            });\n        }\n        return new Response(JSON.stringify({\n            message: \"Iscritto aggiornato con successo\"\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        return new Response(JSON.stringify({\n            message: error.message\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91cGRhdGVJc2NyaXR0by9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvRDtBQUVwRCwyQ0FBMkM7QUFDM0MsTUFBTUMsYUFBYSxDQUFDQztJQUNsQixNQUFNLENBQUNDLE1BQU1DLElBQUlDLEdBQUcsR0FBR0gsUUFBUUksS0FBSyxDQUFDO0lBQ3JDLE9BQU8sR0FBR0QsR0FBRyxDQUFDLEVBQUVELEdBQUcsQ0FBQyxFQUFFRCxNQUFNO0FBQzlCO0FBRU8sZUFBZUksS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO1FBQzNCLElBQUksQ0FBQ0QsS0FBS0UsR0FBRyxFQUFFO1lBQ2IsT0FBTyxJQUFJQyxTQUNUQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFNBQVM7WUFBa0QsSUFDNUU7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE1BQU1DLFNBQVMsTUFBTWpCLG9EQUFhQTtRQUNsQyxNQUFNa0IsS0FBS0QsT0FBT0MsRUFBRSxDQUFDO1FBQ3JCLE1BQU0sRUFBQ0MsUUFBUSxFQUFDLEdBQUdDLG1CQUFPQSxDQUFDLHdCQUFTO1FBRXBDLE1BQU1DLFVBQVUsTUFBTUgsR0FBR0ksVUFBVSxDQUFDLFlBQVlDLFNBQVMsQ0FDdkQ7WUFBRSxPQUFPLElBQUlKLFNBQVNWLEtBQUtFLEdBQUc7UUFBRSxHQUNoQztZQUNFYSxNQUFNO2dCQUNKQyxNQUFNaEIsS0FBS2dCLElBQUk7Z0JBQ2ZDLFNBQVNqQixLQUFLaUIsT0FBTztnQkFDckJDLE9BQU9sQixLQUFLa0IsS0FBSztnQkFDakJDLFFBQVEzQixXQUFXUSxLQUFLbUIsTUFBTTtnQkFDOUJDLFNBQVNwQixLQUFLb0IsT0FBTztnQkFDckJDLFdBQVdyQixLQUFLcUIsU0FBUztnQkFDekJDLE9BQU90QixLQUFLc0IsS0FBSztnQkFDakJDLEtBQUt2QixLQUFLdUIsR0FBRztnQkFDYkMsYUFBYXhCLEtBQUt3QixXQUFXO2dCQUM3QkMsb0JBQW9CekIsS0FBS3lCLGtCQUFrQjtnQkFDM0NDLE1BQU0xQixLQUFLMEIsSUFBSTtnQkFDZkMsVUFBUztvQkFDUFgsTUFBTWhCLEtBQUsyQixRQUFRLENBQUNYLElBQUk7b0JBQ3hCQyxTQUFTakIsS0FBSzJCLFFBQVEsQ0FBQ1YsT0FBTztvQkFDOUJXLFVBQVU1QixLQUFLMkIsUUFBUSxDQUFDQyxRQUFRO29CQUNoQ0MsT0FBTzdCLEtBQUsyQixRQUFRLENBQUNFLEtBQUs7Z0JBQzVCO2dCQUNBQyxZQUFZOUIsS0FBSzhCLFVBQVU7Z0JBQzNCQyxTQUFTL0IsS0FBSytCLE9BQU87Z0JBQ3JCQyxXQUFXaEMsS0FBS2dDLFNBQVM7Z0JBQ3pCQyxRQUFRakMsS0FBS2lDLE1BQU07WUFDckI7UUFDRjtRQUdGLElBQUlyQixRQUFRc0IsYUFBYSxLQUFLLEdBQUc7WUFDL0IsT0FBTyxJQUFJL0IsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxTQUFTO1lBQXlELElBQ25GO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxPQUFPLElBQUlKLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTO1FBQW1DLElBQzdEO1lBQUVDLFFBQVE7UUFBSTtJQUVsQixFQUFFLE9BQU80QixPQUFvQjtRQUMzQixPQUFPLElBQUloQyxTQUNUQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsU0FBUzZCLE1BQU03QixPQUFPO1FBQUMsSUFDeEM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmVncm9cXERlc2t0b3BcXGdlc3Rpb25hbGVcXHNyY1xcYXBwXFxhcGlcXHVwZGF0ZUlzY3JpdHRvXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL21vbmdvZGJcIjtcclxuXHJcbi8vIGNvbnZlcnRvIGRhdGEgZGEgeXl5eS1tbS1kZCBhIGRkLW1tLXl5eXlcclxuY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlU3RyOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBbeXl5eSwgbW0sIGRkXSA9IGRhdGVTdHIuc3BsaXQoXCItXCIpO1xyXG4gIHJldHVybiBgJHtkZH0vJHttbX0vJHt5eXl5fWA7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICBpZiAoIWRhdGEuX2lkKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIklEIG1hbmNhbnRlLiBJbXBvc3NpYmlsZSBhZ2dpb3JuYXJlIGwnaXNjcml0dG8uXCIgfSksXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKFwiZ2VzdGlvbmFsZVwiKTtcclxuICAgIGNvbnN0IHtPYmplY3RJZH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIuY29sbGVjdGlvbihcImlzY3JpdHRpXCIpLnVwZGF0ZU9uZShcclxuICAgICAgeyBcIl9pZFwiOiBuZXcgT2JqZWN0SWQoZGF0YS5faWQpIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICBub21lOiBkYXRhLm5vbWUsXHJcbiAgICAgICAgICBjb2dub21lOiBkYXRhLmNvZ25vbWUsXHJcbiAgICAgICAgICBzZXNzbzogZGF0YS5zZXNzbyxcclxuICAgICAgICAgIGRhdGFfbjogZm9ybWF0RGF0ZShkYXRhLmRhdGFfbiksXHJcbiAgICAgICAgICBsdW9nb19uOiBkYXRhLmx1b2dvX24sXHJcbiAgICAgICAgICBpbmRpcml6em86IGRhdGEuaW5kaXJpenpvLFxyXG4gICAgICAgICAgY2l0dGE6IGRhdGEuY2l0dGEsXHJcbiAgICAgICAgICBjYXA6IGRhdGEuY2FwLFxyXG4gICAgICAgICAgbmF6aW9uYWxpdGE6IGRhdGEubmF6aW9uYWxpdGEsXHJcbiAgICAgICAgICBhdXRvcml6emF0b191c2NpdGE6IGRhdGEuYXV0b3JpenphdG9fdXNjaXRhLFxyXG4gICAgICAgICAgbm90ZTogZGF0YS5ub3RlLFxyXG4gICAgICAgICAgZ2VuaXRvcmU6e1xyXG4gICAgICAgICAgICBub21lOiBkYXRhLmdlbml0b3JlLm5vbWUgLFxyXG4gICAgICAgICAgICBjb2dub21lOiBkYXRhLmdlbml0b3JlLmNvZ25vbWUsXHJcbiAgICAgICAgICAgIHRlbGVmb25vOiBkYXRhLmdlbml0b3JlLnRlbGVmb25vLFxyXG4gICAgICAgICAgICBlbWFpbDogZGF0YS5nZW5pdG9yZS5lbWFpbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRpc2FiaWxpdGE6IGRhdGEuZGlzYWJpbGl0YSxcclxuICAgICAgICAgIHByaXZhY3k6IGRhdGEucHJpdmFjeSwgXHJcbiAgICAgICAgICB0cmFzcG9ydG86IGRhdGEudHJhc3BvcnRvLCBcclxuICAgICAgICAgIHByYW56bzogZGF0YS5wcmFuem9cclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGlmICh1cGRhdGVkLm1vZGlmaWVkQ291bnQgPT09IDApIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiTmVzc3VuYSBtb2RpZmljYSBlZmZldHR1YXRhLiBWZXJpZmljYSBjaGUgbCdJRCBlc2lzdGEuXCIgfSksXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwNCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIklzY3JpdHRvIGFnZ2lvcm5hdG8gY29uIHN1Y2Nlc3NvXCIgfSksXHJcbiAgICAgIHsgc3RhdHVzOiAyMDAgfVxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnJvcjogRXJyb3IgfCBhbnkpIHtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsImZvcm1hdERhdGUiLCJkYXRlU3RyIiwieXl5eSIsIm1tIiwiZGQiLCJzcGxpdCIsIlBPU1QiLCJyZXEiLCJkYXRhIiwianNvbiIsIl9pZCIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJjbGllbnQiLCJkYiIsIk9iamVjdElkIiwicmVxdWlyZSIsInVwZGF0ZWQiLCJjb2xsZWN0aW9uIiwidXBkYXRlT25lIiwiJHNldCIsIm5vbWUiLCJjb2dub21lIiwic2Vzc28iLCJkYXRhX24iLCJsdW9nb19uIiwiaW5kaXJpenpvIiwiY2l0dGEiLCJjYXAiLCJuYXppb25hbGl0YSIsImF1dG9yaXp6YXRvX3VzY2l0YSIsIm5vdGUiLCJnZW5pdG9yZSIsInRlbGVmb25vIiwiZW1haWwiLCJkaXNhYmlsaXRhIiwicHJpdmFjeSIsInRyYXNwb3J0byIsInByYW56byIsIm1vZGlmaWVkQ291bnQiLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/updateIscritto/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FupdateIscritto%2Froute&page=%2Fapi%2FupdateIscritto%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FupdateIscritto%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();