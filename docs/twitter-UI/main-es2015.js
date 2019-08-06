(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- nav -->\n<nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n  <div class=\"navbar-nav\">\n    <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\n    <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n  </div>\n</nav>\n\n<!-- main app container -->\n<div class=\"container mt-5\">\n  <!--  <div class=\"row\">-->\n  <!--        <alert></alert>-->\n  <router-outlet></router-outlet>\n  <!--  </div>-->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/Components/login/login.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/Components/login/login.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\n  <div class=\"login-main-text\">\n    <h2>Application<br> Login Page</h2>\n    <p>Login or register from here to access.</p>\n  </div>\n</div>\n<div class=\"main\">\n  <div class=\"col-md-6 col-sm-12\">\n    <div class=\"login-form\">\n\n      <form [formGroup]=\"loginDetails\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"email\">email</label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\"\n                 [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"/>\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">email is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                 [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"/>\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n          <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n        </div>\n      </form>\n\n      <!--\n            <form [formGroup]=\"loginDetails\" (ngSubmit)=\"login()\">\n              <div class=\"form-group\">\n                <label>User Name</label>\n                <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"User Name\">\n              </div>\n              <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\">\n              </div>\n              <button type=\"submit\" class=\"btn btn-black mr-3\">Login</button>\n              <button type=\"submit\" class=\"btn btn-secondary\">Register</button>\n            </form>-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/home.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/home.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hi There !</h1>\n<p>You're logged in with TUI!!</p>\n<h3>All Tweets Will show here:</h3>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_Components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Components/login/login.component */ "./src/app/modules/Components/login/login.component.ts");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/auth/guards/auth.guard */ "./src/app/core/auth/guards/auth.guard.ts");






const routes = [
    { path: '', component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'login', component: _modules_Components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/auth/services/authentication.service */ "./src/app/core/auth/services/authentication.service.ts");




let AppComponent = 
// TODO: Folders Under Modules will be refactored.Structuring of the application should be done proper.
class AppComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.authService.currentUser.subscribe(x => this.currentUser = x);
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
    // TODO: Folders Under Modules will be refactored.Structuring of the application should be done proper.
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_Components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Components/login/login.component */ "./src/app/modules/Components/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_auth_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/auth/interceptors/jwt.interceptor */ "./src/app/core/auth/interceptors/jwt.interceptor.ts");
/* harmony import */ var _core_auth_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/auth/interceptors/error.interceptor */ "./src/app/core/auth/interceptors/error.interceptor.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _modules_Components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _modules_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _core_auth_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _core_auth_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/auth/guards/auth.guard.ts":
/*!************************************************!*\
  !*** ./src/app/core/auth/guards/auth.guard.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/core/auth/services/authentication.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        const currentUser = this.authService.currentUserValue;
        if (!!currentUser) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/core/auth/interceptors/error.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/auth/interceptors/error.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/core/auth/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            // check the status of the error
            if (err.status === 401) {
                // if status is 401 we will logout the user
                // TODO: Remove this Comment after resolving the unauthorized issue in Tweet API
                // this.authService.logout();
                // location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/core/auth/interceptors/jwt.interceptor.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/auth/interceptors/jwt.interceptor.ts ***!
  \***********************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/core/auth/services/authentication.service.ts");



let JwtInterceptor = class JwtInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        //  Adding the Auth header with JWT Token if available
        const currentUser = this.authService.currentUserValue;
        // Checking that Token is there or not
        if (currentUser && currentUser.idToken) {
            // Assigning or cloning the token
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.idToken}`
                }
            });
        }
        // Passing Request forward with token
        return next.handle(req);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JwtInterceptor);



/***/ }),

