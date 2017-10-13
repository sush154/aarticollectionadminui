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
var app_states_1 = require('../../common/app.states');
var StateParser = (function () {
    function StateParser() {
    }
    StateParser.prototype.transform = function (record) {
        if (record !== undefined) {
            for (var _i = 0, STATES_1 = app_states_1.STATES; _i < STATES_1.length; _i++) {
                var state = STATES_1[_i];
                if (state.id == record) {
                    return state.value;
                }
            }
        }
    };
    StateParser = __decorate([
        core_1.Pipe({
            name: 'stateParser'
        }), 
        __metadata('design:paramtypes', [])
    ], StateParser);
    return StateParser;
}());
exports.StateParser = StateParser;
//# sourceMappingURL=app.state.parser.js.map