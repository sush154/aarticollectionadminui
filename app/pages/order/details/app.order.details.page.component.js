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
require('rxjs/add/operator/switchMap');
var common_1 = require('@angular/common');
var angular2_toaster_1 = require('angular2-toaster');
var app_order_provider_1 = require('../../../providers/order/app.order.provider');
var app_courier_provider_1 = require('../../../providers/courier/app.courier.provider');
var app_order_status_1 = require('../../../common/app.order.status');
var app_payment_status_1 = require('../../../common/app.payment.status');
var OrderDetailsPageComponent = (function () {
    function OrderDetailsPageComponent(orderProvider, toastrService, courierProvider, currentRoute, location) {
        this.orderProvider = orderProvider;
        this.toastrService = toastrService;
        this.courierProvider = courierProvider;
        this.currentRoute = currentRoute;
        this.location = location;
        this.orderDetails = {};
        this.customerDetails = {};
        this.paymentStatusList = app_payment_status_1.PAYMENTSTATUS;
        this.disabledSaveButton = false;
        this.disabledAmountPaid = false;
        this.disabledOrderStatusDD = false;
        this.disabledPaymentStatusDD = false;
        this.displayCourierSection = false;
        this.newCourier = {};
        this.productsList = [];
        this.subTotal = 0;
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
        };
    }
    /*
    *   This method populates details of selected order
    */
    OrderDetailsPageComponent.prototype.getOrderDetails = function () {
        var _this = this;
        this.currentRoute.params.subscribe(function (params) {
            _this.selectedOrderId = params['id'];
        });
        this.orderProvider.getOrderDetails(this.selectedOrderId).then(function (res) {
            if (res.status === 200) {
                _this.orderDetails = res.order;
                _this.customerDetails = res.order.customer;
                _this.disableSaveButton();
                _this.disableAmountPaidInput();
                _this.calculateSubTotal(_this.orderDetails);
                //this.sortProductList(this.orderDetails);
                _this.displayCourier(_this.orderDetails.orderStatus);
                _this.populateOrdersList(_this.orderDetails.deliveryType);
                if (!_this.orderDetails.courier) {
                    _this.orderDetails.courier = '0';
                }
                if (_this.orderDetails.orderStatus === '3' || _this.orderDetails.orderStatus === '4'
                    || _this.orderDetails.orderStatus === '5') {
                    _this.disabledOrderStatusDD = true;
                }
                if (_this.orderDetails.paymentStatus === '2' || _this.orderDetails.paymentStatus === '3'
                    || _this.orderDetails.paymentStatus === '4') {
                    _this.disabledPaymentStatusDD = true;
                }
                if (res.order.courier._id !== undefined) {
                    _this.orderDetails.courier = res.order.courier._id;
                }
                else {
                    _this.orderDetails.courier = '0';
                }
                _this.deliveryDateObj = _this.setDate(_this.orderDetails.deliveryDate);
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    /*
    *   This method calculates sub total
    */
    OrderDetailsPageComponent.prototype.calculateSubTotal = function (orderDetails) {
        var st = 0;
        for (var _i = 0, _a = orderDetails.products; _i < _a.length; _i++) {
            var p = _a[_i];
            st = p.quantity * p.price;
            this.subTotal = parseInt(this.subTotal) + parseInt(st);
        }
    };
    /*
    *   This method sorts the products list from order details
    */
    /*sortProductList(orderDetails : any) : void {
        let product : any = {};

        for(let p of orderDetails.products){

            if(this.productsList && this.productsList.length > 0){
                for(let p2 of this.productsList){
                    if(p.productId == p2.productId){
                        p2.quantity = parseInt(p2.quantity) + 1;
                    }
                }
            }else {
                product.productId = p.productId;
                product.productName = p.productName;
                product.category = p.category;
                product.price = p.price;
                product.quantity = 1;
                product.discount = p.discount;
                this.productsList.push(product);
            }
        }
    }*/
    /*
    *   Condition for disabling Save Button
    */
    OrderDetailsPageComponent.prototype.disableSaveButton = function () {
        // Check if Order status - Complete, cancelled, pick up and payment status - paid, cancelled, returned
        if ((this.orderDetails.orderStatus === '3' || this.orderDetails.orderStatus === '4' || this.orderDetails.orderStatus === '5')
            &&
                (this.orderDetails.paymentStatus === '2' || this.orderDetails.paymentStatus === '3' || this.orderDetails.paymentStatus === '4')) {
            this.disabledSaveButton = true;
        }
        else {
            this.disabledSaveButton = false;
        }
    };
    /*
    *   This method provide condition for disabling amount paid input boxes
    */
    OrderDetailsPageComponent.prototype.disableAmountPaidInput = function () {
        if (this.orderDetails.paymentStatus === '2' || this.orderDetails.paymentStatus === '3'
            || this.orderDetails.paymentStatus === '4') {
            this.disabledAmountPaid = true;
        }
        else {
            this.disabledAmountPaid = false;
        }
    };
    OrderDetailsPageComponent.prototype.setDate = function (date) {
        var returnedDate = {};
        if (date === 'default') {
            var dt = new Date();
            returnedDate = { date: {
                    year: dt.getFullYear(),
                    month: dt.getMonth() + 1,
                    day: dt.getDate()
                } };
        }
        else {
            if (date !== undefined) {
                returnedDate = {
                    date: {
                        year: parseInt(date.split("-")[0]),
                        month: parseInt(date.split("-")[1]),
                        day: parseInt(date.split("-")[2]) + 1
                    }
                };
            }
        }
        return returnedDate;
    };
    OrderDetailsPageComponent.prototype.formatDate = function (date) {
        if (date.formatted) {
            return date.formatted;
        }
        else {
            var returnedDate = '';
            if (date.date.month < 10) {
                returnedDate = date.date.day + "/0" + date.date.month + "/" + date.date.year;
            }
            else {
                returnedDate = date.date.day + "/" + date.date.month + "/" + date.date.year;
            }
            return returnedDate;
        }
    };
    /*
    *   This method displays courier section
    */
    OrderDetailsPageComponent.prototype.displayCourier = function (orderStatus) {
        if (orderStatus === '2' || orderStatus === '3') {
            this.displayCourierSection = true;
        }
        else {
            this.displayCourierSection = false;
        }
    };
    /*
    *   This method open popup for new courier
    */
    OrderDetailsPageComponent.prototype.navigateAddCourier = function (dropDownValue) {
        if (dropDownValue === '-1') {
            $("#addCourierModal").modal();
        }
    };
    /*
    *   This method adds new courier
    */
    OrderDetailsPageComponent.prototype.addNewCourier = function () {
        var _this = this;
        this.courierProvider.addNewCourier(this.newCourier).then(function (res) {
            if (res.status === 200) {
                _this.orderDetails.courier = res.Id;
                _this.toastrService.pop('success', 'Courier Added', 'New Courier has been added successfully!');
                _this.getCourierList();
                document.getElementById("addCourierForm").reset();
                $("#addCourierModal").modal('hide');
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    /*
    *   This method updates order details
    */
    OrderDetailsPageComponent.prototype.updateOrderDetails = function () {
        var _this = this;
        if (Object.keys(this.deliveryDateObj).length !== 0) {
            this.orderDetails.deliveryDate = this.formatDate(this.deliveryDateObj);
        }
        else {
            this.orderDetails.deliveryDate = '';
        }
        this.orderProvider.updateOrder(this.orderDetails).then(function (res) {
            if (res.status === 200) {
                _this.toastrService.pop('success', 'Order Updated', 'Order Details are updated successfully!');
                _this.getOrderDetails();
                _this.disableSaveButton();
                _this.disableAmountPaidInput();
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    /*
    *   This method populates couriers list
    */
    OrderDetailsPageComponent.prototype.getCourierList = function () {
        var _this = this;
        this.courierProvider.getCouriersList().then(function (res) {
            if (res.status === 200) {
                _this.courierList = res.courier;
            }
        });
    };
    /*
    *   This method populates orders list, based on delivery type
    *   Display Shipped - for couriered
    *   Display Picked Up - for to be picked up
    */
    OrderDetailsPageComponent.prototype.populateOrdersList = function (deliveryType) {
        var orderL = app_order_status_1.ORDERSTATUS;
        if (deliveryType === '0') {
            for (var i = 0; i < orderL.length; i++) {
                if (orderL[i].id === '2') {
                    orderL.splice(i, 1);
                }
            }
        }
        if (deliveryType === '1') {
            var newOrderL = void 0;
            for (var i = 0; i < orderL.length; i++) {
                if (orderL[i].id === '5') {
                    orderL.splice(i, 1);
                }
            }
        }
        this.orderStatusList = orderL;
    };
    /*
    *   This method prints selected part
    */
    OrderDetailsPageComponent.prototype.printInvoice = function () {
        $("#invoice").print({
            globalStyles: true
        });
    };
    /*
    *   This method navigates back to previous page
    */
    OrderDetailsPageComponent.prototype.goBack = function () {
        this.location.back();
    };
    OrderDetailsPageComponent.prototype.ngOnInit = function () {
        document.body.scrollTop = 0; /* For Chrome, Safari and Opera*/
        document.documentElement.scrollTop = 0; /* For IE and Firefox*/
        this.getOrderDetails();
        this.getCourierList();
    };
    OrderDetailsPageComponent = __decorate([
        core_1.Component({
            selector: 'order-details-page',
            templateUrl: './app/pages/order/details/app.order.details.page.component.html',
            styleUrls: ['./app/pages/order/details/app.order.details.page.component.css'],
            providers: [app_order_provider_1.OrderProvider, app_courier_provider_1.CourierProvider]
        }), 
        __metadata('design:paramtypes', [app_order_provider_1.OrderProvider, angular2_toaster_1.ToasterService, app_courier_provider_1.CourierProvider, router_1.ActivatedRoute, common_1.Location])
    ], OrderDetailsPageComponent);
    return OrderDetailsPageComponent;
}());
exports.OrderDetailsPageComponent = OrderDetailsPageComponent;
//# sourceMappingURL=app.order.details.page.component.js.map