<<<<<<< Updated upstream
"use strict";(()=>{var e={};e.id=183,e.ids=[183],e.modules={6037:e=>{e.exports=require("mongoose")},3212:(e,r,o)=>{o.r(r),o.d(r,{register:()=>a});var s=o(6037),t=o.n(s);let n=t().Schema({fullName:String,password:String,email:String});function a(){t().connect("mongodb+srv://ali:abc1234567@cluster0.xht8ahs.mongodb.net/zero-master").then(()=>{console.log("db connected ho gai ha ")})}t().models.user||t().model("user",n)}};var r=require("./webpack-runtime.js");r.C(e);var o=r(r.s=3212);module.exports=o})();
=======
"use strict";
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
exports.id = "instrumentation";
exports.ids = ["instrumentation"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(instrument)/./app/db/db.js":
/*!**********************!*\
  !*** ./app/db/db.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectIt: () => (/* binding */ connectIt),\n/* harmony export */   getAllUsers: () => (/* binding */ getAllUsers)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/user */ \"(instrument)/./models/user.js\");\n\n\nfunction connectIt() {\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://ali:abc1234567@cluster0.xht8ahs.mongodb.net/zero-master\").then(()=>{\n        console.log(\"db connected ho gai ha \");\n    });\n}\nasync function getAllUsers() {\n    return await _models_user__WEBPACK_IMPORTED_MODULE_1__.User.aggregate([\n        {\n            $project: {\n                fullName: 1,\n                email: 1\n            }\n        }\n    ]);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vYXBwL2RiL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzZDO0FBQ1I7QUFFOUIsU0FBU0c7SUFDWkgsdURBQWdCLENBQUMseUVBQXlFSSxJQUFJLENBQUM7UUFDM0ZDLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtBQUNKO0FBRU8sZUFBZUM7SUFDbEIsT0FBTyxNQUFNTCw4Q0FBSUEsQ0FBQ00sU0FBUyxDQUFDO1FBQ3hCO1lBQ0lDLFVBQVU7Z0JBQ05DLFVBQVU7Z0JBQ1ZDLE9BQU87WUFFWDtRQUNKO0tBQ0g7QUFDTCIsInNvdXJjZXMiOlsiRTpcXENvZGluZyBQcm9qZWN0c1xcU3RlcEh1Ylxcc3RlcGh1YlxcYXBwXFxkYlxcZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgbW9uZ29vc2UsIHsgY29ubmVjdCB9IGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAL21vZGVscy91c2VyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25uZWN0SXQoKSB7XG4gICAgbW9uZ29vc2UuY29ubmVjdChcIm1vbmdvZGIrc3J2Oi8vYWxpOmFiYzEyMzQ1NjdAY2x1c3RlcjAueGh0OGFocy5tb25nb2RiLm5ldC96ZXJvLW1hc3RlclwiKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkYiBjb25uZWN0ZWQgaG8gZ2FpIGhhIFwiKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFVzZXJzKCkge1xuICAgIHJldHVybiBhd2FpdCBVc2VyLmFnZ3JlZ2F0ZShbXG4gICAgICAgIHtcbiAgICAgICAgICAgICRwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgZnVsbE5hbWU6IDEsXG4gICAgICAgICAgICAgICAgZW1haWw6IDEsIFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIF0pO1xufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3QiLCJVc2VyIiwiY29ubmVjdEl0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRBbGxVc2VycyIsImFnZ3JlZ2F0ZSIsIiRwcm9qZWN0IiwiZnVsbE5hbWUiLCJlbWFpbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(instrument)/./app/db/db.js\n");

/***/ }),

/***/ "(instrument)/./instrumentation.js":
/*!****************************!*\
  !*** ./instrumentation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\n/* harmony import */ var _app_db_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/db/db */ \"(instrument)/./app/db/db.js\");\n\nfunction register() {\n    (0,_app_db_db__WEBPACK_IMPORTED_MODULE_0__.connectIt)();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vaW5zdHJ1bWVudGF0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdDO0FBRWpDLFNBQVNDO0lBQ1pELHFEQUFTQTtBQUdiIiwic291cmNlcyI6WyJFOlxcQ29kaW5nIFByb2plY3RzXFxTdGVwSHViXFxzdGVwaHViXFxpbnN0cnVtZW50YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdEl0IH0gZnJvbSBcIi4vYXBwL2RiL2RiXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlciAoKXtcbiAgICBjb25uZWN0SXQoKTtcbiAgIFxuICAgIFxufSJdLCJuYW1lcyI6WyJjb25uZWN0SXQiLCJyZWdpc3RlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(instrument)/./instrumentation.js\n");

/***/ }),

/***/ "(instrument)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet userSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({\n    fullName: String,\n    password: String,\n    email: String\n});\nlet User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).user || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"user\", userSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vbW9kZWxzL3VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLElBQUlDLGFBQWFELHNEQUFlLENBQUM7SUFDN0JHLFVBQVdDO0lBQ1hDLFVBQVdEO0lBQ1hFLE9BQVFGO0FBQ1o7QUFFTyxJQUFJRyxPQUFPUCx3REFBZSxDQUFDUyxJQUFJLElBQUlULHFEQUFjLENBQUMsUUFBU0MsWUFBWSIsInNvdXJjZXMiOlsiRTpcXENvZGluZyBQcm9qZWN0c1xcU3RlcEh1Ylxcc3RlcGh1YlxcbW9kZWxzXFx1c2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxubGV0IHVzZXJTY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoe1xuICAgIGZ1bGxOYW1lIDogU3RyaW5nLFxuICAgIHBhc3N3b3JkIDogU3RyaW5nLFxuICAgIGVtYWlsIDogU3RyaW5nXG59KVxuXG5leHBvcnQgbGV0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbChcInVzZXJcIiAsIHVzZXJTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJmdWxsTmFtZSIsIlN0cmluZyIsInBhc3N3b3JkIiwiZW1haWwiLCJVc2VyIiwibW9kZWxzIiwidXNlciIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(instrument)/./models/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(instrument)/./instrumentation.js"));
module.exports = __webpack_exports__;

})();
>>>>>>> Stashed changes
