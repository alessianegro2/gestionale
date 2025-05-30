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
exports.id = "app/api/getIscrittiAttivita/route";
exports.ids = ["app/api/getIscrittiAttivita/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetIscrittiAttivita%2Froute&page=%2Fapi%2FgetIscrittiAttivita%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetIscrittiAttivita%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetIscrittiAttivita%2Froute&page=%2Fapi%2FgetIscrittiAttivita%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetIscrittiAttivita%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_negro_Desktop_gestionale_src_app_api_getIscrittiAttivita_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/getIscrittiAttivita/route.ts */ \"(rsc)/./src/app/api/getIscrittiAttivita/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/getIscrittiAttivita/route\",\n        pathname: \"/api/getIscrittiAttivita\",\n        filename: \"route\",\n        bundlePath: \"app/api/getIscrittiAttivita/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\negro\\\\Desktop\\\\gestionale\\\\src\\\\app\\\\api\\\\getIscrittiAttivita\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_negro_Desktop_gestionale_src_app_api_getIscrittiAttivita_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZXRJc2NyaXR0aUF0dGl2aXRhJTJGcm91dGUmcGFnZT0lMkZhcGklMkZnZXRJc2NyaXR0aUF0dGl2aXRhJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZ2V0SXNjcml0dGlBdHRpdml0YSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNuZWdybyU1Q0Rlc2t0b3AlNUNnZXN0aW9uYWxlJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNuZWdybyU1Q0Rlc2t0b3AlNUNnZXN0aW9uYWxlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNtQztBQUNoSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbmVncm9cXFxcRGVza3RvcFxcXFxnZXN0aW9uYWxlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGdldElzY3JpdHRpQXR0aXZpdGFcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dldElzY3JpdHRpQXR0aXZpdGEvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9nZXRJc2NyaXR0aUF0dGl2aXRhXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9nZXRJc2NyaXR0aUF0dGl2aXRhL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcbmVncm9cXFxcRGVza3RvcFxcXFxnZXN0aW9uYWxlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGdldElzY3JpdHRpQXR0aXZpdGFcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetIscrittiAttivita%2Froute&page=%2Fapi%2FgetIscrittiAttivita%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetIscrittiAttivita%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/getIscrittiAttivita/route.ts":
/*!**************************************************!*\
  !*** ./src/app/api/getIscrittiAttivita/route.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var _lib_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/jwt */ \"(rsc)/./lib/jwt.ts\");\n\n\n\nasync function POST(req) {\n    try {\n        //recupero token dal cookie\n        const token = (await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)()).get(\"token\")?.value;\n        if (!token) {\n            return new Response(JSON.stringify({\n                message: \"Token mancante\"\n            }), {\n                status: 401\n            });\n        }\n        let refreshedToken = null;\n        try {\n            (0,_lib_jwt__WEBPACK_IMPORTED_MODULE_2__.verifyToken)(token);\n        } catch (err) {\n            if (err.name === \"TokenExpiredError\") {\n                try {\n                    refreshedToken = (0,_lib_jwt__WEBPACK_IMPORTED_MODULE_2__.refreshToken)(token);\n                } catch  {\n                    return new Response(JSON.stringify({\n                        message: \"Token non rinnovabile\"\n                    }), {\n                        status: 401\n                    });\n                }\n            } else {\n                return new Response(JSON.stringify({\n                    message: \"Token non valido\"\n                }), {\n                    status: 401\n                });\n            }\n        }\n        const data = await req.json();\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const db = client.db(\"gestionale\");\n        if (!data) {\n            return new Response(JSON.stringify({\n                message: \"Errore get iscritti per attività\"\n            }), {\n                status: 400\n            });\n        }\n        // prendo tutti i turni relativi a quell'attività\n        const turni = await db.collection(\"turni\").find({\n            idA: data.idAttivita\n        }).toArray();\n        const idsTurni = turni.map((turno)=>turno.idT);\n        // prendo tutti gli iscritti che hanno uno di quei turni\n        const iscritti = await db.collection(\"iscritti\").find({\n            turni: {\n                $in: idsTurni\n            }\n        }).toArray();\n        console.log(iscritti);\n        //aggiorno cookie\n        if (refreshedToken) {\n            (await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)()).set(\"token\", refreshedToken, {\n                httpOnly: true,\n                secure: \"development\" === \"production\",\n                maxAge: 60 * 60,\n                path: \"/\"\n            });\n        }\n        console.log(\"token aggiornato:\", refreshedToken);\n        return new Response(JSON.stringify({\n            message: \"Iscritti ottenuti con successo\",\n            iscritti: iscritti\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        const errorMessage = error instanceof Error ? error.message : \"Unknown error occurred\";\n        return new Response(JSON.stringify({\n            message: errorMessage\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9nZXRJc2NyaXR0aUF0dGl2aXRhL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0Q7QUFDYjtBQUN5QjtBQUV6RCxlQUFlSSxLQUFLQyxHQUFZO0lBQ3JDLElBQUk7UUFDRiwyQkFBMkI7UUFDM0IsTUFBTUMsUUFBUSxDQUFDLE1BQU1MLHFEQUFPQSxFQUFDLEVBQUdNLEdBQUcsQ0FBQyxVQUFVQztRQUU5QyxJQUFJLENBQUNGLE9BQU87WUFDVixPQUFPLElBQUlHLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsU0FBUztZQUFpQixJQUFJO2dCQUFFQyxRQUFRO1lBQUk7UUFDbkY7UUFFQSxJQUFJQyxpQkFBZ0M7UUFFcEMsSUFBSTtZQUNGWCxxREFBV0EsQ0FBQ0c7UUFDZCxFQUFFLE9BQU9TLEtBQVU7WUFDakIsSUFBSUEsSUFBSUMsSUFBSSxLQUFLLHFCQUFxQjtnQkFDcEMsSUFBSTtvQkFDRkYsaUJBQWlCWixzREFBWUEsQ0FBQ0k7Z0JBQ2hDLEVBQUUsT0FBTTtvQkFDTixPQUFPLElBQUlHLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQzt3QkFBRUMsU0FBUztvQkFBd0IsSUFBSTt3QkFBRUMsUUFBUTtvQkFBSTtnQkFDMUY7WUFDRixPQUFPO2dCQUNMLE9BQU8sSUFBSUosU0FBU0MsS0FBS0MsU0FBUyxDQUFDO29CQUFFQyxTQUFTO2dCQUFtQixJQUFJO29CQUFFQyxRQUFRO2dCQUFJO1lBQ3JGO1FBQ0Y7UUFFQSxNQUFNSSxPQUFPLE1BQU1aLElBQUlhLElBQUk7UUFDM0IsTUFBTUMsU0FBUyxNQUFNbkIsb0RBQWFBO1FBQ2xDLE1BQU1vQixLQUFLRCxPQUFPQyxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDSCxNQUFNO1lBQ1QsT0FBTyxJQUFJUixTQUNUQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFNBQVM7WUFBbUMsSUFDN0Q7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLGlEQUFpRDtRQUNqRCxNQUFNUSxRQUFRLE1BQU1ELEdBQUdFLFVBQVUsQ0FBQyxTQUFTQyxJQUFJLENBQUM7WUFBRUMsS0FBS1AsS0FBS1EsVUFBVTtRQUFDLEdBQUdDLE9BQU87UUFDakYsTUFBTUMsV0FBV04sTUFBTU8sR0FBRyxDQUFDQyxDQUFBQSxRQUFTQSxNQUFNQyxHQUFHO1FBRTdDLHdEQUF3RDtRQUN4RCxNQUFNQyxXQUFXLE1BQU1YLEdBQUdFLFVBQVUsQ0FBQyxZQUFZQyxJQUFJLENBQUM7WUFBRUYsT0FBTTtnQkFBRVcsS0FBS0w7WUFBUztRQUFFLEdBQUdELE9BQU87UUFFMUZPLFFBQVFDLEdBQUcsQ0FBQ0g7UUFFWixpQkFBaUI7UUFDakIsSUFBSWpCLGdCQUFnQjtZQUNqQixPQUFNYixxREFBT0EsRUFBQyxFQUFHa0MsR0FBRyxDQUFDLFNBQVNyQixnQkFBZ0I7Z0JBQzdDc0IsVUFBVTtnQkFDVkMsUUFBUUMsa0JBQXlCO2dCQUNqQ0MsUUFBUSxLQUFLO2dCQUNiQyxNQUFNO1lBQ1I7UUFDRjtRQUVBUCxRQUFRQyxHQUFHLENBQUMscUJBQXFCcEI7UUFFakMsT0FBTyxJQUFJTCxTQUNUQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsU0FBUztZQUFrQ21CLFVBQVVBO1FBQVMsSUFDL0U7WUFBRWxCLFFBQVE7UUFBSTtJQUVsQixFQUFFLE9BQU80QixPQUFPO1FBQ2QsTUFBTUMsZUFBZUQsaUJBQWlCRSxRQUFRRixNQUFNN0IsT0FBTyxHQUFHO1FBQzlELE9BQU8sSUFBSUgsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFNBQVM4QjtRQUFhLElBQ3ZDO1lBQUU3QixRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxuZWdyb1xcRGVza3RvcFxcZ2VzdGlvbmFsZVxcc3JjXFxhcHBcXGFwaVxcZ2V0SXNjcml0dGlBdHRpdml0YVxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcbmltcG9ydCB7IHJlZnJlc2hUb2tlbiwgdmVyaWZ5VG9rZW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL2p3dFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vcmVjdXBlcm8gdG9rZW4gZGFsIGNvb2tpZVxyXG4gICAgY29uc3QgdG9rZW4gPSAoYXdhaXQgY29va2llcygpKS5nZXQoXCJ0b2tlblwiKT8udmFsdWU7XHJcblxyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJUb2tlbiBtYW5jYW50ZVwiIH0pLCB7IHN0YXR1czogNDAxIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZWZyZXNoZWRUb2tlbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgdmVyaWZ5VG9rZW4odG9rZW4pO1xyXG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgICAgaWYgKGVyci5uYW1lID09PSBcIlRva2VuRXhwaXJlZEVycm9yXCIpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgcmVmcmVzaGVkVG9rZW4gPSByZWZyZXNoVG9rZW4odG9rZW4pO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiVG9rZW4gbm9uIHJpbm5vdmFiaWxlXCIgfSksIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIlRva2VuIG5vbiB2YWxpZG9cIiB9KSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKFwiZ2VzdGlvbmFsZVwiKTtcclxuXHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiRXJyb3JlIGdldCBpc2NyaXR0aSBwZXIgYXR0aXZpdMOgXCIgfSksXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJlbmRvIHR1dHRpIGkgdHVybmkgcmVsYXRpdmkgYSBxdWVsbCdhdHRpdml0w6BcclxuICAgIGNvbnN0IHR1cm5pID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInR1cm5pXCIpLmZpbmQoeyBpZEE6IGRhdGEuaWRBdHRpdml0YSB9KS50b0FycmF5KCk7XHJcbiAgICBjb25zdCBpZHNUdXJuaSA9IHR1cm5pLm1hcCh0dXJubyA9PiB0dXJuby5pZFQpO1xyXG5cclxuICAgIC8vIHByZW5kbyB0dXR0aSBnbGkgaXNjcml0dGkgY2hlIGhhbm5vIHVubyBkaSBxdWVpIHR1cm5pXHJcbiAgICBjb25zdCBpc2NyaXR0aSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJpc2NyaXR0aVwiKS5maW5kKHsgdHVybmk6eyAkaW46IGlkc1R1cm5pIH0gfSkudG9BcnJheSgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGlzY3JpdHRpKTtcclxuXHJcbiAgICAvL2FnZ2lvcm5vIGNvb2tpZVxyXG4gICAgaWYgKHJlZnJlc2hlZFRva2VuKSB7XHJcbiAgICAgIChhd2FpdCBjb29raWVzKCkpLnNldChcInRva2VuXCIsIHJlZnJlc2hlZFRva2VuLCB7XHJcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwLFxyXG4gICAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInRva2VuIGFnZ2lvcm5hdG86XCIsIHJlZnJlc2hlZFRva2VuKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiSXNjcml0dGkgb3R0ZW51dGkgY29uIHN1Y2Nlc3NvXCIsIGlzY3JpdHRpOiBpc2NyaXR0aSB9KSxcclxuICAgICAgeyBzdGF0dXM6IDIwMCB9XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvciBvY2N1cnJlZFwiO1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBlcnJvck1lc3NhZ2UgfSksXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJjb29raWVzIiwicmVmcmVzaFRva2VuIiwidmVyaWZ5VG9rZW4iLCJQT1NUIiwicmVxIiwidG9rZW4iLCJnZXQiLCJ2YWx1ZSIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJyZWZyZXNoZWRUb2tlbiIsImVyciIsIm5hbWUiLCJkYXRhIiwianNvbiIsImNsaWVudCIsImRiIiwidHVybmkiLCJjb2xsZWN0aW9uIiwiZmluZCIsImlkQSIsImlkQXR0aXZpdGEiLCJ0b0FycmF5IiwiaWRzVHVybmkiLCJtYXAiLCJ0dXJubyIsImlkVCIsImlzY3JpdHRpIiwiJGluIiwiY29uc29sZSIsImxvZyIsInNldCIsImh0dHBPbmx5Iiwic2VjdXJlIiwicHJvY2VzcyIsIm1heEFnZSIsInBhdGgiLCJlcnJvciIsImVycm9yTWVzc2FnZSIsIkVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/getIscrittiAttivita/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetIscrittiAttivita%2Froute&page=%2Fapi%2FgetIscrittiAttivita%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetIscrittiAttivita%2Froute.ts&appDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnegro%5CDesktop%5Cgestionale&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();