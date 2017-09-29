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
var app_order_status_1 = require('../../common/app.order.status');
var OrderStatusParser = (function () {
    function OrderStatusParser() {
    }
    OrderStatusParser.prototype.transform = function (record) {
        if (record !== undefined) {
            for (var _i = 0, ORDERSTATUS_1 = app_order_status_1.ORDERSTATUS; _i < ORDERSTATUS_1.length; _i++) {
                var status_1 = ORDERSTATUS_1[_i];
                if (status_1.id === parseInt(record)) {
                    return status_1.value;
                }
            }
        }
    };
    OrderStatusParser = __decorate([
        core_1.Pipe({
            name: 'orderStatusParser'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderStatusParser);
    return OrderStatusParser;
}());
exports.OrderStatusParser = OrderStatusParser;
//# sourceMappingURL=app.order.status.parser.js.map