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

/***/ "(rsc)/./lib/jwt.ts":
/*!********************!*\
  !*** ./lib/jwt.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   destroyToken: () => (/* binding */ destroyToken),\n/* harmony export */   refreshToken: () => (/* binding */ refreshToken),\n/* harmony export */   signToken: () => (/* binding */ signToken),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nconst secret = process.env.JWT_SECRET;\nfunction signToken(payload) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, secret, {\n        expiresIn: \"1h\"\n    });\n}\nfunction verifyToken(token) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, secret);\n}\nfunction refreshToken(token) {\n    try {\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, secret, {\n            ignoreExpiration: true\n        });\n        const { iat, exp, ...payload } = decoded;\n        return signToken(payload);\n    } catch (error) {\n        throw new Error(\"Token non valido o impossibile da rinnovare.\");\n    }\n}\nasync function destroyToken() {\n    (await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)()).delete(\"token\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvand0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDUTtBQUV2QyxNQUFNRSxTQUFTQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7QUFFOUIsU0FBU0MsVUFBVUMsT0FBZTtJQUN2QyxPQUFPUCx3REFBUSxDQUFDTyxTQUFTTCxRQUFRO1FBQUVPLFdBQVc7SUFBSztBQUNyRDtBQUVPLFNBQVNDLFlBQVlDLEtBQWE7SUFDdkMsT0FBT1gsMERBQVUsQ0FBQ1csT0FBT1Q7QUFDM0I7QUFFTyxTQUFTVyxhQUFhRixLQUFhO0lBQ3hDLElBQUk7UUFDRixNQUFNRyxVQUFVZCwwREFBVSxDQUFDVyxPQUFPVCxRQUFRO1lBQUVhLGtCQUFrQjtRQUFLO1FBRW5FLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUUsR0FBR1YsU0FBUyxHQUFHTztRQUVqQyxPQUFPUixVQUFVQztJQUNuQixFQUFFLE9BQU9XLE9BQU87UUFDZCxNQUFNLElBQUlDLE1BQU07SUFDbEI7QUFDRjtBQUVPLGVBQWVDO0lBQ25CLE9BQU1uQixxREFBT0EsRUFBQyxFQUFHb0IsTUFBTSxDQUFDO0FBQzNCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXG5lZ3JvXFxEZXNrdG9wXFxnZXN0aW9uYWxlXFxsaWJcXGp3dC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuXHJcbmNvbnN0IHNlY3JldCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQhO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25Ub2tlbihwYXlsb2FkOiBvYmplY3QpIHtcclxuICByZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgc2VjcmV0LCB7IGV4cGlyZXNJbjogXCIxaFwiIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VG9rZW4odG9rZW46IHN0cmluZykge1xyXG4gIHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBzZWNyZXQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaFRva2VuKHRva2VuOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHNlY3JldCwgeyBpZ25vcmVFeHBpcmF0aW9uOiB0cnVlIH0pIGFzIGp3dC5Kd3RQYXlsb2FkO1xyXG5cclxuICAgIGNvbnN0IHsgaWF0LCBleHAsIC4uLnBheWxvYWQgfSA9IGRlY29kZWQ7XHJcblxyXG4gICAgcmV0dXJuIHNpZ25Ub2tlbihwYXlsb2FkKTsgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlRva2VuIG5vbiB2YWxpZG8gbyBpbXBvc3NpYmlsZSBkYSByaW5ub3ZhcmUuXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlc3Ryb3lUb2tlbigpIHtcclxuICAoYXdhaXQgY29va2llcygpKS5kZWxldGUoXCJ0b2tlblwiKTtcclxufSJdLCJuYW1lcyI6WyJqd3QiLCJjb29raWVzIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJzaWduVG9rZW4iLCJwYXlsb2FkIiwic2lnbiIsImV4cGlyZXNJbiIsInZlcmlmeVRva2VuIiwidG9rZW4iLCJ2ZXJpZnkiLCJyZWZyZXNoVG9rZW4iLCJkZWNvZGVkIiwiaWdub3JlRXhwaXJhdGlvbiIsImlhdCIsImV4cCIsImVycm9yIiwiRXJyb3IiLCJkZXN0cm95VG9rZW4iLCJkZWxldGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/jwt.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your MongoDB URI to .env.local\");\n}\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1DLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSSxDQUFDTCxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlJLE1BQU07QUFDbEI7QUFPQSxJQUFJTixJQUFzQyxFQUFFO0lBQzFDLElBQUksQ0FBQ08sT0FBT0MsbUJBQW1CLEVBQUU7UUFDL0JKLFNBQVMsSUFBSU4sZ0RBQVdBLENBQUNDLEtBQUtJO1FBQzlCSSxPQUFPQyxtQkFBbUIsR0FBR0osT0FBT0ssT0FBTztJQUM3QztJQUNBSixnQkFBZ0JFLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBR047QUFFRCxpRUFBZUgsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxuZWdyb1xcRGVza3RvcFxcZ2VzdGlvbmFsZVxcbGliXFxtb25nb2RiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIlxyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgYXMgc3RyaW5nXHJcbmNvbnN0IG9wdGlvbnMgPSB7fVxyXG5cclxubGV0IGNsaWVudFxyXG5sZXQgY2xpZW50UHJvbWlzZTogUHJvbWlzZTxNb25nb0NsaWVudD5cclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIHlvdXIgTW9uZ29EQiBVUkkgdG8gLmVudi5sb2NhbFwiKVxyXG59XHJcblxyXG4vLyBDcmVhIHVuYSB2YXJpYWJpbGUgZ2xvYmFsZSBwZXIgbGEgY29ubmVzc2lvbmUgaW4gc3ZpbHVwcG8gKGV2aXRhIHBpw7kgY29ubmVzc2lvbmkgc3UgaG90IHJlbG9hZClcclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIHZhciBfbW9uZ29DbGllbnRQcm9taXNlOiBQcm9taXNlPE1vbmdvQ2xpZW50PiB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXHJcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXHJcbn0gZWxzZSB7XHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcclxuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlXHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiRXJyb3IiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var _lib_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/jwt */ \"(rsc)/./lib/jwt.ts\");\n\n\n\n\n// converto data da yyyy-mm-dd a dd-mm-yyyy\nconst formatDate = (dateStr)=>{\n    const [yyyy, mm, dd] = dateStr.split(\"-\");\n    return `${dd}/${mm}/${yyyy}`;\n};\nasync function POST(req) {\n    try {\n        //recupero token dal cookie\n        const token = (await (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)()).get(\"token\")?.value;\n        if (!token) {\n            return new Response(JSON.stringify({\n                message: \"Token mancante\"\n            }), {\n                status: 401\n            });\n        }\n        let refreshedToken = null;\n        try {\n            (0,_lib_jwt__WEBPACK_IMPORTED_MODULE_3__.verifyToken)(token);\n        } catch (err) {\n            if (err.name === \"TokenExpiredError\") {\n                try {\n                    refreshedToken = (0,_lib_jwt__WEBPACK_IMPORTED_MODULE_3__.refreshToken)(token);\n                } catch  {\n                    return new Response(JSON.stringify({\n                        message: \"Token non rinnovabile\"\n                    }), {\n                        status: 401\n                    });\n                }\n            } else {\n                return new Response(JSON.stringify({\n                    message: \"Token non valido\"\n                }), {\n                    status: 401\n                });\n            }\n        }\n        const data = await req.json();\n        if (!data._id) {\n            return new Response(JSON.stringify({\n                message: \"ID mancante. Impossibile aggiornare l'iscritto.\"\n            }), {\n                status: 400\n            });\n        }\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const db = client.db(\"gestionale\");\n        const updated = await db.collection(\"iscritti\").updateOne({\n            \"_id\": new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(data._id)\n        }, {\n            $set: {\n                nome: data.nome,\n                cognome: data.cognome,\n                sesso: data.sesso,\n                data_n: formatDate(data.data_n),\n                luogo_n: data.luogo_n,\n                indirizzo: data.indirizzo,\n                citta: data.citta,\n                cap: data.cap,\n                nazionalita: data.nazionalita,\n                autorizzato_uscita: data.autorizzato_uscita,\n                note: data.note,\n                genitore: {\n                    nome_g: data.genitore.nome_g,\n                    cognome_g: data.genitore.cognome_g,\n                    telefono_g: data.genitore.telefono_g,\n                    email_g: data.genitore.email_g\n                },\n                disabilita: data.disabilita,\n                privacy: data.privacy,\n                trasporto: data.trasporto,\n                pranzo: data.pranzo,\n                da_pagare: data.da_pagare,\n                pagato: data.pagato,\n                tipo_pagamento: data.tipo_pagamento,\n                turni: data.turni\n            }\n        });\n        if (updated.modifiedCount === 0) {\n            return new Response(JSON.stringify({\n                message: \"Nessuna modifica effettuata. Verifica che l'ID esista.\"\n            }), {\n                status: 404\n            });\n        }\n        //aggiorno cookie\n        if (refreshedToken) {\n            (await (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)()).set(\"token\", refreshedToken, {\n                httpOnly: true,\n                secure: \"development\" === \"production\",\n                maxAge: 60 * 60,\n                path: \"/\"\n            });\n        }\n        console.log(\"token aggiornato:\", refreshedToken);\n        return new Response(JSON.stringify({\n            message: \"Iscritto aggiornato con successo\"\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        const errorMessage = error instanceof Error ? error.message : \"Unknown error occurred\";\n        return new Response(JSON.stringify({\n            message: errorMessage\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91cGRhdGVJc2NyaXR0by9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBb0Q7QUFDbEI7QUFDSztBQUN5QjtBQUVoRSwyQ0FBMkM7QUFDM0MsTUFBTUssYUFBYSxDQUFDQztJQUNsQixNQUFNLENBQUNDLE1BQU1DLElBQUlDLEdBQUcsR0FBR0gsUUFBUUksS0FBSyxDQUFDO0lBQ3JDLE9BQU8sR0FBR0QsR0FBRyxDQUFDLEVBQUVELEdBQUcsQ0FBQyxFQUFFRCxNQUFNO0FBQzlCO0FBRU8sZUFBZUksS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsMkJBQTJCO1FBQzNCLE1BQU1DLFFBQVEsQ0FBQyxNQUFNWCxxREFBT0EsRUFBQyxFQUFHWSxHQUFHLENBQUMsVUFBVUM7UUFFOUMsSUFBSSxDQUFDRixPQUFPO1lBQ1YsT0FBTyxJQUFJRyxTQUFTQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFNBQVM7WUFBaUIsSUFBSTtnQkFBRUMsUUFBUTtZQUFJO1FBQ25GO1FBRUEsSUFBSUMsaUJBQWdDO1FBRXBDLElBQUk7WUFDRmpCLHFEQUFXQSxDQUFDUztRQUNkLEVBQUUsT0FBT1MsS0FBVTtZQUNqQixJQUFJQSxJQUFJQyxJQUFJLEtBQUsscUJBQXFCO2dCQUNwQyxJQUFJO29CQUNGRixpQkFBaUJsQixzREFBWUEsQ0FBQ1U7Z0JBQ2hDLEVBQUUsT0FBTTtvQkFDTixPQUFPLElBQUlHLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQzt3QkFBRUMsU0FBUztvQkFBd0IsSUFBSTt3QkFBRUMsUUFBUTtvQkFBSTtnQkFDMUY7WUFDRixPQUFPO2dCQUNMLE9BQU8sSUFBSUosU0FBU0MsS0FBS0MsU0FBUyxDQUFDO29CQUFFQyxTQUFTO2dCQUFtQixJQUFJO29CQUFFQyxRQUFRO2dCQUFJO1lBQ3JGO1FBQ0Y7UUFFQSxNQUFNSSxPQUFPLE1BQU1aLElBQUlhLElBQUk7UUFDM0IsSUFBSSxDQUFDRCxLQUFLRSxHQUFHLEVBQUU7WUFDYixPQUFPLElBQUlWLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsU0FBUztZQUFrRCxJQUM1RTtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsTUFBTU8sU0FBUyxNQUFNM0Isb0RBQWFBO1FBQ2xDLE1BQU00QixLQUFLRCxPQUFPQyxFQUFFLENBQUM7UUFFckIsTUFBTUMsVUFBVSxNQUFNRCxHQUFHRSxVQUFVLENBQUMsWUFBWUMsU0FBUyxDQUN2RDtZQUFFLE9BQU8sSUFBSTlCLDZDQUFRQSxDQUFDdUIsS0FBS0UsR0FBRztRQUFFLEdBQ2hDO1lBQ0VNLE1BQU07Z0JBQ0pDLE1BQU1ULEtBQUtTLElBQUk7Z0JBQ2ZDLFNBQVNWLEtBQUtVLE9BQU87Z0JBQ3JCQyxPQUFPWCxLQUFLVyxLQUFLO2dCQUNqQkMsUUFBUS9CLFdBQVdtQixLQUFLWSxNQUFNO2dCQUM5QkMsU0FBU2IsS0FBS2EsT0FBTztnQkFDckJDLFdBQVdkLEtBQUtjLFNBQVM7Z0JBQ3pCQyxPQUFPZixLQUFLZSxLQUFLO2dCQUNqQkMsS0FBS2hCLEtBQUtnQixHQUFHO2dCQUNiQyxhQUFhakIsS0FBS2lCLFdBQVc7Z0JBQzdCQyxvQkFBb0JsQixLQUFLa0Isa0JBQWtCO2dCQUMzQ0MsTUFBTW5CLEtBQUttQixJQUFJO2dCQUNmQyxVQUFTO29CQUNQQyxRQUFRckIsS0FBS29CLFFBQVEsQ0FBQ0MsTUFBTTtvQkFDNUJDLFdBQVd0QixLQUFLb0IsUUFBUSxDQUFDRSxTQUFTO29CQUNsQ0MsWUFBWXZCLEtBQUtvQixRQUFRLENBQUNHLFVBQVU7b0JBQ3BDQyxTQUFTeEIsS0FBS29CLFFBQVEsQ0FBQ0ksT0FBTztnQkFDaEM7Z0JBQ0FDLFlBQVl6QixLQUFLeUIsVUFBVTtnQkFDM0JDLFNBQVMxQixLQUFLMEIsT0FBTztnQkFDckJDLFdBQVczQixLQUFLMkIsU0FBUztnQkFDekJDLFFBQVE1QixLQUFLNEIsTUFBTTtnQkFDbkJDLFdBQVc3QixLQUFLNkIsU0FBUztnQkFDekJDLFFBQVE5QixLQUFLOEIsTUFBTTtnQkFDbkJDLGdCQUFnQi9CLEtBQUsrQixjQUFjO2dCQUNuQ0MsT0FBT2hDLEtBQUtnQyxLQUFLO1lBQ25CO1FBQ0Y7UUFHRixJQUFJM0IsUUFBUTRCLGFBQWEsS0FBSyxHQUFHO1lBQy9CLE9BQU8sSUFBSXpDLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsU0FBUztZQUF5RCxJQUNuRjtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsaUJBQWlCO1FBQ2pCLElBQUlDLGdCQUFnQjtZQUNqQixPQUFNbkIscURBQU9BLEVBQUMsRUFBR3dELEdBQUcsQ0FBQyxTQUFTckMsZ0JBQWdCO2dCQUM3Q3NDLFVBQVU7Z0JBQ1ZDLFFBQVFDLGtCQUF5QjtnQkFDakNDLFFBQVEsS0FBSztnQkFDYkMsTUFBTTtZQUNSO1FBQ0Y7UUFFQUMsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQjVDO1FBRWpDLE9BQU8sSUFBSUwsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFNBQVM7UUFBbUMsSUFDN0Q7WUFBRUMsUUFBUTtRQUFJO0lBRWxCLEVBQUUsT0FBTzhDLE9BQXdCO1FBQy9CLE1BQU1DLGVBQWVELGlCQUFpQkUsUUFBUUYsTUFBTS9DLE9BQU8sR0FBRztRQUM5RCxPQUFPLElBQUlILFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTZ0Q7UUFBYSxJQUN2QztZQUFFL0MsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmVncm9cXERlc2t0b3BcXGdlc3Rpb25hbGVcXHNyY1xcYXBwXFxhcGlcXHVwZGF0ZUlzY3JpdHRvXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IHtPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcbmltcG9ydCB7IHJlZnJlc2hUb2tlbiwgdmVyaWZ5VG9rZW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL2p3dFwiO1xyXG5cclxuLy8gY29udmVydG8gZGF0YSBkYSB5eXl5LW1tLWRkIGEgZGQtbW0teXl5eVxyXG5jb25zdCBmb3JtYXREYXRlID0gKGRhdGVTdHI6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IFt5eXl5LCBtbSwgZGRdID0gZGF0ZVN0ci5zcGxpdChcIi1cIik7XHJcbiAgcmV0dXJuIGAke2RkfS8ke21tfS8ke3l5eXl9YDtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICAvL3JlY3VwZXJvIHRva2VuIGRhbCBjb29raWVcclxuICAgIGNvbnN0IHRva2VuID0gKGF3YWl0IGNvb2tpZXMoKSkuZ2V0KFwidG9rZW5cIik/LnZhbHVlO1xyXG5cclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiVG9rZW4gbWFuY2FudGVcIiB9KSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVmcmVzaGVkVG9rZW46IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHZlcmlmeVRva2VuKHRva2VuKTtcclxuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICAgIGlmIChlcnIubmFtZSA9PT0gXCJUb2tlbkV4cGlyZWRFcnJvclwiKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJlZnJlc2hlZFRva2VuID0gcmVmcmVzaFRva2VuKHRva2VuKTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIlRva2VuIG5vbiByaW5ub3ZhYmlsZVwiIH0pLCB7IHN0YXR1czogNDAxIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJUb2tlbiBub24gdmFsaWRvXCIgfSksIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgIGlmICghZGF0YS5faWQpIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiSUQgbWFuY2FudGUuIEltcG9zc2liaWxlIGFnZ2lvcm5hcmUgbCdpc2NyaXR0by5cIiB9KSxcclxuICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJnZXN0aW9uYWxlXCIpO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiaXNjcml0dGlcIikudXBkYXRlT25lKFxyXG4gICAgICB7IFwiX2lkXCI6IG5ldyBPYmplY3RJZChkYXRhLl9pZCkgfSxcclxuICAgICAge1xyXG4gICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgIG5vbWU6IGRhdGEubm9tZSxcclxuICAgICAgICAgIGNvZ25vbWU6IGRhdGEuY29nbm9tZSxcclxuICAgICAgICAgIHNlc3NvOiBkYXRhLnNlc3NvLFxyXG4gICAgICAgICAgZGF0YV9uOiBmb3JtYXREYXRlKGRhdGEuZGF0YV9uKSxcclxuICAgICAgICAgIGx1b2dvX246IGRhdGEubHVvZ29fbixcclxuICAgICAgICAgIGluZGlyaXp6bzogZGF0YS5pbmRpcml6em8sXHJcbiAgICAgICAgICBjaXR0YTogZGF0YS5jaXR0YSxcclxuICAgICAgICAgIGNhcDogZGF0YS5jYXAsXHJcbiAgICAgICAgICBuYXppb25hbGl0YTogZGF0YS5uYXppb25hbGl0YSxcclxuICAgICAgICAgIGF1dG9yaXp6YXRvX3VzY2l0YTogZGF0YS5hdXRvcml6emF0b191c2NpdGEsXHJcbiAgICAgICAgICBub3RlOiBkYXRhLm5vdGUsXHJcbiAgICAgICAgICBnZW5pdG9yZTp7XHJcbiAgICAgICAgICAgIG5vbWVfZzogZGF0YS5nZW5pdG9yZS5ub21lX2cgLFxyXG4gICAgICAgICAgICBjb2dub21lX2c6IGRhdGEuZ2VuaXRvcmUuY29nbm9tZV9nLFxyXG4gICAgICAgICAgICB0ZWxlZm9ub19nOiBkYXRhLmdlbml0b3JlLnRlbGVmb25vX2csXHJcbiAgICAgICAgICAgIGVtYWlsX2c6IGRhdGEuZ2VuaXRvcmUuZW1haWxfZ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRpc2FiaWxpdGE6IGRhdGEuZGlzYWJpbGl0YSxcclxuICAgICAgICAgIHByaXZhY3k6IGRhdGEucHJpdmFjeSwgXHJcbiAgICAgICAgICB0cmFzcG9ydG86IGRhdGEudHJhc3BvcnRvLCBcclxuICAgICAgICAgIHByYW56bzogZGF0YS5wcmFuem8sXHJcbiAgICAgICAgICBkYV9wYWdhcmU6IGRhdGEuZGFfcGFnYXJlLFxyXG4gICAgICAgICAgcGFnYXRvOiBkYXRhLnBhZ2F0byxcclxuICAgICAgICAgIHRpcG9fcGFnYW1lbnRvOiBkYXRhLnRpcG9fcGFnYW1lbnRvLFxyXG4gICAgICAgICAgdHVybmk6IGRhdGEudHVybmlcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGlmICh1cGRhdGVkLm1vZGlmaWVkQ291bnQgPT09IDApIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiTmVzc3VuYSBtb2RpZmljYSBlZmZldHR1YXRhLiBWZXJpZmljYSBjaGUgbCdJRCBlc2lzdGEuXCIgfSksXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwNCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9hZ2dpb3JubyBjb29raWVcclxuICAgIGlmIChyZWZyZXNoZWRUb2tlbikge1xyXG4gICAgICAoYXdhaXQgY29va2llcygpKS5zZXQoXCJ0b2tlblwiLCByZWZyZXNoZWRUb2tlbiwge1xyXG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxyXG4gICAgICAgIG1heEFnZTogNjAgKiA2MCxcclxuICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ0b2tlbiBhZ2dpb3JuYXRvOlwiLCByZWZyZXNoZWRUb2tlbik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIklzY3JpdHRvIGFnZ2lvcm5hdG8gY29uIHN1Y2Nlc3NvXCIgfSksXHJcbiAgICAgIHsgc3RhdHVzOiAyMDAgfVxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnJvcjogRXJyb3IgfCB1bmtub3duKSB7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvciBvY2N1cnJlZFwiO1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBlcnJvck1lc3NhZ2UgfSksXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJPYmplY3RJZCIsImNvb2tpZXMiLCJyZWZyZXNoVG9rZW4iLCJ2ZXJpZnlUb2tlbiIsImZvcm1hdERhdGUiLCJkYXRlU3RyIiwieXl5eSIsIm1tIiwiZGQiLCJzcGxpdCIsIlBPU1QiLCJyZXEiLCJ0b2tlbiIsImdldCIsInZhbHVlIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsInN0YXR1cyIsInJlZnJlc2hlZFRva2VuIiwiZXJyIiwibmFtZSIsImRhdGEiLCJqc29uIiwiX2lkIiwiY2xpZW50IiwiZGIiLCJ1cGRhdGVkIiwiY29sbGVjdGlvbiIsInVwZGF0ZU9uZSIsIiRzZXQiLCJub21lIiwiY29nbm9tZSIsInNlc3NvIiwiZGF0YV9uIiwibHVvZ29fbiIsImluZGlyaXp6byIsImNpdHRhIiwiY2FwIiwibmF6aW9uYWxpdGEiLCJhdXRvcml6emF0b191c2NpdGEiLCJub3RlIiwiZ2VuaXRvcmUiLCJub21lX2ciLCJjb2dub21lX2ciLCJ0ZWxlZm9ub19nIiwiZW1haWxfZyIsImRpc2FiaWxpdGEiLCJwcml2YWN5IiwidHJhc3BvcnRvIiwicHJhbnpvIiwiZGFfcGFnYXJlIiwicGFnYXRvIiwidGlwb19wYWdhbWVudG8iLCJ0dXJuaSIsIm1vZGlmaWVkQ291bnQiLCJzZXQiLCJodHRwT25seSIsInNlY3VyZSIsInByb2Nlc3MiLCJtYXhBZ2UiLCJwYXRoIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/updateIscritto/route.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

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

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

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

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FupdateIscritto%2Froute&page=%2Fapi%2FupdateIscritto%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FupdateIscritto%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();