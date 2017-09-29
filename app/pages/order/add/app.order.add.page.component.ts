import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToasterService} from 'angular2-toaster';
import {IMyDpOptions} from 'mydatepicker';
import {AppCustomerProvider} from '../../../providers/customer/app.customer.provider';
import {ProductProvider} from '../../../providers/product/app.product.provider';
import { Subject } from 'rxjs/Subject';

import {PAYMENTTYPE} from '../../../common/app.payment.type';
import {PAYMENTSTATUS} from '../../../common/app.payment.status';

@Component({
    selector : 'add-order-page',
    templateUrl : './app/pages/order/add/app.order.add.page.component.html',
    styleUrls : ['./app/pages/order/add/app.order.add.page.component.css'],
    providers : [AppCustomerProvider, ProductProvider]
})

export class AddOrderPageComponent implements OnInit{

    private customersList : any;
    private paymentTypeList : any = PAYMENTTYPE;
    private paymentStatusList : any = PAYMENTSTATUS;
    private productsList : any = [];
    private filteredProductsList : any;
    private searchTerm$ = new Subject<string>();
    private myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
    };

    constructor(private customerProvider : AppCustomerProvider,
                private router : Router,
                private toastrService : ToasterService,
                private productProvider : ProductProvider){}

    /*
    *   This method retrieves all the customers list
    */
    private getAllCustomers() : void {
        this.customerProvider.getAllCustomers().then((res) => {
            if(res.status === 200) {
                this.customersList = res.customer;
            }
        });
    }

    /*
    *   This method open add customer popup and populate state list
    */
    private navigateAddCustomer(val : any) : void {

        if(val === '1'){
            this.router.navigate(['/customers/addCustomer']);
        }

    }

    /*
    *   This method retrieves all the products for selecting
    */
    private getAllProducts() : void {
        this.productProvider.getAllProducts().then((res) => {
            if(res.status === 200) {
                this.filteredProductsList= res.product;
            }
        });
    }

    /*
    *   This method adds product to cart
    */
    addProductToCart(product : any, productQuanity : number) : void {

        let counter = 0;

        if(this.productsList.length > 0){

            for(let i = 0; i < this.productsList.length; i++){

                if(this.productsList[i].productId == product.productId){
                    
                    this.productsList[i].productQuantity += parseInt(productQuantity);
                    this.productsList[i].amount = parseInt(this.productsList[i].price) * parseInt(this.productsList[i].productQuantity);
                    this.productsList.push(this.productsList[i]);
                    counter++;
                }
            }
        }

        if(counter === 0){
            product.productQuantity = productQuanity;
            product.amount = parseInt(product.price) * parseInt(productQuanity);
            this.productsList.push(product);
        }

        (<HTMLFormElement>document.getElementById("productNameFilterForm")).reset();
        $("#productFilter").modal('hide');
    }

    ngOnInit() : void {
        this.getAllCustomers();
        this.getAllProducts();

        this.productProvider.productNameFilter(this.searchTerm$)
            .subscribe((res) => {
                if(res.status === 200) {
                    this.filteredProductsList  = res.product;
                }
            })
    }
}