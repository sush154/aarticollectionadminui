import {Component, OnInit} from '@angular/core';

import {CommunicationService} from '../../../util/communication/app.communicate.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector : 'customer-details-page',
    templateUrl : './app/pages/customer/details/app.customer.details.page.component.html',
    styleUrls : ['./app/pages/customer/details/app.customer.details.page.component.css'],
    providers : [CommunicationService]
})

export class CustomerDetailsPageComponent implements OnInit{

    private customerObj : any;
    subscription: Subscription;

    constructor(private communicateService : CommunicationService){
        this.subscription = this.communicateService.value$.subscribe((value) => {
            this.customerObj = value;
            //console.log(value);
        });
    }

    ngOnInit() : void {

        //console.log(this.customerObj);
    }
}