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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var app_order_details_page_component_1 = require('./app.order.details.page.component');
var angular2_toaster_1 = require('angular2-toaster');
var mydatepicker_1 = require('mydatepicker');
var app_payment_parser_module_1 = require('../../../util/payment/app.payment.parser.module');
var app_delivery_parser_module_1 = require('../../../util/delivery/app.delivery.parser.module');
var app_state_parser_module_1 = require('../../../util/state/app.state.parser.module');
var app_discount_parser_module_1 = require('../../../util/discount/app.discount.parser.module');
var OrderDetailsPageModule = (function () {
    function OrderDetailsPageModule() {
    }
    OrderDetailsPageModule = __decorate([
        core_1.NgModule({
            imports: [angular2_toaster_1.ToasterModule, common_1.CommonModule, app_payment_parser_module_1.AppPaymentParserModule, app_delivery_parser_module_1.AppDeliveryParserModule, app_state_parser_module_1.StateParserModule,
                forms_1.FormsModule, app_discount_parser_module_1.DiscountParserModule, mydatepicker_1.MyDatePickerModule],
            declarations: [app_order_details_page_component_1.OrderDetailsPageComponent],
            exports: [app_order_details_page_component_1.OrderDetailsPageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], OrderDetailsPageModule);
    return OrderDetailsPageModule;
}());
exports.OrderDetailsPageModule = OrderDetailsPageModule;
//# sourceMappingURL=app.order.details.page.module.js.map