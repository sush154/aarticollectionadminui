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
var InputSelectBoxComponent = (function () {
    function InputSelectBoxComponent() {
        this.displayCustomerDropDown = false;
    }
    InputSelectBoxComponent.prototype.selectCustomer = function (dropdown) {
        $("#customer").val(dropdown.customerName + ", " + dropdown.city);
        $("#dropdownId").val(dropdown._id);
        this.displayCustomerDropDown = false;
    };
    InputSelectBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], InputSelectBoxComponent.prototype, "dropdownlist", void 0);
    InputSelectBoxComponent = __decorate([
        core_1.Component({
            selector: 'input-select-box',
            templateUrl: './app/modules/input-selectbox/app.input.select.box.component.html',
            styleUrls: ['./app/modules/input-selectbox/app.input.select.box.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], InputSelectBoxComponent);
    return InputSelectBoxComponent;
}());
exports.InputSelectBoxComponent = InputSelectBoxComponent;
//# sourceMappingURL=app.input.select.box.component.js.map