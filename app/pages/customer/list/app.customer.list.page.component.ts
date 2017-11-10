import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToasterService} from 'angular2-toaster';

import {AppCustomerProvider} from '../../../providers/customer/app.customer.provider';
import {CommunicationService} from '../../../util/communication/app.communicate.service';

@Component({
    selector : 'customer-list-page',
    templateUrl : './app/pages/customer/list/app.customer.list.page.component.html',
    styleUrls : ['./app/pages/customer/list/app.customer.list.page.component.css'],
    providers : [ToasterService, AppCustomerProvider, CommunicationService]
})

export class CustomerListPageComponent implements OnInit{

    private customersList : any;

    constructor(private router : Router,
                private toastrService : ToasterService,
                private customerProvider : AppCustomerProvider,
                private communicateService : CommunicationService){}

    /*
    *   This method retrieves all the customers list for admin user
    */
    getAllCustomers() : void {
        this.customerProvider.getAllCustomers().then((res) => {
            if(res.status === 200){
                this.customersList = res.customer;
            }else if(res.status === 401){
                this.router.navigate(['/login']);
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        })
    }

    /*
    *   This method navigates to customer details page
    */
    goToDetails(customer : any) : void {
        this.communicateService.populateValue(customer);
        var customerName = customer.firstName + " "+customer.lastName;
        this.router.navigate(['/customers', customerName]);
    }

    ngOnInit() : void {
        this.getAllCustomers();
    }
}