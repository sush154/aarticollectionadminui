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
var app_order_provider_1 = require('../../providers/order/app.order.provider');
var app_order_sort_chart_1 = require('../../util/sort/orderChart/app.order.sort.chart');
var AppDashboardPageComponent = (function () {
    function AppDashboardPageComponent(orderProvider, sortOrderForChart) {
        this.orderProvider = orderProvider;
        this.sortOrderForChart = sortOrderForChart;
        this.orders = [];
    }
    AppDashboardPageComponent.prototype.getOrderCountAndIncome = function () {
        var _this = this;
        this.orderProvider.getOrderCountAndIncome().then(function (res) {
            if (res.status === 200) {
                _this.totalOrdersCount = res.data.totalCount;
                _this.currentMonthOrderCount = res.data.currentMonthOrder;
                _this.currentMonthIncome = res.data.currentMonthIncome;
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
        });
    };
    AppDashboardPageComponent.prototype.ngOnInit = function () {
        this.populateChart();
        this.getOrderCountAndIncome();
    };
    AppDashboardPageComponent = __decorate([
        core_1.Component({
            selector: 'dashboard-page',
            templateUrl: './app/pages/dashboard/app.dashboard.page.component.html',
            styleUrls: ['./app/pages/dashboard/app.dashboard.page.component.css'],
            providers: [app_order_provider_1.OrderProvider, app_order_sort_chart_1.SortOrderForChart]
        }), 
        __metadata('design:paramtypes', [app_order_provider_1.OrderProvider, app_order_sort_chart_1.SortOrderForChart])
    ], AppDashboardPageComponent);
    return AppDashboardPageComponent;
}());
exports.AppDashboardPageComponent = AppDashboardPageComponent;
//# sourceMappingURL=app.dashboard.page.component.js.map