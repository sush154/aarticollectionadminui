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
var AppCustomerProvider = (function () {
    function AppCustomerProvider(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.serviceUrl = app_service_url_1.URL + "/customer";
    }
    AppCustomerProvider.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    /*
    *   This method retrieves all the customer list
    */
    AppCustomerProvider.prototype.getAllCustomers = function () {
        var _this = this;
        var url = this.serviceUrl + "/getAllCustomers";
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
    *   This method retrieves only customers list - for admin user
    */
    AppCustomerProvider.prototype.getOnlyCustomers = function () {
        var _this = this;
        var url = this.serviceUrl + "/getOnlyCustomers";
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
    *   This method creates new User in Customer Document
    *   Note : This method does not update User Document which is used for login
    */
    AppCustomerProvider.prototype.addCustomer = function (newCustomer) {
        var _this = this;
        var url = this.serviceUrl + "/addCustomer";
        return this.http
            .post(url, JSON.stringify(newCustomer), { headers: this.headers, withCredentials: true })
            .toPromise()
            .then(function (res) {
            return res.json().data;
            ;
        })
            .catch(function (err) {
            _this.handleError(err);
        });
    };
    /*
    *   This method retrieves details for the selected customer
    */
    AppCustomerProvider.prototype.getCustomerDetails = function (customerId) {
        var _this = this;
        var url = this.serviceUrl + "/getCustomerDetails/" + customerId;
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
    *   This method updates the customer details for selected customer
    */
    AppCustomerProvider.prototype.updateCustomer = function (updatedCustomer) {
        var _this = this;
        var url = this.serviceUrl + "/updateCustomer";
        return this.http
            .post(url, JSON.stringify(updatedCustomer), { headers: this.headers, withCredentials: true })
            .toPromise()
            .then(function (res) {
            return res.json().data;
        })
            .catch(function (err) {
            _this.handleError(err);
        });
    };
    /*
    *   This method applies filter on customer name
    */
    AppCustomerProvider.prototype.applyTextFilter = function (filterType, filterValue) {
        var _this = this;
        return filterValue.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (customer) {
            if (customer !== '') {
                var url = _this.serviceUrl + "/customerNameFilter/" + filterType + "/" + customer;
                return _this.http
                    .get(url, { headers: _this.headers, withCredentials: true })
                    .map(function (res) {
                    return res.json().data;
                });
            }
            else {
                var url = _this.serviceUrl + "/getOnlyCustomers";
                return _this.http
                    .get(url, { headers: _this.headers, withCredentials: true })
                    .toPromise()
                    .then(function (res) {
                    return res.json().data;
                })
                    .catch(function (err) {
                    _this.handleError(err);
                });
            }
        });
    };
    /*
    *   This method applies filter on state - advanced filter
    */
    AppCustomerProvider.prototype.applyFilter = function (filterType, filterValue) {
        var _this = this;
        var url = this.serviceUrl + "/applyFilter";
        var data = { 'filterType': filterType, 'filterValue': filterValue };
        return this.http
            .post(url, JSON.stringify(data), { headers: this.headers, withCredentials: true })
            .toPromise()
            .then(function (res) {
            return res.json().data;
        })
            .catch(function (err) {
            _this.handleError(err);
        });
    };
    /*
    *   This method retrieves customers count
    */
    AppCustomerProvider.prototype.getCustomersCount = function () {
        var _this = this;
        var url = this.serviceUrl + "/getCustomersCount";
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
    AppCustomerProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppCustomerProvider);
    return AppCustomerProvider;
}());
exports.AppCustomerProvider = AppCustomerProvider;
//# sourceMappingURL=app.customer.provider.js.map