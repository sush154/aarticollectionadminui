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
var common_1 = require('@angular/common');
var app_customer_provider_1 = require('../../../providers/customer/app.customer.provider');
var app_product_provider_1 = require('../../../providers/product/app.product.provider');
var app_order_provider_1 = require('../../../providers/order/app.order.provider');
var Subject_1 = require('rxjs/Subject');
var app_payment_type_1 = require('../../../common/app.payment.type');
var app_payment_status_1 = require('../../../common/app.payment.status');
var app_order_type_1 = require('../../../common/app.order.type');
var app_delivery_type_1 = require('../../../common/app.delivery.type');
var AddOrderPageComponent = (function () {
    function AddOrderPageComponent(customerProvider, router, toastrService, productProvider, orderProvider, location) {
        this.customerProvider = customerProvider;
        this.router = router;
        this.toastrService = toastrService;
        this.productProvider = productProvider;
        this.orderProvider = orderProvider;
        this.location = location;
        this.paymentTypeList = app_payment_type_1.PAYMENTTYPE;
        this.paymentStatusList = app_payment_status_1.PAYMENTSTATUS;
        this.orderTypeList = app_order_type_1.ORDERTYPE;
        this.deliveryTypeList = app_delivery_type_1.DELIVERYTYPE;
        this.productsList = [];
        this.searchTerm$ = new Subject_1.Subject();
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
        };
        this.newOrder = {};
        this.awaitingPayment = true;
        this.partiallyPaid = true;
        this.totalOrderAmount = 0;
        this.transactTrackFlag = false;
    }
    /*
    *   This method formats the date
    */
    AddOrderPageComponent.prototype.formatDate = function (date) {
        return date.formatted;
    };
    /*
    *   This method retrieves all the customers list
    */
    AddOrderPageComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this.customerProvider.getAllCustomers().then(function (res) {
            if (res.status === 200) {
                _this.customersList = res.customer;
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
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
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    /*
    *   This method adds product to cart
    */
    AddOrderPageComponent.prototype.addProductToCart = function (product, productQuantity) {
        if (productQuantity > 0) {
            product.productQuantity = productQuantity;
            product.amount = parseInt(product.price) * productQuantity;
            this.productsList.push(product);
            this.totalOrderAmount = this.totalOrderAmount + parseInt(product.amount);
            document.getElementById("productNameFilterForm").reset();
            $("#productFilter").modal('hide');
        }
    };
    /*
    *   This method enables/disables payment type drop down
    */
    AddOrderPageComponent.prototype.paidSomePart = function (status) {
        if (status === '0') {
            this.awaitingPayment = true;
        }
        else {
            this.awaitingPayment = false;
        }
    };
    /*
    *   This method enables/disables amount paid input box
    */
    AddOrderPageComponent.prototype.populateAmountPaid = function (status) {
        if (status === '1') {
            this.partiallyPaid = false;
            this.newOrder.paymentAmount = 0;
        }
        else if (status === '2') {
            this.partiallyPaid = true;
            this.newOrder.paymentAmount = this.totalOrderAmount;
        }
        else {
            this.partiallyPaid = true;
        }
    };
    /*
    *   This method displays/hide transaction track id input
    */
    AddOrderPageComponent.prototype.paymentTypeTrack = function (paymentType) {
        if (paymentType === '1' || paymentType === '2') {
            this.transactTrackFlag = true;
        }
        else {
            this.transactTrackFlag = false;
        }
    };
    /*
    *   This method adds new order
    */
    AddOrderPageComponent.prototype.addNewOrder = function () {
        var _this = this;
        if (this.newOrder.orderDate !== undefined && this.newOrder.orderDate !== 'undefined') {
            this.newOrder.orderDate = this.formatDate(this.newOrder.orderDate);
        }
        this.newOrder.productIds = [];
        for (var _i = 0, _a = this.productsList; _i < _a.length; _i++) {
            var p = _a[_i];
            /*for(let i=0; i < product.productQuantity; i++){
                this.newOrder.productIds.push(product._id);
            }*/
            var product = {};
            product.productId = p.productId;
            product.productName = p.productName;
            product.price = p.price;
            product.discount = p.discount;
            product.quantity = p.productQuantity;
            this.newOrder.productIds.push(product);
            this.newOrder.amount = this.totalOrderAmount;
        }
        this.orderProvider.addNewOrder(this.newOrder).then(function (res) {
            if (res.status === 200) {
                _this.location.back();
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    AddOrderPageComponent.prototype.goBack = function () {
        this.location.back();
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
        this.newOrder.paymentStatus = '-1';
        this.newOrder.paymentType = '-1';
        this.newOrder.orderType = '-1';
        this.newOrder.deliveryType = '-1';
        this.newOrder.customer = '0';
    };
    AddOrderPageComponent = __decorate([
        core_1.Component({
            selector: 'add-order-page',
            templateUrl: './app/pages/order/add/app.order.add.page.component.html',
            styleUrls: ['./app/pages/order/add/app.order.add.page.component.css'],
            providers: [app_customer_provider_1.AppCustomerProvider, app_product_provider_1.ProductProvider]
        }), 
        __metadata('design:paramtypes', [app_customer_provider_1.AppCustomerProvider, router_1.Router, angular2_toaster_1.ToasterService, app_product_provider_1.ProductProvider, app_order_provider_1.OrderProvider, common_1.Location])
    ], AddOrderPageComponent);
    return AddOrderPageComponent;
}());
exports.AddOrderPageComponent = AddOrderPageComponent;
//# sourceMappingURL=app.order.add.page.component.js.map