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
exports.id = "app/api/getUtente/route";
exports.ids = ["app/api/getUtente/route"];
exports.modules = {

/***/ "(rsc)/./lib/jwt.ts":
/*!********************!*\
  !*** ./lib/jwt.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   refreshToken: () => (/* binding */ refreshToken),\n/* harmony export */   signToken: () => (/* binding */ signToken),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst secret = process.env.JWT_SECRET;\nfunction signToken(payload) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, secret, {\n        expiresIn: \"1h\"\n    });\n}\nfunction verifyToken(token) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, secret);\n}\nfunction refreshToken(token) {\n    try {\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, secret, {\n            ignoreExpiration: true\n        });\n        const { iat, exp, ...payload } = decoded;\n        return signToken(payload);\n    } catch (error) {\n        throw new Error(\"Token non valido o impossibile da rinnovare.\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvand0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLFNBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtBQUU5QixTQUFTQyxVQUFVQyxPQUFlO0lBQ3ZDLE9BQU9OLHdEQUFRLENBQUNNLFNBQVNMLFFBQVE7UUFBRU8sV0FBVztJQUFLO0FBQ3JEO0FBRU8sU0FBU0MsWUFBWUMsS0FBYTtJQUN2QyxPQUFPViwwREFBVSxDQUFDVSxPQUFPVDtBQUMzQjtBQUVPLFNBQVNXLGFBQWFGLEtBQWE7SUFDeEMsSUFBSTtRQUNGLE1BQU1HLFVBQVViLDBEQUFVLENBQUNVLE9BQU9ULFFBQVE7WUFBRWEsa0JBQWtCO1FBQUs7UUFFbkUsTUFBTSxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxHQUFHVixTQUFTLEdBQUdPO1FBRWpDLE9BQU9SLFVBQVVDO0lBQ25CLEVBQUUsT0FBT1csT0FBTztRQUNkLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXG5lZ3JvXFxEZXNrdG9wXFxnZXN0aW9uYWxlXFxsaWJcXGp3dC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuXHJcbmNvbnN0IHNlY3JldCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQhO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25Ub2tlbihwYXlsb2FkOiBvYmplY3QpIHtcclxuICByZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgc2VjcmV0LCB7IGV4cGlyZXNJbjogXCIxaFwiIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VG9rZW4odG9rZW46IHN0cmluZykge1xyXG4gIHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBzZWNyZXQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaFRva2VuKHRva2VuOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHNlY3JldCwgeyBpZ25vcmVFeHBpcmF0aW9uOiB0cnVlIH0pIGFzIGp3dC5Kd3RQYXlsb2FkO1xyXG5cclxuICAgIGNvbnN0IHsgaWF0LCBleHAsIC4uLnBheWxvYWQgfSA9IGRlY29kZWQ7XHJcblxyXG4gICAgcmV0dXJuIHNpZ25Ub2tlbihwYXlsb2FkKTsgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlRva2VuIG5vbiB2YWxpZG8gbyBpbXBvc3NpYmlsZSBkYSByaW5ub3ZhcmUuXCIpO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJqd3QiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsInNpZ25Ub2tlbiIsInBheWxvYWQiLCJzaWduIiwiZXhwaXJlc0luIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsInZlcmlmeSIsInJlZnJlc2hUb2tlbiIsImRlY29kZWQiLCJpZ25vcmVFeHBpcmF0aW9uIiwiaWF0IiwiZXhwIiwiZXJyb3IiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/jwt.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your MongoDB URI to .env.local\");\n}\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1DLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSSxDQUFDTCxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlJLE1BQU07QUFDbEI7QUFPQSxJQUFJTixJQUFzQyxFQUFFO0lBQzFDLElBQUksQ0FBQ08sT0FBT0MsbUJBQW1CLEVBQUU7UUFDL0JKLFNBQVMsSUFBSU4sZ0RBQVdBLENBQUNDLEtBQUtJO1FBQzlCSSxPQUFPQyxtQkFBbUIsR0FBR0osT0FBT0ssT0FBTztJQUM3QztJQUNBSixnQkFBZ0JFLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBR047QUFFRCxpRUFBZUgsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxuZWdyb1xcRGVza3RvcFxcZ2VzdGlvbmFsZVxcbGliXFxtb25nb2RiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIlxyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgYXMgc3RyaW5nXHJcbmNvbnN0IG9wdGlvbnMgPSB7fVxyXG5cclxubGV0IGNsaWVudFxyXG5sZXQgY2xpZW50UHJvbWlzZTogUHJvbWlzZTxNb25nb0NsaWVudD5cclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIHlvdXIgTW9uZ29EQiBVUkkgdG8gLmVudi5sb2NhbFwiKVxyXG59XHJcblxyXG4vLyBDcmVhIHVuYSB2YXJpYWJpbGUgZ2xvYmFsZSBwZXIgbGEgY29ubmVzc2lvbmUgaW4gc3ZpbHVwcG8gKGV2aXRhIHBpw7kgY29ubmVzc2lvbmkgc3UgaG90IHJlbG9hZClcclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIHZhciBfbW9uZ29DbGllbnRQcm9taXNlOiBQcm9taXNlPE1vbmdvQ2xpZW50PiB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXHJcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXHJcbn0gZWxzZSB7XHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcclxuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlXHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiRXJyb3IiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetUtente%2Froute&page=%2Fapi%2FgetUtente%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetUtente%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetUtente%2Froute&page=%2Fapi%2FgetUtente%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetUtente%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_negro_Desktop_gestionale_src_app_api_getUtente_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/getUtente/route.ts */ \"(rsc)/./src/app/api/getUtente/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/getUtente/route\",\n        pathname: \"/api/getUtente\",\n        filename: \"route\",\n        bundlePath: \"app/api/getUtente/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\negro\\\\Desktop\\\\gestionale\\\\src\\\\app\\\\api\\\\getUtente\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_negro_Desktop_gestionale_src_app_api_getUtente_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZXRVdGVudGUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmdldFV0ZW50ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmdldFV0ZW50ZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNuZWdybyU1Q0Rlc2t0b3AlNUNnZXN0aW9uYWxlJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNuZWdybyU1Q0Rlc2t0b3AlNUNnZXN0aW9uYWxlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN5QjtBQUN0RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbmVncm9cXFxcRGVza3RvcFxcXFxnZXN0aW9uYWxlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGdldFV0ZW50ZVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZ2V0VXRlbnRlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ2V0VXRlbnRlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9nZXRVdGVudGUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxuZWdyb1xcXFxEZXNrdG9wXFxcXGdlc3Rpb25hbGVcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZ2V0VXRlbnRlXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetUtente%2Froute&page=%2Fapi%2FgetUtente%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetUtente%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/getUtente/route.ts":
/*!****************************************!*\
  !*** ./src/app/api/getUtente/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _lib_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/jwt */ \"(rsc)/./lib/jwt.ts\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function GET(_req) {\n    try {\n        //recupero token dal cookie\n        const token = (await (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)()).get(\"token\")?.value;\n        if (!token) {\n            return new Response(JSON.stringify({\n                message: \"Token mancante\"\n            }), {\n                status: 401\n            });\n        }\n        let refreshedToken = null;\n        let decoded;\n        try {\n            decoded = (0,_lib_jwt__WEBPACK_IMPORTED_MODULE_1__.verifyToken)(token);\n        } catch (err) {\n            if (err.name === \"TokenExpiredError\") {\n                try {\n                    refreshedToken = (0,_lib_jwt__WEBPACK_IMPORTED_MODULE_1__.refreshToken)(token);\n                    decoded = (0,_lib_jwt__WEBPACK_IMPORTED_MODULE_1__.verifyToken)(refreshedToken);\n                } catch  {\n                    return new Response(JSON.stringify({\n                        message: \"Token non rinnovabile\"\n                    }), {\n                        status: 401\n                    });\n                }\n            } else {\n                return new Response(JSON.stringify({\n                    message: \"Token non valido\"\n                }), {\n                    status: 401\n                });\n            }\n        }\n        const { id, user } = decoded;\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const db = client.db(\"gestionale\");\n        const userDoc = await db.collection(\"users\").findOne({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_3__.ObjectId(id),\n            username: user\n        });\n        if (!userDoc) {\n            return new Response(JSON.stringify({\n                message: \"Utente non trovato\"\n            }), {\n                status: 404\n            });\n        }\n        const userData = {\n            _id: userDoc._id,\n            username: userDoc.username,\n            password: userDoc.password,\n            admin: userDoc.admin,\n            descrizione: userDoc.descrizione,\n            immagine: userDoc.immagine\n        };\n        //aggiorno cookie\n        if (refreshedToken) {\n            (await (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)()).set(\"token\", refreshedToken, {\n                httpOnly: true,\n                secure: \"development\" === \"production\",\n                maxAge: 60 * 60,\n                path: \"/\"\n            });\n        }\n        console.log(\"token aggiornato:\", refreshedToken);\n        return new Response(JSON.stringify(userData), {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Errore durante il recupero dell'utente:\", error);\n        return new Response(JSON.stringify({\n            message: \"Errore nel recupero dell'utente\"\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9nZXRVdGVudGUvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW9EO0FBQ1k7QUFDekI7QUFDSjtBQUU1QixlQUFlSyxJQUFJQyxJQUFhO0lBQ3JDLElBQUk7UUFDRiwyQkFBMkI7UUFDM0IsTUFBTUMsUUFBUSxDQUFDLE1BQU1KLHFEQUFPQSxFQUFDLEVBQUdLLEdBQUcsQ0FBQyxVQUFVQztRQUU5QyxJQUFJLENBQUNGLE9BQU87WUFDVixPQUFPLElBQUlHLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsU0FBUztZQUFpQixJQUFJO2dCQUFFQyxRQUFRO1lBQUk7UUFDbkY7UUFFQSxJQUFJQyxpQkFBZ0M7UUFDcEMsSUFBSUM7UUFFSixJQUFJO1lBQ0ZBLFVBQVVmLHFEQUFXQSxDQUFDTTtRQUN4QixFQUFFLE9BQU9VLEtBQVU7WUFDakIsSUFBSUEsSUFBSUMsSUFBSSxLQUFLLHFCQUFxQjtnQkFDcEMsSUFBSTtvQkFDRkgsaUJBQWlCYixzREFBWUEsQ0FBQ0s7b0JBQzlCUyxVQUFVZixxREFBV0EsQ0FBQ2M7Z0JBQ3hCLEVBQUUsT0FBTTtvQkFDTixPQUFPLElBQUlMLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQzt3QkFBRUMsU0FBUztvQkFBd0IsSUFBSTt3QkFBRUMsUUFBUTtvQkFBSTtnQkFDMUY7WUFDRixPQUFPO2dCQUNMLE9BQU8sSUFBSUosU0FBU0MsS0FBS0MsU0FBUyxDQUFDO29CQUFFQyxTQUFTO2dCQUFtQixJQUFJO29CQUFFQyxRQUFRO2dCQUFJO1lBQ3JGO1FBQ0Y7UUFFQSxNQUFNLEVBQUVLLEVBQUUsRUFBRUMsSUFBSSxFQUFFLEdBQUdKO1FBQ3JCLE1BQU1LLFNBQVMsTUFBTXJCLG9EQUFhQTtRQUNsQyxNQUFNc0IsS0FBS0QsT0FBT0MsRUFBRSxDQUFDO1FBRXJCLE1BQU1DLFVBQVUsTUFBTUQsR0FBR0UsVUFBVSxDQUFDLFNBQVNDLE9BQU8sQ0FBQztZQUFFQyxLQUFLLElBQUl0Qiw2Q0FBUUEsQ0FBQ2U7WUFBS1EsVUFBVVA7UUFBSztRQUU3RixJQUFJLENBQUNHLFNBQVM7WUFDWixPQUFPLElBQUliLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsU0FBUztZQUFxQixJQUFJO2dCQUFFQyxRQUFRO1lBQUk7UUFDdkY7UUFFQSxNQUFNYyxXQUFXO1lBQ2ZGLEtBQUtILFFBQVFHLEdBQUc7WUFDaEJDLFVBQVVKLFFBQVFJLFFBQVE7WUFDMUJFLFVBQVVOLFFBQVFNLFFBQVE7WUFDMUJDLE9BQU9QLFFBQVFPLEtBQUs7WUFDcEJDLGFBQWFSLFFBQVFRLFdBQVc7WUFDaENDLFVBQVVULFFBQVFTLFFBQVE7UUFDNUI7UUFFQSxpQkFBaUI7UUFDakIsSUFBSWpCLGdCQUFnQjtZQUNqQixPQUFNWixxREFBT0EsRUFBQyxFQUFHOEIsR0FBRyxDQUFDLFNBQVNsQixnQkFBZ0I7Z0JBQzdDbUIsVUFBVTtnQkFDVkMsUUFBUUMsa0JBQXlCO2dCQUNqQ0MsUUFBUSxLQUFLO2dCQUNiQyxNQUFNO1lBQ1I7UUFDRjtRQUVBQyxRQUFRQyxHQUFHLENBQUMscUJBQXFCekI7UUFFakMsT0FBTyxJQUFJTCxTQUFTQyxLQUFLQyxTQUFTLENBQUNnQixXQUFXO1lBQUVkLFFBQVE7UUFBSTtJQUU5RCxFQUFFLE9BQU8yQixPQUFPO1FBQ2RGLFFBQVFFLEtBQUssQ0FBQywyQ0FBMkNBO1FBQ3pELE9BQU8sSUFBSS9CLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTO1FBQWtDLElBQUk7WUFBRUMsUUFBUTtRQUFJO0lBQ3BHO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmVncm9cXERlc2t0b3BcXGdlc3Rpb25hbGVcXHNyY1xcYXBwXFxhcGlcXGdldFV0ZW50ZVxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCB7IHZlcmlmeVRva2VuLCByZWZyZXNoVG9rZW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL2p3dFwiO1xyXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xyXG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKF9yZXE6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgLy9yZWN1cGVybyB0b2tlbiBkYWwgY29va2llXHJcbiAgICBjb25zdCB0b2tlbiA9IChhd2FpdCBjb29raWVzKCkpLmdldChcInRva2VuXCIpPy52YWx1ZTtcclxuXHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIlRva2VuIG1hbmNhbnRlXCIgfSksIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlZnJlc2hlZFRva2VuOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgIGxldCBkZWNvZGVkOiBhbnk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgZGVjb2RlZCA9IHZlcmlmeVRva2VuKHRva2VuKTtcclxuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICAgIGlmIChlcnIubmFtZSA9PT0gXCJUb2tlbkV4cGlyZWRFcnJvclwiKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJlZnJlc2hlZFRva2VuID0gcmVmcmVzaFRva2VuKHRva2VuKTtcclxuICAgICAgICAgIGRlY29kZWQgPSB2ZXJpZnlUb2tlbihyZWZyZXNoZWRUb2tlbik7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJUb2tlbiBub24gcmlubm92YWJpbGVcIiB9KSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiVG9rZW4gbm9uIHZhbGlkb1wiIH0pLCB7IHN0YXR1czogNDAxIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHsgaWQsIHVzZXIgfSA9IGRlY29kZWQgYXMgeyBpZDogc3RyaW5nOyB1c2VyOiBzdHJpbmcgfTtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYihcImdlc3Rpb25hbGVcIik7XHJcblxyXG4gICAgY29uc3QgdXNlckRvYyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5maW5kT25lKHsgX2lkOiBuZXcgT2JqZWN0SWQoaWQpLCB1c2VybmFtZTogdXNlciB9KTtcclxuXHJcbiAgICBpZiAoIXVzZXJEb2MpIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiVXRlbnRlIG5vbiB0cm92YXRvXCIgfSksIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlckRhdGEgPSB7XHJcbiAgICAgIF9pZDogdXNlckRvYy5faWQsXHJcbiAgICAgIHVzZXJuYW1lOiB1c2VyRG9jLnVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZDogdXNlckRvYy5wYXNzd29yZCxcclxuICAgICAgYWRtaW46IHVzZXJEb2MuYWRtaW4sXHJcbiAgICAgIGRlc2NyaXppb25lOiB1c2VyRG9jLmRlc2NyaXppb25lLFxyXG4gICAgICBpbW1hZ2luZTogdXNlckRvYy5pbW1hZ2luZSxcclxuICAgIH07XHJcblxyXG4gICAgLy9hZ2dpb3JubyBjb29raWVcclxuICAgIGlmIChyZWZyZXNoZWRUb2tlbikge1xyXG4gICAgICAoYXdhaXQgY29va2llcygpKS5zZXQoXCJ0b2tlblwiLCByZWZyZXNoZWRUb2tlbiwge1xyXG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxyXG4gICAgICAgIG1heEFnZTogNjAgKiA2MCxcclxuICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ0b2tlbiBhZ2dpb3JuYXRvOlwiLCByZWZyZXNoZWRUb2tlbik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksIHsgc3RhdHVzOiAyMDAgfSk7XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3JlIGR1cmFudGUgaWwgcmVjdXBlcm8gZGVsbCd1dGVudGU6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIkVycm9yZSBuZWwgcmVjdXBlcm8gZGVsbCd1dGVudGVcIiB9KSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJ2ZXJpZnlUb2tlbiIsInJlZnJlc2hUb2tlbiIsImNvb2tpZXMiLCJPYmplY3RJZCIsIkdFVCIsIl9yZXEiLCJ0b2tlbiIsImdldCIsInZhbHVlIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsInN0YXR1cyIsInJlZnJlc2hlZFRva2VuIiwiZGVjb2RlZCIsImVyciIsIm5hbWUiLCJpZCIsInVzZXIiLCJjbGllbnQiLCJkYiIsInVzZXJEb2MiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsIl9pZCIsInVzZXJuYW1lIiwidXNlckRhdGEiLCJwYXNzd29yZCIsImFkbWluIiwiZGVzY3JpemlvbmUiLCJpbW1hZ2luZSIsInNldCIsImh0dHBPbmx5Iiwic2VjdXJlIiwicHJvY2VzcyIsIm1heEFnZSIsInBhdGgiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/getUtente/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetUtente%2Froute&page=%2Fapi%2FgetUtente%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetUtente%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();