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
var SortOrderForChart = (function () {
    function SortOrderForChart() {
    }
    SortOrderForChart.prototype.sortOrderMonthly = function (orders) {
        var finalArray = [];
        var monthlyArr = [];
        if (orders !== undefined) {
            for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
                var order = orders_1[_i];
                if (monthlyArr[parseInt(order.orderDate.split("T")[0].split("-")[1])]) {
                    monthlyArr[parseInt(order.orderDate.split("T")[0].split("-")[1])].push(order);
                }
                else {
                    monthlyArr[parseInt(order.orderDate.split("T")[0].split("-")[1])] = new Array();
                    monthlyArr[parseInt(order.orderDate.split("T")[0].split("-")[1])].push(order);
                }
            }
        }
        for (var i = 0; i < monthlyArr.length; i++) {
            if (monthlyArr[i]) {
                finalArray[i] = new Array();
                finalArray[i].push(monthlyArr[i].length);
            }
        }
        return finalArray;
    };
    SortOrderForChart = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SortOrderForChart);
    return SortOrderForChart;
}());
exports.SortOrderForChart = SortOrderForChart;
//# sourceMappingURL=app.order.sort.chart.js.map