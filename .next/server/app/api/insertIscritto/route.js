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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your MongoDB URI to .env.local\");\n}\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1DLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSSxDQUFDTCxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlJLE1BQU07QUFDbEI7QUFPQSxJQUFJTixJQUFzQyxFQUFFO0lBQzFDLElBQUksQ0FBQ08sT0FBT0MsbUJBQW1CLEVBQUU7UUFDL0JKLFNBQVMsSUFBSU4sZ0RBQVdBLENBQUNDLEtBQUtJO1FBQzlCSSxPQUFPQyxtQkFBbUIsR0FBR0osT0FBT0ssT0FBTztJQUM3QztJQUNBSixnQkFBZ0JFLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBR047QUFFRCxpRUFBZUgsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxuZWdyb1xcRGVza3RvcFxcZ2VzdGlvbmFsZVxcbGliXFxtb25nb2RiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIlxyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgYXMgc3RyaW5nXHJcbmNvbnN0IG9wdGlvbnMgPSB7fVxyXG5cclxubGV0IGNsaWVudFxyXG5sZXQgY2xpZW50UHJvbWlzZTogUHJvbWlzZTxNb25nb0NsaWVudD5cclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIHlvdXIgTW9uZ29EQiBVUkkgdG8gLmVudi5sb2NhbFwiKVxyXG59XHJcblxyXG4vLyBDcmVhIHVuYSB2YXJpYWJpbGUgZ2xvYmFsZSBwZXIgbGEgY29ubmVzc2lvbmUgaW4gc3ZpbHVwcG8gKGV2aXRhIHBpw7kgY29ubmVzc2lvbmkgc3UgaG90IHJlbG9hZClcclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIHZhciBfbW9uZ29DbGllbnRQcm9taXNlOiBQcm9taXNlPE1vbmdvQ2xpZW50PiB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXHJcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXHJcbn0gZWxzZSB7XHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcclxuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlXHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiRXJyb3IiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n\n// converto data da yyyy-mm-dd a dd-mm-yyyy\nconst formatDate = (dateStr)=>{\n    const [yyyy, mm, dd] = dateStr.split(\"-\");\n    return `${dd}/${mm}/${yyyy}`;\n};\nasync function POST(req) {\n    try {\n        const data = await req.json();\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const db = client.db(\"gestionale\");\n        if (!data) {\n            return new Response(JSON.stringify({\n                message: \"Errore nell'inserimento dell'iscritto.\"\n            }), {\n                status: 400\n            });\n        }\n        const newI = {\n            nome: data.nome,\n            cognome: data.cognome,\n            sesso: data.sesso,\n            data_n: formatDate(data.data_n),\n            luogo_n: data.luogo_n,\n            indirizzo: data.indirizzo,\n            citta: data.citta,\n            cap: data.cap,\n            nazionalita: data.nazionalita,\n            autorizzato_uscita: data.autorizzato_uscita,\n            note: data.note,\n            genitore: {\n                nome: data.genitore?.nome_g ?? \"\",\n                cognome: data.genitore?.cognome_g ?? \"\",\n                telefono: data.genitore?.telefono_g ?? \"\",\n                email: data.genitore?.email_g ?? \"\"\n            },\n            disabilita: data.disabilita ?? false,\n            privacy: data.privacy ?? false,\n            trasporto: data.trasporto ?? false,\n            pranzo: data.pranzo ?? \"\",\n            da_pagare: data.da_pagare ?? 0,\n            pagato: data.pagato ?? 0,\n            tipo_pagamento: data.tipo_pagamento ?? \"\",\n            turni: {\n                idT: Array.isArray(data.turni?.idT) ? data.turni.idT : []\n            }\n        };\n        await db.collection(\"iscritti\").insertOne(newI);\n        return new Response(JSON.stringify({\n            message: \"Iscritto inserito con successo\"\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        const errorMessage = error instanceof Error ? error.message : \"Unknown error occurred\";\n        return new Response(JSON.stringify({\n            message: errorMessage\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9pbnNlcnRJc2NyaXR0by9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvRDtBQUVwRCwyQ0FBMkM7QUFDM0MsTUFBTUMsYUFBYSxDQUFDQztJQUNsQixNQUFNLENBQUNDLE1BQU1DLElBQUlDLEdBQUcsR0FBR0gsUUFBUUksS0FBSyxDQUFDO0lBQ3JDLE9BQU8sR0FBR0QsR0FBRyxDQUFDLEVBQUVELEdBQUcsQ0FBQyxFQUFFRCxNQUFNO0FBQzlCO0FBRU8sZUFBZUksS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO1FBQzNCLE1BQU1DLFNBQVMsTUFBTVgsb0RBQWFBO1FBQ2xDLE1BQU1ZLEtBQUtELE9BQU9DLEVBQUUsQ0FBQztRQUVyQixJQUFJLENBQUNILE1BQU07WUFDVCxPQUFPLElBQUlJLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsU0FBUztZQUF5QyxJQUNuRTtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsTUFBTUMsT0FBTztZQUNYQyxNQUFNVixLQUFLVSxJQUFJO1lBQ2ZDLFNBQVNYLEtBQUtXLE9BQU87WUFDckJDLE9BQU9aLEtBQUtZLEtBQUs7WUFDakJDLFFBQVFyQixXQUFXUSxLQUFLYSxNQUFNO1lBQzlCQyxTQUFTZCxLQUFLYyxPQUFPO1lBQ3JCQyxXQUFXZixLQUFLZSxTQUFTO1lBQ3pCQyxPQUFPaEIsS0FBS2dCLEtBQUs7WUFDakJDLEtBQUtqQixLQUFLaUIsR0FBRztZQUNiQyxhQUFhbEIsS0FBS2tCLFdBQVc7WUFDN0JDLG9CQUFvQm5CLEtBQUttQixrQkFBa0I7WUFDM0NDLE1BQU1wQixLQUFLb0IsSUFBSTtZQUNmQyxVQUFVO2dCQUNSWCxNQUFNVixLQUFLcUIsUUFBUSxFQUFFQyxVQUFVO2dCQUMvQlgsU0FBU1gsS0FBS3FCLFFBQVEsRUFBRUUsYUFBYTtnQkFDckNDLFVBQVV4QixLQUFLcUIsUUFBUSxFQUFFSSxjQUFjO2dCQUN2Q0MsT0FBTzFCLEtBQUtxQixRQUFRLEVBQUVNLFdBQVc7WUFDbkM7WUFDQUMsWUFBWTVCLEtBQUs0QixVQUFVLElBQUk7WUFDL0JDLFNBQVM3QixLQUFLNkIsT0FBTyxJQUFJO1lBQ3pCQyxXQUFXOUIsS0FBSzhCLFNBQVMsSUFBSTtZQUM3QkMsUUFBUS9CLEtBQUsrQixNQUFNLElBQUk7WUFDdkJDLFdBQVdoQyxLQUFLZ0MsU0FBUyxJQUFJO1lBQzdCQyxRQUFRakMsS0FBS2lDLE1BQU0sSUFBSTtZQUN2QkMsZ0JBQWdCbEMsS0FBS2tDLGNBQWMsSUFBSTtZQUN2Q0MsT0FBTztnQkFDTEMsS0FBS0MsTUFBTUMsT0FBTyxDQUFDdEMsS0FBS21DLEtBQUssRUFBRUMsT0FBT3BDLEtBQUttQyxLQUFLLENBQUNDLEdBQUcsR0FBRyxFQUFFO1lBQzNEO1FBQ0Y7UUFFQSxNQUFNakMsR0FBR29DLFVBQVUsQ0FBQyxZQUFZQyxTQUFTLENBQUMvQjtRQUUxQyxPQUFPLElBQUlMLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTO1FBQWlDLElBQzNEO1lBQUVDLFFBQVE7UUFBSTtJQUVsQixFQUFFLE9BQU9pQyxPQUFPO1FBQ2QsTUFBTUMsZUFBZUQsaUJBQWlCRSxRQUFRRixNQUFNbEMsT0FBTyxHQUFHO1FBQzlELE9BQU8sSUFBSUgsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFNBQVNtQztRQUFhLElBQ3ZDO1lBQUVsQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxuZWdyb1xcRGVza3RvcFxcZ2VzdGlvbmFsZVxcc3JjXFxhcHBcXGFwaVxcaW5zZXJ0SXNjcml0dG9cXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvbW9uZ29kYlwiO1xyXG5cclxuLy8gY29udmVydG8gZGF0YSBkYSB5eXl5LW1tLWRkIGEgZGQtbW0teXl5eVxyXG5jb25zdCBmb3JtYXREYXRlID0gKGRhdGVTdHI6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IFt5eXl5LCBtbSwgZGRdID0gZGF0ZVN0ci5zcGxpdChcIi1cIik7XHJcbiAgcmV0dXJuIGAke2RkfS8ke21tfS8ke3l5eXl9YDtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYihcImdlc3Rpb25hbGVcIik7XHJcblxyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIkVycm9yZSBuZWxsJ2luc2VyaW1lbnRvIGRlbGwnaXNjcml0dG8uXCIgfSksXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3SSA9IHtcclxuICAgICAgbm9tZTogZGF0YS5ub21lLFxyXG4gICAgICBjb2dub21lOiBkYXRhLmNvZ25vbWUsXHJcbiAgICAgIHNlc3NvOiBkYXRhLnNlc3NvLFxyXG4gICAgICBkYXRhX246IGZvcm1hdERhdGUoZGF0YS5kYXRhX24pLFxyXG4gICAgICBsdW9nb19uOiBkYXRhLmx1b2dvX24sXHJcbiAgICAgIGluZGlyaXp6bzogZGF0YS5pbmRpcml6em8sXHJcbiAgICAgIGNpdHRhOiBkYXRhLmNpdHRhLFxyXG4gICAgICBjYXA6IGRhdGEuY2FwLFxyXG4gICAgICBuYXppb25hbGl0YTogZGF0YS5uYXppb25hbGl0YSxcclxuICAgICAgYXV0b3JpenphdG9fdXNjaXRhOiBkYXRhLmF1dG9yaXp6YXRvX3VzY2l0YSxcclxuICAgICAgbm90ZTogZGF0YS5ub3RlLFxyXG4gICAgICBnZW5pdG9yZToge1xyXG4gICAgICAgIG5vbWU6IGRhdGEuZ2VuaXRvcmU/Lm5vbWVfZyA/PyBcIlwiLFxyXG4gICAgICAgIGNvZ25vbWU6IGRhdGEuZ2VuaXRvcmU/LmNvZ25vbWVfZyA/PyBcIlwiLFxyXG4gICAgICAgIHRlbGVmb25vOiBkYXRhLmdlbml0b3JlPy50ZWxlZm9ub19nID8/IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IGRhdGEuZ2VuaXRvcmU/LmVtYWlsX2cgPz8gXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICBkaXNhYmlsaXRhOiBkYXRhLmRpc2FiaWxpdGEgPz8gZmFsc2UsXHJcbiAgICAgIHByaXZhY3k6IGRhdGEucHJpdmFjeSA/PyBmYWxzZSxcclxuICAgICAgdHJhc3BvcnRvOiBkYXRhLnRyYXNwb3J0byA/PyBmYWxzZSxcclxuICAgICAgcHJhbnpvOiBkYXRhLnByYW56byA/PyBcIlwiLFxyXG4gICAgICBkYV9wYWdhcmU6IGRhdGEuZGFfcGFnYXJlID8/IDAsXHJcbiAgICAgIHBhZ2F0bzogZGF0YS5wYWdhdG8gPz8gMCxcclxuICAgICAgdGlwb19wYWdhbWVudG86IGRhdGEudGlwb19wYWdhbWVudG8gPz8gXCJcIixcclxuICAgICAgdHVybmk6IHtcclxuICAgICAgICBpZFQ6IEFycmF5LmlzQXJyYXkoZGF0YS50dXJuaT8uaWRUKSA/IGRhdGEudHVybmkuaWRUIDogW11cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiaXNjcml0dGlcIikuaW5zZXJ0T25lKG5ld0kpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJJc2NyaXR0byBpbnNlcml0byBjb24gc3VjY2Vzc29cIiB9KSxcclxuICAgICAgeyBzdGF0dXM6IDIwMCB9XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvciBvY2N1cnJlZFwiO1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBlcnJvck1lc3NhZ2UgfSksXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJmb3JtYXREYXRlIiwiZGF0ZVN0ciIsInl5eXkiLCJtbSIsImRkIiwic3BsaXQiLCJQT1NUIiwicmVxIiwiZGF0YSIsImpzb24iLCJjbGllbnQiLCJkYiIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJuZXdJIiwibm9tZSIsImNvZ25vbWUiLCJzZXNzbyIsImRhdGFfbiIsImx1b2dvX24iLCJpbmRpcml6em8iLCJjaXR0YSIsImNhcCIsIm5hemlvbmFsaXRhIiwiYXV0b3JpenphdG9fdXNjaXRhIiwibm90ZSIsImdlbml0b3JlIiwibm9tZV9nIiwiY29nbm9tZV9nIiwidGVsZWZvbm8iLCJ0ZWxlZm9ub19nIiwiZW1haWwiLCJlbWFpbF9nIiwiZGlzYWJpbGl0YSIsInByaXZhY3kiLCJ0cmFzcG9ydG8iLCJwcmFuem8iLCJkYV9wYWdhcmUiLCJwYWdhdG8iLCJ0aXBvX3BhZ2FtZW50byIsInR1cm5pIiwiaWRUIiwiQXJyYXkiLCJpc0FycmF5IiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/insertIscritto/route.ts\n");

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