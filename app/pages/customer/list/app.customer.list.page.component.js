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
var Subject_1 = require('rxjs/Subject');
var app_states_1 = require('../../../common/app.states');
var app_customer_provider_1 = require('../../../providers/customer/app.customer.provider');
var CustomerListPageComponent = (function () {
    function CustomerListPageComponent(router, toastrService, customerProvider) {
        this.router = router;
        this.toastrService = toastrService;
        this.customerProvider = customerProvider;
        this.searchTerm$ = new Subject_1.Subject();
        this.cityFilter = new Subject_1.Subject();
        this.statesList = app_states_1.STATES;
        this.loading = false;
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
    *   This method retrieves only customers - role customer for admin user
    */
    CustomerListPageComponent.prototype.getOnlyCustomers = function () {
        var _this = this;
        this.customerProvider.getOnlyCustomers().then(function (res) {
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
        this.router.navigate(['/customers', customer.customerId]);
    };
    /*
    *   This method applies advanced filter based on selection
    */
    CustomerListPageComponent.prototype.applyFilter = function (filterType, filterValue) {
        var _this = this;
        this.loading = true;
        this.customerProvider.applyFilter(filterType, filterValue).then(function (res) {
            _this.loading = false;
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
    *   This method resets the filter
    */
    CustomerListPageComponent.prototype.resetFilter = function () {
        this.loading = true;
        $("#filterCollapse").removeClass('show');
        $("#filterState").val('0');
        $("#cityFilter").val('');
        $("#customerName").val('');
        this.getOnlyCustomers();
        this.loading = false;
    };
    CustomerListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.getOnlyCustomers();
        // Customer name filter
        this.customerProvider.applyTextFilter('customerName', this.searchTerm$)
            .subscribe(function (res) {
            if (res.status === 200) {
                _this.customersList = res.customer;
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
        // City filter
        this.customerProvider.applyTextFilter('city', this.cityFilter)
            .subscribe(function (res) {
            if (res.status === 200) {
                _this.customersList = res.customer;
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
        this.loading = false;
    };
    CustomerListPageComponent = __decorate([
        core_1.Component({
            selector: 'customer-list-page',
            templateUrl: './app/pages/customer/list/app.customer.list.page.component.html',
            styleUrls: ['./app/pages/customer/list/app.customer.list.page.component.css'],
            providers: [angular2_toaster_1.ToasterService, app_customer_provider_1.AppCustomerProvider]
        }), 
        __metadata('design:paramtypes', [router_1.Router, angular2_toaster_1.ToasterService, app_customer_provider_1.AppCustomerProvider])
    ], CustomerListPageComponent);
    return CustomerListPageComponent;
}());
exports.CustomerListPageComponent = CustomerListPageComponent;
//# sourceMappingURL=app.customer.list.page.component.js.map