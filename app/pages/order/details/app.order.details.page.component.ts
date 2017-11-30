import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common';

import {ToasterService} from 'angular2-toaster';
import {OrderProvider} from '../../../providers/order/app.order.provider';
import {CourierProvider} from '../../../providers/courier/app.courier.provider';
import {IMyDpOptions} from 'mydatepicker';

import {ORDERSTATUS} from '../../../common/app.order.status';
import {PAYMENTSTATUS} from '../../../common/app.payment.status';

@Component({
    selector : 'order-details-page',
    templateUrl : './app/pages/order/details/app.order.details.page.component.html',
    styleUrls : ['./app/pages/order/details/app.order.details.page.component.css'],
    providers : [OrderProvider, CourierProvider]
})

export class OrderDetailsPageComponent implements OnInit{

    private selectedOrderId : string;
    private orderDetails : any = {};
    private customerDetails : any = {};
    private orderStatusList : any;
    private paymentStatusList : any = PAYMENTSTATUS;
    private disabledSaveButton : Boolean = false;
    private disabledAmountPaid : Boolean = false;
    private disabledOrderStatusDD : Boolean = false;
    private disabledPaymentStatusDD : Boolean = false;
    private courierList : any;
    private displayCourierSection : Boolean = false;
    private newCourier : any = {};
    private productsList : any = [];
    private subTotal : any = 0;
    private myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
    };
    private deliveryDateObj : Object;
    private loading : boolean = false;

    constructor(private orderProvider : OrderProvider,
                private toastrService : ToasterService,
                private courierProvider : CourierProvider,
                private currentRoute : ActivatedRoute,
                private location : Location) {}


    /*
    *   This method populates details of selected order
    */
    private getOrderDetails() : void {

        this.currentRoute.params.subscribe(params => {
            this.selectedOrderId = params['id'];
        });

        this.orderProvider.getOrderDetails(this.selectedOrderId).then((res) => {
            if(res.status === 200){
                this.orderDetails = res.order;
                this.customerDetails = res.order.customer;
                this.disableSaveButton();
                this.disableAmountPaidInput();
                this.calculateSubTotal(this.orderDetails);
                //this.sortProductList(this.orderDetails);
                this.displayCourier(this.orderDetails.orderStatus);
                this.populateOrdersList(this.orderDetails.deliveryType);

                if(!this.orderDetails.courier){
                    this.orderDetails.courier = '0';
                }
                if(this.orderDetails.orderStatus === '3' || this.orderDetails.orderStatus === '4'
                    || this.orderDetails.orderStatus === '5'){
                        this.disabledOrderStatusDD = true;
                }

                if(this.orderDetails.paymentStatus === '2' || this.orderDetails.paymentStatus === '3'
                    || this.orderDetails.paymentStatus === '4'){
                        this.disabledPaymentStatusDD = true;
                }
                if(res.order.courier._id !== undefined){
                    this.orderDetails.courier = res.order.courier._id;
                }else {
                    this.orderDetails.courier = '0';
                }

                this.deliveryDateObj = this.setDate(this.orderDetails.deliveryDate);
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    }

    /*
    *   This method calculates sub total
    */
    private calculateSubTotal(orderDetails : any) : void {
        let st : any = 0;

        for(let p of orderDetails.products){
            st = p.quantity * p.price;
            this.subTotal = parseInt(this.subTotal) + parseInt(st);
        }

    }

    /*
    *   This method sorts the products list from order details
    */
    /*sortProductList(orderDetails : any) : void {
        let product : any = {};

        for(let p of orderDetails.products){

            if(this.productsList && this.productsList.length > 0){
                for(let p2 of this.productsList){
                    if(p.productId == p2.productId){
                        p2.quantity = parseInt(p2.quantity) + 1;
                    }
                }
            }else {
                product.productId = p.productId;
                product.productName = p.productName;
                product.category = p.category;
                product.price = p.price;
                product.quantity = 1;
                product.discount = p.discount;
                this.productsList.push(product);
            }
        }
    }*/

    /*
    *   Condition for disabling Save Button
    */
    private disableSaveButton() : void {

        // Check if Order status - Complete, cancelled, pick up and payment status - paid, cancelled, returned
        if((this.orderDetails.orderStatus === '3' || this.orderDetails.orderStatus === '4' || this.orderDetails.orderStatus === '5')
                                                    &&
           (this.orderDetails.paymentStatus === '2' || this.orderDetails.paymentStatus === '3' || this.orderDetails.paymentStatus === '4')){
                this.disabledSaveButton = true;
        }else {
            this.disabledSaveButton = false;
        }

    }

    /*
    *   This method provide condition for disabling amount paid input boxes
    */
    private disableAmountPaidInput() : void {
        if(this.orderDetails.paymentStatus === '2' || this.orderDetails.paymentStatus === '3'
            || this.orderDetails.paymentStatus === '4'){
                this.disabledAmountPaid = true;
            }else {
                this.disabledAmountPaid = false;
            }
    }

    setDate(date : string) : Object {
        var returnedDate = {};
        if(date === 'default'){
            let dt = new Date();
           returnedDate = {date: {
                    year: dt.getFullYear(),
                    month: dt.getMonth() + 1,
                    day: dt.getDate()
                    }}

        }else {
            if(date !== undefined){
                returnedDate = {
                    date : {
                        year : parseInt(date.split("-")[0]),
                        month : parseInt(date.split("-")[1]),
                        day : parseInt(date.split("-")[2])+1
                    }
                }
            }

        }

        return returnedDate;
    }

    formatDate(date : any) : string {

        if(date.formatted){
            return date.formatted;
        }
        else{
            let returnedDate = '';
            if(date.date.month < 10){
                returnedDate = date.date.day + "/0" + date.date.month + "/" + date.date.year;
            }else {
                returnedDate = date.date.day + "/" + date.date.month + "/" + date.date.year;
            }
            return returnedDate;
        }
    }

    /*
    *   This method displays courier section
    */
    private displayCourier(orderStatus : any) : void {

        if(orderStatus === '2' || orderStatus === '3'){
            this.displayCourierSection = true;
        }else {
            this.displayCourierSection = false;
        }
    }

    /*
    *   This method open popup for new courier
    */
    private navigateAddCourier(dropDownValue : any) : void {

        if(dropDownValue === '-1'){
            $("#addCourierModal").modal();
        }
    }

    /*
    *   This method adds new courier
    */
    private addNewCourier() : void {
        this.loading = true;
        this.courierProvider.addNewCourier(this.newCourier).then((res) => {
            this.loading = false;
            if(res.status === 200){
                this.orderDetails.courier = res.Id;
                this.toastrService.pop('success', 'Courier Added', 'New Courier has been added successfully!');
                this.getCourierList();
                (<HTMLFormElement>document.getElementById("addCourierForm")).reset();
                $("#addCourierModal").modal('hide');
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        })
    }

    /*
    *   This method updates order details
    */
    private updateOrderDetails() : void {
        this.loading = true;
        if(Object.keys(this.deliveryDateObj).length !== 0){
            this.orderDetails.deliveryDate = this.formatDate(this.deliveryDateObj);
        }else {
            this.orderDetails.deliveryDate = '';
        }

        this.orderProvider.updateOrder(this.orderDetails).then((res) => {
            if(res.status === 200){
                this.toastrService.pop('success', 'Order Updated', 'Order Details are updated successfully!');
                this.getOrderDetails();
                this.disableSaveButton();
                this.disableAmountPaidInput();
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });

        this.loading = false;
    }

    /*
    *   This method populates couriers list
    */
    getCourierList() : void {
        this.courierProvider.getCouriersList().then((res) => {
            if(res.status === 200){
                this.courierList = res.courier;
            }
        })
    }

    /*
    *   This method populates orders list, based on delivery type
    *   Display Shipped - for couriered
    *   Display Picked Up - for to be picked up
    */
    private populateOrdersList(deliveryType : any) : void {
        let orderL : any = ORDERSTATUS;

        if(deliveryType === '0'){ /* To be picked up*/

            for(let i=0; i < orderL.length; i++){
                if(orderL[i].id === '2'){
                    orderL.splice(i,1);
                }
            }
        }

        if(deliveryType === '1'){     /* To be couriered*/
            let newOrderL : any;
            for(let i=0; i < orderL.length; i++){
                if(orderL[i].id === '5'){
                    orderL.splice(i,1);
                }
            }
        }

        this.orderStatusList = orderL;
    }

    /*
    *   This method prints selected part
    */
    private printInvoice() : void {
        (<any>$("#invoice")).print({
            globalStyles: true
        });
    }

    /*
    *   This method navigates back to previous page
    */
    private goBack() : void {
        this.location.back();
    }

    ngOnInit() : void {
        this.loading = true;
        document.body.scrollTop = 0; /* For Chrome, Safari and Opera*/
        document.documentElement.scrollTop = 0; /* For IE and Firefox*/
        this.getOrderDetails();
        this.getCourierList();
        this.loading = false;
    }
}