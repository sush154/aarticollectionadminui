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
var app_order_provider_1 = require('../../../providers/order/app.order.provider');
var OrderListPageComponent = (function () {
    function OrderListPageComponent(orderProvider, router) {
        this.orderProvider = orderProvider;
        this.router = router;
        this.loading = false;
    }
    OrderListPageComponent.prototype.populateOrdersList = function () {
        var _this = this;
        this.orderProvider.getAllOrders().then(function (res) {
            if (res.status === 200) {
                _this.ordersList = res.order;
            }
        });
    };
    OrderListPageComponent.prototype.openOrderDetails = function (orderId) {
        this.router.navigate(['/orders', orderId]);
    };
    OrderListPageComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.populateOrdersList();
        this.loading = false;
    };
    OrderListPageComponent = __decorate([
        core_1.Component({
            selector: 'order-list-page',
            templateUrl: './app/pages/order/list/app.order.list.page.component.html',
            styleUrls: ['./app/pages/order/list/app.order.list.page.component.css'],
            providers: [app_order_provider_1.OrderProvider]
        }), 
        __metadata('design:paramtypes', [app_order_provider_1.OrderProvider, router_1.Router])
    ], OrderListPageComponent);
    return OrderListPageComponent;
}());
exports.OrderListPageComponent = OrderListPageComponent;
//# sourceMappingURL=app.order.list.page.component.js.map