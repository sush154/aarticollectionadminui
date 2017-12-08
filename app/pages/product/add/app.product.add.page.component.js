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
var angular2_toaster_1 = require('angular2-toaster');
var common_1 = require('@angular/common');
var Subject_1 = require('rxjs/Subject');
var ng2_file_upload_1 = require('ng2-file-upload');
var app_service_url_1 = require('../../../util/app.service.url');
var platform_browser_1 = require('@angular/platform-browser');
var app_parent_category_1 = require('../../../common/app.parent.category');
var app_product_provider_1 = require('../../../providers/product/app.product.provider');
var app_category_provider_1 = require('../../../providers/category/app.category.provider');
var AddProductPageComponent = (function () {
    function AddProductPageComponent(router, location, toastrService, productProvider, categoryProvider, sanitizer) {
        this.router = router;
        this.location = location;
        this.toastrService = toastrService;
        this.productProvider = productProvider;
        this.categoryProvider = categoryProvider;
        this.sanitizer = sanitizer;
        this.newProduct = {};
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
        };
        this.loading = false;
        this.firstSection = true;
        this.secondSection = false;
        this.thirdSection = false;
        this.displayCategories = false;
        this.categoriesName = new Subject_1.Subject();
        this.newCategory = {};
        this.updatedProduct = {};
        this.parentCategoryList = app_parent_category_1.PARENTCATEGORY;
    }
    AddProductPageComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddProductPageComponent.prototype.addCategory = function () {
        var _this = this;
        this.loading = true;
        this.categoryProvider.addNewCategory(this.newCategory).then(function (res) {
            _this.loading = false;
            if (res.status === 200) {
                _this.toastrService.pop('success', 'Category Added !', 'New Category has been added !');
                _this.getAllCategories();
                document.getElementById("addCategoryForm").reset();
                $("#addCategoryModal").modal('hide');
            }
            else if (res.status === 401) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    AddProductPageComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.loading = true;
        this.categoryProvider.getAllCategories().then(function (res) {
            if (res.status === 200) {
                _this.categoriesList = res.category;
            }
            else if (res.status === 401) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
            _this.loading = false;
        });
    };
    AddProductPageComponent.prototype.filterCategories = function () {
        var _this = this;
        this.loading = true;
        this.categoryProvider.filterCategory(this.categoriesName)
            .subscribe(function (res) {
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
        this.loading = false;
    };
    AddProductPageComponent.prototype.addProduct = function (sectionName) {
        var _this = this;
        this.loading = true;
        if (sectionName === 'firstSection') {
            this.productProvider.addProduct(this.newProduct).then(function (res) {
                _this.loading = false;
                if (res.status === 200) {
                    _this.newProduct._id = res.product._id;
                    _this.updatedProduct._id = _this.newProduct._id;
                    _this.firstSection = false;
                    _this.secondSection = true;
                    var url = app_service_url_1.URL + "/product/addImage/" + _this.newProduct._id;
                    _this.uploader = new ng2_file_upload_1.FileUploader({ url: url });
                }
                else if (res.status === 401) {
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
                }
            });
        }
    };
    AddProductPageComponent.prototype.addImages = function () {
        var _this = this;
        this.loading = true;
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function (item, response, status, header) {
            if (JSON.parse(response).data.status === 200) {
                _this.loading = false;
                _this.getImagesList(_this.newProduct._id);
            }
        };
    };
    AddProductPageComponent.prototype.getImagesList = function (productId) {
        var _this = this;
        this.loading = true;
        this.productProvider.getImagesList(productId).then(function (res) {
            _this.loading = false;
            _this.imagesList = res;
            //console.log(res);
        });
    };
    AddProductPageComponent.prototype.selectCategory = function (category) {
        this.newProduct.category = category._id;
        this.selectedCategory = category.categoryName;
        this.displayCategories = false;
    };
    AddProductPageComponent.prototype.addProductMetaInfo = function () {
        var _this = this;
        this.loading = true;
        var highlightArr = [];
        if (this.updatedProduct.highlights) {
            for (var _i = 0, _a = this.updatedProduct.highlights.split(','); _i < _a.length; _i++) {
                var hl = _a[_i];
                highlightArr.push(hl);
            }
        }
        this.updatedProduct.highlights = highlightArr;
        var colorArr = [];
        if (this.updatedProduct.colorVariants) {
            for (var _b = 0, _c = this.updatedProduct.colorVariants.split(','); _b < _c.length; _b++) {
                var cv = _c[_b];
                colorArr.push(cv);
            }
        }
        this.updatedProduct.colorVariants = colorArr;
        this.productProvider.updateProductMetaInfo(this.updatedProduct).then(function (res) {
            _this.loading = false;
            if (res.status === 200) {
                _this.toastrService.pop('success', 'Meta Info Updated', 'Meta Information of Product are updated successfully !');
                _this.location.back();
            }
            else if (res.status === 401) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    };
    AddProductPageComponent.prototype.continue = function () {
        this.firstSection = false;
        this.secondSection = false;
        this.thirdSection = true;
    };
    AddProductPageComponent.prototype.ngOnInit = function () {
        this.getAllCategories();
        this.newCategory.parentCategory = 0;
        this.filterCategories();
    };
    AddProductPageComponent = __decorate([
        core_1.Component({
            selector: 'add-product-page',
            templateUrl: './app/pages/product/add/app.product.add.page.component.html',
            styleUrls: ['./app/pages/product/add/app.product.add.page.component.css'],
            providers: [angular2_toaster_1.ToasterService, app_product_provider_1.ProductProvider, app_category_provider_1.CategoryProvider]
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location, angular2_toaster_1.ToasterService, app_product_provider_1.ProductProvider, app_category_provider_1.CategoryProvider, platform_browser_1.DomSanitizer])
    ], AddProductPageComponent);
    return AddProductPageComponent;
}());
exports.AddProductPageComponent = AddProductPageComponent;
//# sourceMappingURL=app.product.add.page.component.js.map