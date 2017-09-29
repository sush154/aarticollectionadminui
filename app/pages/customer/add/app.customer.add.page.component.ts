import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

import {ToasterService} from 'angular2-toaster';
import {STATES} from '../../../common/app.states';

import {AppCustomerProvider} from '../../../providers/customer/app.customer.provider';

@Component({
    selector : 'customer-add-page',
    templateUrl : './app/pages/customer/add/app.customer.add.page.component.html',
    styleUrls : ['./app/pages/customer/add/app.customer.add.page.component.css'],
    providers : [AppCustomerProvider]
})

export class CustomerAddPageComponent implements OnInit{
    private statesList : any = STATES;
    private stateSelected : boolean = false;
    private newCustomer : any = {};


    constructor(private customerProvider : AppCustomerProvider,
                private toastrService : ToasterService,
                private location : Location){}

    /*
    *   This method changes the disability mode of city input box based on state filter selected
    */
    selectState(state : any) : void {
        if(state !== '0'){
            this.stateSelected = true;
        }else {
            this.stateSelected = false;
        }
        $("#city").val("");
    }

    /*
    *   This method adds new customer
    */
    addCustomer() : void {
        this.customerProvider.addCustomer(this.newCustomer).then((res) => {
            if(res.status === 200){
                this.location.back();
            }else if(res.status === 201) {
                this.toastrService.pop('error', 'Customer Already Available', 'The Customer Details you are trying to enter are already available.');
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    }


    ngOnInit() : void {
        this.newCustomer.state = "0";
    }
}