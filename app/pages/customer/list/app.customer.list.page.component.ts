import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToasterService} from 'angular2-toaster';
import { Subject } from 'rxjs/Subject';
import {STATES} from '../../../common/app.states';

import {AppCustomerProvider} from '../../../providers/customer/app.customer.provider';


@Component({
    selector : 'customer-list-page',
    templateUrl : './app/pages/customer/list/app.customer.list.page.component.html',
    styleUrls : ['./app/pages/customer/list/app.customer.list.page.component.css'],
    providers : [ToasterService, AppCustomerProvider]
})

export class CustomerListPageComponent implements OnInit{

    private customersList : any;
    private searchTerm$ = new Subject<string>();
    private cityFilter = new Subject<string>();
    private statesList : any = STATES;
    private loading : boolean = false;

    constructor(private router : Router,
                private toastrService : ToasterService,
                private customerProvider : AppCustomerProvider){}

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
    *   This method retrieves only customers - role customer for admin user
    */
    getOnlyCustomers() : void {
        this.customerProvider.getOnlyCustomers().then((res) => {
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
        this.router.navigate(['/customers', customer.customerId]);
    }

    /*
    *   This method applies advanced filter based on selection
    */
    private applyFilter(filterType : string, filterValue : string) : void {
        this.loading = true;
        this.customerProvider.applyFilter(filterType, filterValue).then(res => {
            this.loading = false;
            if(res.status === 200){
                this.customersList = res.customer;
            }else if(res.status === 401) {
                this.router.navigate(['/login']);
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    }

    /*
    *   This method resets the filter
    */
    private resetFilter() : void {
        this.loading = true;
        $("#filterCollapse").removeClass('show');
        $("#filterState").val('0');
        $("#cityFilter").val('');
        $("#customerName").val('');
        this.getOnlyCustomers();
        this.loading = false;
    }

    ngOnInit() : void {
        this.loading = true;
        this.getOnlyCustomers();

        // Customer name filter
        this.customerProvider.applyTextFilter('customerName',this.searchTerm$)
            .subscribe((res) => {
                if(res.status === 200){
                    this.customersList = res.customer;
                }else {
                    this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
                }
            });

        // City filter
        this.customerProvider.applyTextFilter('city',this.cityFilter)
            .subscribe((res) => {
                if(res.status === 200){
                    this.customersList = res.customer;
                }else {
                    this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
                }
            });

        this.loading = false;
    }
}