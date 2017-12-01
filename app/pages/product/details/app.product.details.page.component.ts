import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common';

import {ToasterService} from 'angular2-toaster';
import {ProductProvider} from '../../../providers/product/app.product.provider';

@Component({
    selector : 'product-details-page',
    templateUrl : './app/pages/product/details/app.product.details.page.component.html',
    styleUrls : ['./app/pages/product/details/app.product.details.page.component.css'],
    providers : [ProductProvider]
})

export class ProductDetailsPageComponent implements OnInit{

    private productDetails : any = {};
    private selectedProductId : string;
    private imagesList : any;
    private loading : boolean = false;

    constructor(private toastrService : ToasterService,
                private currentRoute : ActivatedRoute,
                private location : Location,
                private productProvider : ProductProvider){}

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
                this.getImagesList(this.productDetails._id);
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

    ngOnInit() : void {
        this.getProductDetails();
    }
}