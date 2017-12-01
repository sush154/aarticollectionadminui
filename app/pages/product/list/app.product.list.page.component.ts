import {Component, OnInit} from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';

import {ProductProvider} from '../../../providers/product/app.product.provider';

@Component({
    selector : 'products-list',
    templateUrl : './app/pages/product/list/app.product.list.page.component.html',
    styleUrls : ['./app/pages/product/list/app.product.list.page.component.css'],
    providers : [ToasterService, ProductProvider]
})

export class ProductsListPageComponent implements OnInit{

    private productsList : any;
    private loading : boolean = false;

    constructor(private toastrService : ToasterService,
                private router : Router,
                private productProvider : ProductProvider){}

    private getProductsList() : void {
        this.productProvider.getAllProducts().then((res) => {
            if(res.status === 200){
                this.productsList = res.product;
            }else if(res.status === 401){
                this.router.navigate(['/login']);
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        })
    }

    private navigateToProductDetails(productId : any) : void {
        this.router.navigate(['/products', productId]);
    }

    ngOnInit() : void {
        this.loading = true;
        this.getProductsList();
        this.loading = false;
    }
}