import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToasterService} from 'angular2-toaster';
import {IMyDpOptions} from 'mydatepicker';
import {Location} from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { FileUploader } from 'ng2-file-upload';
import {URL} from '../../../util/app.service.url';
import { DomSanitizer } from '@angular/platform-browser';
import {PARENTCATEGORY} from '../../../common/app.parent.category';

import {ProductProvider} from '../../../providers/product/app.product.provider';
import {CategoryProvider} from '../../../providers/category/app.category.provider';

@Component({
    selector : 'add-product-page',
    templateUrl : './app/pages/product/add/app.product.add.page.component.html',
    styleUrls : ['./app/pages/product/add/app.product.add.page.component.css'],
    providers : [ToasterService, ProductProvider, CategoryProvider]
})

export class AddProductPageComponent implements OnInit{

    private newProduct : any = {};
    private categoriesList : any;
    private myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
    };
    private loading : boolean = false;
    private firstSection : boolean = true;
    private secondSection : boolean = false;
    private thirdSection : boolean = false;
    private displayCategories : boolean = false;
    private categoriesName = new Subject<string>();
    private newCategory : any = {};
    private selectedCategory : string;
    private imagesList : any;
    private uploader : FileUploader;
    private updatedProduct : any = {};
    private highlights : any;
    private parentCategoryList : any = PARENTCATEGORY;

    constructor(private router : Router,
                private location : Location,
                private toastrService : ToasterService,
                private productProvider : ProductProvider,
                private categoryProvider : CategoryProvider,
                private sanitizer: DomSanitizer){}



    private goBack() : void {
        this.location.back();
    }

    private addCategory() : void {
        this.loading = true;
        this.categoryProvider.addNewCategory(this.newCategory).then(res => {
            this.loading = false;
            if(res.status === 200){
                this.toastrService.pop('success', 'Category Added !', 'New Category has been added !');

                this.getAllCategories();

                (<HTMLFormElement>document.getElementById("addCategoryForm")).reset();
                $("#addCategoryModal").modal('hide');
            }else if(res.status === 401){
                this.router.navigate(['/login']);
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        })
    }

    private getAllCategories() : void {
        this.loading = true;
        this.categoryProvider.getAllCategories().then(res => {
            if(res.status === 200){
                this.categoriesList = res.category;
            }else if(res.status === 401){
                this.router.navigate(['/login']);
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
            this.loading = false;
        });
    }

    private filterCategories() : void {
        this.loading = true;
        this.categoryProvider.filterCategory(this.categoriesName)
            .subscribe((res) => {
                if(res.status === 200) {
                    this.categoriesList  = res.category;
                }else if(res.status === 401){
                    this.router.navigate(['/login']);
                }else {
                    this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
                }
            });
        this.loading = false;
    }

    private addProduct(sectionName : string) : void {
        this.loading = true;
        if(sectionName === 'firstSection'){
            this.productProvider.addProduct(this.newProduct).then((res) => {
                this.loading = false;
                if(res.status === 200){
                    this.newProduct._id = res.product._id;
                    this.updatedProduct._id = this.newProduct._id;
                    this.firstSection = false;
                    this.secondSection = true;
                    let url = URL + "/product/addImage/"+this.newProduct._id;
                    this.uploader = new FileUploader({url:url});
                }else if(res.status === 401){
                    this.router.navigate(['/login']);
                }else {
                    this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
                }
            });
        }
    }

    private addImages() : void {
        this.loading = true;
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = (item, response, status, header) => {
          if(JSON.parse(response).data.status === 200){
            this.loading = false;
            this.getImagesList(this.newProduct._id);
          }
        }
    }

    private getImagesList(productId : any) : void {
        this.loading = true;
        this.productProvider.getImagesList(productId).then(res => {
            this.loading = false;
            this.imagesList = res;
            //console.log(res);
        })
    }

    private selectCategory(category : any) : void {
        this.newProduct.category = category._id;
        this.selectedCategory = category.categoryName;
        this.displayCategories = false;
    }

    private addProductMetaInfo() : void {
        this.loading = true;
        
        let highlightArr : any = [];
        for(let hl of this.updatedProduct.highlights.split(',')){
            highlightArr.push(hl);
        }
        this.updatedProduct.highlights = highlightArr;

        let colorArr : any = [];
        for(let cv of this.updatedProduct.colorVariants.split(',')){
            colorArr.push(cv);
        }
        this.updatedProduct.colorVariants = colorArr;
        
        this.productProvider.updateProductMetaInfo(this.updatedProduct).then(res => {
            this.loading = false;
            if(res.status === 200){
                this.toastrService.pop('success', 'Meta Info Updated', 'Meta Information of Product are updated successfully !');
                this.location.back();
            }else if(res.status === 401){
                this.router.navigate(['/login']);
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    }

    private continue() : void {
        this.firstSection = false;
        this.secondSection = false;
        this.thirdSection = true;
    }

    ngOnInit() : void {

        this.getAllCategories();
        this.newCategory.parentCategory = 0;
        this.filterCategories();
    }
}