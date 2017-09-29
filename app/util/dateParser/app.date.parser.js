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
var DateParser = (function () {
    function DateParser() {
    }
    DateParser.prototype.transform = function (record) {
        if ((typeof record === 'string') && record !== undefined) {
            var fullDate = record.split("T")[0];
            var yr = fullDate.split("-")[0];
            var mn = fullDate.split("-")[1];
            var dt = parseInt(fullDate.split("-")[2]) + 1;
            return dt + "/" + mn + "/" + yr;
        }
    };
    DateParser = __decorate([
        core_1.Pipe({
            name: 'dateParser'
        }), 
        __metadata('design:paramtypes', [])
    ], DateParser);
    return DateParser;
}());
exports.DateParser = DateParser;
//# sourceMappingURL=app.date.parser.js.map