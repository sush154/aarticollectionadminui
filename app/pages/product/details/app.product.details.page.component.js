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
var router_2 = require('@angular/router');
require('rxjs/add/operator/switchMap');
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var app_service_url_1 = require('../../../util/app.service.url');
var angular2_toaster_1 = require('angular2-toaster');
var app_product_provider_1 = require('../../../providers/product/app.product.provider');
var ng2_file_upload_1 = require('ng2-file-upload');
var app_category_provider_1 = require("../../../providers/category/app.category.provider");
var ProductDetailsPageComponent = (function () {
    function ProductDetailsPageComponent(toastrService, currentRoute, location, productProvider, router, sanitizer, categoryProvider) {
        this.toastrService = toastrService;
        this.currentRoute = currentRoute;
        this.location = location;
        this.productProvider = productProvider;
        this.router = router;
        this.sanitizer = sanitizer;
        this.categoryProvider = categoryProvider;
        this.productDetails = {};
        this.categoryDetails = {};
        this.loading = false;
        this.editableProduct = {};
        this.displayCategories = false;
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
                _this.categoryDetails = res.product.category;
                _this.getImagesList(_this.productDetails._id);
                var url = app_service_url_1.URL + "/product/addImage/" + _this.productDetails._id;
                _this.uploader = new ng2_file_upload_1.FileUploader({ url: url });
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
    ProductDetailsPageComponent.prototype.saveProductDetails = function () {
        var _this = this;
        this.loading = true;
        this.productProvider.updateProductDetails(this.productDetails).then(function (res) {
            _this.loading = false;
            if (res.status === 200) {
                _this.toastrService.pop('success', 'Details Saved Successfully !', 'Product Details have been saved successfully !');
                _this.getProductDetails();
            }
            else if (res.status === 401) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    ProductDetailsPageComponent.prototype.addImages = function () {
        var _this = this;
        this.loading = true;
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function (item, response, status, header) {
            if (JSON.parse(response).data.status === 200) {
                _this.loading = false;
                _this.getImagesList(_this.productDetails._id);
            }
        };
    };
    ProductDetailsPageComponent.prototype.editDetails = function (pd) {
        this.editableProduct._id = this.productDetails._id;
        this.editableProduct.productId = this.productDetails.productId;
        this.editableProduct.productName = this.productDetails.productName;
        this.editableProduct.description = this.productDetails.description;
        this.editableProduct.category = this.categoryDetails._id;
        this.selectedCategory = this.categoryDetails.categoryName;
        var uhl = '';
        for (var i = 0; i < this.productDetails.highlights.length; i++) {
            uhl = uhl + this.productDetails.highlights[i];
            if (i < this.productDetails.highlights.length - 1) {
                uhl = uhl + ',';
            }
        }
        this.editableProduct.highlights = uhl;
        var ucv = '';
        for (var i = 0; i < this.productDetails.colorVariants.length; i++) {
            ucv = ucv + this.productDetails.colorVariants[i];
            if (i < this.productDetails.colorVariants.length - 1) {
                ucv = ucv + ',';
            }
        }
        this.editableProduct.colorVariants = ucv;
    };
    ProductDetailsPageComponent.prototype.getCategoriesList = function () {
        var _this = this;
        this.loading = true;
        this.categoryProvider.getAllCategories().then(function (res) {
            _this.loading = false;
            if (res.status === 200) {
                _this.categoriesList = res.category;
            }
            else if (res.status === 401) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    ProductDetailsPageComponent.prototype.selectCategory = function (category) {
        this.editableProduct.category = category._id;
        this.selectedCategory = category.categoryName;
        this.displayCategories = false;
    };
    ProductDetailsPageComponent.prototype.updateProductDetails = function (updatedProduct) {
        var _this = this;
        this.loading = true;
        var highlightArr = [];
        for (var _i = 0, _a = updatedProduct.highlights.split(','); _i < _a.length; _i++) {
            var hl = _a[_i];
            highlightArr.push(hl);
        }
        updatedProduct.highlights = highlightArr;
        var colorArr = [];
        for (var _b = 0, _c = updatedProduct.colorVariants.split(','); _b < _c.length; _b++) {
            var cv = _c[_b];
            colorArr.push(cv);
        }
        updatedProduct.colorVariants = colorArr;
        this.productProvider.updateProductDetails(updatedProduct).then(function (res) {
            _this.loading = false;
            if (res.status === 200) {
                _this.toastrService.pop('success', 'Product Details Updated !', 'Product Details are updated successfully !');
                $("#editProductDetails").modal('hide');
                _this.getProductDetails();
            }
            else if (res.status === 401) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    ProductDetailsPageComponent.prototype.ngOnInit = function () {
        this.getProductDetails();
        this.getCategoriesList();
    };
    ProductDetailsPageComponent = __decorate([
        core_1.Component({
            selector: 'product-details-page',
            templateUrl: './app/pages/product/details/app.product.details.page.component.html',
            styleUrls: ['./app/pages/product/details/app.product.details.page.component.css'],
            providers: [app_product_provider_1.ProductProvider, app_category_provider_1.CategoryProvider]
        }), 
        __metadata('design:paramtypes', [angular2_toaster_1.ToasterService, router_1.ActivatedRoute, common_1.Location, app_product_provider_1.ProductProvider, router_2.Router, platform_browser_1.DomSanitizer, app_category_provider_1.CategoryProvider])
    ], ProductDetailsPageComponent);
    return ProductDetailsPageComponent;
}());
exports.ProductDetailsPageComponent = ProductDetailsPageComponent;
//# sourceMappingURL=app.product.details.page.component.js.map