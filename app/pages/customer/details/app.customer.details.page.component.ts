import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';
import {ToasterService} from 'angular2-toaster';
import {STATES} from '../../../common/app.states';

import {AppCustomerProvider} from '../../../providers/customer/app.customer.provider';

@Component({
    selector : 'customer-details-page',
    templateUrl : './app/pages/customer/details/app.customer.details.page.component.html',
    styleUrls : ['./app/pages/customer/details/app.customer.details.page.component.css'],
    providers : [AppCustomerProvider]
})

export class CustomerDetailsPageComponent implements OnInit{

    private customerObj : any = {};
    private stateList : any = STATES;
    private updatedCustomer : any = {};
    private loading : boolean = false;

    constructor(private location : Location,
                private currentRoute : ActivatedRoute,
                private toastrService : ToasterService,
                private customerProvider : AppCustomerProvider){}

    private getCustomerDetails() : void {

        let customerId : string;

        this.currentRoute.params.subscribe(params => {
            customerId = params['id'];
        });

        this.customerProvider.getCustomerDetails(customerId).then((res) => {
            if(res.status === 200){
                this.customerObj = res.customer;
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        })
    }

    private openEditCustomerModal(customer : any) : void {
        this.updatedCustomer._id = this.customerObj._id;
        this.updatedCustomer.customerName = this.customerObj.customerName;
        this.updatedCustomer.address = this.customerObj.address;
        this.updatedCustomer.state = this.customerObj.state;
        this.updatedCustomer.city = this.customerObj.city;
        this.updatedCustomer.pincode = this.customerObj.pincode;
        this.updatedCustomer.email = this.customerObj.email;
        this.updatedCustomer.phoneNo = this.customerObj.phoneNo;
    }

    private goBack() : void {
        this.location.back();
    }

    private updateCustomer(updatedCust : any) : void {
        this.loading = true;
        this.customerProvider.updateCustomer(updatedCust).then(res => {
            this.loading = false;
            if(res.status === 200){
                this.toastrService.pop('success', 'Update Successful', 'Customer Details are updated successfully !');
                $('#editCustomerDetails').modal('hide');
                this.getCustomerDetails();
            }else if(res.status === 201) {
                this.toastrService.pop('error', 'Email already used', 'Email address provided is already in use. Please new Email !');
                $('#email').addClass('is-invalid');
            }
            else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        })
    }

    private removeInvalidCSS() : void {
        if($('#email').hasClass('is-invalid')){
            $('#email').removeClass('is-invalid');
        }
    }

    ngOnInit() : void {
        this.loading = true;
        this.getCustomerDetails();
        this.loading = false;
    }
}