/***/ "./src/app/core/auth/services/authentication.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/auth/services/authentication.service.ts ***!
  \**************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    /**
     * Method call when user is loggin into the system
     */
    login(email, password) {
        return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD8W0pWlju6wOPr3ih_aio2gNiVKHd9F8g', {
            email,
            password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            console.log(user, 'This is user data');
            if (!!user && user.idToken) {
                // Storing the token in local storage with key currentUser
                localStorage.setItem('currentUser', JSON.stringify(user));
                // cetting the users data in currentUser's Context
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    // When user is logging out if the application
    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/modules/Components/login/login.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/Components/login/login.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: \"Lato\", sans-serif;\n}\n\n.main-head {\n  height: 150px;\n  background: #FFF;\n}\n\n.sidenav {\n  height: 100%;\n  overflow-x: hidden;\n  padding-top: 20px;\n  background: #ad5389;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #3c1053, #ad5389);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.main {\n  padding: 0px 10px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px;\n  }\n}\n\n@media screen and (max-width: 450px) {\n  .login-form {\n    margin-top: 10%;\n  }\n\n  .register-form {\n    margin-top: 10%;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .main {\n    margin-left: 40%;\n  }\n\n  .sidenav {\n    width: 40%;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n  }\n\n  .login-form {\n    margin-top: 80%;\n  }\n\n  .register-form {\n    margin-top: 20%;\n  }\n}\n\n.login-main-text {\n  margin-top: 20%;\n  padding: 60px;\n  color: #fff;\n}\n\n.login-main-text h2 {\n  font-weight: 300;\n}\n\n.btn-black {\n  background-color: #000 !important;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhcnNoaXQvRGVza3RvcC9UYXNrcy9BZGRlbmRhL3R3aXR0ZXItVUkvc3JjL2FwcC9tb2R1bGVzL0NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvQ29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FER0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURJQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFBc0IsOEJBQUE7RUFDNEMsK0JBQUE7RUFDbEUsdURBQUE7RUFBeUQscUVBQUE7QUNFM0Q7O0FESUE7RUFDRSxpQkFBQTtBQ0RGOztBRElBO0VBQ0U7SUFDRSxpQkFBQTtFQ0RGO0FBQ0Y7O0FESUE7RUFDRTtJQUNFLGVBQUE7RUNGRjs7RURLQTtJQUNFLGVBQUE7RUNGRjtBQUNGOztBREtBO0VBQ0U7SUFDRSxnQkFBQTtFQ0hGOztFRE1BO0lBQ0UsVUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7RUNIRjs7RURNQTtJQUNFLGVBQUE7RUNIRjs7RURNQTtJQUNFLGVBQUE7RUNIRjtBQUNGOztBRE9BO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxnQkFBQTtBQ0xGOztBRFFBO0VBQ0UsaUNBQUE7RUFDQSxXQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL0NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5cbi5tYWluLWhlYWQge1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuXG59XG5cbi5zaWRlbmF2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjYWQ1Mzg5OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzNjMTA1MywgI2FkNTM4OSk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzYzEwNTMsICNhZDUzODkpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gIC8vYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlcy5zcXVhcmVzcGFjZS1jZG4uY29tL2NvbnRlbnQvdjEvNWIwNWVlYmE4OWMxNzI3MjdlNGJjYjZhLzE1NDc0MTE0ODkyNzEtVVdKMjhMVjZCVkJaWlRCVlFSNUEva2UxN1p3ZEdCVG9kZEk4cERtNDhrQ2ttRVdkbWJLVXpMS2RlaHRYbm5VdDdnUWEzSDc4SDNZMHR4amFpdl8wZkRvT3Z4Y2RNbU1La0RzeVVxTVNzTVd4SGs3MjV5aWlIQ0NMZnJoOE8xejVRUE9vaERJYUllbGpNSGdERjVDVmxPcXBlTkxjSjgwTks2NV9mVjdTMVVTTGZBQW1MMFBXeDhSY1ZDMVhzeFIySGUxTlgzaVhlaWdMbUlseDJ5b3FvbTRiam05REFIRjJrT3NJWlJKS1huQS9EcmliYmJsZStBcHArSWNvbi5wbmdcIik7XG59XG5cblxuLm1haW4ge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5zaWRlbmF2IHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAubG9naW4tZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICB9XG5cbiAgLnJlZ2lzdGVyLWZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAubWFpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuXG4gIC5zaWRlbmF2IHtcbiAgICB3aWR0aDogNDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICB9XG5cbiAgLmxvZ2luLWZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDgwJTtcbiAgfVxuXG4gIC5yZWdpc3Rlci1mb3JtIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gIH1cbn1cblxuXG4ubG9naW4tbWFpbi10ZXh0IHtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBwYWRkaW5nOiA2MHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmxvZ2luLW1haW4tdGV4dCBoMiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5idG4tYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuIiwiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1haW4taGVhZCB7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG59XG5cbi5zaWRlbmF2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjYWQ1Mzg5O1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM2MxMDUzLCAjYWQ1Mzg5KTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM2MxMDUzLCAjYWQ1Mzg5KTtcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xufVxuXG4ubWFpbiB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgLnNpZGVuYXYge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAubG9naW4tZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICB9XG5cbiAgLnJlZ2lzdGVyLWZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cblxuICAuc2lkZW5hdiB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gIC5sb2dpbi1mb3JtIHtcbiAgICBtYXJnaW4tdG9wOiA4MCU7XG4gIH1cblxuICAucmVnaXN0ZXItZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICB9XG59XG4ubG9naW4tbWFpbi10ZXh0IHtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBwYWRkaW5nOiA2MHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmxvZ2luLW1haW4tdGV4dCBoMiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5idG4tYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/Components/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/Components/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/auth/services/authentication.service */ "./src/app/core/auth/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let LoginComponent = class LoginComponent {
    constructor(fb, router, route, authService) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginDetails = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    }
    get f() {
        return this.loginDetails.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (this.loginDetails.invalid) {
            return;
        }
        this.loading = true;
        this.authService.login(this.f.email.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(data => {
            console.log(this.returnUrl, 'This is return URL');
            this.router.navigateByUrl(this.returnUrl);
            console.log(this.router.navigate([this.returnUrl]));
        }, error1 => {
            this.loading = false;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _core_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/Components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/Components/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/modules/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tweet_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/tweet-service.service */ "./src/app/modules/home/services/tweet-service.service.ts");
/* harmony import */ var _core_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/auth/services/authentication.service */ "./src/app/core/auth/services/authentication.service.ts");




let HomeComponent = class HomeComponent {
    constructor(tweetService, authService) {
        this.tweetService = tweetService;
        this.authService = authService;
        this.idToken = this.authService.currentUserValue.idToken;
    }
    ngOnInit() {
        this.tweetService.getAllTweet(this.idToken).subscribe(res => {
            console.log(res, 'This all Tweets');
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_tweet_service_service__WEBPACK_IMPORTED_MODULE_2__["TweetServiceService"] },
    { type: _core_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/home/services/tweet-service.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/home/services/tweet-service.service.ts ***!
  \****************************************************************/
/*! exports provided: TweetServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetServiceService", function() { return TweetServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TweetServiceService = class TweetServiceService {
    constructor(http) {
        this.http = http;
    }
    getAllTweet(authToken) {
        // return this.http.get<any>(`https://angular-sample-twitter.firebaseio.com/tweets.json?auth=${this.storageToken.idToken}`);
        return this.http.get(`https://angular-sample-twitter.firebaseio.com/tweets.json?auth=${authToken}`);
    }
};
TweetServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TweetServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TweetServiceService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/harshit/Desktop/Tasks/Addenda/twitter-UI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map