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
var angular2_toaster_1 = require('angular2-toaster');
var app_order_provider_1 = require('../../providers/order/app.order.provider');
var app_product_provider_1 = require('../../providers/product/app.product.provider');
var app_order_sort_chart_1 = require('../../util/sort/orderChart/app.order.sort.chart');
var router_1 = require('@angular/router');
var AppDashboardPageComponent = (function () {
    function AppDashboardPageComponent(orderProvider, sortOrderForChart, productProvider, toastrService, router) {
        this.orderProvider = orderProvider;
        this.sortOrderForChart = sortOrderForChart;
        this.productProvider = productProvider;
        this.toastrService = toastrService;
        this.router = router;
        this.orders = [];
        this.newOrdersCount = 0;
        this.totalProductsCount = 0;
        this.totalIncomeTillDate = 0;
        this.loading = false;
    }
    AppDashboardPageComponent.prototype.getOrderCountAndIncome = function () {
        var _this = this;
        this.orderProvider.getOrderCountAndIncome().then(function (res) {
            if (res.status === 200) {
                _this.totalOrdersCount = res.data.totalCount;
                _this.currentMonthOrderCount = res.data.currentMonthOrder;
                _this.currentMonthIncome = res.data.currentMonthIncome;
            }
            else if (res.status === 401) {
                _this.router.navigate(['/login']);
            }
        });
    };
    AppDashboardPageComponent.prototype.getNewOrdersCount = function () {
        var _this = this;
        this.orderProvider.getNewOrderCount().then(function (res) {
            if (res.status === 200) {
                _this.newOrdersCount = res.order;
            }
            else if (res.status === 401) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    AppDashboardPageComponent.prototype.getTotalProductsCount = function () {
        var _this = this;
        this.productProvider.getTotalProductsCount().then(function (res) {
            if (res.status === 200) {
                _this.totalProductsCount = res.product;
            }
            else if (res.status === 401) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    AppDashboardPageComponent.prototype.getTotalIncomeThisYear = function () {
        var _this = this;
        this.orderProvider.getIncomeThisYear().then(function (res) {
            if (res.status === 200) {
                _this.totalIncomeTillDate = res.data.totalIncome;
            }
            else if (res.status === 401) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    AppDashboardPageComponent.prototype.populateChart = function () {
        var _this = this;
        this.orderProvider.getAllOrders().then(function (res) {
            if (res.status === 200) {
                var sortedOrders = _this.sortOrderForChart.sortOrderMonthly(res.order);
                for (var i = 1; i < 13; i++) {
                    if (sortedOrders[i]) {
                        _this.orders.push(sortedOrders[i]);
                    }
                    else {
                        _this.orders.push(0);
                    }
                }
                /* Populating options for Chart - Starts*/
                _this.options = {
                    title: { text: 'Orders' },
                    xAxis: {
                        title: {
                            text: 'Month'
                        },
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },
                    yAxis: {
                        title: {
                            text: 'Order in Volume'
                        }
                    },
                    tooltip: {
                        /*headerFormat : '<b>Order</b> <br />',
                        pointFormat : '{point.x} = {point.y}'*/
                        crosshairs: true,
                        shared: true,
                        pointFormat: 'Order = {point.y}'
                    },
                    responsive: {
                        rules: {
                            condition: {
                                minWidth: 1000
                            }
                        }
                    },
                    series: [{
                            name: 'Orders',
                            data: _this.orders
                        }]
                };
            }
            else if (res.status === 401) {
                _this.router.navigate(['/login']);
            }
        });
    };
    AppDashboardPageComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.populateChart();
        this.getOrderCountAndIncome();
        this.getNewOrdersCount();
        this.getTotalProductsCount();
        this.getTotalIncomeThisYear();
        this.loading = false;
    };
    AppDashboardPageComponent = __decorate([
        core_1.Component({
            selector: 'dashboard-page',
            templateUrl: './app/pages/dashboard/app.dashboard.page.component.html',
            styleUrls: ['./app/pages/dashboard/app.dashboard.page.component.css'],
            providers: [app_order_provider_1.OrderProvider, app_order_sort_chart_1.SortOrderForChart]
        }), 
        __metadata('design:paramtypes', [app_order_provider_1.OrderProvider, app_order_sort_chart_1.SortOrderForChart, app_product_provider_1.ProductProvider, angular2_toaster_1.ToasterService, router_1.Router])
    ], AppDashboardPageComponent);
    return AppDashboardPageComponent;
}());
exports.AppDashboardPageComponent = AppDashboardPageComponent;
//# sourceMappingURL=app.dashboard.page.component.js.map