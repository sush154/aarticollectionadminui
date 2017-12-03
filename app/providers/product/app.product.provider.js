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
var ProductProvider = (function () {
    function ProductProvider(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.serviceUrl = app_service_url_1.URL + "/product";
    }
    ProductProvider.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    /*
    *   This method retrieves all the products
    */
    ProductProvider.prototype.getAllProducts = function () {
        var _this = this;
        var url = this.serviceUrl + "/getAllProducts";
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
    *   This method gets total count of products
    */
    ProductProvider.prototype.getTotalProductsCount = function () {
        var _this = this;
        var url = this.serviceUrl + "/getProductsCount";
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
    *   This method retrieves product details
    */
    ProductProvider.prototype.getProductDetails = function (productId) {
        var _this = this;
        var url = this.serviceUrl + "/getProductDetails/" + productId;
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
    *   This method filter applied on the Product Name
    */
    ProductProvider.prototype.productNameFilter = function (filterValue) {
        var _this = this;
        return filterValue.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (product) {
            if (product !== '') {
                var url = _this.serviceUrl + "/productNameFilter/" + product;
                return _this.http
                    .get(url, { headers: _this.headers, withCredentials: true })
                    .map(function (res) {
                    return res.json().data;
                });
            }
            else {
                var url = _this.serviceUrl + "/applyFilter";
                var data = { 'filters': [{ 'type': 'productName', 'value': '' }] };
                return _this.http
                    .post(url, JSON.stringify(data), { headers: _this.headers, withCredentials: true })
                    .map(function (res) {
                    return res.json().data;
                });
            }
        });
    };
    /*
    *   This method adds new product
    */
    ProductProvider.prototype.addProduct = function (newProduct) {
        var _this = this;
        var url = this.serviceUrl + "/addProduct";
        return this.http
            .post(url, JSON.stringify(newProduct), { headers: this.headers, withCredentials: true })
            .toPromise()
            .then(function (res) {
            return res.json().data;
        })
            .catch(function (err) {
            _this.handleError(err);
        });
    };
    /*
    *   This method retrieves images list for the selected product
    */
    ProductProvider.prototype.getImagesList = function (productId) {
        var _this = this;
        var url = this.serviceUrl + "/getImagesList/" + productId;
        return this.http
            .get(url, { headers: this.headers, withCredentials: true })
            .toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(function (err) {
            _this.handleError(err);
        });
    };
    /*
    *   This method adds product meta info
    */
    ProductProvider.prototype.updateProductMetaInfo = function (updatedProduct) {
        var _this = this;
        var url = this.serviceUrl + "/addMetaInfo";
        return this.http
            .post(url, JSON.stringify(updatedProduct), { headers: this.headers, withCredentials: true })
            .toPromise().
            then(function (res) {
            return res.json().data;
        })
            .catch(function (err) {
            _this.handleError(err);
        });
    };
    /**
     * This method updates product details
     */
    ProductProvider.prototype.updateProductDetails = function (updatedProduct) {
        var _this = this;
        var url = this.serviceUrl + "/updateProduct";
        return this.http
            .post(url, JSON.stringify(updatedProduct), { headers: this.headers, withCredentials: true })
            .toPromise()
            .then(function (res) {
            return res.json().data;
        })
            .catch(function (err) {
            _this.handleError(err);
        });
    };
    ProductProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductProvider);
    return ProductProvider;
}());
exports.ProductProvider = ProductProvider;
//# sourceMappingURL=app.product.provider.js.map