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
require('rxjs/add/operator/map');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
var CategoryProvider = (function () {
    function CategoryProvider(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.serviceUrl = app_service_url_1.URL + "/category";
    }
    CategoryProvider.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    /*
    *   This method gets all categories
    *   These categories are child categories of dress material and saree - being parent categories
    */
    CategoryProvider.prototype.getAllCategories = function () {
        var _this = this;
        var url = this.serviceUrl + "/getAllCategories";
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
    *   This method adds new Category
    */
    CategoryProvider.prototype.addNewCategory = function (newCategory) {
        var _this = this;
        var url = this.serviceUrl + "/addCategory";
        return this.http
            .post(url, JSON.stringify(newCategory), { headers: this.headers, withCredentials: true })
            .toPromise()
            .then(function (res) {
            return res.json().data;
        })
            .catch(function (err) {
            _this.handleError(err);
        });
    };
    /*
    *   This method filter out categories based on category name
    */
    CategoryProvider.prototype.filterCategory = function (filterValue) {
        var _this = this;
        return filterValue.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (category) {
            if (category !== '') {
                var url = _this.serviceUrl + "/applyFilter/" + category;
                return _this.http
                    .get(url, { headers: _this.headers, withCredentials: true })
                    .map(function (res) {
                    return res.json().data;
                });
            }
            else {
                var url = _this.serviceUrl + "/getAllCategories";
                return _this.http
                    .get(url, { headers: _this.headers, withCredentials: true })
                    .map(function (res) {
                    return res.json().data;
                });
            }
        });
    };
    CategoryProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CategoryProvider);
    return CategoryProvider;
}());
exports.CategoryProvider = CategoryProvider;
//# sourceMappingURL=app.category.provider.js.map