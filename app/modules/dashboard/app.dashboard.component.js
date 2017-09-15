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
var AppDashboardComponent = (function () {
    function AppDashboardComponent() {
        this.orders = [];
    }
    AppDashboardComponent.prototype.ngOnInit = function () {
        this.orders = [12, 32, 106, 45, 89, 56, 34, 73, 12, 34, 34, 77];
        /* Populating options for Chart - Starts*/
        this.options = {
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
                    data: this.orders
                }]
        };
        /* Populating options for Chart - Ends */
    };
    AppDashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './app/modules/dashboard/app.dashboard.component.html',
            styleUrls: ['./app/modules/dashboard/app.dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppDashboardComponent);
    return AppDashboardComponent;
}());
exports.AppDashboardComponent = AppDashboardComponent;
//# sourceMappingURL=app.dashboard.component.js.map