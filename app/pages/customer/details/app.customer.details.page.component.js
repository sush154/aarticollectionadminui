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
var router_1 = require('@angular/router');
var angular2_toaster_1 = require('angular2-toaster');
var app_states_1 = require('../../../common/app.states');
var app_customer_provider_1 = require('../../../providers/customer/app.customer.provider');
var CustomerDetailsPageComponent = (function () {
    function CustomerDetailsPageComponent(location, currentRoute, toastrService, customerProvider) {
        this.location = location;
        this.currentRoute = currentRoute;
        this.toastrService = toastrService;
        this.customerProvider = customerProvider;
        this.customerObj = {};
        this.stateList = app_states_1.STATES;
        this.updatedCustomer = {};
        this.loading = false;
    }
    CustomerDetailsPageComponent.prototype.getCustomerDetails = function () {
        var _this = this;
        var customerId;
        this.currentRoute.params.subscribe(function (params) {
            customerId = params['id'];
        });
        this.customerProvider.getCustomerDetails(customerId).then(function (res) {
            if (res.status === 200) {
                _this.customerObj = res.customer;
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    CustomerDetailsPageComponent.prototype.openEditCustomerModal = function (customer) {
        this.updatedCustomer._id = this.customerObj._id;
        this.updatedCustomer.customerName = this.customerObj.customerName;
        this.updatedCustomer.address = this.customerObj.address;
        this.updatedCustomer.state = this.customerObj.state;
        this.updatedCustomer.city = this.customerObj.city;
        this.updatedCustomer.pincode = this.customerObj.pincode;
        this.updatedCustomer.email = this.customerObj.email;
        this.updatedCustomer.phoneNo = this.customerObj.phoneNo;
    };
    CustomerDetailsPageComponent.prototype.goBack = function () {
        this.location.back();
    };
    CustomerDetailsPageComponent.prototype.updateCustomer = function (updatedCust) {
        var _this = this;
        this.loading = true;
        this.customerProvider.updateCustomer(updatedCust).then(function (res) {
            _this.loading = false;
            if (res.status === 200) {
                _this.toastrService.pop('success', 'Update Successful', 'Customer Details are updated successfully !');
                $('#editCustomerDetails').modal('hide');
                _this.getCustomerDetails();
            }
            else if (res.status === 201) {
                _this.toastrService.pop('error', 'Email already used', 'Email address provided is already in use. Please new Email !');
                $('#email').addClass('is-invalid');
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    CustomerDetailsPageComponent.prototype.removeInvalidCSS = function () {
        if ($('#email').hasClass('is-invalid')) {
            $('#email').removeClass('is-invalid');
        }
    };
    CustomerDetailsPageComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.getCustomerDetails();
        this.loading = false;
    };
    CustomerDetailsPageComponent = __decorate([
        core_1.Component({
            selector: 'customer-details-page',
            templateUrl: './app/pages/customer/details/app.customer.details.page.component.html',
            styleUrls: ['./app/pages/customer/details/app.customer.details.page.component.css'],
            providers: [app_customer_provider_1.AppCustomerProvider]
        }), 
        __metadata('design:paramtypes', [common_1.Location, router_1.ActivatedRoute, angular2_toaster_1.ToasterService, app_customer_provider_1.AppCustomerProvider])
    ], CustomerDetailsPageComponent);
    return CustomerDetailsPageComponent;
}());
exports.CustomerDetailsPageComponent = CustomerDetailsPageComponent;
//# sourceMappingURL=app.customer.details.page.component.js.map