"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var app_service_url_1 = require('../../util/app.service.url');
var AuthProvider = (function () {
    function AuthProvider(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.serviceUrl = app_service_url_1.URL + "/order";
    }
    AuthProvider.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    /*
    *   This method check for authenticated user on page load
    */
    AuthProvider.prototype.authUser = function () {
        var _this = this;
        var url = app_service_url_1.URL + "/user/auth";
        return this.http
            .get(url, { headers: this.headers, withCredentials: true })
            .toPromise()
            .then(function (res) {
            return res.json().data;
        })
            .catch(function (err) {
            _this.handleError(err);
        });
    };
    /*
    *   This method authenticates user
    */
    AuthProvider.prototype.login = function (loginForm) {
        var _this = this;
        var url = app_service_url_1.URL + "/user/login";
        this.http
            .post(url, JSON.stringify(loginForm), { headers: this.headers, withCredentials: true })
            .toPromise()
            .then(function (res) {
            console.log(res.json());
        })
            .catch(function (err) {
            _this.handleError(err);
        });
    };
    AuthProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthProvider);
    return AuthProvider;
}());
exports.AuthProvider = AuthProvider;
//# sourceMappingURL=app.auth.provider.js.map