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
var app_product_provider_1 = require('../../../providers/product/app.product.provider');
var Subject_1 = require('rxjs/Subject');
var app_payment_type_1 = require('../../../common/app.payment.type');
var app_payment_status_1 = require('../../../common/app.payment.status');
var AddOrderPageComponent = (function () {
    function AddOrderPageComponent(customerProvider, router, toastrService, productProvider) {
        this.customerProvider = customerProvider;
        this.router = router;
        this.toastrService = toastrService;
        this.productProvider = productProvider;
        this.paymentTypeList = app_payment_type_1.PAYMENTTYPE;
        this.paymentStatusList = app_payment_status_1.PAYMENTSTATUS;
        this.productsList = [];
        this.searchTerm$ = new Subject_1.Subject();
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
        };
    }
    /*
    *   This method retrieves all the customers list
    */
    AddOrderPageComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this.customerProvider.getAllCustomers().then(function (res) {
            if (res.status === 200) {
                _this.customersList = res.customer;
            }
        });
    };
    /*
    *   This method open add customer popup and populate state list
    */
    AddOrderPageComponent.prototype.navigateAddCustomer = function (val) {
        if (val === '1') {
            this.router.navigate(['/customers/addCustomer']);
        }
    };
    /*
    *   This method retrieves all the products for selecting
    */
    AddOrderPageComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.productProvider.getAllProducts().then(function (res) {
            if (res.status === 200) {
                _this.filteredProductsList = res.product;
            }
        });
    };
    /*
    *   This method adds product to cart
    */
    AddOrderPageComponent.prototype.addProductToCart = function (product, productQuanity) {
        var counter = 0;
        if (this.productsList.length > 0) {
            for (var i = 0; i < this.productsList.length; i++) {
                if (this.productsList[i].productId == product.productId) {
                    this.productsList[i].productQuantity += parseInt(productQuantity);
                    this.productsList[i].amount = parseInt(this.productsList[i].price) * parseInt(this.productsList[i].productQuantity);
                    this.productsList.push(this.productsList[i]);
                    counter++;
                }
            }
        }
        if (counter === 0) {
            product.productQuantity = productQuanity;
            product.amount = parseInt(product.price) * parseInt(productQuanity);
            this.productsList.push(product);
        }
        document.getElementById("productNameFilterForm").reset();
        $("#productFilter").modal('hide');
    };
    AddOrderPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllCustomers();
        this.getAllProducts();
        this.productProvider.productNameFilter(this.searchTerm$)
            .subscribe(function (res) {
            if (res.status === 200) {
                _this.filteredProductsList = res.product;
            }
        });
    };
    AddOrderPageComponent = __decorate([
        core_1.Component({
            selector: 'add-order-page',
            templateUrl: './app/pages/order/add/app.order.add.page.component.html',
            styleUrls: ['./app/pages/order/add/app.order.add.page.component.css'],
            providers: [app_customer_provider_1.AppCustomerProvider, app_product_provider_1.ProductProvider]
        }), 
        __metadata('design:paramtypes', [app_customer_provider_1.AppCustomerProvider, router_1.Router, angular2_toaster_1.ToasterService, app_product_provider_1.ProductProvider])
    ], AddOrderPageComponent);
    return AddOrderPageComponent;
}());
exports.AddOrderPageComponent = AddOrderPageComponent;
//# sourceMappingURL=app.order.add.page.component.js.map