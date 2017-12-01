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
var router_1 = require('@angular/router');
require('rxjs/add/operator/switchMap');
var common_1 = require('@angular/common');
var angular2_toaster_1 = require('angular2-toaster');
var app_product_provider_1 = require('../../../providers/product/app.product.provider');
var ProductDetailsPageComponent = (function () {
    function ProductDetailsPageComponent(toastrService, currentRoute, location, productProvider) {
        this.toastrService = toastrService;
        this.currentRoute = currentRoute;
        this.location = location;
        this.productProvider = productProvider;
        this.productDetails = {};
        this.loading = false;
    }
    /*
    *   This method navigates back to previous page
    */
    ProductDetailsPageComponent.prototype.goBack = function () {
        this.location.back();
    };
    /*
    *   This method retrieves product details
    */
    ProductDetailsPageComponent.prototype.getProductDetails = function () {
        var _this = this;
        this.loading = true;
        this.currentRoute.params.subscribe(function (params) {
            _this.selectedProductId = params['id'];
        });
        this.productProvider.getProductDetails(this.selectedProductId).then(function (res) {
            _this.loading = false;
            if (res.status === 200) {
                _this.productDetails = res.product;
                _this.getImagesList(_this.productDetails._id);
            }
            else if (res.status === 401) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    /*
    *   This method retrieves images list of the selected product
    */
    ProductDetailsPageComponent.prototype.getImagesList = function (productId) {
        var _this = this;
        this.loading = true;
        this.productProvider.getImagesList(productId).then(function (res) {
            _this.loading = false;
            _this.imagesList = res;
        });
    };
    ProductDetailsPageComponent.prototype.ngOnInit = function () {
        this.getProductDetails();
    };
    ProductDetailsPageComponent = __decorate([
        core_1.Component({
            selector: 'product-details-page',
            templateUrl: './app/pages/product/details/app.product.details.page.component.html',
            styleUrls: ['./app/pages/product/details/app.product.details.page.component.css'],
            providers: [app_product_provider_1.ProductProvider]
        }), 
        __metadata('design:paramtypes', [angular2_toaster_1.ToasterService, router_1.ActivatedRoute, common_1.Location, app_product_provider_1.ProductProvider])
    ], ProductDetailsPageComponent);
    return ProductDetailsPageComponent;
}());
exports.ProductDetailsPageComponent = ProductDetailsPageComponent;
//# sourceMappingURL=app.product.details.page.component.js.map