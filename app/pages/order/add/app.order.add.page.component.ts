import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToasterService} from 'angular2-toaster';
import {IMyDpOptions} from 'mydatepicker';
import {Location} from '@angular/common';
import {AppCustomerProvider} from '../../../providers/customer/app.customer.provider';
import {ProductProvider} from '../../../providers/product/app.product.provider';
import {OrderProvider} from '../../../providers/order/app.order.provider';
import { Subject } from 'rxjs/Subject';

import {PAYMENTTYPE} from '../../../common/app.payment.type';
import {PAYMENTSTATUS} from '../../../common/app.payment.status';
import {ORDERTYPE} from '../../../common/app.order.type';
import {DELIVERYTYPE} from '../../../common/app.delivery.type';

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
    private orderTypeList : any = ORDERTYPE;
    private deliveryTypeList : any = DELIVERYTYPE;
    private productsList : any = [];
    private filteredProductsList : any;
    private searchTerm$ = new Subject<string>();
    private customerName = new Subject<string>();
    private myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
    };
    private newOrder : any = {};
    private awaitingPayment : boolean = true;
    private partiallyPaid : boolean = true;
    private totalOrderAmount : number = 0;
    private transactTrackFlag : Boolean = false;
    private displayCustomerDropDown : Boolean = false;
    private newCustomerName : string;

    constructor(private customerProvider : AppCustomerProvider,
                private router : Router,
                private toastrService : ToasterService,
                private productProvider : ProductProvider,
                private orderProvider : OrderProvider,
                private location : Location){}

    /*
    *   This method formats the date
    */
    private formatDate(date : any) : string {
        return date.formatted;
    }

    /*
    *   This method retrieves all the customers list
    */
    private getAllCustomers() : void {
        this.customerProvider.getAllCustomers().then((res) => {
            if(res.status === 200) {
                this.customersList = res.customer;
            }else if(res.status === 401){
                this.router.navigate(['/login']);
            }else {
                 this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
             }
        });
    }

    /*
    *   This method open add customer popup and populate state list
    */
    private navigateAddCustomer() : void {
        this.router.navigate(['/customers/addCustomer']);
    }

    /*
    *   This method retrieves all the products for selecting
    */
    private getAllProducts() : void {
        this.productProvider.getAllProducts().then((res) => {
            if(res.status === 200) {
                this.filteredProductsList= res.product;
            }else if(res.status === 401){
                this.router.navigate(['/login']);
            }else {
                 this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
             }
        });
    }

    /*
    *   This method adds product to cart
    */
    private addProductToCart(product : any, productQuantity : number) : void {

        if(productQuantity > 0){
            product.productQuantity = productQuantity;
            product.amount = parseInt(product.price) * productQuantity;
            this.productsList.push(product);
            this.totalOrderAmount = this.totalOrderAmount + parseInt(product.amount);

            (<HTMLFormElement>document.getElementById("productNameFilterForm")).reset();
            $("#productFilter").modal('hide');
        }
    }

    /*
    *   This method enables/disables payment type drop down
    */
    private paidSomePart(status : any) : void {
        if(status === '0'){
            this.awaitingPayment = true;
        }else {
            this.awaitingPayment = false;
        }
    }

    /*
    *   This method enables/disables amount paid input box
    */
    private populateAmountPaid(status : any) : void {
        if(status === '1'){
            this.partiallyPaid = false;
            this.newOrder.paymentAmount = 0;
        }else if(status === '2') {
            this.partiallyPaid = true;
            this.newOrder.paymentAmount = this.totalOrderAmount;
        }else {
            this.partiallyPaid = true;
        }
    }

    /*
    *   This method displays/hide transaction track id input
    */
    private paymentTypeTrack(paymentType : any) : void {
        if(paymentType === '1' || paymentType === '2'){
            this.transactTrackFlag = true;
        }else {
            this.transactTrackFlag = false;
        }
    }

    /*
    *   This method adds new order
    */
    private addNewOrder() : void {
        if(this.newOrder.orderDate !== undefined && this.newOrder.orderDate !== 'undefined'){
            this.newOrder.orderDate = this.formatDate(this.newOrder.orderDate);
        }

        this.newOrder.productIds = [];

        for(let p of this.productsList){
            /*for(let i=0; i < product.productQuantity; i++){
                this.newOrder.productIds.push(product._id);
            }*/

            let product : any = {};

            product.productId = p.productId;
            product.productName = p.productName;
            product.price = p.price;
            product.discount = p.discount;
            product.quantity = p.productQuantity;

            this.newOrder.productIds.push(product);

            this.newOrder.amount = this.totalOrderAmount;
        }

        this.orderProvider.addNewOrder(this.newOrder).then((res) => {
            if(res.status === 200){
                this.location.back();
            }else if(res.status === 401){
                this.router.navigate(['/login']);
            }else {
                 this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
             }
        });
    }

    private goBack() : void {
        this.location.back();
    }

    private selectCustomer(customer : any) : void {
        this.newOrder.customer = customer._id;
        this.newCustomerName = customer.customerName + ", " + customer.city;
        this.displayCustomerDropDown = false;
    }

    ngOnInit() : void {
        this.getAllCustomers();
        this.getAllProducts();

        this.productProvider.productNameFilter(this.searchTerm$)
            .subscribe((res) => {
                if(res.status === 200) {
                    this.filteredProductsList  = res.product;
                }else if(res.status === 401){
                    this.router.navigate(['/login']);
                }else {
                    this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
                }
            });

        this.customerProvider.applyTextFilter('customerName', this.customerName)
            .subscribe((res) => {
                if(res.status === 200){
                    this.customersList = res.customer;
                }else if(res.status === 401){
                    this.router.navigate(['/login']);
                }else {
                    this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
                }
            });

        this.newOrder.paymentStatus = '-1';
        this.newOrder.paymentType = '-1';
        this.newOrder.orderType = '-1';
        this.newOrder.deliveryType = '-1';
    }
}