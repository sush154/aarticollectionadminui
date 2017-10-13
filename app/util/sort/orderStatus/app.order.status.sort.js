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
var core_1 = require("@angular/core");
var OrderStatusSort = (function () {
    function OrderStatusSort() {
    }
    OrderStatusSort.prototype.transform = function (records) {
        var finalArr = [];
        if (records !== undefined) {
            var newArr = [];
            var pendingArr = [];
            var shippedArr = [];
            var completeArr = [];
            var cancelledArr = [];
            var pickedUpArr = [];
            for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
                var record = records_1[_i];
                if (record.orderStatus === "0") {
                    newArr.push(record);
                }
                if (record.orderStatus === "1") {
                    pendingArr.push(record);
                }
                if (record.orderStatus === "2") {
                    shippedArr.push(record);
                }
                if (record.orderStatus === "3") {
                    completeArr.push(record);
                }
                if (record.orderStatus === "4") {
                    cancelledArr.push(record);
                }
                if (record.orderStatus === "5") {
                    pickedUpArr.push(record);
                }
            }
            if (newArr.length > 0) {
                for (var i = 0; i < newArr.length; i++) {
                    finalArr.push(newArr[i]);
                }
            }
            if (pendingArr.length > 0) {
                for (var _a = 0, pendingArr_1 = pendingArr; _a < pendingArr_1.length; _a++) {
                    var pending = pendingArr_1[_a];
                    finalArr.push(pending);
                }
            }
            if (cancelledArr.length > 0) {
                for (var _b = 0, cancelledArr_1 = cancelledArr; _b < cancelledArr_1.length; _b++) {
                    var cancel = cancelledArr_1[_b];
                    finalArr.push(cancel);
                }
            }
            if (shippedArr.length > 0) {
                for (var _c = 0, shippedArr_1 = shippedArr; _c < shippedArr_1.length; _c++) {
                    var ship = shippedArr_1[_c];
                    finalArr.push(ship);
                }
            }
            if (pickedUpArr.length > 0) {
                for (var _d = 0, pickedUpArr_1 = pickedUpArr; _d < pickedUpArr_1.length; _d++) {
                    var pick = pickedUpArr_1[_d];
                    finalArr.push(pick);
                }
            }
            if (completeArr.length > 0) {
                for (var _e = 0, completeArr_1 = completeArr; _e < completeArr_1.length; _e++) {
                    var complete = completeArr_1[_e];
                    finalArr.push(complete);
                }
            }
        }
        return finalArr;
    };
    OrderStatusSort = __decorate([
        core_1.Pipe({
            name: "orderStatusSort"
        }), 
        __metadata('design:paramtypes', [])
    ], OrderStatusSort);
    return OrderStatusSort;
}());
exports.OrderStatusSort = OrderStatusSort;
//# sourceMappingURL=app.order.status.sort.js.map