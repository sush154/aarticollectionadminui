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
var common_1 = require('@angular/common');
var angular2_toaster_1 = require('angular2-toaster');
var app_states_1 = require('../../../common/app.states');
var app_customer_provider_1 = require('../../../providers/customer/app.customer.provider');
var CustomerAddPageComponent = (function () {
    function CustomerAddPageComponent(customerProvider, toastrService, location) {
        this.customerProvider = customerProvider;
        this.toastrService = toastrService;
        this.location = location;
        this.statesList = app_states_1.STATES;
        this.stateSelected = false;
        this.newCustomer = {};
        this.passwordFlag = false;
    }
    /*
    *   This method changes the disability mode of city input box based on state filter selected
    */
    CustomerAddPageComponent.prototype.selectState = function (state) {
        if (state !== '0') {
            this.stateSelected = true;
        }
        else {
            this.stateSelected = false;
        }
        $("#city").val("");
    };
    /*
    *   This method displays password input box if role is admin
    */
    CustomerAddPageComponent.prototype.displayPassword = function (role) {
        console.log(role);
        if (role === '2') {
            this.passwordFlag = true;
        }
        else {
            this.passwordFlag = false;
        }
    };
    /*
    *   This method adds new customer
    */
    CustomerAddPageComponent.prototype.addCustomer = function () {
        var _this = this;
        this.newCustomer.createdFrom = 'admin-portal';
        if (this.newCustomer.role === '1') {
            this.newCustomer.role = 'general';
        }
        else if (this.newCustomer.role === '2') {
            this.newCustomer.role = 'admin';
        }
        this.customerProvider.addCustomer(this.newCustomer).then(function (res) {
            if (res.status === 200) {
                _this.location.back();
            }
            else if (res.status === 201) {
                _this.toastrService.pop('error', 'Customer Already Available', 'The Customer Details you are trying to enter are already available.');
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    CustomerAddPageComponent.prototype.ngOnInit = function () {
        this.newCustomer.state = "0";
    };
    CustomerAddPageComponent = __decorate([
        core_1.Component({
            selector: 'customer-add-page',
            templateUrl: './app/pages/customer/add/app.customer.add.page.component.html',
            styleUrls: ['./app/pages/customer/add/app.customer.add.page.component.css'],
            providers: [app_customer_provider_1.AppCustomerProvider]
        }), 
        __metadata('design:paramtypes', [app_customer_provider_1.AppCustomerProvider, angular2_toaster_1.ToasterService, common_1.Location])
    ], CustomerAddPageComponent);
    return CustomerAddPageComponent;
}());
exports.CustomerAddPageComponent = CustomerAddPageComponent;
//# sourceMappingURL=app.customer.add.page.component.js.map