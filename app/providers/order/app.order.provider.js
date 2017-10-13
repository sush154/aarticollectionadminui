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
var OrderProvider = (function () {
    function OrderProvider(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.serviceUrl = app_service_url_1.URL + "/order";
    }
    OrderProvider.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    /*
    *   This method retrieves all the orders irrespective of the user
    */
    OrderProvider.prototype.getAllOrders = function () {
        var _this = this;
        var url = this.serviceUrl + "/getAllOrders";
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
    *   This method retrieves total orders count, current month order count and current month income
    */
    OrderProvider.prototype.getOrderCountAndIncome = function () {
        var _this = this;
        var url = this.serviceUrl + "/getOrderCountAndIncome";
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
    *   This method gets the count of new Orders
    */
    OrderProvider.prototype.getNewOrderCount = function () {
        var _this = this;
        var url = this.serviceUrl + "/getNewOrdersCount";
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
    *   This method gets income till date
    */
    OrderProvider.prototype.getIncomeThisYear = function () {
        var _this = this;
        var url = this.serviceUrl + "/getIncomeThisYear";
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
    *   This method adds new order
    */
    OrderProvider.prototype.addNewOrder = function (newOrder) {
        var _this = this;
        var url = this.serviceUrl + "/addOrder";
        return this.http
            .post(url, JSON.stringify(newOrder), { headers: this.headers, withCredentials: true })
            .toPromise()
            .then(function (res) {
            return res.json().data;
        })
            .catch(function (err) {
            _this.handleError(err);
        });
    };
    /*
    *   This method populates details for the selected order
    */
    OrderProvider.prototype.getOrderDetails = function (orderId) {
        var _this = this;
        var url = this.serviceUrl + "/getOrderDetails/" + orderId;
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
    *   This method updates selected order details
    */
    OrderProvider.prototype.updateOrder = function (orderdetails) {
        var _this = this;
        var url = this.serviceUrl + '/updateOrder';
        return this.http
            .post(url, JSON.stringify(orderdetails), { headers: this.headers, withCredentials: true })
            .toPromise()
            .then(function (res) {
            return res.json().data;
        })
            .catch(function (err) {
            _this.handleError(err);
        });
    };
    OrderProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OrderProvider);
    return OrderProvider;
}());
exports.OrderProvider = OrderProvider;
//# sourceMappingURL=app.order.provider.js.map