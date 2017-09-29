import {Component, OnInit} from '@angular/core';

import {ProductProvider} from '../../../providers/product/app.product.provider';
@Component({
    selector : 'dashboard-products-list',
    templateUrl : './app/pages/dashboard/productsList/app.dashboard.pages.productsList.component.html',
    styleUrls : ['./app/pages/dashboard/productsList/app.dashboard.pages.productsList.component.css'],
    providers : [ProductProvider]
})

export class DashboardProductsListComponent implements OnInit{

    productsList : any;

    constructor(private productProvider : ProductProvider){}

    populateAllProducts() : void {
        this.productProvider.getAllProducts().then((res) => {
            if(res.status === 200) {
                this.productsList = res.product;
            }
        });
    }

    ngOnInit() : void {
        this.populateAllProducts();
    }

}