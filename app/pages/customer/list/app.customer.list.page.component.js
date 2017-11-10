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
var router_1 = require('@angular/router');
var angular2_toaster_1 = require('angular2-toaster');
var app_customer_provider_1 = require('../../../providers/customer/app.customer.provider');
var app_communicate_service_1 = require('../../../util/communication/app.communicate.service');
var CustomerListPageComponent = (function () {
    function CustomerListPageComponent(router, toastrService, customerProvider, communicateService) {
        this.router = router;
        this.toastrService = toastrService;
        this.customerProvider = customerProvider;
        this.communicateService = communicateService;
    }
    /*
    *   This method retrieves all the customers list for admin user
    */
    CustomerListPageComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this.customerProvider.getAllCustomers().then(function (res) {
            if (res.status === 200) {
                _this.customersList = res.customer;
            }
            else if (res.status === 401) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    /*
    *   This method navigates to customer details page
    */
    CustomerListPageComponent.prototype.goToDetails = function (customer) {
        this.communicateService.populateValue(customer);
        var customerName = customer.firstName + " " + customer.lastName;
        this.router.navigate(['/customers', customerName]);
    };
    CustomerListPageComponent.prototype.ngOnInit = function () {
        this.getAllCustomers();
    };
    CustomerListPageComponent = __decorate([
        core_1.Component({
            selector: 'customer-list-page',
            templateUrl: './app/pages/customer/list/app.customer.list.page.component.html',
            styleUrls: ['./app/pages/customer/list/app.customer.list.page.component.css'],
            providers: [angular2_toaster_1.ToasterService, app_customer_provider_1.AppCustomerProvider, app_communicate_service_1.CommunicationService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, angular2_toaster_1.ToasterService, app_customer_provider_1.AppCustomerProvider, app_communicate_service_1.CommunicationService])
    ], CustomerListPageComponent);
    return CustomerListPageComponent;
}());
exports.CustomerListPageComponent = CustomerListPageComponent;
//# sourceMappingURL=app.customer.list.page.component.js.map