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
var app_inputtag_component_1 = require('./app.inputtag.component');
;
var tag_input_item_component_1 = require('./tag-input-item.component');
var InputTagModule = (function () {
    function InputTagModule() {
    }
    InputTagModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [app_inputtag_component_1.TagInputComponent, tag_input_item_component_1.TagInputItemComponent],
            exports: [app_inputtag_component_1.TagInputComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], InputTagModule);
    return InputTagModule;
}());
exports.InputTagModule = InputTagModule;
//# sourceMappingURL=app.inputtag.module.js.map