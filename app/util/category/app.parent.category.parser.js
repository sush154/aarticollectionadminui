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
var app_parent_category_1 = require('../../common/app.parent.category');
var ParentCategoryParser = (function () {
    function ParentCategoryParser() {
    }
    ParentCategoryParser.prototype.transform = function (record) {
        if (record !== undefined) {
            for (var _i = 0, PARENTCATEGORY_1 = app_parent_category_1.PARENTCATEGORY; _i < PARENTCATEGORY_1.length; _i++) {
                var type = PARENTCATEGORY_1[_i];
                if (type.id == record) {
                    return type.value;
                }
            }
        }
    };
    ParentCategoryParser = __decorate([
        core_1.Pipe({
            name: 'parentCategoryParser'
        }), 
        __metadata('design:paramtypes', [])
    ], ParentCategoryParser);
    return ParentCategoryParser;
}());
exports.ParentCategoryParser = ParentCategoryParser;
//# sourceMappingURL=app.parent.category.parser.js.map