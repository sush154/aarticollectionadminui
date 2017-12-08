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
var angular2_toaster_1 = require('angular2-toaster');
var router_1 = require('@angular/router');
var app_product_provider_1 = require('../../../providers/product/app.product.provider');
var ProductsListPageComponent = (function () {
    function ProductsListPageComponent(toastrService, router, productProvider) {
        this.toastrService = toastrService;
        this.router = router;
        this.productProvider = productProvider;
        this.loading = false;
    }
    ProductsListPageComponent.prototype.getProductsList = function () {
        var _this = this;
        this.productProvider.getAllProducts().then(function (res) {
            if (res.status === 200) {
                _this.productsList = res.product;
            }
            else if (res.status === 401) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    ProductsListPageComponent.prototype.navigateToProductDetails = function (productId) {
        this.router.navigate(['/products', productId]);
    };
    ProductsListPageComponent.prototype.lowInQuantity = function (quantity) {
        if (quantity <= 5) {
            return true;
        }
        else {
            return false;
        }
    };
    ProductsListPageComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.getProductsList();
        this.loading = false;
    };
    ProductsListPageComponent = __decorate([
        core_1.Component({
            selector: 'products-list',
            templateUrl: './app/pages/product/list/app.product.list.page.component.html',
            styleUrls: ['./app/pages/product/list/app.product.list.page.component.css'],
            providers: [angular2_toaster_1.ToasterService, app_product_provider_1.ProductProvider]
        }), 
        __metadata('design:paramtypes', [angular2_toaster_1.ToasterService, router_1.Router, app_product_provider_1.ProductProvider])
    ], ProductsListPageComponent);
    return ProductsListPageComponent;
}());
exports.ProductsListPageComponent = ProductsListPageComponent;
//# sourceMappingURL=app.product.list.page.component.js.map