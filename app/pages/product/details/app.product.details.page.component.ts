import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import {URL} from '../../../util/app.service.url';
import {CMSURL} from '../../../util/app.service.url';

import {ToasterService} from 'angular2-toaster';
import {ProductProvider} from '../../../providers/product/app.product.provider';
import { FileUploader } from 'ng2-file-upload';
import { CategoryProvider } from "../../../providers/category/app.category.provider";

@Component({
    selector : 'product-details-page',
    templateUrl : './app/pages/product/details/app.product.details.page.component.html',
    styleUrls : ['./app/pages/product/details/app.product.details.page.component.css'],
    providers : [ProductProvider, CategoryProvider]
})

export class ProductDetailsPageComponent implements OnInit{

    private productDetails : any = {};
    private categoryDetails : any = {};
    private selectedProductId : string;
    private imagesList : any;
    private loading : boolean = false;
    private uploader : FileUploader;
    private editableProduct : any = {};
    private categoriesList : any;
    private selectedCategory : any;
    private displayCategories : boolean = false;

    constructor(private toastrService : ToasterService,
                private currentRoute : ActivatedRoute,
                private location : Location,
                private productProvider : ProductProvider,
                private router : Router,
                private sanitizer: DomSanitizer,
                private categoryProvider : CategoryProvider){}

    /*
    *   This method navigates back to previous page
    */
    private goBack() : void {
        this.location.back();
    }

    /*
    *   This method retrieves product details
    */
    getProductDetails() : void {
        this.loading = true;
        this.currentRoute.params.subscribe(params => {
            this.selectedProductId = params['id'];
        });

        this.productProvider.getProductDetails(this.selectedProductId).then(res => {
            this.loading = false;
            if(res.status === 200){
                this.productDetails = res.product;
                this.categoryDetails = res.product.category;
                this.imagesList = res.product.images;
                //this.getImagesList(this.productDetails._id);
                let url = URL + "/product/addImage/"+this.productDetails._id;
                this.uploader = new FileUploader({url:url});
            }else if(res.status === 401){
                this.router.navigate(['/login']);
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        })
    }

    /*
    *   This method retrieves images list of the selected product
    */
    getImagesList(productId : any) : void {
        this.loading = true;
        this.productProvider.getImagesList(productId).then(res => {
            this.loading = false;
            this.imagesList = res;
        })
    }

    private saveProductDetails() : void {
        this.loading = true;
        this.productProvider.updateProductDetails(this.productDetails).then((res) => {
            this.loading = false;
            if(res.status === 200){
                this.toastrService.pop('success', 'Details Saved Successfully !', 'Product Details have been saved successfully !');
                this.getProductDetails();
            }else if(res.status === 401){
                this.router.navigate(['/login']);
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    }

    private addImages() : void {
        this.loading = true;
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = (item, response, status, header) => {
          if(JSON.parse(response).data.status === 200){
            this.loading = false;
            this.getImagesList(this.productDetails._id);
          }
        }
    }
    private editDetails(pd : any) : void {
        this.editableProduct._id = this.productDetails._id;
        this.editableProduct.productId = this.productDetails.productId;
        this.editableProduct.productName = this.productDetails.productName;
        this.editableProduct.description = this.productDetails.description;
        this.editableProduct.category = this.categoryDetails._id;
        this.selectedCategory = this.categoryDetails.categoryName;
        
        let uhl : string = '';
        for(let i= 0; i < this.productDetails.highlights.length; i++){
        
            uhl = uhl + this.productDetails.highlights[i] ;
            if(i < this.productDetails.highlights.length - 1){
                uhl = uhl + ','
            }           

            
        }
        this.editableProduct.highlights = uhl;
        

        let ucv : string = '';
        for(let i=0; i< this.productDetails.colorVariants.length; i++){
            ucv = ucv + this.productDetails.colorVariants[i];
            if(i < this.productDetails.colorVariants.length - 1){
                ucv = ucv + ',';
            }
        }

        this.editableProduct.colorVariants = ucv;
    }

    private getCategoriesList() : void {
        this.loading = true;
        this.categoryProvider.getAllCategories().then(res => {
            this.loading = false;
            if(res.status === 200){
                this.categoriesList = res.category;
            }else if(res.status === 401){
                this.router.navigate(['/login']);
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        })
    }

    private selectCategory(category : any) : void {
        this.editableProduct.category = category._id;
        this.selectedCategory = category.categoryName;
        this.displayCategories = false;
    }

    private updateProductDetails(updatedProduct : any) : void {
        this.loading = true;
        let highlightArr : any = [];
        
        for(let hl of updatedProduct.highlights.split(',')){
            highlightArr.push(hl);
        }
        updatedProduct.highlights = highlightArr;

        let colorArr : any = [];
        for(let cv of updatedProduct.colorVariants.split(',')){
            colorArr.push(cv);
        }
        updatedProduct.colorVariants = colorArr;
        
        this.productProvider.updateProductDetails(updatedProduct).then((res) => {
            this.loading = false;
            if(res.status === 200){
                this.toastrService.pop('success', 'Product Details Updated !', 'Product Details are updated successfully !');
                $("#editProductDetails").modal('hide');
                this.getProductDetails();
            }else if(res.status === 401){
                this.router.navigate(['/login']);
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        })
    }

    private getImageFromCMS(imagePath : any) : String {
        return CMSURL + "/getImg/"+ imagePath;
    }

    ngOnInit() : void {
        this.getProductDetails();
        this.getCategoriesList();
    }
}